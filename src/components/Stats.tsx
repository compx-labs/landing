import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Stat {
  label: string;
  value: string;
  prefix: string;
  suffix?: string;
  increment: number;
}

const Stats: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats: Stat[] = [
    { label: 'Total Value Locked', value: '3934284.92', prefix: '$', increment: 10000 },
    { label: 'Active Users', value: '14500', prefix: '', increment: 100 },
    { label: 'Transactions', value: '876543', prefix: '', increment: 1000 },
    { label: 'Weekly Rewards', value: '75000', prefix: '$', increment: 1000 }
  ];

  const [counters, setCounters] = useState<string[]>(stats.map(() => '0'));

  useEffect(() => {
    if (!inView) return;

    const interval = 2000; // 2 seconds to reach the target
    const updateInterval = 30; // Update every 30ms for smooth animation
    const steps = interval / updateInterval;

    stats.forEach((stat, index) => {
      let current = 0;
      const target = parseFloat(stat.value);
      const increment = target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }

        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = current.toLocaleString('en-US', {
            minimumFractionDigits: stat.value.includes('.') ? 2 : 0,
            maximumFractionDigits: stat.value.includes('.') ? 2 : 0
          });
          return newCounters;
        });
      }, updateInterval);

      return () => clearInterval(timer);
    });
  }, [inView, stats]);

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-compx-dark-light"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-compx-purple/20 to-compx-pink/20 opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-white/70 mb-2">{stat.label}</p>
              <h3 className="text-3xl md:text-4xl font-bold text-compx-pink">
                {stat.prefix}{counters[index]}{stat.suffix || ''}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;