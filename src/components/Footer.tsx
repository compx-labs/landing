import React from 'react';
import { motion } from 'framer-motion';
import { 
  Twitter, 
  Github, 
  Gitlab, 
  Send, 
  BookOpen, 
  Shield, 
  HelpCircle 
} from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Products',
      links: [
        { name: 'Farms', href: '#' },
        { name: 'Staking', href: '#' },
        { name: 'xUSD CDP', href: '#' },
        { name: 'X-NFT', href: '#' },
        { name: 'Swap', href: '#' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#', icon: <BookOpen size={16} /> },
        { name: 'Tutorials', href: '#' },
        { name: 'Security', href: '#', icon: <Shield size={16} /> },
        { name: 'FAQ', href: '#', icon: <HelpCircle size={16} /> },
      ]
    },
    {
      title: 'Community',
      links: [
        { name: 'Governance', href: '#' },
        { name: 'Forum', href: '#' },
        { name: 'Discord', href: '#' },
        { name: 'Blog', href: '#' },
      ]
    }
  ];
  
  const socialLinks = [
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Github size={20} />, href: '#', label: 'GitHub' },
    { icon: <Gitlab size={20} />, href: '#', label: 'GitLab' },
    { icon: <Send size={20} />, href: '#', label: 'Telegram' },
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
                    >
                      {link.icon && link.icon}
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
            <p className="text-white/70 mb-4">Stay updated with our newsletter</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-4 py-2 rounded-lg bg-compx-dark-light border border-compx-purple/30 text-white focus:outline-none focus:border-compx-pink"
              />
              <button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-compx-pink hover:text-compx-pink-light"
                aria-label="Subscribe"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8 text-center text-white/50 text-sm">
          <p>© {currentYear} CompX. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-compx-pink transition-colors">Terms</a>
            <a href="#" className="hover:text-compx-pink transition-colors">Privacy</a>
            <a href="#" className="hover:text-compx-pink transition-colors">Disclaimers</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;