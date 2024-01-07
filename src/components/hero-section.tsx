function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-label">
      <div className="image">
        <img
          src="/images/illustration-hero.svg"
          alt=""
          width="354"
          height="252"
        />
      </div>
      <div className="wrapper">
        <h2 id="hero-label">A Simple Bookmark Manager</h2>
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
