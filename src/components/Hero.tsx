import React, { useEffect, useRef, useState } from 'react';
import { HERO_IMAGE, STUDIO_INFO } from '../data/portfolioData';
import { Logo } from './Logo';
import { Play, ArrowUpRight, Film } from 'lucide-react';

interface HeroProps {
  onExploreClick?: () => void;
  onWatchFilm?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onWatchFilm }) => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    if (typeof IntersectionObserver === 'undefined') {
      setShouldLoadVideo(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoadVideo) return;
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    void video.play().catch(() => {});
  }, [shouldLoadVideo]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full pt-20 sm:pt-24 pb-8 sm:pb-14 bg-[#F7F5F0] overflow-hidden"
    >
      <div className="w-[94vw] max-w-[1550px] mx-auto relative">
        <div
          className="relative w-full h-[78vh] min-h-[600px] max-h-[900px] overflow-hidden shadow-[0_14px_50px_rgba(0,0,0,0.12)] hero-editorial-mask bg-black"
          style={{
            clipPath: 'polygon(0 3.8%, 100% 0, 100% 96.2%, 0 100%)',
          }}
        >
          <img
            src={HERO_IMAGE.src}
            alt={HERO_IMAGE.alt}
            width={1280}
            height={720}
            className={`w-full h-full object-cover object-center absolute inset-0 transition-opacity duration-1000 ${
              videoPlaying ? 'opacity-30' : 'opacity-100'
            }`}
            loading="eager"
            fetchPriority="high"
          />

          {shouldLoadVideo && (
            <video
              ref={videoRef}
              src={STUDIO_INFO.heroVideoSrc}
              poster={HERO_IMAGE.src}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
              tabIndex={-1}
              onPlaying={() => setVideoPlaying(true)}
              onWaiting={() => setVideoPlaying(false)}
              onError={() => setVideoPlaying(false)}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/85 via-[#111111]/35 to-[#111111]/50 pointer-events-none" />
          <div className="absolute inset-0 bg-[#7D836D]/10 mix-blend-color pointer-events-none" />

          <div className="absolute top-6 sm:top-8 left-6 sm:left-10 z-20 flex flex-col items-start gap-1 select-none">
            <div className="inline-flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 border border-white/15">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" aria-hidden="true" />
              <span className="font-sans-clean text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-white/90 font-medium">
                FEATURED FILM
              </span>
            </div>
            <p className="font-serif-luxury italic text-xs sm:text-sm text-white/80 drop-shadow-sm mt-0.5">
              {STUDIO_INFO.heroCouple} · {STUDIO_INFO.heroLocation}
            </p>
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 select-none pt-8 sm:pt-12">
            <h1 className="sr-only">
              Sumit Studio — Wedding Photography & Cinematography in Delhi NCR
            </h1>
            <Logo variant="hero" />

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
              <button
                type="button"
                onClick={onWatchFilm}
                className="group inline-flex items-center gap-2.5 bg-white text-[#111111] hover:bg-[#F7F5F0] px-5 sm:px-6 py-2.5 sm:py-3 font-sans-clean text-[10px] sm:text-xs tracking-[0.22em] uppercase font-medium shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <div className="w-5 h-5 rounded-full bg-[#111111] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-2.5 h-2.5 fill-white ml-0.5" aria-hidden="true" />
                </div>
                <span>WATCH FILM WITH SOUND</span>
              </button>

              <a
                href={STUDIO_INFO.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black/40 hover:bg-black/60 text-white/90 hover:text-white backdrop-blur-md px-4 sm:px-5 py-2.5 sm:py-3 border border-white/20 font-sans-clean text-[10px] sm:text-xs tracking-[0.2em] uppercase transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Film className="w-3.5 h-3.5" aria-hidden="true" />
                <span>YOUTUBE CHANNEL</span>
                <ArrowUpRight className="w-3 h-3 text-white/60" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center select-none">
            <button
              type="button"
              onClick={onExploreClick}
              className="group flex flex-col items-center text-white/70 hover:text-white transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              aria-label="Scroll to content"
            >
              <span className="font-sans-clean text-[8px] sm:text-[9px] tracking-[0.3em] uppercase font-light mb-2 group-hover:tracking-[0.4em] transition-all">
                EXPLORE WORK
              </span>
              <div className="w-[1px] h-8 sm:h-10 bg-white/40 overflow-hidden relative">
                <div className="w-full h-1/2 bg-white absolute top-0 animate-bounce" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
