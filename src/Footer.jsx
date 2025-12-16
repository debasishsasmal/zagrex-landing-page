import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-black border-t border-gray-800 pt-16 pb-8 px-6 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        {/* Column 1: Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4 text-white font-bold text-xl">
            <div className="w-8 h-8 bg-gradient-to-tr from-primary to-blue-600 rounded-lg flex items-center justify-center">
               {/* Agar aapka logo public folder mein hai toh img use karein, nahi toh Z likhein */}
               <span className="text-white">Z</span>
            </div>
            Zagrex
          </div>
          <p className="leading-relaxed">
            The complete financial stack for the modern internet. Secure, scalable, and intelligent.
          </p>
        </div>

        {/* Column 2: Product */}
        <div>
          <h4 className="text-white font-bold mb-4">Product</h4>
          <ul className="space-y-2">
            <li className="hover:text-primary cursor-pointer transition">Fraud Detection</li>
            <li className="hover:text-primary cursor-pointer transition">Invoicing</li>
            <li className="hover:text-primary cursor-pointer transition">Digital Wallet</li>
            <li className="hover:text-primary cursor-pointer transition">Pricing</li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div>
          <h4 className="text-white font-bold mb-4">Company</h4>
          <ul className="space-y-2">
            <li className="hover:text-primary cursor-pointer transition">About Us</li>
            <li className="hover:text-primary cursor-pointer transition">Careers</li>
            <li className="hover:text-primary cursor-pointer transition">Blog</li>
            <li className="hover:text-primary cursor-pointer transition">Contact</li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h4 className="text-white font-bold mb-4">Stay Updated</h4>
          <p className="mb-4 text-xs">Get the latest financial trends directly in your inbox.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Enter email" 
              className="bg-white/5 border border-gray-700 rounded-lg px-3 py-2 w-full focus:outline-none focus:border-primary text-white"
            />
            <button className="bg-primary text-black font-bold px-4 py-2 rounded-lg hover:bg-cyan-300 transition">
              Go
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>&copy; 2024 Zagrex Inc. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;