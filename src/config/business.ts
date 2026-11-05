/**
 * Business configuration and identity for Richard Phone Solutions
 * Registered business name: Omega Richard Enterprise
 * Location: Dome Old Station, Accra, Ghana
 */

export const BUSINESS_INFO = {
  name: 'Richard Phone Solutions',
  registeredName: 'Omega Richard Enterprise',
  phone: '0548395258',
  phoneFormatted: '054 839 5258',
  phoneTelLink: 'tel:+233548395258',
  whatsappNumber: '0548395258',
  whatsappLink: 'https://wa.me/233548395258?text=Hello%20Richard%20Phone%20Solutions.%20I%20would%20like%20to%20make%20an%20enquiry%20about%20your%20services.',
  whatsappIphoneInquiryLink: 'https://wa.me/233548395258?text=Hello%20Richard%20Phone%20Solutions.%20I%20would%20like%20to%20inquire%20about%20available%20new%20and%20pre-owned%20iPhones%20and%20prices.',
  location: 'Dome Old Station, Accra, Ghana',
  mapsLink: 'https://www.google.com/maps/search/?api=1&query=Dome+Old+Station,+Accra,+Ghana',
  website: 'www.richardsphonesolutions.com',
  websiteUrl: 'https://www.richardsphonesolutions.com',
  category: 'Mobile Phone Repairs, Phone Sales and Technical Support',
};

/**
 * Formspree Endpoint Configuration
 * Replace 'YOUR_FORM_ID' with your actual Formspree form ID (e.g., https://formspree.io/f/mqkvabcd)
 */
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

export const PHONE_BRANDS = [
  'Apple iPhone',
  'Samsung',
  'Tecno',
  'Infinix',
  'Itel',
  'Google Pixel',
  'Other',
] as const;

export const SERVICES_LIST = [
  {
    id: 'expert-repair',
    name: 'Expert Phone Repair',
    formValue: 'Phone Repair',
    description: 'Comprehensive diagnostics and professional hardware and software repair solutions for all major smartphone brands.',
    highlight: 'All Brands',
  },
  {
    id: 'iphone-sales',
    name: 'Sale of New and Pre-owned iPhones',
    formValue: 'Other',
    description: 'Genuine brand-new and verified pre-owned iPhones. Contact us directly to check currently available stock and prices.',
    highlight: 'Direct Inquiry',
  },
  {
    id: 'flashing-decoding',
    name: 'Phone Flashing and Decoding',
    formValue: 'Flashing and Decoding',
    description: 'Firmware flashing, software reinstallation, OS upgrades, and decoding services to resolve software crashes and boot issues.',
    highlight: 'Software & OS',
  },
  {
    id: 'unlocking',
    name: 'Phone Unlocking Services',
    formValue: 'Phone Unlocking',
    description: 'Safe and professional unlocking solutions for supported smartphone models and network-locked devices.',
    highlight: 'Network & Access',
  },
  {
    id: 'screen-replacement',
    name: 'Screen Replacement',
    formValue: 'Screen Replacement',
    description: 'Professional screen replacement services for phones with cracked glass, unresponsive touch, bleeding displays, or faulty OLED/LCD panels.',
    highlight: 'Display & Touch',
  },
  {
    id: 'battery-replacement',
    name: 'Battery Replacement',
    formValue: 'Battery Replacement',
    description: 'Quality battery replacement services for phones experiencing quick battery draining, overheating, sudden shutdowns, or degraded battery health.',
    highlight: 'Power & Health',
  },
  {
    id: 'micro-soldering',
    name: 'Micro-Soldering',
    formValue: 'Micro-Soldering',
    description: 'Advanced precision board-level repair services and chip-level micro-soldering for supported phone motherboard and hardware faults.',
    highlight: 'Board-Level Repair',
  },
  {
    id: 'data-recovery',
    name: 'Phone Data Recovery',
    formValue: 'Data Recovery',
    description: 'Assistance with retrieving important photos, contacts, documents, and media from damaged or supported non-booting devices.',
    highlight: 'Files & Media',
  },
  {
    id: 'other-services',
    name: 'Other Phone Repair & Technical Services',
    formValue: 'Other',
    description: 'Charging port fixes, speaker and microphone repairs, camera lens replacements, power button fixes, and water damage inspections.',
    highlight: 'Hardware Components',
  },
] as const;

export const FORM_SERVICES = [
  'Screen Replacement',
  'Battery Replacement',
  'Phone Repair',
  'Phone Unlocking',
  'Flashing and Decoding',
  'Micro-Soldering',
  'Data Recovery',
  'Other',
] as const;
