import React from 'react';
import {
  Wrench,
  Layers,
  Cpu,
  KeyRound,
  BatteryCharging,
  HardDriveDownload,
  Smartphone,
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const highlights = [
    {
      icon: <Wrench className="w-6 h-6 text-blue-600" />,
      title: 'Expert Phone Repair Services',
      description: 'Hands-on troubleshooting for everyday smartphone faults, physical damage, and component defects.',
    },
    {
      icon: <Layers className="w-6 h-6 text-blue-600" />,
      title: 'Multiple Repair Solutions',
      description: 'Comprehensive support covering screens, charging ports, speakers, cameras, and housing repairs.',
    },
    {
      icon: <Cpu className="w-6 h-6 text-blue-600" />,
      title: 'Advanced Micro-Soldering',
      description: 'Specialized board-level diagnostics and circuit micro-soldering for intricate logic board issues.',
    },
    {
      icon: <KeyRound className="w-6 h-6 text-blue-600" />,
      title: 'Phone Unlocking & Decoding',
      description: 'Technical unlocking solutions, firmware restoration, and flashing to solve software and network locks.',
    },
    {
      icon: <BatteryCharging className="w-6 h-6 text-blue-600" />,
      title: 'Screen & Battery Replacement',
      description: 'Targeted display and battery replacements to restore touch response, display clarity, and power endurance.',
    },
    {
      icon: <HardDriveDownload className="w-6 h-6 text-blue-600" />,
      title: 'Data Recovery Services',
      description: 'Technical extraction assistance for photos, contacts, and personal files from supported damaged phones.',
    },
    {
      icon: <Smartphone className="w-6 h-6 text-blue-600" />,
      title: 'New & Pre-Owned iPhone Sales',
      description: 'Direct access to genuine Apple iPhones with local customer support right here in Accra.',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <p className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
            Technical Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight text-balance">
            Why Choose Richard Phone Solutions?
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed text-balance">
            Combining technical skill, specialized micro-soldering tools, and genuine smartphone solutions to address your mobile device needs.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className={`p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all duration-200 ${
                index === highlights.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="p-3 w-fit rounded-xl bg-blue-50 dark:bg-blue-950/70 mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
