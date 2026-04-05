
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
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
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<BrandProduct | null>(null);
  const [showSustainability, setShowSustainability] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showWholesale, setShowWholesale] = useState(false);
  const [showInvestorRelations, setShowInvestorRelations] = useState(false);
  const [showVerticals, setShowVerticals] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showTeam, setShowTeam] = useState(false);
  const [activeVertical, setActiveVertical] = useState<VerticalID | 'landing'>('landing');
  const [irSubPage, setIrSubPage] = useState<InvestorSubPage>('landing');
  const [isIRAccordionOpen, setIsIRAccordionOpen] = useState(false);
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
    if (!isLoading && !selectedProduct) {
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
  }, [isLoading, selectedProduct]);

  const handleNavClick = (id: string, subPage?: string) => {
    setIsMenuOpen(false);

    if (id === 'home') {
      handleBackToHome();
      if ((window as any).scrollToTop) (window as any).scrollToTop();
      else window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (id === 'sustainability') {
      handleSustainabilityClick();
      return;
    }

    if (id === 'contact') {
      handleContactClick();
      return;
    }

    if (id === 'investor-relations') {
      handleInvestorRelationsClick(subPage as InvestorSubPage || 'landing');
      return;
    }

    if (id === 'about') {
      handleAboutClick();
      return;
    }

    if (id === 'visionaries' || id === 'team' || id === 'our-team') {
      handleTeamClick();
      return;
    }

    if (id === 'verticals') {
      handleVerticalsClick(subPage as VerticalID || 'landing');
      return;
    }

    if (id === 'privacy') {
      handleLegalClick('privacy');
      return;
    }
    if (id === 'terms') {
      handleLegalClick('terms');
      return;
    }
    if (id === 'wholesale') {
      handleLegalClick('wholesale');
      return;
    }

    if (id === 'brands') {
      if (subPage) {
        // Find the brand by name (subPage)
        const brand = brands.find(b => b.name.toLowerCase() === subPage.toLowerCase());
        if (brand) {
          setSelectedProduct(brand);
          setShowSustainability(false);
          setShowContact(false);
          setIsMenuOpen(false);
          if ((window as any).scrollToTop) (window as any).scrollToTop();
          else window.scrollTo({ top: 0, behavior: 'instant' });
          return;
        }
      }
      setIsMenuOpen(false);
      handleBackToHome();
      setTimeout(() => {
        const el = document.getElementById('brands');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    if (selectedProduct || showSustainability || showContact || showInvestorRelations || showVerticals || showPrivacy || showTerms || showWholesale || showAbout || showTeam) {
      handleBackToHome();
      // Fast scroll after state reset
      setTimeout(() => {
        const el = id === 'footer' ? document.querySelector('footer') : document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    // Direct scroll for home page sections
    const el = id === 'footer' ? document.querySelector('footer') : document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProductClick = (product: BrandProduct) => {
    setSelectedProduct(product);
    setShowSustainability(false);
    setShowContact(false);
    if ((window as any).scrollToTop) (window as any).scrollToTop();
    else window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleSustainabilityClick = () => {
    setShowSustainability(true);
    setSelectedProduct(null);
    setShowContact(false);
    if ((window as any).scrollToTop) (window as any).scrollToTop();
    else window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleContactClick = () => {
    setShowContact(true);
    setShowSustainability(false);
    setShowInvestorRelations(false);
    setSelectedProduct(null);
    if ((window as any).scrollToTop) (window as any).scrollToTop();
    else window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleInvestorRelationsClick = (subPage: InvestorSubPage = 'landing') => {
    setShowInvestorRelations(true);
    setIrSubPage(subPage);
    setShowContact(false);
    setShowSustainability(false);
    setShowVerticals(false);
    setSelectedProduct(null);
    if ((window as any).scrollToTop) (window as any).scrollToTop();
    else window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleVerticalsClick = (vertical: VerticalID | 'landing' = 'landing') => {
    setShowVerticals(true);
    setActiveVertical(vertical);
    setShowInvestorRelations(false);
    setShowContact(false);
    setShowSustainability(false);
    setSelectedProduct(null);
    if ((window as any).scrollToTop) (window as any).scrollToTop();
    else window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleLegalClick = (page: 'privacy' | 'terms' | 'wholesale') => {
    setShowPrivacy(page === 'privacy');
    setShowTerms(page === 'terms');
    setShowWholesale(page === 'wholesale');

    setShowSustainability(false);
    setShowContact(false);
    setShowInvestorRelations(false);
    setShowVerticals(false);
    setSelectedProduct(null);
    if ((window as any).scrollToTop) (window as any).scrollToTop();
    else window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleAboutClick = () => {
    setShowAbout(true);
    setShowVerticals(false);
    setShowInvestorRelations(false);
    setShowContact(false);
    setShowSustainability(false);
    setSelectedProduct(null);
    if ((window as any).scrollToTop) (window as any).scrollToTop();
    else window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleTeamClick = () => {
    setShowTeam(true);
    setShowAbout(false);
    setShowVerticals(false);
    setShowInvestorRelations(false);
    setShowContact(false);
    setShowSustainability(false);
    setSelectedProduct(null);
    if ((window as any).scrollToTop) (window as any).scrollToTop();
    else window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBackToHome = () => {
    setSelectedProduct(null);
    setShowSustainability(false);
    setShowContact(false);
    setShowPrivacy(false);
    setShowTerms(false);
    setShowWholesale(false);
    setShowInvestorRelations(false);
    setShowVerticals(false);
    setShowAbout(false);
    setShowTeam(false);
    if ((window as any).scrollToTop) (window as any).scrollToTop();
    else window.scrollTo({ top: 0, behavior: 'instant' });
  };

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

  return (
    <div className="relative min-h-screen text-black" ref={mainRef}>
      <SmoothScroll />
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
          {!selectedProduct && !showSustainability && !showContact && !showInvestorRelations && !showVerticals && !showPrivacy && !showTerms && !showWholesale && !showAbout && !showTeam ? (
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
                <CSR onLearnMore={handleSustainabilityClick} />
              </section>

              <section id="testimonials" className="px-6 py-20 lg:py-32 bg-slate-50/50 rounded-[50px] mx-6 mb-24 overflow-hidden relative shadow-sm border border-black/5">
                <Testimonials />
              </section>

              {/* Vision Statement Section - Now at the end of the page */}
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
          ) : showSustainability ? (
            <SustainabilityPage
              key="sustainability-view"
              onBack={handleBackToHome}
            />
          ) : showContact ? (
            <ContactPage
              key="contact-view"
              onBack={handleBackToHome}
            />
          ) : showInvestorRelations ? (
            <InvestorRelationsPage
              key="investor-view"
              initialSubPage={irSubPage}
              onBack={handleBackToHome}
            />
          ) : showVerticals ? (
            <div key="verticals-view">
              {activeVertical === 'landing' && <VerticalsLanding onVerticalClick={(id) => handleVerticalsClick(id)} onBack={() => handleBackToHome()} />}
              {activeVertical === 'fabric-production' && <FabricProduction onBack={() => handleVerticalsClick('landing')} onNext={() => handleVerticalsClick('printing-processing')} onContactClick={() => handleNavClick('contact')} />}
              {activeVertical === 'printing-processing' && <PrintingProcessing onBack={() => handleVerticalsClick('landing')} onNext={() => handleVerticalsClick('garment-manufacturing')} onContactClick={() => handleNavClick('contact')} />}
              {activeVertical === 'garment-manufacturing' && <GarmentManufacturing onBack={() => handleVerticalsClick('landing')} onNext={() => handleVerticalsClick('embroidery-finishing')} onContactClick={() => handleNavClick('contact')} />}
              {activeVertical === 'embroidery-finishing' && <EmbroideryFinishing onBack={() => handleVerticalsClick('landing')} onNext={() => handleVerticalsClick('infrastructure-capabilities')} onContactClick={() => handleNavClick('contact')} />}
              {activeVertical === 'infrastructure-capabilities' && <InfrastructureCapabilities onBack={() => handleVerticalsClick('landing')} onNext={() => handleVerticalsClick('fabric-production')} onContactClick={() => handleNavClick('contact')} />}
            </div>
          ) : showPrivacy ? (
            <PrivacyPolicy key="privacy-view" onBack={handleBackToHome} />
          ) : showTerms ? (
            <TermsOfService key="terms-view" onBack={handleBackToHome} />
          ) : showWholesale ? (
            <WholesaleTerms key="wholesale-view" onBack={handleBackToHome} />
          ) : showAbout ? (
            <AboutPage key="about-view" onBack={handleBackToHome} />
          ) : showTeam ? (
            <TeamPage key="team-view" onBack={handleBackToHome} onNavClick={handleNavClick} />
          ) : (
            <ProductDetail
              key="detail-view"
              product={selectedProduct!}
              onBack={() => setSelectedProduct(null)}
              onNavClick={handleNavClick}
            />
          )}
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
