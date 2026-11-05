import React from 'react';
import { Phone, MessageCircle, MapPin, Globe } from 'lucide-react';
import { Logo } from './Logo';
import { BUSINESS_INFO, SERVICES_LIST } from '../config/business';

interface FooterProps {
  onSelectService?: (serviceName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService }) => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleServiceClick = (e: React.MouseEvent, formValue: string) => {
    e.preventDefault();
    if (onSelectService) {
      onSelectService(formValue);
    } else {
      const element = document.getElementById('repair-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Business Identity & Overview */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm pt-2">
              Richard Phone Solutions provides mobile phone repairs, screen and battery replacements, micro-soldering, data recovery, and genuine new and pre-owned iPhone sales.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p>
                <strong className="text-slate-200">Registered Business Name:</strong> {BUSINESS_INFO.registeredName}
              </p>
              <p>
                <strong className="text-slate-200">Category:</strong> {BUSINESS_INFO.category}
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, 'home')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, 'about')}
                  className="hover:text-blue-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, 'services')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#iphones"
                  onClick={(e) => handleNavClick(e, 'iphones')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Phones for Sale
                </a>
              </li>
              <li>
                <a
                  href="#repair-form"
                  onClick={(e) => handleNavClick(e, 'repair-form')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Book a Repair
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {SERVICES_LIST.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a
                    href="#repair-form"
                    onClick={(e) => handleServiceClick(e, service.formValue)}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, 'services')}
                  className="text-blue-400 hover:text-blue-300 transition-colors text-xs font-semibold"
                >
                  + View All Services
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Contact Information
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.location}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={BUSINESS_INFO.phoneTelLink}
                  className="hover:text-white transition-colors"
                >
                  {BUSINESS_INFO.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={BUSINESS_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {BUSINESS_INFO.whatsappNumber} (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={BUSINESS_INFO.websiteUrl}
                  className="hover:text-white transition-colors"
                >
                  {BUSINESS_INFO.website}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p>
              &copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved.
            </p>
          </div>

          <div>
            <p className="font-medium text-slate-400">
              {BUSINESS_INFO.registeredName} | Accra, Ghana
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};
