import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, ArrowRight, Globe, Zap, Droplets, Recycle } from 'lucide-react';

interface CSRProps {
  onLearnMore?: () => void;
}

const CSR: React.FC<CSRProps> = ({ onLearnMore }) => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8 lg:space-y-12"
        >
          <div>
            <h2 className="text-4xl lg:text-7xl font-serif text-slate-900 leading-tight mb-6">
              Sustainability <br />
              <span className="text-emerald-600 italic">is Responsibility</span>
            </h2>
            <p className="text-lg lg:text-xl text-slate-500 font-light leading-relaxed">
              At Kudu, we believe that industrial excellence must harmonize with environmental stewardship. 
              Our operations are engineered to minimize footprint while maximizing positive impact.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-emerald-600">
                <Zap size={18} />
                <span className="text-2xl font-serif">15MW</span>
              </div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Solar Capacity</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-emerald-600">
                <Droplets size={18} />
                <span className="text-2xl font-serif">100%</span>
              </div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Water Recycled</p>
            </div>
          </div>

          <motion.button
            whileHover={{ x: 10 }}
            onClick={onLearnMore}
            className="flex items-center space-x-4 text-slate-900 font-bold group"
          >
            <span className="text-sm uppercase tracking-widest border-b-2 border-emerald-500 pb-1">Explore our ESG Vision</span>
            <ArrowRight size={20} className="text-emerald-500 group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200" 
              alt="Sustainable Future" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply" />
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-emerald-100/50 rounded-full blur-3xl -z-10" />
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </div>
  );
};

export default CSR;
