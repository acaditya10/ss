import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { PortfolioGrid } from './components/PortfolioGrid';
import { StoryCategories } from './components/StoryCategories';
import { Films } from './components/Films';
import { QuoteBanner } from './components/QuoteBanner';
import { LocationSection } from './components/LocationSection';
import { Testimonials } from './components/Testimonials';
import { InquiryForm } from './components/InquiryForm';
import { InstagramGrid } from './components/InstagramGrid';
import { Footer } from './components/Footer';
import { FilmModal } from './components/FilmModal';
import { CINEMATIC_FILMS } from './data/portfolioData';
import { FilmItem } from './types';

export default function App() {
  const [heroFilmModal, setHeroFilmModal] = useState<FilmItem | null>(null);

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#111111] selection:bg-[#7D836D]/20 selection:text-[#111111]">
      {/* 1. Minimal Header */}
      <Header onNavigate={handleScrollToSection} />

      <main>
        {/* 2. Cinematic Asymmetrical Hero with Background YouTube Video */}
        <Hero
          onExploreClick={() => handleScrollToSection('intro')}
          onWatchFilm={() => setHeroFilmModal(CINEMATIC_FILMS[0])}
        />

        {/* 3. 40+ Years Heritage / Introduction */}
        <IntroSection />

        {/* 4. Dense Photographic Portfolio */}
        <PortfolioGrid />

        {/* 5. Wedding Stories / Occasions */}
        <StoryCategories />

        {/* 6. Cinematic Films (Real YouTube Films) */}
        <Films />

        {/* 7. Olive Testimonial Banner */}
        <QuoteBanner />

        {/* 8. Studio & Location (Google Maps) */}
        <LocationSection />

        {/* 9. Client Reviews */}
        <Testimonials />

        {/* 10. Inquiry / Contact */}
        <InquiryForm />

        {/* 11. Instagram Stories */}
        <InstagramGrid />
      </main>

      {/* 12. Minimal Footer */}
      <Footer onNavigate={handleScrollToSection} />

      {/* Hero Featured Film Cinema Modal */}
      <FilmModal
        film={heroFilmModal}
        isOpen={heroFilmModal !== null}
        onClose={() => setHeroFilmModal(null)}
      />
    </div>
  );
}
