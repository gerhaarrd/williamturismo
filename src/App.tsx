import { LanguageProvider } from "./i18n/LanguageContext";
import { ScrollProgress } from "./components/ScrollProgress";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Tours } from "./components/Tours";
import { StreetArtSpotlight } from "./components/StreetArtSpotlight";
import { HowItWorks } from "./components/HowItWorks";
import { Gallery } from "./components/Gallery";
import { Faq } from "./components/Faq";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";
import { WhatsAppFab } from "./components/WhatsAppFab";
import { BackToTop } from "./components/BackToTop";

function App() {
  return (
    <LanguageProvider>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <Tours />
        <StreetArtSpotlight />
        <HowItWorks />
        <Gallery />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFab />
      <BackToTop />
    </LanguageProvider>
  );
}

export default App;
