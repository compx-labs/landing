import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [activeSegments, setActiveSegments] = useState(0);
  const [currentFlavorText, setCurrentFlavorText] = useState(0);
  const totalSegments = 5;

  const flavorTexts = [
    'ESTABLISHING SECURE CONNECTION...',
    'LOADING ECOSYSTEM MODULES...',
    'SYNCHRONIZING BLOCKCHAIN STATE...',
    'INITIALIZING SMART CONTRACTS...',
    'SYSTEM READY',
  ];

  useEffect(() => {
    // Fill segments over 5 seconds (1 second per segment)
    const interval = setInterval(() => {
      setActiveSegments((prev) => {
        if (prev < totalSegments) {
          setCurrentFlavorText(prev);
          return prev + 1;
        }
        return prev;
      });
    }, 1000);

    // Complete after all segments are filled
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 5500);

    return () => {
      clearInterval(interval);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
      >
        <div className="max-w-2xl w-full px-8">
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-compx-pink mb-2 italic tracking-wider"
          >
            COMPX SYSTEM
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-compx-pink/80 mb-12 italic"
          >
            Initialising...
          </motion.p>

          {/* Segmented Loading Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="mb-8"
          >
            <div className="flex gap-2">
              {Array.from({ length: totalSegments }).map((_, index) => (
                <div
                  key={index}
                  className="flex-1 h-4 bg-gray-900 border border-compx-pink/30 relative overflow-hidden"
                  style={{
                    clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)', // Parallelogram for industrial look
                  }}
                >
                  {/* Fill animation */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ 
                      scaleX: activeSegments > index ? 1 : 0,
                      opacity: activeSegments > index ? 1 : 0.3
                    }}
                    transition={{ 
                      duration: 0.8,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-compx-pink origin-left"
                    style={{
                      boxShadow: activeSegments > index ? '0 0 10px rgba(255, 102, 196, 0.5)' : 'none'
                    }}
                  />
                  
                  {/* Scanline effect */}
                  {activeSegments === index + 1 && (
                    <motion.div
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      transition={{ 
                        duration: 0.8,
                        ease: "linear"
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Progress percentage */}
            <div className="mt-3 text-right">
              <span className="text-compx-pink font-mono text-sm italic">
                {Math.round((activeSegments / totalSegments) * 100)}%
              </span>
            </div>
          </motion.div>

          {/* Flavor Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="h-8"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={currentFlavorText}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-compx-pink/60 text-sm font-mono tracking-wide"
              >
                {flavorTexts[currentFlavorText]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Terminal-style blinking cursor */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ 
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
            className="text-compx-pink text-sm font-mono mt-2"
          >
            _
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;

