import React, { useState } from 'react';
import { useLocale } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHead from '../components/SectionHead';
import Motif from '../components/Motif';

/**
 * Case study card. Always mounts collapsed. Collapsed state shows only what
 * earns a click: index, title, category, one line, and the card's visual.
 * The expand affordance is a labelled control with a drawn arrow, not a glyph.
 */
function WorkCard({ item, index, labels, expandLabel, collapseLabel }) {
  const [open, setOpen] = useState(false);

  const fields = [
    ['context', labels.context, item.context],
    ['problem', labels.problem, item.problem],
    ['role', labels.role, item.role],
    ['solution', labels.solution, item.solution],
    ['outcome', labels.outcome, item.outcome],
  ].filter(([, , value]) => Boolean(value));

  return (
    <article className={`work-card glass spot${open ? ' is-open' : ''}`}>
      <div className="work-card__media" aria-hidden="true">
        {item.image ? (
          <img src={item.image} alt="" loading="lazy" />
        ) : (
          <Motif index={index} />
        )}
        <span className="work-card__media-veil"></span>
      </div>

      <div className="work-card__body">
        <div className="work-card__head">
          <span className="work-card__index">{item.index}</span>
          <span className="work-card__domain">{item.domain}</span>
        </div>

        <h3 className="work-card__title">{item.title}</h3>
        <p className="work-card__summary">{item.summary}</p>

        <button
          type="button"
          className="work-card__toggle"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={`work-panel-${item.id}`}
        >
          <span className="work-card__toggle-label">
            <span className="work-card__toggle-text" data-alt={collapseLabel}>
              {open ? collapseLabel : expandLabel}
            </span>
          </span>
          <span className="work-card__toggle-rule" aria-hidden="true"></span>
          <span className="work-card__toggle-arrow" aria-hidden="true"></span>
        </button>

        <div className="work-card__panel" id={`work-panel-${item.id}`} role="region">
          <div className="work-card__panel-inner">
            <dl className="work-card__fields">
              {fields.map(([key, label, value]) => (
                <div key={key} className={`work-field work-field--${key}`}>
                  <dt className="work-field__label">{label}</dt>
                  <dd className="work-field__text">{value}</dd>
                </div>
              ))}
            </dl>

            {item.tech && item.tech.length > 0 && (
              <div className="work-card__tech">
                <span className="work-card__tech-label">{labels.tech}</span>
                <span className="work-card__tech-items">
                  {item.tech.map((t) => (
                    <span key={t} className="work-tag">{t}</span>
                  ))}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function WorkSection() {
  const { locale } = useLocale();
  const { work } = locale;
  const headRef = useScrollReveal();
  const listRef = useScrollReveal();

  return (
    <section id="work" className="section" aria-label={work.section_label}>
      <div className="section-glow section-glow--indigo" aria-hidden="true"></div>
      <div className="container">
        <div ref={headRef}>
          <SectionHead
            index={work.section_index}
            label={work.section_label}
            heading={work.heading}
            intro={work.intro}
          />
        </div>

        <div className="work-list" ref={listRef}>
          {work.items.map((item, i) => (
            <div key={item.id} className="reveal">
              <WorkCard
                item={item}
                index={i}
                labels={work.field_labels}
                expandLabel={work.expand}
                collapseLabel={work.collapse}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
