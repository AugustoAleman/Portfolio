import React from 'react';
import { useLocale } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHead from '../components/SectionHead';

/**
 * Four highlights, one uniform card shape. Every card carries exactly an
 * index, a headline, one supporting sentence and a meta line, so the row
 * aligns by construction rather than by luck.
 */
function HighlightsSection() {
  const { locale } = useLocale();
  const { highlights } = locale;
  const headRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section id="highlights" className="section" aria-label={highlights.section_label}>
      <div className="section-glow section-glow--violet" aria-hidden="true"></div>
      <div className="container">
        <div ref={headRef}>
          <SectionHead
            index={highlights.section_index}
            label={highlights.section_label}
            heading={highlights.heading}
          />
        </div>

        <div className="hl-grid" ref={gridRef}>
          {highlights.items.map((item, i) => (
            <article
              key={item.k}
              className={`hl-card glass spot reveal reveal-delay-${Math.min(i + 1, 4)}`}
            >
              <span className="hl-card__k">{item.k}</span>
              <h3 className="hl-card__headline">{item.headline}</h3>
              <p className="hl-card__text">{item.text}</p>
              <span className="hl-card__meta">{item.meta}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HighlightsSection;
