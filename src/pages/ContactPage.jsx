import React, { useState } from 'react';
import { 
  HiOutlinePhone, 
  HiOutlineMapPin, 
  HiOutlineSparkles, 
  HiOutlineBuildingLibrary,
  HiOutlineUser,
  HiOutlineCheckBadge
} from 'react-icons/hi2';
import { FaWhatsapp, FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';
import { CONTACT_INFO, SOCIAL_LINKS, getBrandInfo } from '../data/platformData';

export default function ContactPage() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 70, spread: 60 });

    const waText = encodeURIComponent(
      `*New Inquiry - ${brand.name} Contact Form*\n\n` +
      `👤 Name: ${formData.name}\n` +
      `📞 Phone: ${formData.phone}\n` +
      `🏛️ Role: ${formData.role}\n` +
      `📍 Constituency: ${formData.constituency}, ${formData.state}\n` +
      `💬 Message: ${formData.message || 'I want to discuss deploying the Vikas Darpan platform for my constituency.'}`
    );
    
    setTimeout(() => {
      window.open(`https://wa.me/919140967607?text=${waText}`, '_blank');
    }, 1000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-[#0c2340] text-xs font-black uppercase tracking-widest bg-orange-50 border border-orange-200 px-3.5 py-1 rounded-full">
          {lang === 'hi' ? 'सीधा संपर्क व सहयोग' : 'Direct Support & Hotline'}
        </span>
        <h1 className="font-heading font-black text-3xl sm:text-4xl text-[#0c2340] tracking-tight">
          {lang === 'hi' ? 'हमारी तकनीकी टीम से संपर्क करें' : 'Get in Touch with Our Platform Strategists'}
        </h1>
        <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed">
          {lang === 'hi' 
            ? 'अपने क्षेत्र में डिजिटल मंच शुरू करने, कस्टमाइजेशन या डेमो देखने के लिए सीधे कॉल अथवा व्हाट्सएप पर बात करें।'
            : 'Speak with our political technology specialists to deploy Vikas Darpan, request custom branding, or schedule a 1-on-1 walkthrough.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Contact Info & Hotline Cards */}
        <div className="lg:col-span-5 space-y-4">
          {/* Direct Call Card */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#f26522] border border-orange-200 flex items-center justify-center">
                <HiOutlinePhone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase text-slate-500">
                  {lang === 'hi' ? 'हेल्पलाइन फोन नंबर' : 'Helpline Phone Hotline'}
                </span>
                <h4 className="font-heading font-black text-lg text-[#0c2340]">{CONTACT_INFO.phone}</h4>
              </div>
            </div>
            <p className="text-xs text-slate-700 font-medium">
              {lang === 'hi' 
                ? 'त्वरित जानकारी एवं ऑनबोर्डिंग सहायता के लिए हमारे वरिष्ठ सलाहकार से सीधे बात करें।' 
                : 'Connect directly with our senior constituency manager for instant setup and onboarding assistance.'}
            </p>
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-[#0c2340] hover:bg-[#16365f] text-white shadow-2xs transition-all"
            >
              <HiOutlinePhone className="w-4 h-4 text-[#0a8543]" />
              <span>{t.nav.callBtn}</span>
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0a8543] border border-emerald-200 flex items-center justify-center">
                <FaWhatsapp className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase text-slate-500">
                  {lang === 'hi' ? '24x7 व्हाट्सएप चैट' : '24x7 WhatsApp Desk'}
                </span>
                <h4 className="font-heading font-black text-lg text-[#0c2340]">{CONTACT_INFO.whatsapp}</h4>
              </div>
            </div>
            <p className="text-xs text-slate-700 font-medium">
              {lang === 'hi' 
                ? 'प्लेटफॉर्म विवरण, ब्रोशर पीडीएफ और कस्टम कोटेशन सीधे व्हाट्सएप पर प्राप्त करें।' 
                : 'Get feature brochures, PDF walkthroughs, and custom quotations sent directly to your WhatsApp.'}
            </p>
            <a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-[#0a8543] hover:bg-[#086b36] text-white shadow-2xs transition-all"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>{t.brand.whatsappChat}</span>
            </a>
          </div>

          {/* Office location card */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-1.5 text-xs text-slate-700 shadow-xs">
            <div className="flex items-center gap-2 text-slate-950 font-bold">
              <HiOutlineMapPin className="w-4 h-4 text-sky-600" />
              <span>{lang === 'hi' ? 'कार्यालय पता:' : 'Operational Headquarters:'}</span>
            </div>
            <p className="font-medium">{CONTACT_INFO.address}</p>
            <p className="text-sky-800 font-bold">{CONTACT_INFO.supportHours}</p>
          </div>

          {/* Social Media Connect card */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
            <span className="text-[10px] font-extrabold uppercase text-slate-500 tracking-wider">
              {lang === 'hi' ? 'सोशल मीडिया पर जुड़ें (DigiCoders)' : 'Connect on Social Media (DigiCoders)'}
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <a 
                href={SOCIAL_LINKS.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-pink-50 text-pink-700 border border-pink-200 hover:bg-pink-600 hover:text-white transition-all text-xs font-bold"
              >
                <FaInstagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
              <a 
                href={SOCIAL_LINKS.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-600 hover:text-white transition-all text-xs font-bold"
              >
                <FaFacebook className="w-3.5 h-3.5" />
                <span>Facebook</span>
              </a>
              <a 
                href={SOCIAL_LINKS.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-50 text-sky-700 border border-sky-200 hover:bg-sky-700 hover:text-white transition-all text-xs font-bold"
              >
                <FaLinkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a 
                href={SOCIAL_LINKS.whatsappChannel} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-600 hover:text-white transition-all text-xs font-bold"
              >
                <FaWhatsapp className="w-3.5 h-3.5" />
                <span>WhatsApp Channel</span>
              </a>
              <a 
                href={SOCIAL_LINKS.youtube} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 text-red-700 border border-red-200 hover:bg-red-600 hover:text-white transition-all text-xs font-bold"
              >
                <FaYoutube className="w-3.5 h-3.5" />
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right: Interactive Inquiry Form */}
        <div className="lg:col-span-7 p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
          {!submitted ? (
            <div className="space-y-4">
              <div>
                <span className="text-sky-800 text-xs font-extrabold uppercase tracking-wider">
                  {lang === 'hi' ? 'ऑनलाइन अनुरोध' : 'Online VIP Request'}
                </span>
                <h3 className="font-heading font-black text-xl text-slate-950 mt-0.5">
                  {lang === 'hi' ? 'अपने क्षेत्र का विवरण भेजें' : 'Send Your Constituency Details'}
                </h3>
                <p className="text-xs text-slate-600 font-medium">
                  {lang === 'hi' ? 'नीचे दिए गए फॉर्म को भरें, हमारी टीम शीघ्र आपसे संपर्क करेगी।' : 'Fill out the form below and our strategy team will reach out promptly.'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-1">{t.modal.nameLabel}</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <HiOutlineUser className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder={lang === 'hi' ? "उदा. रमेश चन्द्र" : "e.g. Ramesh Chandra"}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-950 font-medium focus:outline-hidden focus:border-sky-600 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-1">{t.modal.phoneLabel}</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <HiOutlinePhone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        required
                        placeholder="+91 91409 67607"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-950 font-medium focus:outline-hidden focus:border-sky-600 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-1">{t.modal.roleLabel}</label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-950 font-medium focus:outline-hidden focus:border-sky-600 focus:bg-white transition-all"
                    >
                      <option value={lang === 'hi' ? "विधायक / विधानसभा प्रत्याशी" : "MLA / Assembly Candidate"}>{lang === 'hi' ? "विधायक / विधानसभा प्रत्याशी" : "MLA / Assembly Candidate"}</option>
                      <option value={lang === 'hi' ? "सांसद / लोकसभा प्रत्याशी" : "MP / Parliamentary Candidate"}>{lang === 'hi' ? "सांसद / लोकसभा प्रत्याशी" : "MP / Parliamentary Candidate"}</option>
                      <option value={lang === 'hi' ? "जिला पंचायत / नगर अध्यक्ष" : "Zila Panchayat / Mayor / Chairman"}>{lang === 'hi' ? "जिला पंचायत / नगर अध्यक्ष" : "Zila Panchayat / Mayor / Chairman"}</option>
                      <option value={lang === 'hi' ? "अभियान प्रभारी / आईटी सेल" : "Campaign Director / IT Cell"}>{lang === 'hi' ? "अभियान प्रभारी / आईटी सेल" : "Campaign Director / IT Cell"}</option>
                      <option value={lang === 'hi' ? "संगठन पदाधिकारी" : "Party Official / Supporter"}>{lang === 'hi' ? "संगठन पदाधिकारी" : "Party Official / Supporter"}</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-1">{t.modal.areaLabel}</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <HiOutlineBuildingLibrary className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder={lang === 'hi' ? "उदा. गोरखपुर ग्रामीण" : "e.g. Gorakhpur Rural"}
                        value={formData.constituency}
                        onChange={(e) => setFormData({ ...formData, constituency: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-950 font-medium focus:outline-hidden focus:border-sky-600 focus:bg-white transition-all"
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
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-950 font-medium focus:outline-hidden focus:border-sky-600 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-1">{t.modal.msgLabel}</label>
                  <textarea
                    rows={2}
                    placeholder={lang === 'hi' ? "प्लेटफॉर्म ऑनबोर्डिंग या किसी विशेष सुविधा के बारे में लिखें..." : "Specify your constituency size, customized requirements or launch timelines..."}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-950 font-medium focus:outline-hidden focus:border-sky-600 focus:bg-white transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#f26522] hover:bg-[#d95314] shadow-xs shadow-orange-500/25 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <HiOutlineSparkles className="w-4 h-4" />
                  <span>{t.modal.submitBtn}</span>
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center py-10 space-y-3">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 border border-emerald-300 rounded-full flex items-center justify-center mx-auto">
                <HiOutlineCheckBadge className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-black text-xl text-slate-950">{t.modal.thankYou}, {formData.name}!</h3>
              <p className="text-xs text-slate-700 max-w-sm mx-auto font-medium">
                {t.modal.thankYouMsg}
              </p>
              <div className="pt-2">
                <a
                  href={CONTACT_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>{t.modal.openWa}</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
