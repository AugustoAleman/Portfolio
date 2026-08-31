import { useEffect, useRef, useState } from 'react';

/**
 * Writes overall page scroll progress (0 to 1) to `--page-progress` on the
 * root element, and drives any `[data-drift]` element by translating it a
 * fraction of the viewport as it passes through. This is what gives the glass
 * layers their slightly different speeds without a scroll library.
 */
export function useScrollAmbience() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.body.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      root.style.setProperty('--page-progress', p.toFixed(4));

      if (reduce) return;
      const vh = window.innerHeight;
      document.querySelectorAll('[data-drift]').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -vh || r.top > vh * 2) return;
        // -1 at the bottom of the viewport, +1 at the top
        const rel = 1 - (r.top + r.height / 2) / (vh / 2);
        const amount = parseFloat(el.dataset.drift) || 0;
        el.style.setProperty('--drift', `${(rel * amount).toFixed(2)}px`);
      });
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
}

/**
 * Fill progress for a vertical element (the timeline rail): 0 while it is
 * below the fold, 1 once it has scrolled past the reading line.
 */
export function useFillProgress() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setProgress(1);
      return;
    }

    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const line = window.innerHeight * 0.62;
      const p = (line - r.top) / r.height;
      setProgress(Math.min(1, Math.max(0, p)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return [ref, progress];
}
