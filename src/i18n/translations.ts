export type Lang = "pt" | "en";

export interface Translations {
  nav: {
    home: string;
    about: string;
    tours: string;
    streetArt: string;
    how: string;
    gallery: string;
    faq: string;
    contact: string;
    cta: string;
  };
  header: {
    tagline: string;
  };
  hero: {
    eyebrow: string;
    titleBefore: string;
    titleEmphasis: string;
    lede: string;
    ctaPrimary: string;
    ctaSecondary: string;
    chips: string[];
    scrollHint: string;
  };
  about: {
    eyebrow: string;
    title: string;
    badge: string;
    paragraphs: string[];
    highlights: { title: string; desc: string }[];
  };
  tours: {
    eyebrow: string;
    title: string;
    subtitle: string;
    priceUnit: string;
    onRequest: string;
    includesLabel: string;
    itineraryLabel: string;
    ctaLabel: string;
  };
  streetArt: {
    eyebrow: string;
    title: string;
    paragraph: string;
    list: string[];
    cta: string;
  };
  how: {
    eyebrow: string;
    title: string;
    steps: { title: string; desc: string }[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    subtitle: string;
    swipeHint: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { q: string; a: string }[];
  };
  finalCta: {
    title: string;
    desc: string;
    cta: string;
  };
  footer: {
    about: string;
    navTitle: string;
    toursTitle: string;
    contactTitle: string;
    rights: string;
    madeIn: string;
  };
  whatsappFab: string;
}

export const translations: Record<Lang, Translations> = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      tours: "Passeios",
      streetArt: "Arte de rua",
      how: "Como funciona",
      gallery: "Galeria",
      faq: "Perguntas",
      contact: "Contato",
      cta: "Chamar no WhatsApp",
    },
    header: {
      tagline: "Guia · motorista privado",
    },
    hero: {
      eyebrow: "City tour e guia privado no Rio de Janeiro",
      titleBefore: "Conheça o Rio de Janeiro",
      titleEmphasis: "no seu ritmo",
      lede: "Tours privados e city drive pelos points mais icônicos da cidade — Cristo Redentor, Pão de Açúcar, Escadaria Selarón e muito mais. Roteiro flexível, combinado direto com você.",
      ctaPrimary: "Chamar no WhatsApp",
      ctaSecondary: "Ver passeios",
      chips: [
        "Carro com ar-condicionado",
        "Roteiro sob medida",
        "Fotos nos points certos",
        "Grupos pequenos ou tour privado",
      ],
      scrollHint: "role para explorar",
    },
    about: {
      eyebrow: "Seu guia no Rio",
      title: "Alguém que conhece o Rio de verdade",
      badge: "Tour privado · Rio de Janeiro",
      paragraphs: [
        "Mais do que dirigir de um ponto a outro, a ideia é mostrar a cidade com a calma e a atenção de quem já levou dezenas de grupos aos mesmos lugares — e sabe o melhor horário, o melhor ângulo e a melhor história para contar em cada parada.",
        "O roteiro é montado com você: praias, trilhas, história, futebol, vida noturna ou um pouco de tudo. O carro é privado, o ritmo é seu.",
      ],
      highlights: [
        { title: "Roteiro sob medida", desc: "Montado com base no seu tempo e interesses" },
        { title: "Busca e leva", desc: "Ponto de encontro combinado com você" },
        { title: "PT-BR & English", desc: "Atendimento também em inglês" },
      ],
    },
    tours: {
      eyebrow: "Passeios",
      title: "Roteiros e valores",
      subtitle: "Roteiros fechados, com tudo já incluso — combine os detalhes direto pelo WhatsApp.",
      priceUnit: "por pessoa",
      onRequest: "Sob consulta",
      includesLabel: "O que está incluso",
      itineraryLabel: "O roteiro",
      ctaLabel: "Reservar pelo WhatsApp",
    },
    streetArt: {
      eyebrow: "Fora do óbvio",
      title: "Um Rio que poucos turistas veem",
      paragraph:
        "Entre uma parada e outra, também dá para conhecer os becos e vielas de Santa Teresa e da Lapa, onde a cidade vira galeria a céu aberto. Murais, esculturas de rua e cantos que não aparecem no roteiro tradicional.",
      list: [
        "Arte urbana e murais autorais",
        "Cantos históricos fora da rota principal",
        "Ótimo para fotos diferentes de todo mundo",
      ],
      cta: "Incluir no meu roteiro",
    },
    how: {
      eyebrow: "Como funciona",
      title: "Do primeiro contato ao passeio",
      steps: [
        {
          title: "Chame no WhatsApp",
          desc: "Conte o que você quer conhecer, quantas pessoas vão e quanto tempo vocês têm no Rio.",
        },
        {
          title: "Montamos o roteiro",
          desc: "O passeio é ajustado aos seus interesses — praia, história, futebol, natureza ou tudo junto.",
        },
        {
          title: "Aproveite o passeio",
          desc: "Carro confortável, boas paradas para foto e um guia que conhece cada canto do Rio.",
        },
      ],
    },
    gallery: {
      eyebrow: "Galeria",
      title: "Alguns momentos de quem já passeou com a gente",
      subtitle:
        "Cada grupo é único — aqui estão alguns dos lugares e das experiências que fazem parte do roteiro.",
      swipeHint: "Arraste para o lado para ver mais →",
    },
    faq: {
      eyebrow: "Perguntas frequentes",
      title: "Ainda tem dúvidas?",
      items: [
        {
          q: "Quantas pessoas cabem no passeio?",
          a: "O carro atende pequenos grupos e famílias. Fale pelo WhatsApp informando quantas pessoas vão para confirmarmos a melhor forma de te atender.",
        },
        {
          q: "Como funciona o roteiro?",
          a: "O roteiro é sob medida: você conta o que quer conhecer e quanto tempo tem, e montamos juntos o passeio — sem pacote fechado.",
        },
        {
          q: "Buscam no hotel ou Airbnb?",
          a: "Sim, o ponto de encontro é combinado direto com você, de acordo com onde você está hospedado.",
        },
        {
          q: "Atende em outros idiomas além do português?",
          a: "Sim, o atendimento também é feito em inglês — combine tudo direto pelo WhatsApp.",
        },
        {
          q: "Como faço para reservar?",
          a: "É simples: chame no WhatsApp, conte a data e o que você quer conhecer, e a gente confirma os detalhes com você.",
        },
      ],
    },
    finalCta: {
      title: "Vamos planejar o seu passeio pelo Rio?",
      desc: "Fale agora pelo WhatsApp e monte com a gente o roteiro ideal para o seu tempo na cidade.",
      cta: "Chamar no WhatsApp",
    },
    footer: {
      about:
        "Tours privados e city drive pelo Rio de Janeiro, com roteiro sob medida para cada grupo.",
      navTitle: "Navegação",
      toursTitle: "Passeios",
      contactTitle: "Contato",
      rights: "Todos os direitos reservados.",
      madeIn: "Feito com carinho no Rio de Janeiro",
    },
    whatsappFab: "Fale no WhatsApp",
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      tours: "Tours",
      streetArt: "Street Art",
      how: "How it works",
      gallery: "Gallery",
      faq: "FAQ",
      contact: "Contact",
      cta: "Chat on WhatsApp",
    },
    header: {
      tagline: "Private guide & driver",
    },
    hero: {
      eyebrow: "City tour & private guide in Rio de Janeiro",
      titleBefore: "Discover Rio de Janeiro",
      titleEmphasis: "at your own pace",
      lede: "Private tours and city driving through Rio's most iconic spots — Christ the Redeemer, Sugarloaf, the Selarón Steps and more. A flexible itinerary, planned together with you.",
      ctaPrimary: "Chat on WhatsApp",
      ctaSecondary: "See the tours",
      chips: [
        "Air-conditioned car",
        "Itinerary made for you",
        "Photos at the best spots",
        "Small groups or private tours",
      ],
      scrollHint: "scroll to explore",
    },
    about: {
      eyebrow: "Your guide in Rio",
      title: "Someone who truly knows Rio",
      badge: "Private tour · Rio de Janeiro",
      paragraphs: [
        "This is about more than driving from one point to another — it's about showing the city with the care of someone who has taken dozens of groups to the same places, and knows the best time, the best angle and the best story for every stop.",
        "The itinerary is built together with you: beaches, trails, history, football, nightlife, or a bit of everything. The car is private, the pace is yours.",
      ],
      highlights: [
        { title: "Custom itinerary", desc: "Built around your time and interests" },
        { title: "Door-to-door", desc: "Meeting point arranged with you" },
        { title: "PT-BR & English", desc: "Service also available in English" },
      ],
    },
    tours: {
      eyebrow: "Tours",
      title: "Packages & pricing",
      subtitle: "Fixed packages, all-inclusive — sort out the details straight on WhatsApp.",
      priceUnit: "per person",
      onRequest: "On request",
      includesLabel: "What's included",
      itineraryLabel: "The itinerary",
      ctaLabel: "Book on WhatsApp",
    },
    streetArt: {
      eyebrow: "Off the beaten path",
      title: "A side of Rio few tourists see",
      paragraph:
        "Between one stop and another, there's also time for the alleys of Santa Teresa and Lapa, where the city becomes an open-air gallery. Murals, street sculptures and corners that don't usually make it onto the typical itinerary.",
      list: [
        "Urban art and original murals",
        "Historic corners off the main route",
        "Great for photos different from everyone else's",
      ],
      cta: "Add this to my itinerary",
    },
    how: {
      eyebrow: "How it works",
      title: "From first message to the tour itself",
      steps: [
        {
          title: "Message on WhatsApp",
          desc: "Tell us what you'd like to see, how many people are going, and how much time you have in Rio.",
        },
        {
          title: "We build the itinerary",
          desc: "The tour is tailored to your interests — beaches, history, football, nature, or all of it.",
        },
        {
          title: "Enjoy the ride",
          desc: "A comfortable car, great photo stops, and a guide who knows every corner of Rio.",
        },
      ],
    },
    gallery: {
      eyebrow: "Gallery",
      title: "A few moments from past tours",
      subtitle:
        "Every group is different — here are some of the places and experiences that are part of the journey.",
      swipeHint: "Swipe sideways to see more →",
    },
    faq: {
      eyebrow: "Frequently asked questions",
      title: "Still have questions?",
      items: [
        {
          q: "How many people can join the tour?",
          a: "The car is set up for small groups and families. Message us on WhatsApp with your group size so we can confirm the best setup for you.",
        },
        {
          q: "How does the itinerary work?",
          a: "The itinerary is fully custom: tell us what you'd like to see and how much time you have, and we'll plan the tour together — no fixed package.",
        },
        {
          q: "Do you pick up from my hotel or Airbnb?",
          a: "Yes — the pickup point is arranged directly with you, based on where you're staying.",
        },
        {
          q: "Do you speak other languages besides Portuguese?",
          a: "Yes, service is also available in English — arrange everything directly on WhatsApp.",
        },
        {
          q: "How do I book?",
          a: "It's simple: message us on WhatsApp, share your dates and what you'd like to see, and we'll confirm the details with you.",
        },
      ],
    },
    finalCta: {
      title: "Ready to plan your Rio adventure?",
      desc: "Message us on WhatsApp now and let's build the perfect itinerary for your time in the city.",
      cta: "Chat on WhatsApp",
    },
    footer: {
      about:
        "Private tours and city driving through Rio de Janeiro, with a custom itinerary for every group.",
      navTitle: "Navigation",
      toursTitle: "Tours",
      contactTitle: "Contact",
      rights: "All rights reserved.",
      madeIn: "Made with care in Rio de Janeiro",
    },
    whatsappFab: "Chat on WhatsApp",
  },
};
