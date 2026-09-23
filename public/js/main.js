/* =========================================
   ALWAYS START AT HERO
========================================= */

if ("scrollRestoration" in history) {

    history.scrollRestoration = "manual";

}


/* =========================================
   PAGE LOAD
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    async () => {

        window.scrollTo(
            0,
            0
        );


        /* =====================================
           LOAD NAVBAR
        ===================================== */

        try {

            const response =
                await fetch(
                    "/html/nav.html"
                );


            if (!response.ok) {

                throw new Error(
                    "Could not load nav.html"
                );

            }


            const data =
                await response.text();


            const navbar =
                document.getElementById(
                    "navbar"
                );


            if (!navbar) {

                throw new Error(
                    "Navbar container not found"
                );

            }


            navbar.innerHTML =
                data;


            console.log(
                "Navbar loaded"
            );


        } catch (error) {

            console.error(
                "Navbar loading error:",
                error
            );

        }


        /* =====================================
           LOAD QUOTE
        ===================================== */

        try {

            const response =
                await fetch(
                    "/html/quote.html"
                );


            if (!response.ok) {

                throw new Error(
                    "Could not load quote.html"
                );

            }


            const data =
                await response.text();


            const quoteSection =
                document.getElementById(
                    "quote-section"
                );


            if (!quoteSection) {

                throw new Error(
                    "quote-section not found"
                );

            }


            quoteSection.innerHTML =
                data;


            console.log(
                "Quote section loaded"
            );


        } catch (error) {

            console.error(
                "Quote loading error:",
                error
            );

        }


        /* =====================================
           LOAD ABOUT
        ===================================== */

        try {

            const response =
                await fetch(
                    "/html/about.html"
                );


            if (!response.ok) {

                throw new Error(
                    "Could not load about.html"
                );

            }


            const data =
                await response.text();


            const aboutSection =
                document.getElementById(
                    "about-section"
                );


            if (!aboutSection) {

                throw new Error(
                    "about-section not found"
                );

            }


            aboutSection.innerHTML =
                data;


            console.log(
                "About section loaded"
            );


        } catch (error) {

            console.error(
                "About loading error:",
                error
            );

        }


        /* =====================================
           LOAD EXPERIENCE / EDUCATION / SKILLS
        ===================================== */

        try {

            const response =
                await fetch(
                    "/html/experience.html"
                );


            if (!response.ok) {

                throw new Error(
                    "Could not load experience.html"
                );

            }


            const data =
                await response.text();


            const experienceSection =
                document.getElementById(
                    "experience-section"
                );


            if (!experienceSection) {

                throw new Error(
                    "experience-section not found"
                );

            }


            experienceSection.innerHTML =
                data;


            console.log(
                "Experience / Education / Skills section loaded"
            );


        } catch (error) {

            console.error(
                "Experience section loading error:",
                error
            );

        }



/* =====================================
   LOAD PROJECTS
===================================== */

try {

    const response =
        await fetch(
            "/html/projects.html"
        );


    if (!response.ok) {

        throw new Error(
            "Could not load projects.html"
        );

    }


    const data =
        await response.text();


    const projectsSection =
        document.getElementById(
            "projects-section"
        );


    if (!projectsSection) {

        throw new Error(
            "projects-section not found"
        );

    }


    projectsSection.innerHTML =
        data;


    console.log(
        "Projects section loaded"
    );


    /* =====================================
       INITIALIZE PROJECTS
       
       IMPORTANT:
       projects.html is now available.
    ===================================== */

    document.dispatchEvent(
        new CustomEvent(
            "projectsSectionLoaded"
        )
    );


} catch (error) {

    console.error(
        "Projects loading error:",
        error
    );

}
        /* =====================================
           LOAD DOWNLOAD RESUME
        ===================================== */

        try {

            const response =
                await fetch(
                    "/html/resume1.html"
                );


            if (!response.ok) {

                throw new Error(
                    "Could not load resume1.html"
                );

            }


            const data =
                await response.text();


            const resume1Section =
                document.getElementById(
                    "resume1-section"
                );


            if (!resume1Section) {

                throw new Error(
                    "resume1-section not found"
                );

            }


            resume1Section.innerHTML =
                data;


            console.log(
                "Download Resume section loaded"
            );


        } catch (error) {

            console.error(
                "Download Resume loading error:",
                error
            );

        }


        /* =====================================
           LOAD RESUME
        ===================================== */

        try {

            const response =
                await fetch(
                    "/html/resume.html"
                );


            if (!response.ok) {

                throw new Error(
                    "Could not load resume.html"
                );

            }


            const data =
                await response.text();


            const resumeSection =
                document.getElementById(
                    "resume-section"
                );


            if (!resumeSection) {

                throw new Error(
                    "resume-section not found"
                );

            }


            resumeSection.innerHTML =
                data;


            console.log(
                "Resume section loaded"
            );


        } catch (error) {

            console.error(
                "Resume loading error:",
                error
            );

        }


        /* =====================================
           LOAD CONTACT
        ===================================== */

        try {

            const response =
                await fetch(
                    "/html/contact.html"
                );


            if (!response.ok) {

                throw new Error(
                    "Could not load contact.html"
                );

            }


            const data =
                await response.text();


            const contactSection =
                document.getElementById(
                    "contact-section"
                );


            if (!contactSection) {

                throw new Error(
                    "contact-section not found"
                );

            }


            contactSection.innerHTML =
                data;


            console.log(
                "Contact section loaded"
            );


        } catch (error) {

            console.error(
                "Contact loading error:",
                error
            );

        }


        /* =====================================
           EVERYTHING IS READY

           IMPORTANT:
           Dispatch ONLY ONCE.
        ===================================== */

        document.dispatchEvent(
            new CustomEvent(
                "portfolioSectionsLoaded"
            )
        );


    }
);