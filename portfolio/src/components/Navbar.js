import React, { useState, useEffect } from 'react';
import { useLocale } from '../context/LanguageContext';

function NavbarComponent() {
  const { locale, lang, toggleLang } = useLocale();
  const { nav, contact } = locale;
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  const links = [
    { href: '#work', label: nav.work },
    { href: '#leadership', label: nav.leadership },
    { href: '#enablement', label: nav.enablement },
    { href: '#journey', label: nav.journey },
    { href: '#recognition', label: nav.recognition },
    { href: '#contact', label: nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the section currently under the reading line.
  useEffect(() => {
    const ids = ['work', 'leadership', 'enablement', 'journey', 'recognition', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const setLang = (target) => {
    if (lang !== target) toggleLang();
  };

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <span className="navbar-progress" aria-hidden="true"></span>

      <div className="navbar-inner">
        <a href="#hero" className="navbar-logo" aria-label="Octavio Aleman">
          <span className="navbar-logo__mark">OA</span>
        </a>

        <nav aria-label="Main navigation">
          <ul className="navbar-links">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={active === href.slice(1) ? 'is-active' : undefined}
                  aria-current={active === href.slice(1) ? 'true' : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar-right">
          <div className="lang-toggle" role="group" aria-label="Language">
            <span className={`lang-toggle__thumb lang-toggle__thumb--${lang}`} aria-hidden="true"></span>
            <button
              type="button"
              className={`lang-btn${lang === 'en' ? ' is-active' : ''}`}
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
            <button
              type="button"
              className={`lang-btn${lang === 'es' ? ' is-active' : ''}`}
              onClick={() => setLang('es')}
              aria-pressed={lang === 'es'}
            >
              ES
            </button>
          </div>

          <a
            href={contact.resume_file}
            download={contact.resume_filename}
            className="navbar-resume spot"
          >
            {nav.resume}
          </a>

          <button
            type="button"
            className={`navbar-hamburger${menuOpen ? ' is-open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span></span><span></span>
          </button>
        </div>
      </div>

      <nav className={`navbar-mobile${menuOpen ? ' is-open' : ''}`} aria-label="Mobile navigation">
        {links.map(({ href, label }) => (
          <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
        ))}
        <a
          href={contact.resume_file}
          download={contact.resume_filename}
          onClick={() => setMenuOpen(false)}
        >
          {nav.resume}
        </a>
      </nav>
    </header>
  );
}

export default NavbarComponent;
