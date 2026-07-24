/**
 * Single source of truth for business contact details.
 * ⚠️ Replace the placeholders below with real data before deploying to production.
 */
export const siteConfig = {
  brandName: "Amaral Tour",
  brandSuffix: "Rio Drive",

  whatsappNumber: "5521977111611",

  instagramHandle: "@amaraltour4",

  // TODO: replace with the real e-mail address.
  email: "contato@amaraltour.com.br",
  location: "Rio de Janeiro, Brasil",

  siteUrl: "https://amaraltour.vercel.app",
} as const;

export function whatsappLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

export const defaultWhatsappMessage =
  "Olá! Vi o site da Amaral Tour e quero saber mais sobre os passeios no Rio de Janeiro.";
