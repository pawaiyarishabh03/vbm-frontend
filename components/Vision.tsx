import Link from 'next/link';

export default function Vision() {
  // हमने यहाँ हर पिलर में एक 'link' प्रॉपर्टी जोड़ दी है
  const pillars = [
    {
      title: "सशस्त्र बलों में नारी शक्ति",
      subtitle: "(वीरांगना स्कॉलरशिप प्रोग्राम)",
      description: "ग्वालियर और आस-पास की होनहार लेकिन आर्थिक रूप से कमजोर बेटियों को सेना (NDA/CDS/AFCAT) में अधिकारी बनाने का लक्ष्य। 50 से अधिक छात्राओं के लिए पूर्ण स्कॉलरशिप।",
      icon: "👩‍✈️",
      action: "Apply Now",
      link: "/scholarship" 
    },
    {
      title: "'कृतज्ञ राष्ट्र' अभियान",
      subtitle: "(National Fund for Army & Martyrs)",
      description: "पारदर्शी ऑनलाइन डोनेशन पोर्टल। एकत्रित फंड का 90% सीधे भारतीय सेना के कल्याण कोषों (AWWA आदि) में और 10% शहीद परिवारों के कल्याणार्थ।",
      icon: "🛡️",
      action: "Donate",
      link: "/donate"
    },
    {
      title: "राष्ट्रीय डिजिटल जन-आंदोलन",
      subtitle: "(Viral Outreach Strategy)",
      description: "राजनेताओं, खिलाड़ियों और प्रतिष्ठित हस्तियों द्वारा 'कृतज्ञ राष्ट्र' पोर्टल पर दान और वीडियो संदेशों के माध्यम से भारत के हर मोबाइल तक पहुँचने का लक्ष्य।",
      icon: "📱",
      action: "Join Campaign",
      link: "/donate" // अभी के लिए इसे भी डोनेट पेज पर भेज रहे हैं, बाद में इसका अलग सोशल शेयर पेज बना सकते हैं
    }
  ];

  return (
    <section id="vision" className="py-24 bg-zinc-950 text-white px-6 md:px-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-sm text-orange-500 tracking-[0.3em] font-bold uppercase mb-2">The Future</h2>
        <h3 className="text-4xl md:text-5xl font-extrabold mb-4">Vision 2026</h3>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          'स्मृति' से 'सशक्तिकरण' की ओर: रानी लक्ष्मीबाई का यह मेला पूरे देश के लिए राष्ट्र सेवा का एक अद्वितीय मॉडल बनने जा रहा है।
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {pillars.map((pillar, index) => (
          <div key={index} className="relative group bg-black border border-gray-800 rounded-2xl p-8 hover:border-orange-500 transition-all duration-300 shadow-xl flex flex-col">
            {/* Glowing effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-orange-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
            
            <div className="text-5xl mb-6 group-hover:-translate-y-2 transition-transform duration-300">{pillar.icon}</div>
            <h4 className="text-2xl font-bold text-white mb-1">{pillar.title}</h4>
            <h5 className="text-sm font-semibold text-orange-400 mb-4">{pillar.subtitle}</h5>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">{pillar.description}</p>
            
            {/* Button को Link में बदल दिया गया है */}
            <Link href={pillar.link} className="w-full py-3 bg-gray-900 hover:bg-gradient-to-r hover:from-orange-600 hover:to-red-600 text-white font-bold rounded-lg transition-all duration-300 border border-gray-700 hover:border-transparent transform group-hover:scale-[1.02] text-center block z-10">
              {pillar.action}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}