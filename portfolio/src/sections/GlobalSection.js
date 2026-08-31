import React from 'react';
import { useLocale } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

/**
 * Compact band: countries with the cities under them, plus languages. Grouping
 * by country keeps a city like Dallas in view without asserting a purpose the
 * CV does not state, and stops the section reading as a travel list.
 */
function GlobalSection() {
  const { locale } = useLocale();
  const { global } = locale;
  const ref = useScrollReveal();

  return (
    <section id="global" className="section section--tight" aria-label={global.section_label}>
      <div className="section-glow section-glow--cyan" aria-hidden="true"></div>
      <div className="container" ref={ref}>
        <div className="gl-band glass spot reveal">
          <div className="gl-band__intro">
            <span className="eyebrow">
              <span className="eyebrow__index">{global.section_index}</span>
              <span className="eyebrow__line" aria-hidden="true"></span>
              {global.section_label}
            </span>
            <p className="gl-band__text">{global.intro}</p>
          </div>

          <div className="gl-band__cols">
            <div className="gl-col">
              <span className="gl-col__label">{global.locations_label}</span>
              <ul className="gl-regions">
                {global.regions.map((r) => (
                  <li key={r.country} className="gl-region">
                    <span className="gl-region__head">
                      <span className="gl-region__dot" aria-hidden="true"></span>
                      <span className="gl-region__country">{r.country}</span>
                      <span className="gl-region__note">{r.note}</span>
                    </span>
                    <span className="gl-region__cities">
                      {r.cities.map((c) => (
                        <span key={c} className="gl-region__city">{c}</span>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="gl-col">
              <span className="gl-col__label">{global.languages_label}</span>
              <ul className="gl-langs">
                {global.languages.map((l) => (
                  <li key={l.lang} className="gl-lang">
                    <span className="gl-lang__code">{l.code}</span>
                    <span className="gl-lang__name">{l.lang}</span>
                    <span className="gl-lang__level">{l.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GlobalSection;
