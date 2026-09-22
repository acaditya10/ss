import React, { useState } from 'react';
import { TESTIMONIALS, TESTIMONIAL_COUPLE_IMAGE } from '../data/portfolioData';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = TESTIMONIALS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="w-full py-20 sm:py-28 md:py-32 bg-[#F7F5F0]">
      <div className="w-[92vw] max-w-[1550px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Wedding Photograph */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] sm:aspect-[14/11] overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.08)] bg-[#151515]/5">
              <img
                src={TESTIMONIAL_COUPLE_IMAGE.src}
                alt={TESTIMONIAL_COUPLE_IMAGE.alt}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Editorial Testimonial Card */}
          <div className="lg:col-span-6 flex flex-col justify-center lg:pl-6">
            <span className="font-sans-clean text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#77736B] font-medium mb-3">
              KIND WORDS
            </span>

            <h2 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.04em] text-[#111111] font-normal mb-8 sm:mb-10">
              WHAT OUR CLIENTS SAY
            </h2>

            {/* Minimalist Testimonial Card */}
            <div className="relative bg-white/70 border border-[#111111]/8 p-6 sm:p-10 shadow-[0_6px_25px_rgba(0,0,0,0.03)]">
              {/* Floating quote watermark icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#7D836D]/20 stroke-[1.2]" />

              {/* Client Profile Header */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-[#7D836D] text-white flex items-center justify-center font-serif-luxury text-xl font-normal select-none">
                  {current.initials}
                </div>
                <div>
                  <h3 className="font-serif-luxury text-lg tracking-[0.05em] text-[#111111] font-medium">
                    {current.names}
                  </h3>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mt-1 text-[#C49A45]">
                    {Array.from({ length: current.stars }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C49A45] text-[#C49A45]" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Review Quote Body */}
              <blockquote className="font-sans-clean text-sm sm:text-base leading-relaxed text-[#55524B] font-light italic mb-6">
                "{current.quote}"
              </blockquote>

              <div className="text-[11px] font-sans-clean tracking-wider text-[#77736B] uppercase font-light">
                {current.weddingLocation} · {current.year}
              </div>
            </div>

            {/* Carousel Navigation Arrows */}
            <div className="flex items-center justify-end gap-3 mt-5">
              <button
                type="button"
                onClick={handlePrev}
                className="w-9 h-9 border border-[#111111]/20 flex items-center justify-center text-[#111111] hover:bg-[#7D836D] hover:text-white hover:border-[#7D836D] transition-colors focus:outline-none"
                aria-label="Previous client testimonial"
              >
                <ChevronLeft className="w-4 h-4 stroke-[1.5]" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-9 h-9 border border-[#111111]/20 flex items-center justify-center text-[#111111] hover:bg-[#7D836D] hover:text-white hover:border-[#7D836D] transition-colors focus:outline-none"
                aria-label="Next client testimonial"
              >
                <ChevronRight className="w-4 h-4 stroke-[1.5]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
