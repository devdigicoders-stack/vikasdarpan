import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { CONTACT_INFO } from '../data/platformData';

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-2.5 pointer-events-auto">
      {/* Direct Call Button (Above WhatsApp) */}
      <a
        href={`tel:${CONTACT_INFO.phoneRaw}`}
        title="कॉल करें | Call Us"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#0c2340] hover:bg-[#16365f] text-white shadow-lg hover:shadow-blue-900/40 transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white"
      >
        <FaPhoneAlt className="w-5 h-5 group-hover:rotate-12 transition-transform text-white" />
        <span className="sr-only">कॉल करें</span>
      </a>

      {/* WhatsApp Button with Ping Ring (Below Call) */}
      <a
        href={CONTACT_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        title="व्हाट्सएप पर चैट करें | WhatsApp Chat"
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#0a8543] hover:bg-[#086b36] text-white shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-110 active:scale-95 ring-4 ring-emerald-500/20 border-2 border-white"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#f26522] text-[9px] font-bold items-center justify-center text-white">1</span>
        </span>
        <FaWhatsapp className="w-7 h-7 group-hover:scale-110 transition-transform text-white" />
      </a>
    </div>
  );
}
