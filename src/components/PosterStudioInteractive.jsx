import React, { useState, useEffect } from 'react';
import { 
  HiOutlineArrowDownTray, 
  HiOutlineUser, 
  HiOutlineCheckBadge,
  HiOutlineBolt
} from 'react-icons/hi2';
import { FaWhatsapp } from 'react-icons/fa';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';
import { getPosterTemplatesSample, getBrandInfo } from '../data/platformData';

export default function PosterStudioInteractive() {
  const { lang, t } = useLanguage();
  const brand = getBrandInfo(lang);
  const templates = getPosterTemplatesSample(lang);

  const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);
  const [userName, setUserName] = useState(t.poster.sampleName);
  const [userDesignation, setUserDesignation] = useState(t.poster.sampleDesignation);
  const [avatarIndex, setAvatarIndex] = useState(0);

  // Update default name/designation when language changes if not manually overridden
  useEffect(() => {
    setSelectedTemplate(templates[0]);
    setUserName(t.poster.sampleName);
    setUserDesignation(t.poster.sampleDesignation);
  }, [lang]);

  const sampleAvatars = [
    { label: 'Avatar 1', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80' },
    { label: 'Avatar 2', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80' },
    { label: 'Avatar 3', url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80' },
    { label: 'Avatar 4', url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80' }
  ];

  const handleTriggerShare = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 }
    });

    const shareMsg = encodeURIComponent(
      `*${brand.name} Poster Studio*\n\nSupporter: ${userName} (${userDesignation})\n\nContact / WhatsApp: +91 91409 67607`
    );
    window.open(`https://wa.me/?text=${shareMsg}`, '_blank');
  };

  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-7 shadow-xs relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left: Interactive Controls */}
        <div className="lg:col-span-6 space-y-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-100 border border-sky-300 text-sky-900 text-[11px] font-bold uppercase tracking-wider mb-2">
              <HiOutlineBolt className="w-3.5 h-3.5 text-sky-700" />
              <span>{t.poster.tag}</span>
            </div>
            <h3 className="font-heading font-black text-xl sm:text-2xl text-slate-950 tracking-tight">
              {t.poster.title}
            </h3>
            <p className="text-slate-700 text-xs sm:text-sm mt-1 leading-relaxed font-medium">
              {t.poster.desc}
            </p>
          </div>

          {/* 1. Pick Template */}
          <div>
            <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
              {t.poster.step1}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {templates.map((tmpl) => (
                <button
                  key={tmpl.id}
                  onClick={() => setSelectedTemplate(tmpl)}
                  className={`p-2 rounded-xl border text-left transition-all ${
                    selectedTemplate.id === tmpl.id
                      ? 'border-sky-600 bg-sky-50 ring-2 ring-sky-500/20 shadow-2xs'
                      : 'border-slate-300 bg-slate-50 hover:border-sky-400'
                  }`}
                >
                  <span className="text-[9px] font-extrabold text-sky-800 block">{tmpl.tag}</span>
                  <span className="text-xs font-bold text-slate-950 truncate block mt-0.5">{tmpl.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Customize text */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div>
              <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                {t.poster.nameLabel}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400">
                  <HiOutlineUser className="w-3.5 h-3.5" />
                </div>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Enter name"
                  className="w-full pl-8 pr-2.5 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-950 focus:outline-hidden focus:border-sky-600 focus:bg-white font-semibold"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                {t.poster.designationLabel}
              </label>
              <input
                type="text"
                value={userDesignation}
                onChange={(e) => setUserDesignation(e.target.value)}
                placeholder="Enter designation"
                className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-950 focus:outline-hidden focus:border-sky-600 focus:bg-white font-semibold"
              />
            </div>
          </div>

          {/* 3. Pick Avatar */}
          <div>
            <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
              {t.poster.photoLabel}
            </label>
            <div className="flex items-center gap-2">
              {sampleAvatars.map((av, idx) => (
                <button
                  key={idx}
                  onClick={() => setAvatarIndex(idx)}
                  className={`w-9 h-9 rounded-full overflow-hidden border-2 transition-all ${
                    avatarIndex === idx
                      ? 'border-sky-600 scale-105 ring-2 ring-sky-500/20'
                      : 'border-slate-300 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={av.url} alt={av.label} className="w-full h-full object-cover" />
                </button>
              ))}
              <span className="text-xs text-slate-600 ml-1 font-medium italic">{t.poster.autoCrop}</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-1 flex flex-wrap gap-2.5">
            <button
              onClick={handleTriggerShare}
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-500 shadow-2xs transition-all hover:scale-102 cursor-pointer"
            >
              <FaWhatsapp className="w-3.5 h-3.5" />
              <span>{t.poster.shareBtn}</span>
            </button>

            <button
              onClick={() => {
                confetti({ particleCount: 40 });
                alert(lang === 'hi' ? 'पोस्टर सफलतापूर्वक तैयार हो गया!' : 'HD Poster generated successfully!');
              }}
              className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg font-bold text-xs text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all cursor-pointer"
            >
              <HiOutlineArrowDownTray className="w-3.5 h-3.5 text-sky-600" />
              <span>{t.poster.downloadBtn}</span>
            </button>
          </div>
        </div>

        {/* Right: Dynamic High-Res Poster Preview inside Sleek Phone Mockup */}
        <div className="lg:col-span-6 flex justify-center">
          {/* Realistic Phone Mockup Frame */}
          <div className="relative w-full max-w-[280px] sm:max-w-[300px] rounded-[2.5rem] p-3 bg-slate-950 shadow-2xl border-4 border-slate-800 ring-1 ring-slate-700/50">
            {/* Phone Top Notch / Speaker & Camera */}
            <div className="flex items-center justify-between px-4 pb-2 pt-0.5 text-[10px] text-slate-400 font-mono">
              <span className="font-bold text-white">9:41</span>
              <div className="w-16 h-3.5 bg-slate-900 rounded-full flex items-center justify-center gap-1.5 border border-slate-800">
                <div className="w-2 h-2 rounded-full bg-slate-950 border border-slate-700"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80"></div>
              </div>
              <div className="flex items-center gap-1 text-[9px]">
                <span>5G</span>
                <span>100%</span>
              </div>
            </div>

            {/* Inner Phone Screen */}
            <div className="relative aspect-[9/17] rounded-[1.8rem] overflow-hidden bg-slate-900 border border-slate-800 flex flex-col shadow-inner">
              
              {/* App Bar inside phone */}
              <div className="bg-slate-900/95 px-3 py-1.5 border-b border-slate-800 flex items-center justify-between text-white z-20">
                <span className="text-[10px] font-black text-amber-400 uppercase tracking-wide">
                  {brand.name} Studio
                </span>
                <span className="px-1.5 py-0.2 rounded bg-emerald-950 border border-emerald-500/40 text-emerald-400 text-[9px] font-bold">
                  HD 1080p
                </span>
              </div>

              {/* Poster Canvas */}
              <div className={`w-full flex-1 bg-gradient-to-br ${selectedTemplate.bgGradient} p-3 flex flex-col justify-between relative text-white select-none overflow-hidden`}>
                
                {/* Top: Header & Leader Profile */}
                <div className="relative z-10 space-y-1.5">
                  <div className="flex items-center justify-between border-b border-white/20 pb-1.5">
                    <div>
                      <span className="text-[9px] uppercase font-extrabold tracking-widest text-sky-200 block">
                        {selectedTemplate.tag}
                      </span>
                      <h4 className="font-heading font-black text-xs sm:text-sm tracking-tight text-white leading-tight">
                        {selectedTemplate.title}
                      </h4>
                    </div>
                    <div className="w-6 h-6 rounded-md bg-white/20 backdrop-blur-md flex items-center justify-center text-amber-300 font-bold text-[10px] border border-white/30 shrink-0">
                      🇮🇳
                    </div>
                  </div>

                  {/* Candidate Spotlight Banner */}
                  <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md p-1.5 rounded-lg border border-white/15">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-400 to-sky-400 p-0.5 shrink-0">
                      <img
                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80"
                        alt="Leader"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[8px] text-sky-200 font-bold uppercase tracking-wider block">
                        {t.poster.leaderTitle}
                      </span>
                      <span className="text-[10px] font-bold text-white truncate block">
                        {selectedTemplate.leader}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Center: Quote */}
                <div className="relative z-10 my-auto text-center py-2 px-1">
                  <p className="font-heading font-black text-xs sm:text-sm text-amber-300 tracking-wide leading-snug drop-shadow-md">
                    "{selectedTemplate.quote}"
                  </p>
                  <div className="w-10 h-0.5 bg-white/40 mx-auto rounded-full mt-1.5"></div>
                </div>

                {/* Bottom: Dynamic Supporter Overlay */}
                <div className="relative z-10 bg-slate-950/90 backdrop-blur-xl p-2 rounded-xl border border-white/20 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="relative shrink-0">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-400 to-amber-300 p-0.5">
                        <img
                          src={sampleAvatars[avatarIndex].url}
                          alt="Supporter"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full flex items-center justify-center text-white border border-slate-950">
                        <HiOutlineCheckBadge className="w-2 h-2" />
                      </div>
                    </div>

                    <div className="min-w-0 flex-1">
                      <span className="text-[7.5px] text-sky-300 font-bold uppercase tracking-wider block">
                        {t.poster.nivedak}
                      </span>
                      <h5 className="font-heading font-extrabold text-[11px] text-white truncate">
                        {userName || t.poster.sampleName}
                      </h5>
                      <p className="text-[9px] text-slate-300 truncate">
                        {userDesignation || t.poster.sampleDesignation}
                      </p>
                    </div>
                  </div>

                  <div className="mt-1 pt-1 border-t border-white/10 flex items-center justify-between text-[7.5px] text-slate-400 font-mono">
                    <span>{brand.name}</span>
                    <span className="text-emerald-400 font-semibold">{t.poster.officialBadge}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Home Bar */}
            <div className="w-20 h-1 bg-slate-700 rounded-full mx-auto mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
