import Matter from "matter-js";

let engine = null;
let runner = null;
let overlay = null;
let hiddenElements = [];
let isBlooped = false;
let isTransitioning = false;

export async function toggleBloop() {
    if (isTransitioning) return isBlooped;

    if (isBlooped) {
        resetBloop();
        return false;
    } else {
        const started = await startBloop();
        return started;
    }
}

export function resetBloop() {
    if (runner) Matter.Runner.stop(runner);
    if (engine) Matter.Engine.clear(engine);

    if (overlay && overlay.parentNode) {
        overlay.parentNode.removeChild(overlay);
        overlay = null;
    }

    hiddenElements.forEach((el) => {
        el.style.visibility = "";
    });
    hiddenElements = [];

    const mainArea = document.querySelector(".main-content-area");
    if (mainArea) {
        mainArea.classList.remove("bloop-zoomed");
    }

    isBlooped = false;
    isTransitioning = false;
}

async function startBloop() {
    isTransitioning = true;

    // Added more selectors so more items fall on About, Contact, and Projects!
    const selectors = [
        ".skill-card",
        ".profile-avatar-container",
        ".intro-card",
        ".about-info-card",
        ".about-download-btn",
        ".about-cv-image-container", // CV Image drops!
        ".contact-info-card",
        ".contact-link",
        ".filter-btn",
        ".project-showcase-container",
        ".notfound-card"
    ].join(", ");

    const allElements = Array.from(document.querySelectorAll(selectors));
    if (allElements.length === 0) {
        isTransitioning = false;
        return false;
    }

    // 1. Capture unzoomed natural dimensions before the camera scale
    const unzoomedSizes = new Map();
    allElements.forEach((el) => {
        unzoomedSizes.set(el, {
            width: el.offsetWidth,
            height: el.offsetHeight,
        });
    });

    // 2. Smoothly scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });

    // 3. Trigger camera zoom to 50%
    const mainArea = document.querySelector(".main-content-area");
    if (mainArea) {
        mainArea.classList.add("bloop-zoomed");
    }

    // Wait 0.6s for the zoom transition to complete
    await new Promise((resolve) => setTimeout(resolve, 600));

    const { Engine, Runner, Bodies, Composite, Mouse, MouseConstraint, Events } = Matter;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const navbar = document.querySelector(".navbar-header");
    const navbarHeight = navbar ? navbar.offsetHeight : 70;

    // 4. Create sandbox overlay
    overlay = document.createElement("div");
    overlay.id = "bloop-sandbox";
    overlay.style.position = "fixed";
    overlay.style.top = `${navbarHeight}px`;
    overlay.style.left = "0";
    overlay.style.width = "100vw";
    overlay.style.height = `${screenHeight - navbarHeight}px`;
    overlay.style.zIndex = "9999";
    overlay.style.overflow = "hidden";
    overlay.style.pointerEvents = "auto";
    document.body.appendChild(overlay);

    engine = Engine.create();
    engine.gravity.y = 1.1;
    engine.positionIterations = 10;
    engine.velocityIterations = 10;

    const bodies = [];
    hiddenElements = [];
    const usableHeight = screenHeight - navbarHeight;

    allElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;

        const size = unzoomedSizes.get(el) || { width: rect.width * 2, height: rect.height * 2 };

        const clone = el.cloneNode(true);
        clone.style.position = "absolute";
        clone.style.left = "0px";
        clone.style.top = "0px";
        clone.style.width = `${size.width}px`;
        clone.style.height = `${size.height}px`;
        clone.style.margin = "0";
        clone.style.transition = "none";
        clone.style.cursor = "grab";
        clone.style.userSelect = "none";
        clone.style.transformOrigin = "center center";

        const startTop = rect.top - navbarHeight;
        const centerX = rect.left + rect.width / 2;
        const centerY = startTop + rect.height / 2;

        clone.style.transform = `translate3d(${centerX - size.width / 2}px, ${centerY - size.height / 2}px, 0) scale(0.5)`;

        // Avatar hover bubble support
        if (el.classList.contains("profile-avatar-container")) {
            const bubble = document.createElement("img");
            bubble.src = "/Portfolio/overmij_bubbleright.png";
            bubble.alt = "Spreekt";
            bubble.className = "profile-bubble";
            bubble.style.display = "none";
            clone.appendChild(bubble);

            clone.addEventListener("mouseenter", () => { bubble.style.display = "block"; });
            clone.addEventListener("mouseleave", () => { bubble.style.display = "none"; });
        }

        // Keep links clickable
        const parentLink = el.closest("a");
        if (parentLink) {
            clone.setAttribute("data-href", parentLink.getAttribute("href"));
        }

        overlay.appendChild(clone);

        el.style.visibility = "hidden";
        hiddenElements.push(el);

        const halfWidth = size.width * 0.5;
        const halfHeight = size.height * 0.5;
        const isRound = el.classList.contains("profile-avatar-container") || el.classList.contains("contact-link");

        let body;
        if (isRound) {
            body = Bodies.circle(centerX, centerY, halfWidth / 2, {
                restitution: 0.88,
                friction: 0.05,
                density: 0.002,
            });
        } else {
            body = Bodies.rectangle(centerX, centerY, halfWidth, halfHeight, {
                chamfer: { radius: 10 },
                restitution: 0.82,
                friction: 0.08,
                density: 0.002,
            });
        }

        Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.06);

        body.domElement = clone;
        body.origWidth = size.width;
        body.origHeight = size.height;
        bodies.push(body);
    });

    // 5. Boundaries
    const wallThick = 200;
    const wallOpts = { isStatic: true, restitution: 0.85 };

    const ground = Bodies.rectangle(screenWidth / 2, usableHeight + wallThick / 2, screenWidth * 2, wallThick, wallOpts);
    const ceiling = Bodies.rectangle(screenWidth / 2, -wallThick / 2, screenWidth * 2, wallThick, wallOpts);
    const leftWall = Bodies.rectangle(-wallThick / 2, usableHeight / 2, wallThick, usableHeight * 2, wallOpts);
    const rightWall = Bodies.rectangle(screenWidth + wallThick / 2, usableHeight / 2, wallThick, usableHeight * 2, wallOpts);

    Composite.add(engine.world, [...bodies, ground, ceiling, leftWall, rightWall]);

    // 6. Mouse dragging
    const mouse = Mouse.create(overlay);
    mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
    mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

    const mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.25,
            render: { visible: false },
        },
    });
    Composite.add(engine.world, mouseConstraint);

    let dragStartPos = null;
    Events.on(mouseConstraint, "startdrag", (event) => {
        dragStartPos = { x: event.mouse.position.x, y: event.mouse.position.y };
        if (event.body && event.body.domElement) {
            event.body.domElement.style.cursor = "grabbing";
        }
    });

    Events.on(mouseConstraint, "enddrag", (event) => {
        if (event.body && event.body.domElement) {
            event.body.domElement.style.cursor = "grab";

            if (dragStartPos) {
                const dist = Math.hypot(
                    event.mouse.position.x - dragStartPos.x,
                    event.mouse.position.y - dragStartPos.y
                );
                if (dist < 6) {
                    const href = event.body.domElement.getAttribute("data-href");
                    if (href) {
                        resetBloop();
                        window.location.hash = href.replace(/^#/, "");
                    }
                }
            }
        }
        dragStartPos = null;
    });

    // 7. Physics loop (Locks elements to half size scale(0.5) while bouncing)
    runner = Runner.create();
    Runner.run(runner, engine);

    Events.on(runner, "afterUpdate", () => {
        bodies.forEach((body) => {
            const { x, y } = body.position;
            const angle = body.angle;
            const el = body.domElement;
            const origW = body.origWidth;
            const origH = body.origHeight;

            el.style.transform = `translate3d(${x - origW / 2}px, ${y - origH / 2}px, 0) rotate(${angle}rad) scale(0.5)`;
        });
    });

    isBlooped = true;
    isTransitioning = false;
    return true;
}