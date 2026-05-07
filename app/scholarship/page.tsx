"use client"; // चूँकि हम फॉर्म और स्टेट का इस्तेमाल कर रहे हैं, इसलिए यह क्लाइंट कंपोनेंट होगा

import { useState } from 'react';
import Link from 'next/link';

export default function ScholarshipPage() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone_number: '',
    city: 'Gwalior',
    education_level: '',
    defense_branch: 'NDA',
    family_income: '',
    statement_of_purpose: ''
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' }); // type: 'success' or 'error'

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: '', type: '' });

    try {
      const response = await fetch('http://localhost:8000/scholarships/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage({ text: 'आपका आवेदन सफलतापूर्वक जमा हो गया है! हमारी टीम जल्द ही आपसे संपर्क करेगी।', type: 'success' });
        // फॉर्म रीसेट करें
        setFormData({
          full_name: '', email: '', phone_number: '', city: 'Gwalior',
          education_level: '', defense_branch: 'NDA', family_income: '', statement_of_purpose: ''
        });
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
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">वीरांगना <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">स्कॉलरशिप</span></h1>
          <p className="text-gray-400">सशस्त्र बलों में नारी शक्ति को बढ़ावा देने के लिए पूर्ण स्कॉलरशिप (NDA/CDS/AFCAT)</p>
        </div>

        {/* Form Container */}
        <div className="bg-zinc-950 border border-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl">
          
          {/* Status Message */}
          {message.text && (
            <div className={`p-4 mb-8 rounded-lg font-semibold ${message.type === 'success' ? 'bg-green-900/50 text-green-400 border border-green-800' : 'bg-red-900/50 text-red-400 border border-red-800'}`}>
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">पूरा नाम (Full Name) *</label>
                <input required type="text" name="full_name" value={formData.full_name} onChange={handleChange} className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">ईमेल (Email) *</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">मोबाइल नंबर (Phone) *</label>
                <input required type="tel" name="phone_number" value={formData.phone_number} onChange={handleChange} className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">शहर (City) *</label>
                <input required type="text" name="city" value={formData.city} onChange={handleChange} className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">शैक्षणिक योग्यता (Education Level) *</label>
                <select required name="education_level" value={formData.education_level} onChange={handleChange} className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition appearance-none">
                  <option value="">सेलेक्ट करें...</option>
                  <option value="12th Pursuing">12th Pursuing</option>
                  <option value="12th Pass">12th Pass</option>
                  <option value="Graduation Pursuing">Graduation Pursuing</option>
                  <option value="Graduation Completed">Graduation Completed</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">डिफेंस ब्रांच (Defense Branch) *</label>
                <select required name="defense_branch" value={formData.defense_branch} onChange={handleChange} className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition appearance-none">
                  <option value="NDA">NDA (National Defence Academy)</option>
                  <option value="CDS">CDS (Combined Defence Services)</option>
                  <option value="AFCAT">AFCAT (Air Force)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Statement of Purpose (आप सेना में क्यों जाना चाहती हैं?) *</label>
              <textarea required rows={4} name="statement_of_purpose" value={formData.statement_of_purpose} onChange={handleChange} className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition"></textarea>
            </div>

            <button disabled={loading} type="submit" className={`w-full py-4 rounded-lg font-bold text-lg transition-all transform ${loading ? 'bg-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-orange-600 to-red-600 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(234,88,12,0.4)]'}`}>
              {loading ? 'सबमिट हो रहा है...' : 'Submit Application'}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}