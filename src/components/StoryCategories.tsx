import React, { useEffect, useState } from 'react';
import { STORY_CATEGORIES } from '../data/portfolioData';
import { StoryCategory } from '../types';
import { ArrowRight, X } from 'lucide-react';

export const StoryCategories: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<StoryCategory | null>(null);

  useEffect(() => {
    if (!activeCategory) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveCategory(null);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [activeCategory]);

  return (
    <section id="stories" className="w-full py-16 sm:py-24 bg-[#F7F5F0]">
      <div className="w-[92vw] max-w-[1550px] mx-auto">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12">
          <span className="font-sans-clean text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#77736B] font-medium block mb-2">
            WEDDING STORIES
          </span>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-6 flex-1">
              <h2 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.04em] text-[#111111] font-normal whitespace-nowrap">
                EXPLORE BY OCCASION
              </h2>
              <div className="hidden sm:block flex-1 h-[1px] bg-[#111111]/20 ml-2" />
            </div>

            <div className="text-left md:text-right">
              <span className="font-sans-clean text-[9px] sm:text-[11px] tracking-[0.22em] uppercase text-[#77736B] block leading-tight font-light">
                DIFFERENT CELEBRATIONS
              </span>
              <span className="font-sans-clean text-[9px] sm:text-[11px] tracking-[0.22em] uppercase text-[#77736B] block leading-tight font-light">
                SAME EMOTIONS
              </span>
            </div>
          </div>
        </div>

        {/* 6-Column Category Grid on Desktop (3 on tablet, 2 on mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {STORY_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              role="button"
              tabIndex={0}
              onClick={() => setActiveCategory(cat)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveCategory(cat);
                }
              }}
              className="group flex flex-col cursor-pointer select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7D836D]"
            >
              {/* Image thumbnail: edge-to-edge, no rounded corners */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#151515]/5 rounded-none mb-3">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Category Title */}
              <h3 className="font-serif-luxury text-sm sm:text-base tracking-[0.14em] uppercase text-[#111111] group-hover:text-[#7D836D] transition-colors leading-snug">
                {cat.name}
              </h3>

              {/* Tiny Link */}
              <div className="flex items-center gap-1.5 mt-1 text-[#77736B] group-hover:text-[#111111] transition-colors">
                <span className="font-sans-clean text-[9px] tracking-[0.2em] uppercase font-light">
                  VIEW STORY
                </span>
                <ArrowRight className="w-2.5 h-2.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Story Category Details Modal */}
      {activeCategory && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${activeCategory.name} occasion details`}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveCategory(null)}
        >
          <div
            className="bg-[#F7F5F0] max-w-xl w-full p-6 sm:p-10 border border-[#111111]/10 shadow-2xl relative animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveCategory(null)}
              className="absolute top-4 right-4 p-2 text-[#77736B] hover:text-[#111111] focus:outline-none"
              aria-label="Close occasion details"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="font-sans-clean text-[10px] tracking-[0.25em] uppercase text-[#7D836D] font-medium block mb-1">
              {activeCategory.tagline}
            </span>
            <h3 className="font-serif-luxury text-3xl uppercase tracking-[0.08em] text-[#111111] mb-4">
              {activeCategory.name}
            </h3>

            <div className="aspect-[16/9] w-full overflow-hidden mb-5">
              <img
                src={activeCategory.image}
                alt={activeCategory.name}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="font-sans-clean text-sm text-[#77736B] leading-relaxed mb-6 font-light">
              {activeCategory.description}
            </p>

            <div className="flex items-center justify-between border-t border-[#111111]/10 pt-4">
              <span className="font-sans-clean text-xs text-[#111111] tracking-wider">
                {activeCategory.count}+ Celebrations Documented
              </span>
              <button
                type="button"
                onClick={() => setActiveCategory(null)}
                className="text-xs font-sans-clean tracking-[0.2em] uppercase text-[#7D836D] hover:underline"
              >
                CLOSE PREVIEW
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
