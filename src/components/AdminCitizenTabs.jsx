import React, { useState } from 'react';
import { 
  HiOutlineComputerDesktop, 
  HiOutlineDevicePhoneMobile, 
  HiOutlineCheck,
  HiOutlineShieldCheck
} from 'react-icons/hi2';
import { useLanguage } from '../context/LanguageContext';
import { getBrandInfo } from '../data/platformData';

export default function AdminCitizenTabs({ onOpenDemoModal }) {
  const [activeTab, setActiveTab] = useState('admin');
  const { lang, t } = useLanguage();
  const brand = getBrandInfo(lang);

  const adminFeatures = lang === 'en' ? [
    "Constituent & Cadre Directory",
    "Jan Samasya Redressal Queue & Delegation",
    "Public Works Milestone Progress Showcase",
    "Dynamic Poster Studio Template Manager",
    "Opinion Polls & Voter Survey Engine",
    "High-Priority Mobile Push Broadcasting",
    "4-Level Area Hierarchy (Block to Booth)",
    "Raw Excel & CSV Data Export"
  ] : [
    "नागरिक एवं कार्यकर्ता डायरेक्टरी",
    "जन समस्या निस्तारण व डेलिगेशन",
    "विकास कार्य माइलस्टोन शोकेस",
    "पोस्टर स्टूडियो टेम्पलेट मैनेजर",
    "जनमत पोल एवं सर्वेक्षण कंट्रोल",
    "हाई-प्रायोरिटी मोबाइल ब्रॉडकास्ट",
    "4-स्तरीय क्षेत्र पदानुक्रम (ब्लॉक से वार्ड)",
    "एक्सेल एवं सीएसवी डाटा डाउनलोड"
  ];

  const citizenFeatures = lang === 'en' ? [
    "Instant Mobile Number & OTP Login",
    "Multilingual Language Switcher",
    "Jan Samasya Direct Issue Filing with Photo",
    "1-Click Custom Poster Generator",
    "Verified Digital Party Membership ID Card",
    "Ward-Wise Public Infrastructure Tracking",
    "Public Polls & Opinion Voting",
    "Campaign Rallies Calendar with 1-Tap RSVP"
  ] : [
    "मोबाइल नंबर एवं फास्ट ओटीपी लॉगिन",
    "हिन्दी व अन्य भाषाओं का चयन",
    "जन समस्या फोटो सहित दर्ज करने की सुविधा",
    "1-क्लिक व्यक्तिगत पोस्टर स्टूडियो",
    "सत्यापित डिजिटल पार्टी सदस्यता कार्ड",
    "वार्ड-अनुसार विकास कार्य प्रगति",
    "जनमत सर्वेक्षण में मतदान",
    "जनसभा व रैली कार्यक्रम में उपस्थिति"
  ];

  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-7 shadow-xs">
      {/* Switcher Tab Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-5 border-b border-slate-200">
        <div>
          <span className="text-[#0c2340] text-[11px] font-black uppercase tracking-widest">{t.tabs.tag}</span>
          <h3 className="font-heading font-black text-xl sm:text-2xl text-[#0c2340] tracking-tight mt-0.5">
            {t.tabs.title}
          </h3>
        </div>

        <div className="flex p-1 rounded-xl bg-slate-100 border border-slate-200">
          <button
            onClick={() => setActiveTab('admin')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-extrabold text-xs transition-all cursor-pointer ${
              activeTab === 'admin'
                ? 'bg-[#0c2340] text-white shadow-xs'
                : 'text-slate-700 hover:text-[#0c2340]'
            }`}
          >
            <HiOutlineComputerDesktop className="w-3.5 h-3.5" />
            <span>{t.tabs.adminTab}</span>
          </button>

          <button
            onClick={() => setActiveTab('citizen')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-extrabold text-xs transition-all cursor-pointer ${
              activeTab === 'citizen'
                ? 'bg-[#f26522] text-white shadow-xs'
                : 'text-slate-700 hover:text-[#f26522]'
            }`}
          >
            <HiOutlineDevicePhoneMobile className="w-3.5 h-3.5" />
            <span>{t.tabs.citizenTab}</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Super Admin */}
      {activeTab === 'admin' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-5 animate-fadeIn">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-50 border border-orange-200 text-[#0c2340] text-[11px] font-black">
              <HiOutlineShieldCheck className="w-3.5 h-3.5 text-[#f26522]" />
              <span>{t.tabs.adminBadge}</span>
            </div>

            <h4 className="font-heading font-black text-lg sm:text-xl text-[#0c2340]">
              {t.tabs.adminHeading}
            </h4>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              {t.tabs.adminDesc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              {adminFeatures.map((item, idx) => (
                <div key={idx} className="flex items-start gap-1.5 text-xs font-semibold text-slate-800">
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-100 text-[#0a8543] flex items-center justify-center shrink-0 mt-0.5">
                    <HiOutlineCheck className="w-2.5 h-2.5" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenDemoModal}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-xs text-white bg-[#f26522] hover:bg-[#d95314] shadow-2xs shadow-orange-500/20 transition-all hover:scale-102 cursor-pointer"
              >
                <span>{t.tabs.adminBtn}</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-xl bg-slate-50 border border-slate-300 p-4 shadow-2xs space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-800 ml-1.5">{t.tabs.adminConsole}</span>
                </div>
                <span className="text-[9px] bg-emerald-100 text-emerald-900 border border-emerald-300 px-2 py-0.5 rounded-full font-bold">{t.tabs.liveActive}</span>
              </div>

              {/* Simulated Admin Dashboard Metrics */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-2xs">
                  <span className="text-[9px] text-slate-600 uppercase font-bold">{t.tabs.totalCitizens}</span>
                  <div className="font-heading font-black text-base text-slate-950">48,290</div>
                  <span className="text-[8px] text-emerald-700 font-bold">+14% {lang === 'en' ? 'increase' : 'वृद्धि'}</span>
                </div>
                <div className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-2xs">
                  <span className="text-[9px] text-slate-600 uppercase font-bold">{t.tabs.complaintsRate}</span>
                  <div className="font-heading font-black text-base text-sky-700">98.4%</div>
                  <span className="text-[8px] text-slate-600">{lang === 'en' ? 'Resolved' : 'निस्तारित'}</span>
                </div>
                <div className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-2xs">
                  <span className="text-[9px] text-slate-600 uppercase font-bold">{t.tabs.activePolls}</span>
                  <div className="font-heading font-black text-base text-blue-700">6 {lang === 'en' ? 'Live' : 'लाइव'}</div>
                  <span className="text-[8px] text-blue-700 font-semibold">12,400 {lang === 'en' ? 'Votes' : 'वोट'}</span>
                </div>
              </div>

              <div className="bg-white p-3 rounded-lg border border-slate-200 space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-900">
                  <span>{t.tabs.activityStream}</span>
                  <span className="text-[9px] text-sky-700 font-bold">{lang === 'en' ? 'Live Feed' : 'लाइव'}</span>
                </div>
                <div className="space-y-1 text-[11px] text-slate-800 font-medium">
                  <div className="bg-slate-50 p-1.5 rounded flex items-center justify-between">
                    <span>{t.tabs.stream1}</span>
                    <span className="text-slate-500 text-[9px]">{lang === 'en' ? '2m ago' : '2m पूर्व'}</span>
                  </div>
                  <div className="bg-slate-50 p-1.5 rounded flex items-center justify-between">
                    <span>{t.tabs.stream2}</span>
                    <span className="text-emerald-700 font-bold text-[9px]">100% {lang === 'en' ? 'Delivered' : 'डिलीवर'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Citizen Mobile App */}
      {activeTab === 'citizen' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-5 animate-fadeIn">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-100 border border-sky-300 text-sky-900 text-[11px] font-bold">
              <HiOutlineDevicePhoneMobile className="w-3.5 h-3.5 text-sky-700" />
              <span>{t.tabs.citizenBadge}</span>
            </div>

            <h4 className="font-heading font-black text-lg sm:text-xl text-slate-950">
              {t.tabs.citizenHeading}
            </h4>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              {t.tabs.citizenDesc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              {citizenFeatures.map((item, idx) => (
                <div key={idx} className="flex items-start gap-1.5 text-xs font-semibold text-slate-800">
                  <div className="w-3.5 h-3.5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                    <HiOutlineCheck className="w-2.5 h-2.5" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenDemoModal}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-xs text-white bg-sky-600 hover:bg-sky-700 shadow-2xs transition-all hover:scale-102 cursor-pointer"
              >
                <span>{t.tabs.citizenBtn}</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            {/* Clean Mobile Phone Mockup */}
            <div className="relative w-56 aspect-[9/18] bg-white rounded-[32px] border-3 border-sky-300 shadow-lg p-2.5 flex flex-col justify-between overflow-hidden">
              {/* Notch */}
              <div className="w-18 h-3 bg-slate-200 rounded-full mx-auto mb-1.5"></div>

              {/* App Content */}
              <div className="flex-1 space-y-2 overflow-hidden text-slate-900">
                {/* Header */}
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
                  <span className="font-heading font-black text-xs text-sky-700">{brand.name}</span>
                  <span className="text-[8px] bg-sky-100 text-sky-900 font-bold px-1.5 py-0.2 rounded-full border border-sky-200">
                    {lang === 'hi' ? '🇮🇳 हिन्दी' : '🇬🇧 English'}
                  </span>
                </div>

                {/* Banner */}
                <div className="h-20 rounded-lg bg-gradient-to-r from-sky-600 to-blue-600 text-white p-2 flex flex-col justify-between shadow-2xs">
                  <span className="text-[8px] bg-white/25 px-1 py-0.2 rounded w-fit font-bold">{t.tabs.notice}</span>
                  <p className="text-[10px] font-bold leading-tight">{t.tabs.sampleNotice}</p>
                </div>

                {/* Quick grid */}
                <div className="grid grid-cols-3 gap-1 text-center text-[9px] font-bold">
                  <div className="bg-slate-50 p-1.5 rounded border border-slate-200">
                    <span className="text-sm block">📋</span>
                    <span className="text-slate-800">{lang === 'en' ? 'Grievance' : 'समस्या'}</span>
                  </div>
                  <div className="bg-slate-50 p-1.5 rounded border border-slate-200">
                    <span className="text-sm block">🎨</span>
                    <span className="text-slate-800">{lang === 'en' ? 'Poster' : 'पोस्टर'}</span>
                  </div>
                  <div className="bg-slate-50 p-1.5 rounded border border-slate-200">
                    <span className="text-sm block">🏗️</span>
                    <span className="text-slate-800">{lang === 'en' ? 'Works' : 'विकास'}</span>
                  </div>
                </div>

                {/* Leader Message Card */}
                <div className="bg-sky-50 p-2 rounded border border-sky-200 space-y-0.5">
                  <span className="text-[8px] text-sky-800 font-bold uppercase">{t.tabs.leaderMessage}</span>
                  <p className="text-[9px] text-slate-800 leading-snug font-medium">{t.tabs.leaderQuote}</p>
                </div>
              </div>

              {/* Bottom Nav Simulation */}
              <div className="pt-1.5 border-t border-slate-200 flex justify-around text-[8px] font-bold text-slate-600">
                <span className="text-sky-700 font-black">{t.tabs.navHome}</span>
                <span>{t.tabs.navLeader}</span>
                <span>{t.tabs.navWorks}</span>
                <span>{t.tabs.navEvents}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
