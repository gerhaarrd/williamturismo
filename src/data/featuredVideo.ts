export interface FeaturedVideo {
  id: string;
  src: string;
  poster: string;
  posterWebp: string;
  caption: { pt: string; en: string };
  playLabel: { pt: string; en: string };
}

export const featuredVideos: FeaturedVideo[] = [
  {
    id: "rocinha-walkthrough",
    src: "/videos/rocinha-favela-tour-walkthrough.mp4",
    poster: "/videos/rocinha-favela-tour-walkthrough-poster.jpg",
    posterWebp: "/videos/rocinha-favela-tour-walkthrough-poster.webp",
    caption: {
      pt: "Um pedacinho do passeio pela Rocinha",
      en: "A glimpse of the Rocinha community tour",
    },
    playLabel: { pt: "Assistir vídeo", en: "Watch video" },
  },
  {
    id: "helicopter-tour",
    src: "/videos/helicopter-tour-rio.mp4",
    poster: "/videos/helicopter-tour-rio-poster.jpg",
    posterWebp: "/videos/helicopter-tour-rio-poster.webp",
    caption: {
      pt: "Sobrevoando o Cristo Redentor de helicóptero",
      en: "Flying over Christ the Redeemer by helicopter",
    },
    playLabel: { pt: "Assistir vídeo", en: "Watch video" },
  },
  {
    id: "rooftop-view",
    src: "/videos/rocinha-rooftop-view.mp4",
    poster: "/videos/rocinha-rooftop-view-poster.jpg",
    posterWebp: "/videos/rocinha-rooftop-view-poster.webp",
    caption: {
      pt: "Vista do mirante na Rocinha",
      en: "View from the Rocinha rooftop lookout",
    },
    playLabel: { pt: "Assistir vídeo", en: "Watch video" },
  },
  {
    id: "favela-aerial",
    src: "/videos/favela-aerial-view.mp4",
    poster: "/videos/favela-aerial-view-poster.jpg",
    posterWebp: "/videos/favela-aerial-view-poster.webp",
    caption: {
      pt: "Vista aérea da comunidade",
      en: "Aerial view of the community",
    },
    playLabel: { pt: "Assistir vídeo", en: "Watch video" },
  },
  {
    id: "helicopter-experience",
    src: "/videos/helicopter-tour-experience.mp4",
    poster: "/videos/helicopter-tour-experience-poster.jpg",
    posterWebp: "/videos/helicopter-tour-experience-poster.webp",
    caption: {
      pt: "Dentro do passeio de helicóptero",
      en: "Inside the helicopter tour",
    },
    playLabel: { pt: "Assistir vídeo", en: "Watch video" },
  },
];
