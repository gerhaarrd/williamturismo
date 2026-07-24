import { useState } from "react";
import { useLang } from "../i18n/LanguageContext";
import { useReveal } from "../hooks/useReveal";
import { IconPlus } from "./icons";

function FaqItem({
  q,
  a,
  index,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const revealRef = useReveal<HTMLDivElement>(index * 60);

  return (
    <div ref={revealRef} className="reveal overflow-hidden rounded-xl border border-blue-900/10 bg-white">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-bold text-blue-900 sm:text-lg"
      >
        {q}
        <IconPlus
          className={`h-5 w-5 flex-none text-coral transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
        />
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-[0.95rem] text-ink-soft">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const { t } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-sand-100 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-coral">{t.faq.eyebrow}</p>
          <h2 className="text-3xl font-extrabold text-blue-900 sm:text-4xl">{t.faq.title}</h2>
        </div>

        <div className="mx-auto flex max-w-3xl flex-col gap-3">
          {t.faq.items.map((item, i) => (
            <FaqItem
              key={item.q}
              q={item.q}
              a={item.a}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
