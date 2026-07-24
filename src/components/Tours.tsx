import { useLang } from "../i18n/LanguageContext";
import { useReveal } from "../hooks/useReveal";
import { useTilt } from "../hooks/useTilt";
import { packages } from "../data/packages";
import { whatsappLink } from "../config/site";
import { IconCheck } from "./icons";

function PackageCard({ pkg, index }: { pkg: (typeof packages)[number]; index: number }) {
  const { t, lang } = useLang();
  const revealRef = useReveal<HTMLDivElement>((index % 3) * 90);
  const tilt = useTilt<HTMLDivElement>();
  const message = `Olá! Quero reservar o ${pkg.title.pt} (R$${pkg.price ?? "..."} por pessoa).`;

  return (
    <div ref={revealRef} className="reveal">
      <div
        ref={tilt.ref}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        className="flex h-full flex-col overflow-hidden rounded-xl border border-blue-900/10 bg-white shadow-card transition-[transform,box-shadow] duration-150 ease-out hover:shadow-card-hover"
      >
        <figure className="group m-0 aspect-[4/3] overflow-hidden">
          <picture>
            <source srcSet={pkg.image.replace(/\.jpg$/, ".webp")} type="image/webp" />
            <img
              src={pkg.image}
              alt={pkg.title[lang]}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </picture>
        </figure>

        <div className="flex flex-1 flex-col gap-3 p-6">
          <span className="w-fit rounded-full bg-sand-200 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-blue-700">
            {pkg.tag[lang]}
          </span>
          <h3 className="text-lg font-extrabold text-blue-900">{pkg.title[lang]}</h3>

          <div className="flex items-baseline gap-1.5">
            {pkg.price !== null ? (
              <>
                <span className="text-2xl font-extrabold text-blue-900">R${pkg.price}</span>
                <span className="text-sm font-medium text-ink-soft">{t.tours.priceUnit}</span>
              </>
            ) : (
              <span className="text-lg font-extrabold text-blue-900">{t.tours.onRequest}</span>
            )}
          </div>

          <p className="text-[0.94rem] text-ink-soft">{pkg.desc[lang]}</p>

          {pkg.includes.length > 0 && (
            <div>
              <p className="mb-1.5 text-xs font-bold uppercase tracking-wide text-blue-700">
                {t.tours.includesLabel}
              </p>
              <ul className="flex flex-col gap-1">
                {pkg.includes.map((item) => (
                  <li key={item.pt} className="flex items-center gap-2 text-sm text-ink">
                    <IconCheck className="h-4 w-4 flex-none text-coral" />
                    {item[lang]}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {pkg.stops && (
            <div>
              <p className="mb-1.5 text-xs font-bold uppercase tracking-wide text-blue-700">
                {t.tours.itineraryLabel}
              </p>
              <ol className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                {pkg.stops.map((stop, i) => (
                  <li key={stop.pt} className="flex items-baseline gap-1.5 text-sm text-ink">
                    <span className="text-xs font-bold text-coral">{i + 1}.</span>
                    {stop[lang]}
                  </li>
                ))}
              </ol>
            </div>
          )}

          <a
            href={whatsappLink(message)}
            target="_blank"
            rel="noreferrer"
            className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-coral px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-900 active:scale-95"
          >
            {t.tours.ctaLabel}
          </a>
        </div>
      </div>
    </div>
  );
}

export function Tours() {
  const { t } = useLang();

  return (
    <section id="tours" className="bg-sand-200 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-xl">
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-coral">{t.tours.eyebrow}</p>
          <h2 className="mb-3.5 text-3xl font-extrabold text-blue-900 sm:text-4xl">{t.tours.title}</h2>
          <p className="text-[1.05rem] text-ink-soft">{t.tours.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
