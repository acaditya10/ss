import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';
import { LightboxModal } from './LightboxModal';
import { Eye, ArrowRight } from 'lucide-react';

export const PortfolioGrid: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedItems = showAll ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.slice(0, 12);

  const handleOpen = (index: number) => {
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + displayedItems.length) % displayedItems.length);
  };

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % displayedItems.length);
  };

  return (
    <section id="portfolio" className="w-full py-16 sm:py-24 bg-[#F7F5F0]">
      <div className="w-[92vw] max-w-[1550px] mx-auto">
        {/* Section Header with Horizontal Rule */}
        <div className="mb-8 sm:mb-12">
          <span className="font-sans-clean text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#77736B] font-medium block mb-2">
            OUR WORK
          </span>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-6 flex-1">
              <h2 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.04em] text-[#111111] font-normal whitespace-nowrap">
                A GLIMPSE INTO OUR WORLD
              </h2>
              <div className="hidden sm:block flex-1 h-[1px] bg-[#111111]/20 ml-2" />
            </div>

            <span className="font-sans-clean text-[10px] sm:text-xs tracking-[0.22em] uppercase text-[#77736B] md:text-right font-light">
              REAL PEOPLE. REAL STORIES.
            </span>
          </div>
        </div>

        {/* 4 Columns x 3 Rows Dense Editorial Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-2.5">
          {displayedItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpen(index)}
              className="group relative aspect-[4/3] sm:aspect-[5/4] overflow-hidden bg-[#151515]/5 cursor-pointer select-none rounded-none"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                loading="lazy"
              />

              {/* Translucent Dark Overlay */}
              <div className="absolute inset-0 bg-[#111111]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <Eye className="w-4 h-4 stroke-[1.5]" />
                </div>
                <span className="font-sans-clean text-[9px] tracking-[0.28em] text-white uppercase font-light">
                  VIEW
                </span>
                <span className="font-serif-luxury text-xs text-white/90 italic mt-1 line-clamp-1">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button Below Grid */}
        <div className="mt-10 sm:mt-14 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#7D836D] hover:bg-[#686E58] text-white text-xs font-sans-clean tracking-[0.22em] uppercase rounded-none transition-all duration-300 focus:outline-none shadow-sm"
          >
            <span>{showAll ? 'SHOW LESS' : 'VIEW FULL PORTFOLIO'}</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedIndex !== null ? displayedItems[selectedIndex] : null}
        items={displayedItems}
        currentIndex={selectedIndex ?? 0}
        isOpen={selectedIndex !== null}
        onClose={handleClose}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};
