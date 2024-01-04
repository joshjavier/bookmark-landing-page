import DownloadSection from './components/download-section';
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
      </main>
    </>
  );
}

export default App;
