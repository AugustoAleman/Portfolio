import React from 'react';
import { useLocale } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useFillProgress } from '../hooks/useScrollProgress';
import SectionHead from '../components/SectionHead';

/**
 * Four milestones, one rail. Education, specialization and the two roles read
 * as a single arc rather than a chronological CV.
 */
function JourneySection() {
  const { locale } = useLocale();
  const { journey } = locale;
  const headRef = useScrollReveal();
  const revealRef = useScrollReveal();
  const [railRef, progress] = useFillProgress();

  return (
    <section id="journey" className="section" aria-label={journey.section_label}>
      <div className="section-glow section-glow--indigo" aria-hidden="true"></div>
      <div className="container">
        <div ref={headRef}>
          <SectionHead
            index={journey.section_index}
            label={journey.section_label}
            heading={journey.intro}
          />
        </div>

        <div className="timeline" ref={revealRef}>
          <div
            className="timeline__rail"
            ref={railRef}
            aria-hidden="true"
            style={{ '--fill': progress }}
          >
            <span className="timeline__fill"></span>
          </div>

          <ol className="timeline__list">
            {journey.items.map((item, i) => (
              <li
                key={item.id}
                className={`tl-item reveal${i === journey.items.length - 1 ? ' tl-item--now' : ''}`}
              >
                <span className="tl-node" aria-hidden="true"></span>
                <div className="tl-when">
                  <span className="tl-kind">{item.kind}</span>
                  <span className="tl-period">{item.period}</span>
                </div>
                <div className="tl-content glass spot">
                  <h3 className="tl-title">{item.title}</h3>
                  <span className="tl-org">{item.org}</span>
                  <span className="tl-place">{item.place}</span>
                  <p className="tl-text">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default JourneySection;
