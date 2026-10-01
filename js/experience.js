/* =========================================================
   EXPERIENCE / EDUCATION / SKILLS TABS
========================================================= */

(() => {
    "use strict";

    function initializeExperienceSection() {
        const section = document.getElementById("experience-section");

        if (!section) return;

        const tabs = Array.from(section.querySelectorAll(".experience-tab"));
        const panels = Array.from(section.querySelectorAll(".tab-panel"));

        if (!tabs.length || !panels.length) return;

        if (section.dataset.tabsReady === "true") return;
        section.dataset.tabsReady = "true";

        function activateTab(tabName, moveFocus = false) {
            tabs.forEach((tab) => {
                const active = tab.dataset.tab === tabName;
                tab.classList.toggle("active", active);
                tab.setAttribute("aria-selected", active ? "true" : "false");
                tab.setAttribute("tabindex", active ? "0" : "-1");
            });

            panels.forEach((panel) => {
                const active = panel.dataset.panel === tabName;
                panel.classList.toggle("active", active);
                panel.hidden = !active;
            });

            if (moveFocus) {
                const activeTab = tabs.find((tab) => tab.dataset.tab === tabName);
                activeTab?.focus();
            }
        }

        tabs.forEach((tab, index) => {
            tab.addEventListener("click", () => {
                activateTab(tab.dataset.tab);
            });

            tab.addEventListener("keydown", (event) => {
                let nextIndex = index;

                if (event.key === "ArrowRight") {
                    nextIndex = (index + 1) % tabs.length;
                } else if (event.key === "ArrowLeft") {
                    nextIndex = (index - 1 + tabs.length) % tabs.length;
                } else if (event.key === "Home") {
                    nextIndex = 0;
                } else if (event.key === "End") {
                    nextIndex = tabs.length - 1;
                } else {
                    return;
                }

                event.preventDefault();
                activateTab(tabs[nextIndex].dataset.tab, true);
            });
        });

        const initiallyActive = tabs.find((tab) => tab.classList.contains("active"));
        activateTab(initiallyActive?.dataset.tab || "experience");
    }

    // Navbar shortcuts: EXPERIENCE / SKILLS open the correct tab.
    document.addEventListener("click", (event) => {
        const link = event.target.closest(".nav-links a[data-tab-target]");
        if (!link) return;

        const target = link.dataset.tabTarget;
        const section = document.getElementById("experience-section");
        if (!section) return;

        const tab = section.querySelector(`.experience-tab[data-tab="${target}"]`);
        if (!tab) return;

        event.preventDefault();
        tab.click();
        section.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initializeExperienceSection, { once: true });
    } else {
        initializeExperienceSection();
    }

    document.addEventListener("portfolioSectionsLoaded", initializeExperienceSection);
})();
