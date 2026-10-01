/* =========================================================
   ABOUT 1
   QUOTE → WELCOME → BACK
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /* =================================================
           REFRESH ABOUT → MAIN WEBSITE
        ================================================= */

        const navigation =
            performance.getEntriesByType("navigation")[0];

        if (
            navigation &&
            navigation.type === "reload"
        ) {

            window.location.replace(
                "../index.html"
            );

            return;

        }


        /* =================================================
           ELEMENTS
        ================================================= */

        const loader =
            document.getElementById(
                "aboutLoader"
            );


        const page =
            document.getElementById(
                "aboutPage"
            );


        const backButton =
            document.getElementById(
                "backButton"
            );


        /* =================================================
           QUOTE → WELCOME
        ================================================= */

        function startAbout() {

            if (!loader || !page) {
                return;
            }


            setTimeout(() => {

                loader.classList.add(
                    "loader-hidden"
                );


                page.classList.add(
                    "page-visible"
                );

            }, 2600);

        }


        /* =================================================
           BACK TO PORTFOLIO
        ================================================= */

        function goBack() {

            if (
                document.body.classList.contains(
                    "page-exiting"
                )
            ) {
                return;
            }


            document.body.classList.add(
                "page-exiting"
            );


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

                    window.location.href =
                        "../index.html";

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

                if (
                    event.key === "Escape"
                ) {

                    goBack();

                }

            }
        );


        /* =================================================
           START
        ================================================= */

        startAbout();

    }
);