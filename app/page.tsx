import Legacy from '../components/Legacy';
import Events from '../components/Events';
import Vision from '../components/Vision';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500 selection:text-white font-sans">
      
      {/* Navigation Bar */}
      <nav className="absolute top-0 w-full flex justify-between items-center p-6 md:px-12 z-50">
        <div className="text-2xl font-extrabold tracking-widest text-orange-500">
          VBM <span className="text-white">2026</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-semibold tracking-wide">
          <a href="#legacy" className="hover:text-orange-400 transition">Our Legacy</a>
          <a href="#events" className="hover:text-orange-400 transition">Events</a>
          <a href="#vision" className="hover:text-orange-400 transition">Vision 2026</a>
        </div>
        <Link href="/donate" className="bg-white text-black px-5 py-2 rounded-full font-bold hover:bg-gray-200 transition shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          Donate Now
        </Link>
      </nav>

      {/* Hero Section */}
      <main className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black -z-10"></div>
        <div className="absolute inset-0 bg-black/50 -z-10"></div>

        <div className="animate-fade-in-up max-w-5xl mx-auto mt-16">
          <h2 className="text-orange-500 font-semibold tracking-[0.2em] uppercase mb-4 text-sm md:text-base">
            एक ऐतिहासिक और राष्ट्रीय आयोजन
          </h2>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6">
            वीरांगना <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-yellow-500">
              बलिदान मेला
            </span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-2xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            'स्मृति' से 'सशक्तिकरण' की ओर। <br className="hidden md:block"/> 
            शूरवीरों को श्रद्धांजलि और देश के भविष्य का निर्माण।
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link href="/donate" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-bold rounded-full text-lg shadow-[0_0_20px_rgba(234,88,12,0.4)] transform transition hover:scale-105 text-center flex items-center justify-center">
              कृतज्ञ राष्ट्र (Donate)
            </Link>
            <Link href="/scholarship" className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold rounded-full text-lg transition transform hover:scale-105 text-center flex items-center justify-center" >
              वीरांगना स्कॉलरशिप
           </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* Modern & Functional Scroll Indicator */}
        <div className="absolute bottom-8 flex flex-col items-center z-20">
          <a 
            href="#legacy" 
            className="group flex flex-col items-center gap-3 cursor-pointer"
          >
            <span className="text-gray-500 text-xs tracking-[0.3em] uppercase font-bold group-hover:text-orange-500 transition-colors duration-300">
              आगे देखें
            </span>
            <div className="w-12 h-12 rounded-full border border-gray-800 bg-black/60 flex items-center justify-center group-hover:border-orange-500 group-hover:bg-orange-500/10 transition-all duration-300 animate-bounce shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-sm">
              {/* Downward Chevron Arrow SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-orange-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </a>
        </div>
      </main>

      {/* Other Sections (Components) */}
      <Legacy />
      <Events />
      <Vision />
      <Footer />

    </div>
  );
}