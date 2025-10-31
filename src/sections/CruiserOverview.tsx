import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GlassPanel from '../components/GlassPanel';
import { APPS, AppModule } from '../content/ecosystem';

const CruiserOverview: React.FC = () => {
  const [activeZone, setActiveZone] = useState<string | null>(null);
  const [panelPosition, setPanelPosition] = useState({ x: 0, y: 0 });

  // Define hotspot zones (positions relative to container)
  const zones = [
    {
      id: 'compx',
      name: 'Engine Core',
      position: { top: '45%', left: '50%' },
      size: { width: '120px', height: '120px' },
      color: 'compx-purple',
    },
    {
      id: 'waypoint',
      name: 'Navigation Deck',
      position: { top: '25%', left: '30%' },
      size: { width: '100px', height: '100px' },
      color: 'compx-teal',
    },
    {
      id: 'orbital',
      name: 'Docking Bay',
      position: { top: '60%', left: '70%' },
      size: { width: '100px', height: '100px' },
      color: 'compx-pink',
    },
  ];

  const handleZoneClick = (zoneId: string, event: React.MouseEvent) => {
    if (activeZone === zoneId) {
      setActiveZone(null);
    } else {
      const rect = event.currentTarget.getBoundingClientRect();
      setPanelPosition({
        x: rect.right + 20,
        y: rect.top,
      });
      setActiveZone(zoneId);
    }
  };

  const getAppData = (zoneId: string): AppModule | undefined => {
    return APPS.find((app) => app.id === zoneId);
  };

  return (
    <section
      id="overview"
      className="min-h-screen flex items-center justify-center container-padding pt-20 relative"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Terminal Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-4">
            {/* Flashing green indicator */}
            <motion.div
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-4 h-4 bg-green-500"
              style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.8)' }}
            />
            
            <h1 className="text-4xl md:text-6xl font-bold text-compx-pink tracking-wider italic">
              COMPX SYSTEM ONLINE
            </h1>
          </div>
        </div>

        {/* Schematic Container */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl mx-auto aspect-video blueprint-bg border-2 border-gray-800 overflow-hidden"
        >
          {/* Digital noise reveal overlay */}
          <motion.div
            initial={{ scaleX: 1 }}
            whileInView={{ scaleX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
            className="absolute inset-0 bg-black z-20 origin-left"
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 102, 196, 0.03) 2px, rgba(255, 102, 196, 0.03) 4px),
                repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255, 102, 196, 0.03) 2px, rgba(255, 102, 196, 0.03) 4px)
              `
            }}
          />

          {/* Scanline effect during reveal */}
          <motion.div
            initial={{ x: '-100%' }}
            whileInView={{ x: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3, ease: "linear" }}
            className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-compx-pink/20 to-transparent z-30 pointer-events-none"
          />

          {/* Schematic Image with digital reveal */}
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            src="/cruiser-schematic.png"
            alt="CompX Cruiser Schematic"
            className="w-full h-full object-contain mix-blend-screen"
          />

          {/* Interactive Hotspots */}
          {zones.map((zone) => {
            const isActive = activeZone === zone.id;
            const colorClass = zone.color;

            return (
              <button
                key={zone.id}
                onClick={(e) => handleZoneClick(zone.id, e)}
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setPanelPosition({
                    x: rect.right + 20,
                    y: rect.top,
                  });
                }}
                className="absolute group cursor-pointer"
                style={{
                  top: zone.position.top,
                  left: zone.position.left,
                  width: zone.size.width,
                  height: zone.size.height,
                  transform: 'translate(-50%, -50%)',
                }}
                aria-label={`View ${zone.name}`}
              >
                {/* Glow effect */}
                <div
                  className={`
                    absolute inset-0 rounded-full
                    bg-${colorClass}/20 blur-xl
                    transition-all duration-300
                    ${isActive ? 'scale-150 opacity-100' : 'scale-100 opacity-0 group-hover:opacity-100'}
                  `}
                  style={{
                    backgroundColor: isActive
                      ? `var(--${colorClass})`
                      : undefined,
                    opacity: isActive ? 0.3 : undefined,
                  }}
                />

                {/* Hotspot ring */}
                <div
                  className={`
                    absolute inset-0 rounded-full border-2
                    transition-all duration-300
                    ${
                      isActive
                        ? `border-${colorClass} scale-110`
                        : `border-white/30 group-hover:border-${colorClass}/70 group-hover:scale-105`
                    }
                  `}
                  style={{
                    borderColor: isActive ? `var(--${colorClass})` : undefined,
                  }}
                />

                {/* Center dot */}
                <div
                  className={`
                    absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    w-3 h-3 rounded-full
                    transition-all duration-300
                    ${isActive ? `bg-${colorClass} scale-150` : 'bg-white/50 group-hover:scale-125'}
                  `}
                  style={{
                    backgroundColor: isActive ? `var(--${colorClass})` : undefined,
                  }}
                />

                {/* Label */}
                <div
                  className={`
                    absolute top-full mt-2 left-1/2 -translate-x-1/2
                    px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap
                    transition-opacity duration-200
                    glass border border-white/20
                    ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                  `}
                >
                  {zone.name}
                </div>
              </button>
            );
          })}
        </motion.div>

        {/* Desktop: Hover to show panel */}
        <div className="hidden lg:block">
          {zones.map((zone) => {
            const app = getAppData(zone.id);
            if (!app || activeZone !== zone.id) return null;

            return (
              <GlassPanel
                key={zone.id}
                title={app.name}
                tagline={app.tagline}
                metrics={app.metrics}
                bullets={app.bullets}
                primaryCta={{
                  label: `Open ${app.name}`,
                  href: app.route,
                }}
                secondaryCta={{
                  label: 'Learn More',
                  href: 'https://docs.compx.io',
                }}
                asOverlay
                position={panelPosition}
                onClose={() => setActiveZone(null)}
              />
            );
          })}
        </div>

        {/* Mobile/Tablet: Show panels below */}
        <div className="lg:hidden mt-8 space-y-6">
          {APPS.map((app) => (
            <GlassPanel
              key={app.id}
              title={app.name}
              tagline={app.tagline}
              metrics={app.metrics}
              bullets={app.bullets}
              primaryCta={{
                label: `Open ${app.name}`,
                href: app.route,
              }}
              secondaryCta={{
                label: 'Learn More',
                href: 'https://docs.compx.io',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CruiserOverview;

