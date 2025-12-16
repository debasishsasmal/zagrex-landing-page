import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-6 max-w-7xl mx-auto z-50 relative">
      
      <div className="flex items-center gap-2 cursor-pointer group">
        <div className="w-10 h-10 bg-gradient-to-tr from-primary to-blue-600 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.3)] group-hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all duration-300">
          
        <img 
        src="/logo.jpeg" 
        alt="Zagrex Logo" 
        className="w-10 h-10 object-contain" 
        />
        </div>
        <span className="text-xl font-bold tracking-wide text-white">Zagrex</span>
      </div>

      
      <ul className="hidden md:flex gap-8 text-gray-400 text-sm font-medium">
  <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
  <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
  <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
  <li><a href="#footer" className="hover:text-primary transition-colors">About</a></li>
</ul>

      {/* Contact Button */}
      <button className="hidden md:block border border-gray-800 hover:border-primary text-cyan-400 px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] bg-white/5 backdrop-blur-sm">
        Contact Support
      </button>
    </nav>
  );
};

export default Navbar;