/* =========================================================
   AP2MD-CONNECT-PRO v01
   JavaScript principal
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       ANNÉE AUTOMATIQUE
    ========================== */

    const yearElement = document.getElementById("currentYear");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    /* =========================
       MENU MOBILE
    ========================== */

    const menuButton = document.querySelector(".menu-button");
    const navigation = document.querySelector(".main-nav");

    if (menuButton && navigation) {

        menuButton.addEventListener("click", () => {

            const isOpen = navigation.classList.toggle("mobile-open");

            menuButton.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });

    }


    /* =========================
       FERMETURE DU MENU
       APRÈS CLIC SUR UN LIEN
    ========================== */

    const navigationLinks = document.querySelectorAll(".main-nav a");

    navigationLinks.forEach((link) => {

        link.addEventListener("click", () => {

            if (navigation) {
                navigation.classList.remove("mobile-open");
            }

            if (menuButton) {
                menuButton.setAttribute("aria-expanded", "false");
            }

        });

    });


    /* =========================
       ANIMATION D'APPARITION
    ========================== */

    const animatedElements = document.querySelectorAll(
        ".feature-card, .stat-card, .flow-item, .hero-card"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries, observerInstance) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observerInstance.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        animatedElements.forEach((element) => {
            observer.observe(element);
        });

    }


    /* =========================
       PROTECTION CONTRE LES LIENS
       INTERNES INEXISTANTS
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =========================
       CONSOLE INSTITUTIONNELLE
    ========================== */

    console.log(
        "AP2MD-CONNECT-PRO v01 — Plateforme institutionnelle AP2MD-Douké"
    );

});
