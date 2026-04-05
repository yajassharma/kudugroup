
import React, { useRef, useEffect, useState } from 'react';
import VerticalLayout from './VerticalLayout';
import { FabricKnitSVG } from './AnimatedSVGs';
import { motion } from 'framer-motion';

interface FabricProductionProps {
  onBack: () => void;
  onNext: () => void;
  onContactClick?: () => void;
}

const productionImages = [
  {
    src: 'https://ik.imagekit.io/yajas/DSC01325.JPG',
    label: 'Production Floor',
    height: 'h-64 lg:h-72',
  },
  {
    src: 'https://ik.imagekit.io/yajas/DSC01243.JPG',
    label: 'Knitting Units',
    height: 'h-80 lg:h-96',
  },
  {
    src: 'https://ik.imagekit.io/yajas/DSC01258.JPG',
    label: 'Fabric Formation',
    height: 'h-64 lg:h-80',
  },
  {
    src: 'https://ik.imagekit.io/yajas/DSC01270.JPG',
    label: 'Quality Inspection',
    height: 'h-80 lg:h-72',
  },
  {
    src: 'https://ik.imagekit.io/yajas/DSC01260.JPG?updatedAt=1774423964496',
    label: 'Advanced Machinery',
    height: 'h-64 lg:h-96',
  },
  {
    src: 'https://ik.imagekit.io/yajas/DSC01290.JPG',
    label: 'Precision Engineering',
    height: 'h-72 lg:h-80',
  },
];

// Hook: returns true once the element enters the viewport
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const FabricProduction: React.FC<FabricProductionProps> = ({ onBack, onNext, onContactClick }) => {
  const { ref: sectionRef, inView } = useInView();

  return (
    <VerticalLayout
      title="Fabric Production"
      subtitle="Precision fabric engineering through large-scale knitting units, producing high-performance jerseys, jacquards, and fleece."
      image="https://ik.imagekit.io/yajas/DSC01325.JPG"
      onBack={onBack}
      onContactClick={onContactClick}
      nextVertical={{ title: 'Printing & Processing', onClick: onNext }}
    >
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-center mb-16 lg:mb-24">
        <div className="order-1 lg:hidden w-full">
          <h2 className="text-2xl sm:text-3xl font-serif font-medium text-slate-900 mb-4 leading-tight">Large-Scale Knitting Units</h2>
        </div>
        <div className="order-2 lg:order-2 w-full relative aspect-[4/3] lg:aspect-[3/4] rounded-xl lg:rounded-2xl overflow-hidden shadow-sm border border-slate-100">
          <img
            src="https://ik.imagekit.io/yajas/DSC01258.JPG"
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
              { label: 'Annual Capacity', value: '4200+ Tons' },
              { label: 'Machine Count', value: '250+ Units' },
              { label: 'Fabric Types', value: 'Multiple Varieties and Blends' },
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
            { title: 'Jacquard & Premium Knits', desc: 'Complex pattern knitting with high-definition detail for premium fashion and lifestyle applications.' },
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

      {/* ── Inside Our Fabric Production ── */}
      <section ref={sectionRef} className="mb-16 lg:mb-24">
        {/* Section header */}
        <div
          className="mb-10 lg:mb-14"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <p className="text-xs font-medium tracking-[0.2em] text-slate-400 uppercase mb-3">Behind the Process</p>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium text-slate-900 mb-3 leading-tight">
            Inside Our Fabric Production
          </h3>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl leading-relaxed">
            A closer look at our machinery, processes, and quality control.
          </p>
        </div>

        {/* Image grid — 2 cols on mobile, 3 cols on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
          {productionImages.map((image, idx) => (
            <div
              key={idx}
              className={`relative rounded-xl overflow-hidden group cursor-default ${image.height}`}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(32px)',
                transition: `opacity 0.65s ease ${0.1 + idx * 0.08}s, transform 0.65s ease ${0.1 + idx * 0.08}s`,
                boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
              }}
            >
              <img
                src={image.src}
                alt={image.label}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(to top, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.08) 45%, transparent 100%)',
                }}
              />
              <div className="absolute bottom-0 left-0 p-4 lg:p-5">
                <span
                  className="text-white font-medium tracking-wide"
                  style={{ fontSize: '0.72rem', letterSpacing: '0.08em', textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}
                >
                  {image.label}
                </span>
              </div>
            </div>
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
