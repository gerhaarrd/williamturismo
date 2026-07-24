import { useLang } from "../i18n/LanguageContext";
import { whatsappLink, defaultWhatsappMessage } from "../config/site";
import { useParallax } from "../hooks/useParallax";
import { IconCar, IconCompass, IconCheck, IconGlobe } from "./icons";

const CHIP_ICONS = [IconCar, IconCompass, IconCheck, IconGlobe];

export function Hero() {
  const { t } = useLang();
  const parallaxRef = useParallax<HTMLImageElement>(0.15, 1.35);

  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden text-white">
      <div className="absolute inset-0 -z-10">
        <picture>
          <source srcSet="/images/sugarloaf-viewpoint-couple.webp" type="image/webp" />
          <img
            ref={parallaxRef}
            src="/images/sugarloaf-viewpoint-couple.jpg"
            alt=""
            className="h-full w-full object-cover will-change-transform"
            style={{ objectPosition: "65% 35%" }}
            fetchPriority="high"
          />
        </picture>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(6,22,28,.25) 0%, rgba(6,22,28,.4) 45%, rgba(7,26,32,.94) 100%)",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 pb-20 pt-48 sm:pb-24">
        <div className="max-w-2xl">
          <span className="mb-5 inline-block rounded-full bg-white/12 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-white ring-1 ring-inset ring-white/25">
            {t.hero.eyebrow}
          </span>
          <h1 className="mb-5 text-[2.3rem] font-extrabold leading-[1.12] sm:text-5xl lg:text-[3.4rem]">
            {t.hero.titleBefore} <span className="text-gold">{t.hero.titleEmphasis}</span>
          </h1>
          <p className="mb-8 max-w-lg text-lg text-[#e7f1f0]">{t.hero.lede}</p>

          <div className="mb-10 flex flex-wrap gap-3.5">
            <a
              href={whatsappLink(defaultWhatsappMessage)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-coral px-7 py-3.5 font-bold text-white transition hover:bg-gold hover:text-blue-900 active:scale-95"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#tours"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/50 px-7 py-3.5 font-bold text-white transition hover:bg-white/10 active:scale-95"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {t.hero.chips.map((chip, i) => {
              const Icon = CHIP_ICONS[i % CHIP_ICONS.length];
              return (
                <li key={chip} className="flex items-center gap-2 text-sm font-semibold text-[#f2f6f2]">
                  <Icon className="h-[18px] w-[18px] flex-none text-gold" />
                  {chip}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
