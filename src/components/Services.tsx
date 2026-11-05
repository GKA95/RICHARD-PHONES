import React from 'react';
import {
  Wrench,
  Smartphone,
  Cpu,
  KeyRound,
  Layers,
  BatteryCharging,
  Flame,
  HardDriveDownload,
  Settings,
  ArrowRight,
} from 'lucide-react';
import { SERVICES_LIST } from '../config/business';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'expert-repair':
        return <Wrench className="w-6 h-6 text-blue-600" />;
      case 'iphone-sales':
        return <Smartphone className="w-6 h-6 text-blue-600" />;
      case 'flashing-decoding':
        return <Cpu className="w-6 h-6 text-blue-600" />;
      case 'unlocking':
        return <KeyRound className="w-6 h-6 text-blue-600" />;
      case 'screen-replacement':
        return <Layers className="w-6 h-6 text-blue-600" />;
      case 'battery-replacement':
        return <BatteryCharging className="w-6 h-6 text-blue-600" />;
      case 'micro-soldering':
        return <Flame className="w-6 h-6 text-blue-600" />;
      case 'data-recovery':
        return <HardDriveDownload className="w-6 h-6 text-blue-600" />;
      default:
        return <Settings className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <p className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
            Comprehensive Solutions
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight text-balance">
            Our Services
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed text-balance">
            Professional mobile phone repairs, hardware restoration, software servicing, and smartphone sales at Dome Old Station, Accra.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service, index) => (
            <div
              key={service.id}
              className="flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-200 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/70 group-hover:bg-blue-100/80 dark:group-hover:bg-blue-900/60 transition-colors">
                    {getIcon(service.id)}
                  </div>
                  <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 font-mono">
                    0{index + 1}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {service.highlight}
                </span>

                <button
                  type="button"
                  onClick={() => onSelectService(service.formValue)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors focus:outline-none focus-visible:underline cursor-pointer"
                >
                  <span>Book / Enquire</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
