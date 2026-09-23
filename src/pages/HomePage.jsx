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
import PhoneVideoMockup from '../components/PhoneVideoMockup';
import LaptopMockup from '../components/LaptopMockup';
import AppScreensSlider from '../components/AppScreensSlider';
import { HiOutlineArrowTopRightOnSquare, HiOutlinePlay, HiOutlineArrowDownTray } from 'react-icons/hi2';
import adminAppApk from '../assets/apks/app-release.apk';
import citizenAppApk from '../assets/apks/citizen-app-release.apk';
import citizenPromoVideo from '../assets/meadia/citizen-app-promo.mp4';

// Dynamically load all screenshots from assets folders
const adminAppImages = import.meta.glob('../assets/admin-app images/*.{jpeg,jpg,png,webp}', { eager: true, query: '?url', import: 'default' });
const citizenAppImages = import.meta.glob('../assets/citizen-app images/*.{jpeg,jpg,png,webp}', { eager: true, query: '?url', import: 'default' });



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
      
      {/* 1. HERO & BRAND OVERVIEW SECTION - ULTRA PREMIUM DARK BANNER */}
      <section id="home" className="scroll-mt-24 relative overflow-hidden bg-gradient-to-br from-[#061816] via-[#08221f] to-[#040f0e] text-white border-b border-teal-900/50 pt-10 pb-14 sm:pt-14 sm:pb-18">
        
        {/* Subtle background glow rings & architectural grid lines */}
        <div className="absolute inset-0 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Heading, Slogan, CTAs and Live Demo Card */}
            <div className="lg:col-span-6 space-y-5 text-left">
              
              {/* Top Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wide shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>{lang === 'hi' ? 'ऑल-इन-वन डिजिटल गवर्नेंस एवं चुनाव प्रबंधन' : 'All-in-One ERP for Modern Constituency Management'}</span>
              </div>

              {/* Main Headline with Prominent Vikas Darpan Brand Name */}
              <div className="space-y-1">
                <div className="text-sm font-extrabold text-amber-400 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                  <span>{lang === 'hi' ? 'विकास दर्पण डिजिटल मंच' : 'Vikas Darpan Digital Ecosystem'}</span>
                </div>
                <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-[46px] tracking-tight text-white leading-[1.15]">
                  {lang === 'hi' ? (
                    <>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-emerald-400">
                        विकास दर्पण
                      </span> <br />
                      आपकी आवाज़ | बेहतर कल की ओर — <br />
                      <span className="text-orange-400 font-extrabold">
                        काम भी, जनता का भरोसा भी
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-emerald-400">
                        Vikas Darpan
                      </span> <br />
                      Aapki Awaaz | Better Tomorrow — <br />
                      <span className="text-emerald-400 font-extrabold">
                        Kaam Bhi, Janta Ka Bharosa Bhi
                      </span>
                    </>
                  )}
                </h1>
              </div>

              {/* Subtitle Description focused entirely on Vikas Darpan */}
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed font-normal">
                {lang === 'hi'
                  ? 'विकास दर्पण जनप्रतिनिधियों, विधायकों, सांसदों, प्रत्याशियों और राजनीतिक दलों के लिए एक संपूर्ण डिजिटल जन-संवाद एवं सुशासन प्रबंधन प्रणाली है। यह जन समस्या निवारण, विकास कार्य ट्रैकिंग, डिजिटल कार्यकर्ता आईडी और ऑटोमेटेड पोस्टर स्टूडियो को एक क्लिक में सक्षम बनाता है।'
                  : 'Vikas Darpan is a dedicated political and governance SaaS platform empowering MLAs, MPs, Candidates, and Parties with real-time grievance redressal, public works tracking, verified cadre management, and viral poster generation.'}
              </p>

              {/* Action Buttons Row */}
              <div className="pt-1 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenDemoModal}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-orange-400 to-amber-500 hover:from-orange-500 hover:to-amber-600 shadow-lg shadow-orange-500/25 transition-all hover:scale-102 active:scale-98 cursor-pointer"
                >
                  <span>{lang === 'hi' ? 'डेमो का अनुरोध करें' : 'Request a Demo'}</span>
                  <HiOutlineArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#admin-panel"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all hover:scale-102"
                >
                  <HiOutlinePlay className="w-4 h-4 text-emerald-400" />
                  <span>{lang === 'hi' ? 'डेमो वीडियो देखें' : 'Watch Demo'}</span>
                </a>

                <a
                  href={adminAppApk}
                  download="VikasDarpan-AdminApp.apk"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-emerald-300 bg-emerald-950/70 hover:bg-emerald-900/70 border border-emerald-500/50 shadow-md shadow-emerald-950/40 transition-all hover:scale-102"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <HiOutlineArrowDownTray className="w-4 h-4 text-emerald-400" />
                  <span>{lang === 'hi' ? 'लाइव एडमिन ऐप (APK)' : 'Live Admin App (APK)'}</span>
                  <HiOutlineArrowTopRightOnSquare className="w-3.5 h-3.5 text-emerald-400 opacity-75" />
                </a>
              </div>

              {/* Demo Credentials Box */}
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-teal-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-inner backdrop-blur-xs">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-teal-900/80 border border-teal-600/60 flex items-center justify-center text-teal-300 shrink-0">
                    <HiOutlineBuildingLibrary className="w-5 h-5" />
                  </div>
                  <div className="text-xs">
                    <div className="font-bold text-white flex items-center gap-1.5">
                      <span>{lang === 'hi' ? 'लाइव एडमिन ऐप क्रेडेंशियल्स:' : 'Live Admin App Credentials:'}</span>
                      <span className="text-amber-400 font-extrabold">Vikas Darpan Admin</span>
                    </div>
                    <div className="text-slate-300 text-[11px] font-mono mt-0.5 flex flex-wrap items-center gap-x-2">
                      <span>User: <strong className="text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/60">admin@testing.com</strong></span>
                      <span>Pass: <strong className="text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/60">123456</strong></span>
                    </div>
                  </div>
                </div>

                <a
                  href={adminAppApk}
                  download="VikasDarpan-AdminApp.apk"
                  className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs inline-flex items-center justify-center gap-1.5 transition-all shadow-md hover:scale-102 cursor-pointer shrink-0"
                >
                  <HiOutlineArrowDownTray className="w-3.5 h-3.5 text-slate-950 stroke-[2.5]" />
                  <span>{lang === 'hi' ? 'डाउनलोड ऐप' : 'Download APK'}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Compact Phone Screen Video Mockup */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end py-2">
              <PhoneVideoMockup 
                badge={lang === 'hi' ? "⚡ लाइव एडमिन व PWA मोबाइल डेमो" : "⚡ Live Admin & Citizen App Demo"} 
              />
            </div>

          </div>

          {/* Bottom KPI Metrics Bar */}
          <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="font-heading font-black text-2xl sm:text-3xl text-orange-400">500+</div>
              <div className="text-xs text-slate-300 font-medium mt-0.5">{lang === 'hi' ? 'विधानसभा व नेता जुड़े' : 'Constituencies & Leaders'}</div>
            </div>

            <div>
              <div className="font-heading font-black text-2xl sm:text-3xl text-amber-400">100K+</div>
              <div className="text-xs text-slate-300 font-medium mt-0.5">{lang === 'hi' ? 'नागरिक व मतदाता कनेक्टेड' : 'Voters & Citizens Connected'}</div>
            </div>

            <div>
              <div className="font-heading font-black text-2xl sm:text-3xl text-emerald-400">98.4%</div>
              <div className="text-xs text-slate-300 font-medium mt-0.5">{lang === 'hi' ? 'जन समस्या निस्तारण दर' : 'Grievance Redressal Rate'}</div>
            </div>

            <div>
              <div className="font-heading font-black text-2xl sm:text-3xl text-teal-400">99.9%</div>
              <div className="text-xs text-slate-300 font-medium mt-0.5">{lang === 'hi' ? 'क्लाउड अपटाइम व 24x7 सपोर्ट' : 'Cloud Uptime & 24x7 War Room'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION A OVERVIEW: ELECTION ADMIN PANEL */}
      <section id="admin-panel" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-8">
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

            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={adminAppApk}
                download="VikasDarpan-AdminApp.apk"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-xs text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-xs transition-all hover:scale-102 cursor-pointer"
              >
                <HiOutlineArrowDownTray className="w-4 h-4 text-slate-950 stroke-[2.5]" />
                <span>{lang === 'hi' ? 'एडमिन ऐप डाउनलोड (APK)' : 'Download Admin APK'}</span>
              </a>

              <button
                onClick={onOpenDemoModal}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-xs text-white bg-[#0c2340] hover:bg-[#16365f] shadow-xs cursor-pointer"
              >
                <HiOutlineSparkles className="w-3.5 h-3.5 text-[#f26522]" />
                <span>{lang === 'hi' ? 'एडमिन डेमो बुक करें' : 'Book Admin Demo'}</span>
              </button>
            </div>
          </div>

          {/* Quick Demo Credentials Reminder Box */}
          <div className="p-3 sm:p-4 rounded-xl bg-slate-900 border border-teal-700/60 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-teal-800/60 border border-teal-600/50 flex items-center justify-center text-emerald-400 shrink-0">
                <HiOutlineShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <span className="font-bold text-amber-300">Live Admin App Test Credentials:</span>
                <div className="text-slate-300 text-[11px] font-mono mt-0.5 flex flex-wrap items-center gap-x-3">
                  <span>User: <strong className="text-emerald-400 bg-black/40 px-1.5 py-0.5 rounded border border-emerald-800/40">admin@testing.com</strong></span>
                  <span>Pass: <strong className="text-emerald-400 bg-black/40 px-1.5 py-0.5 rounded border border-emerald-800/40">123456</strong></span>
                </div>
              </div>
            </div>

            <a
              href={adminAppApk}
              download="VikasDarpan-AdminApp.apk"
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-xs transition-all hover:scale-102 cursor-pointer shrink-0"
            >
              <HiOutlineArrowDownTray className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>{lang === 'hi' ? 'APK डाउनलोड करें' : 'Download APK'}</span>
            </a>
          </div>

          {/* Admin Panel Interactive Showcase Grid with Live Phone Video Mockup */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Phone Frame Video */}
            <div className="lg:col-span-5 flex justify-center">
              <PhoneVideoMockup 
                badge={lang === 'hi' ? "⚡ एडमिन मोबाइल कंट्रोल रूम" : "⚡ Mobile Admin Command Center"} 
              />
            </div>

            {/* Right Column: 3 Feature Cards */}
            <div className="lg:col-span-7 space-y-4">
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

        {/* Admin App Screenshots Carousel */}
        <div className="pt-6 border-t border-slate-100">
          <AppScreensSlider
            images={Object.values(adminAppImages)}
            title={lang === 'hi' ? "एडमिन ऐप इंटरफेस एवं लाइव स्क्रीनशॉट्स" : "Admin Panel Mobile App Screen Tours"}
            subtitle={lang === 'hi' ? "डैशबोर्ड, कार्यकर्ता प्रबंधन, जन समस्या ट्रैकिंग और रोल परमिशन्स की वास्तविक झलकियां" : "Live glimpses of executive dashboards, voter registries, issue delegation, and governance tools"}
            badge={lang === 'hi' ? "एडमिन स्क्रीनशॉट्स" : "Admin Mobile Screens"}
            accentColor="sky"
          />
        </div>
      </div>
    </section>

      {/* 3. SECTION B OVERVIEW: CITIZEN MOBILE WEB APP (PWA) */}
      <section id="citizen-app" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6">

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
            
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={citizenAppApk}
                download="VikasDarpan-CitizenApp.apk"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-xs text-white bg-[#0a8543] hover:bg-[#086b36] shadow-xs transition-all hover:scale-102 cursor-pointer"
              >
                <HiOutlineArrowDownTray className="w-4 h-4 text-white stroke-[2.5]" />
                <span>{lang === 'hi' ? 'नागरिक ऐप डाउनलोड (APK)' : 'Download Citizen APK'}</span>
              </a>

              <button
                onClick={onOpenDemoModal}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-xs text-white bg-[#f26522] hover:bg-[#d95314] shadow-xs cursor-pointer self-start md:self-auto"
              >
                <HiOutlineSparkles className="w-3.5 h-3.5" />
                <span>{lang === 'hi' ? 'नागरिक ऐप देखें' : 'Explore Citizen PWA'}</span>
              </button>
            </div>
          </div>

          {/* Citizen App Interactive Grid with Video Mockup */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            
            {/* Left Column: Citizen Video Phone Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <PhoneVideoMockup 
                videoSrc={citizenPromoVideo}
                badge={lang === 'hi' ? "📱 नागरिक मोबाइल वेब PWA डेमो" : "📱 Citizen Mobile PWA Live Demo"} 
                badgeColor="text-emerald-400 border-emerald-500/40"
              />
            </div>

            {/* Right Column: 4 Key Citizen Modules */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#f26522] flex items-center justify-center font-bold">1</div>
                <h5 className="font-heading font-black text-sm text-[#0c2340]">{lang === 'hi' ? 'ओटीपी फास्ट लॉगिन' : 'Mobile OTP Login'}</h5>
                <p className="text-xs text-slate-600 font-medium">
                  {lang === 'hi' ? 'सरल मोबाइल नंबर से 2 सेकंड में लॉगिन और बहुभाषी चयन (हिन्दी / English)।' : 'Instant phone number OTP login with multi-language switcher.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#0a8543] flex items-center justify-center font-bold">2</div>
                <h5 className="font-heading font-black text-sm text-[#0c2340]">{lang === 'hi' ? 'जन समस्या दर्ज' : 'Grievance Filing'}</h5>
                <p className="text-xs text-slate-600 font-medium">
                  {lang === 'hi' ? 'फोटो एवं लोकेशन के साथ जन समस्या दर्ज करने और समाधान ट्रैक करने की सुविधा।' : 'Submit issues with photos, track SLA status (Pending ➔ Resolved).'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#0c2340] flex items-center justify-center font-bold">3</div>
                <h5 className="font-heading font-black text-sm text-[#0c2340]">{lang === 'hi' ? 'पोस्टर स्टूडियो' : 'Dynamic Poster Studio'}</h5>
                <p className="text-xs text-slate-600 font-medium">
                  {lang === 'hi' ? 'कार्यकर्ता व समर्थक अपनी फोटो, नाम व पद के साथ 1-क्लिक में आधिकारिक पोस्टर बना सकते हैं।' : 'Constituents overlay photo, name & role to create viral posters.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center font-bold">4</div>
                <h5 className="font-heading font-black text-sm text-[#0c2340]">{lang === 'hi' ? 'डिजिटल आईडी कार्ड' : 'Digital ID Badge'}</h5>
                <p className="text-xs text-slate-600 font-medium">
                  {lang === 'hi' ? 'सत्यापित कार्यकर्ताओं के लिए क्यूआर कोड युक्त ऑफिशियल डिजिटल पहचान पत्र।' : 'Verified cadre receive official QR-enabled digital party credentials.'}
                </p>
              </div>
            </div>
          </div>

          {/* Citizen App Screenshots Carousel */}
          <div className="pt-6 border-t border-slate-100">
            <AppScreensSlider
              images={Object.values(citizenAppImages)}
              title={lang === 'hi' ? "नागरिक मोबाइल ऐप (PWA) स्क्रीनशॉट्स" : "Citizen Web App (PWA) Interactive Screenshots"}
              subtitle={lang === 'hi' ? "ओटीपी लॉगिन, विकास कार्य, जन समस्या, सदस्यता कार्ड और पोस्टर मेकर की मोबाइल स्क्रीन" : "Take a closer look at the actual constituent portal screens built for seamless reach"}
              badge={lang === 'hi' ? "नागरिक स्क्रीनशॉट्स" : "Citizen Mobile Screens"}
              accentColor="emerald"
            />
          </div>

          {/* Interactive Poster Demo Spotlight */}
          <div className="pt-2">
            <PosterStudioInteractive />
          </div>
        </div>
      </section>

      {/* 4. 11 ACTIVE TENANT MODULES RECAP (PDF PAGE 6) */}
      <section id="modules" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6">
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
      <section id="hierarchy" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6">
        <HierarchyMap />
      </section>

      {/* 6. CONTACT & VIP ONBOARDING SECTION */}
      <section id="contact" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6">
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
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
