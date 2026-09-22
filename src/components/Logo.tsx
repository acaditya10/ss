import React from 'react';

export interface LogoProps {
  variant?: 'header' | 'hero' | 'footer' | 'standalone' | 'mark';
  className?: string;
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * Official Sumit Studio Logo Vector Component
 * Faithfully reproduces the brand identity:
 * - High-contrast Roman Didone serif for "SUMIT" with wide luxury tracking
 * - Overlaid signature calligraphy script for "Studio"
 * - Dynamic brush stroke underline flourish
 */
export const LogoSvg: React.FC<{
  color?: string;
  className?: string;
  showFlourish?: boolean;
}> = ({ color = 'currentColor', className = 'w-auto h-10', showFlourish = true }) => {
  return (
    <svg
      viewBox="0 0 520 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none overflow-visible ${className}`}
      aria-label="Sumit Studio Logo"
      role="img"
    >
      {/* Main Uppercase Serif Wordmark: SUMIT */}
      <text
        x="245"
        y="96"
        textAnchor="middle"
        fill={color}
        className="font-serif-luxury"
        style={{
          fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
          fontSize: '92px',
          fontWeight: 500,
          letterSpacing: '0.26em',
          textTransform: 'uppercase',
        }}
      >
        SUMIT
      </text>

      {/* Overlaid Signature Script: Studio */}
      <g transform="translate(170, 138) rotate(-3.5)">
        <text
          x="0"
          y="0"
          fill={color}
          className="font-script-signature"
          style={{
            fontFamily: "'Alex Brush', 'Great Vibes', 'Pinyon Script', cursive",
            fontSize: '88px',
            fontStyle: 'italic',
          }}
        >
          Studio
        </text>
      </g>

      {/* Expressive Brush Flourish Underline Stroke */}
      {showFlourish && (
        <g>
          {/* Main tapered brush stroke */}
          <path
            d="M 160 148 Q 280 162 450 141 Q 310 156 160 148 Z"
            fill={color}
            opacity="0.8"
          />
          {/* Subtle secondary stroke for dry-brush effect */}
          <path
            d="M 195 150 Q 300 161 425 143"
            stroke={color}
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.9"
          />
          <path
            d="M 235 152 Q 330 160 395 146"
            stroke={color}
            strokeWidth="0.6"
            strokeLinecap="round"
            opacity="0.5"
          />
        </g>
      )}
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  variant = 'header',
  className = '',
  theme = 'light',
}) => {
  const isDark = theme === 'dark';
  const color = isDark ? '#FFFFFF' : '#111111';
  const subtextColor = isDark ? 'text-white/70' : 'text-[#77736B]';

  // Standalone: Pure vector logo
  if (variant === 'standalone') {
    return (
      <div className={`inline-flex flex-col items-center select-none ${className}`}>
        <LogoSvg color={color} className="w-48 sm:w-60 h-auto" />
        <span
          className={`font-sans-clean text-[9px] tracking-[0.3em] uppercase ${subtextColor} mt-1`}
        >
          PHOTOGRAPHY & FILMS
        </span>
      </div>
    );
  }

  // Hero: Grand focal display
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

        {/* Focal Brand Logo Artwork */}
        <div className="relative my-1 sm:my-2 w-full max-w-[340px] sm:max-w-[500px] md:max-w-[620px] lg:max-w-[720px] drop-shadow-xl">
          <LogoSvg color="#FFFFFF" className="w-full h-auto" />
        </div>

        {/* Subtitle */}
        <p className="font-sans-clean text-[10px] sm:text-xs md:text-sm tracking-[0.26em] sm:tracking-[0.36em] text-white/90 uppercase font-light max-w-xl mx-auto px-4 mt-2 sm:mt-3">
          WEDDING PHOTOGRAPHY & CINEMATOGRAPHY
        </p>
      </div>
    );
  }

  // Footer: Brand column
  if (variant === 'footer') {
    return (
      <div className={`flex flex-col items-start select-none ${className}`}>
        <LogoSvg color={color} className="w-44 sm:w-52 h-auto -ml-1" />
        <p className="font-sans-clean text-[9px] sm:text-[10px] tracking-[0.28em] text-[#77736B] uppercase font-light mt-1 pl-1">
          PHOTOGRAPHY & FILMS
        </p>
        <p className="font-serif-luxury italic text-sm text-[#77736B] mt-2.5 pl-1">
          Real People. Beautiful Stories.
        </p>
      </div>
    );
  }

  // Header: Horizontal navbar lockup
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* The official logo rendered at navbar height */}
      <div className="transition-transform duration-300 group-hover:scale-105">
        <LogoSvg color={color} className="w-32 sm:w-40 md:w-44 h-auto" />
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
