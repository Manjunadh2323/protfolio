/* =========================================
   ABOUT — SMOOTH MODERN SCROLL
========================================= */

(function () {

    function initAbout() {

        const about = document.querySelector("#about");

        if (!about || about.dataset.aboutReady === "true") {
            return;
        }

        about.dataset.aboutReady = "true";


        const visual =
            about.querySelector(".about-visual");

        const image =
            about.querySelector(".about-image");

        const label =
            about.querySelector(".about-section-label");

        const info =
            about.querySelector(".about-info");

        const headlineMask =
            about.querySelector(".about-reveal-mask");

        const descriptionMask =
            about.querySelector(".about-description-mask");

        const headline =
            about.querySelector(".about-intro-main");

        const description =
            about.querySelector(".about-intro-description");

        const button =
            about.querySelector(".about-more");

        const backgroundOne =
            about.querySelector(".about-bg-word-one");

        const backgroundTwo =
            about.querySelector(".about-bg-word-two");

        const welcome =
            about.querySelector("#about-welcome");


        if (
            !visual ||
            !image ||
            !label ||
            !info ||
            !headlineMask ||
            !descriptionMask ||
            !headline ||
            !description ||
            !button ||
            !backgroundOne ||
            !backgroundTwo
        ) {
            console.error("ABOUT: required elements missing");
            return;
        }


        /* =====================================
           KNOW MORE
        ===================================== */

        if (welcome) {

            button.addEventListener("click", function (event) {

                event.preventDefault();

                welcome.classList.add("is-open");

                welcome.setAttribute(
                    "aria-hidden",
                    "false"
                );

            });

        }


        /* =====================================
           GSAP CHECK
        ===================================== */

        if (!window.gsap || !window.ScrollTrigger) {

            console.error(
                "ABOUT: GSAP or ScrollTrigger missing"
            );

            return;
        }

        gsap.registerPlugin(ScrollTrigger);


        const reduceMotion =
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;


        if (reduceMotion) {

            gsap.set(
                [
                    visual,
                    label,
                    button
                ],
                {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1
                }
            );

            gsap.set(
                [
                    headlineMask,
                    descriptionMask
                ],
                {
                    clipPath:
                        "inset(0% 0% 0% 0%)"
                }
            );

            gsap.set(
                [
                    headline,
                    description
                ],
                {
                    y: 0,
                    opacity: 1
                }
            );

            return;
        }


        /* =====================================
           INITIAL POSITION
        ===================================== */

        gsap.set(backgroundOne, {
            opacity: 0,
            x: -25
        });

        gsap.set(backgroundTwo, {
            opacity: 0,
            x: 25
        });

        gsap.set(visual, {
            opacity: 0,
            y: 28,
            scale: .97
        });

        gsap.set(label, {
            opacity: 0,
            y: 12
        });

        gsap.set(headlineMask, {
            clipPath:
                "inset(100% 0% 0% 0%)"
        });

        gsap.set(headline, {
            y: 24
        });

        gsap.set(descriptionMask, {
            clipPath:
                "inset(100% 0% 0% 0%)"
        });

        gsap.set(description, {
            y: 18,
            opacity: 0
        });

        gsap.set(button, {
            opacity: 0,
            y: 12
        });


        /* =====================================
           MAIN SCROLL ANIMATION
        ===================================== */

        const timeline = gsap.timeline({

            scrollTrigger: {

                trigger: about,

                start: "top bottom",

                end: "bottom top",

                scrub: 0.8,

                invalidateOnRefresh: true

            }

        });


        /* =====================================
           BACKGROUND
        ===================================== */

        timeline.to(
            backgroundOne,
            {
                opacity: .75,
                x: 0,
                duration: .12,
                ease: "power2.out"
            },
            0
        );


        timeline.to(
            backgroundTwo,
            {
                opacity: .55,
                x: 0,
                duration: .12,
                ease: "power2.out"
            },
            .08
        );


        /* =====================================
           IMAGE
        ===================================== */

        timeline.to(
            visual,
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: .18,
                ease: "power3.out"
            },
            .04
        );


        /* =====================================
           LABEL
        ===================================== */

        timeline.to(
            label,
            {
                opacity: 1,
                y: 0,
                duration: .12,
                ease: "power2.out"
            },
            .12
        );


        /* =====================================
           HEADING
        ===================================== */

        timeline.to(
            headlineMask,
            {
                clipPath:
                    "inset(0% 0% 0% 0%)",

                duration: .14,

                ease: "power3.out"
            },
            .17
        );


        timeline.to(
            headline,
            {
                y: 0,

                duration: .14,

                ease: "power3.out"
            },
            .17
        );


        /* =====================================
           DESCRIPTION
        ===================================== */

        timeline.to(
            descriptionMask,
            {
                clipPath:
                    "inset(0% 0% 0% 0%)",

                duration: .14,

                ease: "power3.out"
            },
            .28
        );


        timeline.to(
            description,
            {
                y: 0,

                opacity: 1,

                duration: .14,

                ease: "power3.out"
            },
            .28
        );


        /* =====================================
           KNOW MORE
        ===================================== */

        timeline.to(
            button,
            {
                opacity: 1,

                y: 0,

                duration: .12,

                ease: "power2.out"
            },
            .38
        );


        /* =====================================
           VERY SHORT HOLD
           Keeps content readable without
           creating a huge empty section.
        ===================================== */

        timeline.to(
            {},
            {
                duration: .28
            }
        );


        /* =====================================
           SOFT EXIT
        ===================================== */

        timeline.to(
            visual,
            {
                y: -45,

                opacity: .25,

                scale: .985,

                duration: .12,

                ease: "power2.inOut"
            }
        );


        timeline.to(
            info,
            {
                y: -35,

                opacity: .25,

                duration: .12,

                ease: "power2.inOut"
            },
            "<"
        );


        timeline.to(
            label,
            {
                y: -25,

                opacity: 0,

                duration: .08,

                ease: "power2.in"
            },
            "<"
        );


        /* =====================================
           BACKGROUND EXIT
        ===================================== */

        timeline.to(
            backgroundOne,
            {
                y: -45,

                x: -20,

                opacity: 0,

                duration: .10,

                ease: "power2.inOut"
            },
            "<"
        );


        timeline.to(
            backgroundTwo,
            {
                y: -35,

                x: 20,

                opacity: 0,

                duration: .10,

                ease: "power2.inOut"
            },
            "<"
        );


        /* =====================================
           FINAL FADE
        ===================================== */

        timeline.to(
            visual,
            {
                y: -70,

                opacity: 0,

                duration: .10,

                ease: "power2.in"
            }
        );


        timeline.to(
            info,
            {
                y: -65,

                opacity: 0,

                duration: .10,

                ease: "power2.in"
            },
            "<"
        );


        /* =====================================
           IMAGE MICRO PARALLAX
        ===================================== */

        gsap.to(image, {

            y: -7,

            scale: 1.015,

            ease: "none",

            scrollTrigger: {

                trigger: about,

                start: "top bottom",

                end: "bottom top",

                scrub: 2.5

            }

        });


        /* =====================================
           BACKGROUND MICRO MOVEMENT
        ===================================== */

        gsap.to(backgroundOne, {

            x: -18,

            ease: "none",

            scrollTrigger: {

                trigger: about,

                start: "top bottom",

                end: "bottom top",

                scrub: 3

            }

        });


        gsap.to(backgroundTwo, {

            x: 18,

            ease: "none",

            scrollTrigger: {

                trigger: about,

                start: "top bottom",

                end: "bottom top",

                scrub: 3

            }

        });


        /* =====================================
           IMAGE LOAD
        ===================================== */

        if (!image.complete) {

            image.addEventListener(
                "load",
                function () {

                    ScrollTrigger.refresh();

                },
                {
                    once: true
                }
            );

        }


        setTimeout(function () {

            ScrollTrigger.refresh();

        }, 250);

    }


    /* =========================================
       INITIALIZE
    ========================================= */

    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            initAbout,
            {
                once: true
            }
        );

    } else {

        initAbout();

    }


    /* =========================================
       DYNAMIC SECTION LOADER
    ========================================= */

    document.addEventListener(
        "portfolioSectionsLoaded",
        initAbout
    );

})();