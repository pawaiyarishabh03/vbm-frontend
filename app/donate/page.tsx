"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function DonatePage() {
  const [formData, setFormData] = useState({
    donor_name: '',
    email: '',
    phone_number: '',
    amount: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: '', type: '' });

    try {
      const response = await fetch('http://localhost:8000/donations/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          amount: parseInt(formData.amount) // API को amount integer (नंबर) फॉर्मेट में चाहिए
        }),
      });

      if (response.ok) {
        setMessage({ text: 'आपका योगदान सफलतापूर्वक दर्ज कर लिया गया है। राष्ट्र आपके इस समर्पण का कृतज्ञ है! जय हिन्द!', type: 'success' });
        setFormData({ donor_name: '', email: '', phone_number: '', amount: '', message: '' });
      } else {
        const errorData = await response.json();
        setMessage({ text: errorData.detail || 'कुछ तकनीकी समस्या आ गई है, कृपया दोबारा प्रयास करें।', type: 'error' });
      }
    } catch (error) {
      setMessage({ text: 'सर्वर से कनेक्ट नहीं हो पा रहा है। कृपया जांच लें कि बैकएंड चालू है।', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500 selection:text-white font-sans py-20 px-4">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="text-orange-500 hover:text-orange-400 text-sm font-bold tracking-widest uppercase mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">कृतज्ञ <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">राष्ट्र</span></h1>
          <p className="text-gray-400">भारतीय सेना के कल्याण कोषों और शहीद परिवारों के लिए आपका योगदान</p>
        </div>

        {/* Form Container */}
        <div className="bg-zinc-950 border border-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Background Glow */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>

          {/* Status Message */}
          {message.text && (
            <div className={`p-4 mb-8 rounded-lg font-semibold ${message.type === 'success' ? 'bg-green-900/50 text-green-400 border border-green-800' : 'bg-red-900/50 text-red-400 border border-red-800'}`}>
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">आपका शुभ नाम (Full Name) *</label>
                <input required type="text" name="donor_name" value={formData.donor_name} onChange={handleChange} className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition" placeholder="e.g. Rahul Verma" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">ईमेल (Email) *</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition" placeholder="rahul@example.com" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">मोबाइल नंबर (Phone) *</label>
                <input required type="tel" name="phone_number" value={formData.phone_number} onChange={handleChange} className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition" placeholder="10-digit number" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">योगदान राशि (Amount in ₹) *</label>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-gray-400 font-bold">₹</span>
                  <input required type="number" min="1" name="amount" value={formData.amount} onChange={handleChange} className="w-full bg-black border border-gray-800 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-orange-500 transition" placeholder="500, 1000, 5000..." />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">शहीद परिवारों या सेना के लिए आपका संदेश (Optional)</label>
              <textarea rows={3} name="message" value={formData.message} onChange={handleChange} className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition" placeholder="जय हिन्द..."></textarea>
            </div>

            <button disabled={loading} type="submit" className={`w-full py-4 rounded-lg font-bold text-lg transition-all transform flex justify-center items-center gap-2 ${loading ? 'bg-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-orange-600 to-red-600 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(234,88,12,0.4)]'}`}>
              {loading ? 'प्रक्रिया चल रही है...' : 'Proceed to Donate'}
            </button>

            <p className="text-xs text-center text-gray-600 mt-4">
              * यह एक सुरक्षित पोर्टल है। एकत्र की गई राशि का 90% सेना कल्याण कोष और 10% शहीद परिवारों को जाएगा।
            </p>

          </form>
        </div>
      </div>
    </div>
  );
}