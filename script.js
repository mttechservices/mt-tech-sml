// ============================
// MT TECH SERVICES
// Clean Interaction Script
// ============================

document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // COUNTER ANIMATION
    // =========================

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const target = parseInt(counter.dataset.target);
        let current = 0;

        const step = Math.max(1, Math.floor(target / 100));

        const update = () => {

            current += step;

            if (current >= target) {
                counter.innerText = target;
            } else {
                counter.innerText = current;
                requestAnimationFrame(() => setTimeout(update, 20));
            }

        };

        update();
    });

    // =========================
    // SCROLL REVEAL (FIXED)
    // =========================

    const revealElements = document.querySelectorAll(
        ".service-card, .stat-card, .hero-content, .glass-panel"
    );

    const reveal = () => {

        const trigger = window.innerHeight * 0.85;

        revealElements.forEach(el => {

            const top = el.getBoundingClientRect().top;

            if (top < trigger) {
                el.classList.add("show");
            }

        });

    };

    window.addEventListener("scroll", reveal);
    reveal();

    // =========================
    // NAVBAR SCROLL EFFECT (CLEAN)
    // =========================

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (!navbar) return;

        navbar.classList.toggle("scrolled", window.scrollY > 50);

    });

    // =========================
    // HERO FADE (SOFTENED)
    // =========================

    const hero = document.querySelector(".hero");

    window.addEventListener("scroll", () => {

        if (!hero) return;

        const opacity = Math.max(0, 1 - window.scrollY / 900);

        hero.style.opacity = opacity;

    });

    // =========================
    // GLOW MOUSE EFFECT (SMOOTHER)
    // =========================

    const glow1 = document.querySelector(".glow-1");
    const glow2 = document.querySelector(".glow-2");

    document.addEventListener("mousemove", (e) => {

        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        if (glow1) {
            glow1.style.transform = `translate(${x * 25}px, ${y * 25}px)`;
        }

        if (glow2) {
            glow2.style.transform = `translate(${-x * 25}px, ${-y * 25}px)`;
        }

    });

    // =========================
    // BUTTON HOVER STATE (KEPT CLEAN)
    // =========================

    const buttons = document.querySelectorAll(".book-btn, .primary-btn");

    buttons.forEach(btn => {

        btn.addEventListener("mousemove", (e) => {

            const rect = btn.getBoundingClientRect();

            btn.style.setProperty("--x", `${e.clientX - rect.left}px`);
            btn.style.setProperty("--y", `${e.clientY - rect.top}px`);

        });

    });

    console.log("MT Tech Services Loaded");
});
