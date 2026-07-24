import { useEffect, useRef } from "react";

/**
 * Adds an `is-visible` class once the element scrolls into view
 * (see `.reveal` / `.reveal-clip-inner` in index.css). Pass `delayMs` to
 * stagger a group of siblings.
 *
 * The ref'd element must stay visually unclipped — it's the
 * IntersectionObserver target, and a clip-path/opacity-0 target can never
 * be measured as "intersecting". Effects that hide content (like the
 * clip-path wipe) should target a child instead, styled via `.is-visible`
 * on this element.
 */
export function useReveal<T extends HTMLElement>(delayMs = 0) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (delayMs) el.style.transitionDelay = `${delayMs}ms`;

    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delayMs]);

  return ref;
}
