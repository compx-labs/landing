import { useState } from 'react';
import Layout from './components/Layout';
import ProgressNav from './components/ProgressNav';
import LoadingScreen from './components/LoadingScreen';
import CruiserOverview from './sections/CruiserOverview';

// Define sections for navigation
const sections = [
  { id: 'overview', name: 'Overview' },
  { id: 'engine', name: 'Engine Core' },
  { id: 'navigation', name: 'Navigation Deck' },
  { id: 'docking', name: 'Docking Bay' },
];

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      <Layout>
        <ProgressNav sections={sections} />

      {/* Section 1: Cruiser Overview with Interactive Hotspots */}
      <CruiserOverview />

      {/* Section 2: Engine Core (Placeholder) */}
      <section id="engine" className="min-h-screen flex items-center justify-center container-padding blueprint-bg">
        <div className="text-center max-w-2xl">
          <h2 className="text-5xl font-bold mb-4 text-compx-purple">Engine Core</h2>
          <p className="text-xl text-white/70">CompX — Composable Finance Hub</p>
          <div className="mt-8 glass p-8 rounded-lg">
            <p className="text-white/60">Next: Interactive schematic with hotspots</p>
          </div>
        </div>
      </section>

      {/* Section 3: Navigation Deck (Placeholder) */}
      <section id="navigation" className="min-h-screen flex items-center justify-center container-padding grid-overlay">
        <div className="text-center max-w-2xl">
          <h2 className="text-5xl font-bold mb-4 text-compx-teal">Navigation Deck</h2>
          <p className="text-xl text-white/70">Waypoint — Programmable Routes</p>
          <div className="mt-8 glass p-8 rounded-lg">
            <p className="text-white/60">Coming soon: Route vectors & milestones</p>
          </div>
        </div>
      </section>

      {/* Section 4: Docking Bay (Placeholder) */}
      <section id="docking" className="min-h-screen flex items-center justify-center container-padding">
        <div className="text-center max-w-2xl">
          <h2 className="text-5xl font-bold mb-4 text-compx-pink">Docking Bay</h2>
          <p className="text-xl text-white/70">Orbital — Lending Markets</p>
          <div className="mt-8 glass p-8 rounded-lg">
            <p className="text-white/60">Coming soon: Market pods & conduits</p>
          </div>
        </div>
      </section>
      </Layout>
    </>
  );
}

export default App;
