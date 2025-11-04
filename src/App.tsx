import { CardCarousel } from "./components/CardCarousel";
import { PRODUCTS } from "./data/products";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0e13] to-[#141821]">
      {/* Logo */}
      <div className="w-full py-4 md:py-6 flex justify-center">
        <img 
          src="/compx-large.png" 
          alt="CompX Logo" 
          className="h-20 md:h-40 w-auto"
        />
      </div>
      
      <CardCarousel
        title="Explore the Growing Ecosystem"
        subtitle="Everything DeFi needs - lending, payments, staking and more."
        items={PRODUCTS}
      />
    </div>
  );
}

export default App;
