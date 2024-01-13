import { browsers } from '../data.json';
import { Browser } from '../definitions';

function Card({ browser }: { browser: Browser }) {
  return (
    <article className="b-card">
      <img src={browser.logo} alt="" height="100" />
      <p>Add to {browser.name}</p>
      <p>Minimum version {browser.minVersion}</p>
      <svg viewBox="0 0 280 4">
        <path
          fill="#495DCF"
          fillOpacity=".2"
          d="M0 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm280 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-17 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-35 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-35 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-35 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-18 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-17 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm122 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-35 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-35 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-70 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM88 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM70 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM53 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM35 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM18 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
        />
      </svg>
      <a href="#" className="btn primary">
        Add & Install Extension
      </a>
    </article>
  );
}

function DownloadSection() {
  return (
    <section className="download region">
      <div className="intro wrapper">
        <h2>Download the extension</h2>
        <p>
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>
      <div className="wrapper">
        <ul role="list" className="switcher">
          {browsers.map((browser) => (
            <li key={browser.name}>
              <Card browser={browser} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default DownloadSection;
