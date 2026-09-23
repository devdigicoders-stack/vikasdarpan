import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  HiOutlineSparkles, 
  HiOutlineBars3, 
  HiOutlineXMark,
  HiOutlinePhone
} from 'react-icons/hi2';
import { useLanguage } from '../context/LanguageContext';
import { CONTACT_INFO, getBrandInfo } from '../data/platformData';
import LanguageSelector from './LanguageSelector';

import headerLogoImg from '../assets/header-logo.png';

export default function Navbar({ onOpenDemoModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const { lang, t } = useLanguage();
  const brand = getBrandInfo(lang);

  const navLinks = [
    { id: "home", name: lang === 'hi' ? "होम" : "Home", href: "#home" },
    { id: "admin-panel", name: lang === 'hi' ? "प्रशासनिक हब" : "Admin Panel", href: "#admin-panel" },
    { id: "citizen-app", name: lang === 'hi' ? "नागरिक ऐप" : "Citizen App", href: "#citizen-app" },
    { id: "modules", name: lang === 'hi' ? "11 मॉड्यूल्स" : "11 Modules", href: "#modules" },
    { id: "hierarchy", name: lang === 'hi' ? "पदानुक्रम" : "Hierarchy", href: "#hierarchy" },
    { id: "contact", name: lang === 'hi' ? "संपर्क" : "Contact", href: "#contact" },
  ];

  // Scroll Spy and Progress Tracker
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Calculate total page scroll progress percentage
      const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (winHeight > 0) {
        setScrollProgress((scrollY / winHeight) * 100);
      }

      // Detect current active section in view
      const sectionIds = ['home', 'admin-panel', 'citizen-app', 'modules', 'hierarchy', 'contact'];
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If top of section is within 250px of top viewport
          if (rect.top <= 250) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(id || href.replace('#', ''));
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-md py-0' 
        : 'bg-white border-b border-slate-200 shadow-xs'
    }`}>
      {/* Scroll Progress Bar at top of header */}
      <div 
        className="h-1 bg-gradient-to-r from-[#f26522] via-[#0284c7] to-[#0a8543] transition-all duration-150 ease-out origin-left"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className={`flex items-center justify-between transition-all duration-300 gap-4 ${
          isScrolled ? 'h-18 sm:h-20' : 'h-20 sm:h-22'
        }`}>
          {/* Brand Logo with cropped prominent header-logo.png */}
          <a href="#home" onClick={(e) => handleNavClick(e, "#home", "home")} className="flex items-center gap-2 group shrink-0 py-1">
            <img 
              src={headerLogoImg} 
              alt={brand.name} 
              className={`w-auto object-contain transition-all duration-300 group-hover:scale-103 ${
                isScrolled ? 'h-12 sm:h-14 md:h-16' : 'h-14 sm:h-16 md:h-18'
              }`}
            />
          </a>

          {/* Desktop Nav Links with Active Indicator & Smooth Transitions */}
          <div className="hidden xl:flex items-center gap-1.5 shrink-0">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  className={`relative px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive 
                      ? 'text-[#f26522] bg-orange-50/90 font-extrabold shadow-2xs' 
                      : 'text-slate-700 hover:text-[#f26522] hover:bg-orange-50/50'
                  }`}
                >
                  {link.name}
                  {/* Active animated bottom dot & highlight bar */}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-gradient-to-r from-[#f26522] to-amber-500 rounded-full animate-in fade-in zoom-in duration-200"></span>
                  )}
                </a>
              );
            })}
          </div>

          {/* Mid desktop fallback: between lg and xl */}
          <div className="hidden lg:flex xl:hidden items-center gap-1 shrink-0">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  className={`relative px-2.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive 
                      ? 'text-[#f26522] bg-orange-50/90 font-extrabold shadow-2xs' 
                      : 'text-slate-700 hover:text-[#f26522] hover:bg-orange-50/50'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-2 right-2 h-0.5 bg-[#f26522] rounded-full"></span>
                  )}
                </a>
              );
            })}
          </div>

          {/* Action CTAs & Language Selector */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            {/* Clean Language Selector Dropdown */}
            <LanguageSelector variant="navbar" />

            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-extrabold text-[#0c2340] bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all shadow-2xs whitespace-nowrap hover:scale-102"
            >
              <HiOutlinePhone className="w-3.5 h-3.5 text-[#0a8543] shrink-0" />
              <span>{CONTACT_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenDemoModal}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-extrabold text-white bg-[#f26522] hover:bg-[#d95314] shadow-xs shadow-orange-500/25 transition-all hover:scale-102 active:scale-98 cursor-pointer whitespace-nowrap"
            >
              <HiOutlineSparkles className="w-3.5 h-3.5 shrink-0" />
              <span>{t.nav.bookDemoBtn}</span>
            </button>
          </div>

          {/* Mobile / Tablet Menu Button */}
          <div className="lg:hidden flex items-center gap-2 shrink-0">
            <div className="md:hidden">
              <LanguageSelector variant="navbar" />
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-800 hover:text-slate-950 hover:bg-slate-100 focus:outline-hidden cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <HiOutlineXMark className="w-5 h-5" /> : <HiOutlineBars3 className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-5 space-y-1.5 shadow-lg animate-fadeIn">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-2 rounded-lg text-sm font-bold text-slate-800 hover:text-[#f26522] hover:bg-orange-50/60"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemoModal();
              }}
              className="w-full py-2.5 rounded-lg text-center font-extrabold text-xs text-white bg-[#f26522] hover:bg-[#d95314] shadow-xs cursor-pointer"
            >
              {t.nav.bookDemoBtn}
            </button>
            <div className="flex gap-2">
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-[#0c2340]"
              >
                <HiOutlinePhone className="w-3.5 h-3.5 text-[#0a8543]" />
                <span>{t.nav.callBtn}</span>
              </a>
              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-[#0a8543] hover:bg-[#086b36] rounded-lg text-xs font-bold text-white shadow-xs"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
