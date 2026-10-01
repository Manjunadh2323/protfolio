/* =========================================
   QUOTE INITIALIZER

   scene.js is the ONLY animation controller.
========================================= */

document.addEventListener(
    "portfolioSectionsLoaded",
    () => {

        const quote =
            document.querySelector(".quote");

        const quoteScene =
            document.querySelector(".quote-scene");

        const quoteLines =
            document.querySelectorAll(
                ".quote-line span"
            );

        const signature =
            document.querySelector(
                ".quote-signature"
            );


        if (
            !quote ||
            !quoteScene ||
            !quoteLines.length
        ) {
            console.error(
                "QUOTE: elements not found"
            );

            return;
        }


        /* =====================================
           COLOR VARIABLES ONLY
        ===================================== */

        quote.style.setProperty(
            "--quote-color-progress",
            "0"
        );

        quote.style.setProperty(
            "--quote-text-color",
            "#F4F5F3"
        );

        quote.style.setProperty(
            "--quote-signature-color",
            "#B8C2C6"
        );


        /*
            IMPORTANT:

            Do NOT set opacity.
            Do NOT set transform.

            scene.js owns the reveal.
        */


        console.log(
            "Quote initialized"
        );

    }
);