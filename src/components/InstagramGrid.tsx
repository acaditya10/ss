import React, { useState } from 'react';
import { INSTAGRAM_PHOTOS } from '../data/portfolioData';
import { InstagramItem } from '../types';
import { Instagram, Heart } from 'lucide-react';

export const InstagramGrid: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="instagram" className="w-full py-16 sm:py-20 bg-[#F7F5F0]">
      <div className="w-[92vw] max-w-[1550px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 sm:mb-8">
          <div className="flex items-center gap-6 flex-1">
            <h2 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl uppercase tracking-[0.04em] text-[#111111] font-normal whitespace-nowrap">
              FOLLOW THE STORIES
            </h2>
            <div className="hidden sm:block flex-1 h-[1px] bg-[#111111]/20 ml-2" />
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans-clean text-xs tracking-[0.2em] uppercase text-[#111111] hover:text-[#7D836D] transition-colors flex items-center gap-1.5"
          >
            <span>@SUMITSTUDIO</span>
            <Instagram className="w-3.5 h-3.5 stroke-[1.5]" />
          </a>
        </div>

        {/* 7-Photo Horizontal Row Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-1 sm:gap-1.5">
          {INSTAGRAM_PHOTOS.map((photo: InstagramItem) => (
            <a
              key={photo.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredId(photo.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative aspect-square overflow-hidden bg-[#151515]/5 select-none rounded-none block cursor-pointer"
            >
              <img
                src={photo.image}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                loading="lazy"
              />

              {/* Subtle hover overlay */}
              <div
                className={`absolute inset-0 bg-black/40 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-2 ${
                  hoveredId === photo.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="flex items-center gap-1 text-xs font-sans-clean">
                  <Heart className="w-3.5 h-3.5 fill-white text-white" />
                  <span className="tracking-widest text-[10px]">{photo.likes}</span>
                </div>
                <span className="text-[8px] font-sans-clean tracking-widest uppercase text-white/80 mt-1">
                  INSTAGRAM
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
