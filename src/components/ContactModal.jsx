import React, { useState } from 'react';
import { 
  HiOutlineXMark, 
  HiOutlineSparkles, 
  HiOutlinePhone, 
  HiOutlineBuildingLibrary, 
  HiOutlineUser,
  HiOutlineCheckBadge
} from 'react-icons/hi2';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { CONTACT_INFO, getBrandInfo } from '../data/platformData';
import { submitWebsiteInquiry } from '../services/inquiryApi';
import confetti from 'canvas-confetti';

export default function ContactModal({ isOpen, onClose }) {
  const { t, lang } = useLanguage();
  const brand = getBrandInfo(lang);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    role: lang === 'hi' ? 'विधायक / प्रत्याशी' : 'MLA / Candidate',
    constituency: '',
    state: lang === 'hi' ? 'उत्तर प्रदेश' : 'Uttar Pradesh',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Save to Database via Backend API
    try {
      await submitWebsiteInquiry({
        name: formData.name,
        phone: formData.phone,
        role: formData.role,
        constituency: formData.constituency,
        state: formData.state,
        message: formData.message,
        source: 'website_demo_modal'
      });
    } catch (err) {
      console.warn('API submission failed, continuing with WhatsApp direct:', err);
    }

    setSubmitted(true);
    setSubmitting(false);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    const waText = encodeURIComponent(
      `*New Demo Request - ${brand.name}*\n\n` +
      `👤 Name: ${formData.name}\n` +
      `📞 Phone: ${formData.phone}\n` +
      `🏛️ Role: ${formData.role}\n` +
      `📍 Constituency: ${formData.constituency}, ${formData.state}\n` +
      `💬 Message: ${formData.message || 'Please provide a live demo of the Vikas Darpan platform.'}`
    );
    
    setTimeout(() => {
      window.open(`https://wa.me/919140967607?text=${waText}`, '_blank');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-white border border-slate-300 rounded-2xl shadow-2xl overflow-hidden p-5 sm:p-7 text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
        >
          <HiOutlineXMark className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-1.5 text-sky-800 font-extrabold text-[11px] uppercase tracking-wider mb-1.5">
              <HiOutlineSparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>{t.modal.badge}</span>
            </div>
            <h3 className="font-heading font-black text-xl text-slate-950 tracking-tight mb-0.5">
              {t.modal.title}
            </h3>
            <p className="text-xs text-slate-700 font-medium mb-4">
              {t.modal.desc}
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-900 mb-1">{t.modal.nameLabel}</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400">
                    <HiOutlineUser className="w-3.5 h-3.5" />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder={lang === 'hi' ? "उदा. शैलेन्द्र वर्मा" : "e.g. Shailendra Verma"}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-8 pr-2.5 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-950 font-medium focus:outline-hidden focus:border-sky-600 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-1">{t.modal.phoneLabel}</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400">
                      <HiOutlinePhone className="w-3.5 h-3.5" />
                    </div>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-8 pr-2.5 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-950 font-medium focus:outline-hidden focus:border-sky-600 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-1">{t.modal.roleLabel}</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-2.5 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-950 font-medium focus:outline-hidden focus:border-sky-600 focus:bg-white transition-all"
                  >
                    <option value={lang === 'hi' ? "विधायक / विधानसभा प्रत्याशी" : "MLA / Assembly Candidate"}>{lang === 'hi' ? "विधायक / विधानसभा प्रत्याशी" : "MLA / Assembly Candidate"}</option>
                    <option value={lang === 'hi' ? "सांसद / लोकसभा प्रत्याशी" : "MP / Parliamentary Candidate"}>{lang === 'hi' ? "सांसद / लोकसभा प्रत्याशी" : "MP / Parliamentary Candidate"}</option>
                    <option value={lang === 'hi' ? "जिला पंचायत / नगर अध्यक्ष" : "Zila Panchayat / Mayor / Chairman"}>{lang === 'hi' ? "जिला पंचायत / नगर अध्यक्ष" : "Zila Panchayat / Mayor / Chairman"}</option>
                    <option value={lang === 'hi' ? "अभियान प्रभारी / आईटी सेल" : "Campaign Director / IT Cell"}>{lang === 'hi' ? "अभियान प्रभारी / आईटी सेल" : "Campaign Director / IT Cell"}</option>
                    <option value={lang === 'hi' ? "संगठन पदाधिकारी" : "Party Official / Supporter"}>{lang === 'hi' ? "संगठन पदाधिकारी" : "Party Official / Supporter"}</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-1">{t.modal.areaLabel}</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400">
                      <HiOutlineBuildingLibrary className="w-3.5 h-3.5" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder={lang === 'hi' ? "उदा. लखनऊ उत्तर" : "e.g. Lucknow North"}
                      value={formData.constituency}
                      onChange={(e) => setFormData({ ...formData, constituency: e.target.value })}
                      className="w-full pl-8 pr-2.5 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-950 font-medium focus:outline-hidden focus:border-sky-600 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-1">{t.modal.stateLabel}</label>
                  <input
                    type="text"
                    placeholder={lang === 'hi' ? "उदा. उत्तर प्रदेश" : "e.g. Uttar Pradesh"}
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-2.5 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-950 font-medium focus:outline-hidden focus:border-sky-600 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-900 mb-1">{t.modal.msgLabel}</label>
                <textarea
                  rows={2}
                  placeholder={lang === 'hi' ? "कस्टम पोस्टर टेम्पलेट, बूथ डाटा प्रबंधन या कोई विशेष आवश्यकता..." : "Custom poster templates, voter booth data management or custom features..."}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-950 font-medium focus:outline-hidden focus:border-sky-600 focus:bg-white transition-all"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-sky-600 hover:bg-sky-700 shadow-xs transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5"
              >
                <HiOutlineSparkles className="w-4 h-4" />
                <span>{t.modal.submitBtn}</span>
              </button>
            </form>

            <div className="mt-3 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
              <span>{t.modal.helpline}</span>
              <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="text-sky-700 font-extrabold hover:underline flex items-center gap-1">
                <HiOutlinePhone className="w-3.5 h-3.5" />
                {CONTACT_INFO.phone}
              </a>
            </div>
          </div>
        ) : (
          <div className="text-center py-6 space-y-3">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 border border-emerald-300 rounded-full flex items-center justify-center mx-auto">
              <HiOutlineCheckBadge className="w-7 h-7" />
            </div>
            <h3 className="font-heading font-black text-xl text-slate-950">{t.modal.thankYou}, {formData.name}!</h3>
            <p className="text-xs text-slate-700 max-w-xs mx-auto font-medium">
              {t.modal.thankYouMsg}
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>{t.modal.openWa}</span>
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="text-xs text-slate-600 hover:text-slate-900 py-1 font-semibold cursor-pointer"
              >
                {t.modal.closeBtn}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
