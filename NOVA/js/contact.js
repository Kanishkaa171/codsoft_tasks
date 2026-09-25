/* =====================================================
   NOVA® — CONTACT PAGE
===================================================== */

gsap.registerPlugin(ScrollTrigger);

let contactInitialized = false;


/* =====================================================
   INITIALIZE
===================================================== */

function initContactAnimations() {

    if (contactInitialized) return;

    contactInitialized = true;

    const loader = document.getElementById("loader");


    /* =================================================
       LOADER
    ================================================= */

    if (loader) {

        gsap.set(loader, {
            opacity: 1,
            visibility: "visible"
        });

        setTimeout(() => {

            gsap.to(loader, {
                opacity: 0,
                duration: .9,
                ease: "power4.inOut",
                onComplete: () => {
                    loader.classList.add("loaded");
                }
            });

        }, 1500);

    }


    /* =================================================
       MENU
    ================================================= */

    const menuButton = document.getElementById("menuButton");
    const menu = document.getElementById("menu");

    if (menuButton && menu) {

        let menuOpen = false;

        menuButton.addEventListener("click", () => {

            menuOpen = !menuOpen;

            if (menuOpen) {
                openMenu();
            } else {
                closeMenu();
            }

        });


        function openMenu() {

            menu.classList.add("open");

            document.body.style.overflow = "hidden";

            gsap.set(".menu-links a", {
                y: 70,
                opacity: 0
            });

            gsap.set(
                ".menu-label, .menu-footer",
                {
                    opacity: 0
                }
            );

            gsap.to(".menu-links a", {
                y: 0,
                opacity: 1,
                duration: .75,
                stagger: .08,
                ease: "power4.out",
                delay: .15
            });

            gsap.to(
                ".menu-label, .menu-footer",
                {
                    opacity: 1,
                    duration: .5,
                    delay: .4
                }
            );

        }


        function closeMenu() {

            document.body.style.overflow = "";

            gsap.to(".menu-links a", {
                y: -30,
                opacity: 0,
                duration: .35,
                stagger: .04,
                ease: "power3.in",
                onComplete: () => {
                    menu.classList.remove("open");
                }
            });

        }

    }


    /* =================================================
       HERO
    ================================================= */

    const hero = document.querySelector(".contact-hero");
    const heroTop = document.querySelector(".contact-hero-top");
    const heroLines = document.querySelectorAll(
        ".contact-title-line span"
    );
    const heroBottom = document.querySelector(
        ".contact-hero-bottom"
    );


    /* -------------------------------------------------
       HERO INITIAL STATE
    ------------------------------------------------- */

    gsap.set(heroTop, {
        y: -25,
        opacity: 0
    });

    gsap.set(heroLines, {
        yPercent: 110,
        opacity: 0
    });

    gsap.set(heroBottom, {
        y: 30,
        opacity: 0
    });


    /* -------------------------------------------------
       HERO IMAGE
    ------------------------------------------------- */

    if (hero) {

        gsap.fromTo(
            hero,
            {
                backgroundPosition: "50% 42%"
            },
            {
                backgroundPosition: "50% 50%",
                duration: 2.2,
                ease: "power3.out"
            }
        );

    }


    /* -------------------------------------------------
       HERO TOP REVEAL
    ------------------------------------------------- */

    gsap.to(heroTop, {

        y: 0,
        opacity: 1,

        duration: .9,
        ease: "power4.out",

        delay: .15

    });


    /* -------------------------------------------------
       HERO TITLE REVEAL
    ------------------------------------------------- */

    gsap.to(heroLines, {

        yPercent: 0,
        opacity: 1,

        duration: 1.15,

        stagger: .16,

        ease: "power4.out",

        delay: .35

    });


    /* -------------------------------------------------
       HERO BOTTOM
    ------------------------------------------------- */

    gsap.to(heroBottom, {

        y: 0,
        opacity: 1,

        duration: .9,

        ease: "power4.out",

        delay: .95

    });


    /* -------------------------------------------------
       HERO SCROLL PARALLAX
    ------------------------------------------------- */

    if (hero) {

        gsap.to(heroLines, {

            y: -55,

            ease: "none",

            scrollTrigger: {
                trigger: hero,
                start: "top top",
                end: "bottom top",
                scrub: 1
            }

        });


        gsap.to(".contact-hero::before", {
            y: 0
        });

    }


    /* =================================================
       DIRECT CONTACT
    ================================================= */

    const direct = document.querySelector(".contact-direct");

    if (direct) {

        const label = direct.querySelector(
            ".contact-section-label"
        );

        const intro = direct.querySelector(
            ".contact-direct-intro"
        );

        const details = direct.querySelector(
            ".contact-details"
        );


        gsap.set(
            [label, intro, details],
            {
                opacity: 0
            }
        );

        gsap.set(label, {
            y: 30
        });

        gsap.set(intro, {
            x: -70
        });

        gsap.set(details, {
            x: 70
        });


        ScrollTrigger.create({

            trigger: direct,

            start: "top 72%",

            once: true,

            onEnter: () => {

                gsap.to(label, {
                    y: 0,
                    opacity: 1,
                    duration: .7,
                    ease: "power4.out"
                });

                gsap.to(intro, {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power4.out",
                    delay: .12
                });

                gsap.to(details, {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power4.out",
                    delay: .2
                });

            }

        });

    }


    /* =================================================
       DIRECT CONTACT — SCROLL MOTION
    ================================================= */

    gsap.to(
        ".contact-direct-intro",
        {
            y: -35,

            ease: "none",

            scrollTrigger: {
                trigger: ".contact-direct",
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2
            }
        }
    );


    gsap.to(
        ".contact-details",
        {
            y: 25,

            ease: "none",

            scrollTrigger: {
                trigger: ".contact-direct",
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2
            }
        }
    );


    /* =================================================
       VISUAL STUDY
    ================================================= */

    const visual = document.querySelector(
        ".contact-visual"
    );

    const visualImage = document.querySelector(
        ".contact-visual-image img"
    );

    const visualMeta = document.querySelector(
        ".contact-visual-meta"
    );

    const statementLines = document.querySelectorAll(
        ".contact-visual-statement span"
    );


    /* IMAGE */

    if (visualImage) {

        gsap.fromTo(
            visualImage,
            {
                scale: 1.16
            },
            {
                scale: 1,

                ease: "none",

                scrollTrigger: {
                    trigger: ".contact-visual-image",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.4
                }
            }
        );

    }


    /* IMAGE REVEAL */

    if (visual) {

        gsap.set(
            ".contact-visual-image",
            {
                clipPath: "inset(0 0 100% 0)"
            }
        );

        ScrollTrigger.create({

            trigger: visual,

            start: "top 78%",

            once: true,

            onEnter: () => {

                gsap.to(
                    ".contact-visual-image",
                    {
                        clipPath: "inset(0 0 0% 0)",

                        duration: 1.25,

                        ease: "power4.inOut"
                    }
                );

            }

        });

    }


    /* META */

    if (visualMeta) {

        gsap.fromTo(
            visualMeta,
            {
                y: 30,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,

                duration: .8,

                ease: "power4.out",

                scrollTrigger: {
                    trigger: visualMeta,
                    start: "top 85%",
                    once: true
                }
            }
        );

    }


    /* STATEMENT */

    if (statementLines.length) {

        gsap.set(statementLines, {
            y: 80,
            opacity: 0
        });


        ScrollTrigger.create({

            trigger: ".contact-visual-statement",

            start: "top 78%",

            once: true,

            onEnter: () => {

                gsap.to(statementLines, {

                    y: 0,
                    opacity: 1,

                    duration: .9,

                    stagger: .13,

                    ease: "power4.out"

                });

            }

        });

    }


    /* =================================================
       INQUIRY
    ================================================= */

    const inquiry = document.querySelector(
        ".contact-inquiry"
    );

    if (inquiry) {

        const label = inquiry.querySelector(
            ".contact-section-label"
        );

        const intro = inquiry.querySelector(
            ".inquiry-intro"
        );

        const fields = inquiry.querySelectorAll(
            ".form-field"
        );

        const submit = inquiry.querySelector(
            ".contact-submit"
        );

        const note = inquiry.querySelector(
            ".form-note"
        );


        gsap.set(label, {
            y: 30,
            opacity: 0
        });

        gsap.set(intro, {
            x: -60,
            opacity: 0
        });

        gsap.set(fields, {
            x: 50,
            opacity: 0
        });

        gsap.set(
            [submit, note],
            {
                y: 25,
                opacity: 0
            }
        );


        ScrollTrigger.create({

            trigger: inquiry,

            start: "top 70%",

            once: true,

            onEnter: () => {

                gsap.to(label, {
                    y: 0,
                    opacity: 1,
                    duration: .7,
                    ease: "power4.out"
                });

                gsap.to(intro, {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power4.out",
                    delay: .1
                });

                gsap.to(fields, {
                    x: 0,
                    opacity: 1,
                    duration: .7,
                    stagger: .1,
                    ease: "power4.out",
                    delay: .2
                });

                gsap.to(submit, {
                    y: 0,
                    opacity: 1,
                    duration: .7,
                    ease: "power4.out",
                    delay: .7
                });

                gsap.to(note, {
                    y: 0,
                    opacity: 1,
                    duration: .6,
                    ease: "power4.out",
                    delay: .8
                });

            }

        });

    }


    /* =================================================
       FORM SUBMISSION
    ================================================= */

    const form = document.getElementById(
        "contactForm"
    );

    if (form) {

        form.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();

                const buttonText =
                    form.querySelector(
                        ".contact-submit span"
                    );

                if (buttonText) {

                    buttonText.textContent =
                        "INQUIRY RECEIVED";

                }

                gsap.to(
                    ".contact-submit",
                    {
                        opacity: .5,
                        duration: .3
                    }
                );

            }
        );

    }


    /* =================================================
       FINAL CTA
    ================================================= */

    const finalSection =
        document.querySelector(
            ".contact-final"
        );


    if (finalSection) {

        const finalLabel =
            finalSection.querySelector(
                ".contact-final-content > span"
            );

        const finalTitle =
            finalSection.querySelector(
                "h2"
            );

        const finalLink =
            finalSection.querySelector(
                ".contact-final-link"
            );


        gsap.set(
            [finalLabel, finalTitle, finalLink],
            {
                opacity: 0
            }
        );

        gsap.set(finalLabel, {
            y: 25
        });

        gsap.set(finalTitle, {
            y: 70
        });

        gsap.set(finalLink, {
            y: 35
        });


        ScrollTrigger.create({

            trigger: finalSection,

            start: "top 70%",

            once: true,

            onEnter: () => {

                gsap.to(finalLabel, {
                    y: 0,
                    opacity: 1,
                    duration: .7,
                    ease: "power4.out"
                });

                gsap.to(finalTitle, {
                    y: 0,
                    opacity: 1,
                    duration: 1.1,
                    ease: "power4.out",
                    delay: .12
                });

                gsap.to(finalLink, {
                    y: 0,
                    opacity: 1,
                    duration: .8,
                    ease: "power4.out",
                    delay: .35
                });

            }

        });


        /* CTA scroll movement */

        gsap.to(finalTitle, {

            y: -35,

            ease: "none",

            scrollTrigger: {
                trigger: finalSection,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2
            }

        });

    }


    /* =================================================
       FOOTER
    ================================================= */

    const footer =
        document.querySelector(
            ".contact-footer"
        );

    if (footer) {

        const footerColumns =
            footer.querySelectorAll(
                ".footer-column"
            );

        const footerBottom =
            footer.querySelector(
                ".footer-bottom"
            );


        gsap.set(footerColumns, {
            y: 35,
            opacity: 0
        });

        gsap.set(footerBottom, {
            y: 20,
            opacity: 0
        });


        ScrollTrigger.create({

            trigger: footer,

            start: "top 82%",

            once: true,

            onEnter: () => {

                gsap.to(footerColumns, {

                    y: 0,
                    opacity: 1,

                    duration: .7,

                    stagger: .1,

                    ease: "power4.out"

                });

                gsap.to(footerBottom, {

                    y: 0,
                    opacity: 1,

                    duration: .7,

                    delay: .3,

                    ease: "power4.out"

                });

            }

        });

    }


    /* =================================================
       REFRESH
    ================================================= */

    setTimeout(() => {
        ScrollTrigger.refresh();
    }, 800);

}


/* =====================================================
   START
===================================================== */

if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
) {

    setTimeout(
        initContactAnimations,
        50
    );

} else {

    window.addEventListener(
        "DOMContentLoaded",
        initContactAnimations
    );

    window.addEventListener(
        "load",
        initContactAnimations
    );

}