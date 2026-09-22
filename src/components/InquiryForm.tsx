import React, { useState } from 'react';
import { INQUIRY_CARD_IMAGE } from '../data/portfolioData';
import { LogoSvg } from './Logo';
import { Phone, Mail, Instagram, ArrowRight, CheckCircle2 } from 'lucide-react';

export const InquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    details: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(`Wedding Inquiry — ${formData.name}`);
    const body = encodeURIComponent(
      [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone}`,
        `Event Date: ${formData.eventDate || 'Not specified'}`,
        '',
        'Event details:',
        formData.details || 'Not provided',
      ].join('\n'),
    );

    window.location.href = `mailto:info@sumitstudio.com?subject=${subject}&body=${body}`;
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="w-full py-20 sm:py-28 md:py-32 bg-[#F7F5F0]">
      <div className="w-[92vw] max-w-[1550px] mx-auto">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <span className="font-sans-clean text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#77736B] font-medium block mb-2">
            LET'S CONNECT
          </span>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-6 flex-1">
              <h2 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.04em] text-[#111111] font-normal whitespace-nowrap">
                LET'S CAPTURE YOUR STORY
              </h2>
              <div className="hidden sm:block flex-1 h-[1px] bg-[#111111]/20 ml-2" />
            </div>

            <div className="text-left md:text-right">
              <span className="font-sans-clean text-[9px] sm:text-[11px] tracking-[0.22em] uppercase text-[#77736B] block leading-tight font-light">
                DELHI NCR · INDIA
              </span>
              <span className="font-sans-clean text-[9px] sm:text-[11px] tracking-[0.22em] uppercase text-[#77736B] block leading-tight font-light">
                WEDDINGS · FILMS · AND BEYOND
              </span>
            </div>
          </div>
        </div>

        {/* Two-Column Inquiry Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Minimal Inquiry Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-white/80 border border-[#7D836D]/30 p-8 sm:p-12 text-center animate-fade-up">
                <CheckCircle2 className="w-12 h-12 text-[#7D836D] mx-auto mb-4 stroke-[1.5]" />
                <h3 className="font-serif-luxury text-2xl sm:text-3xl uppercase tracking-[0.06em] text-[#111111] mb-2">
                  THANK YOU FOR REACHING OUT
                </h3>
                <p className="font-sans-clean text-sm text-[#77736B] font-light max-w-md mx-auto mb-6">
                  Your email app should now open with your inquiry pre-filled — hit send and our
                  senior wedding consultant will connect with you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', eventDate: '', details: '' });
                  }}
                  className="text-xs font-sans-clean tracking-[0.2em] uppercase text-[#7D836D] hover:underline"
                >
                  SEND ANOTHER INQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="client-name"
                      className="block font-sans-clean text-[9px] tracking-[0.25em] uppercase text-[#77736B] mb-1.5"
                    >
                      YOUR NAME *
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      required
                      placeholder="e.g. Radhika Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/60 border border-[#111111]/15 text-sm text-[#111111] font-sans-clean placeholder-[#77736B]/40 focus:outline-none focus:border-[#7D836D] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="client-email"
                      className="block font-sans-clean text-[9px] tracking-[0.25em] uppercase text-[#77736B] mb-1.5"
                    >
                      EMAIL ADDRESS *
                    </label>
                    <input
                      id="client-email"
                      type="email"
                      required
                      placeholder="radhika@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/60 border border-[#111111]/15 text-sm text-[#111111] font-sans-clean placeholder-[#77736B]/40 focus:outline-none focus:border-[#7D836D] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="client-phone"
                      className="block font-sans-clean text-[9px] tracking-[0.25em] uppercase text-[#77736B] mb-1.5"
                    >
                      PHONE NUMBER *
                    </label>
                    <input
                      id="client-phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white/60 border border-[#111111]/15 text-sm text-[#111111] font-sans-clean placeholder-[#77736B]/40 focus:outline-none focus:border-[#7D836D] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="client-date"
                      className="block font-sans-clean text-[9px] tracking-[0.25em] uppercase text-[#77736B] mb-1.5"
                    >
                      EVENT DATE
                    </label>
                    <input
                      id="client-date"
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full px-4 py-3 bg-white/60 border border-[#111111]/15 text-sm text-[#111111] font-sans-clean placeholder-[#77736B]/40 focus:outline-none focus:border-[#7D836D] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="client-event"
                    className="block font-sans-clean text-[9px] tracking-[0.25em] uppercase text-[#77736B] mb-1.5"
                  >
                    TELL US ABOUT YOUR EVENT
                  </label>
                  <textarea
                    id="client-event"
                    rows={4}
                    placeholder="Wedding venues, cities, dates, functions (Mehendi, Sangeet, Wedding), and your vision..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full px-4 py-3 bg-white/60 border border-[#111111]/15 text-sm text-[#111111] font-sans-clean placeholder-[#77736B]/40 focus:outline-none focus:border-[#7D836D] transition-colors resize-y"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex items-center gap-3 px-8 py-3.5 bg-[#7D836D] hover:bg-[#686E58] text-white text-xs font-sans-clean tracking-[0.22em] uppercase rounded-none transition-all duration-300 focus:outline-none shadow-sm cursor-pointer"
                  >
                    <span>{isSubmitting ? 'SENDING...' : 'SEND INQUIRY'}</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Editorial Photo Card & Studio Contact Info */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-row gap-6 items-start">
            {/* Small Editorial Card Image ("Good Photos Better People") */}
            <div className="w-full sm:w-1/2 lg:w-5/12 aspect-[3/4] bg-[#151515]/5 overflow-hidden shadow-md relative">
              <img
                src={INQUIRY_CARD_IMAGE.src}
                alt={INQUIRY_CARD_IMAGE.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 text-center">
                <span className="font-serif-luxury text-xl sm:text-2xl text-white font-normal leading-tight">
                  Good
                  <br />
                  Photos
                  <br />
                  Better
                  <br />
                  People
                </span>
              </div>
            </div>

            {/* Studio Info and Direct Options */}
            <div className="w-full sm:w-1/2 lg:w-7/12 flex flex-col justify-between space-y-4">
              <div>
                <LogoSvg color="#111111" className="w-40 sm:w-44 h-auto -ml-1" />
                <p className="font-sans-clean text-xs text-[#77736B] tracking-wider mt-1.5">
                  Delhi NCR · India
                </p>
                <p className="font-sans-clean text-xs text-[#55524B] leading-relaxed mt-2 font-light">
                  Available for weddings across India and internationally.
                </p>
              </div>

              <div className="pt-3 border-t border-[#111111]/10 space-y-2.5 text-xs font-sans-clean text-[#111111]">
                {/* Call / WhatsApp */}
                <a
                  href="https://wa.me/919810000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[#55524B] hover:text-[#7D836D] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#7D836D] stroke-[1.5]" />
                  <span>Call / WhatsApp</span>
                </a>

                {/* Email */}
                <a
                  href="mailto:inquiries@sumitstudio.com"
                  className="flex items-center gap-2.5 text-[#55524B] hover:text-[#7D836D] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#7D836D] stroke-[1.5]" />
                  <span>Email Us</span>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[#55524B] hover:text-[#7D836D] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#7D836D] stroke-[1.5]" />
                  <span>Follow on Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
