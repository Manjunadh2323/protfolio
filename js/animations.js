/* =========================================================
   J. MANJUNATH — PORTFOLIO MOTION SYSTEM
   =========================================================

   DESIGN PHILOSOPHY

   Cinematic.
   Editorial.
   Restrained.
   Precise.

   The goal is not to make everything move.

   The goal is to make the page FEEL alive while scrolling.

   Existing section-specific animation systems are respected:

   - Hero        → hero.js / scene.js
   - Quote       → quote.js / scene.js
   - About       → about.js
   - Skills      → skills.js
   - Projects    → projects.js
   - Experience  → experience.js
   - Contact     → contact.js

   This file provides the GLOBAL MOTION LANGUAGE.

========================================================= */


(function () {

    "use strict";


    /* =====================================================
       CONFIGURATION
    ===================================================== */

    const MOTION = {

        /* General movement */

        sectionRevealY: 42,

        sectionRevealDuration: 1,

        sectionRevealScrub: 1.15,


        /* Background depth */

        backgroundParallax: 7,

        backgroundScale: 1.045,


        /* Image depth */

        imageParallax: 5,


        /* Typography */

        headingY: 30,

        headingScrub: 1.1,


        /* Opacity */

        minimumOpacity: 0.05,


        /* ScrollTrigger */

        start: "top 88%",

        end: "top 48%"

    };


    /* =====================================================
       REDUCED MOTION
    ===================================================== */

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (prefersReducedMotion) {

        return;

    }


    /* =====================================================
       GSAP AVAILABILITY
    ===================================================== */

    function gsapReady() {

        return (
            typeof window.gsap !== "undefined" &&
            typeof window.ScrollTrigger !== "undefined"
        );

    }


    /* =====================================================
       INITIALIZATION
    ===================================================== */

    function initializeMotion() {

        if (!gsapReady()) {

            return;

        }


        /*
         * Prevent duplicate initialization.
         */

        if (
            document.body.dataset.portfolioMotionReady ===
            "true"
        ) {

            return;

        }


        document.body.dataset.portfolioMotionReady =
            "true";


        const {
            gsap,
            ScrollTrigger
        } = window;


        gsap.registerPlugin(
            ScrollTrigger
        );


        /* =================================================
           HELPERS
        ================================================= */


        /*
         * Convert a selector into elements inside a section.
         */

        function getElements(
            section,
            selector
        ) {

            if (!section) {

                return [];

            }


            return gsap.utils.toArray(
                selector,
                section
            );

        }


        /*
         * Create a subtle scroll-linked reveal.

         * IMPORTANT:
         * This does NOT use play/reverse.
         *
         * The animation is tied directly to scroll
         * progress so scrolling up and down feels natural.
         */

        function createReveal(
            section,
            selector,
            settings = {}
        ) {

            const elements =
                getElements(
                    section,
                    selector
                );


            if (!elements.length) {

                return;

            }


            const fromY =
                settings.y ??
                MOTION.sectionRevealY;


            const start =
                settings.start ??
                MOTION.start;


            const end =
                settings.end ??
                MOTION.end;


            const scrub =
                settings.scrub ??
                MOTION.sectionRevealScrub;


            gsap.fromTo(

                elements,

                {
                    y: fromY,

                    opacity:
                        settings.opacity ??
                        MOTION.minimumOpacity

                },

                {
                    y: 0,

                    opacity: 1,

                    ease: "none",

                    stagger:
                        settings.stagger ??
                        0,

                    scrollTrigger: {

                        trigger: section,

                        start: start,

                        end: end,

                        scrub: scrub,

                        invalidateOnRefresh:
                            true

                    }

                }

            );

        }


        /*
         * Subtle parallax.

         * Backgrounds move slightly slower than the page,
         * creating depth without looking like an effect.
         */

        function createParallax(
            section,
            selector,
            settings = {}
        ) {

            const elements =
                getElements(
                    section,
                    selector
                );


            if (!elements.length) {

                return;

            }


            const movement =
                settings.movement ??
                MOTION.backgroundParallax;


            const scale =
                settings.scale ??
                1;


            elements.forEach(
                function (element) {

                    if (scale !== 1) {

                        gsap.set(
                            element,
                            {
                                scale: scale
                            }
                        );

                    }


                    gsap.fromTo(

                        element,

                        {
                            yPercent:
                                -movement

                        },

                        {
                            yPercent:
                                movement,

                            ease: "none",

                            scrollTrigger: {

                                trigger: section,

                                start: "top bottom",

                                end: "bottom top",

                                scrub:
                                    settings.scrub ??
                                    1.5,

                                invalidateOnRefresh:
                                    true

                            }

                        }

                    );

                }
            );

        }


        /*
         * Horizontal editorial movement.

         * Used very lightly for visual elements only.
         */

        function createDepthShift(
            section,
            selector,
            settings = {}
        ) {

            const elements =
                getElements(
                    section,
                    selector
                );


            if (!elements.length) {

                return;

            }


            const distance =
                settings.distance ??
                18;


            elements.forEach(
                function (element) {

                    gsap.fromTo(

                        element,

                        {
                            x:
                                -distance,

                            opacity:
                                0.35

                        },

                        {
                            x: 0,

                            opacity: 1,

                            ease: "none",

                            scrollTrigger: {

                                trigger: section,

                                start:
                                    settings.start ??
                                    "top 82%",

                                end:
                                    settings.end ??
                                    "top 50%",

                                scrub:
                                    settings.scrub ??
                                    1.2,

                                invalidateOnRefresh:
                                    true

                            }

                        }

                    );

                }
            );

        }


        /* =================================================
           ABOUT
           =================================================

           About already has its own sophisticated motion
           system.

           We intentionally DO NOT animate its main content
           again.

           Only the image receives a very subtle depth layer.
        ================================================= */

        const about =
            document.querySelector(
                ".about-section, .about"
            );


        if (about) {

            createParallax(
                about,
                ".about-image",
                {
                    movement:
                        MOTION.imageParallax,

                    scale: 1.025,

                    scrub: 1.8
                }
            );

        }


        /* =================================================
           SKILLS
           ================================================= */

        const skills =
            document.querySelector(
                ".skills-section"
            );


        if (skills) {

            /*
             * Header enters first.
             */

            createReveal(
                skills,
                ".skills-top",
                {
                    y: 34,

                    start:
                        "top 90%",

                    end:
                        "top 52%",

                    scrub:
                        1.2
                }
            );


            /*
             * Main skills composition follows.
             */

            createReveal(
                skills,
                ".skills-layout",
                {
                    y: 24,

                    start:
                        "top 84%",

                    end:
                        "top 46%",

                    scrub:
                        1.35
                }
            );


            /*
             * Subtle tab/content depth.
             */

            createDepthShift(
                skills,
                ".skills-labels",
                {
                    distance: 14,

                    start:
                        "top 82%",

                    end:
                        "top 52%",

                    scrub:
                        1.3
                }
            );

        }


        /* =================================================
           PROJECTS
           =================================================

           projects.js owns the carousel interaction.

           This file only handles the section reveal so the
           carousel movement is never overwritten by GSAP.
        ================================================= */

        const projects =
            document.querySelector(
                ".projects-section"
            );


        if (projects) {

            createReveal(
                projects,
                ".projects-header",
                {
                    y: 32,

                    start:
                        "top 88%",

                    end:
                        "top 54%",

                    scrub:
                        1.25
                }
            );


            createReveal(
                projects,
                ".projects-carousel",
                {
                    y: 20,

                    start:
                        "top 84%",

                    end:
                        "top 50%",

                    scrub:
                        1.45
                }
            );


            createReveal(
                projects,
                ".projects-bottom",
                {
                    y: 16,

                    start:
                        "top 92%",

                    end:
                        "top 66%",

                    scrub:
                        1.15
                }
            );


            createReveal(
                projects,
                ".projects-scroll-hint",
                {
                    y: 10,

                    start:
                        "top 96%",

                    end:
                        "top 76%",

                    scrub:
                        1.0
                }
            );

        }


        /* =================================================
           RESUME
           ================================================= */

        const resume =
            document.querySelector(
                ".resume-section"
            );


        if (resume) {

            /*
             * Resume is intentionally simple.

             * It should feel like a pause between Projects
             * and Experience, not another animated scene.
             */

            createReveal(
                resume,
                ".resume-link",
                {
                    y: 20,

                    start:
                        "top 92%",

                    end:
                        "top 64%",

                    scrub:
                        1.15
                }
            );

        }


        /* =================================================
           EXPERIENCE
           =================================================

           experience.js controls the actual timeline.

           Therefore we only animate the atmospheric
           background and introductory header.

           The timeline cards/nodes remain under the control
           of experience.js.
        ================================================= */

        const experience =
            document.querySelector(
                ".experience-section"
            );


        if (experience) {

            createReveal(
                experience,
                ".experience-header",
                {
                    y: 28,

                    start:
                        "top 88%",

                    end:
                        "top 54%",

                    scrub:
                        1.3
                }
            );


            createParallax(
                experience,
                ".experience-background-image",
                {
                    movement:
                        5,

                    scale:
                        1.035,

                    scrub:
                        1.7
                }
            );

        }


        /* =================================================
           CONTACT
           =================================================

           Contact is the final visual statement.

           The motion becomes slower and calmer here.
        ================================================= */

        const contact =
            document.querySelector(
                ".contact-section"
            );


        if (contact) {

            /*
             * Header
             */

            createReveal(
                contact,
                ".contact-header",
                {
                    y: 30,

                    start:
                        "top 90%",

                    end:
                        "top 54%",

                    scrub:
                        1.35
                }
            );


            /*
             * Form
             */

            createReveal(
                contact,
                ".contact-form",
                {
                    y: 24,

                    start:
                        "top 84%",

                    end:
                        "top 50%",

                    scrub:
                        1.4
                }
            );


            /*
             * Social links
             */

            createReveal(
                contact,
                ".contact-social-area",
                {
                    y: 16,

                    start:
                        "top 92%",

                    end:
                        "top 68%",

                    scrub:
                        1.25
                }
            );


            /*
             * Copyright
             */

            createReveal(
                contact,
                ".contact-footer",
                {
                    y: 12,

                    start:
                        "top 96%",

                    end:
                        "top 78%",

                    scrub:
                        1.1
                }
            );


            /*
             * Background breathing effect.
             *
             * The color itself is untouched.
             */

            createParallax(
                contact,
                ".contact-background",
                {
                    movement:
                        3,

                    scrub:
                        1.8
                }
            );

        }


        /* =================================================
           SECTION TRANSITION DEPTH
           =================================================

           This is deliberately subtle.

           Instead of moving entire sections, we create
           a tiny visual depth shift on the section's
           primary inner content.

           This gives the page a continuous editorial rhythm.
        ================================================= */

        const sectionSelectors = [

            ".skills-section",

            ".projects-section",

            ".resume-section",

            ".experience-section",

            ".contact-section"

        ];


        sectionSelectors.forEach(
            function (selector) {

                const section =
                    document.querySelector(
                        selector
                    );


                if (!section) {

                    return;

                }


                const inner =
                    section.querySelector(
                        ".skills-layout, " +
                        ".projects-inner, " +
                        ".resume-link, " +
                        ".experience-inner, " +
                        ".contact-inner"
                    );


                if (!inner) {

                    return;

                }


                gsap.fromTo(

                    inner,

                    {
                        y: 8
                    },

                    {
                        y: -8,

                        ease: "none",

                        scrollTrigger: {

                            trigger: section,

                            start:
                                "top bottom",

                            end:
                                "bottom top",

                            scrub:
                                2.2,

                            invalidateOnRefresh:
                                true

                        }

                    }

                );

            }
        );


        /* =================================================
           SCROLL VELOCITY RESPONSE
           =================================================

           A tiny amount of skew-free momentum can make
           the page feel more physical without becoming
           flashy.

           We only apply it to visual backgrounds.

           No text distortion.
        ================================================= */

        let velocityTimeout = null;


        ScrollTrigger.create({

            start: 0,

            end: "max",

            onUpdate:
                function (self) {

                    const velocity =
                        Math.abs(
                            self.getVelocity()
                        );


                    if (
                        velocity < 120
                    ) {

                        return;

                    }


                    const backgrounds =
                        document.querySelectorAll(
                            ".experience-background-image, " +
                            ".about-image"
                        );


                    backgrounds.forEach(
                        function (element) {

                            gsap.to(
                                element,
                                {
                                    scale:
                                        1.02,

                                    duration:
                                        0.45,

                                    ease:
                                        "power2.out",

                                    overwrite:
                                        "auto"
                                }
                            );

                        }
                    );


                    clearTimeout(
                        velocityTimeout
                    );


                    velocityTimeout =
                        setTimeout(
                            function () {

                                backgrounds.forEach(
                                    function (element) {

                                        gsap.to(
                                            element,
                                            {
                                                scale:
                                                    1,

                                                duration:
                                                    0.8,

                                                ease:
                                                    "power2.out",

                                                overwrite:
                                                    "auto"
                                            }
                                        );

                                    }
                                );

                            },
                            180
                        );

                }

        });


        /* =================================================
           REFRESH AFTER DYNAMIC CONTENT
           =================================================

           Your main.js loads sections asynchronously.

           Once everything exists, refresh ScrollTrigger
           so every trigger gets the correct position.
        ================================================= */

        requestAnimationFrame(
            function () {

                requestAnimationFrame(
                    function () {

                        ScrollTrigger.refresh();

                    }
                );

            }
        );


        /* =================================================
           RESIZE
           ================================================= */

        let resizeTimer;


        window.addEventListener(
            "resize",
            function () {

                clearTimeout(
                    resizeTimer
                );


                resizeTimer =
                    setTimeout(
                        function () {

                            ScrollTrigger.refresh();

                        },
                        200
                    );

            },
            {
                passive: true
            }
        );


        /* =================================================
           DEBUG MESSAGE
        ================================================= */

        console.log(
            "✦ J. MANJUNATH — PREMIUM PORTFOLIO MOTION READY"
        );

    }


    /* =====================================================
       WAIT FOR DYNAMIC SECTIONS
       ===================================================== */

    document.addEventListener(
        "portfolioSectionsLoaded",
        initializeMotion,
        {
            once: true
        }
    );


    /* =====================================================
       FALLBACK
       ===================================================== */

    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            function () {

                /*
                 * main.js will normally dispatch
                 * portfolioSectionsLoaded.
                 *
                 * This fallback only checks if the sections
                 * already exist.
                 */

                setTimeout(
                    function () {

                        if (
                            document.querySelector(
                                ".skills-section, " +
                                ".projects-section, " +
                                ".experience-section, " +
                                ".contact-section"
                            )
                        ) {

                            initializeMotion();

                        }

                    },
                    150
                );

            },
            {
                once: true
            }
        );

    } else {

        setTimeout(
            function () {

                if (
                    document.querySelector(
                        ".skills-section, " +
                        ".projects-section, " +
                        ".experience-section, " +
                        ".contact-section"
                    )
                ) {

                    initializeMotion();

                }

            },
            150
        );

    }


})();