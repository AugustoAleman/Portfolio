import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { NavbarComponent, FooterComponent, Aurora } from './components';
import { useSpotlight } from './hooks/useSpotlight';
import { useScrollAmbience } from './hooks/useScrollProgress';

import HeroSection from './sections/HeroSection';
import HighlightsSection from './sections/HighlightsSection';
import WorkSection from './sections/WorkSection';
import LeadershipSection from './sections/LeadershipSection';
import EnablementSection from './sections/EnablementSection';
import JourneySection from './sections/JourneySection';
import RecognitionSection from './sections/RecognitionSection';
import GlobalSection from './sections/GlobalSection';
import PersonalSection from './sections/PersonalSection';
import ContactSection from './sections/ContactSection';

/**
 * Narrative order, top to bottom:
 * who I am, what I have delivered, how I lead, how I run adoption,
 * how the career got here, what marks me out, where I have worked,
 * who I am away from it, how to reach me.
 */
function Portfolio() {
  useSpotlight();
  useScrollAmbience();

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Aurora />
      <NavbarComponent />
      <main id="main-content">
        <HeroSection />
        <HighlightsSection />
        <WorkSection />
        <LeadershipSection />
        <EnablementSection />
        <JourneySection />
        <RecognitionSection />
        <GlobalSection />
        <PersonalSection />
        <ContactSection />
      </main>
      <FooterComponent />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Portfolio />
    </LanguageProvider>
  );
}

export default App;
