import React, { useState } from 'react';
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
  const location = useLocation();
  const { lang, t } = useLanguage();
  const brand = getBrandInfo(lang);

  const navLinks = [
    { name: lang === 'hi' ? "होम" : "Home", href: "#home" },
    { name: lang === 'hi' ? "प्रशासनिक हब" : "Admin Panel", href: "#admin-panel" },
    { name: lang === 'hi' ? "नागरिक ऐप" : "Citizen App", href: "#citizen-app" },
    { name: lang === 'hi' ? "11 मॉड्यूल्स" : "11 Modules", href: "#modules" },
    { name: lang === 'hi' ? "पदानुक्रम" : "Hierarchy", href: "#hierarchy" },
    { name: lang === 'hi' ? "संपर्क" : "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Brand Logo with header-logo.png */}
          <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center gap-2.5 group shrink-0 py-1">
            <img 
              src={headerLogoImg} 
              alt={brand.name} 
              className="h-14 sm:h-16 w-auto max-w-[220px] sm:max-w-[260px] object-contain rounded-xl sm:rounded-2xl transition-transform group-hover:scale-102"
            />
          </a>

          {/* Desktop Nav Links - Single Line with whitespace-nowrap */}
          <div className="hidden xl:flex items-center gap-1.5 shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 hover:text-[#f26522] hover:bg-orange-50/60 transition-all whitespace-nowrap cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mid desktop fallback: between lg and xl */}
          <div className="hidden lg:flex xl:hidden items-center gap-1 shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-2 py-1.5 rounded-lg text-xs font-bold text-slate-700 hover:text-[#f26522] hover:bg-orange-50/60 transition-all whitespace-nowrap cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs & Language Selector */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            {/* Clean Language Selector Dropdown */}
            <LanguageSelector variant="navbar" />

            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-extrabold text-[#0c2340] bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all shadow-2xs whitespace-nowrap"
            >
              <HiOutlinePhone className="w-3.5 h-3.5 text-[#0a8543] shrink-0" />
              <span>{CONTACT_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenDemoModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold text-white bg-[#f26522] hover:bg-[#d95314] shadow-xs shadow-orange-500/20 transition-all hover:scale-102 active:scale-98 cursor-pointer whitespace-nowrap"
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
