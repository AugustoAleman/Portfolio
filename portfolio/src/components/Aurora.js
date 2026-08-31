import React from 'react';

/**
 * Fixed ambient field behind everything. The drifting blurred masses are what
 * the glass surfaces refract, so their movement is what stops the material
 * from looking like flat translucency. Purely decorative, frozen under
 * prefers-reduced-motion.
 */
function Aurora() {
  return (
    <div className="aurora" aria-hidden="true">
      <div className="aurora__blob aurora__blob--1" />
      <div className="aurora__blob aurora__blob--2" />
      <div className="aurora__blob aurora__blob--3" />
      <div className="aurora__blob aurora__blob--4" />
      <div className="aurora__mesh" />
      <div className="aurora__grain" />
      <div className="aurora__vignette" />
    </div>
  );
}

export default Aurora;
