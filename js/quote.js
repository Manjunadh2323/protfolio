/* =========================================
   QUOTE INITIALIZER

   scene.js remains the main quote animation
   controller.

   quote.js handles:
   - Quote CSS variables
   - Loading the real traced signature
   - Drawing the signature once when visible
========================================= */

document.addEventListener(
    "portfolioSectionsLoaded",
    async () => {

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

        const signatureContainer =
            document.querySelector(
                ".signature-svg"
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
            "#243B8F"
        );

        if (
            !signature ||
            !signatureContainer
        ) {
            console.warn(
                "QUOTE: signature container not found"
            );
            return;
        }

        try {

            const response = await fetch(
                "/images/signature-traced.svg",
                { cache: "no-cache" }
            );

            if (!response.ok) {
                throw new Error(
                    `Signature SVG request failed: ${response.status}`
                );
            }

            const svgText = await response.text();
            signatureContainer.innerHTML = svgText;

            const svg =
                signatureContainer.querySelector("svg");

            if (!svg) {
                throw new Error(
                    "Signature SVG element not found"
                );
            }

            svg.setAttribute("width", "100%");
            svg.setAttribute("height", "100%");
            svg.setAttribute("preserveAspectRatio", "xMidYMid meet");

            const paths = [
                ...svg.querySelectorAll(".signature-path")
            ].sort(
                (a, b) =>
                    Number(a.dataset.order || 0) -
                    Number(b.dataset.order || 0)
            );

            if (!paths.length) {
                throw new Error(
                    "No signature paths found in signature-traced.svg"
                );
            }

            /* Prepare every real signature stroke. */
            paths.forEach((path) => {
                const length = path.getTotalLength();

                path.style.fill = "none";
                path.style.stroke = "currentColor";
                path.style.strokeWidth = "3";
                path.style.strokeLinecap = "round";
                path.style.strokeLinejoin = "round";
                path.style.vectorEffect = "non-scaling-stroke";
                path.style.strokeDasharray = `${length}`;
                path.style.strokeDashoffset = `${length}`;
                path.style.opacity = "1";
            });

            let started = false;

            const drawSignature = async () => {
                if (started) return;
                started = true;

                for (const path of paths) {
                    const length = path.getTotalLength();

                    const duration = Math.min(
                        420,
                        Math.max(90, length * 2.2)
                    );

                    const animation = path.animate(
                        [
                            {
                                strokeDashoffset: length
                            },
                            {
                                strokeDashoffset: 0
                            }
                        ],
                        {
                            duration,
                            easing: "cubic-bezier(.65,0,.35,1)",
                            fill: "forwards"
                        }
                    );

                    /* Slight overlap keeps it feeling like one pen stroke. */
                    await new Promise((resolve) => {
                        setTimeout(
                            resolve,
                            Math.max(35, duration * 0.42)
                        );
                    });

                    /* Keep the animation object alive until completion. */
                    animation.finished.catch(() => {});
                }
            };

            const startObserver =
                new IntersectionObserver(
                    (entries) => {
                        if (
                            entries.some(
                                (entry) => entry.isIntersecting
                            )
                        ) {
                            drawSignature();
                            startObserver.disconnect();
                        }
                    },
                    {
                        threshold: 0.2
                    }
                );

            startObserver.observe(signature);

        } catch (error) {
            console.error(
                "QUOTE SIGNATURE ERROR:",
                error
            );
        }

        console.log("Quote initialized");
    }
);
