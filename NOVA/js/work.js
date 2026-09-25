document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.warn("GSAP / ScrollTrigger not loaded.");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

const loader = document.getElementById("loader");

window.addEventListener("load", () => {
    setTimeout(() => {
        if (loader) {
            loader.classList.add("loaded");
        }

        initWorkAnimations();
    }, 1500);
});

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const header = document.querySelector(".work-header");

  if (header) {
    ScrollTrigger.create({
      start: "top -40",
      onEnter: () => header.classList.add("work-header-scrolled"),
      onLeaveBack: () => header.classList.remove("work-header-scrolled")
    });
  }

  const menu = document.querySelector("#menu");
  const menuButton = document.querySelector("#menuButton");

  if (menu && menuButton) {

    const menuLinks = menu.querySelectorAll(".menu-links a");

    menuButton.addEventListener("click", () => {

        menu.classList.toggle("open");

        document.body.classList.toggle(
            "menu-open",
            menu.classList.contains("open")
        );

    });

    menuLinks.forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("open");
            document.body.classList.remove("menu-open");

        });

    });
}

  const intro = document.querySelector(".work-intro");

  if (intro && !reduceMotion) {
    const bg = intro.querySelector(".work-intro-bg img");
    const meta = intro.querySelector(".work-intro-meta");
    const title = intro.querySelectorAll(".work-title-line span");
    const bottom = intro.querySelector(".work-intro-bottom");
    const indicator = intro.querySelector(".work-scroll-indicator");

    gsap.set(title, {
      yPercent: 115,
      opacity: 0
    });

    if (meta) {
      gsap.set(meta, {
        y: -25,
        opacity: 0
      });
    }

    if (bottom) {
      gsap.set(bottom, {
        y: 35,
        opacity: 0
      });
    }

    if (indicator) {
      gsap.set(indicator, {
        x: 35,
        opacity: 0
      });
    }

    if (bg) {
      gsap.set(bg, {
        scale: 1.16,
        opacity: 0.35
      });
    }

    const introTL = gsap.timeline({
      defaults: {
        ease: "power4.out"
      }
    });

    if (bg) {
      introTL.to(
        bg,
        {
          scale: 1.08,
          opacity: 1,
          duration: 1.8,
          ease: "power3.out"
        },
        0
      );
    }

    if (meta) {
      introTL.to(
        meta,
        {
          y: 0,
          opacity: 1,
          duration: 0.8
        },
        0.25
      );
    }

    introTL.to(
      title,
      {
        yPercent: 0,
        opacity: 1,
        duration: 1.1,
        stagger: 0.14,
        ease: "power4.out"
      },
      0.45
    );

    if (bottom) {
      introTL.to(
        bottom,
        {
          y: 0,
          opacity: 1,
          duration: 0.8
        },
        0.95
      );
    }

    if (indicator) {
      introTL.to(
        indicator,
        {
          x: 0,
          opacity: 1,
          duration: 0.6
        },
        1.1
      );
    }

    if (bg) {
      gsap.to(bg, {
        yPercent: 8,
        scale: 1.02,
        ease: "none",
        scrollTrigger: {
          trigger: intro,
          start: "top top",
          end: "bottom top",
          scrub: 1.5
        }
      });
    }
  }

  const featured = document.querySelector(".work-featured");

  if (featured && !reduceMotion) {
    const image = featured.querySelector("img");

    const textElements = featured.querySelectorAll(
      "h1, h2, h3, p, span, small, a"
    );

    gsap.set(textElements, {
      y: 45,
      opacity: 0
    });

    gsap.to(textElements, {
      y: 0,
      opacity: 1,
      duration: 0.75,
      stagger: 0.07,
      ease: "power3.out",
      scrollTrigger: {
        trigger: featured,
        start: "top 72%",
        once: true
      }
    });

    if (image) {
      gsap.fromTo(
        image,
        {
          scale: 1.18,
          xPercent: -4
        },
        {
          scale: 1,
          xPercent: 4,
          ease: "none",
          scrollTrigger: {
            trigger: featured,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.4
          }
        }
      );
    }
  }


const editorialProjects = document.querySelectorAll(
  ".editorial-project"
);

editorialProjects.forEach((project, index) => {
  if (reduceMotion) return;

  const image = project.querySelector("img");

  const text = project.querySelectorAll(
    "h1, h2, h3, p, a, span"
  );

  const direction = index % 2 === 0 ? -1 : 1;

  if (image) {
    gsap.fromTo(
      image,
      {
        xPercent: direction * 22,
        scale: 1.08,
        opacity: 0.45
      },
      {
        xPercent: 0,
        scale: 1,
        opacity: 1,
        ease: "none",

        scrollTrigger: {
          trigger: project,

          start: "top 92%",
          end: "top 42%",

          scrub: 1.1
        }
      }
    );

    gsap.fromTo(
      image,
      {
        yPercent: 0
      },
      {
        yPercent: direction * -4,
        ease: "none",

        scrollTrigger: {
          trigger: project,
          start: "top 42%",
          end: "bottom 12%",
          scrub: 1.5
        }
      }
    );
  }

  if (text.length) {
    gsap.fromTo(
      text,
      {
        x: direction * -55,
        y: 25,
        opacity: 0
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        ease: "none",

        scrollTrigger: {
          trigger: project,


          start: "top 88%",
          end: "top 42%",

          scrub: 1
        }
      }
    );

    gsap.fromTo(
      text,
      {
        x: 0,
        y: 0
      },
      {
        x: direction * 12,
        y: -12,
        ease: "none",

        scrollTrigger: {
          trigger: project,
          start: "top 42%",
          end: "bottom 12%",
          scrub: 1.5
        }
      }
    );
  }

  const meta = project.querySelectorAll(
    "[class*='number'], [class*='meta'], [class*='tag'], [class*='label']"
  );

  if (meta.length) {
    gsap.fromTo(
      meta,
      {
        x: direction * -30,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        ease: "none",

        scrollTrigger: {
          trigger: project,
          start: "top 88%",
          end: "top 45%",
          scrub: 1
        }
      }
    );
  }
});

  const statement = document.querySelector(".work-statement");

  if (statement && !reduceMotion) {
    const statementText = statement.querySelectorAll(
      "h1, h2, h3, p, span"
    );

    gsap.set(statementText, {
      yPercent: 115,
      opacity: 0
    });

    gsap.to(statementText, {
      yPercent: 0,
      opacity: 1,
      duration: 1.1,
      stagger: 0.12,
      ease: "power4.out",
      scrollTrigger: {
        trigger: statement,
        start: "top 72%",
        once: true
      }
    });

    gsap.to(statementText, {
      x: 18,
      ease: "none",
      scrollTrigger: {
        trigger: statement,
        start: "top bottom",
        end: "bottom top",
        scrub: 2
      }
    });
  }

  const finalProject = document.querySelector(".work-final-project");

if (finalProject && !reduceMotion) {
  const image = finalProject.querySelector("img");

  const content = finalProject.querySelectorAll(
    "h1, h2, h3, p, span, a"
  );

  if (image) {
    gsap.fromTo(
      image,
      {
        scale: 1.18,
        clipPath: "inset(10% 7% 10% 7%)",
        yPercent: 5
      },
      {
        scale: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        yPercent: -5,
        ease: "none",

        scrollTrigger: {
          trigger: finalProject,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2
        }
      }
    );
  }

  if (content.length) {
    gsap.fromTo(
      content,
      {
        y: 70,
        opacity: 0
      },
      {
        y: -10,
        opacity: 1,
        stagger: 0.05,
        ease: "none",

        scrollTrigger: {
          trigger: finalProject,
          start: "top 90%",
          end: "bottom 15%",
          scrub: 1.1
        }
      }
    );
  }

  if (image) {
    gsap.to(image, {
      xPercent: 2,
      ease: "none",

      scrollTrigger: {
        trigger: finalProject,
        start: "top bottom",
        end: "bottom top",
        scrub: 2
      }
    });
  }

  const finalTitle = finalProject.querySelector(
    "h1, h2, h3"
  );

  if (finalTitle) {
    gsap.to(finalTitle, {
      y: -35,
      x: 12,
      ease: "none",

      scrollTrigger: {
        trigger: finalProject,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5
      }
    });
  }
}

  const capabilities = document.querySelector(
    ".work-capabilities"
  );

  if (capabilities && !reduceMotion) {
    const rows = capabilities.querySelectorAll(
      "li, article, .capability-row, [class*='capability']"
    );

    if (rows.length) {
      rows.forEach((row, index) => {
        gsap.fromTo(
          row,
          {
            y: 45,
            opacity: 0,
            x: index % 2 === 0 ? -20 : 20
          },
          {
            y: 0,
            opacity: 1,
            x: 0,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 82%",
              once: true
            }
          }
        );
      });
    }
  }

  const cta = document.querySelector(".work-cta");

  if (cta && !reduceMotion) {
    const image = cta.querySelector("img");

    const content = cta.querySelectorAll(
      "h1, h2, h3, p, span, a"
    );

    if (image) {
      gsap.fromTo(
        image,
        {
          scale: 1.18
        },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: cta,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5
          }
        }
      );
    }

    gsap.set(content, {
      y: 60,
      opacity: 0
    });

    gsap.to(content, {
      y: 0,
      opacity: 1,
      duration: 0.85,
      stagger: 0.08,
      ease: "power4.out",
      scrollTrigger: {
        trigger: cta,
        start: "top 72%",
        once: true
      }
    });
  }

  const backTop = document.querySelector(
    ".work-back-top, [data-back-top]"
  );

  if (backTop) {
    backTop.addEventListener("click", e => {
      e.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });

  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 800);
});