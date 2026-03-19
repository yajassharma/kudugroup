import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';

const clients = [
  { name: 'Reliance Retail', logo: 'RELIANCE' },
  { name: 'Pantaloons', logo: 'PANTALOONS' },
  { name: 'Global Sport', logo: 'INTERNATIONAL' },
  { name: 'Trend Lifestyle', logo: 'TRENDS' }
];

const ClientsSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="glass p-8 sm:p-12 lg:p-24 rounded-[32px] lg:rounded-[64px] border-white/60 shadow-2xl relative overflow-hidden bg-white/30">
        {/* Colorful Gradient Blobs within the container */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-200/20 blur-[100px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-teal-200/20 blur-[100px] rounded-full" />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="lg:max-w-md text-center lg:text-left">
            <h3 className="text-[10px] sm:text-xs font-black tracking-[0.4em] text-blue-600 uppercase mb-4">Industrial Backing</h3>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-serif font-black leading-[1.1] lg:leading-tight tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900">Powering <br /><span className="text-blue-600">Global Giants</span></h2>
            <p className="mt-6 sm:mt-8 text-sm sm:text-base text-black/50 font-medium leading-relaxed">
              We serve as the silent backbone for India's leading fashion retailers, providing scalable, zero-defect manufacturing for their high-traffic collections.
            </p>
            
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
              <div className="flex items-center space-x-3 text-blue-600 font-bold text-sm bg-blue-50 px-6 py-3 rounded-2xl">
                 <ShieldCheck size={20} className="sm:w-[22px] sm:h-[22px]" />
                 <span className="uppercase tracking-widest text-[10px] font-black">Verified Partner</span>
              </div>
              <button className="flex items-center space-x-2 text-slate-400 hover:text-black font-bold text-xs sm:text-sm transition-colors uppercase tracking-widest group">
                 <span>Wholesale Portal</span>
                 <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full">
            {clients.map((client, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass h-32 sm:h-44 rounded-2xl sm:rounded-[40px] flex items-center justify-center p-6 sm:p-10 bg-white/60 border-white/80 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="flex flex-col items-center">
                  <span className="text-xl sm:text-2xl lg:text-4xl font-serif font-black text-slate-300 tracking-[0.2em] uppercase italic transition-colors group-hover:text-slate-500">
                    {client.logo}
                  </span>
                  <p className="text-[10px] font-black text-slate-400 mt-2 opacity-0 transition-opacity">{client.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;