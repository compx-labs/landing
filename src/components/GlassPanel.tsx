import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

interface GlassPanelProps {
  title: string;
  tagline?: string;
  metrics?: { label: string; value: string }[];
  bullets?: string[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  onClose?: () => void;
  asOverlay?: boolean;
  position?: { x: number; y: number };
  className?: string;
}

const GlassPanel: React.FC<GlassPanelProps> = ({
  title,
  tagline,
  metrics,
  bullets,
  primaryCta,
  secondaryCta,
  onClose,
  asOverlay = false,
  position,
  className = '',
}) => {
  const panelRef = useRef<HTMLDivElement>(null);

  // Handle ESC key to close
  useEffect(() => {
    if (!asOverlay || !onClose) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [asOverlay, onClose]);

  // Edge-aware positioning
  useEffect(() => {
    if (!position || !panelRef.current) return;

    const panel = panelRef.current;
    const rect = panel.getBoundingClientRect();
    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    let adjustedX = position.x;
    let adjustedY = position.y;

    // Flip if too close to right edge
    if (position.x + rect.width > viewport.width - 20) {
      adjustedX = position.x - rect.width - 20;
    }

    // Flip if too close to bottom edge
    if (position.y + rect.height > viewport.height - 20) {
      adjustedY = viewport.height - rect.height - 20;
    }

    panel.style.left = `${Math.max(20, adjustedX)}px`;
    panel.style.top = `${Math.max(20, adjustedY)}px`;
  }, [position]);

  const panelContent = (
    <div
      ref={panelRef}
      role={asOverlay ? 'dialog' : 'region'}
      aria-label={title}
      className={`
        glass rounded-lg p-6 max-w-md
        border border-white/20
        ${asOverlay ? 'fixed z-50' : 'relative'}
        ${className}
      `}
      style={position && asOverlay ? { left: position.x, top: position.y } : undefined}
    >
      {/* Close button for overlay */}
      {asOverlay && onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
          aria-label="Close panel"
        >
          <X size={20} />
        </button>
      )}

      {/* Title & Tagline */}
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
        {tagline && <p className="text-sm text-white/60">{tagline}</p>}
      </div>

      {/* Metrics */}
      {metrics && metrics.length > 0 && (
        <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-white/10">
          {metrics.map((metric, idx) => (
            <div key={idx}>
              <div className="text-lg font-bold text-compx-teal">{metric.value}</div>
              <div className="text-xs text-white/50">{metric.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Bullets */}
      {bullets && bullets.length > 0 && (
        <ul className="space-y-3 mb-6">
          {bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-3 text-white/80 text-sm">
              <span className="text-compx-purple mt-1">▸</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      {/* CTAs */}
      {(primaryCta || secondaryCta) && (
        <div className="flex flex-col sm:flex-row gap-3">
          {primaryCta && (
            <a
              href={primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-compx-purple/30 border border-compx-purple text-white font-medium hover:bg-compx-purple/50 transition-all duration-300"
            >
              {primaryCta.label}
              <ExternalLink size={16} />
            </a>
          )}
          {secondaryCta && (
            <a
              href={secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2.5 rounded-lg border border-white/20 text-white/80 font-medium hover:bg-white/5 transition-all duration-300 text-center"
            >
              {secondaryCta.label}
            </a>
          )}
        </div>
      )}
    </div>
  );

  if (asOverlay) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          {panelContent}
        </motion.div>
      </AnimatePresence>
    );
  }

  return panelContent;
};

export default GlassPanel;

