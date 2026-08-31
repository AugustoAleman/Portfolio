import { useEffect } from 'react';

/**
 * One delegated pointer listener for the whole page.
 *
 * Any element carrying `.spot` gets `--mx` / `--my` (percentages, origin
 * top-left of that element) written to it while the pointer is over it, and
 * `--spot` set to 1. Glass surfaces use those to move a specular highlight
 * under the cursor, which is what makes the material read as glass instead
 * of a translucent rectangle.
 *
 * Cheap by construction: one listener, rAF-throttled, one element updated
 * at a time, and nothing at all on touch or reduced motion.
 */
export function useSpotlight() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fine = window.matchMedia('(pointer: fine)').matches;
    if (reduce || !fine) return;

    let current = null;
    let raf = 0;
    let pending = null;

    const clear = (el) => {
      if (!el) return;
      el.style.setProperty('--spot', '0');
    };

    const apply = () => {
      raf = 0;
      if (!pending) return;
      const { el, x, y } = pending;
      el.style.setProperty('--mx', `${x}%`);
      el.style.setProperty('--my', `${y}%`);
      el.style.setProperty('--spot', '1');
    };

    const onMove = (e) => {
      const el = e.target instanceof Element ? e.target.closest('.spot') : null;
      if (el !== current) {
        clear(current);
        current = el;
      }
      if (!el) return;
      const r = el.getBoundingClientRect();
      pending = {
        el,
        x: (((e.clientX - r.left) / r.width) * 100).toFixed(2),
        y: (((e.clientY - r.top) / r.height) * 100).toFixed(2),
      };
      if (!raf) raf = requestAnimationFrame(apply);
    };

    const onLeave = () => {
      clear(current);
      current = null;
    };

    document.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    return () => {
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      cancelAnimationFrame(raf);
      clear(current);
    };
  }, []);
}

export default useSpotlight;
