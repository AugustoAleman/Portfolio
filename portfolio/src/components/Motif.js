import React from 'react';

/**
 * Abstract editorial motifs used where a real photograph does not exist and
 * probably never will (enterprise work under NDA). These are drawn artwork,
 * not "image missing" placeholders: each variant is keyed to what its case
 * study is about, so the card reads as finished either way.
 */

/* Tunable from CSS so the same drawing can be retuned per context: the case
   study motifs stay violet, the Outside Work tiles each take their own hue. */
const stroke = 'var(--motif-stroke, rgba(167, 139, 250, 0.55))';
const faint = 'var(--motif-faint, rgba(167, 139, 250, 0.18))';
const cool = 'var(--motif-cool, rgba(77, 124, 255, 0.42))';

const variants = {
  // diffusion outward from a point — adoption spreading
  diffusion: (
    <>
      {[26, 46, 66, 86, 106].map((r, i) => (
        <circle key={r} cx="40" cy="100" r={r} fill="none" stroke={i < 2 ? stroke : faint} strokeWidth="1" />
      ))}
      <circle cx="40" cy="100" r="5" fill={stroke} />
      {[40, 78, 116, 154].map((y, i) => (
        <circle key={y} cx={92 + i * 30} cy={y} r="3.5" fill={cool} />
      ))}
    </>
  ),
  // a linked chain of stages — origination through collections
  chain: (
    <>
      <path d="M14 140 C 60 140, 60 60, 106 60 S 152 140, 198 140" fill="none" stroke={faint} strokeWidth="1" />
      {[[14, 140], [60, 100], [106, 60], [152, 100], [198, 140]].map(([x, y], i) => (
        <g key={x}>
          <circle cx={x} cy={y} r="9" fill="none" stroke={i === 2 ? stroke : faint} strokeWidth="1" />
          <circle cx={x} cy={y} r="3.5" fill={i === 2 ? stroke : cool} />
        </g>
      ))}
    </>
  ),
  // lattice with a signal running through it — predictive plus generative
  lattice: (
    <>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line key={`v${i}`} x1={20 + i * 34} y1="24" x2={20 + i * 34} y2="176" stroke={faint} strokeWidth="1" />
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={`h${i}`} x1="20" y1={24 + i * 38} x2="190" y2={24 + i * 38} stroke={faint} strokeWidth="1" />
      ))}
      <path d="M20 138 C 60 138, 60 62, 105 62 S 150 100, 190 40" fill="none" stroke={stroke} strokeWidth="1.5" />
      <circle cx="105" cy="62" r="4" fill={stroke} />
    </>
  ),
  // dense pulse — real-time transaction flow
  pulse: (
    <>
      <line x1="10" y1="100" x2="210" y2="100" stroke={faint} strokeWidth="1" />
      {Array.from({ length: 24 }, (_, i) => {
        const x = 14 + i * 8.2;
        const h = [16, 34, 22, 58, 26, 18, 44, 30][i % 8];
        return <line key={i} x1={x} y1={100 - h / 2} x2={x} y2={100 + h / 2} stroke={i % 8 === 3 ? stroke : cool} strokeWidth="1.5" opacity={i % 8 === 3 ? 1 : 0.45} />;
      })}
    </>
  ),
  // a pan and rising heat, drawn flat
  cooking: (
    <>
      <path d="M62 118 h96 a10 10 0 0 1 10 10 v6 a30 30 0 0 1 -30 30 h-56 a30 30 0 0 1 -30 -30 v-6 a10 10 0 0 1 10 -10 z" fill="none" stroke={stroke} strokeWidth="1.2" />
      <line x1="168" y1="126" x2="206" y2="118" stroke={faint} strokeWidth="1.2" />
      {[86, 110, 134].map((x, i) => (
        <path key={x} d={`M${x} 96 c -9 -14, 9 -20, 0 -34 c -8 -12, 6 -18, 0 -28`} fill="none" stroke={i === 1 ? stroke : faint} strokeWidth="1" />
      ))}
    </>
  ),
  // brush strokes across a field
  painting: (
    <>
      <rect x="34" y="26" width="152" height="112" rx="6" fill="none" stroke={faint} strokeWidth="1" />
      <path d="M48 112 C 78 70, 96 116, 128 62" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M58 124 C 92 96, 120 128, 172 76" fill="none" stroke={cool} strokeWidth="1.6" strokeLinecap="round" />
      <line x1="110" y1="138" x2="110" y2="174" stroke={faint} strokeWidth="1" />
      <path d="M92 174 h36" stroke={faint} strokeWidth="1" />
    </>
  ),
  // water level with roots reaching into it
  hydroponics: (
    <>
      <path d="M28 116 h164 v40 a8 8 0 0 1 -8 8 h-148 a8 8 0 0 1 -8 -8 z" fill="none" stroke={faint} strokeWidth="1" />
      <path d="M28 130 c 18 -7, 30 7, 48 0 s 30 7, 48 0 s 30 7, 48 0 s 20 5, 20 3" fill="none" stroke={cool} strokeWidth="1.2" />
      {[70, 110, 150].map((x, i) => (
        <g key={x}>
          <line x1={x} y1="116" x2={x} y2={i === 1 ? 46 : 62} stroke={i === 1 ? stroke : faint} strokeWidth="1.2" />
          <path d={`M${x} ${i === 1 ? 62 : 76} c -16 -4, -20 -16, -20 -22`} fill="none" stroke={faint} strokeWidth="1" />
          <path d={`M${x} ${i === 1 ? 54 : 70} c 16 -4, 20 -16, 20 -22`} fill="none" stroke={faint} strokeWidth="1" />
        </g>
      ))}
      <path d="M62 150 c 10 -6, 20 6, 30 0 s 22 6, 34 0 s 20 5, 28 1" fill="none" stroke={faint} strokeWidth="1" />
    </>
  ),
  // nested layers converging — a platform built in parts
  layers: (
    <>
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={24 + i * 20}
          y={34 + i * 18}
          width={172 - i * 40}
          height={132 - i * 36}
          rx="10"
          fill="none"
          stroke={i === 3 ? stroke : faint}
          strokeWidth="1"
        />
      ))}
      <circle cx="110" cy="100" r="4" fill={stroke} />
    </>
  ),
};

const order = ['diffusion', 'chain', 'lattice', 'pulse', 'layers'];

function Motif({ variant, index = 0, className = '' }) {
  const key = variant || order[index % order.length];
  return (
    <svg
      className={`motif ${className}`}
      viewBox="0 0 220 200"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
    >
      {variants[key] || variants.diffusion}
    </svg>
  );
}

export default Motif;
