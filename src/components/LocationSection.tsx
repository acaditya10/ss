import React from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { MapPin, Phone, Mail, Clock, ExternalLink, Star, Compass } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="w-full py-16 sm:py-24 bg-[#EFECE6] border-y border-[#111111]/10">
      <div className="w-[92vw] max-w-[1550px] mx-auto">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center gap-2 mb-2">
            <Compass className="w-3.5 h-3.5 text-[#7D836D]" />
            <span className="font-sans-clean text-[10px] sm:text-xs tracking-[0.28em] uppercase text-[#77736B] font-medium">
              FIND US
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex items-baseline gap-4 sm:gap-6 flex-1">
              <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.04em] text-[#111111] font-normal">
                STUDIO & LOCATION
              </h2>
              <div className="hidden lg:block flex-1 h-[1px] bg-[#111111]/20 ml-4 mb-2" />
            </div>

            <p className="font-sans-clean text-xs sm:text-sm text-[#77736B] max-w-md font-light">
              Located in Krishna Nagar, East Delhi. Available for destination weddings and pre-wedding shoots across India and worldwide.
            </p>
          </div>
        </div>

        {/* Content Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Details Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#F7F5F0] p-6 sm:p-10 border border-[#111111]/10">
            <div>
              {/* Studio Title & Google Rating Badge */}
              <div className="flex items-start justify-between gap-4 pb-6 border-b border-[#111111]/10">
                <div>
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#111111] uppercase tracking-[0.08em]">
                    {STUDIO_INFO.name}
                  </h3>
                  <p className="font-sans-clean text-[11px] tracking-[0.2em] text-[#77736B] uppercase font-light mt-1">
                    ESTD {STUDIO_INFO.established} · {STUDIO_INFO.experienceYears}+ YEARS HERITAGE
                  </p>
                </div>

                {/* Rating Badge */}
                <a
                  href={STUDIO_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white px-3 py-2 border border-[#111111]/10 flex flex-col items-center shadow-xs hover:border-[#7D836D] transition-colors"
                >
                  <div className="flex items-center gap-1 text-[#111111] font-serif-luxury text-base font-medium">
                    <span>{STUDIO_INFO.rating}</span>
                    <Star className="w-3.5 h-3.5 fill-[#EAB308] text-[#EAB308]" />
                  </div>
                  <span className="text-[8px] font-sans-clean tracking-wider text-[#77736B] uppercase">
                    {STUDIO_INFO.reviewCount}+ REVIEWS
                  </span>
                </a>
              </div>

              {/* Studio Information List */}
              <div className="space-y-6 pt-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#111111]/5 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#111111]" />
                  </div>
                  <div>
                    <h4 className="font-sans-clean text-[10px] tracking-[0.2em] uppercase text-[#77736B] font-medium">
                      STUDIO ADDRESS
                    </h4>
                    <p className="font-sans-clean text-sm text-[#111111] font-light leading-relaxed mt-1">
                      {STUDIO_INFO.address}
                    </p>
                    <p className="font-sans-clean text-xs text-[#77736B] font-light mt-0.5">
                      Opposite Anangpur Charitable Trust, Krishna Nagar, Delhi
                    </p>
                  </div>
                </div>

                {/* Contact Numbers */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#111111]/5 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-[#111111]" />
                  </div>
                  <div>
                    <h4 className="font-sans-clean text-[10px] tracking-[0.2em] uppercase text-[#77736B] font-medium">
                      DIRECT INQUIRIES & WHATSAPP
                    </h4>
                    <a
                      href={`tel:${STUDIO_INFO.phone}`}
                      className="font-sans-clean text-sm text-[#111111] font-medium hover:text-[#7D836D] transition-colors block mt-1"
                    >
                      {STUDIO_INFO.phoneDisplay}
                    </a>
                    <a
                      href={`https://wa.me/${STUDIO_INFO.whatsapp}?text=Hi%20Sumit%20Studio,%20I%20would%20like%20to%20inquire%20about%20wedding%20photography%20services.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#7D836D] hover:underline font-sans-clean mt-1"
                    >
                      <span>Chat on WhatsApp</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#111111]/5 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-[#111111]" />
                  </div>
                  <div>
                    <h4 className="font-sans-clean text-[10px] tracking-[0.2em] uppercase text-[#77736B] font-medium">
                      EMAIL
                    </h4>
                    <a
                      href={`mailto:${STUDIO_INFO.email}`}
                      className="font-sans-clean text-sm text-[#111111] font-light hover:text-[#7D836D] transition-colors block mt-1"
                    >
                      {STUDIO_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#111111]/5 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-[#111111]" />
                  </div>
                  <div>
                    <h4 className="font-sans-clean text-[10px] tracking-[0.2em] uppercase text-[#77736B] font-medium">
                      STUDIO HOURS
                    </h4>
                    <p className="font-sans-clean text-sm text-[#111111] font-light mt-1">
                      {STUDIO_INFO.hours}
                    </p>
                    <p className="font-sans-clean text-xs text-[#77736B] font-light mt-0.5">
                      Prior appointment recommended for wedding consultations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-8 mt-6 border-t border-[#111111]/10 flex flex-col sm:flex-row gap-3">
              <a
                href={STUDIO_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#111111] text-white py-3.5 px-5 font-sans-clean text-xs tracking-[0.22em] uppercase text-center hover:bg-[#7D836D] transition-colors flex items-center justify-center gap-2 group shadow-sm"
              >
                <span>OPEN IN GOOGLE MAPS</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={`https://wa.me/${STUDIO_INFO.whatsapp}?text=Hello%20Sumit%20Studio,%20I%20would%20like%20to%20schedule%20a%20visit%20to%20your%20Krishna%20Nagar%20studio.`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-5 border border-[#111111]/20 font-sans-clean text-xs tracking-[0.2em] uppercase text-center text-[#111111] hover:bg-[#111111]/5 transition-colors"
              >
                BOOK APPOINTMENT
              </a>
            </div>
          </div>

          {/* Right Interactive Google Map Embed */}
          <div className="lg:col-span-7 bg-[#E5E1D8] border border-[#111111]/10 relative min-h-[420px] lg:min-h-full overflow-hidden shadow-sm flex flex-col">
            {/* Top Bar for Map */}
            <div className="bg-[#111111] text-white px-4 py-2.5 flex items-center justify-between text-xs font-sans-clean">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="tracking-[0.18em] uppercase text-[10px] text-white/90">
                  SUMIT STUDIO · KRISHNA NAGAR, DELHI
                </span>
              </div>
              <a
                href={STUDIO_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-wider text-white/70 hover:text-white flex items-center gap-1 uppercase"
              >
                <span>Full Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Google Map Iframe */}
            <div className="relative flex-1 w-full min-h-[360px]">
              <iframe
                title="Sumit Studio Krishna Nagar Delhi Google Maps"
                src={STUDIO_INFO.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-[0.9] contrast-[1.05]"
              />

              {/* Floating Overlay Card on Map */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-xs p-3.5 border border-[#111111]/10 shadow-lg">
                <p className="font-serif-luxury text-sm font-semibold text-[#111111] tracking-wide">
                  Sumit Studio
                </p>
                <p className="font-sans-clean text-[11px] text-[#77736B] mt-0.5 line-clamp-2">
                  H4/1, Krishna Nagar, Delhi - 110051 (Opp. Anangpur Charitable Trust)
                </p>
                <a
                  href={STUDIO_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans-clean text-[10px] tracking-widest text-[#7D836D] font-medium hover:underline inline-flex items-center gap-1 uppercase mt-2"
                >
                  <span>GET DRIVING DIRECTIONS</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
