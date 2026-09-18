import React, { useState } from 'react';
import { 
  HiOutlineClipboardDocumentCheck, 
  HiOutlineUserGroup, 
  HiOutlineCheckBadge,
  HiOutlineLockClosed,
  HiOutlineGlobeAlt,
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlineMapPin
} from 'react-icons/hi2';
import { useLanguage } from '../context/LanguageContext';

export default function GrievanceWorkflowDemo() {
  const [activeStage, setActiveStage] = useState(0);
  const [visibilityMode, setVisibilityMode] = useState('public');
  const { lang, t } = useLanguage();

  const stages = lang === 'en' ? [
    {
      id: 0,
      title: "1. Grievance Lodged",
      state: "Pending Review",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
      icon: HiOutlineClipboardDocumentCheck,
      details: {
        ticketId: "VD-2026-8942",
        category: "Road & Power Infrastructure",
        citizen: "Amit Kumar Tiwari",
        area: "Ward No. 12, Gram Panchayat Rampur, Sadar Block",
        submittedDate: "Today at 09:15 AM",
        status: "Pending Triage",
        summary: "Main transformer flickering and 3 streetlights non-functional near Primary School for past 4 days.",
        assignedTo: "Unassigned (Command Center Queue)"
      }
    },
    {
      id: 1,
      title: "2. Delegated to Ward Rep",
      state: "In Progress",
      badgeColor: "bg-sky-100 text-sky-900 border-sky-300",
      icon: HiOutlineUserGroup,
      details: {
        ticketId: "VD-2026-8942",
        category: "Road & Power Infrastructure",
        citizen: "Amit Kumar Tiwari",
        area: "Ward No. 12, Gram Panchayat Rampur, Sadar Block",
        submittedDate: "Today at 10:30 AM",
        status: "In Progress",
        summary: "Main transformer flickering and 3 streetlights non-functional near Primary School.",
        assignedTo: "Suresh Pal (Ward 12 In-charge / Electricity Board Liaison)",
        actionTaken: "Field inspection scheduled with JE Electricity today at 2:00 PM."
      }
    },
    {
      id: 2,
      title: "3. Resolved with Proof",
      state: "Successfully Resolved",
      badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
      icon: HiOutlineCheckBadge,
      details: {
        ticketId: "VD-2026-8942",
        category: "Road & Power Infrastructure",
        citizen: "Amit Kumar Tiwari",
        area: "Ward No. 12, Gram Panchayat Rampur, Sadar Block",
        submittedDate: "Today at 04:45 PM",
        status: "Resolved (Photo Attached)",
        summary: "Transformer phase replaced and all 3 LED streetlights energized successfully.",
        assignedTo: "Suresh Pal (Ward 12 In-charge)",
        resolutionNote: "Fixed by field lineman team under supervision. Citizen verified and rated 5/5 stars ⭐⭐⭐⭐⭐."
      }
    }
  ] : [
    {
      id: 0,
      title: "1. समस्या पंजीकरण",
      state: "लंबित समीक्षा",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
      icon: HiOutlineClipboardDocumentCheck,
      details: {
        ticketId: "VD-2026-8942",
        category: "सड़क एवं विद्युत व्यवस्था",
        citizen: "अमित कुमार तिवारी",
        area: "वार्ड नं 12, ग्राम पंचायत रामपुर, ब्लॉक सदर",
        submittedDate: "आज प्रातः 09:15 बजे",
        status: "समीक्षा हेतु लंबित",
        summary: "प्राथमिक विद्यालय के पास ट्रांसफार्मर में स्पार्किंग और 3 स्ट्रीट लाइटें 4 दिनों से बंद हैं।",
        assignedTo: "असाइन किया जा रहा है (कंट्रोल रूम)"
      }
    },
    {
      id: 1,
      title: "2. वार्ड प्रभारी को सौंपा",
      state: "प्रगति पर",
      badgeColor: "bg-sky-100 text-sky-900 border-sky-300",
      icon: HiOutlineUserGroup,
      details: {
        ticketId: "VD-2026-8942",
        category: "सड़क एवं विद्युत व्यवस्था",
        citizen: "अमित कुमार तिवारी",
        area: "वार्ड नं 12, ग्राम पंचायत रामपुर, ब्लॉक सदर",
        submittedDate: "आज पूर्वाह्न 10:30 बजे",
        status: "कार्य प्रगति पर",
        summary: "प्राथमिक विद्यालय के पास ट्रांसफार्मर में स्पार्किंग और स्ट्रीट लाइटें बंद।",
        assignedTo: "सुरेश पाल (वार्ड 12 प्रभारी / विद्युत विभाग समन्वय)",
        actionTaken: "बिजली विभाग की टीम को आज दोपहर 2 बजे मौके पर निरीक्षण हेतु निर्देशित किया गया।"
      }
    },
    {
      id: 2,
      title: "3. फोटो प्रूफ समाधान",
      state: "सफलतापूर्वक निस्तारित",
      badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
      icon: HiOutlineCheckBadge,
      details: {
        ticketId: "VD-2026-8942",
        category: "सड़क एवं विद्युत व्यवस्था",
        citizen: "अमित कुमार तिवारी",
        area: "वार्ड नं 12, ग्राम पंचायत रामपुर, ब्लॉक सदर",
        submittedDate: "आज सायं 04:45 बजे",
        status: "निस्तारित (फोटो अपलोड)",
        summary: "ट्रांसफार्मर का फेज बदला गया और तीनों स्ट्रीट लाइटें चालू कर दी गईं।",
        assignedTo: "सुरेश पाल (वार्ड 12 प्रभारी)",
        resolutionNote: "लाइनमैन टीम द्वारा मौके पर कार्य पूर्ण कराया गया। नागरिक ने संतुष्टि रेटिंग (5/5 स्टार्स ⭐⭐⭐⭐⭐) प्रदान की।"
      }
    }
  ];

  const current = stages[activeStage];

  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-7 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-100 border border-sky-300 text-sky-900 text-[11px] font-bold uppercase tracking-wider mb-1">
            <span>{t.grievance.tag}</span>
          </div>
          <h3 className="font-heading font-black text-xl sm:text-2xl text-slate-950">
            {t.grievance.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 mt-0.5 font-medium">
            {t.grievance.desc}
          </p>
        </div>

        {/* Visibility Toggle */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-300">
          <button
            onClick={() => setVisibilityMode('public')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
              visibilityMode === 'public'
                ? 'bg-sky-600 text-white shadow-2xs'
                : 'text-slate-800 hover:text-slate-950'
            }`}
          >
            <HiOutlineGlobeAlt className="w-3.5 h-3.5" />
            <span>{t.grievance.publicMode}</span>
          </button>
          <button
            onClick={() => setVisibilityMode('private')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
              visibilityMode === 'private'
                ? 'bg-slate-800 text-white shadow-2xs'
                : 'text-slate-800 hover:text-slate-950'
            }`}
          >
            <HiOutlineLockClosed className="w-3.5 h-3.5" />
            <span>{t.grievance.privateMode}</span>
          </button>
        </div>
      </div>

      {/* Stage Progression Buttons */}
      <div className="grid grid-cols-3 gap-2.5 py-4">
        {stages.map((stg, idx) => {
          const Icon = stg.icon;
          return (
            <button
              key={stg.id}
              onClick={() => setActiveStage(idx)}
              className={`p-2.5 sm:p-3 rounded-xl border text-left transition-all ${
                activeStage === idx
                  ? 'border-sky-600 bg-sky-50 ring-2 ring-sky-500/20 shadow-2xs'
                  : 'border-slate-300 bg-slate-50 hover:border-sky-400'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <Icon className={`w-4 h-4 ${activeStage === idx ? 'text-sky-700' : 'text-slate-500'}`} />
                <span className={`text-[9px] font-extrabold px-1.5 py-0.2 rounded-full border ${stg.badgeColor}`}>
                  {stg.state}
                </span>
              </div>
              <h5 className="font-heading font-bold text-xs text-slate-950 truncate">{stg.title}</h5>
            </button>
          );
        })}
      </div>

      {/* Simulated Live Ticket Card */}
      <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-xs text-sky-800 bg-white px-2 py-0.5 rounded border border-slate-300">
              {current.details.ticketId}
            </span>
            <span className="text-xs font-bold text-slate-900">{current.details.category}</span>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className={`px-2 py-0.5 rounded border font-bold text-[11px] ${current.badgeColor}`}>
              ● {current.details.status}
            </span>
            <span className="text-slate-600 text-[11px] font-semibold">
              {visibilityMode === 'public' ? (lang === 'en' ? '🌍 Public Mode' : '🌍 पब्लिक दृश्यमान') : (lang === 'en' ? '🔒 Private Mode' : '🔒 गोपनीय')}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3.5">
          <div className="space-y-2">
            <div>
              <span className="text-[10px] uppercase font-extrabold text-slate-600 tracking-wider">
                {t.grievance.descHeading}
              </span>
              <p className="text-xs font-medium text-slate-900 mt-1 leading-relaxed bg-white p-2.5 rounded-lg border border-slate-200">
                "{current.details.summary}"
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-slate-700 font-semibold">
              <HiOutlineMapPin className="w-3.5 h-3.5 text-sky-700" />
              <span>{current.details.area}</span>
            </div>

            <div className="text-[11px] text-slate-600 font-medium">
              {t.grievance.filedBy} <strong className="text-slate-950">{current.details.citizen}</strong> ({current.details.submittedDate})
            </div>
          </div>

          <div className="space-y-2 bg-white p-3 rounded-lg border border-slate-200">
            <div>
              <span className="text-[10px] uppercase font-extrabold text-slate-600 tracking-wider">
                {t.grievance.adminResp}
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <HiOutlineUserGroup className="w-3.5 h-3.5 text-sky-700" />
                <span className="text-xs font-bold text-slate-950">{current.details.assignedTo}</span>
              </div>
            </div>

            {current.details.actionTaken && (
              <div className="text-[11px] bg-sky-50 border border-sky-200 p-2 rounded text-sky-950 leading-snug font-medium">
                <strong>{t.grievance.fieldAction}</strong> {current.details.actionTaken}
              </div>
            )}

            {current.details.resolutionNote && (
              <div className="text-[11px] bg-emerald-50 border border-emerald-300 p-2 rounded text-emerald-950 space-y-0.5 leading-snug font-medium">
                <div className="font-bold flex items-center gap-1 text-emerald-800">
                  <HiOutlineCheckBadge className="w-3.5 h-3.5 text-emerald-700" />
                  {t.grievance.resolutionLogged}
                </div>
                <p>{current.details.resolutionNote}</p>
              </div>
            )}

            <div className="pt-1.5 flex items-center justify-between text-[11px] text-slate-600 border-t border-slate-100 font-medium">
              <span className="flex items-center gap-1">
                <HiOutlineChatBubbleLeftEllipsis className="w-3.5 h-3.5 text-sky-700" />
                <span>{lang === 'en' ? 'Threaded Chat Enabled' : 'थ्रेडेड चैट सक्षम'}</span>
              </span>
              <span className="text-emerald-800 font-bold">{t.grievance.sla}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
