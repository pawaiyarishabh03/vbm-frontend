import Link from 'next/link';

export default function Events() {
  const eventsList = [
    {
      title: "भव्य महानाट्य",
      description: "रानी लक्ष्मीबाई के जन्म से लेकर अंतिम युद्ध तक की गाथा को आधुनिक लाइट-एंड-साउंड तकनीक के साथ विशाल मंच पर जीवंत किया जाता है।",
      icon: "🎭",
      slug: "mahanatya" // यह URL के लिए है
    },
    {
      title: "वीर रस कवि सम्मेलन",
      description: "देश भर के शीर्षस्थ वीर रस के कवि ओजस्वी कविताओं के माध्यम से लाखों श्रोताओं में देशभक्ति का ज्वार पैदा करते हैं।",
      icon: "✍️",
      slug: "kavi-sammelan"
    },
    {
      title: "वीरांगना व वीर नारी सम्मान",
      description: "अदम्य साहस दिखाने वाली महिलाओं और सीमाओं पर शहीद हुए सैनिकों के परिवारों को कृतज्ञ राष्ट्र की ओर से सम्मानित किया जाता है।",
      icon: "🎖️",
      slug: "veer-samman"
    },
    {
      title: "शौर्य कला प्रदर्शन",
      description: "भारतीय मार्शल आर्ट्स, मलखंब, तलवारबाजी और अन्य पारंपरिक युद्ध कलाओं का देश भर के कलाकारों द्वारा अद्भुत प्रदर्शन।",
      icon: "⚔️",
      slug: "shaurya-kala"
    }
  ];

  return (
    <section id="events" className="py-20 bg-zinc-950 text-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold inline-block mb-4">प्रमुख गतिविधियां</h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {eventsList.map((event, index) => (
          // <a> या <div> की जगह <Link> का इस्तेमाल किया है
          <Link href={`/events/${event.slug}`} key={index} className="block bg-black border border-gray-800 rounded-xl p-8 hover:border-orange-500 hover:-translate-y-2 transition-all duration-300 shadow-lg shadow-black group cursor-pointer">
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{event.icon}</div>
            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-orange-400">{event.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{event.description}</p>
            
            {/* Clickable indicator */}
            <div className="mt-6 text-orange-500 text-sm font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              विस्तार से जानें <span className="text-lg">→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}