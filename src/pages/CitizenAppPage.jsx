import React from 'react';
import { 
  HiOutlineSparkles, 
  HiOutlineLanguage,
  HiOutlineIdentification,
  HiOutlineClipboardDocumentList,
  HiOutlineBuildingOffice2,
  HiOutlineCalendarDays
} from 'react-icons/hi2';
import { useLanguage } from '../context/LanguageContext';
import { getBrandInfo } from '../data/platformData';
import PhoneVideoMockup from '../components/PhoneVideoMockup';
import AppScreensSlider from '../components/AppScreensSlider';
import citizenPromoVideo from '../assets/meadia/citizen-app-promo.mp4';

const citizenAppImages = import.meta.glob('../assets/citizen-app images/*.{jpeg,jpg,png,webp}', { eager: true, query: '?url', import: 'default' });



export default function CitizenAppPage({ onOpenDemoModal }) {
  const { t, lang } = useLanguage();
  const brand = getBrandInfo(lang);

  const citizenModulesList = lang === 'hi' ? [
    {
      icon: HiOutlineLanguage,
      title: "बहुभाषी एवं त्वरित ओटीपी लॉगिन",
      desc: "नागरिक अपने मोबाइल नंबर और ओटीपी से 3 सेकंड में सुरक्षित लॉगिन कर सकते हैं। हिन्दी व क्षेत्रीय भाषाओं में तुरंत बदलाव की सुविधा।"
    },
    {
      icon: HiOutlineClipboardDocumentList,
      title: "जन समस्या निवारण (Jan Samasya)",
      desc: "नागरिक फोटो और लोकेशन के साथ समस्या दर्ज कर सकते हैं। पब्लिक या प्राइवेट मोड चुन सकते हैं और लाइव स्टेटस ट्रैक कर सकते हैं।"
    },
    {
      icon: HiOutlineIdentification,
      title: "डिजिटल पार्टी पहचान पत्र (ID Card)",
      desc: "नागरिक डिजिटल सदस्यता के लिए आवेदन करते हैं। प्रशासनिक सत्यापन के बाद उन्हें क्यूआर कोड युक्त सत्यापित डिजिटल पहचान पत्र प्राप्त होता है।"
    },
    {
      icon: HiOutlineBuildingOffice2,
      title: "विकास कार्यों की पारदर्शिता (Vikas Karya)",
      desc: "अपने ब्लॉक, ग्राम पंचायत या वार्ड में स्वीकृत एवं पूर्ण हुए विकास कार्यों की तस्वीरें, बजट और प्रगति रिपोर्ट देख सकते हैं।"
    },
    {
      icon: HiOutlineSparkles,
      title: "ऑटोमेटेड पोस्टर जनरेटर (Poster Studio)",
      desc: "त्योहारों व अभियानों के आधिकारिक टेम्पलेट चुनकर अपना नाम, पद और फोटो लगाकर एचडी क्वालिटी पोस्टर बनाकर शेयर कर सकते हैं।"
    },
    {
      icon: HiOutlineCalendarDays,
      title: "रैली कैलेंडर एवं जनमत सर्वेक्षण",
      desc: "आगामी जनसभाओं की सूचना देखकर उपस्थिति (RSVP) दर्ज कराएं तथा क्षेत्र के विकास से जुड़े मुद्दों पर अपने बहुमूल्य वोट दें।"
    }
  ] : [
    {
      icon: HiOutlineLanguage,
      title: "Multilingual & 3-Sec OTP Login",
      desc: "Citizens log in securely using their mobile number and SMS OTP without complex passwords. Instant toggle between Hindi and English."
    },
    {
      icon: HiOutlineClipboardDocumentList,
      title: "Jan Samasya Grievance Redressal",
      desc: "Constituents submit local grievances with photo attachments and GPS location. Toggle Public/Private visibility and track resolution live."
    },
    {
      icon: HiOutlineIdentification,
      title: "Digital Cadre ID Card & Membership",
      desc: "Supporters apply for official digital membership. Once approved by the admin team, a verified QR-enabled ID badge is generated."
    },
    {
      icon: HiOutlineBuildingOffice2,
      title: "Vikas Karya Public Works Transparency",
      desc: "Citizens browse completed and ongoing government projects across their block, panchayat, or ward with milestone photos and budget stats."
    },
    {
      icon: HiOutlineSparkles,
      title: "Dynamic Poster Studio",
      desc: "Constituents choose festival and campaign graphic templates, insert their portrait, name, and designation, and generate HD posters for WhatsApp."
    },
    {
      icon: HiOutlineCalendarDays,
      title: "Rally Schedules & Public Opinion Polls",
      desc: "Stay updated on upcoming townhalls (Chaupals), confirm attendance (RSVP), and participate in live opinion polls on local governance issues."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-sky-900 text-xs font-extrabold uppercase tracking-widest bg-sky-100 border border-sky-300 px-3 py-1 rounded-full">
          {t.tabs.citizenBadge}
        </span>
        <h1 className="font-heading font-black text-3xl sm:text-4xl text-slate-950 tracking-tight">
          {brand.name} — {t.tabs.citizenHeading}
        </h1>
        <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed">
          {t.tabs.citizenDesc}
        </p>

        <div className="pt-2 flex justify-center">
          <button
            onClick={onOpenDemoModal}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-sky-600 hover:bg-sky-700 shadow-xs transition-all cursor-pointer"
          >
            <HiOutlineSparkles className="w-4 h-4" />
            <span>{t.tabs.citizenBtn}</span>
          </button>
        </div>
      </div>

      {/* Live Phone Screen Showcase for Citizen App */}
      <div className="flex justify-center py-4">
        <PhoneVideoMockup 
          videoSrc={citizenPromoVideo}
          badge={lang === 'hi' ? "📱 नागरिक मोबाइल वेब PWA डेमो" : "📱 Citizen Mobile PWA Live Demo"}
          badgeColor="text-emerald-400 border-emerald-500/40"
        />
      </div>

      {/* Citizen App Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {citizenModulesList.map((m, idx) => {
          const Icon = m.icon;
          return (
            <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 border border-emerald-200 flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-black text-base text-slate-950">{m.title}</h3>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                {m.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Citizen App Screenshots Interactive Carousel */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
        <AppScreensSlider 
          images={Object.values(citizenAppImages)}
          title={lang === 'hi' ? "नागरिक मोबाइल वेब ऐप संपूर्ण स्क्रीन गैलरी" : "Citizen Web App (PWA) Interactive Screenshots"}
          subtitle={lang === 'hi' ? "ओटीपी लॉगिन, जन समस्या, विकास कार्य, सदस्यता कार्ड और पोस्टर मेकर की मोबाइल स्क्रीन" : "Full interactive screen gallery of the constituent portal"}
          badge={lang === 'hi' ? "स्क्रीनशॉट गैलरी" : "Citizen Gallery"}
          accentColor="emerald"
        />
      </div>
    </div>
  );
}
