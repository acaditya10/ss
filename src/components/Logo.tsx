import React from 'react';

export interface LogoProps {
  variant?: 'header' | 'hero' | 'footer' | 'standalone' | 'mark';
  className?: string;
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * Official Sumit Studio logo assets.
 * Black wordmark for light backgrounds, white wordmark for dark backgrounds.
 */
export const LogoSvg: React.FC<{
  color?: string;
  className?: string;
}> = ({ color = 'currentColor', className = 'w-auto h-10' }) => {
  const isLightInk = color === '#FFFFFF' || color === '#fff' || color === 'white' || color === 'currentColor';
  const src = isLightInk ? '/ss-white.png' : '/ss-black.png';
  return (
    <img
      src={src}
      alt="Sumit Studio"
      className={`select-none object-contain ${className}`}
      draggable={false}
      aria-label="Sumit Studio Logo"
      role="img"
    />
  );
};

export const Logo: React.FC<LogoProps> = ({
  variant = 'header',
  className = '',
  theme = 'light',
}) => {
  const isDark = theme === 'dark';
  const logoSrc = isDark ? '/ss-white.png' : '/ss-black.png';
  const subtextColor = isDark ? 'text-white/70' : 'text-[#77736B]';

  // Standalone: brand lockup with tagline
  if (variant === 'standalone') {
    return (
      <div className={`inline-flex flex-col items-center select-none ${className}`}>
        <img
          src={logoSrc}
          alt="Sumit Studio"
          className="w-48 sm:w-60 h-auto object-contain"
          draggable={false}
        />
        <span
          className={`font-sans-clean text-[9px] tracking-[0.3em] uppercase ${subtextColor} mt-1`}
        >
          PHOTOGRAPHY & FILMS
        </span>
      </div>
    );
  }

  // Hero: grand focal display on dark video background
  if (variant === 'hero') {
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        {/* Established label with subtle horizontal wings */}
        <div className="flex items-center gap-3 mb-2 sm:mb-4">
          <div className="w-8 sm:w-14 h-[1px] bg-white/70" />
          <span className="font-sans-clean text-[10px] sm:text-xs tracking-[0.3em] uppercase text-white/90 font-light">
            ESTD 1999
          </span>
          <div className="w-8 sm:w-14 h-[1px] bg-white/70" />
        </div>

        {/* Focal Brand Logo Artwork — white mark for dark backdrop */}
        <div className="relative my-1 sm:my-2 w-full max-w-[340px] sm:max-w-[500px] md:max-w-[620px] lg:max-w-[720px] drop-shadow-xl">
          <img
            src="/ss-white.png"
            alt="Sumit Studio"
            className="w-full h-auto object-contain"
            draggable={false}
          />
        </div>

        {/* Subtitle */}
        <p className="font-sans-clean text-[10px] sm:text-xs md:text-sm tracking-[0.26em] sm:tracking-[0.36em] text-white/90 uppercase font-light max-w-xl mx-auto px-4 mt-2 sm:mt-3">
          WEDDING PHOTOGRAPHY & CINEMATOGRAPHY
        </p>
      </div>
    );
  }

  // Footer: brand column on light ivory background
  if (variant === 'footer') {
    return (
      <div className={`flex flex-col items-start select-none ${className}`}>
        <img
          src="/ss-black.png"
          alt="Sumit Studio"
          className="w-44 sm:w-52 h-auto object-contain -ml-1"
          draggable={false}
        />
        <p className="font-sans-clean text-[9px] sm:text-[10px] tracking-[0.28em] text-[#77736B] uppercase font-light mt-1 pl-1">
          PHOTOGRAPHY & FILMS
        </p>
        <p className="font-serif-luxury italic text-sm text-[#77736B] mt-2.5 pl-1">
          Real People. Beautiful Stories.
        </p>
      </div>
    );
  }

  // Header: horizontal navbar lockup on light ivory background
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Black wordmark for light header */}
      <div className="transition-transform duration-300 group-hover:scale-105">
        <img
          src={isDark ? '/ss-white.png' : '/ss-black.png'}
          alt="Sumit Studio"
          className="w-32 sm:w-40 md:w-44 h-auto object-contain"
          draggable={false}
        />
      </div>

      {/* Subtle vertical hairline divider */}
      <div className={`hidden sm:block w-[1px] h-7 ${isDark ? 'bg-white/25' : 'bg-[#111111]/20'}`} />

      {/* Tagline */}
      <div className="hidden sm:flex flex-col justify-center">
        <span
          className={`font-sans-clean text-[8px] tracking-[0.25em] ${subtextColor} uppercase font-medium leading-none`}
        >
          PHOTOGRAPHY
        </span>
        <span
          className={`font-sans-clean text-[8px] tracking-[0.25em] ${subtextColor} uppercase font-light leading-none mt-1`}
        >
          & FILMS
        </span>
      </div>
    </div>
  );
};
