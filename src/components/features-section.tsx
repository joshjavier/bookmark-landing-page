import Tabs from './tabs';
import { features } from '../data.json';

function FeaturesSection() {
  return (
    <section className="features" aria-labelledby="features-label">
      <div className="wrapper">
        <h2 id="features-label">Features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your favorite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>

        <Tabs features={features} />
      </div>
    </section>
  );
}

export default FeaturesSection;
