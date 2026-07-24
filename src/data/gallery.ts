export interface GalleryItem {
  id: string;
  image: string;
  caption: { pt: string; en: string };
}

export const galleryItems: GalleryItem[] = [
  {
    id: "guide-lapa",
    image: "/images/guide-selfie-arcos-da-lapa.jpg",
    caption: { pt: "Tour pelos Arcos da Lapa", en: "Touring the Lapa Arches" },
  },
  {
    id: "selaron-bench",
    image: "/images/selaron-steps-brasil-mosaic-bench.jpg",
    caption: { pt: "Escadaria Selarón", en: "Selarón Steps" },
  },
  {
    id: "corcovado-trail",
    image: "/images/corcovado-trail-city-view.jpg",
    caption: { pt: "Trilha do Corcovado", en: "Corcovado trail" },
  },
  {
    id: "mural-01",
    image: "/images/santa-teresa-street-art-mural-01.jpg",
    caption: { pt: "Arte de rua em Santa Teresa", en: "Street art in Santa Teresa" },
  },
  {
    id: "mural-03",
    image: "/images/santa-teresa-street-art-mural-03.jpg",
    caption: { pt: "Arte de rua em Santa Teresa", en: "Street art in Santa Teresa" },
  },
  {
    id: "mural-04",
    image: "/images/santa-teresa-street-art-mural-04.jpg",
    caption: { pt: "Arte de rua em Santa Teresa", en: "Street art in Santa Teresa" },
  },
  {
    id: "favela-group",
    image: "/images/favela-viewpoint-group-portrait.jpg",
    caption: { pt: "Mirante da comunidade", en: "Community viewpoint" },
  },
  {
    id: "selaron-family",
    image: "/images/selaron-steps-family-portrait.jpg",
    caption: { pt: "Escadaria Selarón", en: "Selarón Steps" },
  },
  {
    id: "christ-redeemer-perspective",
    image: "/images/christ-redeemer-perspective-pose.jpg",
    caption: { pt: "Brincadeira de perspectiva no Cristo", en: "Perspective trick at Christ the Redeemer" },
  },
  {
    id: "mirante-dona-marta",
    image: "/images/mirante-dona-marta-portrait.jpg",
    caption: { pt: "Mirante Dona Marta", en: "Dona Marta Viewpoint" },
  },
  {
    id: "selaron-brasil-heart",
    image: "/images/selaron-steps-brasil-heart.jpg",
    caption: { pt: "Escadaria Selarón", en: "Selarón Steps" },
  },
  {
    id: "arcos-da-lapa-catedral",
    image: "/images/arcos-da-lapa-catedral-group.jpg",
    caption: { pt: "Arcos da Lapa & Catedral Metropolitana", en: "Lapa Arches & Metropolitan Cathedral" },
  },
  {
    id: "rocinha-mirante-panorama",
    image: "/images/rocinha-mirante-panorama-group.jpg",
    caption: { pt: "Mirante da Rocinha", en: "Rocinha viewpoint" },
  },
  {
    id: "rocinha-family",
    image: "/images/rocinha-family-portrait.jpg",
    caption: { pt: "Tour pela Rocinha", en: "Touring Rocinha" },
  },
];
