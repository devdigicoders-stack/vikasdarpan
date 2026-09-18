import React from 'react';
import { HiOutlineShieldCheck, HiOutlineLockClosed, HiOutlineDocumentText } from 'react-icons/hi2';
import { useLanguage } from '../context/LanguageContext';
import { getBrandInfo } from '../data/platformData';

export default function PrivacyTermsPage() {
  const { lang } = useLanguage();
  const brand = getBrandInfo(lang);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      <div className="text-center space-y-2">
        <span className="text-sky-900 text-xs font-extrabold uppercase tracking-widest bg-sky-100 border border-sky-300 px-3 py-1 rounded-full">
          {lang === 'hi' ? 'डाटा सुरक्षा एवं नीति' : 'Data Privacy & Governance Standards'}
        </span>
        <h1 className="font-heading font-black text-2xl sm:text-3xl text-slate-950">
          {lang === 'hi' ? 'गोपनीयता नीति एवं नियम व शर्तें' : 'Privacy Policy & Terms of Service'}
        </h1>
        <p className="text-xs text-slate-600 font-medium">
          {lang === 'hi' 
            ? 'अंतिम अद्यतन: मार्च 2026 | भारतीय डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम के अनुरूप' 
            : 'Last Updated: March 2026 | Compliant with Digital Personal Data Protection Standards'}
        </p>
      </div>

      <div className="space-y-6 bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl text-slate-800 text-xs sm:text-sm leading-relaxed shadow-xs font-medium">
        <section className="space-y-2">
          <h3 className="font-heading font-black text-base sm:text-lg text-slate-950 flex items-center gap-2">
            <HiOutlineShieldCheck className="w-5 h-5 text-sky-700" />
            {lang === 'hi' ? '1. डाटा स्वामित्व एवं सुरक्षा' : '1. Data Ownership & Encryption Standards'}
          </h3>
          <p>
            {lang === 'hi' 
              ? `${brand.name} पर अपलोड किए गए सभी मतदाता आंकड़े, शिकायत रजिस्टर, विकास कार्य विवरण और कार्यकर्ता सूचियां 100% संबंधित जनप्रतिनिधि एवं अभियान टीम की निजी संपत्ति हैं। हम किसी भी तीसरे पक्ष के साथ यह डाटा साझा नहीं करते।` 
              : `All voter databases, grievance ticket logs, public works expenditures, and cadre rosters uploaded to ${brand.name} are the 100% exclusive, private property of the respective leader and campaign team. Data is encrypted at rest and in transit and never shared with third parties.`}
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-heading font-black text-base sm:text-lg text-slate-950 flex items-center gap-2">
            <HiOutlineLockClosed className="w-5 h-5 text-emerald-700" />
            {lang === 'hi' ? '2. नागरिक सूचनाएं एवं ओटीपी प्रमाणीकरण' : '2. Constituent Privacy & Secure OTP Verification'}
          </h3>
          <p>
            {lang === 'hi' 
              ? 'नागरिक ऐप में लॉगिन हेतु उपयोग होने वाले मोबाइल नंबर केवल पहचान और समस्या समाधान की सूचनाएं भेजने के लिए सुरक्षित रूप से प्रयुक्त होते हैं।' 
              : 'Mobile phone numbers supplied by constituents during citizen registration are used strictly for identity verification, passwordless OTP sessions, and status updates regarding submitted grievances.'}
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-heading font-black text-base sm:text-lg text-slate-950 flex items-center gap-2">
            <HiOutlineDocumentText className="w-5 h-5 text-blue-700" />
            {lang === 'hi' ? '3. पोस्टर स्टूडियो के उपयोग की शर्तें' : '3. Poster Studio Usage & Election Compliance'}
          </h3>
          <p>
            {lang === 'hi' 
              ? 'पोस्टर स्टूडियो में अपलोड किए गए टेम्पलेट्स आधिकारिक होने चाहिए और सक्रिय चुनाव अवधि के दौरान चुनाव आयोग के आदर्श आचार संहिता (MCC) के दिशा-निर्देशों का पालन करते होने चाहिए।' 
              : 'Campaign poster graphic templates uploaded by admin operators must comply with official party guidelines and the Model Code of Conduct (MCC) during active election periods.'}
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-heading font-black text-base sm:text-lg text-slate-950 flex items-center gap-2">
            <HiOutlineShieldCheck className="w-5 h-5 text-purple-700" />
            {lang === 'hi' ? '4. सेवा एवं 24x7 तकनीकी सहायता' : '4. Uptime SLAs & 24x7 War Room Support'}
          </h3>
          <p>
            {lang === 'hi' 
              ? 'सभी क्लाउड सर्वर उच्च सुरक्षा प्रोटोकॉल और दैनिक ऑटो-बैकअप से सुरक्षित हैं। अभियान अवधि में 24x7 तकनीकी सहायता सुनिश्चित की जाती है।' 
              : 'Our cloud platform maintains 99.9% high availability with daily automated secure snapshots and round-the-clock engineering support during intense election campaign cycles.'}
          </p>
        </section>
      </div>
    </div>
  );
}
