import React from 'react';

/**
 * Shared section opener so every section starts on the same rhythm:
 * mono index, hairline, label, then an optional display heading and intro.
 */
function SectionHead({ index, label, heading, intro, align = 'left', children }) {
  return (
    <div className={`section-head section-head--${align}`}>
      <span className="eyebrow reveal">
        <span className="eyebrow__index">{index}</span>
        <span className="eyebrow__line" aria-hidden="true"></span>
        {label}
      </span>
      {heading && <h2 className="display-title reveal reveal-delay-1">{heading}</h2>}
      {intro && <p className="section-intro reveal reveal-delay-2">{intro}</p>}
      {children}
    </div>
  );
}

export default SectionHead;
