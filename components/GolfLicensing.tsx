import React from 'react';
import { motion } from 'framer-motion';
import { Award, Globe2, ShieldCheck, Zap } from 'lucide-react';

const licensedBrands = [
  {
    name: "Greg Norman",
    logo: "https://gregnorman.in/cdn/shop/files/GN_CoreLogo.png?v=1738314174&width=320",
    desc: "The legendary Shark brand, synonymous with performance and classic golf style. Kudu Group operates as a key licensee for the Indian market."
  },
  {
    name: "PGA Tour",
    logo: "https://ik.imagekit.io/yajas/pga-tour-logo.png",
    desc: "Authentic apparel and accessories from the world's premier professional golf circuit, manufactured and distributed by Kudu."
  },
  {
    name: "Stromberg",
    logo: "https://stromberggolf.com/cdn/shop/files/STROMBERG_LOGO_in_black_300x300.jpg?v=1613701208",
    desc: "Premier golf wear engineering focused on high-performance materials and technical excellence."
  },
  {
    name: "iGolf",
    logo: "https://www.igolfpune.com/assets/img/igolf-new%20(1)%20(1).jpg",
    desc: "Innovation-driven golf solutions and indoor golf experiences, part of our expanding lifestyle portfolio."
  }
];

const GolfLicensing: React.FC = () => {
  return (
    <section id="golf-licensing" className="relative pt-10 lg:pt-20 pb-20 lg:pb-40 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-24 gap-8">
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-6"
            >
              <Award size={14} className="text-slate-700" />
              <span className="text-[10px] font-medium text-slate-800 uppercase">Global Partnerships</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-8xl font-serif font-bold text-slate-900 tracking-tighter leading-[0.9] uppercase"
            >
              International <br />
              <span className="text-slate-400 italic font-light lowercase">Golf Licensing</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-xl"
          >
            <p className="text-sm md:text-base lg:text-lg text-slate-500 font-medium leading-relaxed text-lg italic">
              "Kudu Group holds exclusive licenses to manufacture and operate premier global golf brands, bringing world-class sportswear technology to the Indian market."
            </p>
          </motion.div>
        </div>

        {/* Licensing Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-8">
          {licensedBrands.map((brand, idx) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white rounded-xl lg:rounded-2xl p-4 lg:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-500"
            >
              <div className="aspect-square flex items-center justify-center mb-4 lg:mb-8 grayscale group-hover:grayscale-0 transition-all duration-500">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain p-2"
                  referrerPolicy="no-referrer"
                />
              </div>

              <h3 className="text-xs lg:text-xl font-serif font-bold text-slate-900 mb-2 lg:mb-3 uppercase tracking-tight">
                {brand.name}
              </h3>

              <p className="text-[10px] lg:text-xs text-slate-500 leading-relaxed line-clamp-3 lg:line-clamp-none">
                {brand.desc}
              </p>

              <div className="mt-4 lg:mt-6 pt-4 lg:pt-6 border-t border-slate-50 flex items-center justify-between">
                <div className="flex items-center space-x-1 lg:space-x-2 text-[8px] lg:text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                  <ShieldCheck size={10} className="text-slate-300" />
                  <span>Licensed</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Partnership Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default GolfLicensing;
