import React from 'react';
import { FaWhatsapp, FaPhoneAlt, FaAndroid, FaUsers } from 'react-icons/fa';
import { HiOutlineArrowDownTray } from 'react-icons/hi2';
import { CONTACT_INFO } from '../data/platformData';
import adminAppApk from '../assets/apks/app-release.apk';
import citizenAppApk from '../assets/apks/citizen-app-release.apk';

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-2.5 pointer-events-auto">
      {/* 1. Floating Citizen PWA APK Download Button */}
      <a
        href={citizenAppApk}
        download="VikasDarpan-CitizenApp.apk"
        title="नागरिक ऐप डाउनलोड करें (APK) | Download Citizen App"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white ring-4 ring-orange-500/20"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#0c2340] text-[7.5px] font-black items-center justify-center text-white">APP</span>
        </span>
        <FaUsers className="w-5 h-5 group-hover:scale-110 transition-transform text-white" />
        
        {/* Tooltip Label */}
        <span className="absolute right-14 bg-slate-900 text-white text-[10px] font-bold py-1 px-2.5 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none border border-slate-700">
          Download Citizen APK 👥
        </span>
      </a>

      {/* 2. Floating Admin APK Download Button */}
      <a
        href={adminAppApk}
        download="VikasDarpan-AdminApp.apk"
        title="एडमिन ऐप डाउनलोड करें (APK) | Download Admin App"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white shadow-xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white ring-4 ring-emerald-500/20"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#f26522] text-[8px] font-black items-center justify-center text-white">APK</span>
        </span>
        <FaAndroid className="w-5 h-5 group-hover:scale-110 transition-transform text-white" />
        
        {/* Tooltip Label */}
        <span className="absolute right-14 bg-slate-900 text-white text-[10px] font-bold py-1 px-2.5 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none border border-slate-700">
          Download Admin APK ⚙️
        </span>
      </a>

      {/* Direct Call Button (Middle) */}
      <a
        href={`tel:${CONTACT_INFO.phoneRaw}`}
        title="कॉल करें | Call Us"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#0c2340] hover:bg-[#16365f] text-white shadow-lg hover:shadow-blue-900/40 transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white"
      >
        <FaPhoneAlt className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform text-white" />
        <span className="sr-only">कॉल करें</span>
      </a>

      {/* WhatsApp Button with Ping Ring (Bottom) */}
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

