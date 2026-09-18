import React from 'react';
import { HiOutlineMapPin, HiOutlineBuildingOffice, HiOutlineHomeModern, HiOutlineUserGroup, HiOutlineArrowRight } from 'react-icons/hi2';
import { useLanguage } from '../context/LanguageContext';
import { getHierarchyLevels } from '../data/platformData';

export default function HierarchyMap() {
  const icons = [HiOutlineBuildingOffice, HiOutlineHomeModern, HiOutlineUserGroup, HiOutlineMapPin];
  const { lang, t } = useLanguage();
  const levels = getHierarchyLevels(lang);

  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-7 shadow-xs">
      <div className="text-center max-w-xl mx-auto mb-6">
        <span className="text-sky-900 text-xs font-extrabold uppercase tracking-widest bg-sky-100 border border-sky-300 px-3 py-0.5 rounded-full">
          {t.hierarchySection.tag}
        </span>
        <h3 className="font-heading font-black text-xl sm:text-2xl text-slate-950 tracking-tight mt-1.5">
          {t.hierarchySection.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-700 mt-1 font-medium">
          {t.hierarchySection.desc}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 relative">
        {levels.map((level, idx) => {
          const Icon = icons[idx];
          return (
            <div
              key={idx}
              className="relative p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-400 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 border border-sky-200 text-sky-700 flex items-center justify-center group-hover:scale-105 transition-transform shadow-2xs font-bold">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] font-extrabold uppercase text-sky-900 bg-sky-100 border border-sky-300 px-1.5 py-0.2 rounded">
                    {level.level}
                  </span>
                </div>

                <h4 className="font-heading font-black text-sm text-slate-950 group-hover:text-sky-700 transition-colors">
                  {level.name}
                </h4>

                <p className="text-xs text-slate-700 leading-snug font-medium">
                  {level.desc}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-200 flex items-center justify-between text-xs font-semibold">
                <span className="text-slate-600">{t.hierarchySection.avgCap}</span>
                <span className="font-bold text-sky-800">{level.count}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Organizational Flow Arrow Indicator */}
      <div className="mt-5 p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-700 font-semibold">
        <span className="font-bold text-slate-950">{t.hierarchySection.flowTitle}</span>
        <span className="text-sky-800 font-bold">{t.hierarchySection.lvl1}</span>
        <HiOutlineArrowRight className="w-3 h-3 text-slate-400" />
        <span className="text-sky-800 font-bold">{t.hierarchySection.lvl2}</span>
        <HiOutlineArrowRight className="w-3 h-3 text-slate-400" />
        <span className="text-sky-800 font-bold">{t.hierarchySection.lvl3}</span>
        <HiOutlineArrowRight className="w-3 h-3 text-slate-400" />
        <span className="text-blue-800 font-bold">{t.hierarchySection.lvl4}</span>
      </div>
    </div>
  );
}
