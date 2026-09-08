import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view and returns its id,
 * so the navbar can highlight the active link.
 *
 * @param sectionIds ids of the sections to observe (without the leading '#').
 * @param offset pixels from the top counted as "entered".
 */
export function useScrollSpy(
  sectionIds: readonly string[],
  offset = 100,
): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollY = window.scrollY;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;

        const top = el.offsetTop - offset;
        const bottom = top + el.offsetHeight;

        if (scrollY >= top && scrollY < bottom) {
          setActiveId(id);
          return;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
