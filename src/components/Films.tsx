import React, { useState } from 'react';
import { CINEMATIC_FILMS, STUDIO_INFO } from '../data/portfolioData';
import { FilmItem } from '../types';
import { FilmModal } from './FilmModal';
import { Play, ArrowRight } from 'lucide-react';

export const Films: React.FC = () => {
  const [activeFilm, setActiveFilm] = useState<FilmItem | null>(null);

  return (
    <section id="films" className="w-full py-16 sm:py-24 bg-[#F7F5F0]">
      <div className="w-[92vw] max-w-[1550px] mx-auto">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12">
          <span className="font-sans-clean text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#77736B] font-medium block mb-2">
            CINEMATIC FILMS
          </span>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-6 flex-1">
              <h2 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.04em] text-[#111111] font-normal whitespace-nowrap">
                MORE THAN PHOTOS
              </h2>
              <div className="hidden sm:block flex-1 h-[1px] bg-[#111111]/20 ml-2" />
            </div>

            <div className="text-left md:text-right">
              <span className="font-sans-clean text-[9px] sm:text-[11px] tracking-[0.22em] uppercase text-[#77736B] block leading-tight font-light">
                STORIES THAT MOVE
              </span>
              <span className="font-sans-clean text-[9px] sm:text-[11px] tracking-[0.22em] uppercase text-[#77736B] block leading-tight font-light">
                {STUDIO_INFO.youtubeVideos} FILMS ON YOUTUBE
              </span>
            </div>
          </div>
        </div>

        {/* Cinematic Video Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {CINEMATIC_FILMS.map((film) => (
            <button
              key={film.id}
              type="button"
              onClick={() => setActiveFilm(film)}
              className="group relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-[#151515] cursor-pointer select-none rounded-none shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7D836D] text-left p-0 border-0"
              aria-label={`Play ${film.title} film`}
            >
              <img
                src={film.thumbnail}
                alt={film.title}
                width={1280}
                height={720}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-95 transition-all duration-700 ease-out group-hover:scale-[1.04]"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/25 transition-opacity" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-white/15 backdrop-blur-xs border border-white/40 flex items-center justify-center text-white transform group-hover:scale-110 group-hover:bg-white/25 transition-all duration-300">
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white ml-0.5" aria-hidden="true" />
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-center">
                <h3 className="font-serif-luxury text-sm sm:text-base md:text-lg tracking-[0.16em] uppercase text-white font-normal drop-shadow">
                  {film.title}
                </h3>
                <span className="font-sans-clean text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-white/70 font-light mt-1 block">
                  {film.location} · {film.duration}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Action Button Below */}
        <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={STUDIO_INFO.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-3.5 bg-[#7D836D] hover:bg-[#686E58] text-white text-xs font-sans-clean tracking-[0.22em] uppercase rounded-none transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7D836D] shadow-sm"
          >
            <span>WATCH ALL FILMS ON YOUTUBE</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Film Cinema Modal Player */}
      <FilmModal
        film={activeFilm}
        isOpen={activeFilm !== null}
        onClose={() => setActiveFilm(null)}
      />
    </section>
  );
};
