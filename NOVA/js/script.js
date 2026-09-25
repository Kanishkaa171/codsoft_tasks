/* =========================================================
   NOVA — MAIN JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       LOADER
       ===================================================== */

    const loader = document.getElementById("loader");

    if (loader) {
        document.body.classList.add("loading");

        // Give the loader a short cinematic moment
        setTimeout(() => {
            loader.classList.add("loaded");
            document.body.classList.remove("loading");

            setTimeout(() => {
                loader.style.display = "none";
            }, 900);

        }, 900);
    }


    /* =====================================================
       GSAP CHECK
       ===================================================== */

    if (typeof gsap === "undefined") {
        console.warn("GSAP could not be loaded.");
        return;
    }

    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }


    /* =====================================================
       MENU
       ===================================================== */

    const menuButton = document.getElementById("menuButton");
    const menu = document.getElementById("menu");

    if (menuButton && menu) {

        let menuOpen = false;

        const menuLinks = menu.querySelectorAll(".menu-links a");

        gsap.set(menu, {
            autoAlpha: 0,
            pointerEvents: "none"
        });

        gsap.set(".menu-inner", {
            y: 30,
            opacity: 0
        });

        function openMenu() {

            menuOpen = true;

            menu.style.pointerEvents = "auto";
            menu.classList.add("active");

            gsap.to(menu, {
                autoAlpha: 1,
                duration: 0.6,
                ease: "power3.out"
            });

            gsap.to(".menu-inner", {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out"
            });

            gsap.fromTo(
                menuLinks,
                {
                    y: 35,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.08,
                    delay: 0.15,
                    ease: "power3.out"
                }
            );

            menuButton.setAttribute("aria-label", "Close menu");
        }


        function closeMenu() {

            menuOpen = false;

            gsap.to(menuLinks, {
                y: -15,
                opacity: 0,
                duration: 0.3,
                stagger: 0.03,
                ease: "power2.in"
            });

            gsap.to(".menu-inner", {
                y: 20,
                opacity: 0,
                duration: 0.4,
                ease: "power2.in"
            });

            gsap.to(menu, {
                autoAlpha: 0,
                duration: 0.5,
                delay: 0.15,
                ease: "power2.inOut",
                onComplete: () => {
                    menu.style.pointerEvents = "none";
                    menu.classList.remove("active");
                }
            });

            menuButton.setAttribute("aria-label", "Open menu");
        }


        menuButton.addEventListener("click", () => {

            if (menuOpen) {
                closeMenu();
            } else {
                openMenu();
            }

        });


        menuLinks.forEach(link => {

            link.addEventListener("click", () => {
                if (menuOpen) closeMenu();
            });

        });

    }


    /* =====================================================
       HERO INTRO
       ===================================================== */

    const heroTimeline = gsap.timeline({
        delay: 0.15
    });


    heroTimeline.fromTo(
        ".hero-image",
        {
            scale: 1.12,
            opacity: 0
        },
        {
            scale: 1,
            opacity: 1,
            duration: 1.8,
            ease: "power3.out"
        }
    );


    heroTimeline.fromTo(
        ".hero-kicker",
        {
            x: -40,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out"
        },
        "-=1.1"
    );


    heroTimeline.fromTo(
        ".hero-index",
        {
            x: 40,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out"
        },
        "<"
    );


    /* Hero title — each line separately */

    heroTimeline.fromTo(
        ".hero-title-line",
        {
            y: 80,
            opacity: 0,
            clipPath: "inset(100% 0 0 0)"
        },
        {
            y: 0,
            opacity: 1,
            clipPath: "inset(0% 0 0 0)",
            duration: 1,
            stagger: 0.12,
            ease: "power4.out"
        },
        "-=0.4"
    );


    heroTimeline.fromTo(
        ".hero-bottom p",
        {
            y: 25,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out"
        },
        "-=0.35"
    );


    heroTimeline.fromTo(
        ".hero-link",
        {
            x: -20,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out"
        },
        "-=0.45"
    );


    /* =====================================================
       HERO IMAGE PARALLAX
       ===================================================== */

    if (typeof ScrollTrigger !== "undefined") {

        gsap.to(".hero-image", {
            yPercent: 12,
            ease: "none",
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

    }


    /* =====================================================
       GENERIC REVEAL ANIMATIONS
       ===================================================== */

    const revealElements = document.querySelectorAll(".reveal");

    revealElements.forEach((element) => {

        gsap.fromTo(
            element,
            {
                y: 60,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );

    });


    /* =====================================================
       SECTION HEADERS
       ===================================================== */

    document.querySelectorAll(".section-top").forEach((sectionTop) => {

        gsap.fromTo(
            sectionTop.children,
            {
                y: 20,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.7,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionTop,
                    start: "top 88%",
                    toggleActions: "play none none reverse"
                }
            }
        );

    });


    /* =====================================================
       INTRO PARAGRAPH
       ===================================================== */

    document.querySelectorAll(".intro-bottom").forEach((block) => {

        gsap.fromTo(
            block,
            {
                y: 35,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: block,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );

    });


    /* =====================================================
       LARGE VISUAL IMAGE
       ===================================================== */

    document.querySelectorAll(".visual-image-wrap").forEach((section) => {

        const image = section.querySelector(".parallax-image");
        const caption = section.querySelector(".visual-caption");

        if (image) {

            gsap.fromTo(
                image,
                {
                    scale: 1.15
                },
                {
                    scale: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                }
            );

        }

        if (caption) {

            gsap.fromTo(
                caption,
                {
                    y: 30,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 70%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

        }

    });


    /* =====================================================
       SERVICES
       ===================================================== */

    const serviceRows = document.querySelectorAll(".service-row");

    if (serviceRows.length) {

        serviceRows.forEach((row, index) => {

            gsap.fromTo(
                row,
                {
                    x: index % 2 === 0 ? -60 : 60,
                    opacity: 0
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: row,
                        start: "top 88%",
                        toggleActions: "play none none reverse"
                    }
                }
            );


            row.addEventListener("mouseenter", () => {

                gsap.to(row, {
                    x: 12,
                    duration: 0.35,
                    ease: "power2.out"
                });

                gsap.to(row.querySelector(".service-arrow"), {
                    x: 8,
                    duration: 0.3,
                    ease: "power2.out"
                });

            });


            row.addEventListener("mouseleave", () => {

                gsap.to(row, {
                    x: 0,
                    duration: 0.35,
                    ease: "power2.out"
                });

                gsap.to(row.querySelector(".service-arrow"), {
                    x: 0,
                    duration: 0.3,
                    ease: "power2.out"
                });

            });

        });

    }


    /* =====================================================
       PROJECTS
       ===================================================== */

    const projects = document.querySelectorAll(".project");

    projects.forEach((project, index) => {

        const image = project.querySelector(".project-image img");
        const overlay = project.querySelector(".project-overlay");
        const info = project.querySelector(".project-info");

        gsap.fromTo(
            project,
            {
                y: 70,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: index * 0.05,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: project,
                    start: "top 88%",
                    toggleActions: "play none none reverse"
                }
            }
        );


        if (image) {

            project.addEventListener("mouseenter", () => {

                gsap.to(image, {
                    scale: 1.06,
                    duration: 0.8,
                    ease: "power3.out"
                });

                if (overlay) {
                    gsap.to(overlay, {
                        opacity: 1,
                        duration: 0.4
                    });
                }

            });


            project.addEventListener("mouseleave", () => {

                gsap.to(image, {
                    scale: 1,
                    duration: 0.8,
                    ease: "power3.out"
                });

                if (overlay) {
                    gsap.to(overlay, {
                        opacity: 0,
                        duration: 0.4
                    });
                }

            });

        }


        if (info) {

            gsap.fromTo(
                info,
                {
                    y: 20,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: project,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

        }

    });

/* =====================================================
   FEATURE — BLUR + MOTION IMAGE REVEAL
   ===================================================== */

const feature = document.querySelector(".feature-box");

if (feature) {

    const featureImage = feature.querySelector(".feature-image");
    const featureContent = feature.querySelector(".feature-content");

    /* Feature container enters first */

    gsap.fromTo(
        feature,
        {
            y: 60,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",

            scrollTrigger: {
                trigger: feature,
                start: "top 82%",
                toggleActions: "play none none reverse"
            }
        }
    );


    /* =================================================
       IMAGE:
       BLUR + SCALE + SIDE MOTION
       → SHARP + PERFECT POSITION
       ================================================= */

    if (featureImage) {

        gsap.fromTo(
            featureImage,
            {
                x: -140,
                scale: 1.18,
                filter: "blur(20px)",
                opacity: 0.15
            },
            {
                x: 0,
                scale: 1,
                filter: "blur(0px)",
                opacity: 1,

                duration: 1.6,
                ease: "power4.out",

                scrollTrigger: {
                    trigger: feature,
                    start: "top 78%",
                    toggleActions: "play none none reverse"
                }
            }
        );

    }


    /* =================================================
       FEATURE TEXT ENTERS AFTER IMAGE
       ================================================= */

    if (featureContent) {
        gsap.fromTo(
            featureContent.children,
            {
                x: 40,
                y: 20,
                opacity: 0
            },
            {
                x: 0,
                y: 0,
                opacity: 1,

                duration: 0.8,
                stagger: 0.12,
                delay: 0.35,

                ease: "power3.out",

                scrollTrigger: {
                    trigger: feature,
                    start: "top 72%",
                    toggleActions: "play none none reverse"
                }
            }
        );

    }

}



    /* =====================================================
       MANIFESTO
       ===================================================== */

    const manifestoText = document.querySelector(".manifesto-text");

    if (manifestoText) {

        gsap.fromTo(
            manifestoText,
            {
                y: 80,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: manifestoText,
                    start: "top 82%",
                    toggleActions: "play none none reverse"
                }
            }
        );

    }


    /* =====================================================
       CTA
       ===================================================== */

    const cta = document.querySelector(".cta");

    if (cta) {

        const ctaImage = cta.querySelector(".cta-image");
        const ctaContent = cta.querySelector(".cta-content");

        if (ctaImage && typeof ScrollTrigger !== "undefined") {

            gsap.fromTo(
                ctaImage,
                {
                    scale: 1.12
                },
                {
                    scale: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: cta,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                }
            );

        }


        if (ctaContent) {

            gsap.fromTo(
                ctaContent.children,
                {
                    y: 40,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    stagger: 0.12,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: cta,
                        start: "top 70%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

        }

    }


    /* =====================================================
       HEADER SCROLL EFFECT
       ===================================================== */

    const header = document.querySelector(".header");

    if (header && typeof ScrollTrigger !== "undefined") {

        ScrollTrigger.create({
            start: "top -80",
            end: 99999,

            onEnter: () => {
                header.classList.add("scrolled");
            },

            onLeaveBack: () => {
                header.classList.remove("scrolled");
            }
        });

    }


    /* =====================================================
       BACK TO TOP
       ===================================================== */

    const footerBottom = document.querySelector(".footer-bottom");

    if (footerBottom) {

        const spans = footerBottom.querySelectorAll("span");

        if (spans.length >= 3) {

            const backTop = spans[2];

            backTop.style.cursor = "pointer";

            backTop.addEventListener("click", () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            });

        }

    }


    /* =====================================================
       SMOOTH ANCHOR SCROLL
       ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =====================================================
       REFRESH SCROLLTRIGGER
       ===================================================== */

    if (typeof ScrollTrigger !== "undefined") {

        window.addEventListener("load", () => {
            ScrollTrigger.refresh();
        });

    }

});