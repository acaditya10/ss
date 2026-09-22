import React from 'react';

export const QuoteBanner: React.FC = () => {
  return (
    <section
      id="quote-banner"
      className="w-full bg-[#7D836D] py-14 sm:py-18 md:py-20 text-white select-none relative overflow-hidden"
    >
      <div className="w-[90vw] max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
        {/* Large White Quotation Mark */}
        <span
          className="font-serif-luxury text-5xl sm:text-6xl text-white/90 leading-none mb-2 font-normal"
          aria-hidden="true"
        >
          “
        </span>

        {/* Quote Statement */}
        <blockquote className="font-serif-luxury text-xl sm:text-2xl md:text-3xl lg:text-[2rem] leading-relaxed tracking-[0.03em] font-light text-white px-4">
          "They don't just click photos — they create lifetime memories."
        </blockquote>

        {/* Small Attribution */}
        <div className="mt-4 sm:mt-5 flex items-center gap-3">
          <div className="w-5 h-[1px] bg-white/50" />
          <span className="font-sans-clean text-[9px] sm:text-[10px] tracking-[0.28em] uppercase text-white/80 font-light">
            A HAPPY COUPLE
          </span>
          <div className="w-5 h-[1px] bg-white/50" />
        </div>
      </div>
    </section>
  );
};
