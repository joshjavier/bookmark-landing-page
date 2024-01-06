import CtaSection from './components/cta-section';
import DownloadSection from './components/download-section';
import FaqSection from './components/faq-section';
import FeaturesSection from './components/features-section';
import HeroSection from './components/hero-section';
import SiteHeader from './components/site-header';

function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <FeaturesSection />
        <DownloadSection />
        <FaqSection />
        <CtaSection />
      </main>
    </>
  );
}

export default App;
