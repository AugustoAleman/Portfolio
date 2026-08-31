import React from 'react';
import { useLocale } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHead from '../components/SectionHead';
import Motif from '../components/Motif';

/**
 * Deliberately different texture from the professional sections: warmer light,
 * an asymmetric composition, captions floating on glass.
 *
 * No photographs here by choice. Each tile is a drawn piece with its own hue,
 * a glow behind the motif and a pointer-tracked sheen, so it has to hold the
 * space on its own rather than stand in for a missing image.
 */
const drift = ['-18', '10', '-8'];

function PersonalSection() {
  const { locale } = useLocale();
  const { personal } = locale;
  const headRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section id="personal" className="section section--personal" aria-label={personal.section_label}>
      <div className="personal-wash" aria-hidden="true"></div>
      <div className="container">
        <div ref={headRef}>
          <SectionHead
            index={personal.section_index}
            label={personal.section_label}
            heading={personal.heading}
          />
        </div>

        <div className="pers-grid" ref={gridRef}>
          {personal.items.map((item, i) => (
            <figure
              key={item.id}
              className={`pers-tile pers-tile--${i + 1} pers-tile--${item.id} spot reveal reveal-delay-${i + 1}`}
              data-drift={drift[i % drift.length]}
            >
              <div className="pers-tile__media">
                <span className="pers-tile__texture" aria-hidden="true">
                  <Motif variant={item.id} />
                </span>
                <span className="pers-tile__sheen" aria-hidden="true"></span>
                <span className="pers-tile__scrim" aria-hidden="true"></span>
              </div>
              <figcaption className="pers-tile__caption glass">
                <h3 className="pers-tile__title">{item.title}</h3>
                <p className="pers-tile__text">{item.text}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PersonalSection;
