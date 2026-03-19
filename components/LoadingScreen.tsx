import React from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  isTransition?: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isTransition = false }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white ${isTransition ? 'bg-white/80 backdrop-blur-md' : ''}`}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        {/* The Kudu Moving Logo GIF */}
        <div className="w-48 h-48 lg:w-64 lg:h-64 mb-10 relative">
          <img 
            src="https://ik.imagekit.io/yajas/AkoolBasic_Generateasubtleloopi-ezgif.com-effects.gif" 
            alt="Kudu Logo Animation" 
            className="w-full h-full object-contain mix-blend-multiply"
          />
        </div>

        {/* Brand Text */}
        <div className="text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
            className="font-serif text-3xl lg:text-6xl font-light tracking-[0.2em] text-black uppercase mb-4"
          >
            KUDU GROUP
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1.2, duration: 2, ease: "easeInOut" }}
            className="h-px bg-black/10 w-full max-w-[280px] mx-auto mb-6"
          />
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 1 }}
            className="text-[12px] font-bold tracking-[0.3em] text-black/30 uppercase"
          >
            Textile Excellence Since 1952
          </motion.p>
        </div>
      </motion.div>

      {/* Subtle corner brand ornament for the loader */}
      {!isTransition && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="absolute bottom-12 right-12 w-48 h-48 border border-black rounded-full"
        />
      )}
      
      {/* Cinematic progress pulse */}
      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex space-x-2"
      >
        {[0, 1, 2].map((i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-black/10" />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;