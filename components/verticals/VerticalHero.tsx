import React from 'react';
import { motion } from 'framer-motion';

interface VerticalHeroProps {
  title: string;
  subtitle: string;
  image?: string;
}

const VerticalHero: React.FC<VerticalHeroProps> = ({
  title,
  subtitle,
  image
}) => {
  return (
    <div className="relative h-[80vh] lg:h-screen flex items-center overflow-hidden bg-[#0A0A0A]">
      {/* Background Architectural Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Silver Gradient Glow */}
        <div className="absolute -top-1/4 -right-1/4 w-full h-full bg-gradient-radial from-slate-200/5 to-transparent blur-[120px] pointer-events-none" />

        {/* Subtle Vertical Lines (Architectural Grid) */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(90deg, #FFFFFF 1px, transparent 1px)', backgroundSize: '12.5% 100%' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">

        {/* Left Side: Content (The "Stone" Element) */}
        <div className="lg:w-1/2 z-20">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center space-x-6 mb-12">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "80px" }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="h-px bg-gradient-to-r from-slate-400 to-transparent"
              />
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate-400/60">Legacy Since 1952</span>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-[10rem] font-serif font-light text-white mb-10 leading-[0.85] tracking-tight">
              {title.split(' ').map((word, i) => (
                <span key={i} className="block relative overflow-hidden">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.2, delay: 0.2 + (i * 0.1), ease: [0.22, 1, 0.36, 1] }}
                    className={`inline-block ${i === 1 ? 'italic text-slate-300/80 font-light pr-4' : 'font-bold bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-slate-400'}`}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-lg sm:text-2xl text-slate-400 font-medium max-w-xl leading-relaxed font-serif italic"
            >
              {subtitle}
            </motion.p>
          </motion.div>
        </div>

        {/* Right Side: The "Blade" (Image) */}
        <div className="lg:w-5/12 relative aspect-[4/5] lg:aspect-auto lg:h-[70vh]">
          <motion.div
            initial={{ clipPath: 'inset(100% 0% 0% 0%)', scale: 1.2 }}
            animate={{ clipPath: 'inset(0% 0% 0% 0%)', scale: 1 }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="w-full h-full relative rounded-t-[100px] lg:rounded-t-[240px] overflow-hidden group shadow-[0_0_80px_rgba(0,0,0,0.5)] border border-white/5"
          >
            {image && (
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            )}
            {/* Silver Glass Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-white/5 pointer-events-none" />

            {/* Animated Glint */}
            <motion.div
              animate={{
                x: ['-200%', '200%'],
                rotate: [25, 25]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
              className="absolute top-0 left-0 w-[50%] h-[200%] bg-gradient-to-r from-transparent via-white/5 to-transparent -z-1 z-20"
              style={{ transform: 'translateY(-25%) rotate(25deg)' }}
            />
          </motion.div>

          {/* Abstract Floating Ornament (The "Silver" Element) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="absolute -bottom-10 -left-20 w-40 h-40 glass rounded-full border border-white/10 hidden lg:flex items-center justify-center p-8 backdrop-blur-3xl shadow-2xl"
          >
            <div className="w-full h-full rounded-full border border-slate-400/20 flex items-center justify-center relative overflow-hidden">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 border-t border-slate-400/40 rounded-full"
              />
              <span className="text-[8px] font-bold tracking-[0.4em] text-slate-400 uppercase text-center">Premium Excellence</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Extreme Minimalist Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-10 flex items-center gap-6"
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-slate-500 whitespace-nowrap">Scroll Discovery</span>
        <div className="w-24 h-px bg-gradient-to-r from-slate-400/30 to-transparent relative overflow-hidden">
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-slate-200/50"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default VerticalHero;
