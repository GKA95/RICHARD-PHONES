import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { PhoneSales } from './components/PhoneSales';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { RepairForm } from './components/RepairForm';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BUSINESS_INFO } from './config/business';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('');
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('rps-theme') as 'light' | 'dark' | null;
      if (saved) return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
    localStorage.setItem('rps-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const scrollToRepairForm = () => {
    const element = document.getElementById('repair-form');
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

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    scrollToRepairForm();
  };

  const handleBookRepairClick = () => {
    scrollToRepairForm();
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors selection:bg-blue-600 selection:text-white">
      {/* Fixed Navigation Bar */}
      <Navbar
        onBookRepairClick={handleBookRepairClick}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onBookRepairClick={handleBookRepairClick} />

        {/* About Us Section */}
        <About />

        {/* Our Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* Phones for Sale Section */}
        <PhoneSales />

        {/* Why Choose Richard Phone Solutions */}
        <WhyChooseUs />

        {/* How It Works */}
        <HowItWorks />

        {/* Repair Request & Contact Form (Formspree) */}
        <RepairForm initialService={selectedService} />

        {/* Contact Us Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onSelectService={handleSelectService} />

      {/* Floating WhatsApp Quick Action Button */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={BUSINESS_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Richard Phone Solutions on WhatsApp"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white rounded-full shadow-lg shadow-emerald-900/30 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 group"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline-block text-xs font-bold tracking-wide">
          WhatsApp Us
        </span>
      </motion.a>
    </div>
  );
}
