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
      </main>
    </>
  );
}

export default App;
