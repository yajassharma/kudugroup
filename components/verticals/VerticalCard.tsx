
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

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
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`relative py-16 lg:py-32 px-4 sm:px-6 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-32 ${reversed ? 'lg:flex-row-reverse' : ''}`}
    >
      {/* Background Text Accent */}
      <div className={`absolute top-1/2 -translate-y-1/2 text-[15vw] font-serif font-black text-slate-50/5 pointer-events-none select-none ${reversed ? 'left-0' : 'right-0'}`}>
        0{index + 1}
      </div>

      {/* Text Content */}
      <div className="flex-1 max-w-2xl relative z-10">
        <motion.div
          initial={{ opacity: 0, x: reversed ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center space-x-3 sm:space-x-4 mb-6 lg:mb-8">
            <div className="h-px w-8 sm:w-12 bg-indigo-500" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-600">Vertical 0{index + 1}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-serif font-bold mb-6 lg:mb-8 leading-tight text-slate-900">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed mb-8 lg:mb-12">
            {description}
          </p>
          <motion.button 
            onClick={onClick}
            whileHover={{ x: 10 }}
            className="group flex items-center space-x-3 sm:space-x-4 text-slate-900 font-bold text-xs sm:text-sm uppercase tracking-wider"
          >
            <span>Explore Expertise</span>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
              <ChevronRight size={16} className="sm:w-[18px] sm:h-[18px]" />
            </div>
          </motion.button>
        </motion.div>
      </div>

      {/* Visual Component (Image) */}
      <div className="flex-1 w-full max-w-xl aspect-square relative group">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: reversed ? -5 : 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full h-full bg-slate-50 rounded-[32px] sm:rounded-[48px] lg:rounded-[80px] overflow-hidden shadow-sm border border-slate-100 group-hover:shadow-2xl group-hover:-translate-y-4 transition-all duration-700"
        >
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </motion.div>
        
        {/* Decorative Elements */}
        <div className={`absolute -z-10 w-full h-full border border-indigo-100 rounded-[32px] sm:rounded-[48px] lg:rounded-[80px] translate-x-4 translate-y-4 sm:translate-x-8 sm:translate-y-8 opacity-50 group-hover:translate-x-8 group-hover:translate-y-8 lg:group-hover:translate-x-12 lg:group-hover:translate-y-12 transition-all duration-700 ${reversed ? '-translate-x-8 sm:-translate-x-16' : ''}`} />
      </div>
    </motion.section>
  );
};

export default VerticalCard;
