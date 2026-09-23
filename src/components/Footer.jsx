import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HiOutlinePhone, 
  HiOutlineMapPin, 
  HiOutlineSparkles
} from 'react-icons/hi2';
import { FaWhatsapp, FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { CONTACT_INFO, SOCIAL_LINKS, getBrandInfo } from '../data/platformData';
import headerLogoImg from '../assets/header-logo.png';

export default function Footer() {
  const { t, lang } = useLanguage();
  const brand = getBrandInfo(lang);

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 relative overflow-hidden">
      {/* Top Brand Accent Bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#f26522] via-[#0c2340] to-[#0a8543]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-3">
            <Link to="/" className="inline-block group">
              <img 
                src={headerLogoImg} 
                alt={brand.name} 
                className="h-16 sm:h-20 w-auto object-contain transition-transform group-hover:scale-103"
              />
            </Link>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              {t.footer.desc}
            </p>

            <div className="pt-1 space-y-2 text-xs text-slate-700">
              <a 
                href={`tel:${CONTACT_INFO.phoneRaw}`} 
                className="flex items-center gap-2 hover:text-[#f26522] transition-colors"
              >
                <div className="w-6 h-6 rounded-md bg-orange-50 border border-orange-200 flex items-center justify-center text-[#f26522]">
                  <HiOutlinePhone className="w-3.5 h-3.5" />
                </div>
                <span className="font-bold text-xs text-slate-900">{t.brand.callUs} {CONTACT_INFO.phone}</span>
              </a>

              <a 
                href={CONTACT_INFO.whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#0a8543] transition-colors"
              >
                <div className="w-6 h-6 rounded-md bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#0a8543]">
                  <FaWhatsapp className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs">{t.brand.whatsappChat}: <strong className="text-slate-900">{CONTACT_INFO.phone}</strong></span>
              </a>

              <div className="flex items-center gap-2 text-slate-600 text-xs">
                <div className="w-6 h-6 rounded-md bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0c2340]">
                  <HiOutlineMapPin className="w-3.5 h-3.5" />
                </div>
                <span>{CONTACT_INFO.address}</span>
              </div>
            </div>

            {/* Social Icons (DigiCoders Official Channels - opens in new tab) */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                {lang === 'hi' ? 'सोशल मीडिया से जुड़ें' : 'Follow DigiCoders'}
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <a 
                  href={SOCIAL_LINKS.whatsappChannel} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="WhatsApp Channel (DigiCoders)" 
                  className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#0a8543] hover:bg-[#0a8543] hover:text-white transition-all shadow-xs hover:scale-105"
                >
                  <FaWhatsapp className="w-4 h-4" />
                </a>
                <a 
                  href={SOCIAL_LINKS.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="Instagram (DigiCoders Lucknow)" 
                  className="w-8 h-8 rounded-lg bg-pink-50 border border-pink-200 flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition-all shadow-xs hover:scale-105"
                >
                  <FaInstagram className="w-4 h-4" />
                </a>
                <a 
                  href={SOCIAL_LINKS.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="Facebook (DigiCoders Lucknow)" 
                  className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-xs hover:scale-105"
                >
                  <FaFacebook className="w-4 h-4" />
                </a>
                <a 
                  href={SOCIAL_LINKS.youtube} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="YouTube (DigiCoders Lucknow)" 
                  className="w-8 h-8 rounded-lg bg-red-50 border border-red-200 flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all shadow-xs hover:scale-105"
                >
                  <FaYoutube className="w-4 h-4" />
                </a>
                <a 
                  href={SOCIAL_LINKS.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="LinkedIn (DigiCoders Technologies)" 
                  className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-[#0c2340] hover:bg-[#0c2340] hover:text-white transition-all shadow-xs hover:scale-105"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#0c2340] font-black text-xs tracking-wider uppercase mb-3">{t.footer.pagesTitle}</h4>
            <ul className="space-y-1.5 text-xs font-medium">
              <li><a href="#home" className="hover:text-[#f26522] transition-colors">{lang === 'hi' ? 'होम' : 'Home'}</a></li>
              <li><a href="#admin-panel" className="hover:text-[#f26522] transition-colors">{lang === 'hi' ? 'प्रशासनिक हब' : 'Admin Panel'}</a></li>
              <li><a href="#citizen-app" className="hover:text-[#f26522] transition-colors">{lang === 'hi' ? 'नागरिक ऐप' : 'Citizen App'}</a></li>
              <li><a href="#modules" className="hover:text-[#f26522] transition-colors">{lang === 'hi' ? '11 मॉड्यूल्स' : '11 Tenant Modules'}</a></li>
              <li><a href="#hierarchy" className="hover:text-[#f26522] transition-colors">{lang === 'hi' ? '4-स्तरीय पदानुक्रम' : 'Hierarchy'}</a></li>
              <li><a href="#contact" className="hover:text-[#f26522] transition-colors">{lang === 'hi' ? 'संपर्क व डेमो' : 'Contact & Demo'}</a></li>
            </ul>
          </div>

          {/* Core Modules */}
          <div>
            <h4 className="text-[#0c2340] font-black text-xs tracking-wider uppercase mb-3">{t.footer.modulesTitle}</h4>
            <ul className="space-y-1.5 text-xs font-medium">
              <li><a href="#modules" className="hover:text-[#0a8543] transition-colors">{lang === 'hi' ? 'जन समस्या निवारण' : 'Grievance Redressal'}</a></li>
              <li><a href="#modules" className="hover:text-[#0a8543] transition-colors">{lang === 'hi' ? 'विकास कार्य रिपोर्ट कार्ड' : 'Public Works Tracker'}</a></li>
              <li><a href="#citizen-app" className="hover:text-[#0a8543] transition-colors">{lang === 'hi' ? 'पोस्टर स्टूडियो' : 'Dynamic Poster Studio'}</a></li>
              <li><a href="#citizen-app" className="hover:text-[#0a8543] transition-colors">{lang === 'hi' ? 'डिजिटल कार्यकर्ता आईडी' : 'Digital Worker ID Card'}</a></li>
              <li><a href="#modules" className="hover:text-[#0a8543] transition-colors">{lang === 'hi' ? 'जनमत सर्वेक्षण' : 'Constituency Polls'}</a></li>
              <li><a href="#modules" className="hover:text-[#0a8543] transition-colors">{lang === 'hi' ? 'रैली व कार्यक्रम कैलेंडर' : 'Event Calendar'}</a></li>
              <li><a href="#hierarchy" className="hover:text-[#0a8543] transition-colors">{lang === 'hi' ? '4-स्तरीय पदानुक्रम' : '4-Level Hierarchy'}</a></li>
            </ul>
          </div>

          {/* Consultation Box */}
          <div className="space-y-3">
            <h4 className="text-[#0c2340] font-black text-xs tracking-wider uppercase mb-3">{t.footer.consultTitle}</h4>
            
            <div className="p-3.5 rounded-xl bg-gradient-to-br from-orange-50/70 to-emerald-50/70 border border-orange-200/80 space-y-2">
              <span className="text-[11px] font-extrabold text-[#0c2340] flex items-center gap-1">
                <HiOutlineSparkles className="w-3.5 h-3.5 text-[#f26522]" />
                {lang === 'hi' ? 'तत्काल ऑनबोर्डिंग सहायता' : 'Instant Onboarding Help'}
              </span>
              <p className="text-[11px] text-slate-700 leading-snug">
                {t.footer.consultDesc}
              </p>
              <a 
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="inline-flex items-center gap-1 text-[11px] font-black text-[#f26522] hover:text-[#d95314]"
              >
                <span>{t.whyChoose.helplineCall} {CONTACT_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px]">
          <p>
            © {new Date().getFullYear()} {brand.name} (Vikas Darpan) — A Product by{' '}
            <a 
              href="https://digicoders.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#0c2340] hover:text-[#f26522] font-black underline decoration-orange-300 hover:decoration-[#f26522] transition-colors inline-flex items-center gap-1"
            >
              DigiCoders Technologies (P) Ltd.
            </a>{' '}
            | {t.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-[#f26522] transition-colors">{t.footer.privacy}</Link>
            <Link to="/terms" className="hover:text-[#f26522] transition-colors">{t.footer.terms}</Link>
            <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="text-[#0c2340] font-bold hover:underline">
              {CONTACT_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
