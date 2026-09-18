import React from 'react';
import { 
  HiOutlineSparkles, 
  HiOutlineCheckCircle, 
  HiOutlineArrowRight,
  HiOutlineShieldCheck
} from 'react-icons/hi2';
import { useLanguage } from '../context/LanguageContext';
import { getTenantModules, getBrandInfo } from '../data/platformData';

export default function FeaturesPage({ onOpenDemoModal }) {
  const { t, lang } = useLanguage();
  const brand = getBrandInfo(lang);
  const tenantModules = getTenantModules(lang);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-sky-900 text-xs font-extrabold uppercase tracking-widest bg-sky-100 border border-sky-300 px-3 py-1 rounded-full">
          {t.modulesSection.tag}
        </span>
        <h1 className="font-heading font-black text-3xl sm:text-4xl text-slate-950 tracking-tight">
          {brand.name} — {t.modulesSection.title}
        </h1>
        <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed">
          {t.modulesSection.desc}
        </p>

        <div className="pt-2 flex justify-center">
          <button
            onClick={onOpenDemoModal}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-sky-600 hover:bg-sky-700 text-white shadow-xs transition-all cursor-pointer"
          >
            <HiOutlineSparkles className="w-4 h-4" />
            <span>{t.brand.bookDemo}</span>
          </button>
        </div>
      </div>

      {/* Feature Deep Dive Cards */}
      <div className="space-y-6">
        {tenantModules.map((mod, index) => (
          <div
            id={mod.id}
            key={mod.id}
            className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-7 shadow-xs scroll-mt-24"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-5 space-y-3">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-sky-600 text-white">
                    {lang === 'hi' ? 'मॉड्यूल' : 'Module'} {index + 1}: {mod.badge}
                  </span>
                </div>

                <h2 className="font-heading font-black text-xl sm:text-2xl text-slate-950">
                  {mod.name}
                </h2>

                <p className="text-sky-800 font-bold text-xs">
                  {mod.tagline}
                </p>

                <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed">
                  {mod.description}
                </p>

                <div className="pt-1">
                  <button
                    onClick={onOpenDemoModal}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-900 cursor-pointer"
                  >
                    <span>{mod.name} — {lang === 'hi' ? 'विशेष डेमो प्राप्त करें' : 'Get Custom Demo'}</span>
                    <HiOutlineArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7 bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200 space-y-3">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                  {lang === 'hi' ? 'मुख्य कार्यप्रणाली एवं विशेषताएं' : 'Core Capabilities & Specifications'}
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {mod.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-900 bg-white p-2.5 rounded-lg border border-slate-200 font-medium">
                      <HiOutlineCheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-700 font-medium">
                  <span className="flex items-center gap-1 text-emerald-800 font-bold">
                    <HiOutlineShieldCheck className="w-3.5 h-3.5" />
                    {lang === 'hi' ? 'रोल-बेस्ड सुरक्षा' : 'Role-Based Security'}
                  </span>
                  <span>{lang === 'hi' ? 'प्रशासन व नागरिक दोनों स्तरों पर समन्वित' : 'Synchronized Admin & Citizen Access'}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
