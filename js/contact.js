/* =========================================================
   CONTACT SECTION
   J. MANJUNATH PORTFOLIO
========================================================= */

document.addEventListener(
    "portfolioSectionsLoaded",
    () => {

        /* =========================================
           INITIALIZE EMAILJS
        ========================================== */

        emailjs.init({
            publicKey: "JpG-rwapcnfhWeW0s"
        });


        /* =================================================
           FIND CONTACT SECTION
        ================================================= */

        const contactSection =
            document.querySelector(
                ".contact-section"
            );


        if (!contactSection) {
            return;
        }


        /* =================================================
           FIND CONTACT FORM
        ================================================= */

        const form =
            contactSection.querySelector(
                ".contact-form"
            );


        if (!form) {
            return;
        }


        /* =================================================
           FORM ELEMENTS
        ================================================= */

        const nameInput =
            form.querySelector(
                "#contact-name"
            );


        const emailInput =
            form.querySelector(
                "#contact-email"
            );


        const subjectInput =
            form.querySelector(
                "#contact-subject"
            );


        const messageInput =
            form.querySelector(
                "#contact-message"
            );


        const submitButton =
            form.querySelector(
                ".contact-submit"
            );


        /* =================================================
           SAFETY CHECK
        ================================================= */

        if (
            !nameInput ||
            !emailInput ||
            !subjectInput ||
            !messageInput ||
            !submitButton
        ) {
            return;
        }


        /* =================================================
           EMAIL VALIDATION
        ================================================= */

        function isValidEmail(email) {

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            return emailPattern.test(
                email
            );
        }


        /* =================================================
           FORM SUBMIT
        ================================================= */

        form.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                /* =========================================
                   GET VALUES
                ========================================== */

                const name =
                    nameInput.value.trim();


                const email =
                    emailInput.value.trim();


                const subject =
                    subjectInput.value.trim();


                const message =
                    messageInput.value.trim();


                /* =========================================
                   BASIC VALIDATION
                ========================================== */

                if (!name) {

                    nameInput.focus();

                    return;
                }


                if (!email) {

                    emailInput.focus();

                    return;
                }


                if (!isValidEmail(email)) {

                    emailInput.focus();

                    return;
                }


                if (!subject) {

                    subjectInput.focus();

                    return;
                }


                if (!message) {

                    messageInput.focus();

                    return;
                }


                /* =========================================
                   SAVE ORIGINAL BUTTON
                ========================================== */

                const originalButtonHTML =
                    submitButton.innerHTML;


                /* =========================================
                   SENDING STATE
                ========================================== */

                submitButton.innerHTML =
                    `
                        <span>SENDING</span>
                        <b>↗</b>
                    `;


                submitButton.disabled = true;


                /* =========================================
                   SEND MESSAGE THROUGH EMAILJS
                ========================================== */

                emailjs
                    .send(
                        "9966586817",
                        "low1cwf",
                        {
                            name: name,
                            email: email,
                            title: subject,
                            message: message
                        }
                    )

                    .then(
                        () => {

                            /* =============================
                               SUCCESS
                            ============================== */

                            submitButton.innerHTML =
                                `
                                    <span>SENT SUCCESSFULLY</span>
                                    <b>✓</b>
                                `;


                            form.reset();


                            setTimeout(
                                () => {

                                    submitButton.innerHTML =
                                        originalButtonHTML;

                                    submitButton.disabled =
                                        false;

                                },
                                3000
                            );

                        }
                    )

                    .catch(
                        (error) => {

                            /* =============================
                               ERROR
                            ============================== */

                            console.error(
                                "EmailJS error:",
                                error
                            );


                            submitButton.innerHTML =
                                `
                                    <span>FAILED — TRY AGAIN</span>
                                    <b>×</b>
                                `;


                            submitButton.disabled =
                                false;


                            setTimeout(
                                () => {

                                    submitButton.innerHTML =
                                        originalButtonHTML;

                                },
                                3000
                            );

                        }
                    );

            }
        );


        /* =================================================
           INPUT INTERACTION
        ================================================= */

        const fields =
            form.querySelectorAll(
                "input, textarea"
            );


        fields.forEach(
            (field) => {

                field.addEventListener(
                    "input",
                    () => {

                        field.classList.remove(
                            "contact-input-error"
                        );

                    }
                );

            }
        );


        /* =================================================
           ENTER KEY SUPPORT
        ================================================= */

        form.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key === "Enter" &&
                    event.ctrlKey
                ) {

                    event.preventDefault();

                    submitButton.click();

                }

            }
        );


        /* =================================================
           CONTACT DETAIL HOVER
        ================================================= */

        const contactDetails =
            contactSection.querySelectorAll(
                ".contact-detail"
            );


        contactDetails.forEach(
            (detail) => {

                detail.addEventListener(
                    "mouseenter",
                    () => {

                        detail.classList.add(
                            "is-hovered"
                        );

                    }
                );


                detail.addEventListener(
                    "mouseleave",
                    () => {

                        detail.classList.remove(
                            "is-hovered"
                        );

                    }
                );

            }
        );


        /* =================================================
           CONTACT SECTION REVEAL
        ================================================= */

        const revealElements =
            contactSection.querySelectorAll(
                ".contact-eyebrow, " +
                ".contact-title, " +
                ".contact-intro, " +
                ".contact-divider, " +
                ".contact-card, " +
                ".contact-form-card, " +
                ".contact-response, " +
                ".contact-footer"
            );


        if (
            "IntersectionObserver" in window
        ) {

            const observer =
                new IntersectionObserver(
                    (entries) => {

                        entries.forEach(
                            (entry) => {

                                if (
                                    entry.isIntersecting
                                ) {

                                    entry.target.classList.add(
                                        "is-visible"
                                    );


                                    observer.unobserve(
                                        entry.target
                                    );

                                }

                            }
                        );

                    },
                    {
                        threshold: 0.12
                    }
                );


            revealElements.forEach(
                (element) => {

                    observer.observe(
                        element
                    );

                }
            );

        } else {

            revealElements.forEach(
                (element) => {

                    element.classList.add(
                        "is-visible"
                    );

                }
            );

        }

    }
);