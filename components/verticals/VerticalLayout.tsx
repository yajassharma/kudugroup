
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight } from 'lucide-react';

interface VerticalLayoutProps {
  title: string;
  subtitle: string;
  image: string;
  children: React.ReactNode;
  onBack: () => void;
  nextVertical?: { title: string; onClick: () => void };
}

const VerticalLayout: React.FC<VerticalLayoutProps> = ({ 
  title, 
  subtitle, 
  image, 
  children, 
  onBack,
  nextVertical 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen"
    >
      {/* Hero Section */}
      <div className="relative h-[50vh] lg:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-[1px]" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.button
            onClick={onBack}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors mb-8 lg:mb-12 uppercase text-xs font-medium tracking-widest"
          >
            <ArrowLeft size={16} />
            <span>Back to Verticals</span>
          </motion.button>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-white mb-4 lg:mb-6 leading-tight"
          >
            {title}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-base sm:text-lg lg:text-xl text-slate-100 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-12 bg-white/20"
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-32">
        {children}
      </div>

      {/* Next Vertical CTA */}
      {nextVertical && (
        <section className="py-16 lg:py-24 px-4 sm:px-6 bg-slate-50 border-t border-slate-100">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 lg:mb-6 block">Next Vertical</span>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-serif font-bold text-slate-900 mb-8 lg:mb-10">{nextVertical.title}</h2>
            <motion.button
              onClick={nextVertical.onClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center space-x-3 bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-sm transition-all shadow-lg hover:bg-indigo-600"
            >
              <span>Explore Next</span>
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 text-center">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4 lg:mb-6">Ready to collaborate?</h3>
        <p className="text-slate-600 text-base lg:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">Our vertically integrated ecosystem is designed to bring your most ambitious textile visions to life with precision and scale.</p>
        <button className="text-indigo-600 font-bold text-sm uppercase tracking-widest hover:text-indigo-700 transition-colors">Get in touch with our experts</button>
      </section>
    </motion.div>
  );
};

export default VerticalLayout;
