import { useLang } from "../i18n/LanguageContext";
import { whatsappLink, defaultWhatsappMessage } from "../config/site";
import { useReveal } from "../hooks/useReveal";

export function FinalCta() {
  const { t } = useLang();
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="bg-sand-200 px-6 py-20 sm:py-24">
      <div ref={revealRef} className="reveal-scale relative mx-auto max-w-6xl overflow-hidden rounded-xl">
        <picture>
          <source srcSet="/images/corcovado-trail-city-view.webp" type="image/webp" />
          <img
            src="/images/corcovado-trail-city-view.jpg"
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </picture>
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(7,26,32,.55) 0%, rgba(7,26,32,.88) 100%)" }}
        />
        <div className="relative px-8 py-16 text-center text-white sm:py-20">
          <h2 className="mx-auto mb-4 max-w-xl text-3xl font-extrabold sm:text-4xl">{t.finalCta.title}</h2>
          <p className="mx-auto mb-8 max-w-lg text-[1.03rem] text-[#e7f1f0]">{t.finalCta.desc}</p>
          <a
            href={whatsappLink(defaultWhatsappMessage)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-coral px-8 py-4 font-bold text-white transition hover:bg-gold hover:text-blue-900 active:scale-95"
          >
            {t.finalCta.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
