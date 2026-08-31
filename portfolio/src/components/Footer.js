import React from 'react';
import { useLocale } from '../context/LanguageContext';

/**
 * Deliberately no LinkedIn link here. The Contact section already carries one
 * as a card, and two links to the same profile within a screen of each other
 * read as an oversight. The tagline takes the right-hand slot instead, so the
 * row stays balanced without inventing a second element.
 */
function FooterComponent() {
  const { locale } = useLocale();
  const { footer } = locale;
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-copy">{footer.copy.replace('2025', year)}</span>
        <span className="footer-tagline">{footer.tagline}</span>
      </div>
    </footer>
  );
}

export default FooterComponent;
