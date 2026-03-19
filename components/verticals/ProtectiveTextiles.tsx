
import React from 'react';
import VerticalLayout from './VerticalLayout';
import { ProtectiveShieldSVG } from './AnimatedSVGs';
import { motion } from 'framer-motion';

interface ProtectiveTextilesProps {
  onBack: () => void;
  onNext: () => void;
}

const ProtectiveTextiles: React.FC<ProtectiveTextilesProps> = ({ onBack, onNext }) => {
  return (
    <VerticalLayout 
      title="Protective & Medical" 
      subtitle="Specialized industrial textile solutions including PPE suits, coveralls, and high-performance protective gear."
      image="https://ik.imagekit.io/b6vbf9pul/Gemini_Generated_Image_b07jc5b07jc5b07j.png"
      onBack={onBack}
      nextVertical={{ title: 'Infrastructure & Capabilities', onClick: onNext }}
    >
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-center mb-16 lg:mb-24">
        <div className="order-1 lg:hidden w-full">
          <h2 className="text-2xl sm:text-3xl font-serif font-medium text-slate-900 mb-4 leading-tight">Safety & Performance</h2>
        </div>
        <div className="order-2 lg:order-2 w-full relative aspect-[4/3] lg:aspect-[3/4] rounded-xl lg:rounded-2xl overflow-hidden shadow-sm border border-slate-100">
          <img 
            src="https://ik.imagekit.io/b6vbf9pul/Gemini_Generated_Image_9ea5as9ea5as9ea5.png" 
            alt="Protective and Medical Textiles" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="order-3 lg:order-1 w-full">
          <h2 className="hidden lg:block text-4xl lg:text-5xl font-serif font-medium text-slate-900 mb-6 lg:mb-8 leading-tight">Safety & <br />Performance</h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 lg:mb-12">
            Our protective textiles division is dedicated to engineering fabrics that safeguard lives in the most demanding industrial and medical environments.
          </p>
          <div className="grid grid-cols-2 gap-6 lg:gap-8">
            {[
              { label: 'PPE Capacity', value: '500k+ Monthly' },
              { label: 'Certifications', value: 'CE, ISO, FDA' },
              { label: 'Protection Level', value: 'Level 1-4' },
              { label: 'Material Tech', value: 'Antimicrobial' },
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
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-medium text-slate-900 mb-8 lg:mb-12 text-center">Specialized Solutions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {[
            { title: 'Medical PPE', desc: 'Surgical gowns, masks, and coveralls designed for maximum barrier protection and breathability.' },
            { title: 'Industrial Workwear', desc: 'Flame-retardant, high-visibility, and chemical-resistant apparel for hazardous environments.' },
            { title: 'Technical Fabrics', desc: 'High-strength, abrasion-resistant textiles for specialized industrial and military applications.' },
          ].map((item, idx) => (
            <div key={idx} className="p-6 lg:p-8 bg-slate-50 rounded-xl lg:rounded-2xl border border-slate-100 transition-all duration-300">
              <h4 className="text-base lg:text-lg font-serif font-medium text-slate-900 mb-3">{item.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 rounded-xl lg:rounded-2xl p-8 sm:p-12 lg:p-16 border border-slate-100 overflow-hidden relative text-center">
        <div className="absolute inset-0 opacity-5">
          <ProtectiveShieldSVG />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-medium text-slate-900 mb-4 lg:mb-6">Uncompromising Standards</h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 lg:mb-12">
            In the world of protective textiles, there is no room for error. Every batch undergoes rigorous testing in our certified labs to ensure it meets international safety standards.
          </p>
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
            {['Hydrostatic Pressure Testing', 'Breathability (MVTR) Analysis', 'Antimicrobial Efficacy', 'Flame Resistance Testing', 'Tensile Strength Validation'].map((test, idx) => (
              <span key={idx} className="px-4 py-2 bg-white rounded-full text-xs font-medium text-slate-600 border border-slate-200 shadow-sm">
                {test}
              </span>
            ))}
          </div>
        </div>
      </section>
    </VerticalLayout>
  );
};

export default ProtectiveTextiles;
