import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import PosterStudioInteractive from '../components/PosterStudioInteractive';
import { useLanguage } from '../context/LanguageContext';
import { CONTACT_INFO, getBrandInfo } from '../data/platformData';

export default function PosterStudioPage({ onOpenDemoModal }) {
  const { t, lang } = useLanguage();
  const brand = getBrandInfo(lang);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-sky-900 text-xs font-extrabold uppercase tracking-widest bg-sky-100 border border-sky-300 px-3 py-1 rounded-full">
          {t.poster.tag}
        </span>
        <h1 className="font-heading font-black text-3xl sm:text-4xl text-slate-950 tracking-tight">
          {brand.name} — {t.poster.title}
        </h1>
        <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed">
          {t.poster.desc}
        </p>
      </div>

      {/* Interactive Poster Studio component */}
      <PosterStudioInteractive />

      {/* Benefits grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
        <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 border border-sky-200 flex items-center justify-center font-bold text-xs">
            01
          </div>
          <h3 className="font-heading font-black text-base text-slate-950">
            {lang === 'hi' ? 'ग्राफिक डिज़ाइनर का शून्य खर्च' : 'Zero Graphic Designer Costs'}
          </h3>
          <p className="text-xs text-slate-700 leading-relaxed font-medium">
            {lang === 'hi' 
              ? 'कार्यकर्ताओं को डिज़ाइनर के पास जाने की आवश्यकता नहीं। एडमिन द्वारा अपलोड 1 टेम्पलेट पर 50,000 कार्यकर्ता तुरंत अपना पोस्टर बना लेते हैं।' 
              : 'Supporters do not need Photoshop or designers. One template uploaded by your admin team generates personalized posters for 50,000+ workers instantly.'}
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 border border-sky-200 flex items-center justify-center font-bold text-xs">
            02
          </div>
          <h3 className="font-heading font-black text-base text-slate-950">
            {lang === 'hi' ? 'व्हाट्सएप स्टेटस पर स्वतः प्रचार' : 'Organic Viral WhatsApp Reach'}
          </h3>
          <p className="text-xs text-slate-700 leading-relaxed font-medium">
            {lang === 'hi' 
              ? 'समर्थक नेताजी के साथ अपनी फोटो देखकर गर्व महसूस करते हैं और इसे अपने व्हाट्सएप स्टेटस पर लगाते हैं, जिससे लाखों लोगों तक सीधा संदेश पहुंचता है।' 
              : 'Supporters proudly post their official photo alongside their leader to their WhatsApp status, multiplying your campaign reach exponentially.'}
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2.5 shadow-xs">
          <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 border border-sky-200 flex items-center justify-center font-bold text-xs">
            03
          </div>
          <h3 className="font-heading font-black text-base text-slate-950">
            {lang === 'hi' ? '100% ब्रांड व संदेश नियंत्रण' : '100% Brand & Message Control'}
          </h3>
          <p className="text-xs text-slate-700 leading-relaxed font-medium">
            {lang === 'hi' 
              ? 'गलत स्लोगन या बिगड़े हुए लोगो का कोई खतरा नहीं। सभी स्लोगन, तारीखें और नेताजी के चित्र उच्च गुणवत्ता और आधिकारिक स्वरूप में रहते हैं।' 
              : 'No distorted logos or unauthorized slogans. All dates, quotes, and party symbols remain in pixel-perfect high-definition.'}
          </p>
        </div>
      </div>

      {/* Callout */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3 shadow-xs">
        <h3 className="font-heading font-black text-xl text-slate-950">
          {lang === 'hi' ? 'क्या आप अपने नेताजी के ब्रांडेड टेम्पलेट चाहते हैं?' : 'Need Branded Templates for Your Leader?'}
        </h3>
        <p className="text-xs sm:text-sm text-slate-700 max-w-lg mx-auto font-medium">
          {lang === 'hi' 
            ? 'हमारी डिज़ाइन टीम आपके नेताजी के लिए 25+ विशेष त्योहार, जन्मदिन, जनसभा और विकास संकल्प के एचडी टेम्पलेट्स प्री-लोड करके देती है।' 
            : 'Our design studio creates and pre-loads 25+ HD festival, rally, birthday, and constituency development templates custom branded for your leader.'}
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <a
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-xs"
          >
            <FaWhatsapp className="w-4 h-4" />
            <span>{t.brand.whatsappChat}: {CONTACT_INFO.phone}</span>
          </a>
          <button
            onClick={onOpenDemoModal}
            className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-sky-600 hover:bg-sky-700 transition-all cursor-pointer shadow-xs"
          >
            {t.brand.bookDemo}
          </button>
        </div>
      </div>
    </div>
  );
}
