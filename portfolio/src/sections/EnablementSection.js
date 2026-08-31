import React from 'react';
import { useLocale } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

function EnablementSection() {
  const { locale } = useLocale();
  const { enablement } = locale;
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();

  return (
    <section id="enablement" className="section section--enablement" aria-label={enablement.section_label}>
      <div className="section-glow section-glow--violet" aria-hidden="true"></div>
      <div className="container">
        <div className="enb-layout">
          <div className="enb-narrative" ref={leftRef}>
            <div className="reveal">
              <span className="eyebrow">
                <span className="eyebrow__index">{enablement.section_index}</span>
                <span className="eyebrow__line" aria-hidden="true"></span>
                {enablement.section_label}
              </span>
              <h2 className="display-title">{enablement.heading}</h2>
              <p className="section-intro">{enablement.intro}</p>
              <p className="enb-body">{enablement.body}</p>
              <p className="enb-closing">{enablement.closing}</p>
            </div>
          </div>

          <div className="enb-side" ref={rightRef}>
            <div className="enb-panel glass spot reveal reveal-delay-2" data-drift="-10">
              <div className="enb-block">
                <span className="enb-block__label">{enablement.audiences_label}</span>
                <div className="enb-audiences">
                  {enablement.audiences.map((a) => (
                    <span key={a} className="enb-audience glass-chip">{a}</span>
                  ))}
                </div>
              </div>

              <hr className="thin-rule" />

              <div className="enb-block">
                <span className="enb-block__label">{enablement.capabilities_label}</span>
                <ul className="enb-capabilities">
                  {enablement.capabilities.map((c) => (
                    <li key={c} className="enb-capability">
                      <span className="enb-capability__mark" aria-hidden="true"></span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EnablementSection;
