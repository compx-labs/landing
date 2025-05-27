import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <ParticleBackground />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-compx-dark via-compx-dark/95 to-compx-dark opacity-90"></div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              The Future of DeFi is <span className="text-gradient">Composable</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span className="font-medium">Innovation. Composability. Yield.</span> 
              <br className="hidden md:block" />
              Unlock the full potential of decentralized finance with CompX.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a 
                href="https://app.compx.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary text-lg"
              >
                Launch App <ArrowRight size={20} />
              </a>
              <a href="#features" className="btn-outline text-lg">
                Explore Features
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-compx-purple to-compx-pink rounded-3xl blur-lg opacity-75"></div>
              <div className="glass-card relative p-6 overflow-hidden">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-compx-dark/80 rounded-lg p-4 transform hover:scale-105 transition-transform">
                    <h3 className="text-compx-pink font-semibold mb-2">Auto-compounding</h3>
                    <p className="text-white/70 text-sm">Maximize your yields with automatic reinvestment</p>
                  </div>
                  <div className="bg-compx-dark/80 rounded-lg p-4 transform hover:scale-105 transition-transform">
                    <h3 className="text-compx-pink font-semibold mb-2">Staking Pools</h3>
                    <p className="text-white/70 text-sm">Earn rewards by locking your assets</p>
                  </div>
                  <div className="bg-compx-dark/80 rounded-lg p-4 transform hover:scale-105 transition-transform">
                    <h3 className="text-compx-pink font-semibold mb-2">xUSD CDP</h3>
                    <p className="text-white/70 text-sm">Mint stable assets backed by your collateral</p>
                  </div>
                  <div className="bg-compx-dark/80 rounded-lg p-4 transform hover:scale-105 transition-transform">
                    <h3 className="text-compx-pink font-semibold mb-2">X-NFT</h3>
                    <p className="text-white/70 text-sm">Where NFTs meet DeFi functionality</p>
                  </div>
                </div>
                <div className="mt-4 bg-gradient-to-r from-compx-purple to-compx-pink p-0.5 rounded-lg">
                  <div className="bg-compx-dark/90 rounded-lg p-4 text-center">
                    <p className="text-white font-semibold">Total Value Locked</p>
                    <p className="text-3xl font-bold text-compx-pink">$3,934,284.92</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;