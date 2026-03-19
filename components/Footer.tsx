
import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Instagram, ArrowUp, Send, Facebook, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

interface FooterProps {
  onNavClick?: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const footerLinks = {
    company: [
      { name: 'Our Heritage', id: 'home' },
      { name: 'Manufacturing', id: 'capabilities' },
      { name: 'CSR Initiatives', id: 'csr' },
      { name: 'Investor Relations', id: 'investor-relations' },
    ],
    sectors: [
      { name: 'Ethnic Wear', id: 'brands' },
      { name: 'Athleisure', id: 'brands' },
      { name: 'Performance Fabrics', id: 'verticals' },
      { name: 'Industrial Knits', id: 'verticals' },
    ],
    legal: [
      { name: 'Privacy Policy', id: 'privacy' },
      { name: 'Terms of Service', id: 'terms' },
      { name: 'Wholesale Terms', id: 'wholesale' },
      { name: 'Sustainability Code', id: 'sustainability' },
    ]
  };

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (onNavClick) {
      onNavClick(id);
    }
  };

  return (
    <footer className="relative z-10 px-4 sm:px-6 pb-8 sm:pb-12 mt-12 sm:mt-20">
      <div className="max-w-[1600px] mx-auto rounded-3xl sm:rounded-[48px] lg:rounded-[80px] bg-slate-50 border border-slate-100 shadow-[0_20px_80px_rgba(0,0,0,0.03)] overflow-hidden relative">
        
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=2000" 
            alt="Minimalist Texture" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Top Section: Branding & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 p-6 sm:p-8 lg:p-24 relative z-10">
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 lg:mb-10"
            >
              <img 
                src="https://ik.imagekit.io/yajas/Kudu%20Logo%20Concept.png" 
                alt="Kudu Official Brand Mark" 
                className="h-10 sm:h-12 lg:h-20 w-auto object-contain mix-blend-multiply"
              />
            </motion.div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-serif font-bold text-slate-800 leading-tight mb-4 lg:mb-8">
              Crafting <span className="italic font-light text-slate-400">Legacy</span> <br />Through Every Thread.
            </h2>
            <div className="flex items-center space-x-3 lg:space-x-4 mb-4 lg:mb-8">
              <div className="h-[1px] w-8 sm:w-10 lg:w-12 bg-slate-200"></div>
              <p className="text-[8px] sm:text-[9px] lg:text-[10px] font-bold uppercase text-slate-400">Est. 1952</p>
            </div>
            <p className="text-slate-500 font-medium leading-relaxed max-w-md text-xs sm:text-sm lg:text-lg">
              A vertically integrated textile powerhouse delivering zero-defect manufacturing and premium fashion labels to the world's most discerning brands.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="p-6 sm:p-8 lg:p-16 rounded-2xl sm:rounded-[32px] lg:rounded-[60px] bg-white border border-slate-100 shadow-[0_15px_45px_rgba(0,0,0,0.02)] max-w-2xl ml-auto w-full relative overflow-hidden group">
              <h4 className="text-[8px] sm:text-[9px] lg:text-[10px] font-bold uppercase text-slate-400 mb-2 lg:mb-4">The Kudu Journal</h4>
              <p className="text-sm sm:text-base lg:text-xl font-serif font-medium text-slate-800 mb-4 lg:mb-8">Subscribe to our quarterly performance reports and global textile trend forecasts.</p>
              
              <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 border-b border-slate-200 pb-2 sm:pb-3 lg:pb-4 group focus-within:border-indigo-600 transition-all duration-500">
                <input 
                  type="email" 
                  placeholder="Enter your professional email" 
                  className="bg-transparent border-none outline-none flex-grow text-xs sm:text-sm lg:text-lg font-serif italic text-slate-900 placeholder:text-slate-300"
                />
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-indigo-600 transition-colors shrink-0"
                >
                  <Send size={14} className="sm:w-4 sm:h-4" />
                </motion.button>
              </div>
              <p className="mt-3 sm:mt-4 lg:mt-6 text-[7px] sm:text-[8px] lg:text-[9px] font-medium text-slate-400">By subscribing, you agree to our privacy policy and terms of service.</p>
            </div>
          </div>
        </div>

        {/* Middle Section: Navigation & Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-8 p-6 sm:p-8 lg:p-24 border-t border-slate-100 relative z-10">
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <h5 className="text-[8px] sm:text-[9px] lg:text-[10px] font-bold uppercase text-slate-400">Heritage</h5>
            <ul className="space-y-2 sm:space-y-3 lg:space-y-4">
              {footerLinks.company.map(link => (
                <li key={link.name}>
                  <a href={`#${link.id}`} onClick={(e) => handleLinkClick(e, link.id)} className="text-[10px] sm:text-xs lg:text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <h5 className="text-[8px] sm:text-[9px] lg:text-[10px] font-bold uppercase text-slate-400">Expertise</h5>
            <ul className="space-y-2 sm:space-y-3 lg:space-y-4">
              {footerLinks.sectors.map(link => (
                <li key={link.name}>
                  <a href={`#${link.id}`} onClick={(e) => handleLinkClick(e, link.id)} className="text-[10px] sm:text-xs lg:text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <h5 className="text-[8px] sm:text-[9px] lg:text-[10px] font-bold uppercase text-slate-400">Governance</h5>
            <ul className="space-y-2 sm:space-y-3 lg:space-y-4">
              {footerLinks.legal.map(link => (
                <li key={link.name}>
                  <a href={`#${link.id}`} onClick={(e) => handleLinkClick(e, link.id)} className="text-[10px] sm:text-xs lg:text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:text-right space-y-6 sm:space-y-8 lg:space-y-10">
            <div>
              <h5 className="text-[8px] sm:text-[9px] lg:text-[10px] font-bold uppercase text-slate-400 mb-3 sm:mb-4 lg:mb-6">Global Headquarters</h5>
              <div className="flex lg:justify-end items-start space-x-3 lg:space-x-4 text-slate-500 font-medium">
                <div className="text-left lg:text-right">
                  <p className="font-bold text-slate-800 text-[9px] sm:text-[10px] lg:text-[11px] mb-1">Ludhiana, India</p>
                  <span className="text-[10px] sm:text-xs lg:text-sm">B - XXXII , 1106/2, Turn Ghelewal<br />Rahon Road, Ludhiana - 141007 (PB.)</span>
                </div>
                <div className="p-2 lg:p-3 bg-white rounded-lg sm:rounded-xl border border-slate-100 shrink-0">
                  <MapPin className="text-slate-400 w-3 h-3 sm:w-4 sm:h-4" />
                </div>
              </div>
            </div>
            
            <div>
              <h5 className="text-[8px] sm:text-[9px] lg:text-[10px] font-bold uppercase text-slate-400 mb-3 sm:mb-4 lg:mb-6">Direct Inquiries</h5>
              <div className="flex lg:justify-end items-center space-x-3 lg:space-x-4 text-slate-500 font-medium">
                 <div className="text-left lg:text-right">
                   <p className="font-bold text-slate-800 text-[9px] sm:text-[10px] lg:text-[11px] mb-1">Corporate Relations</p>
                   <span className="text-[10px] sm:text-xs lg:text-sm">+91 (161) 500 0000</span>
                 </div>
                 <div className="p-2 lg:p-3 bg-white rounded-lg sm:rounded-xl border border-slate-100 shrink-0">
                  <Phone className="text-slate-400 w-3 h-3 sm:w-4 sm:h-4" />
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Socials, Copyright & Back to Top */}
        <div className="p-6 sm:p-8 lg:p-24 pt-8 sm:pt-10 border-t border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12 relative z-10">
          <div className="flex items-center space-x-2 sm:space-x-3">
            {[
              { icon: <Linkedin size={14} className="sm:w-4 sm:h-4" />, name: 'LinkedIn' },
              { icon: <Instagram size={14} className="sm:w-4 sm:h-4" />, name: 'Instagram' },
              { icon: <Twitter size={14} className="sm:w-4 sm:h-4" />, name: 'Twitter' },
              { icon: <Facebook size={14} className="sm:w-4 sm:h-4" />, name: 'Facebook' }
            ].map((social) => (
              <motion.a 
                key={social.name}
                href="#" 
                whileHover={{ y: -3, backgroundColor: '#4f46e5', color: '#fff' }}
                className="w-8 h-8 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-white border border-slate-100 rounded-full transition-all duration-300 flex items-center justify-center text-slate-400"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <div className="flex flex-col items-center order-first lg:order-none">
            <motion.button 
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-xl mb-2 sm:mb-3 lg:mb-4 group"
            >
              <ArrowUp strokeWidth={2} className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:animate-bounce" />
            </motion.button>
            <p className="text-[7px] sm:text-[8px] lg:text-[10px] font-bold uppercase text-slate-400">Back to Top</p>
          </div>

          <div className="text-center lg:text-right">
            <p className="text-[8px] sm:text-[9px] lg:text-[10px] font-medium text-slate-400 leading-loose">
              © 2026 Kudu Group of Companies.<br className="hidden sm:block" />All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
