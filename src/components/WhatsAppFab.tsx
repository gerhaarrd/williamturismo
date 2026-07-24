import { useLang } from "../i18n/LanguageContext";
import { whatsappLink, defaultWhatsappMessage } from "../config/site";
import { IconWhatsapp } from "./icons";

export function WhatsAppFab() {
  const { t } = useLang();

  return (
    <a
      href={whatsappLink(defaultWhatsappMessage)}
      target="_blank"
      rel="noreferrer"
      aria-label={t.whatsappFab}
      title={t.whatsappFab}
      className="fixed bottom-5 right-5 z-[90] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_16px_30px_-12px_rgba(37,211,102,0.6)] transition-transform hover:scale-110 active:scale-95"
    >
      <span className="wa-ping absolute inset-0 rounded-full bg-[#25d366]" />
      <IconWhatsapp className="relative h-8 w-8" />
    </a>
  );
}
