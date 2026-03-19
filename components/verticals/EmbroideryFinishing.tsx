
import React from 'react';
import VerticalLayout from './VerticalLayout';
import { EmbroideryNeedleSVG } from './AnimatedSVGs';
import { motion } from 'framer-motion';

interface EmbroideryFinishingProps {
  onBack: () => void;
  onNext: () => void;
}

const EmbroideryFinishing: React.FC<EmbroideryFinishingProps> = ({ onBack, onNext }) => {
  return (
    <VerticalLayout 
      title="Embroidery & Finishing" 
      subtitle="Intricate in-house embroidery and value-added finishes that provide premium texture and aesthetic enhancements."
      image="https://ik.imagekit.io/b6vbf9pul/Gemini_Generated_Image_5zlmms5zlmms5zlm.png"
      onBack={onBack}
      nextVertical={{ title: 'Protective & Medical', onClick: onNext }}
    >
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-center mb-16 lg:mb-24">
        <div className="order-1 lg:hidden w-full">
          <h2 className="text-2xl sm:text-3xl font-serif font-medium text-slate-900 mb-4 leading-tight">Value-Added Excellence</h2>
        </div>
        <div className="order-2 lg:order-2 w-full relative aspect-[4/3] lg:aspect-[3/4] rounded-xl lg:rounded-2xl overflow-hidden shadow-sm border border-slate-100">
          <img 
            src="https://ik.imagekit.io/b6vbf9pul/Gemini_Generated_Image_k4dfnak4dfnak4df.png" 
            alt="Embroidery and Finishing" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="order-3 lg:order-1 w-full">
          <h2 className="hidden lg:block text-4xl lg:text-5xl font-serif font-medium text-slate-900 mb-6 lg:mb-8 leading-tight">Value-Added <br />Excellence</h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 lg:mb-12">
            Our embroidery and finishing division adds the final touch of luxury and distinction to our garments, utilizing the latest multi-head embroidery machines and specialized finishing equipment.
          </p>
          <div className="grid grid-cols-2 gap-6 lg:gap-8">
            {[
              { label: 'Embroidery Heads', value: '500+ Heads' },
              { label: 'Stitch Capacity', value: '10M+ Daily' },
              { label: 'Finish Types', value: '20+ Varieties' },
              { label: 'Precision', value: 'High-Definition' },
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
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-medium text-slate-900 mb-8 lg:mb-12 text-center">Artisanal Precision</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {[
            { title: 'Multi-Head Embroidery', desc: 'High-speed, multi-color embroidery with intricate detailing and 3D puff effects.' },
            { title: 'Chenille & Sequin', desc: 'Specialized embroidery techniques for texture-rich and decorative apparel designs.' },
            { title: 'Laser Finishing', desc: 'Precision laser cutting and etching for unique surface textures and patterns.' },
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-50 p-6 lg:p-8 rounded-xl lg:rounded-2xl border border-slate-100 transition-all duration-300"
            >
              <h4 className="text-base lg:text-lg font-serif font-medium text-slate-900 mb-3">{item.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 rounded-xl lg:rounded-2xl p-8 sm:p-12 lg:p-16 border border-slate-100 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-5">
          <EmbroideryNeedleSVG />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-medium text-slate-900 mb-4 lg:mb-6">The Finishing Touch</h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 lg:mb-8">
            Beyond embroidery, our finishing unit provides specialized treatments that enhance the look, feel, and performance of the final product.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {['Bio-polishing & Enzyme wash', 'Silicon & Soft-hand finishes', 'Anti-pilling treatments', 'Moisture management finishes', 'Aroma & Antimicrobial finishes', 'Wrinkle-free processing'].map((item, idx) => (
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

export default EmbroideryFinishing;
