import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '../locales/en';
import es from '../locales/es';

const locales = { en, es };

const getInitialLanguage = () => {
  const saved = localStorage.getItem('portfolio-lang');
  if (saved && ['en', 'es'].includes(saved)) return saved;
  const browser = navigator.language?.slice(0, 2) || 'en';
  return browser === 'es' ? 'es' : 'en';
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLanguage);
  const locale = locales[lang];

  const toggleLang = () => {
    const next = lang === 'en' ? 'es' : 'en';
    setLang(next);
    localStorage.setItem('portfolio-lang', next);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, locale, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLocale must be used within LanguageProvider');
  return ctx;
}
