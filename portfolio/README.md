# Octavio Aleman — Portfolio

Personal portfolio positioning Octavio Aleman for AI leadership, product, and
transformation roles. Single continuous page, bilingual (EN/ES), built with a
custom "Editorial Futurism + Liquid Glass" design system.

## Stack

- **React 18** (Create React App) — no UI framework
- **Plain CSS** with design tokens (`src/assets/styles/variables.css`, `global.css`)
- **i18n**: React Context + locale files, `localStorage` persistence, browser detection with EN fallback
- Fonts: Cormorant Garamond (display), Be Vietnam Pro (body), IBM Plex Mono (metadata)
- Icons: Boxicons (CDN). Analytics: Google Analytics (gtag).

No Bootstrap, MUI, styled-components, or router — the previous versions' heavy
dependencies were removed.

## Run

```bash
cd Portfolio/portfolio
npm install
npm start        # http://localhost:3000
npm run build    # production build → build/
```

## Architecture

```
src/
  App.js                      # composes all sections in order
  context/LanguageContext.js  # EN/ES provider + useLocale() hook
  hooks/
    useScrollReveal.js        # IntersectionObserver reveal (reduced-motion aware)
    usePointerParallax.js     # subtle hero pointer parallax (fine-pointer only)
  components/
    Navbar.js  Footer.js  Aurora.js   # Aurora = fixed ambient background field
  sections/                   # one file per page section
    HeroSection, ImpactSection, InitiativesSection (Work),
    LeadershipSection, EnablementSection, JourneySection,
    RecognitionSection, GlobalSection, AboutSection, ContactSection
  locales/
    en.js  es.js              # ← ALL site content lives here
  assets/styles/
    variables.css  global.css
```

### Editing content

**All copy, metrics, links, and data are in `src/locales/en.js` and `src/locales/es.js`.**
Edit those files — no component changes needed. Keep both locales in sync.

See **`ASSETS_NEEDED.md`** for the photographs and links still to be supplied
(hero portrait, recognition images, external links) and exactly how to wire them in.

### Notes

- The CV/résumé is served directly from `public/resume.pdf` (no backend needed).
- `src/pages/` holds the original student-project pages, kept as a recoverable
  archive; they are not imported by the app and not part of the build.
- Respects `prefers-reduced-motion`; includes skip link, focus styles, semantic
  landmarks, and alt text for accessibility.
