import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Wrench, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';
import { BUSINESS_INFO } from '../config/business';

interface NavbarProps {
  onBookRepairClick?: () => void;
  theme?: 'light' | 'dark';
  onToggleTheme?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onBookRepairClick,
  theme = 'light',
  onToggleTheme,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 70;
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800 py-2.5 sm:py-3'
            : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800/60 py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
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
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700 dark:text-slate-200">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, 'home')}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, 'about')}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap"
              >
                About Us
              </a>
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, 'services')}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap"
              >
                Our Services
              </a>
              <a
                href="#iphones"
                onClick={(e) => handleNavClick(e, 'iphones')}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap"
              >
                Phones for Sale
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap"
              >
                Contact Us
              </a>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              {onToggleTheme && (
                <button
                  type="button"
                  onClick={onToggleTheme}
                  className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
                  aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                  title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {theme === 'dark' ? (
                    <Sun className="w-4 h-4 text-amber-400" />
                  ) : (
                    <Moon className="w-4 h-4 text-slate-600" />
                  )}
                </button>
              )}

              <a
                href={BUSINESS_INFO.phoneTelLink}
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors whitespace-nowrap"
                title={`Call ${BUSINESS_INFO.phoneFormatted}`}
              >
                <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>{BUSINESS_INFO.phoneFormatted}</span>
              </a>
              <button
                type="button"
                onClick={handleBookRepair}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg transition-all shadow-sm shadow-blue-600/25 whitespace-nowrap cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <Wrench className="w-3.5 h-3.5" />
                <span>Book a Repair</span>
              </button>
            </div>

            {/* Mobile Bar Controls */}
            <div className="flex sm:hidden items-center gap-1.5">
              {onToggleTheme && (
                <button
                  type="button"
                  onClick={onToggleTheme}
                  className="p-2.5 min-w-[40px] min-h-[40px] flex items-center justify-center text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg active:scale-95 transition-transform"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? (
                    <Sun className="w-4 h-4 text-amber-400" />
                  ) : (
                    <Moon className="w-4 h-4 text-slate-600" />
                  )}
                </button>
              )}

              <a
                href={BUSINESS_INFO.phoneTelLink}
                className="p-2.5 min-w-[40px] min-h-[40px] flex items-center justify-center text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 rounded-lg active:scale-95 transition-transform"
                aria-label={`Call ${BUSINESS_INFO.phoneFormatted}`}
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 min-w-[42px] min-h-[42px] flex items-center justify-center text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer with AnimatePresence & Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Scrim */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Menu Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden fixed top-[60px] left-0 right-0 z-40 border-b border-slate-200 dark:border-slate-800 bg-white/98 dark:bg-slate-900/98 backdrop-blur-xl shadow-2xl max-h-[calc(100vh-60px)] overflow-y-auto"
            >
              <div className="max-w-7xl mx-auto px-4 pt-3 pb-8 space-y-1">
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, 'home')}
                  className="flex items-center min-h-[48px] px-3.5 py-2.5 rounded-xl text-base font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-100/80 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Home
                </a>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, 'about')}
                  className="flex items-center min-h-[48px] px-3.5 py-2.5 rounded-xl text-base font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-100/80 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  About Us
                </a>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, 'services')}
                  className="flex items-center min-h-[48px] px-3.5 py-2.5 rounded-xl text-base font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-100/80 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Our Services
                </a>
                <a
                  href="#iphones"
                  onClick={(e) => handleNavClick(e, 'iphones')}
                  className="flex items-center min-h-[48px] px-3.5 py-2.5 rounded-xl text-base font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-100/80 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Phones for Sale
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="flex items-center min-h-[48px] px-3.5 py-2.5 rounded-xl text-base font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-100/80 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Contact Us
                </a>

                <div className="pt-4 mt-2 border-t border-slate-200 dark:border-slate-800 space-y-3">
                  <button
                    type="button"
                    onClick={handleBookRepair}
                    className="w-full min-h-[48px] flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-md shadow-blue-600/20 transition-colors"
                  >
                    <Wrench className="w-4 h-4" />
                    <span>Book a Repair Now</span>
                  </button>

                  <a
                    href={BUSINESS_INFO.phoneTelLink}
                    className="w-full min-h-[48px] flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-slate-800 dark:text-slate-100 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors"
                  >
                    <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span>Call {BUSINESS_INFO.phoneFormatted}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
