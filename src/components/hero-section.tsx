function HeroSection() {
  return (
    <section className="hero wrapper" aria-label="Hero">
      <div className="image bg-blue-pill">
        <img
          src="/images/illustration-hero.svg"
          alt=""
          width="657"
          height="466"
        />
      </div>
      <div className="text wrapper">
        <h2>A Simple Bookmark Manager</h2>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <p className="cta">
          <a href="#" className="btn primary">
            Get it on Chrome
          </a>
          <a href="#" className="btn secondary">
            Get it on Firefox
          </a>
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
