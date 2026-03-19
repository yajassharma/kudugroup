
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Squares from "./Squares";
import GradientText from "./GradientText";
import CountUp from "./CountUp";

interface HeroProps {
  startCounting?: boolean;
  onNavClick?: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ startCounting = true, onNavClick }) => {
  /* ---------- Scroll Animation Controls ---------- */
  const stickyRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: stickyRef,
    offset: ["start start", "end start"],
  });
  const [isFixed, setIsFixed] = useState(true);
  
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setIsFixed(v < 0.98);
  });

  return (
    <section className="relative w-full bg-white overflow-x-hidden">
      {/* Background animated grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none select-none"
        style={{
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 35%, transparent 0%, black 100%), linear-gradient(to bottom, black 0%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 35%, transparent 0%, black 100%), linear-gradient(to bottom, black 0%, black 40%, transparent 100%)",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      >
        <Squares
          direction="diagonal"
          speed={0.9}
          squareSize={90}
          borderColor="rgba(0,0,0,0.07)"
        />
      </div>

      {/* ================= STICKY SCROLL AREA ================= */}
      <div
        ref={stickyRef}
        className="relative w-full h-[67vh] lg:h-[79vh] flex items-start justify-center px-4 pt-20 lg:pt-50"
      >
        {/* Sticky element */}
        <motion.div
          className={`${isFixed ? "fixed top-20 lg:top-48" : "absolute top-0"} left-1/2 -translate-x-1/2 max-w-4xl w-full text-center z-10 px-4`}
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-8xl font-serif font-bold leading-tight text-slate-900 mb-2 flex flex-wrap items-center justify-center">
              <span className="mr-2 lg:mr-4">KUDU</span>

              <GradientText
                colors={["#FF9FFC","#BFC1C2","#0042aa"]}
                animationSpeed={3.5}
                showBorder={false}
                className="inline-flex !mx-0 pr-1"
              >
                <span className="font-light italic text-transparent pr-1">LEGACY</span>
              </GradientText>
            </h1>

            {/* Tagline */}
            <div className="flex items-center justify-center space-x-2 lg:space-x-3 text-[8px] lg:text-[14px] font-semibold text-slate-400 mb-4">
              <span>• EST. 1952 • TEXTILE CO. •</span>
            </div>

            {/* Description */}
            <p className="text-[11px] lg:text-base text-slate-500 font-medium leading-relaxed max-w-md lg:max-w-lg mx-auto mb-6 lg:mb-10">
              A vertically integrated industrial leader. From raw yarn to
              high-fashion retail, we define the global standard of textile
              excellence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavClick?.('visionaries')}
                className="px-8 lg:px-10 py-4 rounded-full bg-slate-900 text-white text-[10px] lg:text-xs font-bold uppercase shadow-2xl hover:bg-indigo-600 transition-colors duration-500"
              >
                About Kudu
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavClick?.('contact')}
                className="px-8 lg:px-10 py-4 rounded-full bg-white text-slate-800 border border-slate-200 text-[10px] lg:text-xs font-bold uppercase shadow-xl hover:bg-slate-900 hover:text-white transition-all duration-500"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ================= STATS PILL ================= */}
      <div className="relative z-30 w-full flex justify-center -mt-10 lg:-mt-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-5xl"
        >
          <div className="glass rounded-[32px] lg:rounded-[200px] p-6 lg:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.12),0_30px_80px_rgba(0,0,0,0.18)] border border-white/80 flex flex-col lg:flex-row justify-between items-center text-center gap-6 lg:gap-6 bg-white/450 backdrop-blur-0.5xl">
            <div className="flex-1 w-full lg:min-w-[120px]">
              <h4 className="text-3xl lg:text-6xl font-sans font-black text-slate-900">
                <CountUp from={0} to={377} duration={2} startWhen={startCounting} />+
              </h4>
              <p className="text-[9px] lg:text-[10px] font-bold text-black mt-1">
                Tons Monthly
              </p>
            </div>

            <div className="hidden lg:block w-px h-12 bg-slate-100"></div>

            <div className="flex-1 w-full lg:min-w-[120px]">
              <h4 className="text-3xl lg:text-6xl font-sans font-black text-slate-900">
                <CountUp from={0} to={500} duration={2} startWhen={startCounting} />K+
              </h4>
              <p className="text-[9px] lg:text-[10px] font-bold text-black mt-1">
                Units Yearly
              </p>
            </div>

            <div className="hidden lg:block w-px h-12 bg-slate-100"></div>

            <div className="flex-1 w-full lg:min-w-[120px]">
              <h4 className="text-3xl lg:text-6xl font-sans font-black text-slate-900">
                <CountUp from={0} to={72} duration={2} startWhen={startCounting} />+
              </h4>
              <p className="text-[9px] lg:text-[10px] font-bold text-black mt-1">
                Years Legacy
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ================= HERO VIDEO ================= */}
      <div className="relative z-20 w-full -mt-16 lg:-mt-14">
        <motion.div
          initial={{ opacity: 0, scale: 0.985 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="w-full overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] aspect-[4/3] lg:aspect-[28/12] min-h-[400px]"
        >
          <video
            src="https://www.kuduonline.com/banner/video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
