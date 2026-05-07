"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  // Authentication States
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  // Dashboard States
  const [activeTab, setActiveTab] = useState('scholarships'); 
  const [scholarships, setScholarships] = useState([]);
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(false);

  // पेज लोड होते ही चेक करें कि क्या एडमिन पहले से लॉगिन है
  useEffect(() => {
    const token = sessionStorage.getItem('admin_token');
    if (token) {
      setIsAuthenticated(true);
      fetchData();
    }
  }, []);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError('');

    try {
      const res = await fetch('https://vbm-backend-api.onrender.com/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      if (res.ok) {
        const data = await res.json();
        // सफल लॉगिन पर टोकन को सेशन में सेव कर लें
        sessionStorage.setItem('admin_token', data.access_token);
        setIsAuthenticated(true);
        fetchData();
      } else {
        const errData = await res.json();
        setLoginError(errData.detail || 'लॉगिन विफल!');
      }
    } catch (error) {
      setLoginError('सर्वर से कनेक्ट नहीं हो पा रहा है।');
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin_token');
    setIsAuthenticated(false);
    setScholarships([]);
    setDonations([]);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const scholRes = await fetch('https://vbm-backend-api.onrender.com/scholarships/');
      if (scholRes.ok) setScholarships(await scholRes.json());

      const donRes = await fetch('https://vbm-backend-api.onrender.com/donations/');
      if (donRes.ok) setDonations(await donRes.json());
    } catch (error) {
      console.error("Failed to fetch data", error);
    } finally {
      setLoading(false);
    }
  };

  // 🔴 अगर लॉगिन नहीं है, तो सिर्फ लॉगिन स्क्रीन दिखाएं 🔴
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 font-sans text-white">
        <Link href="/" className="absolute top-8 left-8 text-orange-500 hover:text-orange-400 font-bold tracking-widest text-sm uppercase">
          ← Back to Home
        </Link>
        
        <div className="bg-zinc-950 border border-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl max-w-md w-full relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 to-red-600"></div>
          
          <h1 className="text-3xl font-extrabold mb-2 text-center">Admin <span className="text-orange-500">Login</span></h1>
          <p className="text-gray-400 text-sm text-center mb-8">समिति डैशबोर्ड में प्रवेश के लिए लॉगिन करें</p>

          {loginError && (
            <div className="bg-red-900/50 border border-red-800 text-red-400 p-3 rounded-lg text-sm mb-6 font-semibold text-center">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Username</label>
              <input required type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Password</label>
              <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition" />
            </div>
            <button disabled={loginLoading} type="submit" className={`w-full py-3 rounded-lg font-bold text-lg mt-4 transition-all ${loginLoading ? 'bg-gray-600' : 'bg-gradient-to-r from-orange-600 to-red-600 hover:scale-105'}`}>
              {loginLoading ? 'प्रवेश हो रहा है...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // 🟢 अगर लॉगिन है, तो पूरा डैशबोर्ड दिखाएं 🟢
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <nav className="bg-zinc-950 border-b border-gray-900 px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-orange-500">
          VBM <span className="text-white">Admin</span>
        </div>
        <button onClick={handleLogout} className="text-sm bg-red-600/20 text-red-500 hover:bg-red-600 hover:text-white px-4 py-2 rounded-lg font-bold transition">
          Logout
        </button>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-10">
          <h1 className="text-3xl font-extrabold mb-2">समिति डैशबोर्ड (Committee Dashboard)</h1>
          <p className="text-gray-400">स्कॉलरशिप आवेदनों और कृतज्ञ राष्ट्र अभियान (डोनेशन) का रियल-टाइम डेटा।</p>
        </div>

        <div className="flex space-x-4 mb-8 border-b border-gray-800 pb-2">
          <button onClick={() => setActiveTab('scholarships')} className={`pb-2 px-4 text-lg font-semibold transition ${activeTab === 'scholarships' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-500 hover:text-gray-300'}`}>
            वीरांगना स्कॉलरशिप ({scholarships.length})
          </button>
          <button onClick={() => setActiveTab('donations')} className={`pb-2 px-4 text-lg font-semibold transition ${activeTab === 'donations' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-500 hover:text-gray-300'}`}>
            कृतज्ञ राष्ट्र डोनेशन ({donations.length})
          </button>
        </div>

        {loading ? (
          <div className="text-center py-20 text-orange-500 animate-pulse font-semibold">डेटा लोड हो रहा है...</div>
        ) : (
          <>
            {/* ... (स्कॉलरशिप टेबल का कोड) ... */}
            {activeTab === 'scholarships' && (
              <div className="overflow-x-auto bg-zinc-950 rounded-xl border border-gray-800 shadow-xl">
                <table className="w-full text-left text-sm text-gray-300">
                  <thead className="bg-gray-900 text-gray-400 font-semibold uppercase">
                    <tr>
                      <th className="px-6 py-4">ID</th>
                      <th className="px-6 py-4">नाम</th>
                      <th className="px-6 py-4">संपर्क</th>
                      <th className="px-6 py-4">शहर</th>
                      <th className="px-6 py-4">डिफेंस ब्रांच</th>
                      <th className="px-6 py-4">तारीख</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scholarships.map((app: any) => (
                      <tr key={app.id} className="border-b border-gray-800 hover:bg-black transition">
                        <td className="px-6 py-4">#{app.id}</td>
                        <td className="px-6 py-4 font-medium text-white">{app.full_name}</td>
                        <td className="px-6 py-4">{app.email}<br/><span className="text-xs text-gray-500">{app.phone_number}</span></td>
                        <td className="px-6 py-4">{app.city}</td>
                        <td className="px-6 py-4 text-orange-400 font-bold">{app.defense_branch}</td>
                        <td className="px-6 py-4 text-xs">{new Date(app.applied_at).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* ... (डोनेशन टेबल का कोड) ... */}
            {activeTab === 'donations' && (
              <div className="overflow-x-auto bg-zinc-950 rounded-xl border border-gray-800 shadow-xl">
                <table className="w-full text-left text-sm text-gray-300">
                  <thead className="bg-gray-900 text-gray-400 font-semibold uppercase">
                    <tr>
                      <th className="px-6 py-4">ID</th>
                      <th className="px-6 py-4">डोनर का नाम</th>
                      <th className="px-6 py-4">संपर्क</th>
                      <th className="px-6 py-4">राशि (₹)</th>
                      <th className="px-6 py-4">संदेश</th>
                      <th className="px-6 py-4">तारीख</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donations.map((don: any) => (
                      <tr key={don.id} className="border-b border-gray-800 hover:bg-black transition">
                        <td className="px-6 py-4">#{don.id}</td>
                        <td className="px-6 py-4 font-medium text-white">{don.donor_name}</td>
                        <td className="px-6 py-4">{don.email}<br/><span className="text-xs text-gray-500">{don.phone_number}</span></td>
                        <td className="px-6 py-4 text-green-400 font-bold text-lg">₹{don.amount}</td>
                        <td className="px-6 py-4 max-w-xs truncate" title={don.message}>{don.message || '-'}</td>
                        <td className="px-6 py-4 text-xs">{new Date(don.donated_at).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}