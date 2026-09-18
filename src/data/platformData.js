export const CONTACT_INFO = {
  phone: "+91 91409 67607",
  phoneRaw: "+919140967607",
  whatsapp: "+91 91409 67607",
  whatsappLink: "https://wa.me/919140967607?text=Hello%20Vikas%20Darpan%20Team%2C%20I%20am%20interested%20in%20the%20platform.",
  email: "info@digicoders.in",
  address: "2nd Floor, B-36, Sector O, Near Ram Ram Bank Chauraha, Aliganj, Lucknow, Uttar Pradesh - 226021",
  shortAddress: "Aliganj, Lucknow, UP - 226021",
  supportHours: "24x7 सेवा एवं तकनीकी सहायता | 24x7 War-Room Support"
};

export const SOCIAL_LINKS = {
  website: "https://digicoders.in/",
  whatsapp: "https://wa.me/919140967607",
  whatsappChannel: "https://www.whatsapp.com/channel/0029VaDTIxW5EjxzOyubYT3l",
  facebook: "https://www.facebook.com/DigiCodersTech/",
  instagram: "https://www.instagram.com/digicoderstech/",
  youtube: "https://www.youtube.com/@digicoders",
  linkedin: "https://www.linkedin.com/company/digicoders/"
};

export const getBrandInfo = (lang = 'hi') => {
  return {
    name: lang === 'hi' ? "विकास दर्पण" : "Vikas Darpan",
    tagline: lang === 'hi' ? "आपकी आवाज़ | बेहतर कल की ओर — जनता से जनहित तक" : "Aapki Awaaz | Behtar Kal Ki Ore — Janta Se Janhit Tak",
    slogan1: lang === 'hi' ? "आपकी आवाज़ | बेहतर कल की ओर" : "Aapki Awaaz | Behtar Kal Ki Ore",
    slogan2: lang === 'hi' ? "जनता से जनहित तक" : "Janta Se Janhit Tak",
    productBy: "DigiCoders Technologies",
    subTitle: lang === 'hi' ? "आपकी आवाज़ | बेहतर कल की ओर" : "Aapki Awaaz | Behtar Kal Ki Ore",
    shortDesc: lang === 'hi' 
      ? "विकास दर्पण (A Product by DigiCoders) — जनता से जनहित तक, विधायक, सांसद, राजनीतिक दलों और जनप्रतिनिधियों के लिए आधुनिक डिजिटल मैनेजमेंट प्लेटफॉर्म"
      : "Vikas Darpan (A Product by DigiCoders) — Aapki Awaaz | Behtar Kal Ki Ore, next-gen governance & political campaign management platform"
  };
};

export const getCoreMetrics = (lang = 'hi') => {
  if (lang === 'en') {
    return [
      { value: "100K+", label: "Voters & Constituents Connected", change: "100% Transparent Governance" },
      { value: "98.4%", label: "Grievance Redressal Rate", change: "Within 48 Hours" },
      { value: "10x", label: "Faster Social Media Reach", change: "Via Dynamic Poster Studio" },
      { value: "4-Level", label: "Geographic Hierarchy", change: "Block to Polling Booth/Ward" }
    ];
  }
  return [
    { value: "1,00,000+", label: "मतदाता एवं नागरिक जुड़ाव", change: "100% पारदर्शी व्यवस्था" },
    { value: "98.4%", label: "जन समस्या निस्तारण दर", change: "समयबद्ध समाधान" },
    { value: "10x", label: "तेज़ सोशल मीडिया प्रचार", change: "पोस्टर स्टूडियो द्वारा" },
    { value: "4-स्तरीय", label: "भौगोलिक पदानुक्रम", change: "ब्लॉक से वार्ड/बूथ तक" }
  ];
};

export const getTenantModules = (lang = 'hi') => {
  if (lang === 'en') {
    return [
      {
        id: "complaints",
        name: "Jan Samasya (Grievance Redressal)",
        tagline: "Constituent issue filing, photo proofs, GPS mapping, and SLA tracking",
        icon: "HiOutlineClipboardDocumentList",
        badge: "Core Solution",
        color: "from-sky-500 to-blue-600",
        description: "Citizens lodge local grievances with photos and GPS. Public or private confidentiality modes with automated ticket assignment to ward leaders.",
        features: [
          "Public & Private confidentiality modes",
          "Real-time state flow (Pending ➔ In Progress ➔ Resolved)",
          "Auto-delegation to ward coordinators & booth in-charges",
          "Threaded resolution chat with photo resolution proof",
          "Excel & CSV complete reports export"
        ]
      },
      {
        id: "poster",
        name: "Dynamic Poster Studio",
        tagline: "1-Click branded social media poster generator for supporters",
        icon: "HiOutlineSparkles",
        badge: "Viral Growth",
        color: "from-cyan-500 to-sky-600",
        description: "Official templates uploaded by Admin. Citizens enter their name, designation, photo and generate custom HD posters in 2 seconds for WhatsApp status.",
        features: [
          "Festival greetings, rally schedules & daily vision templates",
          "Automated face cropping into circular frames",
          "1-Click instant WhatsApp Status & Social Media sharing",
          "Zero graphic designer dependency for party cadre",
          "Leader official branding secured on every poster"
        ]
      },
      {
        id: "works",
        name: "Vikas Karya (Public Works Tracker)",
        tagline: "Live progress showcase of public infrastructure projects",
        icon: "HiOutlineBuildingOffice2",
        badge: "Accountability",
        color: "from-blue-500 to-indigo-600",
        description: "Catalog and showcase completed and ongoing roads, schools, hospitals, water pipelines with sanctioned budget, milestones and before/after photos.",
        features: [
          "Before and After progress photography",
          "Ward & Gram Panchayat level filtering",
          "Sanctioned fund & budget transparency",
          "Milestone completion percentages",
          "Public social sharing by constituents"
        ]
      },
      {
        id: "membership",
        name: "Digital Cadre Membership & ID Cards",
        tagline: "Verified digital worker onboarding with verifiable QR IDs",
        icon: "HiOutlineIdentification",
        badge: "Cadre Management",
        color: "from-teal-500 to-sky-600",
        description: "Digital member onboarding forms. Administrative approval generates official high-resolution ID cards with verifiable QR codes and designation tiers.",
        features: [
          "Instant verified Digital ID Card generation",
          "Multi-tier roles (Citizen, Volunteer, Member, Booth Leader)",
          "QR code membership verification",
          "Renewal tracking & digital cadre database",
          "Export voter and worker records"
        ]
      },
      {
        id: "polls",
        name: "Public Polls & Opinion Surveys",
        tagline: "Real-time voter sentiment & issue feedback surveys",
        icon: "HiOutlineChartBar",
        badge: "Voter Intelligence",
        color: "from-sky-600 to-blue-700",
        description: "Draft, publish, and manage interactive polls. Get instantaneous graphical analytics on constituent priorities, policy proposals, and candidate popularity.",
        features: [
          "Instant sentiment feedback on local issues",
          "1-Citizen 1-Vote OTP verified polling",
          "Graphical real-time analytics & result declarations",
          "Targeted surveys by Block or Panchayat",
          "Survey dataset export (CSV/Excel)"
        ]
      },
      {
        id: "events",
        name: "Events & Public Rally Management",
        tagline: "Daily tours, public chaupals & campaign rally schedules with RSVP",
        icon: "HiOutlineCalendarDays",
        badge: "Mobilization",
        color: "from-cyan-600 to-sky-700",
        description: "Interactive campaign calendar showcasing daily schedules, public tours, and rallies. Citizens can RSVP (Accept/Attend) and view Google Maps directions.",
        features: [
          "Interactive calendar with RSVP tracking",
          "Automated mobile reminder alerts before events",
          "Live GPS venue location integration",
          "Attendance count predictions for logistics",
          "Personalized schedule for registered supporters"
        ]
      },
      {
        id: "notifications",
        name: "Targeted Push Broadcasting",
        tagline: "Instant direct messages straight to mobile notification trays",
        icon: "HiOutlineMegaphone",
        badge: "Direct Reach",
        color: "from-sky-500 to-cyan-600",
        description: "Broadcast announcements, festival greetings, and urgent alerts straight to thousands of mobile app users in seconds with zero SMS charges.",
        features: [
          "High-priority mobile push notifications",
          "Geographic segmentation by Ward/Block",
          "Rich media banner images with clickable links",
          "Notification archive inside citizen app",
          "Zero SMS delivery costs"
        ]
      },
      {
        id: "news",
        name: "Newsroom & Press Releases",
        tagline: "Official press portal & policy vision publishing hub",
        icon: "HiOutlineNewspaper",
        badge: "Media Hub",
        color: "from-blue-600 to-sky-600",
        description: "Centralized publishing hub for official statements, media coverage, daily articles, and leader achievements to counter misinformation.",
        features: [
          "Instant publishing with rich media and images",
          "View count & engagement monitoring",
          "Official press kit and media downloads",
          "1-Click WhatsApp and social share buttons",
          "Editorial approval workflow"
        ]
      },
      {
        id: "manifesto",
        name: "Sankalp Patra (Manifesto Portal)",
        tagline: "Showcase election vision, commitments & downloadable PDFs",
        icon: "HiOutlineBookOpen",
        badge: "Vision",
        color: "from-sky-700 to-blue-800",
        description: "Categorized policies (Farmers, Youth, Women, Education, Healthcare) and downloadable official multi-language Sankalp Patra PDFs.",
        features: [
          "Categorized promise cards with status",
          "Downloadable official PDF documents",
          "Completed promises tracking dashboard",
          "Audio / Video messages from the Leader",
          "Social sharing of specific promise cards"
        ]
      },
      {
        id: "gallery",
        name: "Photo & Video Repositories",
        tagline: "High-definition campaign media archives & live streams",
        icon: "HiOutlinePhoto",
        badge: "Gallery",
        color: "from-cyan-500 to-blue-600",
        description: "Organized media albums categorized by campaign tours, inaugurations, public interactions, and official speeches with YouTube/Facebook live embeds.",
        features: [
          "High-resolution photo albums",
          "Embedded rally video speeches & live streams",
          "Downloadable promotional assets for supporters",
          "Tagging by event and geographic location",
          "Fast cloud media delivery"
        ]
      },
      {
        id: "hierarchy",
        name: "4-Level Geographic Area Hierarchy",
        tagline: "Micro-level constituency mapping from Block to Booth/Ward",
        icon: "HiOutlineMapPin",
        badge: "Micro Governance",
        color: "from-teal-600 to-sky-700",
        description: "Structure your constituency into Block ➔ Gram Panchayat ➔ Village ➔ Ward hierarchies for precision voter targeting and grievance delegation.",
        features: [
          "Level 1: Block / Tehsil",
          "Level 2: Gram Panchayat / Municipality",
          "Level 3: Village / Sector",
          "Level 4: Ward / Polling Booth",
          "Granular booth-wise grievance & voter analytics"
        ]
      }
    ];
  }

  // Hindi default
  return [
    {
      id: "complaints",
      name: "जन समस्या निवारण प्रणाली",
      tagline: "नागरिकों की समस्याओं का त्वरित पंजीकरण, फोटो प्रूफ और निस्तारण ट्रैकिंग",
      icon: "HiOutlineClipboardDocumentList",
      badge: "मुख्य समाधान",
      color: "from-sky-500 to-blue-600",
      description: "नागरिक मोबाइल ऐप द्वारा फोटो एवं लोकेशन सहित अपनी समस्या दर्ज कर सकते हैं। इसे पब्लिक या प्राइवेट मोड में रखा जा सकता है तथा संबंधित वार्ड या ब्लॉक प्रतिनिधि को सौंपा जा सकता है।",
      features: [
        "पब्लिक एवं प्राइवेट गोपनीयता मोड",
        "रियल-टाइम स्थिति (लंबित ➔ प्रगति पर ➔ निस्तारित)",
        "स्थानीय वार्ड व बूथ प्रभारियों को ऑटो-डेलिगेशन",
        "नागरिक के साथ सीधे थ्रेडेड चैट एवं समाधान फोटो",
        "एक्सेल एवं सीएसवी रिपोर्ट डाउनलोड"
      ]
    },
    {
      id: "poster",
      name: "डायनेमिक पोस्टर स्टूडियो",
      tagline: "कार्यकर्ताओं और समर्थकों के लिए 1-क्लिक सोशल मीडिया पोस्टर जनरेटर",
      icon: "HiOutlineSparkles",
      badge: "प्रचार इंजन",
      color: "from-cyan-500 to-sky-600",
      description: "प्रशासन द्वारा अपलोड किए गए आधिकारिक बैकग्राउंड पर नागरिक केवल अपना नाम, पद और फोटो डालकर 2 सेकंड में एचडी पोस्टर बनाकर व्हाट्सएप और फेसबुक पर शेयर कर सकते हैं।",
      features: [
        "त्योहार, रैली एवं दैनिक शुभकामना टेम्पलेट्स",
        "ऑटो-क्रॉपिंग एवं सर्कुलर फोटो फ्रेमिंग",
        "1-क्लिक व्हाट्सएप स्टेटस एवं सोशल मीडिया शेयरिंग",
        "बिना किसी ग्राफिक डिज़ाइनर की निर्भरता",
        "नेताजी की ब्रांडिंग हर पोस्टर पर सुरक्षित"
      ]
    },
    {
      id: "works",
      name: "विकास कार्य ट्रैकर",
      tagline: "क्षेत्र में हुए विकास कार्यों एवं योजनाओं का लाइव रिपोर्ट कार्ड",
      icon: "HiOutlineBuildingOffice2",
      badge: "पारदर्शिता",
      color: "from-blue-500 to-indigo-600",
      description: "सड़क, विद्यालय, अस्पताल, सोलर लाइट आदि सार्वजनिक विकास कार्यों का बजट, माइलस्टोन प्रगति और पहले/बाद की फोटो के साथ विवरण।",
      features: [
        "विकास कार्यों की पहले और बाद की तस्वीरें",
        "वार्ड एवं ग्राम पंचायत स्तर पर फ़िल्टर",
        "स्वीकृत बजट एवं लागत की पारदर्शिता",
        "माइलस्टोन प्रतिशत एवं पूर्णता की तिथि",
        "नागरिकों द्वारा सोशल मीडिया पर शेयरिंग"
      ]
    },
    {
      id: "membership",
      name: "डिजिटल सदस्यता एवं आईडी कार्ड",
      tagline: "कार्यकर्ताओं व सदस्यों का डिजिटल सत्यापन और क्यूआर कोड आईडी",
      icon: "HiOutlineIdentification",
      badge: "संगठन प्रबंधन",
      color: "from-teal-500 to-sky-600",
      description: "डिजिटल फॉर्म द्वारा नए सदस्यों का पंजीकरण। प्रशासनिक सत्यापन के बाद सदस्यों को आधिकारिक डिजिटल पहचान पत्र (ID Card) क्यूआर कोड के साथ प्राप्त होता है।",
      features: [
        "सत्यापित डिजिटल आईडी कार्ड जनरेशन",
        "पदानुक्रम (नागरिक, स्वयंसेवक, सदस्य, बूथ प्रमुख)",
        "क्यूआर कोड आधारित पहचान सत्यापन",
        "सदस्यता नवीनीकरण व सदस्यता सूची",
        "कैडर डाटाबेस का सुरक्षित रिकॉर्ड"
      ]
    },
    {
      id: "polls",
      name: "जनमत सर्वेक्षण एवं पोल्स",
      tagline: "क्षेत्रीय मुद्दों पर जनता की राय और रियल-टाइम वोटिंग आंकड़े",
      icon: "HiOutlineChartBar",
      badge: "जनमत विश्लेषण",
      color: "from-sky-600 to-blue-700",
      description: "जनता की राय जानने हेतु ऑनलाइन पोल और सर्वेक्षण। क्षेत्र के विकास और नीतिगत मुद्दों पर जनता के वोट और ग्राफिकल रिपोर्ट।",
      features: [
        "स्थानीय मुद्दों पर तुरंत फीडबैक",
        "ओटीपी आधारित निष्पक्ष मतदान (1-वोटर 1-वोट)",
        "ग्राफिकल रियल-टाइम आंकड़े व परिणाम",
        "ब्लॉक या पंचायत अनुसार लक्षित सर्वेक्षण",
        "सर्वेक्षण डाटा डाउनलोड सुविधा"
      ]
    },
    {
      id: "events",
      name: "कार्यक्रम एवं जनसभा कैलेंडर",
      tagline: "दैनिक दौरे, जन चौपाल, रैलियों का शेड्यूल एवं उपस्थिति प्रबंधन",
      icon: "HiOutlineCalendarDays",
      badge: "कार्यक्रम",
      color: "from-cyan-600 to-sky-700",
      description: "नेताजी के आगामी कार्यक्रमों, रैलियों और चौपालों का संपूर्ण कैलेंडर। नागरिक कार्यक्रम का समय, स्थान देखकर अपनी उपस्थिति (RSVP) दर्ज करा सकते हैं।",
      features: [
        "इंटरएक्टिव कैलेंडर एवं रैली विवरण",
        "उपस्थिति स्वीकृति (RSVP) ट्रैकिंग",
        "कार्यक्रम का गूगल मैप्स लोकेशन लिंक",
        "कार्यक्रम पूर्व मोबाइल रिमाइंडर",
        "उपस्थिति संख्या का सटीक अनुमान"
      ]
    },
    {
      id: "notifications",
      name: "सीधी मोबाइल सूचनाएं (ब्रॉडकास्ट)",
      tagline: "बिना किसी सोशल मीडिया अल्गोरिदम के सीधे फोन पर संदेश",
      icon: "HiOutlineMegaphone",
      badge: "सीधा संवाद",
      color: "from-sky-500 to-cyan-600",
      description: "क्षेत्रवासियों तक महत्वपूर्ण घोषणाएं, बधाई संदेश, आपातकालीन सूचनाएं सीधे उनके मोबाइल पर बिना किसी एसएमएस खर्च के पहुंचाएं।",
      features: [
        "हाई-प्रायोरिटी पुश नोटिफिकेशन",
        "क्षेत्रीय वर्गीकरण (विशिष्ट वार्ड या ब्लॉक)",
        "इमेज बैनर व लिंक सहित संदेश",
        "ऐप में सूचनाओं का पूरा इतिहास",
        "शून्य एसएमएस लागत"
      ]
    },
    {
      id: "news",
      name: "समाचार एवं प्रेस विज्ञप्ति",
      tagline: "आधिकारिक समाचार, उपलब्धियां और प्रेस नोट का डिजिटल हब",
      icon: "HiOutlineNewspaper",
      badge: "मीडिया हब",
      color: "from-blue-600 to-sky-600",
      description: "सकारात्मक कार्यों, मीडिया कवरेज और प्रेस विज्ञप्तियों का प्रामाणिक प्रकाशन। भ्रामक खबरों का खंडन और सही जानकारी का प्रसार।",
      features: [
        "इमेज व वीडियो सहित तुरंत पब्लिशिंग",
        "रीड/व्यू काउंट एवं शेयरिंग मेट्रिक्स",
        "आधिकारिक प्रेस किट डाउनलोड",
        "1-क्लिक व्हाट्सएप व सोशल शेयरिंग",
        "ड्राफ्ट एवं एडिटोरियल अप्रूवल"
      ]
    },
    {
      id: "manifesto",
      name: "संकल्प पत्र एवं विज़न पोर्टल",
      tagline: "चुनावी वादों, नीतियों और विज़न डॉक्यूमेंट की संपूर्ण जानकारी",
      icon: "HiOutlineBookOpen",
      badge: "विज़न",
      color: "from-sky-700 to-blue-800",
      description: "शिक्षा, स्वास्थ्य, किसान, युवा, महिला सशक्तिकरण आदि क्षेत्रों के संकल्प पत्र का वर्गीकरण और डाउनलोड योग्य पीडीएफ।",
      features: [
        "क्षेत्रवार एवं वर्गवार वादों की सूची",
        "आधिकारिक संकल्प पत्र पीडीएफ डाउनलोड",
        "पूर्ण हुए वादों का स्टेटस ट्रैकर",
        "नेताजी का वीडियो व ऑडियो संदेश",
        "वादों के कार्ड्स का सोशल शेयरिंग"
      ]
    },
    {
      id: "gallery",
      name: "फोटो व वीडियो मीडिया गैलरी",
      tagline: "जनसम्पर्क, उद्घाटन, सभाओं की हाई-रेज़ोल्यूशन तस्वीरें व लाइव स्ट्रीम",
      icon: "HiOutlinePhoto",
      badge: "गैलरी",
      color: "from-cyan-500 to-blue-600",
      description: "विधानसभा/लोकसभा दौरों, जनसभाओं और विकास कार्यों की व्यवस्थित फोटो एल्बम और यूट्यूब/फेसबुक लाइव वीडियो लिंक्स।",
      features: [
        "हाई-क्वालिटी फोटो एल्बम",
        "जनसभाओं के वीडियो व लाइव लिंक्स",
        "समर्थकों के लिए डाउनलोड योग्य सामग्री",
        "इवेंट व स्थान के अनुसार टैगिंग",
        "फास्ट क्लाउड मीडिया डिलीवरी"
      ]
    },
    {
      id: "hierarchy",
      name: "4-स्तरीय भौगोलिक पदानुक्रम",
      tagline: "ब्लॉक ➔ ग्राम पंचायत ➔ गाँव ➔ वार्ड/बूथ तक सूक्ष्म प्रबंधन",
      icon: "HiOutlineMapPin",
      badge: "सूक्ष्म नियंत्रण",
      color: "from-teal-600 to-sky-700",
      description: "पूरे क्षेत्र को ब्लॉक, ग्राम पंचायत, गाँव और वार्ड/बूथ स्तर पर संरचित करके स्थानीय प्रभारियों को जिम्मेदारी और डाटा ट्रैकिंग।",
      features: [
        "स्तर 1: ब्लॉक / तहसील",
        "स्तर 2: ग्राम पंचायत / नगर निकाय",
        "स्तर 3: गाँव / सेक्टर",
        "स्तर 4: वार्ड / पोलिंग बूथ",
        "बूथवार समस्या व विकास रिपोर्टिंग"
      ]
    }
  ];
};

export const getHierarchyLevels = (lang = 'hi') => {
  if (lang === 'en') {
    return [
      { level: "Level 1", name: "Block / Tehsil", desc: "Top regional administrative cluster for Block heads and zone managers", count: "10-15 Blocks" },
      { level: "Level 2", name: "Gram Panchayat / Ward Cluster", desc: "Panchayat level cluster coordinating village heads & councillors", count: "80-120 Panchayats" },
      { level: "Level 3", name: "Village / Sector", desc: "Village sector network connecting rural workers & sector leads", count: "300+ Villages" },
      { level: "Level 4", name: "Polling Booth / Ward", desc: "Micro-level booth management, page leads, and local voter polling station", count: "1,000+ Booths/Wards" }
    ];
  }
  return [
    { level: "स्तर 1", name: "ब्लॉक / तहसील", desc: "उच्चतम क्षेत्रीय प्रशासनिक स्तर - ब्लॉक प्रमुख व मंडल प्रभारियों के लिए", count: "10-15 ब्लॉक" },
    { level: "स्तर 2", name: "ग्राम पंचायत / नगर निकाय", desc: "पंचायत स्तरीय क्लस्टर - ग्राम प्रधान व सभासदों के समन्वय हेतु", count: "80-120 पंचायतें" },
    { level: "स्तर 3", name: "गाँव / सेक्टर", desc: "गाँव स्तर का नेटवर्क - स्थानीय कार्यकर्ताओं व सेक्टर प्रभारियों के लिए", count: "300+ गाँव" },
    { level: "स्तर 4", name: "वार्ड / पोलिंग बूथ", desc: "सबसे सूक्ष्म स्तर - बूथ अध्यक्ष, पन्ना प्रमुख व वार्ड स्तरीय निगरानी", count: "1,000+ वार्ड/बूथ" }
  ];
};

export const getPosterTemplatesSample = (lang = 'hi') => {
  if (lang === 'en') {
    return [
      {
        id: 1,
        title: "Vikas Sankalp - Progress Vision",
        tag: "Development",
        bgGradient: "from-sky-700 via-sky-800 to-slate-900",
        quote: "\"Every Village, Every Ward — Dedicated to All-Round Progress\"",
        leader: "Hon'ble Constituency Leader (MLA / MP)",
        badge: "Official Template"
      },
      {
        id: 2,
        title: "Festival Greetings & Wishes",
        tag: "Festival Special",
        bgGradient: "from-sky-600 via-blue-700 to-slate-900",
        quote: "\"Heartfelt Festive Greetings to All Respected Constituents\"",
        leader: "Hon'ble Constituency Leader (MLA / MP)",
        badge: "Festival Special"
      },
      {
        id: 3,
        title: "Youth Summit & Interaction",
        tag: "Youth Wing",
        bgGradient: "from-blue-700 via-indigo-800 to-slate-900",
        quote: "\"Youth Power Leading the Way to a Prosperous Constituency\"",
        leader: "Hon'ble Constituency Leader (MLA / MP)",
        badge: "Youth Dialogue"
      }
    ];
  }
  return [
    {
      id: 1,
      title: "विकास संकल्प - हमारा लक्ष्य",
      tag: "विकास कार्य",
      bgGradient: "from-sky-700 via-sky-800 to-slate-900",
      quote: "\"हर गाँव, हर वार्ड का समग्र विकास — हमारा अटूट संकल्प\"",
      leader: "माननीय जनप्रिय जनप्रतिनिधि (विधायक/सांसद)",
      badge: "आधिकारिक टेम्पलेट"
    },
    {
      id: 2,
      title: "पर्व एवं त्योहार की हार्दिक शुभकामनाएं",
      tag: "शुभकामना संदेश",
      bgGradient: "from-sky-600 via-blue-700 to-slate-900",
      quote: "\"समस्त क्षेत्रवासियों को पावन पर्व की अनंत हार्दिक शुभकामनाएं\"",
      leader: "माननीय जनप्रिय जनप्रतिनिधि (विधायक/सांसद)",
      badge: "त्योहार विशेष"
    },
    {
      id: 3,
      title: "युवा सम्मेलन एवं संवाद",
      tag: "युवा शक्ति",
      bgGradient: "from-blue-700 via-indigo-800 to-slate-900",
      quote: "\"युवा शक्ति के संकल्प से बनेगा सशक्त एवं समृद्ध क्षेत्र\"",
      leader: "माननीय जनप्रिय जनप्रतिनिधि (विधायक/सांसद)",
      badge: "युवा संवाद"
    }
  ];
};

export const getPricingPlans = (lang = 'hi') => {
  if (lang === 'en') {
    return [
      {
        id: "panchayat",
        name: "Gram / Nagar Panchayat",
        target: "Panchayat Heads, Nagar Adhyaksh & Ward Members",
        price: "₹14,999",
        period: "Per Year",
        popular: false,
        ctaText: "Select Panchayat Plan",
        features: [
          "Citizen Mobile Web App (PWA)",
          "Admin Command Dashboard",
          "Jan Samasya Grievance Redressal",
          "Vikas Karya Showcase",
          "Dynamic Poster Studio",
          "Direct Push Broadcasts",
          "24x7 Call & WhatsApp Support"
        ]
      },
      {
        id: "vidhansabha",
        name: "Vidhan Sabha (MLA Candidate)",
        target: "Sitting MLAs, Assembly Candidates & Key Leaders",
        price: "₹49,999",
        period: "Per Election / Year",
        popular: true,
        ctaText: "Launch Vidhan Sabha Platform",
        features: [
          "Everything in Panchayat Plan",
          "Unlimited Constituents & Voters",
          "4-Level Hierarchy (Block to Booth)",
          "Digital Membership & QR ID Cards",
          "Live Public Polls & Sentiment Engine",
          "Event & Rally Calendar with RSVP",
          "Poster Studio (25+ Custom Templates)",
          "Custom Branding & Logo Setup",
          "Dedicated Account Manager & Support"
        ]
      },
      {
        id: "loksabha",
        name: "Lok Sabha (MP / Minister)",
        target: "Members of Parliament, Ministers & State Leaders",
        price: "₹1,24,999",
        period: "Annual Enterprise",
        popular: false,
        ctaText: "Launch Lok Sabha Platform",
        features: [
          "Multi-Assembly Aggregated Command Center",
          "Unified Constituency-Wide Data Management",
          "Multi-staff & Booth Coordination",
          "Custom Mobile PWA Deployment",
          "Advanced Sentiment & Grievance Analytics",
          "High-Speed Push Notification Broadcasts",
          "Dedicated Field Support & War-Room Setup",
          "Encrypted Cloud Database & SLA"
        ]
      },
      {
        id: "party",
        name: "Political Party / Organization",
        target: "District / State / National Party Headquarters",
        price: "Custom Quote",
        period: "Statewide Deployment",
        popular: false,
        ctaText: "Contact for Party Plan",
        features: [
          "Centralized Multi-Constituency Control",
          "Candidate Onboarding Portal",
          "Central Media & Poster Management",
          "Cadre & Volunteer Database Management",
          "War Room Live Analytics Dashboard",
          "Private Cloud / On-Premise Deployment",
          "White-labeled Full Brand Customization"
        ]
      }
    ];
  }
  return [
    {
      id: "panchayat",
      name: "ग्राम / नगर पंचायत",
      target: "ग्राम प्रधान, नगर पंचायत अध्यक्ष व सभासद",
      price: "₹14,999",
      period: "प्रति वर्ष",
      popular: false,
      ctaText: "पंचायत प्लान चुनें",
      features: [
        "नागरिक मोबाइल वेब PWA",
        "प्रशासनिक कंट्रोल डैशबोर्ड",
        "जन समस्या निवारण मॉड्यूल",
        "विकास कार्य प्रोजेक्ट शोकेस",
        "डायनेमिक पोस्टर स्टूडियो",
        "सीधी मोबाइल सूचनाएं",
        "24x7 फोन व व्हाट्सएप सहायता"
      ]
    },
    {
      id: "vidhansabha",
      name: "विधानसभा (विधायक / प्रत्याशी)",
      target: "वर्तमान विधायक, विधानसभा प्रत्याशी व मुख्य नेता",
      price: "₹49,999",
      period: "प्रति वर्ष / चुनाव",
      popular: true,
      ctaText: "विधानसभा मंच शुरू करें",
      features: [
        "पंचायत प्लान की सभी सुविधाएं",
        "असीमित मतदाता व नागरिक जुड़ाव",
        "4-स्तरीय पदानुक्रम (ब्लॉक से वार्ड/बूथ)",
        "डिजिटल सदस्यता व क्यूआर आईडी कार्ड",
        "लाइव जनमत सर्वेक्षण व वोटिंग",
        "कार्यक्रम व रैली कैलेंडर (RSVP सहित)",
        "पोस्टर स्टूडियो (25+ प्रीमियम टेम्पलेट्स)",
        "कस्टम ब्रांडिंग व लोगो कस्टमाइज़ेशन",
        "समर्पित तकनीकी सहायता व अकाउंट मैनेजर"
      ]
    },
    {
      id: "loksabha",
      name: "लोकसभा (सांसद / मंत्री)",
      target: "माननीय सांसद, मंत्री व वरिष्ठ राजनीतिक नेतृत्व",
      price: "₹1,24,999",
      period: "वार्षिक एंटरप्राइज",
      popular: false,
      ctaText: "लोकसभा मंच शुरू करें",
      features: [
        "सभी विधानसभाओं का एकीकृत कंट्रोल रूम",
        "समस्त विधानसभा क्षेत्रों का डेटा प्रबंधन",
        "बहु-स्तरीय स्टाफ व बूथ समन्वय",
        "कस्टम मोबाइल PWA डिप्लॉयमेंट",
        "एडवांस्ड जनमत व समस्या विश्लेषण",
        "हाई-स्पीड पुश ब्रॉडकास्टिंग",
        "समर्पित फील्ड सपोर्ट व वॉर-रूम सेटअप",
        "सुरक्षित एन्क्रिप्टेड क्लाउड डेटाबेस"
      ]
    },
    {
      id: "party",
      name: "राजनीतिक दल / संगठन",
      target: "जिला, प्रदेश या राष्ट्रीय संगठन कार्यालय",
      price: "कस्टम कोटेशन",
      period: "प्रदेश/राष्ट्रीय स्तर",
      popular: false,
      ctaText: "कस्टम समाधान के लिए संपर्क करें",
      features: [
        "केंद्रीकृत बहु-विधानसभा नियंत्रण",
        "प्रत्याशी एवं कैडर ऑनबोर्डिंग",
        "केंद्रीय मीडिया व पोस्टर प्रबंधन",
        "वॉर-रूम लाइव डैशबोर्ड",
        "प्राइवेट क्लाउड / ऑन-प्रिमाइसेस डिप्लॉयमेंट",
        "पूर्ण वाइट-लेबल ब्रांडिंग समाधान"
      ]
    }
  ];
};

export const getFaqs = (lang = 'hi') => {
  if (lang === 'en') {
    return [
      {
        q: "What is the core objective of Vikas Darpan?",
        a: "Vikas Darpan is a comprehensive digital operating system designed for elected leaders (MLAs, MPs, Ministers, Panchayat Heads) to enable direct citizen dialogue, swift grievance redressal, public works transparency, and digital cadre management."
      },
      {
        q: "How does the Dynamic Poster Studio work?",
        a: "The campaign admin uploads official HD templates for festivals, rallies, and policy updates. Supporters open the app, enter their name, designation, and photo to generate a custom HD poster in 2 seconds to share on WhatsApp status."
      },
      {
        q: "How does the Jan Samasya (Grievance Redressal) workflow operate?",
        a: "Citizens submit issues with photos and GPS in Public or Private mode. The command room delegates the ticket to the assigned ward in-charge, and once resolved, photographic proof is attached and the constituent is notified instantly."
      },
      {
        q: "Is it available as both a Mobile App and Web Admin?",
        a: "Yes! It includes a high-performance Super Admin Web Console for leaders/operators, and a lightweight Progressive Web App (PWA) for citizens that installs in 1-click on Android & iOS without taking huge device storage."
      },
      {
        q: "How fast can the platform be launched for our constituency?",
        a: "Once your leader details, logo, and geographic hierarchy are provided, our deployment team configures and launches your dedicated platform within 24 to 48 hours."
      }
    ];
  }
  return [
    {
      q: "विकास दर्पण (Vikas Darpan) का मुख्य उद्देश्य क्या है?",
      a: "विकास दर्पण एक सम्पूर्ण डिजिटल मंच है जो जन प्रतिनिधियों (विधायक, सांसद, प्रधान) और जनता के बीच सीधा संवाद, जन समस्याओं का त्वरित निस्तारण, विकास कार्यों की पारदर्शिता और संगठन का डिजिटल प्रबंधन सुनिश्चित करता है।"
    },
    {
      q: "डायनेमिक पोस्टर स्टूडियो कैसे काम करता है?",
      a: "प्रशासन द्वारा त्योहारों और अभियानों के आधिकारिक टेम्पलेट अपलोड होते हैं। कार्यकर्ता ऐप पर अपना नाम, पद और फोटो डालते ही 2 सेकंड में एचडी क्वालिटी का पोस्टर बनाकर व्हाट्सएप स्टेटस पर शेयर कर सकते हैं।"
    },
    {
      q: "जन समस्या (शिकायत) निवारण की क्या प्रक्रिया है?",
      a: "नागरिक फोटो और विवरण के साथ अपनी समस्या दर्ज करते हैं। कंट्रोल रूम से इसे संबंधित वार्ड प्रभारी को सौंपा जाता है और समाधान होने के बाद फोटो प्रूफ के साथ स्थिति अपडेट कर नागरिक को सूचित किया जाता है।"
    },
    {
      q: "क्या यह मोबाइल ऐप और वेब दोनों पर उपलब्ध है?",
      a: "हाँ, यह लाइटवेट प्रोग्रेसिव वेब ऐप (PWA) और प्रशासनिक वेब पोर्टल दोनों प्रारूपों में उपलब्ध है जो बिना फोन की मेमोरी भरे तेज़ी से कार्य करता है।"
    },
    {
      q: "हमारे क्षेत्र के लिए यह प्लेटफॉर्म कितने समय में तैयार हो सकता है?",
      a: "आपकी जानकारी, नेताजी का विवरण और क्षेत्र का ढांचा प्राप्त होने के 24 से 48 घंटे के भीतर संपूर्ण प्लेटफॉर्म लाइव कर दिया जाता है।"
    }
  ];
};

export const getTestimonials = (lang = 'hi') => {
  if (lang === 'en') {
    return [
      {
        name: "Vikramaditya Shahi",
        role: "Campaign Director, UP",
        content: "Vikas Darpan made timely grievance redressal truly possible in our constituency. The Poster Studio alone helped our supporters reach hundreds of thousands of voters on every major festival.",
        rating: 5,
        area: "Purvanchal Region"
      },
      {
        name: "Dr. Aniruddh Deshmukh",
        role: "Regional Coordinator",
        content: "The 4-level hierarchy (Block to Ward/Booth) gives our leadership exact ground realities from every village. An exceptionally intuitive and effective platform.",
        rating: 5,
        area: "Central Zone"
      },
      {
        name: "Raghvendra Pratap Singh",
        role: "Zila Panchayat Representative",
        content: "Digital membership IDs and photo updates of completed public works have built profound trust among local youth and voters. Essential for every modern leader.",
        rating: 5,
        area: "Uttar Pradesh"
      }
    ];
  }
  return [
    {
      name: "विक्रमादित्य शाही",
      role: "अभियान संचालक, यूपी",
      content: "विकास दर्पण से हमारे क्षेत्र में जन समस्याओं का समयबद्ध समाधान संभव हुआ। पोस्टर स्टूडियो से कार्यकर्ताओं ने हर त्योहार पर लाखों लोगों तक संदेश पहुंचाया।",
      rating: 5,
      area: "पूर्वांचल क्षेत्र"
    },
    {
      name: "डॉ. अनिरुद्ध देशमुख",
      role: "क्षेत्रीय प्रभारी",
      content: "4-स्तरीय पदानुक्रम (ब्लॉक से वार्ड) की मदद से पहली बार हमारे पास हर गाँव और बूथ की वास्तविक रिपोर्ट उपलब्ध है। बहुत ही सरल और प्रभावी प्रणाली।",
      rating: 5,
      area: "मध्य भारत"
    },
    {
      name: "राघवेंद्र प्रताप सिंह",
      role: "जिला पंचायत प्रतिनिधि",
      content: "डिजिटल सदस्यता आईडी और विकास कार्यों की तस्वीरें जनता में गहरा विश्वास पैदा करती हैं। हर जागरूक जन प्रतिनिधि के लिए यह अनिवार्य है।",
      rating: 5,
      area: "उत्तर प्रदेश"
    }
  ];
};
