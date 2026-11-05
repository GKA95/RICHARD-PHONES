import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Wrench } from 'lucide-react';
import { Logo } from './Logo';
import { BUSINESS_INFO } from '../config/business';

interface NavbarProps {
  onBookRepairClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookRepairClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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

  const handleBookRepair = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onBookRepairClick) {
      onBookRepairClick();
    } else {
      const element = document.getElementById('repair-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg shrink-0"
            aria-label="Richard Phone Solutions Home"
          >
            <Logo />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className="hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              About Us
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, 'services')}
              className="hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              Our Services
            </a>
            <a
              href="#iphones"
              onClick={(e) => handleNavClick(e, 'iphones')}
              className="hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              Phones for Sale
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              Contact Us
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={BUSINESS_INFO.phoneTelLink}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
              title={`Call ${BUSINESS_INFO.phoneFormatted}`}
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>{BUSINESS_INFO.phoneFormatted}</span>
            </a>
            <button
              type="button"
              onClick={handleBookRepair}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg transition-colors shadow-sm shadow-blue-600/25 whitespace-nowrap cursor-pointer"
            >
              <Wrench className="w-3.5 h-3.5" />
              <span>Book a Repair</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={handleBookRepair}
              className="px-2.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
            >
              Repair
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="max-w-7xl mx-auto px-4 pt-3 pb-6 space-y-1">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-blue-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-blue-600 transition-colors"
            >
              About Us
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, 'services')}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-blue-600 transition-colors"
            >
              Our Services
            </a>
            <a
              href="#iphones"
              onClick={(e) => handleNavClick(e, 'iphones')}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-blue-600 transition-colors"
            >
              Phones for Sale
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-blue-600 transition-colors"
            >
              Contact Us
            </a>

            <div className="pt-4 border-t border-slate-100 space-y-2.5">
              <button
                type="button"
                onClick={handleBookRepair}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm"
              >
                <Wrench className="w-4 h-4" />
                <span>Book a Repair</span>
              </button>
              <a
                href={BUSINESS_INFO.phoneTelLink}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Call {BUSINESS_INFO.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
