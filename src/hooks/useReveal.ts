import { useEffect } from "react";

/**
 * Adds `is-visible` to every `.reveal` element once it scrolls into view.
 * Runs once on mount and observes elements present in the DOM.
 */
export function useReveal(threshold = 0.1): void {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold },
    );

    const nodes = document.querySelectorAll<HTMLElement>(".reveal");
    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [threshold]);
}
