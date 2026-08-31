import React, { useEffect, useRef } from 'react';

export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const optionsRef = React.useRef(options);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const revealAll = (target) => {
      target.classList.add('revealed');
      target.querySelectorAll('.reveal').forEach(child => child.classList.add('revealed'));
    };

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      revealAll(el);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          revealAll(entry.target);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px', ...optionsRef.current }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
