import { useLang } from "../i18n/LanguageContext";
import { useReveal } from "../hooks/useReveal";
import { IconCompass, IconCar, IconGlobe } from "./icons";

const HIGHLIGHT_ICONS = [IconCompass, IconCar, IconGlobe];

function HighlightCard({ title, desc, icon: Icon, index }: { title: string; desc: string; icon: typeof IconCompass; index: number }) {
  const revealRef = useReveal<HTMLLIElement>(index * 90);
  return (
    <li ref={revealRef} className="reveal rounded-lg border border-blue-900/10 bg-white p-5 transition-shadow duration-200 hover:shadow-card">
      <Icon className="mb-2.5 h-6 w-6 text-coral" />
      <strong className="mb-1 block text-[0.95rem] font-bold text-blue-900">{title}</strong>
      <span className="text-[0.8rem] font-medium text-ink-soft">{desc}</span>
    </li>
  );
}

export function About() {
  const { t } = useLang();
  const imageRef = useReveal<HTMLDivElement>();
  const badgeRef = useReveal<HTMLDivElement>(300);
  const textRef = useReveal<HTMLDivElement>(120);

  return (
    <section id="about" className="bg-sand-100 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div className="relative">
          <div ref={imageRef} className="overflow-hidden rounded-xl shadow-card">
            <picture className="reveal-clip-inner block">
              <source srcSet="/images/guide-selfie-arcos-da-lapa-group.webp" type="image/webp" />
              <img
                src="/images/guide-selfie-arcos-da-lapa-group.jpg"
                alt={t.about.badge}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </picture>
          </div>
          <div
            ref={badgeRef}
            className="reveal absolute bottom-5 left-5 flex max-w-[240px] items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-card"
          >
            <IconCompass className="h-6 w-6 flex-none text-coral" />
            <span className="text-sm font-bold text-blue-900">{t.about.badge}</span>
          </div>
        </div>

        <div ref={textRef} className="reveal">
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-coral">{t.about.eyebrow}</p>
          <h2 className="mb-6 text-3xl font-extrabold text-blue-900 sm:text-4xl">{t.about.title}</h2>

          {t.about.paragraphs.map((p) => (
            <p key={p} className="mb-4 text-[1.02rem] text-ink-soft">
              {p}
            </p>
          ))}

          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {t.about.highlights.map((h, i) => (
              <HighlightCard key={h.title} title={h.title} desc={h.desc} icon={HIGHLIGHT_ICONS[i]} index={i} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
