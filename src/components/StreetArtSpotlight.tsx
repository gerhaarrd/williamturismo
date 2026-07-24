import { useLang } from "../i18n/LanguageContext";
import { useReveal } from "../hooks/useReveal";
import { whatsappLink } from "../config/site";
import { IconCheck } from "./icons";

function RevealImage({
  src,
  webp,
  alt,
  className,
  delay,
}: {
  src: string;
  webp: string;
  alt: string;
  className: string;
  delay: number;
}) {
  const ref = useReveal<HTMLDivElement>(delay);
  return (
    <div ref={ref} className={`block overflow-hidden rounded-xl ${className}`}>
      <picture className="reveal-clip-inner block h-full w-full">
        <source srcSet={webp} type="image/webp" />
        <img src={src} alt={alt} loading="lazy" className="h-full w-full rounded-xl object-cover shadow-card" />
      </picture>
    </div>
  );
}

export function StreetArtSpotlight() {
  const { t } = useLang();
  const textRef = useReveal<HTMLDivElement>(150);
  const message = "Olá! Quero incluir a arte de rua de Santa Teresa / Lapa no meu roteiro.";

  return (
    <section id="street-art" className="bg-sand-100 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-center">
        <div className="grid grid-cols-2 gap-4">
          <RevealImage
            src="/images/santa-teresa-street-art-mural-02.jpg"
            webp="/images/santa-teresa-street-art-mural-02.webp"
            alt="Arte de rua em Santa Teresa"
            className="col-span-1 aspect-[3/4]"
            delay={0}
          />
          <div className="flex flex-col gap-4">
            <RevealImage
              src="/images/lapa-street-art-burger-mural.jpg"
              webp="/images/lapa-street-art-burger-mural.webp"
              alt="Arte de rua na Lapa"
              className="aspect-[4/3]"
              delay={90}
            />
            <RevealImage
              src="/images/santa-teresa-street-art-mural-04.jpg"
              webp="/images/santa-teresa-street-art-mural-04.webp"
              alt="Arte de rua em Santa Teresa"
              className="aspect-[4/3]"
              delay={180}
            />
          </div>
        </div>

        <div ref={textRef} className="reveal">
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-coral">{t.streetArt.eyebrow}</p>
          <h2 className="mb-5 text-3xl font-extrabold text-blue-900 sm:text-4xl">{t.streetArt.title}</h2>
          <p className="mb-6 text-[1.02rem] text-ink-soft">{t.streetArt.paragraph}</p>

          <ul className="mb-8 flex flex-col gap-3.5">
            {t.streetArt.list.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[0.95rem] text-ink">
                <IconCheck className="mt-0.5 h-5 w-5 flex-none text-coral" />
                {item}
              </li>
            ))}
          </ul>

          <a
            href={whatsappLink(message)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-blue-900/25 px-6 py-3 text-sm font-bold text-blue-900 transition active:scale-95 hover:bg-blue-900/5"
          >
            {t.streetArt.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
