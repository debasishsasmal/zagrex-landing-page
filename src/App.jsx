import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Pricing from './Pricing'; // 1. Import Pricing
import Footer from './Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay"></div>
      
      <Navbar />
      <Hero />
      <Features />
      <Pricing /> {/* 2. Add Pricing here */}
      <Footer />
      
    </div>
  );
}

export default App;