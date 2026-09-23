/* =========================================
   HERO → QUOTE
   MASTER SCENE

   HERO TRANSFORMATION PRESERVED
========================================= */

document.addEventListener(
    "portfolioSectionsLoaded",
    () => {

        const scene =
            document.querySelector(
                ".scene-transition"
            );

        const hero =
            document.querySelector(
                ".hero"
            );

        const heroBg =
            document.querySelector(
                ".hero-bg"
            );

        const heroContent =
            document.querySelector(
                ".hero-content"
            );

        const quoteSection =
            document.querySelector(
                "#quote-section"
            );

        const quote =
            document.querySelector(
                ".quote"
            );

        const quoteLines =
            document.querySelectorAll(
                ".quote-line span"
            );

        const signature =
            document.querySelector(
                ".quote-signature"
            );


        /* =====================================
           DEBUG
        ===================================== */

        console.log(
            "SCENE:",
            scene
        );

        console.log(
            "HERO:",
            hero
        );

        console.log(
            "QUOTE SECTION:",
            quoteSection
        );

        console.log(
            "QUOTE:",
            quote
        );

        console.log(
            "QUOTE LINES:",
            quoteLines.length
        );


        /* =====================================
           CHECK
        ===================================== */

        if (
            !scene ||
            !hero ||
            !quoteSection ||
            !quote
        ) {

            console.error(
                "SCENE: required elements missing"
            );

            return;
        }


        if (
            typeof gsap === "undefined" ||
            typeof ScrollTrigger === "undefined"
        ) {

            console.error(
                "SCENE: GSAP missing"
            );

            return;
        }


        gsap.registerPlugin(
            ScrollTrigger
        );


        /* =====================================
           HERO INITIAL
           🔒 PRESERVED
        ===================================== */

        gsap.set(
            hero,
            {
                scale: 1,
                opacity: 1,
                filter: "blur(0px)"
            }
        );


        if (heroBg) {

            gsap.set(
                heroBg,
                {
                    scale: 1,
                    opacity: 1
                }
            );

        }


        if (heroContent) {

            gsap.set(
                heroContent,
                {
                    y: 0,
                    opacity: 1
                }
            );

        }


        /* =====================================
           QUOTE INITIAL POSITION
           🔒 PRESERVED
        ===================================== */

        gsap.set(
            quoteSection,
            {
                y: "100vh",
                opacity: 1
            }
        );


        /* =====================================
           QUOTE INITIAL COLOR
        ===================================== */

        gsap.set(
            quote,
            {
                "--quote-color-progress": 0,
                "--quote-text-color": "#F4F5F3",
                "--quote-signature-color": "#B8C2C6"
            }
        );


        /* =====================================
           QUOTE TEXT INITIAL
        ===================================== */

        if (quoteLines.length) {

            gsap.set(
                quoteLines,
                {
                    clearProps: "transform",
                    y: 30,
                    opacity: 0
                }
            );

        }


        if (signature) {

            gsap.set(
                signature,
                {
                    clearProps: "transform",
                    y: 20,
                    opacity: 0
                }
            );

        }


        /* =====================================
           MASTER TIMELINE
        ===================================== */

        const timeline =
            gsap.timeline({

                scrollTrigger: {

                    trigger: scene,

                    start: "top top",

                    end: "bottom bottom",

                    scrub: 1,

                    invalidateOnRefresh: true

                }

            });


        /* =====================================
           HERO SCALE
           🔒 PRESERVED
        ===================================== */

        timeline.to(
            hero,
            {
                scale: 0.96,

                duration: 0.22,

                ease: "power2.inOut"
            },
            0
        );


        /* =====================================
           HERO TEXT
           🔒 PRESERVED
        ===================================== */

        if (heroContent) {

            timeline.to(
                heroContent,
                {
                    y: -55,

                    opacity: 0,

                    duration: 0.25,

                    ease: "power3.in"
                },
                0.03
            );

        }


        /* =====================================
           QUOTE RISE
           🔒 PRESERVED
        ===================================== */

        timeline.to(
            quoteSection,
            {
                y: 0,

                duration: 0.50,

                ease: "power3.inOut"
            },
            0
        );


        /* =====================================
           HERO BACKGROUND
           🔒 PRESERVED
        ===================================== */

        if (heroBg) {

            timeline.to(
                heroBg,
                {
                    scale: 1.08,

                    opacity: 0,

                    duration: 0.40,

                    ease: "power3.inOut"
                },
                0.15
            );

        }


        /* =====================================
           HERO DISAPPEARS
           🔒 PRESERVED
        ===================================== */

        timeline.to(
            hero,
            {
                scale: 0.90,

                opacity: 0,

                filter: "blur(6px)",

                duration: 0.38,

                ease: "power3.inOut"
            },
            0.22
        );


        /* =====================================
           QUOTE COLOR
           
           DARK → BLUE → WHITE
        ===================================== */

        timeline.to(
            quote,
            {
                "--quote-color-progress": 1,

                "--quote-text-color": "#111416",

                "--quote-signature-color": "#596467",

                duration: 0.70,

                ease: "power1.inOut"
            },
            0.34
        );


        /* =====================================
           QUOTE LINE 1
        ===================================== */

        if (quoteLines[0]) {

            timeline.to(
                quoteLines[0],
                {
                    y: 0,

                    opacity: 1,

                    duration: 0.18,

                    ease: "power3.out"
                },
                0.40
            );

        }


        /* =====================================
           QUOTE LINE 2
        ===================================== */

        if (quoteLines[1]) {

            timeline.to(
                quoteLines[1],
                {
                    y: 0,

                    opacity: 1,

                    duration: 0.18,

                    ease: "power3.out"
                },
                0.52
            );

        }


        /* =====================================
           QUOTE LINE 3
        ===================================== */

        if (quoteLines[2]) {

            timeline.to(
                quoteLines[2],
                {
                    y: 0,

                    opacity: 1,

                    duration: 0.18,

                    ease: "power3.out"
                },
                0.64
            );

        }


        /* =====================================
           QUOTE LINE 4
        ===================================== */

        if (quoteLines[3]) {

            timeline.to(
                quoteLines[3],
                {
                    y: 0,

                    opacity: 1,

                    duration: 0.18,

                    ease: "power3.out"
                },
                0.76
            );

        }


        /* =====================================
           QUOTE LINE 5
        ===================================== */

        if (quoteLines[4]) {

            timeline.to(
                quoteLines[4],
                {
                    y: 0,

                    opacity: 1,

                    duration: 0.18,

                    ease: "power3.out"
                },
                0.88
            );

        }


        /* =====================================
           SIGNATURE
        ===================================== */

        if (signature) {

            timeline.to(
                signature,
                {
                    y: 0,

                    opacity: 1,

                    duration: 0.18,

                    ease: "power2.out"
                },
                1.00
            );

        }


        /* =====================================
           REFRESH
        ===================================== */

        requestAnimationFrame(
            () => {

                ScrollTrigger.refresh();

                console.log(
                    "🎬 HERO → QUOTE READY"
                );

            }
        );


        /* =====================================
           RESIZE
        ===================================== */

        window.addEventListener(
            "resize",
            () => {

                ScrollTrigger.refresh();

            }
        );

    }
);