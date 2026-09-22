import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { STUDIO_INFO } from '../data/portfolioData';

interface HeaderProps {
  onNavigate?: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { label: 'HOME', id: 'hero' },
    { label: 'ABOUT', id: 'intro' },
    { label: 'WEDDINGS', id: 'stories' },
    { label: 'FILMS', id: 'films' },
    { label: 'PORTFOLIO', id: 'portfolio' },
    { label: 'LOCATION', id: 'location' },
    { label: 'CONTACT', id: 'contact' },
  ];

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#F7F5F0]/95 backdrop-blur-md border-b border-[#111111]/5 py-3.5 sm:py-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)]'
            : 'bg-[#F7F5F0] py-4 sm:py-5 border-b border-transparent'
        }`}
      >
        <div className="w-[92vw] max-w-[1550px] mx-auto flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, 'hero')}
            className="flex items-center group cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7D836D] rounded-sm"
            aria-label="Sumit Studio homepage"
          >
            <Logo variant="header" />
          </a>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className="font-sans-clean text-[11px] lg:text-xs tracking-[0.18em] uppercase text-[#111111] hover:text-[#7D836D] transition-colors duration-200 relative py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7D836D]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <a
              href={`tel:${STUDIO_INFO.phone}`}
              className="font-sans-clean text-[11px] tracking-[0.16em] uppercase text-[#111111]/80 hover:text-[#7D836D] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7D836D] inline-flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3" aria-hidden="true" />
              {STUDIO_INFO.phoneDisplay}
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="bg-[#111111] text-white hover:bg-[#7D836D] px-4 py-2 font-sans-clean text-[10px] tracking-[0.22em] uppercase transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7D836D]"
            >
              ENQUIRE
            </a>
          </div>

          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 text-[#111111] hover:text-[#7D836D] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7D836D]"
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-modal"
          >
            <Menu className="w-6 h-6 stroke-[1.5]" aria-hidden="true" />
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div
          id="mobile-nav-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 z-50 bg-[#F7F5F0] flex flex-col justify-between p-6 sm:p-10 animate-fade-up overflow-y-auto"
        >
          <div className="flex items-center justify-between border-b border-[#111111]/10 pb-4">
            <Logo variant="header" />
            <button
              ref={closeBtnRef}
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#111111] hover:text-[#7D836D] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7D836D]"
              aria-label="Close navigation menu"
            >
              <X className="w-7 h-7 stroke-[1.2]" aria-hidden="true" />
            </button>
          </div>

          <div className="flex flex-col space-y-6 my-auto py-6">
            <span className="font-sans-clean text-[10px] tracking-[0.25em] uppercase text-[#77736B]">
              MENU
            </span>
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className="font-serif-luxury text-3xl sm:text-4xl uppercase tracking-[0.08em] text-[#111111] hover:text-[#7D836D] transition-colors flex items-center justify-between group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7D836D]"
              >
                <span>{link.label}</span>
                <span className="text-xs font-sans-clean text-[#77736B] tracking-widest group-hover:translate-x-1 transition-transform">
                  0{idx + 1} <ArrowRight className="inline w-3 h-3 ml-1" aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>

          <div className="border-t border-[#111111]/10 pt-5 flex flex-col sm:flex-row justify-between gap-3 text-xs font-sans-clean text-[#77736B] tracking-wider">
            <div>
              <p className="uppercase text-[#111111] font-medium">SUMIT STUDIO</p>
              <p>Krishna Nagar, Delhi · India</p>
            </div>
            <div className="text-left sm:text-right">
              <p>Available across India & worldwide</p>
              <a
                href={`tel:${STUDIO_INFO.phone}`}
                className="text-[#7D836D] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7D836D]"
              >
                {STUDIO_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
