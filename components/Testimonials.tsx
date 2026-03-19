
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const reviews = [
  {
    name: 'Vikram Singh',
    pos: 'Retail Operations Director',
    text: 'Kudu Group transformed our supply chain. Their vertical integration means we get consistent quality from yarn to finished garment in record time.'
  },
  {
    name: 'Ananya Sharma',
    pos: 'Fashion Brand Manager',
    text: 'The digital printing capabilities at Kudu are unparalleled. The vibrancy and detail they achieve on their performance fabrics is world-class.'
  },
  {
    name: 'David Miller',
    pos: 'Global Sourcing Head',
    text: 'As an international partner, we value reliability. Kudu has consistently delivered AAA certified protective textiles that meet stringent global standards.'
  }
];

const Testimonials: React.FC = () => {
  // Duplicate reviews to create a seamless loop
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <div className="py-5 lg:py-12 overflow-hidden bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 mb-12 lg:mb-32">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="inline-flex items-center space-x-2">
            <div className="w-8 h-px bg-indigo-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-8xl font-serif font-bold text-slate-900 tracking-tighter leading-[0.9] uppercase">
            Voices of <span className="italic font-light text-indigo-600/40 lowercase">Success</span>
          </h2>
        </div>
      </div>

      {/* Infinite Marquee Wrapper */}
      <div className="relative flex overflow-hidden">
        <motion.div 
          className="flex space-x-6 lg:space-x-10 px-4"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          style={{ width: "fit-content" }}
        >
          {duplicatedReviews.map((rev, idx) => (
            <div 
              key={idx}
              className="w-[280px] sm:w-[350px] md:w-[450px] lg:w-[550px] flex-shrink-0 p-6 sm:p-8 lg:p-16 rounded-3xl lg:rounded-[64px] bg-white border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.03)] relative group transition-all duration-500 hover:shadow-[0_30px_80px_rgba(0,0,0,0.06)]"
            >
              <Quote className="absolute top-6 right-6 sm:top-8 sm:right-8 lg:top-12 lg:right-12 text-indigo-600/5 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 group-hover:scale-110 transition-transform pointer-events-none" />
              
              <div className="flex space-x-1 mb-4 sm:mb-6 lg:mb-10">
                 {[1,2,3,4,5].map(i => <Star key={i} size={12} className="sm:w-[14px] sm:h-[14px] text-indigo-600" fill="currentColor" />)}
              </div>
              
              <p className="text-base sm:text-lg lg:text-2xl font-serif text-slate-700 font-medium leading-relaxed mb-6 sm:mb-10 lg:mb-16 italic">
                "{rev.text}"
              </p>
              
              <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6 pt-6 sm:pt-8 lg:pt-12 border-t border-slate-50">
                 <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-slate-900 text-white flex items-center justify-center text-base sm:text-lg lg:text-xl font-bold">
                   {rev.name[0]}
                 </div>
                 <div>
                    <h5 className="font-bold text-sm sm:text-base lg:text-xl text-slate-900 tracking-tight">{rev.name}</h5>
                    <p className="text-[8px] lg:text-[10px] uppercase font-bold text-slate-400 tracking-widest mt-1">{rev.pos}</p>
                 </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
