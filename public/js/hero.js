document.addEventListener("DOMContentLoaded", () => {

    const hero =
        document.querySelector(".hero");

    if (!hero) return;


    const panel =
        hero.querySelector(".hero-panel");

    const titleLines =
        hero.querySelectorAll(
            ".hero-title-line"
        );

    const notes =
        hero.querySelectorAll(
            ".hero-note-left, .hero-note-right"
        );

    const spark =
        hero.querySelector(".hero-spark");

    const lightning =
        hero.querySelector(".hero-lightning");

    const scroll =
        hero.querySelector(".hero-scroll");

    const background =
        hero.querySelector(".hero-bg");


    /* =====================================================
       GSAP ENTRANCE
    ===================================================== */

    if (
        typeof gsap !== "undefined"
    ) {

        gsap.set(panel, {
            opacity: 0,
            y: 25,
            scale: .985
        });


        gsap.set(titleLines, {
            opacity: 0,
            y: 40
        });


        gsap.set(notes, {
            opacity: 0,
            y: 14
        });


        gsap.set(
            [spark, lightning],
            {
                opacity: 0,
                scale: .7
            }
        );


        gsap.set(scroll, {
            opacity: 0,
            y: 10
        });


        const intro =
            gsap.timeline({
                defaults: {
                    ease: "power3.out"
                }
            });


        intro.to(panel, {

            opacity: 1,

            y: 0,

            scale: 1,

            duration: .8

        });


        intro.to(titleLines, {

            opacity: 1,

            y: 0,

            duration: .72,

            stagger: .08,

            ease: "power4.out"

        }, "-=.4");


        intro.to(notes, {

            opacity: 1,

            y: 0,

            duration: .45,

            stagger: .08

        }, "-=.35");


        intro.to(
            [spark, lightning],
            {

                opacity: 1,

                scale: 1,

                duration: .45,

                stagger: .12,

                ease: "back.out(1.5)"

            },
            "-=.25"
        );


        intro.to(scroll, {

            opacity: 1,

            y: 0,

            duration: .4

        }, "-=.2");


        /* =================================================
           SUBTLE BACKGROUND MOVEMENT
        ================================================= */

        gsap.to(background, {

            scale: 1.07,

            duration: 15,

            ease: "sine.inOut",

            repeat: -1,

            yoyo: true

        });


        /* =================================================
           MOUSE PARALLAX
        ================================================= */

        let mouseX = 0;
        let mouseY = 0;

        let currentX = 0;
        let currentY = 0;


        hero.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    hero.getBoundingClientRect();


                mouseX =
                    (
                        event.clientX -
                        rect.left
                    ) /
                    rect.width -
                    .5;


                mouseY =
                    (
                        event.clientY -
                        rect.top
                    ) /
                    rect.height -
                    .5;

            },
            {
                passive: true
            }
        );


        function parallax() {

            currentX +=
                (mouseX - currentX) *
                .04;


            currentY +=
                (mouseY - currentY) *
                .04;


            gsap.set(background, {

                x: currentX * 8,

                y: currentY * 5

            });


            requestAnimationFrame(
                parallax
            );
        }


        parallax();

    }

});