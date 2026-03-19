
import React from 'react';
import VerticalLayout from './VerticalLayout';
import { InfrastructureMotionSVG } from './AnimatedSVGs';
import { motion } from 'framer-motion';

interface InfrastructureCapabilitiesProps {
  onBack: () => void;
  onNext: () => void;
}

const InfrastructureCapabilities: React.FC<InfrastructureCapabilitiesProps> = ({ onBack, onNext }) => {
  return (
    <VerticalLayout 
      title="Infrastructure & Capabilities" 
      subtitle="A massive technology ecosystem featuring knitting capacity, processing lines, and dedicated R&D labs."
      image="https://ik.imagekit.io/b6vbf9pul/Gemini_Generated_Image_9chok19chok19cho.png"
      onBack={onBack}
      nextVertical={{ title: 'Fabric Production', onClick: onNext }}
    >
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-center mb-16 lg:mb-24">
        <div className="order-1 lg:hidden w-full">
          <h2 className="text-2xl sm:text-3xl font-serif font-medium text-slate-900 mb-4 leading-tight">The Industrial Ecosystem</h2>
        </div>
        <div className="order-2 lg:order-2 w-full relative aspect-[4/3] lg:aspect-[3/4] rounded-xl lg:rounded-2xl overflow-hidden shadow-sm border border-slate-100">
          <img 
            src="https://ik.imagekit.io/b6vbf9pul/Gemini_Generated_Image_dycolsdycolsdyco.png" 
            alt="Infrastructure and Capabilities" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="order-3 lg:order-1 w-full">
          <h2 className="hidden lg:block text-4xl lg:text-5xl font-serif font-medium text-slate-900 mb-6 lg:mb-8 leading-tight">The Industrial <br />Ecosystem</h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 lg:mb-12">
            Our infrastructure is the backbone of our success, a sprawling network of specialized units that work in perfect harmony to deliver textile excellence at a global scale.
          </p>
          <div className="grid grid-cols-2 gap-6 lg:gap-8">
            {[
              { label: 'Total Area', value: '1M+ Sq. Ft.' },
              { label: 'R&D Labs', value: '3 Centers' },
              { label: 'Power Backup', value: '100% Redundant' },
              { label: 'Automation', value: 'Industry 4.0' },
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
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-medium text-slate-900 mb-8 lg:mb-12 text-center">Technological Depth</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {[
            { title: 'Knitting Capacity', desc: 'A massive fleet of circular and flat knitting machines capable of high-volume, precision fabric production.' },
            { title: 'Processing Lines', desc: 'Advanced dyeing and finishing lines with automated color management and eco-friendly processing.' },
            { title: 'Raising & Brushing', desc: 'Specialized units for creating high-performance fleece and soft-textured fabrics.' },
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
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
          <InfrastructureMotionSVG />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-medium text-slate-900 mb-4 lg:mb-6">Future-Ready Infrastructure</h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 lg:mb-8">
            We are continuously investing in Industry 4.0 technologies, including real-time monitoring, AI-driven quality control, and automated logistics.
          </p>
          <ul className="space-y-3 lg:space-y-4">
            {['ERP-integrated production management', 'Automated material handling systems', 'Centralized quality control dashboard', 'Energy-efficient building management'].map((item, idx) => (
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

export default InfrastructureCapabilities;
