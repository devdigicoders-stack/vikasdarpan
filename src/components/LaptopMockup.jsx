import React from 'react';
import promoVideo from '../assets/meadia/admin-panel-promo.mp4';

export default function LaptopMockup() {
  return (
    <div className="relative w-full max-w-[560px] lg:max-w-[620px] mx-auto filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)]">
      
      {/* Ambient background glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/20 via-orange-500/20 to-teal-500/20 rounded-full blur-2xl -z-10 opacity-70 animate-pulse"></div>

      {/* Screen Lid / Bezel Frame */}
      <div className="relative rounded-t-[18px] sm:rounded-t-[22px] border-[5px] sm:border-[8px] border-[#1e2530] bg-[#0c1017] p-1.5 sm:p-2 shadow-2xl">
        
        {/* Top Webcam indicator */}
        <div className="absolute top-1 sm:top-1.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-30">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-900 border border-slate-700"></div>
          <div className="w-1 h-1 rounded-full bg-emerald-400 animate-ping"></div>
        </div>

        {/* Video Display Container (Screen) */}
        <div className="relative overflow-hidden rounded-t-[10px] sm:rounded-t-[14px] bg-slate-950 aspect-[16/10] sm:aspect-[16/9.5] border border-slate-800">
          
          {/* Top Browser / App Mockup Bar */}
          <div className="h-6 bg-slate-900/90 backdrop-blur-xs border-b border-slate-800 flex items-center justify-between px-3 text-[10px] text-slate-400 select-none">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
            </div>
            <div className="px-3 py-0.5 rounded-md bg-slate-950/70 text-slate-300 text-[10px] font-mono border border-slate-800 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              election.digicoders.in/super-admin
            </div>
            <div className="text-[10px] font-semibold text-emerald-400">Live Active</div>
          </div>

          {/* Autoplaying Admin Video */}
          <video
            src={promoVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[calc(100%-24px)] object-cover bg-black pointer-events-none select-none"
          />
        </div>
      </div>

      {/* Laptop Keyboard Base & Hinge */}
      <div className="relative h-3 sm:h-4 bg-gradient-to-b from-[#2d3748] to-[#1a202c] rounded-b-[6px] sm:rounded-b-[8px] border-t border-slate-600 shadow-xl flex justify-center">
        {/* Notch for opening lid */}
        <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-[#4a5568] rounded-b-md mx-auto"></div>
      </div>

      {/* Under-chassis shadow stand */}
      <div className="h-1 sm:h-1.5 bg-gradient-to-r from-transparent via-[#10141d] to-transparent w-[94%] mx-auto opacity-90 rounded-full"></div>
    </div>
  );
}
