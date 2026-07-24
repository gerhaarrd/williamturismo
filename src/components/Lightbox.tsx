import { useEffect, useState } from "react";
import type { GalleryItem } from "../data/gallery";
import type { Lang } from "../i18n/translations";
import { IconChevronLeft, IconChevronRight, IconClose } from "./icons";

interface LightboxProps {
  items: GalleryItem[];
  index: number;
  lang: Lang;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ items, index, lang, onClose, onNavigate }: LightboxProps) {
  const item = items[index];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate((index - 1 + items.length) % items.length);
      if (e.key === "ArrowRight") onNavigate((index + 1) % items.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, items.length, onClose, onNavigate]);

  if (!item) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-[rgba(6,18,22,0.94)] px-5 py-10 transition-opacity duration-200 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 active:scale-90"
      >
        <IconClose className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index - 1 + items.length) % items.length);
        }}
        aria-label="Previous"
        className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 active:scale-90"
      >
        <IconChevronLeft className="h-5 w-5" />
      </button>

      <img
        key={index}
        src={item.image}
        alt={item.caption[lang]}
        className="animate-lightbox-in max-h-[86vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl sm:max-w-[1100px]"
        onClick={(e) => e.stopPropagation()}
      />

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index + 1) % items.length);
        }}
        aria-label="Next"
        className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 active:scale-90"
      >
        <IconChevronRight className="h-5 w-5" />
      </button>

      <p className="absolute inset-x-0 bottom-7 text-center text-sm text-sand-100">{item.caption[lang]}</p>
    </div>
  );
}
