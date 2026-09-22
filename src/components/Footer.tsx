import React from 'react';
import { Logo } from './Logo';
import { STUDIO_INFO } from '../data/portfolioData';
import { Instagram, Youtube, Facebook } from 'lucide-react';

interface FooterProps {
  onNavigate?: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="w-full pt-20 sm:pt-28 pb-10 bg-[#F7F5F0] border-t border-[#111111]/10">
      <div className="w-[92vw] max-w-[1550px] mx-auto">
        {/* Main 4-Column Minimalist Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 pb-14 sm:pb-18">
          {/* Left Column: Brand & Motto */}
          <div className="flex flex-col">
            <Logo variant="footer" />
          </div>

          {/* Center Column 1: Occasions & Services */}
          <div className="flex flex-col space-y-3">
            <span className="font-sans-clean text-[9px] tracking-[0.25em] uppercase text-[#77736B] font-medium mb-1">
              CELEBRATIONS
            </span>
            <a
              href="#stories"
              onClick={(e) => handleLinkClick(e, 'stories')}
              className="font-sans-clean text-xs tracking-[0.16em] uppercase text-[#111111] hover:text-[#7D836D] transition-colors"
            >
              WEDDINGS
            </a>
            <a
              href="#stories"
              onClick={(e) => handleLinkClick(e, 'stories')}
              className="font-sans-clean text-xs tracking-[0.16em] uppercase text-[#111111] hover:text-[#7D836D] transition-colors"
            >
              PRE-WEDDINGS
            </a>
            <a
              href="#stories"
              onClick={(e) => handleLinkClick(e, 'stories')}
              className="font-sans-clean text-xs tracking-[0.16em] uppercase text-[#111111] hover:text-[#7D836D] transition-colors"
            >
              EVENTS
            </a>
            <a
              href="#films"
              onClick={(e) => handleLinkClick(e, 'films')}
              className="font-sans-clean text-xs tracking-[0.16em] uppercase text-[#111111] hover:text-[#7D836D] transition-colors"
            >
              FILMS
            </a>
          </div>

          {/* Center Column 2: Studio Navigation */}
          <div className="flex flex-col space-y-3">
            <span className="font-sans-clean text-[9px] tracking-[0.25em] uppercase text-[#77736B] font-medium mb-1">
              STUDIO
            </span>
            <a
              href="#intro"
              onClick={(e) => handleLinkClick(e, 'intro')}
              className="font-sans-clean text-xs tracking-[0.16em] uppercase text-[#111111] hover:text-[#7D836D] transition-colors"
            >
              ABOUT
            </a>
            <a
              href="#portfolio"
              onClick={(e) => handleLinkClick(e, 'portfolio')}
              className="font-sans-clean text-xs tracking-[0.16em] uppercase text-[#111111] hover:text-[#7D836D] transition-colors"
            >
              PORTFOLIO
            </a>
            <a
              href="#stories"
              onClick={(e) => handleLinkClick(e, 'stories')}
              className="font-sans-clean text-xs tracking-[0.16em] uppercase text-[#111111] hover:text-[#7D836D] transition-colors"
            >
              BLOG
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="font-sans-clean text-xs tracking-[0.16em] uppercase text-[#111111] hover:text-[#7D836D] transition-colors"
            >
              CONTACT
            </a>
          </div>

          {/* Right Column: Location & Socials */}
          <div className="flex flex-col space-y-4">
            <div>
              <p className="font-serif-luxury text-base uppercase tracking-wider text-[#111111]">
                Delhi NCR · India
              </p>
              <p className="font-sans-clean text-xs text-[#77736B] font-light mt-1">
                Preserving luxury celebrations across India and worldwide.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-1">
              <a
                href={STUDIO_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#111111]/20 flex items-center justify-center text-[#111111] hover:text-white hover:bg-[#7D836D] hover:border-[#7D836D] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5 stroke-[1.5]" />
              </a>
              <a
                href={STUDIO_INFO.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#111111]/20 flex items-center justify-center text-[#111111] hover:text-white hover:bg-[#7D836D] hover:border-[#7D836D] transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-3.5 h-3.5 stroke-[1.5]" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#111111]/20 flex items-center justify-center text-[#111111] hover:text-white hover:bg-[#7D836D] hover:border-[#7D836D] transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5 stroke-[1.5]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits Bar */}
        <div className="border-t border-[#111111]/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-sans-clean text-[#77736B] gap-3">
          <div>
            Designed by{' '}
            <a
              href="https://getvortexlabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#111111] hover:text-[#7D836D] underline underline-offset-2 transition-colors font-medium"
            >
              Vortex Labs
            </a>
            {' · '}
            <a
              href="https://getvortexlabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#111111] transition-colors"
            >
              getvortexlabs.com
            </a>
          </div>

          <div className="tracking-wider">
            © 2024 Sumit Studio. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
