
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

import { ChevronRight } from 'lucide-react';

interface BreadcrumbsProps {
  onBack: () => void;
  onLanding: () => void;
  currentSubPage: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ onBack, onLanding, currentSubPage }) => (
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
