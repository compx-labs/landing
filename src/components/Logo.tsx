import React from 'react';
import { motion } from 'framer-motion';

const Logo: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <a href="#" className="h-12 block">
        <img 
          src="/logo.svg" 
          alt="CompX" 
          className="h-full w-auto"
        />
      </a>
    </motion.div>
  );
};

export default Logo;