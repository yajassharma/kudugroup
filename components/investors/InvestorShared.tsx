
import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeroProps {
  title: string;
  subtitle: string;
  image: string;
}

export const SectionHero: React.FC<SectionHeroProps> = ({ title, subtitle, image }) => (
  <div className="relative h-[30vh] sm:h-[40vh] lg:h-[50vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
    </div>
    <div className="relative z-10 text-center px-6 max-w-4xl">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl lg:text-7xl font-serif font-bold mb-4 sm:mb-6 bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent"
      >
        {title}
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-sm sm:text-lg lg:text-xl text-slate-200 font-medium max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    </div>
  </div>
);

import { ChevronRight, X, Info } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

interface BreadcrumbsProps {
  onBack: () => void;
  onLanding: () => void;
  currentSubPage: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ onBack, onLanding, currentSubPage }) => (
  // ... (keep existing Breadcrumbs implementation)
  <div className="bg-white border-b border-slate-100 py-4 px-6">
    <div className="max-w-7xl mx-auto flex items-center space-x-2 text-xs font-semibold text-slate-400">
      <button onClick={onBack} className="hover:text-slate-900 transition-colors">Home</button>
      <ChevronRight size={12} />
      <button 
        onClick={onLanding} 
        className={currentSubPage === 'landing' ? 'text-indigo-600' : 'hover:text-slate-900 transition-colors'}
      >
        Investor Relations
      </button>
      {currentSubPage !== 'landing' && (
        <>
          <ChevronRight size={12} />
          <span className="text-slate-900 capitalize">{currentSubPage.replace('-', ' ')}</span>
        </>
      )}
    </div>
  </div>
);

interface DisclosureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DisclosureModal: React.FC<DisclosureModalProps> = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-sm bg-white rounded-[32px] overflow-hidden shadow-2xl border border-slate-100"
        >
          <div className="p-8 sm:p-10 text-center">
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-slate-900">
              <Info size={32} />
            </div>
            
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mb-4 tracking-tight">Information Disclosure</h3>
            
            <div className="space-y-4">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                To be disclosed soon. It is not disclosed yet.
              </p>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-bold uppercase tracking-wider">
                It would be uploaded soon
              </p>
            </div>
            
            <button
              onClick={onClose}
              className="mt-10 w-full bg-slate-900 text-white rounded-2xl py-4 font-bold text-sm hover:bg-slate-800 transition-all active:scale-95"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);
