import React, { useState } from 'react';
import { 
  HiOutlineSparkles, 
  HiOutlinePhone, 
  HiOutlineArrowRight, 
  HiOutlineShieldCheck,
  HiOutlineCheckCircle,
  HiOutlineComputerDesktop,
  HiOutlineDevicePhoneMobile,
  HiOutlineUsers,
  HiOutlineMapPin,
  HiOutlineBuildingLibrary,
  HiOutlineUser,
  HiOutlineCheckBadge,
  HiOutlineCheck
} from 'react-icons/hi2';
import { 
  FaWhatsapp, 
  FaFacebook, 
  FaInstagram, 
  FaYoutube, 
  FaLinkedin 
} from 'react-icons/fa';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';
import { 
  CONTACT_INFO, 
  SOCIAL_LINKS,
  getBrandInfo,
  getCoreMetrics, 
  getTenantModules 
} from '../data/platformData';
import PosterStudioInteractive from '../components/PosterStudioInteractive';
import HierarchyMap from '../components/HierarchyMap';

export default function HomePage({ onOpenDemoModal }) {
  const { t, lang } = useLanguage();
  const brand = getBrandInfo(lang);
  const metrics = getCoreMetrics(lang);
  const tenantModules = getTenantModules(lang);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    role: lang === 'hi' ? 'विधायक / विधानसभा प्रत्याशी' : 'MLA / Candidate',
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
      `*New Inquiry - ${brand.name} Single-Page Contact*\n\n` +
      `👤 Name: ${formData.name}\n` +
      `📞 Phone: ${formData.phone}\n` +
      `🏛️ Role: ${formData.role}\n` +
      `📍 Constituency: ${formData.constituency}, ${formData.state}\n` +
      `💬 Message: ${formData.message || 'I am interested in deploying Vikas Darpan for my constituency.'}`
    );
    
    setTimeout(() => {
      window.open(`https://wa.me/919140967607?text=${waText}`, '_blank');
    }, 1000);
  };

  return (
    <div className="space-y-16 sm:space-y-20 pb-16 bg-slate-50">
      
      {/* 1. HERO & BRAND OVERVIEW SECTION */}
      <section id="home" className="scroll-mt-24 relative pt-12 pb-14 sm:pt-16 sm:pb-18 bg-gradient-to-b from-orange-50/50 via-white to-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-orange-200 text-[#0c2340] text-xs font-black shadow-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f26522] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f26522]"></span>
              </span>
              <span>{lang === 'hi' ? 'विकास दर्पण — जनता से जनहित तक | A Product by DigiCoders' : 'Vikas Darpan — Aapki Awaaz | Behtar Kal Ki Ore'}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-[42px] tracking-tight text-[#0c2340] leading-[1.2]">
              {brand.slogan1} —{' '}
              <span className="text-[#f26522] underline decoration-[#0a8543] decoration-wavy decoration-2">
                {brand.slogan2}
              </span>
            </h1>

            {/* Subtitle Recap */}
            <p className="text-xs sm:text-sm text-slate-700 max-w-2xl mx-auto leading-relaxed font-medium">
              {lang === 'hi'
                ? 'जनप्रतिनिधियों, सांसदों, विधायकों और राजनीतिक अभियानों के लिए एकीकृत डिजिटल प्लेटफॉर्म — प्रशासनिक कंट्रोल रूम (Admin Panel) और नागरिकों के लिए सहज मोबाइल वेब ऐप (PWA)।'
                : 'Integrated political & constituency management platform — robust Election Admin Panel for leadership oversight and intuitive Citizen Mobile PWA for constituent engagement.'}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={onOpenDemoModal}
                className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-xl font-black text-xs sm:text-sm text-white bg-[#f26522] hover:bg-[#d95314] shadow-md shadow-orange-500/25 transition-all hover:scale-102 active:scale-98 cursor-pointer"
              >
                <HiOutlineSparkles className="w-4 h-4" />
                <span>{t.brand.bookDemo}</span>
              </button>

              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl font-black text-xs sm:text-sm text-[#0c2340] bg-white hover:bg-slate-50 border border-slate-300 shadow-xs transition-all hover:scale-102 hover:border-orange-300"
              >
                <HiOutlinePhone className="w-4 h-4 text-[#0a8543]" />
                <span>{t.brand.callUs} {CONTACT_INFO.phone}</span>
              </a>

              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl font-black text-xs sm:text-sm text-white bg-[#0a8543] hover:bg-[#086b36] shadow-md shadow-emerald-600/20 transition-all hover:scale-102"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>{t.brand.whatsappChat}</span>
              </a>
            </div>
          </div>

          {/* Quick Metrics Summary */}
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-slate-200 hover:border-[#f26522] transition-all shadow-xs text-center space-y-1 hover:shadow-md"
              >
                <div className="font-heading font-black text-2xl sm:text-3xl text-[#0c2340]">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800">{metric.label}</div>
                <span className="text-[11px] text-[#0a8543] font-black block">{metric.change}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. SECTION A OVERVIEW: ELECTION ADMIN PANEL */}
      <section id="admin-panel" className="scroll-mt-24 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-50 border border-orange-200 text-[#0c2340] text-xs font-black">
                <HiOutlineComputerDesktop className="w-3.5 h-3.5 text-[#f26522]" />
                <span>{lang === 'hi' ? 'भाग A: प्रशासनिक कंट्रोल हब' : 'Part A: Election Admin Panel'}</span>
              </div>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#0c2340] tracking-tight mt-1.5">
                {lang === 'hi' ? 'कार्यकारी डैशबोर्ड एवं संपूर्ण अभियान प्रबंधन' : 'Executive Dashboard & Central Management Hub'}
              </h2>
            </div>
            <button
              onClick={onOpenDemoModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-xs text-white bg-[#0c2340] hover:bg-[#16365f] shadow-xs cursor-pointer self-start md:self-auto"
            >
              <HiOutlineSparkles className="w-3.5 h-3.5 text-[#f26522]" />
              <span>{lang === 'hi' ? 'एडमिन पैनल डेमो देखें' : 'View Admin Demo'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Card 1: Operational Metrics */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#0c2340] bg-white border border-slate-200 px-2 py-0.5 rounded">
                1. {lang === 'hi' ? 'लाइव मैट्रिक्स' : 'Live Metrics'}
              </span>
              <h4 className="font-heading font-black text-base text-[#0c2340]">
                {lang === 'hi' ? 'रियल-टाइम मॉनिटरिंग' : 'Real-Time Oversight'}
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-1.5">
                  <HiOutlineCheck className="w-3.5 h-3.5 text-[#0a8543] shrink-0" />
                  <span><strong>Total Citizens:</strong> {lang === 'hi' ? 'पंजीकृत मतदाता आधार' : 'Registered constituent base'}</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <HiOutlineCheck className="w-3.5 h-3.5 text-[#0a8543] shrink-0" />
                  <span><strong>Members & Volunteers:</strong> {lang === 'hi' ? 'सत्यापित कार्यकर्ता टीम' : 'Verified field helpers'}</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <HiOutlineCheck className="w-3.5 h-3.5 text-[#0a8543] shrink-0" />
                  <span><strong>Complaints:</strong> {lang === 'hi' ? 'लंबित व निस्तारित समस्याओं की लाइव स्थिति' : 'Pending vs Resolved breakdown'}</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <HiOutlineCheck className="w-3.5 h-3.5 text-[#0a8543] shrink-0" />
                  <span><strong>Active Polls:</strong> {lang === 'hi' ? 'सक्रिय जनमत सर्वेक्षण व परिणाम' : 'Active engagement surveys'}</span>
                </li>
              </ul>
            </div>

            {/* Card 2: Operations & Redressal */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#f26522] bg-white border border-slate-200 px-2 py-0.5 rounded">
                2. {lang === 'hi' ? 'जन समस्या निवारण' : 'Grievance Redressal'}
              </span>
              <h4 className="font-heading font-black text-base text-[#0c2340]">
                {lang === 'hi' ? 'समस्या निस्तारण तंत्र' : 'Workflow & Delegation'}
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-1.5">
                  <HiOutlineCheck className="w-3.5 h-3.5 text-[#0a8543] shrink-0" />
                  <span>{lang === 'hi' ? 'पब्लिक व प्राइवेट गोपनीयता मोड' : 'Public & Private confidentiality modes'}</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <HiOutlineCheck className="w-3.5 h-3.5 text-[#0a8543] shrink-0" />
                  <span>{lang === 'hi' ? 'वार्ड/बूथ स्तर पर ऑटो-डेलिगेशन' : 'Auto-delegation to ward representatives'}</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <HiOutlineCheck className="w-3.5 h-3.5 text-[#0a8543] shrink-0" />
                  <span>{lang === 'hi' ? 'नागरिकों से थ्रेडेड चैट एवं समाधान फोटो' : 'Threaded resolution log & photo proof'}</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <HiOutlineCheck className="w-3.5 h-3.5 text-[#0a8543] shrink-0" />
                  <span>{lang === 'hi' ? 'एक्सेल एवं CSV में संपूर्ण डाटा एक्सपोर्ट' : 'Full Excel/CSV reports download'}</span>
                </li>
              </ul>
            </div>

            {/* Card 3: Governance & Controls */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#0a8543] bg-white border border-slate-200 px-2 py-0.5 rounded">
                3. {lang === 'hi' ? 'कंट्रोल व परमिशन्स' : 'Governance & Roles'}
              </span>
              <h4 className="font-heading font-black text-base text-[#0c2340]">
                {lang === 'hi' ? 'सिस्टम सेटअप व भूमिकाएं' : 'Roles & Customization'}
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-1.5">
                  <HiOutlineCheck className="w-3.5 h-3.5 text-[#0a8543] shrink-0" />
                  <span>{lang === 'hi' ? 'स्टाफ डायरेक्टरी एवं रोल परमिशन्स' : 'Granular staff permissions & roles'}</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <HiOutlineCheck className="w-3.5 h-3.5 text-[#0a8543] shrink-0" />
                  <span>{lang === 'hi' ? '11 मॉड्यूल्स को ऑन/ऑफ करने की सुविधा' : 'Toggle 11 tenant modules on/off'}</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <HiOutlineCheck className="w-3.5 h-3.5 text-[#0a8543] shrink-0" />
                  <span>{lang === 'hi' ? 'नेताजी का प्रोफाइल, फोटो व अचीवमेंट्स' : 'Leader profile & milestone showcase'}</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <HiOutlineCheck className="w-3.5 h-3.5 text-[#0a8543] shrink-0" />
                  <span>{lang === 'hi' ? 'हाई-प्रायोरिटी मोबाइल ब्रॉडकास्ट' : 'Direct mobile push notification center'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION B OVERVIEW: CITIZEN MOBILE WEB APP (PWA) */}
      <section id="citizen-app" className="scroll-mt-24 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#0a8543] text-xs font-black">
                <HiOutlineDevicePhoneMobile className="w-3.5 h-3.5 text-[#0a8543]" />
                <span>{lang === 'hi' ? 'भाग B: नागरिक मोबाइल ऐप (PWA)' : 'Part B: Citizen Mobile App (PWA)'}</span>
              </div>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#0c2340] tracking-tight mt-1.5">
                {lang === 'hi' ? 'प्रत्येक नागरिक एवं कार्यकर्ता के लिए डिजिटल मंच' : 'Constituent Mobile Services & Viral Reach'}
              </h2>
            </div>
            <button
              onClick={onOpenDemoModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-xs text-white bg-[#f26522] hover:bg-[#d95314] shadow-xs cursor-pointer self-start md:self-auto"
            >
              <HiOutlineSparkles className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? 'नागरिक ऐप देखें' : 'Explore Citizen PWA'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#f26522] flex items-center justify-center font-bold">1</div>
              <h5 className="font-heading font-black text-sm text-[#0c2340]">{lang === 'hi' ? 'ओटीपी फास्ट लॉगिन' : 'Mobile OTP Login'}</h5>
              <p className="text-xs text-slate-600 font-medium">
                {lang === 'hi' ? 'सरल मोबाइल नंबर से 2 सेकंड में लॉगिन और बहुभाषी चयन (हिन्दी / English)।' : 'Instant phone number OTP login with multi-language switcher.'}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#0a8543] flex items-center justify-center font-bold">2</div>
              <h5 className="font-heading font-black text-sm text-[#0c2340]">{lang === 'hi' ? 'जन समस्या दर्ज' : 'Grievance Filing'}</h5>
              <p className="text-xs text-slate-600 font-medium">
                {lang === 'hi' ? 'फोटो एवं लोकेशन के साथ जन समस्या दर्ज करने और समाधान ट्रैक करने की सुविधा।' : 'Submit issues with photos, track SLA status (Pending ➔ Resolved).'}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#0c2340] flex items-center justify-center font-bold">3</div>
              <h5 className="font-heading font-black text-sm text-[#0c2340]">{lang === 'hi' ? 'पोस्टर स्टूडियो' : 'Dynamic Poster Studio'}</h5>
              <p className="text-xs text-slate-600 font-medium">
                {lang === 'hi' ? 'कार्यकर्ता व समर्थक अपनी फोटो, नाम व पद के साथ 1-क्लिक में आधिकारिक पोस्टर बना सकते हैं।' : 'Constituents overlay photo, name & role to create viral posters.'}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold">4</div>
              <h5 className="font-heading font-black text-sm text-[#0c2340]">{lang === 'hi' ? 'डिजिटल सदस्यता कार्ड' : 'Verified Digital ID'}</h5>
              <p className="text-xs text-slate-600 font-medium">
                {lang === 'hi' ? 'सत्यापित पार्टी कार्यकर्ता पहचान पत्र, जिसे आसानी से डाउनलोड व व्हाट्सएप पर शेयर करें।' : 'Official digital ID card with QR code, tier level, and photo badge.'}
              </p>
            </div>
          </div>

          {/* Interactive Poster Demo Spotlight */}
          <div className="pt-2">
            <PosterStudioInteractive />
          </div>
        </div>
      </section>

      {/* 4. 11 ACTIVE TENANT MODULES RECAP (PDF PAGE 6) */}
      <section id="modules" className="scroll-mt-24 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <span className="text-[#0c2340] text-xs font-black uppercase tracking-widest bg-orange-50 border border-orange-200 px-3.5 py-1 rounded-full">
            {lang === 'hi' ? '11 सक्रिय टेनेन्ट मॉड्यूल्स (PDF स्पेसिफिकेशन)' : '11 Active Tenant Modules (PDF Specification)'}
          </span>
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#0c2340] tracking-tight">
            {lang === 'hi' ? 'आवश्यकतानुसार ऑन/ऑफ किए जाने वाले 11 मुख्य मॉड्यूल्स' : '11 Modular Pillars Configured by Admin'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
            {lang === 'hi'
              ? 'प्रत्येक मॉड्यूल को एडमिन पैनल से सीधे नियंत्रित व कस्टमाइज किया जा सकता है।'
              : 'Each module can be independently enabled or disabled based on your campaign requirements.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tenantModules.map((mod, index) => (
            <div
              key={mod.id}
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-[#f26522] transition-all shadow-xs space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-[#0c2340] text-white">
                  #{index + 1} {mod.badge}
                </span>
                <span className="text-[11px] font-bold text-[#f26522]">{mod.id}</span>
              </div>
              <h4 className="font-heading font-black text-base text-[#0c2340]">{mod.name}</h4>
              <p className="text-xs text-[#0a8543] font-bold leading-snug">{mod.tagline}</p>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">{mod.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. 4-LEVEL GEOGRAPHIC AREA HIERARCHY (PDF PAGE 5) */}
      <section id="hierarchy" className="scroll-mt-24 max-w-6xl mx-auto px-4 sm:px-6">
        <HierarchyMap />
      </section>

      {/* 6. CONTACT & VIP ONBOARDING SECTION */}
      <section id="contact" className="scroll-mt-24 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[#0c2340] text-xs font-black uppercase tracking-widest bg-orange-50 border border-orange-200 px-3.5 py-1 rounded-full">
              {lang === 'hi' ? 'सीधा संपर्क एवं ऑनबोर्डिंग' : 'Direct Support & Deployment'}
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#0c2340] tracking-tight">
              {lang === 'hi' ? 'विकास दर्पण की टीम से सीधे संपर्क करें' : 'Deploy Vikas Darpan for Your Constituency'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 font-medium">
              {lang === 'hi'
                ? 'अपने क्षेत्र में लाइव डेमो देखने, कस्टमाइजेशन या तत्काल ऑनबोर्डिंग के लिए कॉल या व्हाट्सएप करें।'
                : 'Connect directly with DigiCoders senior strategist for instant onboarding and walkthrough.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Col: Contact cards */}
            <div className="lg:col-span-5 space-y-3">
              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-orange-100 text-[#f26522] flex items-center justify-center">
                    <HiOutlinePhone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase text-slate-500">{lang === 'hi' ? 'फोन हेल्पलाइन' : 'Helpline'}</span>
                    <h5 className="font-heading font-black text-base text-[#0c2340]">{CONTACT_INFO.phone}</h5>
                  </div>
                </div>
                <a
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-lg font-bold text-xs bg-[#0c2340] hover:bg-[#16365f] text-white shadow-2xs"
                >
                  <HiOutlinePhone className="w-3.5 h-3.5 text-[#0a8543]" />
                  <span>{t.nav.callBtn}</span>
                </a>
              </div>

              {/* WhatsApp Card */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 text-[#0a8543] flex items-center justify-center">
                    <FaWhatsapp className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase text-slate-500">{lang === 'hi' ? 'व्हाट्सएप डेस्क' : 'WhatsApp Desk'}</span>
                    <h5 className="font-heading font-black text-base text-[#0c2340]">{CONTACT_INFO.whatsapp}</h5>
                  </div>
                </div>
                <a
                  href={CONTACT_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-lg font-bold text-xs bg-[#0a8543] hover:bg-[#086b36] text-white shadow-2xs"
                >
                  <FaWhatsapp className="w-3.5 h-3.5" />
                  <span>{t.brand.whatsappChat}</span>
                </a>
              </div>

              {/* Office Location Card */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1 text-xs text-slate-700">
                <div className="flex items-center gap-2 text-[#0c2340] font-black">
                  <HiOutlineMapPin className="w-4 h-4 text-[#f26522]" />
                  <span>{lang === 'hi' ? 'कार्यालय पता (DigiCoders Lucknow):' : 'Headquarters (DigiCoders Lucknow):'}</span>
                </div>
                <p className="font-medium">{CONTACT_INFO.address}</p>
                <p className="text-[#0a8543] font-bold">{CONTACT_INFO.supportHours}</p>
              </div>

              {/* Social Channels */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-[10px] font-black uppercase text-slate-500">
                  {lang === 'hi' ? 'सोशल मीडिया प्रोफाइल्स (DigiCoders)' : 'Social Profiles (DigiCoders)'}
                </span>
                <div className="flex flex-wrap items-center gap-1.5">
                  <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-pink-50 text-pink-700 border border-pink-200 hover:bg-pink-600 hover:text-white transition-all text-xs font-bold flex items-center gap-1">
                    <FaInstagram className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                  </a>
                  <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-600 hover:text-white transition-all text-xs font-bold flex items-center gap-1">
                    <FaFacebook className="w-3.5 h-3.5" />
                    <span>Facebook</span>
                  </a>
                  <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-sky-50 text-[#0c2340] border border-sky-200 hover:bg-[#0c2340] hover:text-white transition-all text-xs font-bold flex items-center gap-1">
                    <FaLinkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                  <a href={SOCIAL_LINKS.whatsappChannel} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-emerald-50 text-[#0a8543] border border-emerald-200 hover:bg-[#0a8543] hover:text-white transition-all text-xs font-bold flex items-center gap-1">
                    <FaWhatsapp className="w-3.5 h-3.5" />
                    <span>Channel</span>
                  </a>
                  <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-red-50 text-red-700 border border-red-200 hover:bg-red-600 hover:text-white transition-all text-xs font-bold flex items-center gap-1">
                    <FaYoutube className="w-3.5 h-3.5" />
                    <span>YouTube</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Col: Instant Inquiry Form */}
            <div className="lg:col-span-7 p-5 sm:p-6 rounded-xl bg-slate-50 border border-slate-200">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <h4 className="font-heading font-black text-lg text-[#0c2340]">
                    {lang === 'hi' ? 'ऑनलाइन ऑनबोर्डिंग अनुरोध भेजें' : 'Send VIP Onboarding Request'}
                  </h4>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">{t.modal.nameLabel}</label>
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
                        className="w-full pl-9 pr-3 py-2 bg-white border border-slate-300 rounded-lg text-xs text-slate-950 font-medium focus:outline-hidden focus:border-[#f26522] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">{t.modal.phoneLabel}</label>
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
                          className="w-full pl-9 pr-3 py-2 bg-white border border-slate-300 rounded-lg text-xs text-slate-950 font-medium focus:outline-hidden focus:border-[#f26522] transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">{t.modal.roleLabel}</label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs text-slate-950 font-medium focus:outline-hidden focus:border-[#f26522] transition-all"
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
                      <label className="block text-xs font-bold text-slate-800 mb-1">{t.modal.areaLabel}</label>
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
                          className="w-full pl-9 pr-3 py-2 bg-white border border-slate-300 rounded-lg text-xs text-slate-950 font-medium focus:outline-hidden focus:border-[#f26522] transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">{t.modal.stateLabel}</label>
                      <input
                        type="text"
                        placeholder={lang === 'hi' ? "उदा. उत्तर प्रदेश" : "e.g. Uttar Pradesh"}
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs text-slate-950 font-medium focus:outline-hidden focus:border-[#f26522] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">{t.modal.msgLabel}</label>
                    <textarea
                      rows={2}
                      placeholder={lang === 'hi' ? "अपने क्षेत्र का आकार या कस्टमाइजेशन आवश्यकता लिखें..." : "Specify your constituency size or requirements..."}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs text-slate-950 font-medium focus:outline-hidden focus:border-[#f26522] transition-all"
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
              ) : (
                <div className="text-center py-8 space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-[#0a8543] border border-emerald-300 rounded-full flex items-center justify-center mx-auto">
                    <HiOutlineCheckBadge className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-black text-lg text-[#0c2340]">{t.modal.thankYou}, {formData.name}!</h4>
                  <p className="text-xs text-slate-700 max-w-sm mx-auto font-medium">
                    {t.modal.thankYouMsg}
                  </p>
                  <a
                    href={CONTACT_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0a8543] hover:bg-[#086b36] text-white font-bold rounded-xl text-xs"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    <span>{t.modal.openWa}</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA BANNER */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-gradient-to-r from-[#0c2340] via-[#16365f] to-[#0c2340] p-8 sm:p-10 text-white shadow-xl text-center space-y-4 border border-orange-400/30">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="inline-block bg-orange-500/20 text-orange-300 border border-orange-400/40 px-3.5 py-0.5 rounded-full text-xs font-extrabold tracking-wider uppercase">
              {lang === 'hi' ? 'विकास दर्पण ऑनबोर्डिंग' : 'Vikas Darpan Live Deployment'}
            </span>

            <h2 className="font-heading font-black text-2xl sm:text-3xl tracking-tight text-white !text-white">
              {brand.name} — {brand.slogan2}
            </h2>

            <p className="text-slate-100 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed font-medium">
              {lang === 'hi' 
                ? 'अपने निर्वाचन क्षेत्र में आज ही विकास दर्पण डिजिटल प्लेटफॉर्म शुरू करें। लाइव वॉकथ्रू एवं कोटेशन के लिए संपर्क करें।'
                : 'Launch Vikas Darpan for your constituency today. Contact our technical team for custom deployment.'}
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-white hover:bg-slate-100 text-[#0c2340] shadow-xs transition-all hover:scale-102"
              >
                <HiOutlinePhone className="w-4 h-4 text-[#0a8543]" />
                <span>{t.ctaSection.callBtn} {CONTACT_INFO.phone}</span>
              </a>

              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-[#0a8543] hover:bg-[#086b36] text-white shadow-xs transition-all hover:scale-102"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>{t.ctaSection.whatsappBtn}</span>
              </a>

              <button
                onClick={onOpenDemoModal}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-[#f26522] hover:bg-[#d95314] text-white shadow-xs shadow-orange-500/30 transition-all cursor-pointer hover:scale-102"
              >
                <HiOutlineSparkles className="w-4 h-4" />
                <span>{t.ctaSection.demoBtn}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
