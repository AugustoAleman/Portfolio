import React from 'react';
import { useLocale } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHead from '../components/SectionHead';

/**
 * Photography-led grid. The asymmetry is driven by the photographs: the CENEVAL
 * shot is a standing subject and takes the tall frame, the Huawei and TecUp
 * shots are wide scenes and take the two landscape frames beside it. The two
 * right-hand cards are always exactly equal in height.
 *
 * `focus` sets object-position per image so the subject survives the crop at
 * every breakpoint. A card with no photograph falls back to a drawn seal and
 * still reads as finished next to the ones that have one.
 */
function RecognitionCard({ item, seal, className, viewLabel }) {
  const meta = [item.date, item.location].filter(Boolean).join(' · ');

  return (
    <article className={`rec-card spot ${className}${item.image ? ' has-photo' : ''}`}>
      <div className="rec-card__media">
        {item.image ? (
          <img
            src={item.image}
            alt={item.imageAlt || ''}
            loading="lazy"
            decoding="async"
            style={{ objectPosition: item.focus || '50% 50%' }}
          />
        ) : (
          <div className="rec-card__seal" aria-hidden="true">
            <svg viewBox="0 0 120 120" focusable="false">
              <circle cx="60" cy="60" r="46" fill="none" stroke="rgba(167,139,250,0.30)" strokeWidth="1" />
              <circle cx="60" cy="60" r="34" fill="none" stroke="rgba(167,139,250,0.16)" strokeWidth="1" />
              <circle cx="60" cy="60" r="56" fill="none" stroke="rgba(167,139,250,0.10)" strokeWidth="1" />
            </svg>
            <span className="rec-card__seal-num">{seal}</span>
          </div>
        )}
      </div>
      <span className="rec-card__scrim" aria-hidden="true"></span>
      <span className="rec-card__tint" aria-hidden="true"></span>

      <div className="rec-card__overlay">
        {meta && <span className="rec-card__meta glass-chip">{meta}</span>}
        <h3 className="rec-card__title">{item.title}</h3>
        <p className="rec-card__desc">{item.description}</p>
        {item.externalUrl && (
          <a
            href={item.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rec-card__link"
          >
            {item.sourceLabel || viewLabel}
            <span className="rec-card__link-arrow" aria-hidden="true"></span>
          </a>
        )}
      </div>
    </article>
  );
}

function RecognitionSection() {
  const { locale } = useLocale();
  const { recognition } = locale;
  const headRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section id="recognition" className="section" aria-label={recognition.section_label}>
      <div className="section-glow section-glow--violet" aria-hidden="true"></div>
      <div className="container">
        <div ref={headRef}>
          <SectionHead
            index={recognition.section_index}
            label={recognition.section_label}
            heading={recognition.heading}
          />
        </div>

        <div className="rec-grid" ref={gridRef}>
          {recognition.items.map((item, i) => (
            <RecognitionCard
              key={item.id}
              item={item}
              seal={String(i + 1).padStart(2, '0')}
              viewLabel={recognition.view_label}
              className={`rec-card--${i + 1} reveal reveal-delay-${Math.min(i + 1, 3)}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecognitionSection;
