import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

interface HeaderProps {
  onNavigate?: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          {/* Left: Brand Monogram & Name */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, 'hero')}
            className="flex items-center group cursor-pointer focus:outline-none"
            aria-label="Sumit Studio Homepage"
          >
            <Logo variant="header" />
          </a>

          {/* Center: Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-6 lg:gap-8"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className="font-sans-clean text-[11px] lg:text-xs tracking-[0.18em] uppercase text-[#111111] hover:text-[#7D836D] transition-colors duration-200 relative py-1 focus:outline-none focus:text-[#7D836D]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Direct Contact & Enquire Button */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <a
              href="tel:+919008950390"
              className="font-sans-clean text-[11px] tracking-[0.16em] uppercase text-[#111111]/80 hover:text-[#7D836D] transition-colors"
            >
              +91 90089 50390
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="bg-[#111111] text-white hover:bg-[#7D836D] px-4 py-2 font-sans-clean text-[10px] tracking-[0.22em] uppercase transition-colors"
            >
              ENQUIRE
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 text-[#111111] hover:text-[#7D836D] transition-colors focus:outline-none"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-6 h-6 stroke-[1.5]" />
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Editorial Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-modal"
          className="fixed inset-0 z-50 bg-[#F7F5F0] flex flex-col justify-between p-6 sm:p-10 animate-fade-up"
        >
          {/* Top Bar inside mobile menu */}
          <div className="flex items-center justify-between border-b border-[#111111]/10 pb-4">
            <Logo variant="header" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#111111] hover:text-[#7D836D] transition-colors focus:outline-none"
              aria-label="Close Navigation Menu"
            >
              <X className="w-7 h-7 stroke-[1.2]" />
            </button>
          </div>

          {/* Centered Editorial Navigation Links */}
          <div className="flex flex-col space-y-6 my-auto py-6">
            <span className="font-sans-clean text-[10px] tracking-[0.25em] uppercase text-[#77736B]">
              MENU
            </span>
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className="font-serif-luxury text-3xl sm:text-4xl uppercase tracking-[0.08em] text-[#111111] hover:text-[#7D836D] transition-colors flex items-center justify-between group"
              >
                <span>{link.label}</span>
                <span className="text-xs font-sans-clean text-[#77736B] tracking-widest group-hover:translate-x-1 transition-transform">
                  0{idx + 1} <ArrowRight className="inline w-3 h-3 ml-1" />
                </span>
              </a>
            ))}
          </div>

          {/* Mobile Footer Inside Drawer */}
          <div className="border-t border-[#111111]/10 pt-5 flex flex-col sm:flex-row justify-between gap-3 text-xs font-sans-clean text-[#77736B] tracking-wider">
            <div>
              <p className="uppercase text-[#111111] font-medium">SUMIT STUDIO</p>
              <p>Delhi NCR · India</p>
            </div>
            <div className="text-left sm:text-right">
              <p>Available Across India & Worldwide</p>
              <p className="text-[#7D836D]">info@sumitstudio.com</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
