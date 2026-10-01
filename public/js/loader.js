/* =========================================================
   J. MANJUNATH — PORTFOLIO PRELOADER
========================================================= */

(function () {

    "use strict";


    /* =====================================================
       GET ELEMENTS
    ===================================================== */

    const loader =
        document.getElementById("portfolio-loader");

    const progressFill =
        document.querySelector(".loader-progress-fill");

    const percentage =
        document.querySelector(".loader-percentage");


    /* =====================================================
       SAFETY CHECK
    ===================================================== */

    if (
        !loader ||
        !progressFill ||
        !percentage
    ) {
        return;
    }


    /* =====================================================
       LOCK SCROLL
    ===================================================== */

    document.documentElement.classList.add(
        "loader-active"
    );

    document.body.classList.add(
        "loader-active"
    );


    /* =====================================================
       SETTINGS
    ===================================================== */

    const minimumDisplayTime = 1800;
    const maximumLoadTime = 3000;

    const startTime = performance.now();

    let progress = 0;
    let pageReady = false;
    let finished = false;


    /* =====================================================
       UPDATE UI
    ===================================================== */

    function setProgress(value) {

        value = Math.max(
            0,
            Math.min(100, value)
        );

        progress = value;

        progressFill.style.width =
            value + "%";

        percentage.textContent =
            Math.round(value) + "%";
    }


    /* =====================================================
       PROGRESS ANIMATION
    ===================================================== */

    function animate() {

        if (finished) {
            return;
        }


        const elapsed =
            performance.now() - startTime;


        const timeProgress =
            Math.min(
                elapsed / maximumLoadTime,
                1
            );


        /*
         * Smooth ease-out movement.
         */

        const easedProgress =
            1 - Math.pow(
                1 - timeProgress,
                2
            );


        /*
         * Keep the loader around 96%
         * until the page is ready.
         */

        const targetProgress =
            pageReady
                ? 100
                : Math.min(
                    easedProgress * 96,
                    96
                );


        /*
         * Smoothly approach target.
         */

        if (targetProgress > progress) {

            const difference =
                targetProgress - progress;

            setProgress(
                progress + difference * 0.12
            );
        }


        requestAnimationFrame(animate);
    }


    /* =====================================================
       START ANIMATION
    ===================================================== */

    requestAnimationFrame(animate);


    /* =====================================================
       FINISH LOADER
    ===================================================== */

    function finishLoader() {

        if (finished) {
            return;
        }

        pageReady = true;


        const elapsed =
            performance.now() - startTime;


        const remainingTime =
            Math.max(
                0,
                minimumDisplayTime - elapsed
            );


        setTimeout(function () {


            /* =============================================
               COMPLETE TO 100%
            ============================================== */

            setProgress(100);


            /* =============================================
               WAIT BRIEFLY AT 100%
            ============================================== */

            setTimeout(function () {


                /* =========================================
                   FADE OUT
                ========================================== */

                loader.classList.add(
                    "loader-hidden"
                );


                /* =========================================
                   RESTORE SCROLL
                ========================================== */

                document.documentElement.classList.remove(
                    "loader-active"
                );

                document.body.classList.remove(
                    "loader-active"
                );


                /* =========================================
                   REMOVE FROM DOM
                ========================================== */

                setTimeout(function () {

                    if (
                        loader &&
                        loader.parentNode
                    ) {

                        loader.parentNode.removeChild(
                            loader
                        );

                    }

                    finished = true;

                }, 950);


            }, 250);


        }, remainingTime);
    }


    /* =====================================================
       WAIT FOR PAGE
    ===================================================== */

    if (
        document.readyState ===
        "complete"
    ) {

        finishLoader();

    } else {

        window.addEventListener(
            "load",
            finishLoader,
            {
                once: true
            }
        );

    }


    /* =====================================================
       SAFETY FALLBACK
       Never leave the user stuck on loader.
    ===================================================== */

    setTimeout(function () {

        finishLoader();

    }, 5000);


})();