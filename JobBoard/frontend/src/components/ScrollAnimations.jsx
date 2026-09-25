import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollAnimations() {
  const location = useLocation();

  useLayoutEffect(() => {
    const main = document.querySelector("main, .home-page, .jobs-page");

    if (!main) return;

    const elements = Array.from(
      main.querySelectorAll(
        "h1, h2, h3, h4, h5, h6, p, span, li, label, img, a, button"
      )
    );

    let imageIndex = 0;
    const animatedElements = [];

    elements.forEach((element, index) => {
      /* Don't animate individual spans inside headings */
      if (
        element.parentElement &&
        ["H1", "H2", "H3", "H4", "H5", "H6"].includes(
          element.parentElement.tagName
        )
      ) {
        return;
      }

      /* Don't animate empty elements */
      if (
        element.tagName !== "IMG" &&
        element.textContent.trim() === ""
      ) {
        return;
      }

      element.classList.remove(
        "reveal-text",
        "reveal-soft",
        "reveal-left",
        "reveal-right",
        "reveal-up",
        "is-visible"
      );

      element.style.setProperty(
        "--reveal-delay",
        `${Math.min(index * 30, 180)}ms`
      );

      /* Headings */
      if (
        element.tagName === "H1" ||
        element.tagName === "H2" ||
        element.tagName === "H3" ||
        element.tagName === "H4" ||
        element.tagName === "H5" ||
        element.tagName === "H6"
      ) {
        element.classList.add("reveal-text");
      }

      /* Images */
      else if (element.tagName === "IMG") {
        element.classList.add(
          imageIndex % 2 === 0
            ? "reveal-left"
            : "reveal-right"
        );

        imageIndex++;
      }

      /* Text */
      else if (
        element.tagName === "P" ||
        element.tagName === "SPAN" ||
        element.tagName === "LI" ||
        element.tagName === "LABEL"
      ) {
        element.classList.add("reveal-soft");
      }

      /* Buttons and links */
      else {
        element.classList.add("reveal-up");
      }

      animatedElements.push(element);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0.01,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    animatedElements.forEach((element) => {
      observer.observe(element);
    });

    animatedElements.forEach((element) => {
      void element.offsetHeight;
    });

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        animatedElements.forEach((element) => {
          const rect = element.getBoundingClientRect();

          if (
            rect.top < window.innerHeight &&
            rect.bottom > 0
          ) {
            element.classList.add("is-visible");
          }
        });
      });
    });

    return () => {
      observer.disconnect();
    };
  }, [location.pathname, location.search]);

  return null;
}

export default ScrollAnimations;