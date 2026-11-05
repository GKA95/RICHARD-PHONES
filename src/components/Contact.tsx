import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, MapPin, Globe, ExternalLink, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../config/business';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-14 sm:py-20 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16"
        >
          <p className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
            Reach Out To Us
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight text-balance">
            Contact Richard Phone Solutions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed text-balance">
            Visit us at Dome Old Station in Accra or reach out via phone and WhatsApp for immediate repair inquiries and support.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-10 sm:mb-12">
          
          {/* Phone Call */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.4, delay: 0.05 }}
            whileHover={{ y: -3 }}
            className="flex flex-col justify-between p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md transition-all"
          >
            <div className="space-y-3">
              <div className="p-3 w-fit rounded-xl bg-blue-100/80 dark:bg-blue-950 text-blue-700 dark:text-blue-400">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Call Us Directly
                </h3>
                <p className="text-base sm:text-lg font-bold text-slate-950 dark:text-white mt-1">
                  {BUSINESS_INFO.phoneFormatted}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                  Speak directly with a repair technician.
                </p>
              </div>
            </div>
            <div className="pt-6 mt-4 border-t border-slate-200/60 dark:border-slate-700/60">
              <a
                href={BUSINESS_INFO.phoneTelLink}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors py-1"
              >
                <span>Call Now</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ y: -3 }}
            className="flex flex-col justify-between p-6 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-800/60 hover:border-emerald-400 dark:hover:border-emerald-500 hover:shadow-md transition-all"
          >
            <div className="space-y-3">
              <div className="p-3 w-fit rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                  Chat on WhatsApp
                </h3>
                <p className="text-base sm:text-lg font-bold text-slate-950 dark:text-white mt-1">
                  {BUSINESS_INFO.whatsappNumber}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                  Send photos of your damaged device or fault.
                </p>
              </div>
            </div>
            <div className="pt-6 mt-4 border-t border-emerald-200/60 dark:border-emerald-800/60">
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:text-emerald-900 dark:hover:text-emerald-300 transition-colors py-1"
              >
                <span>Start WhatsApp Chat</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Workshop Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.4, delay: 0.15 }}
            whileHover={{ y: -3 }}
            className="flex flex-col justify-between p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md transition-all"
          >
            <div className="space-y-3">
              <div className="p-3 w-fit rounded-xl bg-blue-100/80 dark:bg-blue-950 text-blue-700 dark:text-blue-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Workshop Location
                </h3>
                <p className="text-base sm:text-lg font-bold text-slate-950 dark:text-white mt-1">
                  Dome Old Station
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                  Accra, Ghana
                </p>
              </div>
            </div>
            <div className="pt-6 mt-4 border-t border-slate-200/60 dark:border-slate-700/60">
              <a
                href={BUSINESS_INFO.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors py-1"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>
            </div>
          </motion.div>

          {/* Official Website */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ y: -3 }}
            className="flex flex-col justify-between p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md transition-all"
          >
            <div className="space-y-3">
              <div className="p-3 w-fit rounded-xl bg-blue-100/80 dark:bg-blue-950 text-blue-700 dark:text-blue-400">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Website
                </h3>
                <p className="text-sm sm:text-base font-bold text-slate-950 dark:text-white mt-1 break-all">
                  {BUSINESS_INFO.website}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                  Online service & repair booking.
                </p>
              </div>
            </div>
            <div className="pt-6 mt-4 border-t border-slate-200/60 dark:border-slate-700/60">
              <a
                href={BUSINESS_INFO.websiteUrl}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors py-1"
              >
                <span>Visit Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

        </div>

        {/* Map / Directions Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-900 to-slate-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
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
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 active:bg-slate-200 rounded-xl transition-colors shadow-md whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Navigation className="w-4 h-4 text-blue-600" />
            <span>Open Google Maps</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
