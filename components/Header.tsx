
import React, { useState } from 'react';
import { Menu, ChevronDown, FileText, BarChart3, Bell, Info, ShieldCheck, Headphones } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (val: boolean) => void;
  onNavClick?: (id: string, subPage?: string) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen, onNavClick }) => {
  const [isIRHovered, setIsIRHovered] = useState(false);

  const irLinks = [
    { name: 'Financials', id: 'financials', icon: <BarChart3 size={14} /> },
    { name: 'Annual Reports', id: 'annual-reports', icon: <FileText size={14} /> },
    { name: 'Company Announcements', id: 'announcements', icon: <Bell size={14} /> },
    { name: 'Investor Information', id: 'info', icon: <Info size={14} /> },
    { name: 'Corporate Governance', id: 'governance', icon: <ShieldCheck size={14} /> },
    { name: 'Investor Contact', id: 'contact', icon: <Headphones size={14} /> },
  ];

  const verticalLinks = [
    { name: 'Fabric Production', id: 'fabric-production' },
    { name: 'Printing & Processing', id: 'printing-processing' },
    { name: 'Garment Manufacturing', id: 'garment-manufacturing' },
    { name: 'Embroidery & Finishing', id: 'embroidery-finishing' },
    { name: 'Protective & Medical', id: 'protective-textiles' },
    { name: 'Infrastructure', id: 'infrastructure-capabilities' },
  ];

  const [isVerticalsHovered, setIsVerticalsHovered] = useState(false);

  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-3 lg:px-12 lg:py-6 flex items-center justify-center"
    >
      <div className="max-w-[1500px] w-full flex items-center justify-between">
        {/* Official Kudu Logo in Upper Left */}
        <div 
          onClick={() => onNavClick?.('home')}
          className="flex items-center cursor-pointer group"
        >
          <div className="h-10 lg:h-16 transition-transform duration-500 group-hover:scale-105">
            <img 
              src="https://ik.imagekit.io/yajas/Kudu_Logo_Concept-removebg-preview.png" 
              alt="Kudu Logo" 
              className="h-full w-auto object-contain mix-blend-multiply" 
            />
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-3 lg:space-x-4">
          <nav className="hidden lg:flex items-center space-x-1 glass px-4 py-2 rounded-full border border-black/5 shadow-lg relative">
            {/* Our Verticals with Mega Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsVerticalsHovered(true)}
              onMouseLeave={() => setIsVerticalsHovered(false)}
            >
              <button 
                onClick={() => onNavClick?.('verticals')}
                className={`px-5 py-2 text-[11px] font-semibold flex items-center space-x-1 transition-colors ${isVerticalsHovered ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
              >
                <span>Verticals</span>
                <ChevronDown size={12} className={`transition-transform duration-300 ${isVerticalsHovered ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isVerticalsHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-4 w-[280px] bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden p-3"
                  >
                    <div className="grid grid-cols-1 gap-1">
                      {verticalLinks.map((link) => (
                        <button
                          key={link.id}
                          onClick={() => {
                            onNavClick?.('verticals', link.id);
                            setIsVerticalsHovered(false);
                          }}
                          className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors text-left group"
                        >
                          <span className="text-xs font-medium text-slate-600 group-hover:text-slate-900 transition-colors">{link.name}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-200"></div>
            {/* Investor Relations with Mega Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsIRHovered(true)}
              onMouseLeave={() => setIsIRHovered(false)}
            >
              <button 
                onClick={() => onNavClick?.('investor-relations')}
                className={`px-5 py-2 text-[11px] font-semibold flex items-center space-x-1 transition-colors ${isIRHovered ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
              >
                <span>Investors</span>
                <ChevronDown size={12} className={`transition-transform duration-300 ${isIRHovered ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isIRHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-4 w-[280px] bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden p-3"
                  >
                    <div className="grid grid-cols-1 gap-1">
                      {irLinks.map((link) => (
                        <button
                          key={link.id}
                          onClick={() => {
                            onNavClick?.('investor-relations', link.id);
                            setIsIRHovered(false);
                          }}
                          className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors text-left group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-indigo-50 group-hover:text-black transition-colors">
                            {link.icon}
                          </div>
                          <span className="text-xs font-medium text-slate-600 group-hover:text-slate-900 transition-colors">{link.name}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>
          
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="p-3.5 lg:p-4 bg-slate-900 text-white shadow-2xl rounded-full hover:bg-slate-800 transition-all active:scale-95 flex items-center justify-center"
          >
            <Menu size={20} strokeWidth={3} />
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
