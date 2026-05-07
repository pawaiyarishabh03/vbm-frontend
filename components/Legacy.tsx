import Image from 'next/image';

export default function Legacy() {
  return (
    <section id="legacy" className="py-20 bg-black text-white px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 relative group">
          {/* Glowing Effect Behind Image */}
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          
          {/* Actual Image */}
          <div className="relative h-80 md:h-[400px] w-full bg-gray-900 rounded-lg border border-gray-800 flex items-center justify-center overflow-hidden">
             <Image 
                src="/legacy.png" 
                alt="वीरांगना बलिदान मेला ऐतिहासिक दृश्य" 
                fill
                className="object-cover rounded-lg opacity-90 group-hover:opacity-100 transition duration-500 hover:scale-105"
             />
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold border-b-2 border-orange-500 pb-2 inline-block">
            विरासत और इतिहास
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed text-justify">
            भारतीय स्वतंत्रता संग्राम के इतिहास में <span className="text-orange-400 font-semibold">18 जून 1858</span> का दिन एक स्वर्णिम और भावुक अध्याय है। इसी दिन ग्वालियर की धरती पर अंग्रेजों से लड़ते हुए झांसी की रानी लक्ष्मीबाई ने अपना सर्वोच्च बलिदान दिया था।
          </p>
          <p className="text-gray-300 text-lg leading-relaxed text-justify">
            शुरुआती दौर में यह एक सीमित कार्यक्रम था। इसे एक राष्ट्रीय महाकुंभ का स्वरूप देने का ऐतिहासिक कार्य 'वीरांगना लक्ष्मीबाई बलिदान मेला समिति' के नेतृत्व में हुआ। आज यह एक छोटी श्रद्धांजलि सभा से निकलकर भारत के सबसे बड़े देशभक्ति मेलों में से एक बन चुका है।
          </p>
        </div>

      </div>
    </section>
  );
}