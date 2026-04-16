
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { History, Award, Target, Rocket, ArrowLeft, Quote, Factory, ShieldCheck, Zap, Sparkles, TrendingUp, Send } from 'lucide-react';

interface AboutPageProps {
  onBack: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const milestones = [
    {
      year: "1969",
      title: "Foundational Vision",
      description: "The foundational spark of our legacy. Mr. Krishan Kumar Mittal established Kudu with a single knitting machine and a fierce commitment to quality. He built the company on the pillars of integrity and extreme self-reliance, values that remain our North Star today as we continue to push the boundaries of textile craftsmanship.",
      icon: <History size={16} />
    },
    {
      year: "1990s",
      title: "Industrial Scale",
      description: "An era of significant industrial transformation. Under the strategic leadership of Mr. Ganga Bishan Mittal, Kudu transitioned from a focused boutique operation into a structured manufacturing powerhouse. We dramatically expanded our technical footprint, serving critical international markets with unmatched consistency and operational excellence.",
      icon: <TrendingUp size={16} />
    },
    {
      year: "1998",
      title: "National Honor",
      description: "National validation of our excellence. Founder Mr. Krishan Kumar Mittal was honored with the prestigious Udyog Patra Award, recognizing his extraordinary journey as a self-made industrialist who contributed significantly to India's manufacturing prowess and economic resilience.",
      icon: <Award size={16} />
    },
    {
      year: "Today",
      title: "Modern Future",
      description: "The digital and global horizon of Kudu. Representing the third generation, Mr. Gaurav Mittal has modernized the group for the 21st century. By integrating tech-driven fabrics, luxury aesthetics, and D2C innovation, he has steered Kudu toward a future of limitless possibilities and global fashion leadership.",
      icon: <Rocket size={16} />
    }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-slate-100 selection:text-slate-900 overflow-x-hidden">

      {/* Hero Section with New Bold 'HERITAGE' and Premium Gradient */}
      <section className="relative pt-44 pb-20 lg:pt-56 lg:pb-32 px-6 bg-gradient-to-br from-[#faf9f6] via-[#f7f5f0] to-[#f1efea] overflow-hidden">

        {/* Re-introducing a BOLDER, visible Silk Mesh for premium texture */}
        <div className="absolute inset-0 opacity-[0.4] pointer-events-none">
          <svg width="100%" height="100%" className="scale-125">
            <pattern id="silk-mesh-premium" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 Q25 0 50 50 T100 50" stroke="#cbd5e1" strokeWidth="1" fill="none" opacity="0.4" />
              <path d="M50 0 Q25 50 50 100 T50 0" stroke="#cbd5e1" strokeWidth="1" fill="none" opacity="0.4" />
              <circle cx="50" cy="50" r="1.5" fill="#94a3b8" opacity="0.1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#silk-mesh-premium)" />
          </svg>
        </div>

        {/* Sharper Transition to White */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-10"></div>

        <div className="container mx-auto max-w-7xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center space-x-6 mb-12">
              <span className="h-px w-20 bg-slate-400/30"></span>
              <span className="text-[10px] font-medium uppercase text-slate-500 leading-none">Established 1969</span>
              <span className="h-px w-20 bg-slate-400/30"></span>
            </div>

            {/* Changed font style to Bold Serif Uppercase to resolve descender issue once and for all */}
            <h1 className="text-6xl lg:text-[11.5rem] font-serif font-bold text-slate-900 mb-8 leading-[0.8] tracking-tighter uppercase relative pb-8 overflow-visible">
              Our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400 font-serif font-black uppercase inline-block mt-4 px-2">Heritage</span>
            </h1>

            <p className="max-w-3xl mx-auto text-base lg:text-3xl text-slate-500/80 font-medium leading-relaxed italic mb-8 opacity-90">
              "Building the future on the foundation of our past."
            </p>
          </motion.div>
        </div>

        {/* Repositioned Return Button */}
        <motion.button
          onClick={onBack}
          className="absolute top-32 left-6 lg:left-12 z-50 flex items-center space-x-3 text-slate-400 hover:text-slate-900 transition-colors group"
        >
          <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-slate-900 transition-all bg-white shadow-sm">
            <ArrowLeft size={18} />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest">Return</span>
        </motion.button>
      </section>

      {/* The Journey Section - Detailed Content */}
      <section className="py-16 lg:py-48 bg-white container mx-auto px-6 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-10">
              <h2 className="text-3xl lg:text-8xl font-serif font-bold text-slate-900 tracking-tight lowercase italic leading-[0.85]">The heart behind the machine.</h2>
              <div className="space-y-8 text-sm lg:text-xl text-slate-500 font-medium leading-relaxed font-serif opacity-90">
                <p>
                  Kudu Group is the realization of a legacy that began with Mr. Krishan Kumar Mittal over five decades ago. What started as a vision for industrial self-reliance has blossomed into a sophisticated global manufacturing ecosystem.
                </p>
                <p>
                  From the first rhythmic click of a knitting machine to the high-speed precision of our modern processing units, we have remained anchored in the belief that true quality is born from within. Today, this philosophy breathes through our five specialized verticals - Knitting, Dyeing, Printing, Processing, and Garmenting.
                </p>
                <p>
                  This holistic approach ensures that the soul of Kudu is present in every single fiber we touch, creating a bridge between heritage wisdom and modern fashion excellence.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-12 pt-12 border-t border-slate-100">
              <div className="space-y-2">
                <p className="text-4xl lg:text-7xl font-serif font-medium text-slate-950 tracking-tighter tabular-nums leading-none">1969</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Foundation</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl lg:text-7xl font-serif font-medium text-slate-950 tracking-tighter tabular-nums leading-none">800+</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Workforce</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Image Slider */}
            {(() => {
              const sliderImages = [
                {
                  src: "https://ik.imagekit.io/yajas/Group%20414.png",
                  alt: "Udyog Patra Award Certificate"
                },
                {
                  src: "https://ik.imagekit.io/yajas/Gemini_Generated_Image_m4475lm4475lm447%20(1).png",
                  alt: "Mr. Krishan Kumar Mittal Udyog Patra Award Ceremony"
                }
              ];

              const AwardSlider = () => {
                const [activeIdx, setActiveIdx] = useState(0);

                useEffect(() => {
                  const interval = setInterval(() => {
                    setActiveIdx(prev => (prev + 1) % sliderImages.length);
                  }, 3000);
                  return () => clearInterval(interval);
                }, []);

                return (
                  <>
                    <div className="aspect-[9/16] rounded-[20px] overflow-hidden shadow-2xl relative group bg-slate-50 border border-slate-100">
                      {sliderImages.map((img, idx) => (
                        <img
                          key={idx}
                          src={img.src}
                          alt={img.alt}
                          className={`absolute inset-0 w-full h-full object-cover transition-all duration-2000 ${idx === activeIdx ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                            }`}
                          referrerPolicy="no-referrer"
                        />
                      ))}
                      <div className="absolute inset-0 bg-slate-950/5 mix-blend-overlay" />

                      {/* Prev/Next arrows */}
                      <button
                        onClick={() => setActiveIdx(prev => (prev - 1 + sliderImages.length) % sliderImages.length)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md text-slate-700 hover:bg-white transition-all opacity-0 group-hover:opacity-100 z-10"
                        aria-label="Previous image"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
                      </button>
                      <button
                        onClick={() => setActiveIdx(prev => (prev + 1) % sliderImages.length)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md text-slate-700 hover:bg-white transition-all opacity-0 group-hover:opacity-100 z-10"
                        aria-label="Next image"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
                      </button>

                      {/* Dot indicators */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                        {sliderImages.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveIdx(idx)}
                            className={`transition-all duration-300 ${idx === activeIdx
                              ? 'w-5 h-2 bg-white shadow-md'
                              : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                              }`}
                            aria-label={`Go to image ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </>
                );
              };

              return <AwardSlider />;
            })()}
          </motion.div>
        </div>
      </section>

      {/* Narrative Section - Detailed Vertical Integration */}
      <section className="py-16 lg:py-64 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl text-center space-y-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <Quote size={40} className="text-slate-200 mx-auto" />
            <h2 className="text-2xl lg:text-7xl font-serif font-bold text-slate-900 tracking-tight italic leading-tight">A Journey of Woven Integrity.</h2>
            <div className="space-y-12">
              <p className="text-base lg:text-2xl text-slate-500 font-medium leading-relaxed font-serif opacity-80 italic">
                For over five decades, Kudu Group has stood as a symbol of industrial resilience and reliability. Our journey is defined by a relentless pursuit of vertical excellence - a rare commitment to mastering every stage of the textile lifecycle. By creating a seamless bridge between raw yarn and luxury fashion, we have redefined what is possible in textile engineering.
              </p>
              <p className="text-base lg:text-2xl text-slate-500 font-medium leading-relaxed font-serif opacity-80 italic">
                In our knitting halls, sophisticated dye houses, and state-of-the-art printing and processing units, master craftsmen work in tandem with cutting-edge technology. This vertical integration is not just a business strategy; it is our promise of integrity, ensuring that from processing to the final garmenting, every Kudu product is a testament to the vision of our founders and the precision of our modern future.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Horizontal & Vertical Timeline - Mobile Continuity Fix */}
      <section className="py-20 lg:py-72 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-24 max-w-[1600px] relative z-10">
          <div className="text-center mb-16 lg:mb-48">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.1em] mb-6 block leading-none">Generational Evolution</span>
            <h2 className="text-3xl sm:text-4xl lg:text-8xl font-serif font-bold text-slate-900 tracking-tight uppercase leading-none">Our <span className="text-slate-300 italic font-light lowercase">Timeline</span></h2>
          </div>

          <div className="relative lg:px-20 overflow-visible">
            {/* Desktop Horizontal Wavy Thread Connection - UNTOUCHED */}
            <div className="hidden lg:block absolute top-[190px] left-0 w-full h-32 opacity-30 pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 1200 100" preserveAspectRatio="none">
                <path d="M0 50 Q150 10 300 50 T600 50 T900 50 T1200 50" fill="none" stroke="#1e293b" strokeWidth="2" strokeDasharray="10 10" />
              </svg>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-slate-900 drop-shadow-xl animate-pulse">
                <Send size={40} className="rotate-45" />
              </div>
            </div>

            {/* Redesigned Mobile Vertical Timeline - More Continuous & Less Odd */}
            <div className="lg:hidden absolute top-0 left-8 md:left-1/2 w-0.5 h-full opacity-20 pointer-events-none -z-10">
              <div className="w-full h-full border-l-2 border-dashed border-slate-900"></div>
            </div>

            {/* Cards Area - One Column Centered on Mobile / Horizontal Row on Desktop */}
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-12 relative z-10 w-full max-w-[1400px] mx-auto overflow-visible items-stretch">
              {milestones.map((ms, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="relative flex flex-col items-center flex-1"
                >
                  {/* Timeline Dot for Mobile Continuity */}
                  <div className="lg:hidden absolute left-[-42px] top-12 w-4 h-4 rounded-full bg-slate-900 border-4 border-white shadow-sm z-20"></div>

                  <div className="p-6 lg:p-10 rounded-[32px] lg:rounded-[40px] bg-white border border-slate-100 shadow-[0_10px_60px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_100px_rgba(0,0,0,0.1)] transition-all duration-700 hover:-translate-y-4 group overflow-hidden w-full min-h-[300px] lg:min-h-[500px] flex flex-col justify-between ml-4 lg:ml-0">
                    <div className="space-y-4 lg:space-y-6 relative z-10">
                      <div className="flex items-center justify-between">
                        <p className="text-xl lg:text-4xl font-serif font-medium text-slate-950 tabular-nums leading-none tracking-tighter">
                          {ms.year}
                        </p>
                        <div className="p-3 rounded-xl bg-[#f8fafc] text-slate-950 border border-slate-100 group-hover:bg-slate-950 group-hover:text-white transition-all duration-500">
                          {ms.icon}
                        </div>
                      </div>
                      <div className="space-y-3 lg:space-y-4">
                        <h4 className="text-base lg:text-lg font-bold text-slate-900 uppercase tracking-tight">{ms.title}</h4>
                        <p className="text-[11px] lg:text-sm text-slate-500 font-medium leading-relaxed opacity-90">
                          {ms.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Standard Corporate Close */}
      <section className="py-24 lg:py-48 px-6 bg-slate-950 relative overflow-hidden rounded-[48px] lg:rounded-[64px] mx-6 mb-24 text-center">
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="dot-mesh" width="8" height="8" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="0.5" fill="white" />
            </pattern>
            <rect width="100" height="100" fill="url(#dot-mesh)" />
          </svg>
        </div>

        <div className="container mx-auto relative z-10 space-y-12 lg:space-y-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl lg:text-8xl font-serif font-bold text-white mb-8 leading-[0.9] tracking-tighter uppercase">
              Excellence <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500 italic font-light lowercase">is a habit</span>
            </h2>
            <p className="max-w-2xl mx-auto text-xs lg:text-xl text-slate-400 font-medium leading-relaxed mb-12 italic">
              "Joining a 50-year legacy of manufacturing precision and global trust."
            </p>
          </motion.div>

          <button
            onClick={onBack}
            className="bg-white text-slate-950 px-12 py-5 rounded-none font-bold text-[10px] uppercase tracking-widest hover:bg-slate-200 transition-all active:scale-95 shadow-2xl"
          >
            Experience Kudu
          </button>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
