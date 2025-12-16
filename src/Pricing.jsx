import React from 'react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Simple, transparent <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
              Pricing Plans
            </span>
          </h2>
          <p className="text-gray-400">Choose the perfect plan for your business needs.</p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Plan 1: Starter */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-white/20 transition-all">
            <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
            <div className="text-4xl font-bold text-white mb-6">$29<span className="text-lg text-gray-500 font-normal">/mo</span></div>
            <p className="text-gray-400 text-sm mb-6">Perfect for freelancers and solo entrepreneurs.</p>
            <button className="w-full bg-white/10 text-white font-semibold py-3 rounded-xl hover:bg-white/20 transition-all mb-8">Get Started</button>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><span className="text-primary">✓</span> 50 Invoices/month</li>
              <li className="flex items-center gap-2"><span className="text-primary">✓</span> Basic Fraud Detection</li>
              <li className="flex items-center gap-2"><span className="text-primary">✓</span> Email Support</li>
            </ul>
          </div>

          {/* Plan 2: Pro (Highlighted) */}
          <div className="bg-gradient-to-b from-gray-900 to-black border border-primary p-8 rounded-2xl relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Most Popular</div>
            <h3 className="text-xl font-bold text-white mb-2">Growth</h3>
            <div className="text-4xl font-bold text-white mb-6">$99<span className="text-lg text-gray-500 font-normal">/mo</span></div>
            <p className="text-gray-400 text-sm mb-6">For growing startups needing advanced analytics.</p>
            <button className="w-full bg-primary text-black font-bold py-3 rounded-xl hover:bg-cyan-300 transition-all shadow-lg mb-8">Start Free Trial</button>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-center gap-2"><span className="text-primary">✓</span> Unlimited Invoices</li>
              <li className="flex items-center gap-2"><span className="text-primary">✓</span> AI-Powered Fraud Alerts</li>
              <li className="flex items-center gap-2"><span className="text-primary">✓</span> Advanced Financial Reports</li>
              <li className="flex items-center gap-2"><span className="text-primary">✓</span> Priority 24/7 Support</li>
            </ul>
          </div>

          {/* Plan 3: Enterprise */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-white/20 transition-all">
            <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
            <div className="text-4xl font-bold text-white mb-6">Custom</div>
            <p className="text-gray-400 text-sm mb-6">Tailored solutions for large organizations.</p>
            <button className="w-full bg-white/10 text-white font-semibold py-3 rounded-xl hover:bg-white/20 transition-all mb-8">Contact Sales</button>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><span className="text-primary">✓</span> Dedicated Account Manager</li>
              <li className="flex items-center gap-2"><span className="text-primary">✓</span> Custom API Integration</li>
              <li className="flex items-center gap-2"><span className="text-primary">✓</span> Audit Logs & Security</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;