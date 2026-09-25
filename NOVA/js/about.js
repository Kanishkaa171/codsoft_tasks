/* =========================================================
   NOVA® — ABOUT
   GSAP / ScrollTrigger
========================================================= */

gsap.registerPlugin(ScrollTrigger);


/* =========================================================
   LOADER
========================================================= */

const loader = document.getElementById("loader");

window.addEventListener("load", () => {

    setTimeout(() => {

        if (loader) {
            loader.classList.add("loaded");
        }

        initAboutAnimations();

    }, 1500);

});


/* =========================================================
   MENU
========================================================= */

const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

if (menuButton && menu) {

    menuButton.addEventListener("click", () => {

        const isOpen = menu.classList.toggle("open");

        document.body.classList.toggle("menu-open", isOpen);

        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Close menu" : "Open menu"
        );

        if (isOpen) {
            animateMenuIn();
        } else {
            animateMenuOut();
        }

    });

}


/* =========================================================
   MENU ANIMATION
========================================================= */

function animateMenuIn() {

    const links = document.querySelectorAll(".menu-links a");
    const label = document.querySelector(".menu-label");
    const footer = document.querySelector(".menu-footer");

    gsap.killTweensOf([
        links,
        label,
        footer
    ]);

    gsap.fromTo(
        label,
        {
            y: 20,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.65,
            ease: "power3.out"
        }
    );

    gsap.fromTo(
        links,
        {
            y: 80,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.08,
            ease: "power4.out",
            delay: 0.08
        }
    );

    gsap.fromTo(
        footer,
        {
            y: 15,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            delay: 0.3
        }
    );

}


function animateMenuOut() {

    const links = document.querySelectorAll(".menu-links a");

    gsap.to(
        links,
        {
            y: -20,
            opacity: 0,
            duration: 0.3,
            stagger: 0.025,
            ease: "power2.in"
        }
    );

}


/* =========================================================
   MAIN ABOUT ANIMATIONS
========================================================= */

function initAboutAnimations() {

    if (typeof gsap === "undefined") {
        console.warn("GSAP failed to load.");
        return;
    }

    if (typeof ScrollTrigger === "undefined") {
        console.warn("ScrollTrigger failed to load.");
        return;
    }


    /* -----------------------------------------------------
       HERO — INITIAL ENTRANCE
    ----------------------------------------------------- */

    const heroTimeline = gsap.timeline({
        defaults: {
            ease: "power4.out"
        }
    });


    heroTimeline.fromTo(
        ".about-hero-image",
        {
            scale: 1.2,
            opacity: 0
        },
        {
            scale: 1.12,
            opacity: 1,
            duration: 1.8,
            ease: "power3.out"
        }
    );


    heroTimeline.fromTo(
        ".about-hero-grid",
        {
            opacity: 0
        },
        {
            opacity: 0.38,
            duration: 1,
            ease: "power2.out"
        },
        "-=1.2"
    );


    heroTimeline.fromTo(
        ".about-hero-top .hero-reveal",
        {
            y: 35,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12
        },
        "-=0.8"
    );


    heroTimeline.fromTo(
        ".about-title-line span",
        {
            yPercent: 115
        },
        {
            yPercent: 0,
            duration: 1.15,
            stagger: 0.15,
            ease: "power4.out"
        },
        "-=0.55"
    );


    heroTimeline.fromTo(
        ".about-hero-bottom .hero-reveal",
        {
            y: 30,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15
        },
        "-=0.55"
    );


    /* -----------------------------------------------------
       HERO — CONTINUOUS SCROLL PARALLAX
    ----------------------------------------------------- */

    gsap.to(
        ".about-hero-image",
        {
            yPercent: 10,
            scale: 1.18,
            ease: "none",

            scrollTrigger: {
                trigger: ".about-hero",
                start: "top top",
                end: "bottom top",
                scrub: 1.2
            }
        }
    );


    gsap.to(
        ".about-hero-title",
        {
            yPercent: -18,
            ease: "none",

            scrollTrigger: {
                trigger: ".about-hero",
                start: "top top",
                end: "bottom top",
                scrub: 1
            }
        }
    );


    gsap.to(
        ".about-hero-top",
        {
            yPercent: -35,
            opacity: 0.35,
            ease: "none",

            scrollTrigger: {
                trigger: ".about-hero",
                start: "top top",
                end: "bottom top",
                scrub: 1
            }
        }
    );


    gsap.to(
        ".about-hero-bottom",
        {
            yPercent: 30,
            opacity: 0.2,
            ease: "none",

            scrollTrigger: {
                trigger: ".about-hero",
                start: "top top",
                end: "bottom top",
                scrub: 1
            }
        }
    );


    /* -----------------------------------------------------
       STUDIO — IMAGE + TEXT
    ----------------------------------------------------- */

    gsap.fromTo(
        ".studio-image",
        {
            xPercent: -18,
            scale: 1.18
        },
        {
            xPercent: 8,
            scale: 1.05,
            ease: "none",

            scrollTrigger: {
                trigger: ".about-studio",
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2
            }
        }
    );


    gsap.fromTo(
        ".studio-content",
        {
            x: 90,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            ease: "none",

            scrollTrigger: {
                trigger: ".studio-layout",
                start: "top 78%",
                end: "top 35%",
                scrub: 1
            }
        }
    );


    gsap.fromTo(
        ".studio-small",
        {
            y: 30,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,

            scrollTrigger: {
                trigger: ".studio-content",
                start: "top 78%",
                end: "top 48%",
                scrub: 1
            }
        }
    );


    gsap.fromTo(
        ".studio-content h2",
        {
            y: 80
        },
        {
            y: 0,

            scrollTrigger: {
                trigger: ".studio-content",
                start: "top 72%",
                end: "top 35%",
                scrub: 1
            }
        }
    );


    gsap.fromTo(
        ".studio-copy",
        {
            y: 60,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,

            scrollTrigger: {
                trigger: ".studio-copy",
                start: "top 82%",
                end: "top 52%",
                scrub: 1
            }
        }
    );


    /* -----------------------------------------------------
       APPROACH — INTRO
    ----------------------------------------------------- */

    gsap.fromTo(
        ".approach-intro h2",
        {
            x: -100,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            ease: "none",

            scrollTrigger: {
                trigger: ".approach-intro",
                start: "top 82%",
                end: "top 40%",
                scrub: 1
            }
        }
    );


    gsap.fromTo(
        ".approach-intro > p",
        {
            x: 80,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            ease: "none",

            scrollTrigger: {
                trigger: ".approach-intro",
                start: "top 78%",
                end: "top 40%",
                scrub: 1
            }
        }
    );


    /* -----------------------------------------------------
       APPROACH — IMAGE
    ----------------------------------------------------- */

    gsap.fromTo(
        ".approach-image img",
        {
            xPercent: -14,
            scale: 1.18
        },
        {
            xPercent: 10,
            scale: 1.04,
            ease: "none",

            scrollTrigger: {
                trigger: ".approach-stage",
                start: "top bottom",
                end: "bottom top",
                scrub: 1.3
            }
        }
    );


    /* -----------------------------------------------------
       APPROACH — ROWS
    ----------------------------------------------------- */

    const approachItems =
        document.querySelectorAll(".approach-item");

    approachItems.forEach((item, index) => {

        gsap.fromTo(
            item,
            {
                x: index % 2 === 0 ? 80 : -80,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                ease: "none",

                scrollTrigger: {
                    trigger: item,
                    start: "top 88%",
                    end: "top 58%",
                    scrub: 1
                }
            }
        );

    });


    /* -----------------------------------------------------
       STATEMENT — LARGE TYPE
    ----------------------------------------------------- */

    gsap.fromTo(
        ".statement-line-one span",
        {
            xPercent: -30
        },
        {
            xPercent: 5,
            ease: "none",

            scrollTrigger: {
                trigger: ".about-statement",
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        }
    );


    gsap.fromTo(
        ".statement-line-two span",
        {
            xPercent: 20
        },
        {
            xPercent: -8,
            ease: "none",

            scrollTrigger: {
                trigger: ".about-statement",
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        }
    );


    gsap.fromTo(
        ".statement-line-three span",
        {
            xPercent: -18
        },
        {
            xPercent: 12,
            ease: "none",

            scrollTrigger: {
                trigger: ".about-statement",
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        }
    );


    gsap.fromTo(
        ".statement-line-four span",
        {
            xPercent: 15
        },
        {
            xPercent: -6,
            ease: "none",

            scrollTrigger: {
                trigger: ".about-statement",
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        }
    );


    gsap.fromTo(
        ".statement-footer",
        {
            y: 35,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,

            scrollTrigger: {
                trigger: ".about-statement",
                start: "top 65%",
                end: "top 35%",
                scrub: 1
            }
        }
    );


    /* -----------------------------------------------------
       PROCESS — PINNED SECTION
    ----------------------------------------------------- */

    const processTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".about-process",
            start: "top top",
            end: "bottom bottom",
            scrub: 1.2
        }
    });


    processTimeline
        .fromTo(
            ".process-image",
            {
                scale: 1.2,
                xPercent: -5
            },
            {
                scale: 1.02,
                xPercent: 7,
                ease: "none"
            },
            0
        )

        .fromTo(
            ".process-content",
            {
                x: -110,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                ease: "none"
            },
            0.08
        )

        .fromTo(
            ".process-title",
            {
                y: 90
            },
            {
                y: -20,
                ease: "none"
            },
            0.1
        )

        .fromTo(
            ".process-description",
            {
                y: 70,
                opacity: 0
            },
            {
                y: -15,
                opacity: 1,
                ease: "none"
            },
            0.22
        )

        .fromTo(
            ".process-progress-line",
            {
                scaleX: 0,
                transformOrigin: "left center"
            },
            {
                scaleX: 1,
                ease: "none"
            },
            0
        );


    /* -----------------------------------------------------
       PRINCIPLES
    ----------------------------------------------------- */

    gsap.fromTo(
        ".principles-copy",
        {
            x: -100,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            ease: "none",

            scrollTrigger: {
                trigger: ".principles-layout",
                start: "top 80%",
                end: "top 42%",
                scrub: 1
            }
        }
    );


    gsap.fromTo(".principles-image",
    {
        scale: 1.02,
        opacity: 0.75
    },
    {
        scale: 1,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
            trigger: ".principles-image-wrap",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2
        }
    }
);

    gsap.fromTo(
        ".principle-card",
        {
            y: 80,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: "none",

            scrollTrigger: {
                trigger: ".principle-grid",
                start: "top 82%",
                end: "top 45%",
                scrub: 1
            }
        }
    );


    /* -----------------------------------------------------
       CAPABILITIES HEADING
    ----------------------------------------------------- */

    gsap.fromTo(
        ".capabilities-heading h2",
        {
            x: -120,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            ease: "none",

            scrollTrigger: {
                trigger: ".capabilities-heading",
                start: "top 80%",
                end: "top 38%",
                scrub: 1
            }
        }
    );


    /* -----------------------------------------------------
       CAPABILITY ROWS
    ----------------------------------------------------- */

    const capabilityRows =
        document.querySelectorAll(".capability-row");

    capabilityRows.forEach((row, index) => {

        gsap.fromTo(
            row,
            {
                x: index % 2 === 0 ? -70 : 70,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                ease: "none",

                scrollTrigger: {
                    trigger: row,
                    start: "top 88%",
                    end: "top 60%",
                    scrub: 1
                }
            }
        );

    });


    /* -----------------------------------------------------
       FINAL CTA IMAGE
    ----------------------------------------------------- */

    gsap.fromTo(
        ".about-final-image",
        {
            scale: 1.2,
            xPercent: -4
        },
        {
            scale: 1.05,
            xPercent: 4,
            ease: "none",

            scrollTrigger: {
                trigger: ".about-final",
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2
            }
        }
    );


    /* -----------------------------------------------------
       FINAL CTA CONTENT
    ----------------------------------------------------- */

    gsap.fromTo(
        ".about-final-content",
        {
            y: 100,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            ease: "none",

            scrollTrigger: {
                trigger: ".about-final",
                start: "top 72%",
                end: "top 35%",
                scrub: 1
            }
        }
    );


    gsap.fromTo(
        ".about-final-meta",
        {
            y: 30,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,

            scrollTrigger: {
                trigger: ".about-final",
                start: "top 55%",
                end: "top 25%",
                scrub: 1
            }
        }
    );


    /* -----------------------------------------------------
       FOOTER
    ----------------------------------------------------- */

    gsap.fromTo(
        ".about-footer-top",
        {
            y: 40,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,

            scrollTrigger: {
                trigger: ".about-footer",
                start: "top 88%",
                end: "top 60%",
                scrub: 1
            }
        }
    );


    gsap.fromTo(
        ".about-footer-grid > div",
        {
            y: 45,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            stagger: 0.1,

            scrollTrigger: {
                trigger: ".about-footer-grid",
                start: "top 88%",
                end: "top 60%",
                scrub: 1
            }
        }
    );


    /* -----------------------------------------------------
       BACK TO TOP
    ----------------------------------------------------- */

    const backToTop =
        document.getElementById("backToTop");

    if (backToTop) {

        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* -----------------------------------------------------
       REFRESH SCROLLTRIGGER
    ----------------------------------------------------- */

    ScrollTrigger.refresh();

}


/* =========================================================
   FALLBACK
   If page is loaded from cache and window load already fired
========================================================= */

if (document.readyState === "complete") {

    setTimeout(() => {

        if (
            typeof gsap !== "undefined" &&
            typeof ScrollTrigger !== "undefined"
        ) {
            initAboutAnimations();
        }

    }, 100);

}