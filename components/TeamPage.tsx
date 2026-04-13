
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Star, Shield, ArrowLeft } from 'lucide-react';

interface TeamPageProps {
  onBack: () => void;
  onNavClick?: (id: string) => void;
}

const teamMembers = [
  {
    name: "Mr. Ganga Bhishan Mittal",
    role: "Director",
    about: "A guiding force behind Kudu Industries, bringing decades of experience in the textile sector and a steadfast commitment to quality and ethical business practices.",
    image: "https://ik.imagekit.io/yajas/tempImagewAoiXR%201.png"
  },
  {
    name: "Mr. Gaurav Mittal",
    role: "Managing Director",
    about: "Visionary leader driving Kudu’s vertical integration, innovation, and large-scale manufacturing excellence. Focused on building a globally competitive textile ecosystem with strong operational control and long-term brand value.",
    image: "https://ik.imagekit.io/yajas/tempImageLSrvEp%201.png"
  },
  {
    name: "Mrs. Shilpa Mittal",
    role: "Director",
    about: "Driving brand identity, retail expansion, and positioning of Kudu’s in-house labels including Idhu, Poker, and Golfbuyindia. Focused on blending textile expertise with modern consumer demand.",
    image: "https://ik.imagekit.io/yajas/tempImagecMY61F%201.png"
  },
  {
    name: "Mr. Idhant Mittal",
    role: "Director – Business Innovation & Growth",
    about: "Representing the next generation of leadership, focusing on digital transformation, scalability, and modernizing Kudu’s global presence through technology and new-age strategy.",
    image: "https://ik.imagekit.io/yajas/Group%20104.png"
  }
];

const WavyDivider = () => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-[99%] z-20">
    <svg className="relative block w-[calc(100%+1.3px)] h-[40px] lg:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#f8fafc"></path>
    </svg>
  </div>
);

const TeamPage: React.FC<TeamPageProps> = ({ onBack, onNavClick }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-slate-100 selection:text-slate-900">

      {/* Header / Hero */}
      <section className="relative pt-32 pb-24 lg:pt-56 lg:pb-48 px-6 bg-[#f8fafc]">
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-[10px] font-bold uppercase tracking-normal text-slate-400 mb-6 block leading-none">The People Behind Kudu</span>
            <h1 className="text-6xl sm:text-7xl lg:text-9xl font-serif font-bold text-slate-900 mb-8 leading-[0.9] tracking-tighter uppercase">
              Our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-200 italic font-light lowercase">Expert Team</span>
            </h1>
            <p className="max-w-2xl mx-auto text-base lg:text-xl text-slate-500 font-medium leading-relaxed mb-12">
              A collective of visionaries, industry veterans, and passionate specialists committed to engineering the future of textiles.
            </p>
          </motion.div>
        </div>

        {/* Back Button */}
        <motion.button
          onClick={onBack}
          className="absolute top-10 left-6 lg:left-12 z-50 flex items-center space-x-3 text-slate-400 hover:text-slate-900 transition-colors group"
        >
          <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-slate-900 transition-all">
            <ArrowLeft size={18} />
          </div>
          <span className="text-xs font-bold uppercase tracking-tight">Back to Home</span>
        </motion.button>

        <WavyDivider />
      </section>

      {/* Leadership Section */}
      <section className="py-24 lg:py-48 bg-white container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-32 max-w-6xl mx-auto">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-8 lg:space-y-12"
            >
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden bg-slate-50 shadow-2xl relative group">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl lg:text-4xl font-serif font-bold text-slate-900">{member.name}</h3>
                  <div className="h-px w-16 bg-slate-200" />
                </div>
                <p className="text-xs lg:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500 uppercase tracking-tight leading-none">{member.role}</p>
                <p className="text-sm lg:text-base text-slate-500 font-medium leading-relaxed">{member.about}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Workforce Section */}
      <section className="py-24 lg:py-48 bg-slate-950 rounded-[32px] md:rounded-[64px] mx-6 mb-24 relative overflow-hidden text-center text-white">
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid-dark" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.1" />
            </pattern>
            <rect width="100" height="100" fill="url(#grid-dark)" />
          </svg>
        </div>

        <div className="container mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-12 lg:space-y-20"
          >
            <div className="inline-flex p-5 rounded-3xl bg-white/5 border border-white/10 mb-8">
              <Users size={32} className="text-slate-400" />
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-9xl font-serif font-bold text-white mb-8 leading-[0.85] tracking-tighter uppercase">
              Driven by <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500 italic">800+ Hearts</span>
            </h2>

            <p className="max-w-4xl mx-auto text-sm md:text-base lg:text-2xl text-slate-400 font-medium leading-relaxed italic px-4">
              Beyond leadership, our strength lies in our 800+ full-time employees.
              From skilled master tailors to engineering specialists, our team is a diverse
              fabric of talent working in harmony across our integrated manufacturing ecosystem.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10 pt-12 max-w-6xl mx-auto">
              {[
                { label: "Full-Time Professionals", value: "800+", icon: <Users size={16} /> },
                { label: "Craftsman & Tailors", value: "350+", icon: <Heart size={16} /> },
                { label: "Quality Engineers", value: "40+", icon: <Shield size={16} /> },
                { label: "Global Designers", value: "15+", icon: <Star size={16} /> }
              ].map((stat, i) => (
                <div key={i} className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                  <div className="flex items-center justify-center space-x-3 text-slate-400 mb-4 transition-transform group-hover:scale-110">
                    {stat.icon}
                    <span className="text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 tracking-tighter tabular-nums">{stat.value}</span>
                  </div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Culture CTA */}
      <section className="py-24 lg:py-48 container mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-6xl font-serif text-slate-900 mb-12 lowercase italic tracking-tight">Innovation through collaboration.</h2>
        <button
          onClick={() => onNavClick?.('about')}
          className="bg-slate-950 text-white px-12 py-5 rounded-none font-bold text-[10px] uppercase tracking-tight hover:bg-slate-800 transition-all active:scale-95 shadow-2xl relative overflow-hidden group"
        >
          <span className="relative z-10 transition-colors group-hover:text-white">Discover our Legacy</span>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        </button>
      </section>

    </div>
  );
};

export default TeamPage;
