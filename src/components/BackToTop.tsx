import { useEffect, useState } from "react";
import { IconArrowUp } from "./icons";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Voltar ao topo"
      className={`fixed bottom-5 left-5 z-[90] flex h-11 w-11 items-center justify-center rounded-full border border-blue-900/15 bg-white text-blue-900 shadow-card transition-all duration-300 hover:bg-sand-200 active:scale-95 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <IconArrowUp className="h-5 w-5" />
    </button>
  );
}
