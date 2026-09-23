import React, { useState, useEffect } from 'react';
import { HiOutlineArrowLeft, HiOutlineArrowRight, HiOutlineXMark } from 'react-icons/hi2';

export default function AppScreensSlider({ 
  images = [], 
  title = "App Screenshots", 
  subtitle = "Interactive App Gallery",
  badge = "Screenshots",
  accentColor = "emerald" // emerald or orange or sky
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide every 3 seconds if not hovered or modal open
  useEffect(() => {
    if (isPaused || selectedImage || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isPaused, selectedImage, images.length]);

  if (!images || images.length === 0) return null;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const colorThemes = {
    emerald: {
      badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
      activeDot: "bg-emerald-500 w-8",
      hoverRing: "hover:border-emerald-500",
      accent: "text-emerald-600"
    },
    orange: {
      badge: "bg-orange-50 text-orange-700 border-orange-200",
      activeDot: "bg-orange-500 w-8",
      hoverRing: "hover:border-orange-500",
      accent: "text-orange-600"
    },
    sky: {
      badge: "bg-sky-50 text-sky-700 border-sky-200",
      activeDot: "bg-sky-500 w-8",
      hoverRing: "hover:border-sky-500",
      accent: "text-sky-600"
    }
  };

  const theme = colorThemes[accentColor] || colorThemes.emerald;

  return (
    <div 
      className="space-y-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Header section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider border ${theme.badge}`}>
            {badge}
          </span>
          <h3 className="font-heading font-black text-xl sm:text-2xl text-slate-900 mt-1">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            {subtitle}
          </p>
        </div>

        {/* Carousel controls */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            onClick={prevSlide}
            aria-label="Previous screenshot"
            className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-all cursor-pointer active:scale-95"
          >
            <HiOutlineArrowLeft className="w-4 h-4 stroke-[2.5]" />
          </button>
          <span className="text-xs font-bold text-slate-500 px-2 font-mono">
            {currentIndex + 1} / {images.length}
          </span>
          <button
            onClick={nextSlide}
            aria-label="Next screenshot"
            className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-all cursor-pointer active:scale-95"
          >
            <HiOutlineArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* Multi-item Continuous Responsive Slider track */}
      <div className="relative overflow-hidden rounded-2xl bg-slate-900/5 p-4 sm:p-6 border border-slate-200/80">
        <div 
          className="flex gap-4 sm:gap-6 transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * 260}px)`
          }}
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(img)}
              className={`shrink-0 w-[230px] sm:w-[250px] group cursor-pointer transition-all duration-300 transform hover:-translate-y-2`}
            >
              {/* Phone Mockup Frame */}
              <div className={`relative rounded-[2rem] p-2 bg-slate-900 shadow-xl border-2 border-slate-800 transition-all ${theme.hoverRing}`}>
                {/* Speaker pill */}
                <div className="w-16 h-3 bg-slate-800 rounded-full mx-auto mb-1 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-slate-900"></div>
                </div>

                {/* Screenshot Frame */}
                <div className="overflow-hidden rounded-[1.5rem] bg-black aspect-[9/19] relative">
                  <img
                    src={img}
                    alt={`Screenshot ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Click to zoom overlay */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1 bg-white/90 text-slate-950 text-[11px] font-bold rounded-full shadow-lg backdrop-blur-xs">
                      🔍 View Full
                    </span>
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="w-20 h-1 bg-slate-700 rounded-full mx-auto mt-2"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress dots bar */}
        <div className="flex items-center justify-center gap-1.5 mt-6">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex ? `${theme.activeDot}` : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox / Modal for zoom */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-h-[90vh] max-w-sm w-full bg-slate-950 rounded-3xl p-3 border border-slate-800 shadow-2xl animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-3 -right-3 w-9 h-9 bg-white text-slate-900 rounded-full shadow-lg flex items-center justify-center hover:bg-slate-200 transition-all z-10 cursor-pointer"
            >
              <HiOutlineXMark className="w-5 h-5 stroke-[2.5]" />
            </button>
            <div className="overflow-hidden rounded-2xl max-h-[80vh] flex items-center justify-center bg-black">
              <img
                src={selectedImage}
                alt="Enlarged screenshot"
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
