
import React from 'react';
import { motion } from 'framer-motion';

interface VerticalHeroProps {
  title: string;
  subtitle: string;
  image?: string;
  overlayOpacity?: number;
}

const VerticalHero: React.FC<VerticalHeroProps> = ({ 
  title, 
  subtitle, 
  image,
  overlayOpacity = 0.6
}) => {
  return (
    <div className="relative h-[60vh] lg:h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image with Parallax */}
      {image && (
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div 
            className="absolute inset-0 bg-slate-900" 
            style={{ opacity: overlayOpacity }}
          />
        </motion.div>
      )}

      {/* Animated Background Pattern (if no image) */}
      {!image && (
        <div className="absolute inset-0 z-0 opacity-20">
          <svg width="100%" height="100%" className="absolute inset-0">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          <motion.div
            animate={{ 
              background: [
                "radial-gradient(circle at 20% 30%, rgba(79, 70, 229, 0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 70%, rgba(79, 70, 229, 0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 30%, rgba(79, 70, 229, 0.15) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-8xl font-serif font-bold text-white mb-4 lg:mb-8 tracking-tight leading-tight">
            {title}
          </h1>
          <div className="w-16 lg:w-24 h-1 bg-indigo-500 mx-auto mb-6 lg:mb-8" />
          <p className="text-base sm:text-xl lg:text-2xl text-slate-200 font-medium max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[10px] font-bold uppercase tracking-wider text-white/40 mb-4">Discover More</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-indigo-500 to-transparent"
        />
      </motion.div>
    </div>
  );
};

export default VerticalHero;
