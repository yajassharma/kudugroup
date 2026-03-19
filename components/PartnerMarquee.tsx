
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const domainsRow1 = [
  "relianceretail.com",
  "pantaloons.com",
  "abfrl.com",
  "ajio.com",
  "zara.com",
  "myntra.com",
  "vishalmegamart.com",
  "damensch.com"
];

const domainsRow2 = [
  "vishalfabricsltd.com",
  "arvindfashions.com",
  "raymond.in",
  "manyavar.com",
  "reebok.com",
  "dmartindia.com",
  "adidas.com",
  "bazaarkolkata.com"
];

const BrandLogo: React.FC<{ domain: string }> = ({ domain }) => {
  // Clearbit migrated to logo.dev. 
  // We use img.logo.dev as the primary source and t1.gstatic.com (Google Favicon V2) as a robust fallback.
  const logoUrl = `https://img.logo.dev/${domain}?size=128`;
  const fallbackUrl = `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${domain}&size=128`;
  
  return (
    <div className="flex items-center space-x-3 lg:space-x-5 group px-6 lg:px-10 py-3 lg:py-5 transition-all duration-700">
      <div className="w-10 h-10 lg:w-16 lg:h-16 relative flex items-center justify-center">
        <img
          src={logoUrl}
          alt={domain}
          className="w-full h-full object-contain transition-all duration-700 drop-shadow-sm"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            // If logo.dev fails (often requires a token), try high-res Google favicon service
            if (target.src !== fallbackUrl) {
              target.src = fallbackUrl;
            } else {
              target.style.display = 'none';
            }
          }}
        />
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] lg:text-[12px] font-bold uppercase text-black/50 group-hover:text-black/80 transition-colors duration-500">
          {domain.split('.')[0].replace('industries', '').replace('fashions', '')}
        </span>
        <div className="h-[1px] w-0 group-hover:w-full bg-black/10 transition-all duration-700" />
      </div>
    </div>
  );
};

const PartnerMarquee: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 60, damping: 20, restDelta: 0.001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  // Translation mapping for rows to create parallax movement
  const x1 = useTransform(smoothProgress, [0, 1], ["5%", "-35%"]);
  const x2 = useTransform(smoothProgress, [0, 1], ["-35%", "5%"]);

  return (
    <div 
      ref={containerRef}
      className="w-full pt-0 pb-0 lg:pb-0 overflow-hidden bg-transparent relative z-30"
    >

      {/* Row 1: Forward Motion */}
      <div className="relative mb-6 lg:mb-12 flex">
        <motion.div 
          style={{ x: x1 }}
          className="flex whitespace-nowrap gap-8 lg:gap-12 items-center px-4"
        >
          {/* Tripled list for a denser, more infinite feeling marquee */}
          {[...domainsRow1, ...domainsRow1, ...domainsRow1].map((domain, i) => (
            <BrandLogo key={`${domain}-r1-${i}`} domain={domain} />
          ))}
        </motion.div>
      </div>

      {/* Row 2: Reverse Motion */}
      <div className="relative flex">
        <motion.div 
          style={{ x: x2 }}
          className="flex whitespace-nowrap gap-8 lg:gap-12 items-center px-4"
        >
          {[...domainsRow2, ...domainsRow2, ...domainsRow2].map((domain, i) => (
            <BrandLogo key={`${domain}-r2-${i}`} domain={domain} />
          ))}
        </motion.div>
      </div>

      {/* Edge Fading for Cinematic Transition */}
      <div className="absolute inset-y-0 left-0 w-20 lg:w-80 bg-gradient-to-r from-white via-white/70 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 lg:w-80 bg-gradient-to-l from-white via-white/70 to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default PartnerMarquee;
