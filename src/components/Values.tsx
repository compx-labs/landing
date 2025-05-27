import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShieldCheck, Gem, Lightbulb } from 'lucide-react';

const Values: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: <ShieldCheck className="w-12 h-12 text-compx-pink" />,
      title: 'Transparency',
      description: 'All smart contracts are open-source and audited, with real-time analytics accessible to users.'
    },
    {
      icon: <Gem className="w-12 h-12 text-compx-pink" />,
      title: 'Decentralization',
      description: 'Community-governed platform with on-chain voting and progressive decentralization roadmap.'
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-compx-pink" />,
      title: 'Innovation',
      description: 'Pushing the boundaries of DeFi with unique products and continuous protocol improvements.'
    }
  ];

  return (
    <section id="values" className="section-padding relative">
      {/* Curved background */}
      <div className="absolute inset-0 bg-gradient-to-b from-compx-dark to-compx-dark-light -z-10"></div>
      
      <div className="container mx-auto container-padding">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Core <span className="text-gradient">Values</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            CompX is built on strong principles that guide our development and community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6 p-5 rounded-full bg-compx-purple/20 border border-compx-purple/30">
                {value.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
              <p className="text-white/70">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;