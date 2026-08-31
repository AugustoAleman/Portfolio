import React from 'react';
import { useLocale } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { usePointerParallax } from '../hooks/usePointerParallax';

function HeroSection() {
  const { locale } = useLocale();
  const { hero } = locale;
  const revealRef = useScrollReveal();
  const parallaxRef = usePointerParallax();

  return (
    <section id="hero" className="hero" aria-label={hero.role} ref={parallaxRef}>
      <div className="hero-field" aria-hidden="true">
        <span className="hero-field__grid"></span>
        <span className="hero-field__caustic hero-field__caustic--a"></span>
        <span className="hero-field__caustic hero-field__caustic--b"></span>
      </div>

      <div className="container">
        <div className="hero-grid" ref={revealRef}>
          <div className="hero-content">
            <div className="reveal">
              <span className="hero-status glass-chip">
                <span className="hero-status__dot" aria-hidden="true"></span>
                {hero.status}
              </span>
            </div>

            <h1 className="hero-name">
              <span className="hero-name__line reveal reveal-delay-1">{hero.name_line1}</span>
              <span className="hero-name__line hero-name__line--accent reveal reveal-delay-2">
                {hero.name_line2}
              </span>
            </h1>

            <p className="hero-role reveal reveal-delay-3">{hero.role}</p>
            <p className="hero-tagline reveal reveal-delay-4">{hero.tagline}</p>

            <div className="hero-ctas reveal reveal-delay-5">
              <a href="#work" className="btn btn--primary">
                {hero.cta_primary}
                <span className="btn__arrow" aria-hidden="true"></span>
              </a>
              <a href="#contact" className="btn btn--glass spot">
                {hero.cta_secondary}
              </a>
            </div>
          </div>

          <div className="hero-visual reveal reveal-delay-3">
            <figure className="hero-portrait spot" data-drift="-14">
              <span className="hero-portrait__halo" aria-hidden="true"></span>
              <div className="hero-portrait__frame">
                <img src={hero.photo} alt={hero.photo_alt} width="900" height="1200" />
                <span className="hero-portrait__wash" aria-hidden="true"></span>
                <span className="hero-portrait__sheen" aria-hidden="true"></span>
              </div>
            </figure>

            <ul className="hero-marks" aria-label={hero.role}>
              {hero.marks.map((m, i) => (
                <li key={m.k} className={`hero-mark glass spot hero-mark--${i + 1}`}>
                  <span className="hero-mark__k">{m.k}</span>
                  <span className="hero-mark__v">{m.v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hero-ticker reveal reveal-delay-6" aria-hidden="true">
          {hero.chips.map((c, i) => (
            <span key={c} className="hero-ticker__item">
              {c}
              {i < hero.chips.length - 1 && <span className="hero-ticker__sep"></span>}
            </span>
          ))}
        </div>
      </div>

      <span className="hero-scroll" aria-hidden="true">
        <span className="hero-scroll__label">{hero.scroll}</span>
        <span className="hero-scroll__rail"><span className="hero-scroll__dot"></span></span>
      </span>
    </section>
  );
}

export default HeroSection;
