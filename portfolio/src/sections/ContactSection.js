import React from 'react';
import { useLocale } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

function ContactSection() {
  const { locale } = useLocale();
  const { contact } = locale;
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();

  const links = [
    {
      key: 'linkedin',
      href: contact.linkedin_url,
      label: contact.linkedin_label,
      sub: contact.linkedin_sub,
      external: true,
    },
    {
      key: 'email',
      href: `mailto:${contact.email}`,
      label: contact.email_label,
      sub: contact.email_sub,
    },
    {
      key: 'resume',
      href: contact.resume_file,
      label: contact.resume_label,
      sub: contact.resume_sub,
      download: contact.resume_filename,
    },
  ];

  return (
    <section id="contact" className="section section--contact" aria-label={contact.section_label}>
      <div className="section-glow section-glow--indigo" aria-hidden="true"></div>
      <div className="container">
        <div className="contact-layout">
          <div ref={leftRef} className="reveal">
            <span className="eyebrow">
              <span className="eyebrow__index">{contact.section_index}</span>
              <span className="eyebrow__line" aria-hidden="true"></span>
              {contact.section_label}
            </span>
            <h2 className="contact-headline">{contact.headline}</h2>
            <p className="contact-subtext">{contact.subtext}</p>
          </div>

          <nav className="contact-links" ref={rightRef} aria-label={contact.section_label}>
            {links.map((l, i) => (
              <a
                key={l.key}
                href={l.href}
                className={`contact-link glass spot reveal reveal-delay-${i + 1}`}
                {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                {...(l.download ? { download: l.download } : {})}
              >
                <span className="contact-link__text">
                  <span className="contact-link__label">{l.label}</span>
                  <span className="contact-link__sub">{l.sub}</span>
                </span>
                <span className="contact-link__arrow" aria-hidden="true"></span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
