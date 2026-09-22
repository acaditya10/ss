import React from 'react';
import { INTRO_IMAGE } from '../data/portfolioData';

export const IntroSection: React.FC = () => {
  return (
    <section
      id="intro"
      className="w-full py-20 sm:py-28 md:py-36 bg-[#F7F5F0] overflow-hidden"
    >
      <div className="w-[92vw] max-w-[1550px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image overlapping muted olive background block */}
          <div className="lg:col-span-6 relative pr-2 sm:pr-6 pb-6">
            {/* Muted Olive Background Block */}
            <div
              className="absolute top-0 left-0 w-3/4 sm:w-2/3 h-3/4 sm:h-4/5 bg-[#7D836D] -translate-x-3 -translate-y-3 sm:-translate-x-6 sm:-translate-y-6 z-0"
              aria-hidden="true"
            />

            {/* Overlapping Wedding Photograph */}
            <div className="relative z-10 shadow-[0_16px_40px_rgba(0,0,0,0.12)] overflow-hidden">
              <img
                src={INTRO_IMAGE.src}
                alt={INTRO_IMAGE.alt}
                className="w-full h-auto aspect-[4/3] object-cover transition-transform duration-700 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Editorial Copy and Statistics */}
          <div className="lg:col-span-6 flex flex-col justify-center lg:pl-6">
            {/* Small Label */}
            <span className="font-sans-clean text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#77736B] font-medium mb-3 sm:mb-4">
              TWENTY FIVE YEARS
            </span>

            {/* Large Editorial Headline */}
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] tracking-[0.04em] uppercase text-[#111111] font-normal mb-6">
              25 YEARS OF
              <br />
              CAPTURING MOMENTS
            </h2>

            {/* Body Copy */}
            <p className="font-sans-clean text-sm sm:text-base leading-[1.75] text-[#77736B] font-light max-w-xl mb-10 sm:mb-12">
              From intimate ceremonies to grand celebrations, Sumit Studio captures weddings
              through photographs and films that preserve the emotion, energy and character of
              every celebration.
            </p>

            {/* Horizontal Statistics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-[#111111]/15">
              {/* Stat 1 */}
              <div className="flex flex-col border-r border-[#111111]/10 last:border-r-0 pr-4">
                <span className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl text-[#111111] font-normal leading-tight">
                  25+
                </span>
                <span className="font-sans-clean text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#77736B] mt-1">
                  YEARS
                </span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col border-r border-[#111111]/10 last:border-r-0 pr-4">
                <span className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl text-[#111111] font-normal leading-tight">
                  PHOTO
                </span>
                <span className="font-sans-clean text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#77736B] mt-1">
                  + FILM
                </span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col border-r border-[#111111]/10 last:border-r-0 pr-4">
                <span className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl text-[#111111] font-normal leading-tight">
                  DELHI
                </span>
                <span className="font-sans-clean text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#77736B] mt-1">
                  NCR
                </span>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col pr-4">
                <span className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl text-[#111111] font-normal leading-tight">
                  COUNTLESS
                </span>
                <span className="font-sans-clean text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#77736B] mt-1">
                  STORIES
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
