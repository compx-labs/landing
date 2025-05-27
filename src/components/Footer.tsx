import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Send, 
  BookOpen, 
  X,
  Youtube
} from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Products',
      links: [
        { name: 'Farms', href: 'https://app.compx.io/farms' },
        { name: 'Staking', href: 'https://app.compx.io/staking-pools' },
        { name: 'xUSD CDP', href: 'https://app.compx.io/cdp/vaults' },
        { name: 'X-NFT', href: 'https://app.compx.io/x-nft' },
        { name: 'Swap', href: 'https://app.compx.io/swap' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: 'https://compx-documentation.gitbook.io/compx-documentation', icon: <BookOpen size={16} /> },
        { name: 'Tutorials', href: 'https://www.youtube.com/@CompXLabs' },

      ]
    },
    {
      title: 'Community',
      links: [
        { name: 'X', href: 'https://x.com/compxlabs' },
        { name: 'Discord', href: 'https://discord.gg/pSG93C6UN8' },
        { name: 'Telegram', href: 'https://t.me/Alammex_Compx' },
      ]
    }
  ];
  
  const socialLinks = [
    { icon: <X size={20} />, href: 'https://x.com/compxlabs', label: 'X' },
    { icon: <Github size={20} />, href: 'https://github.com/compx-labs', label: 'GitHub' },
    { icon: <Send size={20} />, href: 'https://t.me/Alammex_Compx', label: 'Telegram' },
    { icon: <Youtube size={20} />, href: 'https://www.youtube.com/@CompXLabs', label: 'Youtube' },
  ];

  return (
    <footer className="bg-compx-dark pt-16 pb-8 relative overflow-hidden">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-compx-purple via-compx-pink to-compx-purple"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 text-white/70 max-w-xs">
              The next generation of decentralized finance protocols. Building the future of open finance.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="text-white/70 hover:text-compx-pink transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((category, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-lg font-semibold">{category.title}</h4>
              <ul className="space-y-2">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-white/70 hover:text-compx-pink transition-colors flex items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.icon && link.icon}
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8 text-center text-white/50 text-sm">
          <p>© {currentYear} CompX. All rights reserved.</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;