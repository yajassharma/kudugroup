import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Sun, 
  Droplets, 
  Zap, 
  Recycle, 
  ArrowLeft, 
  Battery, 
  Globe, 
  Leaf,
  Wind,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  CloudSun
} from 'lucide-react';

interface SustainabilityPageProps {
  onBack: () => void;
}

const SustainabilityPage: React.FC<SustainabilityPageProps> = ({ onBack }) => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pillars = [
    {
      id: 'energy',
      title: 'Energy Efficiency',
      icon: <Zap className="text-emerald-500" size={24} />,
      description: 'Optimizing every kilowatt through smart manufacturing and high-efficiency machinery.',
      metrics: ['30% Reduction in Grid Reliance', 'AI-Driven Power Management'],
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 'solar',
      title: 'Renewable Power',
      icon: <Sun className="text-emerald-500" size={24} />,
      description: 'Harnessing the sun to power our future. Large-scale solar installations across all units.',
      metrics: ['15MW+ Solar Capacity', 'Zero-Carbon Energy Goals'],
      image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 'water',
      title: 'Water Stewardship',
      icon: <Droplets className="text-emerald-500" size={24} />,
      description: 'Advanced ETP and STP systems ensuring 100% water recycling and zero liquid discharge.',
      metrics: ['Zero Liquid Discharge', 'Advanced Effluent Treatment'],
      image: "https://images.unsplash.com/photo-1518173946687-a4c8a9b746f5?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 'waste',
      title: 'Circular Economy',
      icon: <Recycle className="text-emerald-500" size={24} />,
      description: 'Transforming waste into wealth. Comprehensive recycling programs for fabric and materials.',
      metrics: ['95% Waste Diversion', 'Upcycled Textile Programs'],
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9F9F7] text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Immersive Hero */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-white">
        <motion.div 
          style={{ opacity, scale }}
          className="container mx-auto px-6 relative z-10 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-8xl font-serif leading-[1] lg:leading-[0.9] tracking-tight mb-6 lg:mb-8">
              Sustainability <br />
              <span className="text-emerald-600 italic">is Responsibility</span>
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-slate-500 font-light leading-relaxed px-4">
              At Kudu, we don't just manufacture textiles; we engineer a sustainable future. 
              Our commitment to the planet is woven into every fiber of our operations.
            </p>
          </motion.div>
        </motion.div>

        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-[#F9F9F7]" />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </section>

      {/* Philosophy Section - Split Layout */}
      <section className="py-16 sm:py-24 lg:py-40 container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-serif mb-6 lg:mb-8 leading-tight">
              A Holistic Approach to <span className="text-emerald-600">Green Manufacturing</span>
            </h2>
            <div className="space-y-6 lg:space-y-8">
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                We believe that industrial growth and environmental preservation are not mutually exclusive. 
                Our strategy focuses on four core pillars that define our ecological footprint.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="text-3xl font-serif text-emerald-600 mb-2">100%</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Water Recycled</div>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="text-3xl font-serif text-emerald-600 mb-2">15MW</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Solar Power</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200" 
              alt="Nature and Industry" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply" />
          </motion.div>
        </div>
      </section>

      {/* Core Pillars - Bento Grid Style */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-4 sm:mb-6">Our Core Pillars</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-[#F9F9F7] p-6 sm:p-8 rounded-3xl border border-slate-100 hover:border-emerald-200 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 ">{pillar.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-8">
                  {pillar.description}
                </p>
                <ul className="space-y-3">
                  {pillar.metrics.map((metric, i) => (
                    <li key={i} className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 size={14} className="text-emerald-500" />
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Visual Section - Parallax Image with Stats */}
      <section className="relative py-20 sm:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://ik.imagekit.io/yajas/factory3.jpg" 
            alt="Sustainable Factory" 
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F9F9F7] via-[#F9F9F7]/90 to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 sm:space-y-12"
            >
              <div>
                <h4 className="text-[10px] sm:text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3 sm:mb-4">The Impact</h4>
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-serif leading-tight">
                  Measurable Change for a <span className="italic">Better Tomorrow</span>
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-8 sm:gap-12">
                <div className="space-y-2">
                  <div className="text-5xl font-serif text-emerald-600">95%</div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Waste Diversion Rate</p>
                  <p className="text-xs text-slate-500">We aim for zero-waste to landfill by 2030 through aggressive recycling.</p>
                </div>
                <div className="space-y-2">
                  <div className="text-5xl font-serif text-emerald-600">Zero</div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Liquid Discharge</p>
                  <p className="text-xs text-slate-500">Every drop of water used in our processing is treated and reused.</p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={`https://picsum.photos/seed/${i + 10}/100/100`} alt="Partner" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-xs font-medium text-slate-500">
                  Trusted by <span className="text-slate-900 font-bold">Global Environmental Agencies</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Innovation Cards */}
      <section className="py-16 sm:py-24 container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="lg:col-span-2 bg-emerald-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden group">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-serif mb-3 sm:mb-4">The Future of Textiles</h3>
                <p className="text-sm sm:text-base text-emerald-100/70 max-w-md leading-relaxed">
                  We are investing in biodegradable fibers and natural dye technologies to further reduce our chemical footprint.
                </p>
              </div>
              <motion.button 
                whileHover={{ x: 10 }}
                className="flex items-center space-x-2 text-emerald-400 font-bold text-sm mt-8"
              >
                <span>Learn about our R&D</span>
                <ArrowRight size={16} />
              </motion.button>
            </div>
            <Wind className="absolute -bottom-10 -right-10 text-emerald-800/20" size={300} />
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-sm flex flex-col justify-between">
            <ShieldCheck className="text-emerald-600 mb-6 sm:mb-8" size={40} />
            <div>
              <h3 className="text-xl sm:text-2xl font-serif mb-3 sm:mb-4">Compliance & Ethics</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Our facilities are certified by global standards for social and environmental compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-32 text-center px-4 sm:px-6 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-serif mb-8 sm:mb-12">Ready to build a <br /><span className="text-emerald-600 italic">Greener Legacy?</span></h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={onBack}
              className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 rounded-full bg-slate-900 text-white font-bold text-sm sm:text-base hover:bg-emerald-600 transition-all duration-300 shadow-xl hover:shadow-emerald-200/50"
            >
              Back to Home
            </button>
            <button className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 rounded-full bg-white text-slate-900 font-bold text-sm sm:text-base border border-slate-200 hover:bg-slate-50 transition-all duration-300">
              Download ESG Report
            </button>
          </div>
        </motion.div>
      </section>

      {/* Footer Decoration */}
      <div className="h-2 bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-900" />
    </div>
  );
};

export default SustainabilityPage;
