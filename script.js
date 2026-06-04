document.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const target = parseInt(counter.dataset.target);

        if (isNaN(target)) return;

        let current = 0;

        const step = Math.max(1, Math.floor(target / 80));

        const update = () => {

            current += step;

            if (current >= target) {
                counter.innerText = target;
            } else {
                counter.innerText = current;
                requestAnimationFrame(() => setTimeout(update, 15));
            }

        };

        update();

    });

});
