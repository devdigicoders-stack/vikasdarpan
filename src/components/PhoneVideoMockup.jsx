import React from 'react';
import defaultPromoVideo from '../assets/meadia/admin-panel-promo.mp4';

export default function PhoneVideoMockup({ 
  videoSrc = defaultPromoVideo, 
  badge = "⚡ Live Platform Walkthrough", 
  badgeColor = "text-emerald-400 border-teal-500/40" 
}) {
  return (
    <div className="relative mx-auto flex flex-col items-center">
      {/* Ambient background glow */}
      <div className="absolute -inset-3 bg-gradient-to-tr from-emerald-500/25 via-amber-500/20 to-teal-500/25 rounded-[44px] blur-xl opacity-75 -z-10 animate-pulse pointer-events-none"></div>

      {/* Realistic, Sleek Smartphone Frame (Compact & elegant) */}
      <div className="relative w-[230px] sm:w-[250px] md:w-[265px] rounded-[36px] sm:rounded-[40px] bg-slate-950 p-2.5 sm:p-3 shadow-[0_20px_45px_rgba(0,0,0,0.7)] ring-1 ring-slate-800/90 border-2 border-slate-700">
        
        {/* Outer Bezel Buttons */}
        <div className="absolute -left-[5px] top-20 w-[2.5px] h-6 bg-slate-600 rounded-l-xs"></div>
        <div className="absolute -left-[5px] top-30 w-[2.5px] h-10 bg-slate-600 rounded-l-xs"></div>
        <div className="absolute -left-[5px] top-42 w-[2.5px] h-10 bg-slate-600 rounded-l-xs"></div>
        <div className="absolute -right-[5px] top-24 w-[2.5px] h-12 bg-slate-600 rounded-r-xs"></div>

        {/* Screen Bezel (Clean & cropped so recorded phone top status bar is hidden) */}
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] bg-black aspect-[9/18.5] shadow-inner border border-slate-800">
          
          {/* Dynamic Island Pill at Top */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 h-4 w-20 bg-black rounded-full flex items-center justify-between px-2 shadow-md">
            <div className="w-2 h-2 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-blue-500/80"></div>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
          </div>

          {/* Autoplaying Video - Scaled & Translated to crop out recorded system battery/time status bar */}
          <div className="w-full h-full overflow-hidden relative">
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[106%] object-cover -mt-[5%] rounded-[28px] pointer-events-none select-none"
            />
          </div>

          {/* Bottom Home Swipe Bar */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-30 w-24 h-1 bg-white/70 rounded-full pointer-events-none"></div>
        </div>
      </div>

      {/* Floating Badge below device */}
      {badge && (
        <div className={`mt-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border ${badgeColor} text-[11px] font-bold shadow-md`}>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
          <span>{badge}</span>
        </div>
      )}
    </div>
  );
}
