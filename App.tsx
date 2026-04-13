
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Routes, Route, useNavigate, useLocation, useParams, Navigate } from 'react-router-dom';
import { X, ChevronRight, Linkedin, Quote } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import BusinessVerticals from './components/BusinessVerticals';
import BrandsSection, { BrandProduct, brands } from './components/BrandsSection';
import ClientsSection from './components/ClientsSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import ProductDetail from './components/ProductDetail';
import SmoothScroll from './components/SmoothScroll';
import ScrollToTop from './components/ScrollToTop';

import InvestorRelationsPage, { InvestorSubPage } from './components/InvestorRelationsPage';
import CSR from './components/CSR';
import Visionaries from './components/Visionaries';
import PartnerMarquee from './components/PartnerMarquee';
import SustainabilityPage from './components/SustainabilityPage';
import AboutPage from './components/AboutPage';
import TeamPage from './components/TeamPage';
import ContactPage from './components/ContactPage';
import PrivacyPolicy from './components/legal/PrivacyPolicy';
import TermsOfService from './components/legal/TermsOfService';
import WholesaleTerms from './components/legal/WholesaleTerms';

// Verticals
import VerticalsLanding, { VerticalID } from './components/verticals/VerticalsLanding';
import FabricProduction from './components/verticals/FabricProduction';
import PrintingProcessing from './components/verticals/PrintingProcessing';
import GarmentManufacturing from './components/verticals/GarmentManufacturing';
import EmbroideryFinishing from './components/verticals/EmbroideryFinishing';
import InfrastructureCapabilities from './components/verticals/InfrastructureCapabilities';
import GolfLicensing from './components/GolfLicensing';

const WavyDivider = () => (
  <div className="relative w-full h-24 lg:h-40 overflow-hidden bg-white -mb-px z-20 pointer-events-none">
    <svg 
      viewBox="0 0 1440 320" 
      preserveAspectRatio="none"
      className="absolute bottom-0 left-0 w-full h-full"
    >
      <path 
        fill="#f8fafc" 
        fillOpacity="1" 
        d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,122.7C672,128,768,192,864,208C960,224,1056,192,1152,170.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  </div>
);

const WavyBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
    <svg
      viewBox="0 0 1440 600"
      preserveAspectRatio="none"
      className="absolute top-1/2 left-0 -translate-y-1/2 w-[120%] h-[150%] -ml-[10%]"
    >
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => (
        <motion.path
          key={i}
          animate={{
            d: [
              `M-200 ${300 + i * 15} C 200 ${150 + i * 30}, 600 ${450 - i * 15}, 900 ${300 + i * 10} S 1400 ${150 + i * 25}, 1800 ${300 + i * 15}`,
              `M-200 ${300 + i * 15} C 200 ${450 - i * 15}, 600 ${150 + i * 30}, 900 ${300 + i * 10} S 1400 ${450 - i * 25}, 1800 ${300 + i * 15}`,
              `M-200 ${300 + i * 15} C 200 ${150 + i * 30}, 600 ${450 - i * 15}, 900 ${300 + i * 10} S 1400 ${150 + i * 25}, 1800 ${300 + i * 15}`
            ]
          }}
          transition={{
            duration: 12 + i * 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          stroke="rgba(147, 197, 253, 0.4)"
          strokeWidth="1.5"
          fill="transparent"
        />
      ))}
    </svg>
  </div>
);

interface MobileMenuItemProps {
  item: {
    name: string;
    id: string;
    isAccordion?: boolean;
    subItems?: { name: string; sub: string }[];
  };
  onNavClick: (id: string, subPage?: string) => void;
  menuItemVariants: Variants;
}

const MobileMenuItem: React.FC<MobileMenuItemProps> = ({ item, onNavClick, menuItemVariants }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.li
      key={item.id}
      variants={menuItemVariants}
      className={`group ${item.hideOnDesktop ? 'lg:hidden' : ''}`}
    >
      {item.isAccordion ? (
        <div className="space-y-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between group-hover:text-black/40 transition-colors text-black text-xl lg:text-3xl font-serif font-light tracking-tight text-left"
          >
            <span className="relative">{item.name}</span>
            <ChevronRight size={20} className={`transition-all duration-500 text-black/20 ${isOpen ? 'rotate-90' : ''}`} />
          </button>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden pl-6 space-y-4"
              >
                {item.subItems?.map(sub => (
                  <button
                    key={sub.sub}
                    onClick={() => onNavClick(item.id, sub.sub)}
                    className="block text-lg font-serif text-slate-500 hover:text-indigo-600 transition-colors"
                  >
                    {sub.name}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <button
          onClick={() => onNavClick(item.id)}
          className="w-full flex items-center justify-between group-hover:text-black/40 transition-colors text-black text-xl lg:text-3xl font-serif font-light tracking-tight text-left"
        >
          <span className="relative">
            {item.name}
            <motion.span
              className="absolute -bottom-1 left-0 h-px bg-black/30"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.4 }}
            />
          </span>
          <ChevronRight size={20} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-3 transition-all duration-500 text-black/20" />
        </button>
      )}
    </motion.li>
  );
};

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  // ESC key to close menu
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initial Load Timer - Increased to 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  // Section reveal animations
  useEffect(() => {
    if (!isLoading && location.pathname === '/') {
      const sections = gsap.utils.toArray('.reveal-section');
      sections.forEach((section: any) => {
        gsap.fromTo(section,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }
  }, [isLoading, location.pathname]);

  const menuVariants: Variants = {
    hidden: { x: '100%', opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 30,
        stiffness: 150,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: {
      x: '100%',
      opacity: 0,
      transition: {
        type: 'spring',
        damping: 35,
        stiffness: 200,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const menuItemVariants: Variants = {
    hidden: { x: 30, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: 20, opacity: 0 }
  };

  const handleNavClick = (id: string, subPage?: string) => {
    setIsMenuOpen(false);

    if (id === 'home') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (id === 'sustainability') {
      navigate('/sustainability');
      return;
    }

    if (id === 'contact') {
      navigate('/contact');
      return;
    }

    if (id === 'investor-relations') {
      const path = subPage && subPage !== 'landing' ? `/investors/${subPage}` : '/investors';
      navigate(path);
      return;
    }

    if (id === 'about') {
      navigate('/heritage');
      return;
    }

    if (id === 'visionaries' || id === 'team' || id === 'our-team') {
      navigate('/team');
      return;
    }

    if (id === 'verticals') {
      const path = subPage && subPage !== 'landing' ? `/verticals/${subPage}` : '/verticals';
      navigate(path);
      return;
    }

    if (id === 'privacy') {
      navigate('/legal/privacy');
      return;
    }
    if (id === 'terms') {
      navigate('/legal/terms');
      return;
    }
    if (id === 'wholesale') {
      navigate('/legal/wholesale');
      return;
    }

    if (id === 'brands') {
      if (subPage) {
        navigate(`/brands/${subPage.toLowerCase()}`);
        return;
      }
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('brands');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    // Direct scroll for home page sections
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = id === 'footer' ? document.querySelector('footer') : document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = id === 'footer' ? document.querySelector('footer') : document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProductClick = (product: BrandProduct) => {
    navigate(`/brands/${product.name.toLowerCase()}`);
  };


  const HomeView = () => (
    <motion.div
      key="home-view"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="snap-section">
        <Hero startCounting={!isLoading} onNavClick={handleNavClick} />
      </div>

      <div className="relative z-30">
        <PartnerMarquee />
      </div>

      <WavyDivider />

      <section id="capabilities" className="px-6 pt-12 pb-20 lg:pt-20 lg:pb-32 bg-[#f8fafc]">
        <BusinessVerticals onNavClick={handleNavClick} />
      </section>

      <section id="brands" className="px-6 pt-12 lg:pt-24 pb-0 bg-[#f8fafc]">
        <BrandsSection onProductClick={handleProductClick} />
      </section>

      <div className="snap-section">
        <GolfLicensing />
      </div>

      <div className="snap-section">
        <Visionaries />
      </div>

      <section id="csr" className="px-6 py-20 lg:py-32 bg-[#f8fafc]">
        <CSR onLearnMore={() => navigate('/sustainability')} />
      </section>

      <section id="testimonials" className="px-6 py-20 lg:py-32 bg-slate-50/50 rounded-[50px] mx-6 mb-24 overflow-hidden relative shadow-sm border border-black/5">
        <Testimonials />
      </section>

      <section className="py-24 lg:py-42 px-6 bg-black relative overflow-hidden">
        <WavyBackground />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Quote size={56} className="mx-auto text-white/50 mb-10" />
          <h2 className="text-xl md:text-3xl lg:text-5xl font-serif font-light italic text-white/80 leading-tight">
            "At Kudu, we don't just manufacture textiles; we engineer the fabric of global commerce with a heritage of trust and innovation."
          </h2>
          <div className="mt-12 flex items-center justify-center space-x-3 text-[13px] text-white/40">
            <span>Corporate Ethos • Since 1969</span>
          </div>
        </div>
      </section>
    </motion.div>
  );

  const VerticalsView = () => {
    const { id } = useParams<{ id: string }>();
    const activeVertical = (id || 'landing') as VerticalID | 'landing';

    return (
      <div key="verticals-view">
        {activeVertical === 'landing' && <VerticalsLanding onVerticalClick={(vid) => navigate(`/verticals/${vid}`)} onBack={() => navigate('/')} />}
        {activeVertical === 'fabric-production' && <FabricProduction onBack={() => navigate('/verticals')} onNext={() => navigate('/verticals/printing-processing')} onContactClick={() => navigate('/contact')} />}
        {activeVertical === 'printing-processing' && <PrintingProcessing onBack={() => navigate('/verticals')} onNext={() => navigate('/verticals/garment-manufacturing')} onContactClick={() => navigate('/contact')} />}
        {activeVertical === 'garment-manufacturing' && <GarmentManufacturing onBack={() => navigate('/verticals')} onNext={() => navigate('/verticals/embroidery-finishing')} onContactClick={() => navigate('/contact')} />}
        {activeVertical === 'embroidery-finishing' && <EmbroideryFinishing onBack={() => navigate('/verticals')} onNext={() => navigate('/verticals/infrastructure-capabilities')} onContactClick={() => navigate('/contact')} />}
        {activeVertical === 'infrastructure-capabilities' && <InfrastructureCapabilities onBack={() => navigate('/verticals')} onNext={() => navigate('/verticals/fabric-production')} onContactClick={() => navigate('/contact')} />}
      </div>
    );
  };

  const InvestorView = () => {
    const { subpage } = useParams<{ subpage: string }>();
    const irSubPage = (subpage || 'landing') as InvestorSubPage;

    return (
      <InvestorRelationsPage
        key="investor-view"
        initialSubPage={irSubPage}
        onBack={() => navigate('/')}
        onNavClick={handleNavClick}
      />
    );
  };

  const BrandView = () => {
    const { brandId } = useParams<{ brandId: string }>();
    const brand = brands.find(b => b.name.toLowerCase() === brandId?.toLowerCase());

    if (!brand) return <Navigate to="/" />;

    return (
      <ProductDetail
        key="detail-view"
        product={brand}
        onBack={() => navigate('/')}
        onNavClick={handleNavClick}
      />
    );
  };

  const LegalView = () => {
    const { type } = useParams<{ type: string }>();
    if (type === 'privacy') return <PrivacyPolicy key="privacy-view" onBack={() => navigate('/')} />;
    if (type === 'terms') return <TermsOfService key="terms-view" onBack={() => navigate('/')} />;
    if (type === 'wholesale') return <WholesaleTerms key="wholesale-view" onBack={() => navigate('/')} />;
    return <Navigate to="/" />;
  };

  return (
    <div className="relative min-h-screen text-black" ref={mainRef}>
      <SmoothScroll />
      <ScrollToTop />
      <AnimatePresence>
        {isLoading && <LoadingScreen key="initial-loader" />}
      </AnimatePresence>

      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        onNavClick={handleNavClick}
      />

      <main className={`relative z-10 transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <AnimatePresence mode="wait">
          <Routes location={location}>
            <Route path="/" element={<HomeView />} />
            <Route path="/heritage" element={<AboutPage key="about-view" onBack={() => navigate('/')} />} />
            <Route path="/team" element={<TeamPage key="team-view" onBack={() => navigate('/')} onNavClick={handleNavClick} />} />
            <Route path="/sustainability" element={<SustainabilityPage key="sustainability-view" onBack={() => navigate('/')} />} />
            <Route path="/contact" element={<ContactPage key="contact-view" onBack={() => navigate('/')} />} />
            <Route path="/verticals" element={<VerticalsView />} />
            <Route path="/verticals/:id" element={<VerticalsView />} />
            <Route path="/investors" element={<InvestorView />} />
            <Route path="/investors/:subpage" element={<InvestorView />} />
            <Route path="/brands/:brandId" element={<BrandView />} />
            <Route path="/legal/:type" element={<LegalView />} />
          </Routes>
        </AnimatePresence>
      </main>

      <div className="snap-section">
        <Footer onNavClick={handleNavClick} />
      </div>


      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-[100]"
            />
            <motion.nav
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 w-full max-w-[500px] bg-white z-[110] shadow-[-20px_0_60px_rgba(0,0,0,0.1)] flex flex-col"
            >
              <div className="p-8 lg:p-12 flex items-center justify-between border-b border-slate-50">
                <div>
                  <h2 className="font-serif text-[10px] font-bold text-slate-400 uppercase tracking-widest">Explore</h2>
                  <div className="h-px w-8 bg-indigo-600 mt-2" />
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:bg-slate-100 rounded-full transition-all active:scale-90"
                >
                  <X size={24} strokeWidth={1.5} className="text-slate-400" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto custom-scrollbar p-8 lg:p-12">
                <ul className="space-y-6 lg:space-y-8">
                  {(() => {
                    const isMobile = windowWidth < 1024;
                    const menuItems = isMobile ? [
                      {
                        name: 'Our Verticals', id: 'verticals', isAccordion: true, subItems: [
                          { name: 'Fabric Production', sub: 'fabric-production' },
                          { name: 'Printing & Processing', sub: 'printing-processing' },
                          { name: 'Garment Manufacturing', sub: 'garment-manufacturing' },
                          { name: 'Embroidery & Finishing', sub: 'embroidery-finishing' },
                          { name: 'Infrastructure', sub: 'infrastructure-capabilities' }
                        ]
                      },
                      {
                        name: 'Investor Relations', id: 'investor-relations', isAccordion: true, subItems: [
                          { name: 'Financials', sub: 'financials' },
                          { name: 'Annual Reports', sub: 'annual-reports' },
                          { name: 'Announcements', sub: 'announcements' },
                          { name: 'Investor Info', sub: 'info' },
                          { name: 'Governance', sub: 'governance' },
                          { name: 'Contact', sub: 'contact' }
                        ]
                      },
                      {
                        name: 'Our D2C Brands', id: 'brands', isAccordion: true, subItems: [
                          { name: 'Idhu', sub: 'idhu' },
                          { name: 'Poker', sub: 'poker' },
                          { name: 'Golfbuyindia', sub: 'golfbuyindia' }
                        ]
                      },
                      { name: 'About Us', id: 'about' },
                      { name: 'Our Team', id: 'team' },
                      { name: 'Sustainability', id: 'sustainability' },
                      { name: 'Contact Us', id: 'contact' }
                    ] : [
                      { name: 'About Us', id: 'about' },
                      {
                        name: 'Our D2C Brands', id: 'brands', isAccordion: true, subItems: [
                          { name: 'Idhu', sub: 'idhu' },
                          { name: 'Poker', sub: 'poker' },
                          { name: 'Golfbuyindia', sub: 'golfbuyindia' }
                        ]
                      },
                      { name: 'Our Team', id: 'team' },
                      { name: 'Sustainability', id: 'sustainability' },
                      { name: 'Contact Us', id: 'contact' }
                    ];

                    return menuItems.map((item: any) => (
                      <MobileMenuItem
                        key={item.id}
                        item={item}
                        onNavClick={handleNavClick}
                        menuItemVariants={menuItemVariants}
                      />
                    ));
                  })()}
                </ul>
              </div>

              <div className="p-8 lg:p-12 border-t border-slate-50 bg-slate-50/30">
                <p className="text-[10px] font-bold text-slate-400">
                  © 2026 KUDU GROUP OF COMPANIES
                </p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
