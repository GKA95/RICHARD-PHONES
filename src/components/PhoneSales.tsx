import React from 'react';
import { MessageCircle, Phone, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../config/business';
import iphoneShowcaseImg from '../assets/images/iphone_sales_showcase_1793915839613.jpg';

export const PhoneSales: React.FC = () => {
  return (
    <section id="iphones" className="py-14 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow subtleties */}
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-5 sm:space-y-6"
          >
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-900/40 border border-blue-700/40 text-blue-300 text-[11px] sm:text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Smartphone Sales & Upgrade</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight text-balance">
              Looking for a New or Pre-owned iPhone?
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
              Richard Phone Solutions also supplies genuine brand-new and pre-owned Apple iPhones. Whether you are looking to purchase your next iPhone or replace a damaged device, our team is ready to assist.
            </p>

            {/* Direct Contact Notice */}
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-sm text-slate-300 space-y-2">
              <p className="font-semibold text-white">Stock & Pricing Notice:</p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Available models and competitive prices vary based on current stock. Please contact Richard Phone Solutions directly via WhatsApp or telephone to check currently available iPhone models and receive up-to-date pricing.
              </p>
            </div>

            {/* Verification checklist without fake claims */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-sm text-slate-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Brand-new & pre-owned options</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Genuine Apple iPhone devices</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Physical inspection at Dome Old Station</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Technical support & data transfer setup</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
              <a
                href={BUSINESS_INFO.whatsappIphoneInquiryLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-xl transition-colors shadow-lg shadow-emerald-900/30"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Inquire on WhatsApp for Available iPhones</span>
              </a>

              <a
                href={BUSINESS_INFO.phoneTelLink}
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-5 py-3.5 text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 active:bg-slate-700/80 border border-slate-700 rounded-xl transition-colors active:scale-95"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Call {BUSINESS_INFO.phoneFormatted}</span>
              </a>
            </div>

          </motion.div>

          {/* iPhone Image Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-950 group">
              <img
                src={iphoneShowcaseImg}
                alt="New and pre-owned Apple iPhones on sleek dark slate surface"
                className="w-full h-64 sm:h-80 lg:h-[460px] object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/images/iphone_sales_showcase_1793915839613.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3.5 sm:p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-white">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="text-[10px] sm:text-xs font-semibold text-blue-400 uppercase tracking-wider">
                      iPhone Sales
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-white">
                      New & Pre-Owned Stock
                    </p>
                  </div>
                  <span className="text-[11px] sm:text-xs text-slate-300 bg-slate-800 px-2 sm:px-2.5 py-1 rounded-md border border-slate-700">
                    Dome Old Station
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
