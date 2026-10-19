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

    // Targeted .about-cv-image directly instead of the 100%-width container!
    const selectors = [
        ".skill-card",
        ".profile-avatar-container",
        ".intro-card",
        ".about-info-card",
        ".about-download-btn",
        ".about-cv-image",
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

    // Capture true natural dimensions
    const unzoomedSizes = new Map();
    allElements.forEach((el) => {
        unzoomedSizes.set(el, {
            width: el.offsetWidth,
            height: el.offsetHeight,
        });
    });

    window.scrollTo({ top: 0, behavior: "smooth" });

    const mainArea = document.querySelector(".main-content-area");
    if (mainArea) {
        mainArea.classList.add("bloop-zoomed");
    }

    await new Promise((resolve) => setTimeout(resolve, 600));

    const { Engine, Runner, Bodies, Composite, Mouse, MouseConstraint, Events } = Matter;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

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

    engine = Engine.create();
    engine.gravity.y = 1.25;
    engine.positionIterations = 10;
    engine.velocityIterations = 10;

    const bodies = [];
    hiddenElements = [];
    const usableHeight = screenHeight - navbarHeight;

    allElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;

        const size = unzoomedSizes.get(el) || { width: rect.width * 2, height: rect.height * 2 };
        const isRound = el.classList.contains("profile-avatar-container") || el.classList.contains("contact-link");

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

        clone.style.borderRadius = isRound ? "50%" : "22px";
        clone.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.35)";

        // Prevent native browser image drag
        if (clone.tagName === "IMG") {
            clone.setAttribute("draggable", "false");
        }

        const startTop = rect.top - navbarHeight;
        const centerX = rect.left + rect.width / 2;
        const centerY = startTop + rect.height / 2;

        clone.style.transform = `translate3d(${centerX - size.width / 2}px, ${centerY - size.height / 2}px, 0) scale(0.5)`;

        // Avatar hover bubble
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

        const parentLink = el.closest("a");
        if (parentLink) {
            clone.setAttribute("data-href", parentLink.getAttribute("href"));
        }

        overlay.appendChild(clone);
        el.style.visibility = "hidden";
        hiddenElements.push(el);

        const halfWidth = size.width * 0.5;
        const halfHeight = size.height * 0.5;

        let body;
        if (isRound) {
            body = Bodies.circle(centerX, centerY, halfWidth / 2, {
                restitution: 0.70,
                friction: 0.05,
                frictionAir: 0.008,
                density: 0.002,
            });
        } else {
            body = Bodies.rectangle(centerX, centerY, halfWidth, halfHeight, {
                chamfer: { radius: 14 },
                restitution: 0.65,
                friction: 0.05,
                frictionAir: 0.008,
                density: 0.002,
            });
        }

        body.stretchX = 1.0;
        body.stretchY = 1.0;
        body.velStretchX = 0;
        body.velStretchY = 0;

        body.domElement = clone;
        body.origWidth = size.width;
        body.origHeight = size.height;
        bodies.push(body);
    });

    // Boundaries
    const wallThick = 200;
    const ground = Bodies.rectangle(screenWidth / 2, usableHeight + wallThick / 2, screenWidth * 2, wallThick, {
        isStatic: true,
        restitution: 0.45,
        friction: 0.18,
    });
    const ceiling = Bodies.rectangle(screenWidth / 2, -wallThick / 2, screenWidth * 2, wallThick, { isStatic: true, restitution: 0.5 });
    const leftWall = Bodies.rectangle(-wallThick / 2, usableHeight / 2, wallThick, usableHeight * 2, { isStatic: true, restitution: 0.5, friction: 0.08 });
    const rightWall = Bodies.rectangle(screenWidth + wallThick / 2, usableHeight / 2, wallThick, usableHeight * 2, { isStatic: true, restitution: 0.5, friction: 0.08 });

    Composite.add(engine.world, [...bodies, ground, ceiling, leftWall, rightWall]);

    // ==========================================
    // IMPACT COLLISION
    // ==========================================
    Events.on(engine, "collisionStart", (event) => {
        event.pairs.forEach((pair) => {
            const { bodyA, bodyB } = pair;
            const relVelX = bodyA.velocity.x - bodyB.velocity.x;
            const relVelY = bodyA.velocity.y - bodyB.velocity.y;
            const impactSpeed = Math.hypot(relVelX, relVelY);

            if (impactSpeed > 1.2) {
                [bodyA, bodyB].forEach((b) => {
                    if (!b.isStatic && b.domElement) {
                        const sink = Math.min(0.34, impactSpeed * 0.032);
                        b.stretchY = Math.max(0.66, 1 - sink);
                        b.stretchX = Math.min(1.34, 1 + sink * 0.75);
                        b.velStretchY -= sink * 0.18;
                    }
                });
            }

            if (!bodyA.isStatic && !bodyB.isStatic && impactSpeed > 1.2) {
                const push = Math.min(0.0038, impactSpeed * 0.0009);
                const nx = pair.collision.normal.x;

                Matter.Body.applyForce(bodyA, bodyA.position, {
                    x: -nx * push * bodyA.mass,
                    y: 0,
                });

                Matter.Body.applyForce(bodyB, bodyB.position, {
                    x: nx * push * bodyB.mass,
                    y: 0,
                });
            }
        });
    });

    // Mouse support
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

            const speed = Math.hypot(event.body.velocity.x, event.body.velocity.y);
            if (speed > 4) {
                event.body.stretchX = 1 + Math.min(0.25, speed * 0.018);
                event.body.stretchY = 1 - Math.min(0.2, speed * 0.015);
            }

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

    // Physics Runner
    runner = Runner.create();
    Runner.run(runner, engine);

    // ==========================================
    // SPRING-DAMPER LOOP
    // ==========================================
    Events.on(runner, "afterUpdate", () => {
        const stiffness = 0.12;
        const damping = 0.86;

        bodies.forEach((body) => {
            const { x, y } = body.position;
            const angle = body.angle;
            const el = body.domElement;
            const w = body.origWidth;
            const h = body.origHeight;

            const speed = Math.hypot(body.velocity.x, body.velocity.y);

            body.velStretchX += (1.0 - body.stretchX) * stiffness;
            body.velStretchX *= damping;
            body.stretchX += body.velStretchX;

            body.velStretchY += (1.0 - body.stretchY) * stiffness;
            body.velStretchY *= damping;
            body.stretchY += body.velStretchY;

            // Deadzone to stop micro-vibrating
            if (speed < 0.35 && Math.abs(body.stretchX - 1.0) < 0.01 && Math.abs(body.stretchY - 1.0) < 0.01) {
                body.stretchX = 1.0;
                body.stretchY = 1.0;
                body.velStretchX = 0;
                body.velStretchY = 0;
            }

            const finalScaleX = 0.5 * body.stretchX;
            const finalScaleY = 0.5 * body.stretchY;

            el.style.transform = `translate3d(${x - w / 2}px, ${y - h / 2}px, 0) rotate(${angle}rad) scale(${finalScaleX}, ${finalScaleY})`;
        });
    });

    isBlooped = true;
    isTransitioning = false;
    return true;
}