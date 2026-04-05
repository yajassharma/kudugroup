
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

type Brand = {
  domain: string;
  label: string;
  customLogoUrl?: string;
  textOnly?: boolean;
  subtitle?: string;
};

const brands: Brand[] = [
  { domain: "pantaloons.com", label: "Pantaloons" },
  { domain: "relianceretail.com", label: "Reliance" },
  { domain: "arvindfashions.com", label: "Arvind" },
  { domain: "lee.com", label: "Lee" },
  { domain: "wrangler.com", label: "Wrangler" },
  {
    domain: "flyingmachine.in",
    label: "Flying Machine",
    customLogoUrl: "https://cdn13.nnnow.com/web-images/master/navtree_metaData/59b25446e4b091b52c6ce09b/1693994612611/06SEP23-FM-New-Logo-N-DSK-rev.png",
  },
  {
    domain: "aeropostale.com",
    label: "Aero",
    customLogoUrl: "https://cdn.brandfetch.io/idTafOuoDC/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1773048485991",
  },
  {
    domain: "arrow.com",
    label: "Arrow",
    customLogoUrl: "https://cdn02.nnnow.com/web-images/master/navtree_metaData/59b2886be4b0d70964ef273f/1663580462116/Logo_Arrow.png",
  },
  {
    domain: "vanheusenindia.com",
    label: "Van Heusen",
    customLogoUrl: "https://cdn.brandfetch.io/idinZAsgLA/w/162/h/29/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1772384662149",
  },
  { domain: "peterengland.com", label: "Peter England" },
  { domain: "reebok.com", label: "Reebok" },
  {
    domain: "ajile.in",
    label: "Ajile",
    textOnly: true,
    subtitle: "by Pantaloons",
  },
  {
    domain: "peregrineclothing.co.uk",
    label: "Peregrine",
    customLogoUrl: "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.peregrineclothing.co.uk&size=128",
  },
  {
    domain: "performax.in",
    label: "Performax",
    customLogoUrl: "https://cdn.jiocommerce.io/v2/yellow-queen-0c3fa9/features/free/original/theme-image-1726730974355.svg",
  },
  { domain: "montecarlo.in", label: "Monte Carlo" },
  { domain: "dmartindia.com", label: "Dmart" },
];

// Double the brands for half-scroll loop simulation
const allBrands = [...brands, ...brands];

const BrandItem: React.FC<{ brand: Brand }> = ({ brand }) => {
  const autoLogoUrl = `https://img.logo.dev/${brand.domain}?size=128`;
  const fallbackUrl = `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${brand.domain}&size=128`;
  const primaryUrl = brand.customLogoUrl ?? autoLogoUrl;

  return (
    <motion.div
      initial={{ scale: 0.7, opacity: 0.4 }}
      whileInView={{ scale: 1.6, opacity: 1 }}
      viewport={{ margin: "-5% -48% -5% -48%" }} // Extremely tight center vertical strip
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 30,
        mass: 1
      }}
      className="flex-shrink-0 flex flex-col items-center justify-center p-8 min-w-[200px] lg:min-w-[300px]"
    >
      <div className="w-20 lg:w-32 h-10 lg:h-16 relative flex items-center justify-center mb-3">
        {!brand.textOnly && (
          <img
            src={primaryUrl}
            alt={brand.label}
            className="max-w-full max-h-full object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (brand.customLogoUrl && target.src === brand.customLogoUrl) target.src = autoLogoUrl;
              else if (target.src !== fallbackUrl) target.src = fallbackUrl;
              else target.style.display = 'none';
            }}
          />
        )}
        {brand.textOnly && (
          <span className="text-xs lg:text-lg font-black uppercase text-slate-900 tracking-tighter leading-none">{brand.label}</span>
        )}
      </div>
      <span className="text-[10px] lg:text-[12px] font-bold uppercase text-slate-400 tracking-widest text-center whitespace-nowrap">
        {brand.label}
      </span>
    </motion.div>
  );
};

const PartnerMarquee: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Use a longer travel distance over a slightly taller container for slowing it down
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Spring transition to smooth out the scroll jitters
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 30, damping: 25 });

  // Slower movement: reducing the travel distance OR increasing the scroll height
  // Currently we go from -80% to 20%
  const xMove = useTransform(smoothProgress, [0, 1], ["-60%", "20%"]);

  return (
    <section
      ref={containerRef}
      className="relative w-full pt-12 pb-4 lg:pt-16 lg:pb-6 bg-white overflow-hidden"
    >
      {/* Elegant Centered Heading */}
      <div className="max-w-7xl mx-auto px-6 mb-4 lg:mb-8 text-center uppercase tracking-tighter">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-7xl font-serif font-bold text-slate-900 leading-[0.9] tracking-tighter uppercase"
        >
          Our Global
          <span className="italic font-light lowercase text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-slate-400 to-slate-300"> Trusted Partners</span>
        </motion.h2>
      </div>

      <div className="flex items-center min-h-[200px] lg:min-h-[300px] relative">
        {/* Decorative Overlays — scoped to logos only, not the heading */}
        <div className="absolute inset-y-0 left-0 w-16 lg:w-[400px] bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 lg:w-[400px] bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

        <motion.div
          style={{ x: xMove }}
          className="flex gap-4 lg:gap-0 items-center"
        >
          {allBrands.map((brand, i) => (
            <BrandItem
              key={`${brand.label}-${i}`}
              brand={brand}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerMarquee;
