import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { HiOutlineLanguage, HiOutlineChevronDown, HiOutlineCheck } from 'react-icons/hi2';

export default function LanguageSelector({ variant = 'navbar' }) {
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'hi', label: 'हिन्दी', sub: 'Hindi', flag: '🇮🇳' },
    { code: 'en', label: 'English', sub: 'अंग्रेज़ी', flag: '🇬🇧' }
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = languages.find((l) => l.code === lang) || languages[0];

  if (variant === 'topbar') {
    return (
      <div className="flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-md text-[11px] font-bold text-white">
        <button
          onClick={() => setLang('hi')}
          className={`px-1.5 py-0.2 rounded transition-colors ${
            lang === 'hi' ? 'bg-sky-500 text-white font-black' : 'text-sky-100 hover:text-white'
          }`}
        >
          हिन्दी
        </button>
        <span className="text-sky-300 opacity-60">|</span>
        <button
          onClick={() => setLang('en')}
          className={`px-1.5 py-0.2 rounded transition-colors ${
            lang === 'en' ? 'bg-sky-500 text-white font-black' : 'text-sky-100 hover:text-white'
          }`}
        >
          EN
        </button>
      </div>
    );
  }

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-900 transition-all cursor-pointer shadow-2xs"
        aria-label="Change language"
      >
        <span className="text-sm leading-none">{currentLang.flag}</span>
        <span>{currentLang.label}</span>
        <HiOutlineChevronDown className={`w-3.5 h-3.5 text-slate-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-36 rounded-xl bg-white border border-slate-200 shadow-xl py-1 z-50 animate-fadeIn">
          <div className="px-2.5 py-1 text-[10px] font-bold text-slate-500 uppercase tracking-wider border-b border-slate-100">
            भाषा चुनें / Select
          </div>
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2 text-xs font-bold text-left transition-colors ${
                lang === l.code
                  ? 'bg-sky-50 text-sky-800'
                  : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-2">
                <span>{l.flag}</span>
                <div>
                  <span className="block leading-none">{l.label}</span>
                  <span className="text-[10px] font-normal text-slate-500">{l.sub}</span>
                </div>
              </div>
              {lang === l.code && <HiOutlineCheck className="w-4 h-4 text-sky-600" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
