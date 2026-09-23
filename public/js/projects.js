/* =========================================================
   PROJECTS
   CATEGORY FILTER + CINEMATIC MODAL
========================================================= */

(() => {

    "use strict";


    /* =====================================================
       PROJECT DATA
    ====================================================== */

    const projects = {


        /* =================================================
           FITCORE
        ================================================== */

        fitcore: {

            title:
                "FITCORE",

            role:
                "GYM MANAGEMENT PLATFORM",

            category:
                "personal",

            period:
                "2026",

            description:
                "A full-stack gym management platform built with Python, Django and MySQL.",

            image:
                "/images/fitcore.png",

            features: [

                "Gym management platform",

                "Python and Django",

                "MySQL database"

            ],

            technologies: [

                "Python",

                "Django",

                "MySQL"

            ],

            code:
                "https://github.com/Manjunadh2323/fitcore",

            demo:
                "#"

        },


        /* =================================================
           BOOKMYMESS
        ================================================== */

        bookmymess: {

            title:
                "BOOKMYMESS",

            role:
                "MESS MANAGEMENT PLATFORM",

            category:
                "personal",

            period:
                "2026",

            description:
                "A MERN stack platform for discovering, booking and managing mess services.",

            image:
                "/images/bookmymess.png",

            features: [

                "Mess management platform",

                "MERN stack",

                "Mess service booking"

            ],

            technologies: [

                "MongoDB",

                "Express.js",

                "React.js",

                "Node.js"

            ],

            code:
                "https://github.com/hisanthooosh/bookmymess.git",

            demo:
                "#"

        },


        /* =================================================
           SERVICEHUB
        ================================================== */

        servicehub: {

            title:
                "SERVICEHUB",

            role:
                "LOCAL SERVICES PLATFORM",

            category:
                "personal",

            period:
                "2026",

            description:
                "A Django platform connecting users with local professionals and services.",

            image:
                "/images/servicehub.png",

            features: [

                "Local services platform",

                "Python and Django",

                "Service booking"

            ],

            technologies: [

                "Python",

                "Django",

                "MySQL"

            ],

            code:
                "#",

            demo:
                "#"

        },


        /* =================================================
           STUDENTCONNECT
        ================================================== */

        studentconnect: {

            title:
                "STUDENTCONNECT",

            role:
                "STUDENT PLATFORM",

            category:
                "personal",

            period:
                "2026",

            description:
                "A MERN-based platform designed for useful digital student services.",

            image:
                "/images/studentconnect.png",

            features: [

                "Student-focused platform",

                "MERN stack",

                "Digital student services"

            ],

            technologies: [

                "MongoDB",

                "Express.js",

                "React.js",

                "Node.js"

            ],

            code:
                "#",

            demo:
                "#"

        },


        /* =================================================
           ECOAI
        ================================================== */

        ecoai: {

            title:
                "ECOAI",

            role:
                "AI SUSTAINABILITY PROJECT",

            category:
                "personal",

            period:
                "2026",

            description:
                "An AI-focused project exploring technology-driven sustainability.",

            image:
                "/images/ecoai.png",

            features: [

                "AI-focused project",

                "Sustainability concept",

                "Technology-driven approach"

            ],

            technologies: [

                "Python",

                "AI"

            ],

            code:
                "#",

            demo:
                "#"

        }

    };


    /* =====================================================
       INITIALIZE PROJECTS
    ====================================================== */

    function initializeProjects() {


        const grid =
            document.getElementById(
                "projects-grid"
            );


        const modal =
            document.getElementById(
                "project-modal"
            );


        const modalImage =
            document.getElementById(
                "project-modal-image"
            );


        const modalTitle =
            document.getElementById(
                "project-modal-title"
            );


        const modalRole =
            document.getElementById(
                "project-modal-role"
            );


        const modalYear =
            document.getElementById(
                "project-modal-year"
            );


        const modalCategory =
            document.getElementById(
                "project-modal-category"
            );


        const modalDescription =
            document.getElementById(
                "project-modal-description"
            );


        const modalFeatures =
            document.getElementById(
                "project-modal-features"
            );


        const modalTech =
            document.getElementById(
                "project-modal-tech"
            );


        const modalCode =
            document.getElementById(
                "project-modal-code"
            );


        const modalDemo =
            document.getElementById(
                "project-modal-demo"
            );


        const modalClose =
            document.getElementById(
                "project-modal-close"
            );


        const backdrop =
            document.querySelector(
                ".project-modal-backdrop"
            );


        const filters =
            document.querySelectorAll(
                ".project-filter"
            );


        /* =================================================
           SAFETY CHECK
        ================================================== */

        if (
            !grid ||
            !modal ||
            !modalImage ||
            !modalTitle ||
            !modalRole ||
            !modalYear ||
            !modalCategory ||
            !modalDescription ||
            !modalFeatures ||
            !modalTech ||
            !modalCode ||
            !modalDemo ||
            !modalClose
        ) {

            console.error(
                "Projects: required elements were not found."
            );

            return;

        }


        /* =================================================
           OPEN PROJECT
        ================================================== */

        function openProject(
            projectId
        ) {


            const project =
                projects[projectId];


            if (!project) {

                console.error(
                    "Project not found:",
                    projectId
                );

                return;

            }


            /* =============================================
               IMAGE
            ============================================== */

            modalImage.src =
                project.image;


            modalImage.alt =
                `${project.title} project preview`;


            /* =============================================
               TITLE
            ============================================== */

            modalTitle.textContent =
                project.title;


            /* =============================================
               ROLE
            ============================================== */

            modalRole.textContent =
                project.role;


            /* =============================================
               PERIOD
            ============================================== */

            modalYear.textContent =
                project.period || "";


            /* =============================================
               CATEGORY
            ============================================== */

            modalCategory.textContent =
                (
                    project.category || ""
                ).toUpperCase();


            /* =============================================
               DESCRIPTION
            ============================================== */

            modalDescription.textContent =
                project.description;


            /* =============================================
               FEATURES
            ============================================== */

            modalFeatures.innerHTML =
                "";


            project.features.forEach(
                feature => {


                    const item =
                        document.createElement(
                            "li"
                        );


                    item.textContent =
                        feature;


                    modalFeatures.appendChild(
                        item
                    );

                }
            );


            /* =============================================
               TECHNOLOGIES
            ============================================== */

            modalTech.innerHTML =
                "";


            project.technologies.forEach(
                technology => {


                    const tag =
                        document.createElement(
                            "span"
                        );


                    tag.textContent =
                        technology;


                    modalTech.appendChild(
                        tag
                    );

                }
            );


            /* =============================================
               LINKS
            ============================================== */

            modalCode.href =
                project.code;


            modalDemo.href =
                project.demo;


            /* =============================================
               MODAL OPEN
            ============================================== */

            modal.classList.add(
                "open"
            );


            modal.setAttribute(
                "aria-hidden",
                "false"
            );


            document.body.classList.add(
                "project-modal-open"
            );


            document.body.style.overflow =
                "hidden";


            /* =============================================
               RESET SCROLL
            ============================================== */

            const modalWindow =
                modal.querySelector(
                    ".project-modal-window"
                );


            if (modalWindow) {

                modalWindow.scrollTop =
                    0;

            }


            /* =============================================
               FOCUS CLOSE
            ============================================== */

            setTimeout(
                () => {

                    modalClose.focus();

                },
                100
            );

        }


        /* =================================================
           CLOSE PROJECT
        ================================================== */

        function closeProject() {


            modal.classList.remove(
                "open"
            );


            modal.setAttribute(
                "aria-hidden",
                "true"
            );


            document.body.classList.remove(
                "project-modal-open"
            );


            document.body.style.overflow =
                "";

        }


        /* =================================================
           CARD CLICK
        ================================================== */

        grid.addEventListener(
            "click",
            event => {


                const card =
                    event.target.closest(
                        ".project-card"
                    );


                if (!card) {

                    return;

                }


                const projectId =
                    card.dataset.project;


                openProject(
                    projectId
                );

            }
        );


        /* =================================================
           CLOSE BUTTON
        ================================================== */

        modalClose.addEventListener(
            "click",
            closeProject
        );


        /* =================================================
           BACKDROP
        ================================================== */

        if (backdrop) {

            backdrop.addEventListener(
                "click",
                closeProject
            );

        }


        /* =================================================
           ESCAPE
        ================================================== */

        document.addEventListener(
            "keydown",
            event => {


                if (
                    event.key ===
                        "Escape" &&
                    modal.classList.contains(
                        "open"
                    )
                ) {

                    closeProject();

                }

            }
        );


        /* =================================================
           FILTER SYSTEM
        ================================================== */

        filters.forEach(
            filter => {


                filter.addEventListener(
                    "click",
                    () => {


                        /* =================================
                           ACTIVE BUTTON
                        ================================== */

                        filters.forEach(
                            button => {

                                button.classList.remove(
                                    "active"
                                );

                            }
                        );


                        filter.classList.add(
                            "active"
                        );


                        /* =================================
                           SELECTED CATEGORY
                        ================================== */

                        const selected =
                            filter.dataset.filter;


                        /* =================================
                           FILTER CARDS
                        ================================== */

                        document
                            .querySelectorAll(
                                ".project-card"
                            )
                            .forEach(
                                card => {


                                    const category =
                                        card.dataset.category;


                                    if (
                                        selected ===
                                            "all" ||
                                        category ===
                                            selected
                                    ) {

                                        card.style.display =
                                            "";

                                    }

                                    else {

                                        card.style.display =
                                            "none";

                                    }

                                }
                            );

                    }
                );

            }
        );


        console.log(
            "Projects initialized successfully."
        );

    }


    /* =====================================================
       WAIT UNTIL PROJECTS HTML IS LOADED
    ====================================================== */

    document.addEventListener(
        "portfolioSectionsLoaded",
        initializeProjects,
        {
            once: true
        }
    );


})();