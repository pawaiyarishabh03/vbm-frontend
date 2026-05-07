import Link from 'next/link';

// हर इवेंट का पूरा डेटाबेस (विस्तृत जानकारी)
const eventData: any = {
  "mahanatya": {
    title: "भव्य महानाट्य",
    subtitle: "रानी लक्ष्मीबाई की शौर्य गाथा का जीवंत प्रदर्शन",
    icon: "🎭",
    description: "यह भव्य महानाट्य इस आयोजन की आत्मा है। रानी लक्ष्मीबाई के बचपन (मनु) से लेकर ग्वालियर के फूलबाग में उनके अंतिम युद्ध और शहादत तक की पूरी कहानी को एक विशाल 150 फीट लंबे मंच पर प्रस्तुत किया जाता है। इसमें सैकड़ों स्थानीय और राष्ट्रीय कलाकार, असली घोड़े, और आधुनिक लाइट-एंड-साउंड (Light and Sound) तकनीक का इस्तेमाल किया जाता है, जो दर्शकों के रोंगटे खड़े कर देता है।",
    highlights: ["150+ कलाकार", "आधुनिक लाइट-एंड-साउंड", "लाइव एक्शन और स्टंट्स"],
  },
  "kavi-sammelan": {
    title: "अखिल भारतीय वीर रस कवि सम्मेलन",
    subtitle: "देशभक्ति और ओजस्वी कविताओं का महाकुंभ",
    icon: "✍️",
    description: "बलिदान मेले की एक शाम देश के वीर रस के नाम होती है। इस मंच से देश भर के जाने-माने और प्रख्यात ओज कवि अपनी कविताओं के माध्यम से लाखों की भीड़ में देशभक्ति और राष्ट्रप्रेम का ज्वार पैदा करते हैं। यहाँ पढ़ी गई कविताएं युवाओं में एक नई ऊर्जा का संचार करती हैं।",
    highlights: ["राष्ट्रीय स्तर के कवि", "लाखों श्रोताओं की भीड़", "ओज और वीर रस"],
  },
  "veer-samman": {
    title: "वीरांगना व वीर नारी सम्मान",
    subtitle: "कृतज्ञ राष्ट्र की ओर से शूरवीरों को नमन",
    icon: "🎖️",
    description: "हमारा समाज और राष्ट्र उन परिवारों का हमेशा ऋणी रहेगा जिन्होंने देश के लिए अपने बच्चों का बलिदान दिया है। इस कार्यक्रम के अंतर्गत, समाज में अदम्य साहस दिखाने वाली महिलाओं को 'वीरांगना सम्मान' और सीमाओं पर शहीद हुए वीर जवानों की पत्नियों/माताओं को 'वीर नारी सम्मान' देकर सम्मानित किया जाता है।",
    highlights: ["शहीद परिवारों का सम्मान", "राष्ट्रीय नेतृत्व की उपस्थिति", "कृतज्ञता ज्ञापन"],
  },
  "shaurya-kala": {
    title: "शौर्य और पारंपरिक कला प्रदर्शन",
    subtitle: "भारत की प्राचीन युद्ध कलाओं का अखाड़ा",
    icon: "⚔️",
    description: "भारत की मिट्टी में ही शौर्य बसा है। इस मेले में देश के अलग-अलग राज्यों से आए कलाकार भारतीय पारंपरिक युद्ध कलाओं का अद्भुत प्रदर्शन करते हैं। इसमें अखाड़ा, मलखंब, तलवारबाजी, लाठी चलाना और अन्य मार्शल आर्ट्स शामिल हैं। यह युवाओं को अपनी जड़ों से जुड़ने और शारीरिक रूप से मजबूत बनने के लिए प्रेरित करता है।",
    highlights: ["मलखंब और अखाड़ा", "तलवारबाजी प्रदर्शन", "पारंपरिक युद्ध कला"],
  }
};

// लेटेस्ट Next.js के लिए async और Promise का इस्तेमाल
export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  // params को await करना बहुत ज़रूरी है
  const resolvedParams = await params;
  const data = eventData[resolvedParams.slug];

  if (!data) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
        <h1 className="text-3xl font-bold mb-4 text-red-500">इवेंट नहीं मिला!</h1>
        <p className="text-gray-400 mb-6">शायद आपने गलत लिंक पर क्लिक किया है।</p>
        <Link href="/" className="px-6 py-3 bg-orange-600 hover:bg-orange-500 rounded-full font-bold transition">
          वापस होमपेज पर जाएँ
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500 font-sans pb-20">
      
      {/* Hero Header Section */}
      <div className="relative pt-32 pb-20 px-6 md:px-12 bg-zinc-950 border-b border-gray-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <Link href="/" className="text-orange-500 hover:text-orange-400 text-sm font-bold tracking-widest uppercase mb-8 inline-block">
            ← Back to Home
          </Link>
          <div className="flex items-center gap-6 mb-4">
            <span className="text-6xl md:text-7xl">{data.icon}</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              {data.title}
            </h1>
          </div>
          <h2 className="text-xl md:text-2xl text-gray-300 font-medium mb-8">
            {data.subtitle}
          </h2>
          
          <div className="flex flex-wrap gap-4">
            {data.highlights.map((highlight: string, index: number) => (
              <span key={index} className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-full text-sm font-semibold text-gray-300">
                ✓ {highlight}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Detail & Gallery Section */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Text Description */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6 border-b-2 border-orange-500 pb-2 inline-block">कार्यक्रम का विवरण</h3>
            <p className="text-gray-400 text-lg leading-relaxed text-justify">
              {data.description}
            </p>
          </div>

          {/* Photo Gallery */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 border-b-2 border-orange-500 pb-2 inline-block">स्मृतियां (Photo Gallery)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="h-64 bg-gray-900 border border-gray-800 rounded-xl flex flex-col items-center justify-center hover:border-orange-500 transition-colors group">
                <span className="text-gray-600 text-sm tracking-widest font-bold group-hover:text-orange-500 transition-colors">PHOTO PLACEHOLDER 1</span>
              </div>
              
              <div className="h-64 bg-gray-900 border border-gray-800 rounded-xl flex flex-col items-center justify-center hover:border-orange-500 transition-colors group">
                <span className="text-gray-600 text-sm tracking-widest font-bold group-hover:text-orange-500 transition-colors">PHOTO PLACEHOLDER 2</span>
              </div>

              <div className="sm:col-span-2 h-72 bg-gray-900 border border-gray-800 rounded-xl flex flex-col items-center justify-center hover:border-orange-500 transition-colors group">
                <span className="text-gray-600 text-sm tracking-widest font-bold group-hover:text-orange-500 transition-colors">MAIN EVENT PHOTO</span>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}