import { useLang } from "../i18n/LanguageContext";
import { useReveal } from "../hooks/useReveal";

function Step({ index, title, desc }: { index: number; title: string; desc: string }) {
  const revealRef = useReveal<HTMLDivElement>();
  return (
    <div
      ref={revealRef}
      className="reveal rounded-xl border border-white/15 bg-white/[0.05] p-7"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-gold text-sm font-extrabold text-blue-900">
        {index + 1}
      </span>
      <h3 className="mb-2 text-lg font-extrabold text-white">{title}</h3>
      <p className="text-[0.94rem] text-[#cfe1e5]">{desc}</p>
    </div>
  );
}

export function HowItWorks() {
  const { t } = useLang();

  return (
    <section id="how" className="bg-blue-900 py-20 text-sand-100 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-gold">{t.how.eyebrow}</p>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{t.how.title}</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {t.how.steps.map((step, i) => (
            <Step key={step.title} index={i} title={step.title} desc={step.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
