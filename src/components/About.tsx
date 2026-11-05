import React from 'react';
import { Cpu, ShieldCheck, Smartphone, Database } from 'lucide-react';
import { BUSINESS_INFO } from '../config/business';
import technicianImg from '../assets/images/technician_micro_soldering_1793915839420.jpg';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Workshop Technician Image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg bg-slate-900">
              <img
                src={technicianImg}
                alt="Skilled technician performing micro-soldering on a mobile phone logic board"
                className="w-full h-80 sm:h-96 lg:h-[440px] object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/images/technician_micro_soldering_1793915839420.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-white">
                <p className="text-xs uppercase tracking-wider text-blue-400 font-semibold">
                  Advanced Diagnostics
                </p>
                <p className="text-sm font-semibold text-slate-100 mt-0.5">
                  Component & Board-Level Repair
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Dome Old Station, Accra
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: About Narrative */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            <div className="space-y-2">
              <p className="text-xs font-bold text-blue-700 dark:text-blue-400 tracking-wider uppercase">
                About The Business
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight text-balance">
                Your Trusted Phone Solutions Partner
              </h2>
            </div>

            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong className="text-slate-900 dark:text-white font-semibold">Richard Phone Solutions</strong> (registered as <strong className="text-slate-900 dark:text-white font-semibold">{BUSINESS_INFO.registeredName}</strong>) is a dedicated mobile phone repair, phone sales, and technical support enterprise based at Dome Old Station in Accra, Ghana.
            </p>

            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              We specialize in resolving everyday and complex smartphone faults. Our capabilities range from routine display and battery replacements to advanced technical solutions, including board-level micro-soldering, firmware flashing and decoding, phone unlocking, and data recovery for supported devices.
            </p>

            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              In addition to technical repair services, Richard Phone Solutions provides customers with genuine new and pre-owned iPhones, offering a dependable local destination for phone purchases and service support.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Micro-Soldering</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Board-level circuitry repair</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Data Recovery</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Assistance with damaged devices</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">iPhone Sales</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">New and pre-owned models</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Software & Unlocking</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Flashing, decoding & access</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Registration Details */}
            <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60 text-xs text-slate-700 dark:text-slate-300 space-y-1">
              <p className="font-semibold text-blue-900 dark:text-blue-300">Business Registration & Location</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-slate-600 dark:text-slate-400">
                <span><strong className="text-slate-800 dark:text-slate-200">Entity:</strong> {BUSINESS_INFO.registeredName}</span>
                <span><strong className="text-slate-800 dark:text-slate-200">Station:</strong> Dome Old Station, Accra</span>
                <span><strong className="text-slate-800 dark:text-slate-200">Contact:</strong> {BUSINESS_INFO.phoneFormatted}</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
