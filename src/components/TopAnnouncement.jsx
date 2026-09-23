import React from 'react';
import { HiOutlineSparkles, HiOutlinePhone } from 'react-icons/hi2';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { CONTACT_INFO, getBrandInfo } from '../data/platformData';

export default function TopAnnouncement() {
  const { lang, t } = useLanguage();
  const brand = getBrandInfo(lang);

  return (
    <div className="bg-sky-800 text-white text-xs font-semibold py-1.5 px-4 border-b border-sky-900 shadow-xs">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <span className="font-extrabold flex items-center gap-1.5 text-white tracking-wide">
            <HiOutlineSparkles className="w-3.5 h-3.5 text-amber-300" />
            {brand.name}
          </span>
          <span className="hidden md:inline text-sky-100 font-medium">
            — {brand.tagline}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a 
            href={`tel:${CONTACT_INFO.phoneRaw}`} 
            className="inline-flex items-center gap-1.5 text-white hover:text-sky-100 transition-colors bg-white/15 hover:bg-white/25 px-2.5 py-1 rounded-md font-bold text-xs"
          >
            <HiOutlinePhone className="w-3.5 h-3.5 text-amber-300" />
            <span>{t.brand.callUs} {CONTACT_INFO.phone}</span>
          </a>
          <a 
            href={CONTACT_INFO.whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-white transition-colors bg-emerald-600 hover:bg-emerald-500 px-2.5 py-1 rounded-md font-bold text-xs shadow-xs"
          >
            <FaWhatsapp className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'व्हाट्सएप' : 'WhatsApp'}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
