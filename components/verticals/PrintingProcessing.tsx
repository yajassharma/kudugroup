
import React from 'react';
import VerticalLayout from './VerticalLayout';
import { PrintingInkSVG } from './AnimatedSVGs';
import { motion } from 'framer-motion';

interface PrintingProcessingProps {
  onBack: () => void;
  onNext: () => void;
}

const PrintingProcessing: React.FC<PrintingProcessingProps> = ({ onBack, onNext }) => {
  return (
    <VerticalLayout 
      title="Printing & Processing" 
      subtitle="Advanced sublimation, digital dyeing, and fabric finishing technologies ensuring world-class color consistency and texture."
      image="https://ik.imagekit.io/b6vbf9pul/Gemini_Generated_Image_psechqpsechqpsec.png"
      onBack={onBack}
      nextVertical={{ title: 'Garment Manufacturing', onClick: onNext }}
    >
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-center mb-16 lg:mb-24">
        <div className="order-1 lg:hidden w-full">
          <h2 className="text-2xl sm:text-3xl font-serif font-medium text-slate-900 mb-4 leading-tight">Art Meets Technology</h2>
        </div>
        <div className="order-2 lg:order-2 w-full relative aspect-[4/3] lg:aspect-[3/4] rounded-xl lg:rounded-2xl overflow-hidden shadow-sm border border-slate-100">
          <img 
            src="https://ik.imagekit.io/b6vbf9pul/Gemini_Generated_Image_y5f68ky5f68ky5f6.png" 
            alt="Printing and Processing" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="order-3 lg:order-1 w-full">
          <h2 className="hidden lg:block text-4xl lg:text-5xl font-serif font-medium text-slate-900 mb-6 lg:mb-8 leading-tight">Art Meets <br />Technology</h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 lg:mb-12">
            Our processing unit is a hub of innovation, where raw fabrics are transformed through advanced dyeing and printing techniques into vibrant, high-performance textiles.
          </p>
          <div className="grid grid-cols-2 gap-6 lg:gap-8">
            {[
              { label: 'Daily Processing', value: '50,000+ Meters' },
              { label: 'Color Precision', value: 'Delta E < 0.5' },
              { label: 'Dyeing Units', value: 'High-Temp/Pressure' },
              { label: 'Eco-Standard', value: 'OEKO-TEX 100' },
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
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-medium text-slate-900 mb-8 lg:mb-12 text-center">Advanced Technologies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {[
            { title: 'Digital Sublimation', desc: 'High-definition, full-color printing with zero water waste and permanent color bonding.' },
            { title: 'Rotary Printing', desc: 'High-speed, large-scale pattern printing for consistent bulk production.' },
            { title: 'Reactive Dyeing', desc: 'Superior color fastness and vibrancy for natural and synthetic fiber blends.' },
            { title: 'Functional Finishing', desc: 'Specialized treatments for water repellency, flame resistance, and soft-hand feel.' },
          ].map((tech, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-slate-50 p-6 lg:p-8 rounded-xl lg:rounded-2xl border border-slate-100 transition-all duration-300"
            >
              <h4 className="text-base lg:text-lg font-serif font-medium text-slate-900 mb-3">{tech.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{tech.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-24">
        <div className="lg:col-span-2 bg-slate-50 rounded-xl lg:rounded-2xl p-8 sm:p-12 lg:p-16 border border-slate-100 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <PrintingInkSVG />
          </div>
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-medium text-slate-900 mb-4 lg:mb-6">Sustainable Processing</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 lg:mb-8">
              We are committed to reducing our environmental footprint through water recycling systems, eco-friendly dyes, and energy-efficient processing lines.
            </p>
            <div className="flex flex-wrap gap-3 lg:gap-4">
              {['Zero Liquid Discharge', 'Solar-Powered Heating', 'Bio-Degradable Dyes', 'Heat Recovery Systems'].map((item, idx) => (
                <span key={idx} className="px-4 py-2 bg-white rounded-full text-xs font-medium text-slate-600 border border-slate-200 shadow-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-slate-900 rounded-xl lg:rounded-2xl p-8 lg:p-12 flex flex-col justify-center text-white text-center shadow-sm">
          <h4 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium mb-3 lg:mb-4">99.9%</h4>
          <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">Color Consistency</p>
          <div className="h-px w-12 bg-slate-700 mx-auto my-6 lg:my-8" />
          <p className="text-slate-300 text-sm leading-relaxed">Our automated color kitchen ensures that every batch matches the master sample with absolute precision.</p>
        </div>
      </div>
    </VerticalLayout>
  );
};

export default PrintingProcessing;
