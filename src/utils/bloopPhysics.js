import Matter from "matter-js";

let engine = null;
let runner = null;
let overlay = null;
let hiddenElements = [];
let isBlooped = false;

export function toggleBloop() {
    if (isBlooped) {
        resetBloop();
        return false;
    } else {
        startBloop();
        return true;
    }
}

function startBloop() {
    const { Engine, Runner, Bodies, Composite, Mouse, MouseConstraint, Events } = Matter;

    const selectors = [
        ".skill-card",
        ".profile-avatar-container",
        ".intro-card",
        ".about-info-card",
        ".about-download-btn",
        ".contact-info-card",
        ".contact-link",
        ".filter-btn",
        ".project-showcase-container"
    ].join(", ");

    const allElements = Array.from(document.querySelectorAll(selectors));
    if (allElements.length === 0) return;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const visibleElements = allElements.filter((el) => {
        const rect = el.getBoundingClientRect();
        return rect.bottom > 0 && rect.top < screenHeight && rect.width > 0 && rect.height > 0;
    });

    const targetElements = visibleElements.length > 0 ? visibleElements : allElements.slice(0, 8);

    // 1. Create sandbox below the navbar (top: 75px)
    const navbar = document.querySelector(".navbar-header");
    const navbarHeight = navbar ? navbar.offsetHeight : 70;

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

    // 2. Setup Matter Engine
    engine = Engine.create();
    engine.gravity.y = 1.1;
    engine.positionIterations = 10;
    engine.velocityIterations = 10;

    const bodies = [];
    hiddenElements = [];
    const usableHeight = screenHeight - navbarHeight;

    targetElements.forEach((el) => {
        const rect = el.getBoundingClientRect();

        // Clone the element into the sandbox
        const clone = el.cloneNode(true);
        clone.style.position = "absolute";
        clone.style.left = "0px";
        clone.style.top = "0px";
        clone.style.width = `${rect.width}px`;
        clone.style.height = `${rect.height}px`;
        clone.style.margin = "0";
        clone.style.transition = "none";
        clone.style.cursor = "grab";
        clone.style.userSelect = "none";

        // Offset relative to sandbox top
        const startTop = rect.top - navbarHeight;
        clone.style.transform = `translate(${rect.left}px, ${startTop}px)`;

        // If it's the avatar, append the speech bubble for hover
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

        // Handle clicking links while blooped
        const parentLink = el.closest("a");
        if (parentLink) {
            clone.setAttribute("data-href", parentLink.getAttribute("href"));
        }

        overlay.appendChild(clone);

        el.style.visibility = "hidden";
        hiddenElements.push(el);

        const centerX = rect.left + rect.width / 2;
        const centerY = startTop + rect.height / 2;
        const isRound = el.classList.contains("profile-avatar-container") || el.classList.contains("contact-link");

        let body;
        if (isRound) {
            body = Bodies.circle(centerX, centerY, rect.width / 2, {
                restitution: 0.85,
                friction: 0.05,
                density: 0.002,
            });
        } else {
            body = Bodies.rectangle(centerX, centerY, rect.width, rect.height, {
                chamfer: { radius: 18 },
                restitution: 0.8,
                friction: 0.08,
                density: 0.002,
            });
        }

        Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.06);

        body.domElement = clone;
        bodies.push(body);
    });

    // 3. Walls
    const wallThick = 200;
    const wallOpts = { isStatic: true, restitution: 0.85 };

    const ground = Bodies.rectangle(screenWidth / 2, usableHeight + wallThick / 2, screenWidth * 2, wallThick, wallOpts);
    const ceiling = Bodies.rectangle(screenWidth / 2, -wallThick / 2, screenWidth * 2, wallThick, wallOpts);
    const leftWall = Bodies.rectangle(-wallThick / 2, usableHeight / 2, wallThick, usableHeight * 2, wallOpts);
    const rightWall = Bodies.rectangle(screenWidth + wallThick / 2, usableHeight / 2, wallThick, usableHeight * 2, wallOpts);

    Composite.add(engine.world, [...bodies, ground, ceiling, leftWall, rightWall]);

    // 4. Mouse support (with scroll-wheel hijack removed)
    const mouse = Mouse.create(overlay);
    
    // Unbind Matter's wheel listener so normal scrolling is NOT blocked
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

    // Track dragging to distinguish between a toss vs a click on a link
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
                // If moved less than 5px, it was a click, not a drag!
                if (dist < 5) {
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

    // 5. Physics runner
    runner = Runner.create();
    Runner.run(runner, engine);

    Events.on(runner, "afterUpdate", () => {
        bodies.forEach((body) => {
            const { x, y } = body.position;
            const angle = body.angle;
            const el = body.domElement;
            const width = parseFloat(el.style.width);
            const height = parseFloat(el.style.height);

            el.style.transform = `translate(${x - width / 2}px, ${y - height / 2}px) rotate(${angle}rad)`;
        });
    });

    isBlooped = true;
}

function resetBloop() {
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
    isBlooped = false;
}