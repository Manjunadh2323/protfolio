document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".story-card");
    const image = document.querySelector(".childhood-image");
    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
        cards.forEach(card => card.classList.add("is-revealed"));
        return;
    }

    // Reveal story cards as they enter the screen.
    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-revealed");
                    obs.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: "0px 0px -35px 0px"
        });

        cards.forEach(card => observer.observe(card));
    } else {
        cards.forEach(card => card.classList.add("is-revealed"));
    }

    // Gentle image parallax while scrolling.
    if (image) {
        let ticking = false;

        function updateParallax() {
            const rect = image.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            if (rect.bottom > 0 && rect.top < viewportHeight) {
                const progress =
                    (viewportHeight - rect.top) /
                    (viewportHeight + rect.height);

                const movement = (progress - 0.5) * 22;

                image.style.transform =
                    `scale(1.08) translateY(${movement}px)`;
            }

            ticking = false;
        }

        window.addEventListener("scroll", () => {
            if (!ticking) {
                window.requestAnimationFrame(updateParallax);
                ticking = true;
            }
        }, { passive: true });

        updateParallax();
    }
});