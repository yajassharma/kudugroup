import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronRight, Hash } from 'lucide-react';

interface VerticalCardProps {
  title: string;
  description: string;
  image: string;
  reversed?: boolean;
  onClick: () => void;
  index: number;
}

const VerticalCard: React.FC<VerticalCardProps> = ({
  title,
  description,
  image,
  reversed = false,
  onClick,
  index
}) => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yImage = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <motion.section
      ref={containerRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.5 }}
      className={`relative min-h-screen py-32 lg:py-64 flex flex-col items-center justify-center overflow-hidden bg-[#0A0A0A] px-6 lg:px-24`}
    >
      {/* Background Index Number - Massive & Subtle */}
      <div className={`absolute top-1/2 -translate-y-1/2 ${reversed ? 'left-[-5%]' : 'right-[-5%]'} text-[40vw] font-serif font-black text-white/[0.02] pointer-events-none select-none leading-none z-0`}>
        0{index + 1}
      </div>

      <div className={`container mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-32 w-full max-w-[1400px] ${reversed ? 'lg:flex-row-reverse' : ''}`}>

        {/* The Image Plate */}
        <div className="flex-1 w-full relative z-10 group">
          <motion.div
            style={{ y: yImage }}
            className="relative aspect-[16/10] lg:aspect-[4/5] w-full rounded-[40px] lg:rounded-[80px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)] border border-white/10"
          >
            <motion.img
              style={{ scale: scaleImage }}
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-all duration-[2000ms] group-hover:grayscale-0 grayscale-[0.5]"
              referrerPolicy="no-referrer"
            />
            {/* Architectural Shadow/Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-white/5 opacity-80" />

            {/* Inner Silver Stroke */}
            <div className="absolute inset-0 border border-white/5 rounded-[40px] lg:rounded-[80px] pointer-events-none" />
          </motion.div>

          {/* Floating Image Label */}
          <motion.div
            initial={{ opacity: 0, x: reversed ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className={`absolute top-10 ${reversed ? 'right-[-20px]' : 'left-[-20px]'} glass py-3 px-6 rounded-full border border-white/10 backdrop-blur-3xl z-30 shadow-2xl hidden lg:block`}
          >
            <span className="text-[9px] font-bold tracking-[0.4em] text-white/40 uppercase flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-pulse" />
              Division 0{index + 1}
            </span>
          </motion.div>
        </div>

        {/* The Content Plate (The "Stone/Silver" Slabs) */}
        <div className="flex-1 max-w-2xl relative z-20">
          <motion.div
            style={{ y: yText }}
            className="flex flex-col"
          >
            {/* Header Ornament */}
            <div className="flex items-center gap-6 mb-12">
              <div className="w-12 h-px bg-gradient-to-r from-slate-400 to-transparent" />
              <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate-500 font-serif italic">The Expertise</div>
            </div>

            {/* Title with Chrome Effect */}
            <h2 className="text-5xl sm:text-6xl lg:text-8xl font-serif font-light mb-12 leading-[1.05] text-white tracking-tight">
              {title.split(' ').map((word, i) => (
                <span key={i} className={`inline-block mr-4 ${i % 2 !== 0 ? 'italic text-slate-300/80' : 'font-bold bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-slate-400'}`}>
                  {word}
                </span>
              ))}
            </h2>

            {/* Description Slab */}
            <div className="relative mb-16 group">
              <div className="absolute -left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-slate-400 to-transparent opacity-30 group-hover:opacity-100 transition-opacity" />
              <p className="text-xl sm:text-2xl text-slate-400/80 font-medium leading-relaxed font-serif italic pl-2">
                "{description}"
              </p>
            </div>

            {/* Premium Metallic Button */}
            <motion.button
              onClick={onClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative self-start group overflow-hidden bg-gradient-to-br from-slate-800 to-black px-12 py-6 rounded-full border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all hover:shadow-[0_45px_100px_rgba(0,0,0,0.5)]"
            >
              {/* Button Glint */}
              <motion.div
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 4 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -z-1"
              />

              <div className="relative z-10 flex items-center space-x-6">
                <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-white group-hover:text-slate-300 transition-colors">Launch Experience</span>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowRight size={16} strokeWidth={1.5} />
                </div>
              </div>
            </motion.button>
          </motion.div>
        </div>

      </div>

      {/* Extreme Bottom Ornament */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-px bg-gradient-to-r from-transparent via-white/5 to-transparent flex items-center justify-between px-6">
        <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center">
          <Hash size={12} className="text-white/10" />
        </div>
        <div className="h-px flex-1 mx-12 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
        <div className="text-[8px] font-bold tracking-[0.6em] text-white/[0.05] uppercase">Kudu Group Architectural Series</div>
      </div>
    </motion.section>
  );
};

export default VerticalCard;
