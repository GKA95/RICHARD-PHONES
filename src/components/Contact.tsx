import React from 'react';
import { Phone, MessageCircle, MapPin, Globe, ExternalLink, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../config/business';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <p className="text-xs font-bold text-blue-700 uppercase tracking-wider">
            Reach Out To Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
            Contact Richard Phone Solutions
          </h2>
          <p className="text-base text-slate-600 leading-relaxed text-balance">
            Visit us at Dome Old Station in Accra or reach out via phone and WhatsApp for immediate repair inquiries and support.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Phone Call */}
          <div className="flex flex-col justify-between p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all">
            <div className="space-y-3">
              <div className="p-3 w-fit rounded-xl bg-blue-100/80 text-blue-700">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Call Us Directly
                </h3>
                <p className="text-lg font-bold text-slate-950 mt-1">
                  {BUSINESS_INFO.phoneFormatted}
                </p>
                <p className="text-xs text-slate-600 mt-1">
                  Speak directly with a repair technician.
                </p>
              </div>
            </div>
            <div className="pt-6 mt-4 border-t border-slate-200/60">
              <a
                href={BUSINESS_INFO.phoneTelLink}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span>Call Now</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col justify-between p-6 rounded-2xl bg-emerald-50/50 border border-emerald-200/80 hover:border-emerald-400 hover:shadow-md transition-all">
            <div className="space-y-3">
              <div className="p-3 w-fit rounded-xl bg-emerald-100 text-emerald-700">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  Chat on WhatsApp
                </h3>
                <p className="text-lg font-bold text-slate-950 mt-1">
                  {BUSINESS_INFO.whatsappNumber}
                </p>
                <p className="text-xs text-slate-600 mt-1">
                  Send photos of your damaged device or fault.
                </p>
              </div>
            </div>
            <div className="pt-6 mt-4 border-t border-emerald-200/60">
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 transition-colors"
              >
                <span>Start WhatsApp Chat</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Workshop Location */}
          <div className="flex flex-col justify-between p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all">
            <div className="space-y-3">
              <div className="p-3 w-fit rounded-xl bg-blue-100/80 text-blue-700">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Workshop Location
                </h3>
                <p className="text-lg font-bold text-slate-950 mt-1">
                  Dome Old Station
                </p>
                <p className="text-xs text-slate-600 mt-1">
                  Accra, Ghana
                </p>
              </div>
            </div>
            <div className="pt-6 mt-4 border-t border-slate-200/60">
              <a
                href={BUSINESS_INFO.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Official Website */}
          <div className="flex flex-col justify-between p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all">
            <div className="space-y-3">
              <div className="p-3 w-fit rounded-xl bg-blue-100/80 text-blue-700">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Website
                </h3>
                <p className="text-base font-bold text-slate-950 mt-1 break-all">
                  {BUSINESS_INFO.website}
                </p>
                <p className="text-xs text-slate-600 mt-1">
                  Online service & repair booking.
                </p>
              </div>
            </div>
            <div className="pt-6 mt-4 border-t border-slate-200/60">
              <a
                href={BUSINESS_INFO.websiteUrl}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span>Visit Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Map / Directions Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-900 to-slate-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-wider text-blue-300 font-semibold">
              Find Us In Person
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Dome Old Station, Accra, Ghana
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Easily accessible in the Dome area. Click below to view Google Maps directions.
            </p>
          </div>

          <a
            href={BUSINESS_INFO.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 active:bg-slate-200 rounded-xl transition-colors shadow-md whitespace-nowrap shrink-0"
          >
            <Navigation className="w-4 h-4 text-blue-600" />
            <span>Open Google Maps</span>
          </a>
        </div>

      </div>
    </section>
  );
};
