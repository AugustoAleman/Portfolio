import React from 'react';
import { useLocale } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

function LeadershipSection() {
  const { locale } = useLocale();
  const { leadership } = locale;
  const introRef = useScrollReveal();
  const areasRef = useScrollReveal();
  const foundationRef = useScrollReveal();

  return (
    <section id="leadership" className="section" aria-label={leadership.section_label}>
      <div className="section-glow section-glow--cyan" aria-hidden="true"></div>
      <div className="container">
        <div className="lead-layout">
          <div className="lead-intro" ref={introRef}>
            <div className="reveal">
              <span className="eyebrow">
                <span className="eyebrow__index">{leadership.section_index}</span>
                <span className="eyebrow__line" aria-hidden="true"></span>
                {leadership.section_label}
              </span>
              <h2 className="display-title">{leadership.heading}</h2>
              <p className="section-intro">{leadership.intro}</p>
            </div>
          </div>

          <div className="lead-areas" ref={areasRef}>
            {leadership.areas.map((area, i) => (
              <article
                key={area.title}
                className={`lead-area glass spot reveal reveal-delay-${Math.min(i + 1, 6)}`}
              >
                <span className="lead-area__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="lead-area__title">{area.title}</h3>
                <p className="lead-area__text">{area.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="foundation glass spot reveal" ref={foundationRef}>
          <div className="foundation__head">
            <span className="foundation__label">{leadership.foundation_label}</span>
            <p className="foundation__note">{leadership.foundation_note}</p>
          </div>
          <div className="foundation__groups">
            {leadership.foundation_groups.map((g) => (
              <div key={g.label} className="foundation__group">
                <span className="foundation__group-label">{g.label}</span>
                <div className="foundation__items">
                  {g.items.map((it) => (
                    <span key={it} className="foundation__item">{it}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeadershipSection;
