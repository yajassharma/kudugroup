
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Visionary {
  name: string;
  role: string;
  about: string;
  qualities: string[];
  image: string;
}

const visionaries: Visionary[] = [
  {
    name: "Mr. Gaurav Mittal",
    role: "Managing Director",
    about: "Visionary leader driving Kudu’s vertical integration, innovation, and large-scale manufacturing excellence. Focused on building a globally competitive textile ecosystem with strong operational control and long-term brand value.",
    qualities: ["Strategic Expansion", "Operational Excellence", "Industry Leadership"],
    image: "https://ik.imagekit.io/yajas/Gemini_Generated_Image_tjghabtjghabtjgh.png"
  },
  {
    name: "Mr. Ganga Bishan Mittal",
    role: "Director",
    about: "A guiding force behind Kudu Industries, bringing decades of experience in the textile sector and a steadfast commitment to quality and ethical business practices.",
    qualities: ["Industry Experience", "Ethical Leadership", "Strategic Oversight"],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Mrs. Shilpa Mittal",
    role: "Director",
    about: "Driving brand identity, retail expansion, and positioning of Kudu’s in-house labels including Idhu, Poker, and Golfwear. Focused on blending textile expertise with modern consumer demand.",
    qualities: ["Brand Development", "Market Positioning", "Creative Direction"],
    image: "https://ik.imagekit.io/yajas/Gemini_Generated_Image_1g94a41g94a41g94.png"
  },
  {
    name: "Mr. Idhant Mittal",
    role: "Director – Business Innovation & Growth",
    about: "Representing the next generation of leadership, focusing on digital transformation, scalability, and modernizing Kudu’s global presence through technology and new-age strategy.",
    qualities: ["Digital Transformation", "Growth Strategy", "Future Vision"],
    image: "https://ik.imagekit.io/yajas/Gemini_Generated_Image_etfe4cetfe4cetfe.png"
  }
];

const Visionaries: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % visionaries.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + visionaries.length) % visionaries.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const current = visionaries[currentIndex];

  return (
    <section id="visionaries" className="relative py-4 lg:py-10 px-6 overflow-hidden bg-[#F9F9F7]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-blue-100/40 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[60%] bg-indigo-100/40 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Mobile Heading (Visible only on mobile) */}
        <div className="lg:hidden text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mb-2 leading-tight">
            The Visionaries <span className="italic font-light text-slate-500">Behind Kudu</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 lg:gap-16 items-center">
          
          {/* LEFT SIDE: Content */}
          <div className="order-2 lg:order-1">
            {/* Desktop Heading (Hidden on mobile) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="hidden lg:block"
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                The Visionaries <br />
                <span className="italic font-light text-slate-500">Behind Kudu</span>
              </h2>
              <p className="text-base lg:text-lg text-slate-600 font-medium leading-relaxed mb-12 max-w-xl">
                A legacy built on trust, driven by innovation, and led by a commitment to global excellence in textiles.
              </p>
            </motion.div>

            <div className="relative min-h-[300px] lg:min-h-[350px] text-center lg:text-left">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -20 : 20 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="space-y-8"
                >
                  <div>
                    <h3 className="text-2xl lg:text-4xl font-serif font-bold text-slate-900 mb-2">
                      {current.name}
                    </h3>
                    <p className="text-sm lg:text-base font-semibold text-indigo-600">
                      {current.role}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-medium leading-relaxed max-w-lg">
                    {current.about}
                  </p>

                  <div className="space-y-3 pt-4">
                    {current.qualities.map((quality, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                        <span className="text-xs sm:text-sm lg:text-base font-semibold text-slate-700">
                          {quality}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Dots */}
            <div className="flex items-center space-x-4 mt-12">
              {visionaries.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    idx === currentIndex ? 'w-12 bg-black' : 'w-3 bg-black/10 hover:bg-black/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: 3D Carousel Portraits */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end items-center h-[300px] lg:h-[850px]">
            <div className="relative w-full h-full flex justify-center lg:justify-end items-center" style={{ perspective: "1200px" }}>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  initial={{ 
                    opacity: 0, 
                    x: 100, 
                    z: -200, 
                    rotateY: 45 
                  }}
                  animate={{ 
                    opacity: 1, 
                    x: 0, 
                    z: 0, 
                    rotateY: 0 
                  }}
                  exit={{ 
                    opacity: 0, 
                    x: -100, 
                    z: -200, 
                    rotateY: -45 
                  }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  className="absolute w-full h-full flex justify-center items-center"
                >
                  <div className="relative w-full h-full max-w-md lg:max-w-10xl">
                    <img
                      src={current.image}
                      alt={current.name}
                      className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                      referrerPolicy="no-referrer"
                    />
                    {/* Soft Shadow under portrait */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[60%] h-10 bg-black/5 blur-2xl rounded-full" />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Manual Navigation Arrows (Desktop Only) */}
              <div className="hidden lg:flex absolute bottom-0 left-1/2 -translate-x-1/2 space-x-6 z-20">
                <button 
                  onClick={prevSlide}
                  className="p-4 rounded-full border border-black/5 hover:bg-black hover:text-white transition-all duration-500 group"
                >
                  <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="p-4 rounded-full border border-black/5 hover:bg-black hover:text-white transition-all duration-500 group"
                >
                  <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Visionaries;
