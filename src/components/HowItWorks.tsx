import React from 'react';
import { FileText, Send, PhoneCall } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Tell Us About Your Phone',
      description: 'Select the service you need, choose your phone brand and model, and describe the problem you are experiencing.',
      icon: <FileText className="w-6 h-6 text-blue-600" />,
    },
    {
      step: '02',
      title: 'Submit Your Request',
      description: 'Send your details securely through our website booking form. Your information is delivered directly to our repair team.',
      icon: <Send className="w-6 h-6 text-blue-600" />,
    },
    {
      step: '03',
      title: 'We Contact You',
      description: 'The business receives your request and promptly follows up with you via your preferred contact method (Phone Call or WhatsApp).',
      icon: <PhoneCall className="w-6 h-6 text-blue-600" />,
    },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <p className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
            Simple 3-Step Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight text-balance">
            How It Works
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed text-balance">
            Getting your phone inspected and repaired at Richard Phone Solutions is straightforward.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item) => (
            <div
              key={item.step}
              className="relative flex flex-col p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/70">
                  {item.icon}
                </div>
                <span className="text-2xl font-black text-blue-600/30 dark:text-blue-400/30 font-mono">
                  {item.step}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
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
