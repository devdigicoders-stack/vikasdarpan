import React from 'react';
import { 
  HiOutlineCheckCircle, 
  HiOutlinePhone
} from 'react-icons/hi2';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { getPricingPlans, CONTACT_INFO, getBrandInfo } from '../data/platformData';

export default function PricingPage({ onOpenDemoModal }) {
  const { t, lang } = useLanguage();
  const brand = getBrandInfo(lang);
  const pricingPlans = getPricingPlans(lang);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-sky-900 text-xs font-extrabold uppercase tracking-widest bg-sky-100 border border-sky-300 px-3 py-1 rounded-full">
          {t.pricingSection.tag}
        </span>
        <h1 className="font-heading font-black text-3xl sm:text-4xl text-slate-950 tracking-tight">
          {brand.name} — {t.pricingSection.title}
        </h1>
        <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed">
          {t.pricingSection.desc}
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-2xl border p-5 flex flex-col justify-between transition-all bg-white shadow-xs ${
              plan.popular ? 'border-sky-500 ring-2 ring-sky-500/20 shadow-md' : 'border-slate-200'
            }`}
          >
            <div className="space-y-3">
              {plan.popular && (
                <span className="inline-block bg-sky-600 text-[10px] font-extrabold uppercase text-white px-2.5 py-0.5 rounded-full">
                  {t.pricingSection.popular}
                </span>
              )}

              <div>
                <h3 className="font-heading font-black text-lg text-slate-950">{plan.name}</h3>
                <p className="text-xs text-slate-600 mt-0.5 font-medium min-h-[32px]">{plan.target}</p>
              </div>

              <div className="pt-1">
                <span className="font-heading font-black text-2xl text-slate-950">{plan.price}</span>
                <span className="text-xs text-slate-600 ml-1 font-semibold">/ {plan.period}</span>
              </div>

              <ul className="space-y-2 pt-3 border-t border-slate-200 text-xs font-semibold text-slate-800">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <HiOutlineCheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-200">
              <button
                onClick={onOpenDemoModal}
                className={`w-full py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                  plan.popular
                    ? 'bg-sky-600 text-white hover:bg-sky-700 shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300'
                }`}
              >
                {plan.ctaText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Comparison notes */}
      <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 text-center space-y-3 shadow-xs">
        <h3 className="font-heading font-black text-xl text-slate-950">{t.pricingSection.customQuoteTitle}</h3>
        <p className="text-xs sm:text-sm text-slate-700 max-w-xl mx-auto font-medium leading-relaxed">
          {t.pricingSection.customQuoteDesc}
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`tel:${CONTACT_INFO.phoneRaw}`}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-xl text-xs sm:text-sm font-bold text-slate-900 transition-all"
          >
            <HiOutlinePhone className="w-4 h-4 text-sky-600" />
            <span>{t.pricingSection.callPricing} {CONTACT_INFO.phone}</span>
          </a>
          <a
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 rounded-xl text-xs sm:text-sm font-bold text-white transition-all shadow-xs"
          >
            <FaWhatsapp className="w-4 h-4" />
            <span>{t.pricingSection.whatsappPricing}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
