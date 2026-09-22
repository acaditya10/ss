import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { FilmItem } from '../types';

interface FilmModalProps {
  film: FilmItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const FilmModal: React.FC<FilmModalProps> = ({ film, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = prev;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen || !film) return null;

  return (
    <div
      id="film-cinema-modal"
      role="dialog"
      aria-modal="true"
      aria-label={`${film.title} video player`}
      className="fixed inset-0 z-50 bg-[#111111]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-fade-up select-none"
      onClick={onClose}
    >
      {/* Top Controls */}
      <div
        className="w-full flex items-center justify-between border-b border-white/10 pb-4 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="font-serif-luxury tracking-[0.2em] text-sm uppercase text-white/90">
            SUMIT STUDIO CINEMA
          </span>
          <span className="text-white/30 text-xs">|</span>
          <span className="font-sans-clean text-xs tracking-[0.2em] uppercase text-white/60">
            {film.couple}
          </span>
        </div>

        <div className="flex items-center gap-4">
          {film.youtubeId && (
            <a
              href={`https://www.youtube.com/watch?v=${film.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-white/80 hover:text-white transition-colors cursor-pointer focus:outline-none flex items-center gap-1.5 text-xs font-sans-clean"
              title="Open video on YouTube"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="hidden sm:inline tracking-wider uppercase text-[10px]">
                Watch on YouTube
              </span>
            </a>
          )}

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-white/80 hover:text-white transition-colors cursor-pointer focus:outline-none hover:rotate-90 duration-200"
            aria-label="Close video player"
          >
            <X className="w-6 h-6 stroke-[1.5]" />
          </button>
        </div>
      </div>

      {/* Main Video Cinema Container */}
      <div
        className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full max-w-5xl aspect-video bg-black shadow-2xl border border-white/10 overflow-hidden">
          {film.youtubeId ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${film.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
              title={film.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0"
            />
          ) : (
            <video
              src={film.videoUrl}
              poster={film.thumbnail}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div
        className="w-full flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-4 text-white text-center sm:text-left gap-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <h3 className="font-serif-luxury text-xl tracking-[0.1em] text-white uppercase">
            {film.title}
          </h3>
          <p className="font-sans-clean text-xs tracking-widest text-white/60 mt-0.5">
            {film.location} · {film.duration}
          </p>
        </div>
        <p className="font-sans-clean text-xs text-white/70 max-w-md text-right hidden md:block font-light">
          {film.description}
        </p>
      </div>
    </div>
  );
};
