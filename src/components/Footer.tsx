import { useLang } from "../i18n/LanguageContext";
import { siteConfig, whatsappLink, defaultWhatsappMessage } from "../config/site";
import { packages } from "../data/packages";
import { IconInstagram, IconMail, IconMapPin, IconWhatsapp } from "./icons";

const NAV_LINKS = [
  { id: "about", key: "about" },
  { id: "tours", key: "tours" },
  { id: "street-art", key: "streetArt" },
  { id: "how", key: "how" },
  { id: "gallery", key: "gallery" },
  { id: "faq", key: "faq" },
] as const;

export function Footer() {
  const { t, lang } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 px-6 pb-7 pt-14 text-[#b9cfd0]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div>
          <a href="#top" className="mb-3.5 flex items-center gap-2.5 text-[0.95rem] font-extrabold text-white">
            <img src="/images/logo-mark.svg" alt="" className="h-9 w-9 rounded-full" />
            <span className="flex flex-col leading-tight">
              {siteConfig.brandName}
              <small className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-coral">
                {siteConfig.brandSuffix}
              </small>
            </span>
          </a>
          <p className="max-w-[320px] text-[0.92rem] text-[#a9c2c3]">{t.footer.about}</p>
          <div className="mt-4 flex gap-3">
            <a
              href={whatsappLink(defaultWhatsappMessage)}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full border-[1.5px] border-white/25 transition-colors hover:border-gold hover:bg-gold/15"
            >
              <IconWhatsapp className="h-[18px] w-[18px]" />
            </a>
            <a
              href={`https://instagram.com/${siteConfig.instagramHandle.replace("@", "")}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border-[1.5px] border-white/25 transition-colors hover:border-gold hover:bg-gold/15"
            >
              <IconInstagram className="h-[18px] w-[18px]" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-full border-[1.5px] border-white/25 transition-colors hover:border-gold hover:bg-gold/15"
            >
              <IconMail className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-extrabold uppercase tracking-[0.1em] text-gold">
            {t.footer.navTitle}
          </h4>
          <ul className="flex flex-col gap-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="text-sm text-[#c6d9da] transition-colors hover:text-white">
                  {t.nav[link.key]}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-extrabold uppercase tracking-[0.1em] text-gold">
            {t.footer.toursTitle}
          </h4>
          <ul className="flex flex-col gap-2.5">
            {packages.map((pkg) => (
              <li key={pkg.id}>
                <a href="#tours" className="text-sm text-[#c6d9da] transition-colors hover:text-white">
                  {pkg.title[lang]}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-extrabold uppercase tracking-[0.1em] text-gold">
            {t.footer.contactTitle}
          </h4>
          <ul className="flex flex-col gap-2.5">
            <li>
              <a
                href={whatsappLink(defaultWhatsappMessage)}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-[#c6d9da] transition-colors hover:text-white"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={`https://instagram.com/${siteConfig.instagramHandle.replace("@", "")}`}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-[#c6d9da] transition-colors hover:text-white"
              >
                {siteConfig.instagramHandle}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="text-sm text-[#c6d9da] transition-colors hover:text-white">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-1.5 text-sm text-[#c6d9da]">
              <IconMapPin className="h-4 w-4 flex-none" />
              {siteConfig.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5 text-xs text-[#94aeb0]">
        <span>
          © {year} {siteConfig.brandName} · {siteConfig.brandSuffix}. {t.footer.rights}
        </span>
        <span>{t.footer.madeIn}</span>
      </div>
    </footer>
  );
}
