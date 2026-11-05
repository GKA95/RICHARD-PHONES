import React from 'react';
import { MessageCircle, Wrench, MapPin, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../config/business';

interface HeroProps {
  onBookRepairClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookRepairClick }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-slate-100/70 via-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Location & Brand Metadata - unboxed clean text with typographic separators */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600 uppercase tracking-wider">
              <span className="flex items-center gap-1 text-blue-700">
                <MapPin className="w-3.5 h-3.5" />
                Dome Old Station, Accra
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Omega Richard Enterprise</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-500">Ghana</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.1] text-balance">
              Expert Phone Repairs.{' '}
              <span className="text-blue-700">Reliable Solutions.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              From screen and battery replacements to micro-soldering, phone unlocking and data recovery, Richard Phone Solutions provides professional phone services to help keep your devices working.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={onBookRepairClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl transition-all shadow-md shadow-blue-600/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
              >
                <Wrench className="w-5 h-5" />
                <span>Book a Repair</span>
              </button>

              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 active:bg-emerald-200 rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span>Chat With Us on WhatsApp</span>
              </a>
            </div>

            {/* Service Highlights Strip */}
            <div className="pt-4 border-t border-slate-200/80">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Hardware & Board Diagnostics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Precision Micro-Soldering</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>New & Pre-Owned iPhones</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
              <img
                src="/src/assets/images/hero_phone_repair_workbench_1793915838561.jpg"
                alt="Professional phone repair workstation with micro-soldering tools and digital microscope"
                className="w-full h-80 sm:h-96 lg:h-[480px] object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                      Technical Workshop
                    </p>
                    <p className="text-sm font-bold text-white">
                      Richard Phone Solutions
                    </p>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Dome Old Station, Accra, Ghana
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2.5 py-1 text-xs font-medium bg-blue-600/30 text-blue-200 border border-blue-400/30 rounded-md">
                      0548395258
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
