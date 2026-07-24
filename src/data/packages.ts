export interface TourPackage {
  id: string;
  image: string;
  tag: { pt: string; en: string };
  title: { pt: string; en: string };
  desc: { pt: string; en: string };
  price: number | null;
  includes: { pt: string; en: string }[];
  stops?: { pt: string; en: string }[];
}

export const packages: TourPackage[] = [
  {
    id: "cristo-rio-historico",
    image: "/images/christ-redeemer-statue-closeup.jpg",
    tag: { pt: "Roteiro 1 · Dia inteiro", en: "Package 1 · Full day" },
    title: { pt: "Cristo Redentor & Rio Histórico", en: "Christ the Redeemer & Historic Rio" },
    desc: {
      pt: "Um dia inteiro pelos cartões-postais mais icônicos do Rio, dos melhores mirantes ao coração histórico da cidade.",
      en: "A full day through Rio's most iconic postcards, from the best viewpoints to the city's historic heart.",
    },
    price: 360,
    includes: [
      { pt: "Ingresso do Cristo Redentor", en: "Christ the Redeemer ticket" },
      { pt: "Almoço", en: "Lunch" },
      { pt: "Transfer", en: "Transfer" },
    ],
    stops: [
      { pt: "Cristo Redentor", en: "Christ the Redeemer" },
      { pt: "Mirante Dona Marta", en: "Dona Marta Viewpoint" },
      { pt: "Mirante dos Prazeres", en: "Prazeres Viewpoint" },
      { pt: "Escadaria Selarón", en: "Selarón Steps" },
      { pt: "Catedral Metropolitana", en: "Metropolitan Cathedral" },
      { pt: "Arcos da Lapa", en: "Lapa Arches" },
    ],
  },
  {
    id: "rocinha-favela-tour",
    image: "/images/rocinha-restaurante-terraco-family.jpg",
    tag: { pt: "Roteiro 2", en: "Package 2" },
    title: { pt: "Tour pela Favela da Rocinha", en: "Rocinha Favela Tour" },
    desc: {
      pt: "Conheça a maior favela do Rio com quem vive ali, com uma vista de tirar o fôlego do mar às montanhas — e leve pra casa imagens aéreas de drone do seu passeio.",
      en: "Explore Rio's largest favela with someone who lives there, with a breathtaking view from the sea to the mountains — and take home aerial drone footage of your visit.",
    },
    price: 300,
    includes: [
      { pt: "Imagens aéreas de drone", en: "Aerial drone footage" },
      { pt: "Transfer", en: "Transfer" },
    ],
  },
  {
    id: "helicoptero",
    image: "/images/helicopter-cristo-aerial-view.jpg",
    tag: { pt: "Experiência", en: "Experience" },
    title: { pt: "Passeio de Helicóptero", en: "Helicopter Tour" },
    desc: {
      pt: "Veja o Rio de um ângulo que poucos têm a chance de ver — sobrevoando o Cristo Redentor, a orla e as montanhas da cidade.",
      en: "See Rio from an angle few get to experience — flying over Christ the Redeemer, the coastline and the city's mountains.",
    },
    price: null,
    includes: [],
  },
];
