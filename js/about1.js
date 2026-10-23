/* =========================================================
   KNOW MORE
   QUOTE → FUTURE / FULL STACK DEVELOPER → BACK
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       ELEMENTS
    ================================================= */

    const loader = document.getElementById("aboutLoader");
    const page = document.getElementById("aboutPage");
    const backButton = document.getElementById("backButton");


    /* =================================================
       QUOTE → FUTURE
    ================================================= */

    function startAbout() {

        if (!loader || !page) {
            return;
        }

        setTimeout(() => {

            loader.classList.add("loader-hidden");

            page.classList.add("page-visible");

        }, 2600);

    }


    /* =================================================
       BACK TO PORTFOLIO
    ================================================= */

    function goBack() {

        if (
            document.body.classList.contains("page-exiting")
        ) {
            return;
        }

        document.body.classList.add("page-exiting");


        setTimeout(() => {

            if (
                document.referrer &&
                document.referrer.startsWith(
                    window.location.origin
                ) &&
                window.history.length > 1
            ) {

                window.history.back();

            } else {

                window.location.href = "../index.html";

            }

        }, 700);

    }


    /* =================================================
       BACK BUTTON
    ================================================= */

    if (backButton) {

        backButton.addEventListener(
            "click",
            goBack
        );

    }


    /* =================================================
       ESCAPE = BACK
    ================================================= */

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Escape") {

                goBack();

            }

        }
    );


    /* =================================================
       START
    ================================================= */

    startAbout();

});

/* =========================================================
   KNOW MORE — EDITORIAL SCROLL REVEAL
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    const section = document.getElementById("knowMoreEditorial");
    if (!section) return;

    const cards = section.querySelectorAll(".editorial-card");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
        cards.forEach(card => card.classList.add("is-revealed"));
        return;
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-revealed");
                currentObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: "0px 0px -30px 0px" });

    cards.forEach(card => observer.observe(card));
});
