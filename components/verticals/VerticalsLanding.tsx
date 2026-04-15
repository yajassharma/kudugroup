import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export type VerticalID = 'fabric-production' | 'printing-processing' | 'garment-manufacturing' | 'embroidery-finishing' | 'infrastructure-capabilities';

interface VerticalsLandingProps {
  onVerticalClick: (id: VerticalID) => void;
  onBack: () => void;
}

const VerticalsLanding: React.FC<VerticalsLandingProps> = ({ onVerticalClick, onBack }) => {
  const navigate = useNavigate();
  const verticals = [
    {
      id: 'fabric-production' as VerticalID,
      title: 'Fabric Production',
      subtitle: 'Precision Engineering',
      image: 'https://ik.imagekit.io/yajas/DSC01258.JPG?updatedAt=1775345730233'
    },
    {
      id: 'printing-processing' as VerticalID,
      title: 'Printing & Processing',
      subtitle: 'Technical Innovation',
      image: 'https://ik.imagekit.io/yajas/DSC01315.JPG'
    },
    {
      id: 'garment-manufacturing' as VerticalID,
      title: 'Garment Manufacturing',
      subtitle: 'Export-Ready Quality',
      image: 'https://ik.imagekit.io/yajas/DSC01307.JPG?updatedAt=1775345729893'
    },
    {
      id: 'embroidery-finishing' as VerticalID,
      title: 'Embroidery & Finishing',
      subtitle: 'Artisanal Precision',
      image: 'https://ik.imagekit.io/yajas/DSC01331.JPG'
    },
    {
      id: 'infrastructure-capabilities' as VerticalID,
      title: 'Infrastructure & Capabilities',
      subtitle: 'Industrial Ecosystem',
      image: 'https://ik.imagekit.io/yajas/WhatsApp%20Image%202026-03-10%20at%2013.41.31.jpeg'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <main className="pt-24">
        {verticals.map((vertical, index) => (
          <motion.section
            key={vertical.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => navigate(`/verticals/${vertical.id}`)}
            className="group relative h-[40vh] sm:h-[60vh] w-full overflow-hidden cursor-pointer border-b border-white/10"
          >
            {/* Background Image with Zoom */}
            <motion.div
              className="absolute inset-0 z-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.5 }}
            >
              <img
                src={vertical.image}
                alt={vertical.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/30 transition-colors duration-700" />
            </motion.div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
              <h2 className="text-3xl sm:text-5xl lg:text-7xl font-serif font-bold text-white uppercase tracking-tighter transition-all duration-700 group-hover:scale-110">
                {vertical.title}
              </h2>
              <div className="mt-8 flex items-center space-x-2 text-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="text-[10px] font-bold uppercase tracking-widest">Explore Vertical</span>
                <ChevronRight size={16} />
              </div>
            </div>

            {/* Vertical Accent Line */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />
          </motion.section>
        ))}
      </main>

      {/* Footer Branding */}
      <footer className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-4xl sm:text-6xl font-serif font-bold text-slate-900 mb-8 tracking-tighter">
            Total Vertical <br />
            <span className="italic text-slate-400 font-light lowercase leading-snug">Deep Integration</span>
          </h3>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            From raw fiber to retail-ready luxury garments, our integrated ecosystem ensures absolute quality at every stage.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default VerticalsLanding;
