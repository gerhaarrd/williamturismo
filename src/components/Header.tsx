import { useEffect, useState } from "react";
import { useLang } from "../i18n/LanguageContext";
import { whatsappLink, defaultWhatsappMessage, siteConfig } from "../config/site";
import { useActiveSection } from "../hooks/useActiveSection";
import { IconMenu, IconClose } from "./icons";

const NAV_LINKS = [
  { id: "about", key: "about" },
  { id: "tours", key: "tours" },
  { id: "street-art", key: "streetArt" },
  { id: "how", key: "how" },
  { id: "gallery", key: "gallery" },
  { id: "faq", key: "faq" },
] as const;

const SECTION_IDS = NAV_LINKS.map((link) => link.id);

export function Header() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-200 ${
        scrolled ? "bg-sand-100/95 py-3 shadow-[0_1px_0_rgba(10,61,102,0.08)] backdrop-blur" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6">
        <a
          href="#top"
          className={`flex items-center gap-2.5 text-[0.95rem] font-extrabold transition-colors ${
            scrolled ? "text-blue-900" : "text-white"
          }`}
        >
          <img src="/images/logo-mark.svg" alt="" className="h-9 w-9 rounded-full" />
          <span className="flex flex-col leading-tight">
            {siteConfig.brandName}
            <small className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-coral">
              {siteConfig.brandSuffix}
            </small>
          </span>
        </a>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`relative py-1 text-[0.92rem] font-semibold transition-colors hover:text-coral ${
                      isActive ? "text-coral" : scrolled ? "text-blue-900" : "text-white"
                    }`}
                  >
                    {t.nav[link.key]}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-[2px] rounded-full bg-coral transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <div
            className={`flex rounded-full border p-0.5 transition-colors ${
              scrolled ? "border-blue-900/20" : "border-white/40"
            }`}
          >
            {(["pt", "en"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                className={`rounded-full px-2.5 py-1 text-[0.7rem] font-bold transition-colors ${
                  lang === code
                    ? "bg-blue-900 text-white"
                    : scrolled
                      ? "text-blue-900"
                      : "text-white"
                }`}
                aria-pressed={lang === code}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>

          <a
            href={whatsappLink(defaultWhatsappMessage)}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-coral px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-900 active:scale-95 sm:inline-flex"
          >
            {t.nav.cta}
          </a>

          <button
            type="button"
            className={`inline-flex p-1.5 lg:hidden ${scrolled ? "text-blue-900" : "text-white"}`}
            onClick={() => setOpen(true)}
            aria-label="Menu"
          >
            <IconMenu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[110] flex flex-col items-center justify-center gap-8 bg-blue-900 transition-opacity duration-200 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <button
          type="button"
          className="absolute right-6 top-6 text-white"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          <IconClose className="h-7 w-7" />
        </button>

        {NAV_LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setOpen(false)}
            className="text-2xl font-bold text-white"
          >
            {t.nav[link.key]}
          </a>
        ))}

        <a
          href={whatsappLink(defaultWhatsappMessage)}
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
          className="mt-2 inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 text-sm font-bold text-white transition active:scale-95"
        >
          {t.nav.cta}
        </a>
      </div>
    </header>
  );
}
