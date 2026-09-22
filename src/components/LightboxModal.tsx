import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { PortfolioItem } from '../types';

interface LightboxModalProps {
  item: PortfolioItem | null;
  items: PortfolioItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !item) return null;

  return (
    <div
      id="lightbox-modal"
      className="fixed inset-0 z-50 bg-[#111111]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-fade-up select-none"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div
        className="w-full flex items-center justify-between border-b border-white/10 pb-4 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="font-serif-luxury tracking-[0.2em] text-sm uppercase text-white/90">
            SUMIT STUDIO
          </span>
          <span className="text-white/30 text-xs">|</span>
          <span className="font-sans-clean text-xs tracking-[0.2em] uppercase text-white/60">
            {item.category}
          </span>
        </div>

        <div className="flex items-center gap-6">
          <span className="font-sans-clean text-xs tracking-widest text-white/60">
            {String(currentIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-white/80 hover:text-white transition-colors cursor-pointer focus:outline-none"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 stroke-[1.5]" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div
        className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onPrev}
          className="absolute left-2 sm:left-6 z-20 p-3 bg-black/40 hover:bg-black/80 text-white rounded-none border border-white/20 transition-colors focus:outline-none"
          aria-label="Previous photograph"
        >
          <ChevronLeft className="w-6 h-6 stroke-[1.5]" />
        </button>

        <img
          src={item.image}
          alt={item.alt}
          className="max-h-[75vh] max-w-[90vw] object-contain shadow-2xl transition-opacity duration-300"
        />

        <button
          type="button"
          onClick={onNext}
          className="absolute right-2 sm:right-6 z-20 p-3 bg-black/40 hover:bg-black/80 text-white rounded-none border border-white/20 transition-colors focus:outline-none"
          aria-label="Next photograph"
        >
          <ChevronRight className="w-6 h-6 stroke-[1.5]" />
        </button>
      </div>

      {/* Bottom Metadata Bar */}
      <div
        className="w-full flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-4 text-white text-center sm:text-left gap-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <h3 className="font-serif-luxury text-lg tracking-[0.06em] text-white">
            {item.title}
          </h3>
          <p className="font-sans-clean text-xs tracking-widest text-white/60 mt-0.5">
            {item.location}
          </p>
        </div>
        <div className="font-sans-clean text-[10px] tracking-[0.25em] uppercase text-[#7D836D]">
          DELHI NCR · LUXURY WEDDINGS
        </div>
      </div>
    </div>
  );
};
