
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Factory, Shirt, Activity, Target, ChevronRight, ChevronLeft, ExternalLink, Info, Settings } from 'lucide-react';

const factoryImages = [
  "https://ik.imagekit.io/yajas/aboutHero.jpg",
  "https://ik.imagekit.io/yajas/factory3.jpg",
  "https://ik.imagekit.io/yajas/knitting.jpg"
];

const TextileMachine = () => {
  return (
    <div className="relative w-full max-w-5xl aspect-[16/9] bg-zinc-50 rounded-[2.5rem] overflow-hidden border border-zinc-100 shadow-sm">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <svg
        viewBox="0 0 800 450"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="threadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* --- SECTION 1: RAW MATERIAL (YARN SPOOLS) --- */}
        <g id="spools" transform="translate(60, 100)">
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(0, ${i * 85})`}>
              <rect x="0" y="0" width="36" height="54" rx="6" fill="#e4e4e7" />
              <motion.rect
                x="4"
                y="4"
                width="28"
                height="46"
                rx="4"
                fill={["#6366f1", "#a855f7", "#ec4899"][i]}
                animate={{
                  opacity: [0.9, 1, 0.9],
                  scaleX: [1, 0.97, 1],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.path
                d="M36 27 Q 80 27, 120 150"
                stroke={["#6366f1", "#a855f7", "#ec4899"][i]}
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="8 4"
                animate={{
                  strokeDashoffset: [0, -24],
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </g>
          ))}
        </g>

        {/* --- SECTION 2: WEAVING ENGINE --- */}
        <g id="engine" transform="translate(220, 150)">
          <rect x="0" y="0" width="240" height="180" rx="24" fill="white" stroke="#f4f4f5" strokeWidth="2" />
          
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            style={{ originX: "60px", originY: "60px" }}
          >
            <circle cx="60" cy="60" r="28" fill="none" stroke="#f1f5f9" strokeWidth="4" strokeDasharray="8 4" />
            <circle cx="60" cy="60" r="8" fill="#e2e8f0" />
          </motion.g>

          <motion.g
            animate={{ rotate: -360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            style={{ originX: "110px", originY: "100px" }}
          >
            <circle cx="110" cy="100" r="18" fill="none" stroke="#f1f5f9" strokeWidth="3" strokeDasharray="6 3" />
            <circle cx="110" cy="100" r="5" fill="#e2e8f0" />
          </motion.g>

          <g transform="translate(145, 40)">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.rect
                key={i}
                x={i * 16}
                y="0"
                width="3"
                height="100"
                fill="#cbd5e1"
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.12,
                  ease: "easeInOut",
                }}
              />
            ))}
          </g>

          <motion.path
            d="M240 90 L 340 90"
            stroke="url(#threadGrad)"
            strokeWidth="40"
            strokeOpacity="0.15"
            strokeDasharray="4 4"
            animate={{ strokeDashoffset: [0, -16] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          />
        </g>

        {/* --- SECTION 3: CUTTING & ASSEMBLY --- */}
        <g id="assembly" transform="translate(490, 150)">
          <rect x="0" y="0" width="110" height="180" rx="20" fill="white" stroke="#f4f4f5" strokeWidth="2" />
          
          <motion.line
            x1="55" y1="30" x2="55" y2="150"
            stroke="#6366f1"
            strokeWidth="1.5"
            filter="url(#glow)"
            animate={{
              opacity: [0, 0.8, 0],
              x: [35, 75, 35],
            }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />

          <motion.g
            animate={{
              rotate: [-8, 8, -8],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ originX: "55px", originY: "30px" }}
          >
            <rect x="52" y="30" width="6" height="50" fill="#e2e8f0" rx="3" />
            <rect x="45" y="75" width="20" height="8" fill="#cbd5e1" rx="4" />
          </motion.g>
        </g>

        {/* --- SECTION 4: CONVEYOR BELT & FINISHED CLOTHING --- */}
        <g id="conveyor" transform="translate(610, 280)">
          <rect x="0" y="0" width="180" height="8" rx="4" fill="#f1f5f9" />
          {[0, 40, 80, 120, 160].map((x) => (
            <motion.circle
              key={x}
              cx={x + 10}
              cy="12"
              r="3"
              fill="#e2e8f0"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          ))}

          {[0, 1, 2].map((i) => (
            <motion.g
              key={i}
              initial={{ x: -100 }}
              animate={{ x: 240 }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: i * 1.8,
                ease: "linear",
              }}
            >
              {/* Refined T-Shirt Path */}
              <path
                d="M 12 12 Q 25 8 38 12 L 48 18 L 42 28 L 36 25 V 48 H 14 V 25 L 8 28 L 2 18 Z"
                fill={["#6366f1", "#a855f7", "#ec4899"][i % 3]}
                fillOpacity="0.9"
                stroke="white"
                strokeWidth="1.5"
                strokeLinejoin="round"
                transform="translate(0, -65) scale(1.1)"
              />
              {/* Subtle Detail on Shirt */}
              <path
                d="M 20 20 L 30 20"
                stroke="white"
                strokeWidth="1"
                strokeOpacity="0.4"
                transform="translate(0, -65) scale(1.1)"
              />
            </motion.g>
          ))}
        </g>

        {/* Connecting Tubes/Wires */}
        <path d="M 96 127 C 150 127, 150 150, 220 150" stroke="#f1f5f9" strokeWidth="3" fill="none" />
        <path d="M 460 240 L 490 240" stroke="#f1f5f9" strokeWidth="6" fill="none" />
      </svg>
    </div>
  );
};

const BusinessVerticals: React.FC = () => {
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % factoryImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const brands = [
    {
      id: 'idhu',
      title: 'IDHU',
      subtitle: 'Ethnic Wear (D2C)',
      desc: 'A direct-to-consumer ethnic wear label specialising in premium kurtis, dupattas, jacquards, woollens and coordinated sets.',
      positioning: 'Modern Indian Ethnic + Premium Craftsmanship',
      website: 'https://idhufashions.com',
      isLive: true,
      icon: <Shirt className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=800',
      accent: 'bg-emerald-500'
    },
    {
      id: 'poker',
      title: 'POKER',
      subtitle: 'Athleisure Wear',
      desc: 'Performance-driven athleisure for men and women, combining comfort, mobility and contemporary styling for active lifestyles.',
      positioning: 'Sporty, Energetic, Modern',
      website: '#',
      isLive: false,
      icon: <Activity className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
      accent: 'bg-indigo-500'
    },
    {
      id: 'golf',
      title: 'GOLF WEAR',
      subtitle: 'Golf Apparel & Accessories',
      desc: 'A specialised vertical dedicated to golf apparel, accessories and equipment, built for a niche premium sporting audience.',
      positioning: 'Luxury Sport + Lifestyle',
      website: '#',
      isLive: false,
      icon: <Target className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=800',
      accent: 'bg-amber-500'
    }
  ];

  return (
    <div className="max-w-[1600px] px-0 relative">
      {/* Colorful Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-400/10 blur-[120px] rounded-full" />
      </div>

      {/* Background Decorative Text */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-[0.03] select-none pointer-events-none overflow-hidden w-full text-center">
        <h1 className="text-[20vw] font-serif font-black tracking-tighter leading-none bg-gradient-to-b from-blue-600 to-emerald-600 bg-clip-text text-transparent">VERTICALS</h1>
      </div>

      {/* Section Header */}
      <div className="flex flex-col items-center mb-12 lg:mb-24 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="brand-divider !mb-8"
        >
          <div className="brand-diamond"></div>
        </motion.div>
        <h2 className="text-3xl md:text-5xl lg:text-8xl text-black font-serif font-black leading-none tracking-tight uppercase">
          Our Business <span className="font-light italic text-indigo-600">Verticals</span>
        </h2>
      </div>

      {/* Group Overview Block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20 lg:mb-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1"
        >
          <h3 className="text-2xl md:text-3xl lg:text-5xl font-serif font-black text-black mb-8 leading-tight">
            KUDU GROUP is the combined strength of <span className="text-blue-600 italic font-light">Kudu Fabrics</span> & <span className="text-emerald-600 italic font-light">Kudu Industries Limited.</span>
          </h3>
          <p className="text-sm md:text-base lg:text-lg text-black/60 font-medium leading-relaxed mb-8 lg:mb-10">
            Kudu Group represents a powerful synergy between Kudu Fabrics and Kudu Industries Limited, creating a seamless ecosystem of textile excellence. From advanced fabric engineering to high-precision garment manufacturing, our integrated approach ensures unmatched quality control and innovation at every stage of the production cycle.
          </p>
          <div className="flex justify-start">
            <button className="group inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-slate-900 text-white text-[10px] lg:text-xs font-bold transition-all hover:bg-indigo-600 shadow-lg active:scale-95">
              <span>Know More</span>
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:col-span-7 order-1 lg:order-2 -mx-6 lg:mx-0"
        >
          <div className="relative aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/9] rounded-none lg:rounded-[60px] overflow-hidden shadow-2xl group bg-black">
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentImageIndex}
                src={factoryImages[currentImageIndex]} 
                alt={`Factory View ${currentImageIndex + 1}`} 
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            
            {/* Carousel Controls */}
            <div className="absolute bottom-6 lg:bottom-12 left-6 lg:left-12 right-6 lg:right-12 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-4">

              {/* Navigation Dots */}
              <div className="flex space-x-2 mb-2">
                {factoryImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImageIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === currentImageIndex ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Arrow Controls (Optional but nice for UX) */}
            <div className="absolute inset-y-0 left-6 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button 
                onClick={() => setCurrentImageIndex((prev) => (prev - 1 + factoryImages.length) % factoryImages.length)}
                className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20 hover:bg-white/20 transition-all"
              >
                <ChevronLeft size={20} />
              </button>
            </div>
            <div className="absolute inset-y-0 right-6 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button 
                onClick={() => setCurrentImageIndex((prev) => (prev + 1) % factoryImages.length)}
                className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20 hover:bg-white/20 transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Core Manufacturing Vertical (B2B) */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass p-6 lg:p-20 rounded-none lg:rounded-[80px] bg-gradient-to-br from-white/80 to-blue-50/60 border-white shadow-2xl mb-20 lg:mb-32 -mx-6 lg:mx-0 relative overflow-hidden group"
      >       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-serif font-black text-black mb-6 lg:mb-10 leading-tight uppercase tracking-tight">
              Textile & Garment <br /><span className="italic font-light text-blue-600">Manufacturing</span>
            </h2>

            {/* Mobile SVG Placement */}
            <div className="lg:hidden mb-10">
              <TextileMachine />
            </div>

            <p className="text-base lg:text-xl text-black/60 font-medium leading-relaxed mb-8 lg:mb-12">
              End-to-end textile capabilities from raw fabric to finished garments. Our global, export-ready infrastructure supports large-scale production for the world's leading brands.
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                { title: 'Fabric Manufacturing', desc: 'High-speed knitting and weaving units.', color: 'text-blue-600' },
                { title: 'Processing & Printing', desc: 'Advanced dyeing and digital printing.', color: 'text-emerald-600' },
                { title: 'Embroidery & Value Add', desc: 'Intricate detailing and finishes.', color: 'text-indigo-600' },
                { title: 'Garment Production', desc: 'Large-scale stitching and finishing.', color: 'text-rose-600' }
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                  <div className={`h-px w-full bg-black/10`}></div>
                  <h5 className={`text-[12px] uppercase ${item.color}`}>{item.title}</h5>
                  <p className="text-xs text-black/40 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop SVG Placement */}
          <div className="hidden lg:block">
            <TextileMachine />
          </div>
        </div>
      </motion.div>


      {/* Launch Popup */}
      <AnimatePresence>
        {activePopup && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePopup(null)}
              className="absolute inset-0 bg-black/20 backdrop-blur-xl"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass p-12 lg:p-20 rounded-[60px] bg-white border-white shadow-2xl max-w-2xl w-full relative z-10 text-center"
            >
              <div className="w-24 h-24 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-10">
                <Activity className="text-black w-10 h-10 animate-pulse" />
              </div>
              <h3 className="text-4xl lg:text-5xl font-serif font-black text-black mb-6 uppercase tracking-tight">
                {activePopup} <br /><span className="italic font-light text-black/40">Coming Soon</span>
              </h3>
              <p className="text-lg text-black/50 font-medium leading-relaxed mb-12">
                This business vertical is currently in strategic development. We are crafting a premium experience that will redefine the category.
              </p>
              <button 
                onClick={() => setActivePopup(null)}
                className="px-12 py-5 bg-black text-white rounded-full font-bold uppercase tracking-widest hover:bg-slate-900 transition-all shadow-2xl active:scale-95"
              >
                Acknowledge
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BusinessVerticals;
