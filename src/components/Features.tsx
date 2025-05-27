import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Layers, LineChart, Wallet, Image, 
  ArrowRightLeft, Target, Network, Vote, Award 
} from 'lucide-react';
import FeatureCard from './FeatureCard';

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const featuresList = [
    {
      icon: <Layers className="w-10 h-10 text-compx-pink" />,
      title: 'Auto-compounding Farms',
      description: 'Automatically reinvest your yields to maximize returns without manual intervention.'
    },
    {
      icon: <Wallet className="w-10 h-10 text-compx-pink" />,
      title: 'Staking Pools',
      description: 'Lock your tokens to earn passive income through our high-yield staking pools.'
    },
    {
      icon: <LineChart className="w-10 h-10 text-compx-pink" />,
      title: 'xUSD CDP',
      description: 'Mint xUSD stablecoin by using your crypto assets as collateral.'
    },
    {
      icon: <Image className="w-10 h-10 text-compx-pink" />,
      title: 'X-NFT',
      description: 'Unique NFTs with DeFi functionality, combining collectibles with yield generation.'
    },
    {
      icon: <ArrowRightLeft className="w-10 h-10 text-compx-pink" />,
      title: 'Swap Router',
      description: 'Trade tokens with minimal slippage through our optimized routing algorithm.'
    },
    {
      icon: <Target className="w-10 h-10 text-compx-pink" />,
      title: 'Limit Orders',
      description: 'Set your desired price for trades and let them execute automatically.'
    },
    {
      icon: <Network className="w-10 h-10 text-compx-pink" />,
      title: 'Multi-chain Order Book',
      description: 'Nexus connects liquidity across multiple blockchains for efficient trading.'
    },
    {
      icon: <Vote className="w-10 h-10 text-compx-pink" />,
      title: 'On-Chain Governance',
      description: 'Participate in platform decisions through transparent on-chain voting.'
    },
    {
      icon: <Award className="w-10 h-10 text-compx-pink" />,
      title: 'Weekly Rewards',
      description: 'Earn additional incentives for platform usage and liquidity provision.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="features" className="section-padding relative bg-compx-dark overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-radial from-compx-purple/20 to-transparent opacity-30"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive <span className="text-gradient">DeFi</span> Ecosystem
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            CompX combines cutting-edge features to create a seamless and rewarding DeFi experience
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {featuresList.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;