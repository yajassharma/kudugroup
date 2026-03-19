
import React from 'react';
import VerticalLayout from './VerticalLayout';
import { FabricKnitSVG } from './AnimatedSVGs';
import { motion } from 'framer-motion';

interface FabricProductionProps {
  onBack: () => void;
  onNext: () => void;
}

const FabricProduction: React.FC<FabricProductionProps> = ({ onBack, onNext }) => {
  return (
    <VerticalLayout 
      title="Fabric Production" 
      subtitle="Precision fabric engineering through large-scale knitting units, producing high-performance jerseys, jacquards, and fleece."
      image="https://ik.imagekit.io/b6vbf9pul/Gemini_Generated_Image_cryieocryieocryi.png"
      onBack={onBack}
      nextVertical={{ title: 'Printing & Processing', onClick: onNext }}
    >
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-center mb-16 lg:mb-24">
        <div className="order-1 lg:hidden w-full">
          <h2 className="text-2xl sm:text-3xl font-serif font-medium text-slate-900 mb-4 leading-tight">Large-Scale Knitting Units</h2>
        </div>
        <div className="order-2 lg:order-2 w-full relative aspect-[4/3] lg:aspect-[3/4] rounded-xl lg:rounded-2xl overflow-hidden shadow-sm border border-slate-100">
          <img 
            src="https://ik.imagekit.io/b6vbf9pul/Gemini_Generated_Image_9uh70n9uh70n9uh7.png" 
            alt="Fabric Production" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="order-3 lg:order-1 w-full">
          <h2 className="hidden lg:block text-4xl lg:text-5xl font-serif font-medium text-slate-900 mb-6 lg:mb-8 leading-tight">Large-Scale <br />Knitting Units</h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 lg:mb-12">
            Our knitting facilities are equipped with the world's most advanced circular and flat knitting machines, capable of producing a vast array of high-quality fabrics with unmatched precision and speed.
          </p>
          <div className="grid grid-cols-2 gap-6 lg:gap-8">
            {[
              { label: 'Annual Capacity', value: '12,000+ Tons' },
              { label: 'Machine Count', value: '250+ Units' },
              { label: 'Fabric Types', value: '50+ Varieties' },
              { label: 'Quality Standard', value: 'Zero-Defect' },
            ].map((stat, idx) => (
              <div key={idx} className="border-l border-slate-300 pl-4 lg:pl-6">
                <p className="text-xs font-medium text-slate-500 mb-2">{stat.label}</p>
                <p className="text-lg sm:text-xl font-serif font-medium text-slate-900">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="mb-16 lg:mb-24">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-medium text-slate-900 mb-8 lg:mb-12 text-center">Core Capabilities</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {[
            { title: 'Performance Textiles', desc: 'Moisture-wicking, antimicrobial, and UV-protective fabrics engineered for athletic and outdoor performance.' },
            { title: 'Jacquard & Intarsia', desc: 'Complex pattern knitting with high-definition detail for premium fashion and lifestyle applications.' },
            { title: 'Technical Fleece', desc: 'High-thermal, low-pilling fleece fabrics designed for comfort and durability in extreme conditions.' },
          ].map((cap, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-slate-50 p-6 lg:p-8 rounded-xl lg:rounded-2xl border border-slate-100 transition-all duration-300"
            >
              <h4 className="text-base lg:text-lg font-serif font-medium text-slate-900 mb-3">{cap.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 rounded-xl lg:rounded-2xl p-8 sm:p-12 lg:p-16 border border-slate-100 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-5">
          <FabricKnitSVG />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-medium text-slate-900 mb-4 lg:mb-6">Precision Fabric Engineering</h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 lg:mb-8">
            Every thread is a commitment to quality. Our R&D labs work tirelessly to develop new yarn blends and knitting structures that push the boundaries of textile science.
          </p>
          <ul className="space-y-3 lg:space-y-4">
            {['In-house yarn testing & validation', 'Real-time machine monitoring systems', 'Climate-controlled production environment', 'Sustainable fiber sourcing & integration'].map((item, idx) => (
              <li key={idx} className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                <span className="text-sm text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </VerticalLayout>
  );
};

export default FabricProduction;
