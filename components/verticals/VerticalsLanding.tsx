
import React from 'react';
import { motion } from 'framer-motion';
import VerticalHero from './VerticalHero';
import VerticalCard from './VerticalCard';
import { 
  FabricKnitSVG, 
  PrintingInkSVG, 
  GarmentStitchSVG, 
  EmbroideryNeedleSVG, 
  ProtectiveShieldSVG, 
  InfrastructureMotionSVG 
} from './AnimatedSVGs';

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
    <div className="bg-white min-h-screen">
      <VerticalHero 
        title="Our Verticals" 
        subtitle="Integrated expertise across the entire textile value chain, from raw fiber to retail-ready garments."
      />

      <div className="max-w-[1600px] mx-auto">
        {verticals.map((vertical, index) => (
          <VerticalCard 
            key={vertical.id}
            index={index}
            title={vertical.title}
            description={vertical.description}
            image={vertical.image}
            reversed={index % 2 !== 0}
            onClick={() => onVerticalClick(vertical.id)}
          />
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="py-20 lg:py-48 px-4 sm:px-6 bg-slate-900 text-white text-center overflow-hidden relative">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" 
            alt="Infrastructure" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-7xl font-serif font-bold mb-6 lg:mb-12 leading-tight">A Legacy of <br /><span className="italic font-light text-indigo-400">Integrated Excellence</span></h2>
            <p className="text-base sm:text-xl lg:text-2xl text-slate-300 font-medium mb-8 lg:mb-16 max-w-2xl mx-auto leading-relaxed">
              Our strength lies in our vertical integration, allowing us to maintain absolute control over quality, speed, and innovation at every stage.
            </p>
            <button className="bg-white text-slate-900 px-8 py-4 sm:px-12 sm:py-6 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-indigo-500 hover:text-white transition-all shadow-2xl">
              Partner with Kudu Group
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default VerticalsLanding;
