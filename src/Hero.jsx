import React from 'react';

const Hero = () => {
  return (
    <section id="home"className="relative flex flex-col items-center justify-center text-center mt-20 px-4 z-10 pb-32">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none animate-pulse"></div>

      {/* Pill Label */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium mb-6">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        New: AI-Driven Fraud Detection
      </div>

      {/* Headline */}
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-white">
        Empowering Business with <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400">
          Intelligent Finance
        </span>
      </h1>

      <p className="text-gray-400 text-lg max-w-2xl mb-10 leading-relaxed">
        Streamline invoices, manage digital wallets, and detect fraud in real-time. 
        The all-in-one financial compliance platform.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center mb-16">
        <button className="bg-primary text-black font-bold px-8 py-3.5 rounded-xl hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:scale-105 active:scale-95">
          Start Free Trial
        </button>
        <button className="bg-white/5 border border-gray-800 text-white font-medium px-8 py-3.5 rounded-xl hover:bg-white/10 transition-all hover:scale-105 active:scale-95 backdrop-blur-sm">
          View Live Demo
        </button>
      </div>

      {/* --- REAL DASHBOARD UI (Jo pehle khaali box tha) --- */}
      <div className="relative w-full max-w-5xl mx-auto perspective-1000">
        
        {/* Main Dashboard Container */}
        <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-4 md:p-6 backdrop-blur-xl shadow-2xl transform rotate-x-12 hover:rotate-0 transition-all duration-700 ease-out">
          
          {/* Top Bar (Fake Search & Profile) */}
          <div className="flex justify-between items-center mb-6 border-b border-gray-800 pb-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="h-2 w-32 bg-gray-800 rounded-full"></div>
          </div>

          {/* Dashboard Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Card 1: Total Revenue */}
            <div className="bg-black/40 p-4 rounded-xl border border-gray-800 text-left">
              <p className="text-gray-500 text-xs mb-1">Total Revenue</p>
              <h3 className="text-2xl font-bold text-white mb-2">$124,500.00</h3>
              <div className="flex items-center text-emerald-400 text-xs gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                +12.5% this month
              </div>
            </div>

            {/* Card 2: Active Invoices */}
            <div className="bg-black/40 p-4 rounded-xl border border-gray-800 text-left">
              <p className="text-gray-500 text-xs mb-1">Active Invoices</p>
              <h3 className="text-2xl font-bold text-white mb-2">45 Pending</h3>
              <div className="w-full bg-gray-800 h-1.5 rounded-full mt-2">
                <div className="bg-blue-500 h-1.5 rounded-full w-[70%]"></div>
              </div>
            </div>

            {/* Card 3: Fraud Alert (Highlight) */}
            <div className="bg-red-500/10 p-4 rounded-xl border border-red-500/30 text-left relative overflow-hidden">
              <div className="absolute right-2 top-2 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
              <p className="text-red-400 text-xs mb-1">Security Alert</p>
              <h3 className="text-white font-bold text-sm mb-2">Suspicious Transaction Detected</h3>
              <button className="text-xs bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">View Details</button>
            </div>

          </div>

          {/* Big Chart Area */}
          <div className="mt-4 bg-black/40 h-48 rounded-xl border border-gray-800 flex items-end justify-between p-4 px-8 gap-2">
            {/* Fake Bars for Chart */}
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95].map((h, i) => (
              <div key={i} className="w-full bg-primary/20 hover:bg-primary/50 transition-all rounded-t-sm" style={{ height: `${h}%` }}></div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;