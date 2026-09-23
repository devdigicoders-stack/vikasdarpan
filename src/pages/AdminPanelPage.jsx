import React from 'react';
import { 
  HiOutlineSparkles, 
  HiOutlineShieldCheck, 
  HiOutlineChartBar,
  HiOutlineUserGroup,
  HiOutlineArrowDownTray,
  HiOutlineAdjustmentsHorizontal
} from 'react-icons/hi2';
import { useLanguage } from '../context/LanguageContext';
import { CONTACT_INFO, getBrandInfo } from '../data/platformData';
import PhoneVideoMockup from '../components/PhoneVideoMockup';
import AppScreensSlider from '../components/AppScreensSlider';

const adminAppImages = import.meta.glob('../assets/admin-app images/*.{jpeg,jpg,png,webp}', { eager: true, query: '?url', import: 'default' });



export default function AdminPanelPage({ onOpenDemoModal }) {
  const { t, lang } = useLanguage();
  const brand = getBrandInfo(lang);

  const adminModulesList = lang === 'hi' ? [
    {
      icon: HiOutlineChartBar,
      title: "कार्यकारी डैशबोर्ड (Executive Dashboard)",
      desc: "शीर्ष सारांश कार्ड्स: कुल पंजीकृत नागरिक, सत्यापित सदस्य, सक्रिय स्वयंसेवक, निर्धारित जनसभाएं, शिकायत निस्तारण अनुपात और लाइव पोलिंग आंकड़े।"
    },
    {
      icon: HiOutlineUserGroup,
      title: "कार्यकर्ता व कैडर प्रबंधन",
      desc: "नागरिक डायरेक्टरी, सक्रियता ट्रैकिंग, सत्यापित नागरिकों को सदस्य व स्वयंसेवक पद पर पदोन्नत करना और सदस्यता श्रेणियों का आवंटन।"
    },
    {
      icon: HiOutlineAdjustmentsHorizontal,
      title: "11 मॉड्यूल्स का कस्टमाइजेशन",
      desc: "बैनर्स, जन समस्याएं, विकास कार्य, कार्यक्रम, मीडिया गैलरी, संकल्प पत्र, सदस्यता, सूचनाएं, पोल्स, पोस्टर मेकर और स्वयंसेवक मॉड्यूल्स का लाइव नियंत्रण।"
    },
    {
      icon: HiOutlineShieldCheck,
      title: "स्टाफ अधिकार एवं अनुमतियां",
      desc: "स्टाफ डायरेक्टरी एवं भूमिका आधारित अधिकार (रीड-ओनली, एडिटर, वार्ड कोऑर्डिनेटर, सुपर एडमिन) जिससे डाटा पूर्ण सुरक्षित रहता है।"
    },
    {
      icon: HiOutlineArrowDownTray,
      title: "एक्सेल एवं सीएसवी डाटा निर्यात",
      desc: "मतदाता आंकड़े, समस्या समाधान का औसत समय, बूथवार जनमत और प्रोजेक्ट बजट का संपूर्ण डाटा एक क्लिक में डाउनलोड करें।"
    },
    {
      icon: HiOutlineSparkles,
      title: "कस्टम ब्रांडिंग एवं डोमेन",
      desc: "थीम रंग चयन, आधिकारिक लोगो अपलोड, कस्टम सब-डोमेन डीएनएस सेटअप, नेताजी का नाम व बायोग्राफी और नियम व शर्तों का प्रबंधन।"
    }
  ] : [
    {
      icon: HiOutlineChartBar,
      title: "Executive Command Dashboard",
      desc: "Real-time summary widgets: total constituents registered, verified cadre, active volunteers, scheduled chaupals, grievance SLAs, and live polls."
    },
    {
      icon: HiOutlineUserGroup,
      title: "Cadre & Volunteer Management",
      desc: "Comprehensive citizen directory, activity heatmaps, tier promotions (Citizen ➔ Verified Member ➔ Booth Volunteer), and digital ID generation."
    },
    {
      icon: HiOutlineAdjustmentsHorizontal,
      title: "11 Modular Feature Control",
      desc: "Live toggles for Banners, Grievance Redressal, Vikas Works, Event Calendars, Media Gallery, Manifesto, Membership, Polls, and Poster Studio."
    },
    {
      icon: HiOutlineShieldCheck,
      title: "Staff RBAC & Permissions",
      desc: "Role-based access security (Read-Only Observer, Content Editor, Ward Coordinator, Super Admin) ensuring zero data leaks."
    },
    {
      icon: HiOutlineArrowDownTray,
      title: "Excel & CSV Data Export",
      desc: "Instant one-click exports for voter demographics, booth-level poll responses, ticket resolution timelines, and project milestone logs."
    },
    {
      icon: HiOutlineSparkles,
      title: "Custom Branding & Domain",
      desc: "Custom party colors, official leader logos, dedicated custom domain DNS setup, leader biography, and customized terms & privacy policies."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-sky-900 text-xs font-extrabold uppercase tracking-widest bg-sky-100 border border-sky-300 px-3 py-1 rounded-full">
          {lang === 'hi' ? 'प्रशासनिक कार्यप्रणाली विवरण' : 'Administrative Ecosystem Overview'}
        </span>
        <h1 className="font-heading font-black text-3xl sm:text-4xl text-slate-950 tracking-tight">
          {brand.name} — {t.tabs.adminHeading}
        </h1>
        <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed">
          {t.tabs.adminDesc}
        </p>

        <div className="pt-2 flex justify-center">
          <button
            onClick={onOpenDemoModal}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-sky-600 hover:bg-sky-700 shadow-xs transition-all cursor-pointer"
          >
            <HiOutlineSparkles className="w-4 h-4" />
            <span>{t.tabs.adminBtn}</span>
          </button>
        </div>
      </div>

      {/* Live Phone Screen Showcase for Admin Panel */}
      <div className="flex justify-center py-4">
        <PhoneVideoMockup 
          badge={lang === 'hi' ? "📱 लाइव एडमिन व मोबाइल ऐप वॉकथ्रू" : "📱 Live Admin & Mobile App Walkthrough"}
        />
      </div>

      {/* Admin Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {adminModulesList.map((m, idx) => {
          const Icon = m.icon;
          return (
            <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 border border-sky-200 flex items-center justify-center">
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

      {/* Admin App Screenshots Interactive Carousel */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
        <AppScreensSlider 
          images={Object.values(adminAppImages)}
          title={lang === 'hi' ? "एडमिन पैनल संपूर्ण मोबाइल वॉकथ्रू" : "Complete Admin App Screen Tour"}
          subtitle={lang === 'hi' ? "21+ वास्तविक मोबाइल स्क्रीन्स: वार्ड, कार्यकर्ता, शिकायत निस्तारण व मॉड्यूल्स" : "21+ live mobile screens covering all operational facets of constituency management"}
          badge={lang === 'hi' ? "स्क्रीनशॉट गैलरी" : "Admin Gallery"}
          accentColor="sky"
        />
      </div>

      {/* CTA */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3 shadow-xs">
        <h3 className="font-heading font-black text-xl text-slate-950">
          {lang === 'hi' ? 'क्या आप लाइव स्क्रीन डेमो देखना चाहते हैं?' : 'Would you like a live screen share demonstration?'}
        </h3>
        <p className="text-xs sm:text-sm text-slate-700 max-w-lg mx-auto font-medium">
          {lang === 'hi' 
            ? 'हमारे विशेषज्ञ स्क्रीन शेयर के माध्यम से आपको एडमिन पैनल के सभी फीचर्स और कार्यप्रणाली का लाइव प्रदर्शन कराएंगे।' 
            : 'Our specialists will give you a complete live walkthrough of the Admin Panel via screen share.'}
        </p>
        <div className="pt-2 flex justify-center gap-3">
          <button
            onClick={onOpenDemoModal}
            className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-sky-600 hover:bg-sky-700 shadow-xs transition-all cursor-pointer"
          >
            {lang === 'hi' ? 'स्क्रीन वॉकथ्रू बुक करें' : 'Book Screen Walkthrough'}
          </button>
          <a
            href={`tel:${CONTACT_INFO.phoneRaw}`}
            className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all"
          >
            {t.brand.callUs} {CONTACT_INFO.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
