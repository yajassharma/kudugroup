
import React from 'react';
import VerticalLayout from './VerticalLayout';
import { GarmentStitchSVG } from './AnimatedSVGs';
import { motion } from 'framer-motion';

interface GarmentManufacturingProps {
  onBack: () => void;
  onNext: () => void;
}

const GarmentManufacturing: React.FC<GarmentManufacturingProps> = ({ onBack, onNext }) => {
  return (
    <VerticalLayout 
      title="Garment Manufacturing" 
      subtitle="State-of-the-art stitching units delivering bulk production and retail brand manufacturing with export-ready quality."
      image="https://ik.imagekit.io/b6vbf9pul/Gemini_Generated_Image_8gdua58gdua58gdu.png"
      onBack={onBack}
      nextVertical={{ title: 'Embroidery & Finishing', onClick: onNext }}
    >
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-center mb-16 lg:mb-24">
        <div className="order-1 lg:hidden w-full">
          <h2 className="text-2xl sm:text-3xl font-serif font-medium text-slate-900 mb-4 leading-tight">Scale & Execution</h2>
        </div>
        <div className="order-2 lg:order-2 w-full relative aspect-[4/3] lg:aspect-[3/4] rounded-xl lg:rounded-2xl overflow-hidden shadow-sm border border-slate-100">
          <img 
            src="https://ik.imagekit.io/b6vbf9pul/Gemini_Generated_Image_2yvizc2yvizc2yvi.png" 
            alt="Garment Manufacturing" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="order-3 lg:order-1 w-full">
          <h2 className="hidden lg:block text-4xl lg:text-5xl font-serif font-medium text-slate-900 mb-6 lg:mb-8 leading-tight">Scale & <br />Execution</h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 lg:mb-12">
            Our garment manufacturing division is optimized for high-volume production without compromising on the intricate details that define premium apparel.
          </p>
          <div className="grid grid-cols-2 gap-6 lg:gap-8">
            {[
              { label: 'Monthly Output', value: '1.5M+ Pieces' },
              { label: 'Stitching Lines', value: '120+ Lines' },
              { label: 'Workforce', value: '5,000+ Experts' },
              { label: 'Global Reach', value: '40+ Countries' },
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
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-medium text-slate-900 mb-8 lg:mb-12 text-center">Manufacturing Workflow</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {[
            { step: '01', title: 'Automated Cutting', desc: 'Computerized CAM systems ensuring maximum fabric utilization and precision cutting of complex patterns.' },
            { step: '02', title: 'Lean Stitching Lines', desc: 'Highly efficient assembly lines designed for rapid throughput and real-time quality monitoring.' },
            { step: '03', title: 'Final Finishing', desc: 'Rigorous 100% inspection, steam pressing, and automated packaging for retail-ready delivery.' },
          ].map((item, idx) => (
            <div key={idx} className="relative p-6 lg:p-8 bg-slate-50 rounded-xl lg:rounded-2xl border border-slate-100 transition-all duration-300">
              <span className="text-3xl lg:text-4xl font-serif font-medium text-slate-200 absolute top-4 right-6 lg:top-6 lg:right-8">{item.step}</span>
              <h4 className="text-base lg:text-lg font-serif font-medium text-slate-900 mb-3 relative z-10">{item.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed relative z-10">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 rounded-xl lg:rounded-2xl p-8 sm:p-12 lg:p-16 border border-slate-100 text-center">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-medium text-slate-900 mb-4 lg:mb-6">Export Readiness</h3>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 lg:mb-12 max-w-3xl mx-auto">
          We are a trusted partner for global retail giants, maintaining the highest standards of social compliance, ethical manufacturing, and logistical excellence.
        </p>
        <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
          {['BSCI Certified', 'WRAP Gold', 'ISO 9001:2015', 'SEDEX Member'].map((cert, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-slate-100 flex items-center justify-center mb-3 lg:mb-4 border border-slate-200">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              </div>
              <span className="text-xs font-medium text-slate-600">{cert}</span>
            </div>
          ))}
        </div>
      </section>
    </VerticalLayout>
  );
};

export default GarmentManufacturing;
