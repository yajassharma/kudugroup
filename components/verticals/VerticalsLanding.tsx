import React from 'react';
import { motion } from 'framer-motion';
import VerticalHero from './VerticalHero';
import VerticalCard from './VerticalCard';

export type VerticalID = 'fabric-production' | 'printing-processing' | 'garment-manufacturing' | 'embroidery-finishing' | 'protective-textiles' | 'infrastructure-capabilities';

interface VerticalsLandingProps {
  onVerticalClick: (id: VerticalID) => void;
}

const VerticalsLanding: React.FC<VerticalsLandingProps> = ({ onVerticalClick }) => {
  const verticals = [
    {
      id: 'fabric-production' as VerticalID,
      title: 'Fabric Production',
      description: 'Precision fabric engineering through large-scale knitting units, producing high-performance jerseys, jacquards, and fleece.',
      image: 'https://ik.imagekit.io/b6vbf9pul/Gemini_Generated_Image_cryieocryieocryi.png'
    },
    {
      id: 'printing-processing' as VerticalID,
      title: 'Printing & Processing',
      description: 'Advanced sublimation, digital dyeing, and fabric finishing technologies ensuring world-class color consistency and texture.',
      image: 'https://ik.imagekit.io/b6vbf9pul/Gemini_Generated_Image_psechqpsechqpsec.png'
    },
    {
      id: 'garment-manufacturing' as VerticalID,
      title: 'Garment Manufacturing',
      description: 'State-of-the-art stitching units delivering bulk production and retail brand manufacturing with export-ready quality.',
      image: 'https://ik.imagekit.io/b6vbf9pul/Gemini_Generated_Image_8gdua58gdua58gdu.png'
    },
    {
      id: 'embroidery-finishing' as VerticalID,
      title: 'Embroidery & Finishing',
      description: 'Intricate in-house embroidery and value-added finishes that provide premium texture and aesthetic enhancements.',
      image: 'https://ik.imagekit.io/b6vbf9pul/Gemini_Generated_Image_5zlmms5zlmms5zlm.png'
    },
    {
      id: 'protective-textiles' as VerticalID,
      title: 'Protective & Medical',
      description: 'Specialized industrial textile solutions including PPE suits, coveralls, and high-performance protective gear.',
      image: 'https://ik.imagekit.io/b6vbf9pul/Gemini_Generated_Image_b07jc5b07jc5b07j.png'
    },
    {
      id: 'infrastructure-capabilities' as VerticalID,
      title: 'Infrastructure & Capabilities',
      description: 'A massive technology ecosystem featuring knitting capacity, processing lines, and dedicated R&D labs.',
      image: 'https://ik.imagekit.io/b6vbf9pul/Gemini_Generated_Image_9chok19chok19cho.png'
    }
  ];

  return (
    <div className="bg-[#0A0A0A] min-h-screen relative overflow-hidden">
      {/* Global Architectural Grid Background */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" className="absolute inset-0">
          <pattern id="bg-grid-v2" width="120" height="120" patternUnits="userSpaceOnUse">
            <path d="M 120 0 L 0 0 0 120" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#bg-grid-v2)" />
        </svg>
      </div>

      {/* Hero Section - Split Blade V2 */}
      <div className="snap-section">
        <VerticalHero
          title="Our Verticals"
          subtitle="Integrated expertise across the entire textile value chain, from raw fiber to retail-ready garments."
          image="https://ik.imagekit.io/b6vbf9pul/Gemini_Generated_Image_8gdua58gdua58gdu.png"
        />
      </div>

      {/* Vertical Sections - Metallic Plates V2 */}
      <div className="relative z-10">
        {verticals.map((vertical, index) => (
          <div key={vertical.id} className="snap-section">
            <VerticalCard
              index={index}
              title={vertical.title}
              description={vertical.description}
              image={vertical.image}
              reversed={index % 2 !== 0}
              onClick={() => onVerticalClick(vertical.id)}
            />
          </div>
        ))}
      </div>

      {/* Bottom CTA - Premium Chrome Architectural Design */}
      <section className="py-48 lg:py-80 px-4 sm:px-6 bg-[#0A0A0A] text-center overflow-hidden relative z-10 snap-section">
        <div className="max-w-7xl mx-auto relative group">

          {/* Background Highlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-slate-500/10 blur-[160px] rounded-full pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.8em] text-slate-500 mb-16 block">Ready for the Next Era</span>

            <h2 className="text-6xl sm:text-8xl lg:text-[12rem] font-serif font-light mb-16 leading-[0.9] text-white tracking-tighter">
              A Legacy of <br />
              <span className="italic font-light text-slate-400/60 font-serif">Deep Integration</span>
            </h2>

            <p className="text-xl sm:text-2xl lg:text-3xl text-slate-500 font-medium mb-24 max-w-3xl mx-auto leading-relaxed font-serif italic">
              "We don't just manufacture; we engineer the future of textiles through absolute control over every stage of the journey."
            </p>

            {/* Chrome Signature Button */}
            <button className="relative group overflow-hidden bg-white text-black px-16 py-8 rounded-none font-bold text-xs uppercase tracking-[0.5em] transition-all hover:scale-105 shadow-[0_40px_80px_rgba(255,255,255,0.1)]">
              <span className="relative z-10">Start a Partnership</span>
              {/* Silver Slide */}
              <div className="absolute inset-0 bg-slate-200 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[0.22, 1, 0.36, 1]" />
            </button>

            {/* Minimalist Footnote */}
            <div className="mt-24 pt-24 border-t border-white/5 flex flex-col lg:flex-row items-center justify-between gap-8 opacity-20">
              <span className="text-[9px] tracking-[0.4em] uppercase font-bold text-white">Est. 1952</span>
              <span className="text-[9px] tracking-[0.4em] uppercase font-bold text-white">Global Manufacturing Excellence</span>
              <span className="text-[9px] tracking-[0.4em] uppercase font-bold text-white">Sustainability Driven</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default VerticalsLanding;
