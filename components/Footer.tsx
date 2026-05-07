export default function Footer() {
  return (
    <footer className="bg-black py-12 text-center text-gray-500 px-6 border-t border-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-300 mb-2">वीरांगना बलिदान मेला समिति</h2>
        <p className="text-sm mb-8 tracking-wide">ग्वालियर, मध्य प्रदेश | राष्ट्र सेवा में समर्पित</p>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm mb-8 font-medium">
          <a href="#" className="hover:text-orange-500 transition">Contact Us</a>
          <a href="#" className="hover:text-orange-500 transition">Privacy Policy</a>
          <a href="#" className="hover:text-orange-500 transition">Terms & Conditions</a>
          <a href="#" className="hover:text-orange-500 transition">Refund Policy</a>
        </div>
        
        <p className="text-xs text-gray-700">
          © 2026 Veerangana Balidan Mela. All rights reserved.
        </p>
      </div>
    </footer>
  );
}