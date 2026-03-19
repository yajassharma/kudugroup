
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Star, ArrowRight, Globe, Eye } from 'lucide-react';

export interface BrandProduct {
  name: string;
  category: string;
  desc: string;
  detailedDesc: string;
  image: string;
  gallery: string[];
  materials: string[];
  specs: { label: string; value: string }[];
  color: string;
  websiteUrl?: string;
  websiteStatus?: 'live' | 'development';
}

const brands: BrandProduct[] = [
  {
    name: 'Idhu',
    category: 'Ethnic Winter Wear',
    desc: 'Timeless traditional elegance crafted with premium in-house knitted fabrics.',
    detailedDesc: 'Idhu represents the pinnacle of ethnic craftsmanship. Every garment is woven with heritage-inspired patterns using our most advanced jacquard knitting units. We prioritize breathability and drape, ensuring that traditional silhouettes feel contemporary and comfortable for the modern wearer.',
    image: 'https://ik.imagekit.io/yajas/Idhu%20brings%20to%20you%20ethnic%20winter%20wear%20that%20is%20high%20on%20style%20&%20comfort.%20It_s%20our%20effort%20to%20bring%20.jpg',
    gallery: [
      'https://ik.imagekit.io/yajas/Screenshot%202026-03-03%20at%206.03.17%E2%80%AFPM.png',
      'https://ik.imagekit.io/yajas/Screenshot%202026-03-03%20at%206.02.17%E2%80%AFPM.png',
      'https://ik.imagekit.io/yajas/Screenshot%202026-03-03%20at%206.02.48%E2%80%AFPM.png'
    ],
    materials: ['Premium Combed Cotton', 'Natural Silk Blend', 'Eco-friendly Dyes'],
    specs: [
      { label: 'Fabric Weight', value: '180-220 GSM' },
      { label: 'Weave Type', value: 'Double Knit Jacquard' },
      { label: 'Care', value: 'Dry Clean Recommended' }
    ],
    color: 'indigo',
    websiteUrl: 'https://idhufashions.com',
    websiteStatus: 'live'
  },
  {
    name: 'Poker',
    category: 'Athleisure',
    desc: 'High-performance sportswear focused on moisture management and comfort.',
    detailedDesc: 'Designed for the high-intensity lifestyle, Poker utilizes our proprietary "Dry-Knit" technology. The fabric is engineered at the molecular level to wick sweat away while maintaining structural integrity. It is the preferred choice for athletes who demand style without compromising on peak performance capabilities.',
    image: 'https://ik.imagekit.io/yajas/183190843_804518000501800_3577810773188711274_n.jpg',
    gallery: [
      'https://ik.imagekit.io/yajas/Screenshot%202026-03-03%20at%206.37.42%E2%80%AFAM.png',
      'https://ik.imagekit.io/yajas/Screenshot%202026-03-03%20at%206.38.09%E2%80%AFAM.png',
      'https://ik.imagekit.io/yajas/Screenshot%202026-03-03%20at%206.40.11%E2%80%AFAM.png'
    ],
    materials: ['Recycled Polyester', 'Spandex for Stretch', 'Anti-microbial Coating'],
    specs: [
      { label: 'Performance', value: '4-Way Stretch' },
      { label: 'Moisture Control', value: 'Quick-Dry Tech' },
      { label: 'Durability', value: 'High Abrasion Resistance' }
    ],
    color: 'orange',
    websiteStatus: 'development'
  },
  {
    name: 'Golfwear',
    category: 'Lifestyle',
    desc: 'Premium accessories and clothing designed for the sophisticated modern athlete.',
    detailedDesc: 'The Golfwear collection by Kudu defines luxury on the green. Our specialized knitting processes create a unique pique texture that is soft to the touch but exceptionally durable. Each piece features UV-protection and enhanced thermal regulation, tailored for those who appreciate the finer details of high-end sports apparel.',
    image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=600',
    gallery: [
      'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800'
    ],
    materials: ['Supima Cotton Pique', 'Coolmax Technology', 'Brushed Microfiber'],
    specs: [
      { label: 'Fit', value: 'Tailored Athletic Fit' },
      { label: 'UV Protection', value: 'UPF 50+' },
      { label: 'Finish', value: 'Mercerized Luster' }
    ],
    color: 'slate',
    websiteStatus: 'development'
  }
];

interface BrandsSectionProps {
  onProductClick?: (product: BrandProduct) => void;
}

const BrandsSection: React.FC<BrandsSectionProps> = ({ onProductClick }) => {
  return (
    <div className="max-w-7xl mx-auto relative px-4">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between mb-20 lg:mb-32 gap-8 lg:gap-12">
        <div className="max-w-3xl text-center lg:text-left">     
          <h2 className="text-4xl lg:text-8xl font-serif text-slate-900 font-bold tracking-tighter leading-[0.9] uppercase">
            Direct-to-Consumer <br />
            <span className="text-indigo-600 italic font-light lowercase">Ventures</span>
          </h2>
        </div>
        <div className="lg:max-w-xs text-center lg:text-right">
           <p className="text-slate-400 font-medium leading-relaxed text-sm lg:text-lg">
             Bridging the gap between industrial excellence and modern lifestyle through our signature retail labels.
           </p>
        </div>
      </div>

      {/* Ventures List with Stacking Animation */}
      <div className="relative pb-[20vh] lg:pb-[30vh]">
        {brands.map((brand, idx) => (
          <div
            key={brand.name}
            className={`sticky w-full ${
              idx === brands.length - 1 ? 'mb-0' : 'mb-[10vh] lg:mb-[20vh]'
            } top-[8vh] sm:top-[10vh] md:top-[12vh] lg:top-[15vh]`}
            style={{ 
              zIndex: idx + 1,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              onClick={() => onProductClick?.(brand)}
              className="group cursor-pointer bg-white rounded-[32px] lg:rounded-[64px] p-6 lg:p-16 shadow-[0_40px_120px_rgba(0,0,0,0.12)] border border-slate-100 overflow-hidden relative min-h-[480px] md:min-h-[550px] lg:min-h-[650px] flex items-center"
            >
              {/* Background Number */}
              <div className={`absolute -top-10 lg:-top-20 ${idx % 2 === 1 ? 'right-4 lg:right-10' : 'left-4 lg:left-10'} pointer-events-none opacity-[0.03]`}>
                <span className="text-[80px] lg:text-[200px] font-serif font-black text-slate-900 leading-none">
                  0{idx + 1}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center relative z-10 w-full">
                
                {/* Image Column */}
                <div className={`lg:col-span-5 relative group/img ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-square overflow-hidden rounded-2xl lg:rounded-[48px] bg-slate-50 border border-slate-100">
                    <img 
                      src={brand.image} 
                      alt={brand.name} 
                      className="w-full h-full object-contain p-6 lg:p-12 transition-transform duration-700 group-hover:scale-105" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  {/* Category Badge */}
                  <div className={`absolute -bottom-3 ${idx % 2 === 1 ? '-left-2' : '-right-2'} z-20`}>
                    <div className="px-4 py-2 lg:px-6 lg:py-3 rounded-xl bg-slate-900 text-white shadow-xl border border-white/10">
                      <span className="text-[8px] lg:text-[10px] font-bold uppercase whitespace-nowrap">
                        {brand.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-7 flex flex-col justify-center ${idx % 2 === 1 ? 'lg:order-1 lg:text-right lg:items-end' : 'items-start'}`}>
                  <div className={`space-y-4 lg:space-y-8 max-w-xl ${idx % 2 === 1 ? 'lg:items-end' : ''}`}>
                    <h4 className="text-4xl lg:text-7xl font-serif font-bold text-slate-900 tracking-tighter leading-none uppercase">
                      {brand.name}
                    </h4>

                    <p className="text-base lg:text-xl text-slate-500 font-medium leading-relaxed">
                      {brand.desc}
                    </p>

                    <div className={`flex items-center space-x-1 ${idx % 2 === 1 ? 'lg:justify-end' : ''}`}>
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} size={14} className="text-indigo-600/20" fill="currentColor" />
                      ))}
                    </div>

                    <div className={`pt-4 lg:pt-6 flex flex-wrap items-center gap-4 ${idx % 2 === 1 ? 'lg:justify-end' : ''}`}>
                      <button 
                        onClick={(e) => { e.stopPropagation(); onProductClick?.(brand); }}
                        className="group/btn relative inline-flex items-center space-x-4 px-6 py-3 lg:px-8 lg:py-4 rounded-full bg-slate-900 text-white text-[10px] lg:text-xs font-bold transition-all duration-300 hover:bg-indigo-600 shadow-lg active:scale-95"
                      >
                        <span>Explore Label</span>
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>

                      {brand.websiteStatus === 'live' && brand.websiteUrl ? (
                        <a
                          href={brand.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="group/web relative inline-flex items-center space-x-2 px-6 py-3 lg:px-8 lg:py-4 rounded-full bg-white text-slate-900 border border-slate-200 text-[10px] lg:text-xs font-bold transition-all duration-300 hover:bg-slate-50 shadow-sm active:scale-95"
                        >
                          <Globe size={16} className="text-indigo-600" />
                          <span>Visit Website</span>
                        </a>
                      ) : (
                        <div className="inline-flex items-center space-x-2 px-6 py-3 lg:px-8 lg:py-4 rounded-full bg-slate-50 text-slate-400 border border-slate-100 text-[10px] lg:text-xs font-bold cursor-not-allowed" title="Website Under Development">
                          <Eye size={16} />
                          <span>In Development</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsSection;
