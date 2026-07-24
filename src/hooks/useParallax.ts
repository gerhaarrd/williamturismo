import { useEffect, useRef } from "react";

/**
 * Translates an element by a fraction of the page's scroll position, for a subtle
 * parallax feel. Meant for elements pinned near the top of the page (e.g. a hero banner).
 */
export function useParallax<T extends HTMLElement>(factor = 0.25, scale = 1) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    const update = () => {
      el.style.transform = `translate3d(0, ${(window.scrollY * factor).toFixed(1)}px, 0) scale(${scale})`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [factor, scale]);

  return ref;
}
