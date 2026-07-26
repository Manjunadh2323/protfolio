// =========================================
// HERO PARALLAX
// =========================================

const hero = document.querySelector(".hero");
const heroBg = document.querySelector(".hero-bg");

if (hero && heroBg) {

    hero.addEventListener("mousemove", (e) => {

        const rect = hero.getBoundingClientRect();

        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        heroBg.style.transform =
            `translate(${x * 18}px, ${y * 18}px) scale(1.08)`;

    });

    hero.addEventListener("mouseleave", () => {

        heroBg.style.transform =
            "translate(0px, 0px) scale(1.05)";

    });

}