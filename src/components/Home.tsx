import { CardCarousel } from "./CardCarousel";
import { PRODUCTS } from "../data/products";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0e13] to-[#141821]">
      {/* Header */}
      <header className="w-full py-4 md:py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <img 
            src="/compx-large.png" 
            alt="CompX Logo" 
            className="h-20 md:h-40 w-auto"
          />
        </div>
      </header>
      
      <CardCarousel
        title="Explore the Growing Ecosystem"
        subtitle="Everything DeFi needs - lending, payments, staking and more."
        items={PRODUCTS}
        headerButton={
          <button
            onClick={() => navigate('/roadmap')}
            className="px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-[#0b0e13] shadow-lg shadow-pink-500/20"
          >
            View the 2026 Roadmap
          </button>
        }
      />
    </div>
  );
};

