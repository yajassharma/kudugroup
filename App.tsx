
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
import BrandsSection, { BrandProduct } from './components/BrandsSection';
import ClientsSection from './components/ClientsSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import ProductDetail from './components/ProductDetail';
import InvestorRelationsPage, { InvestorSubPage } from './components/InvestorRelationsPage';
import CSR from './components/CSR';
import Visionaries from './components/Visionaries';
import PartnerMarquee from './components/PartnerMarquee';
import SustainabilityPage from './components/SustainabilityPage';
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
import ProtectiveTextiles from './components/verticals/ProtectiveTextiles';
import InfrastructureCapabilities from './components/verticals/InfrastructureCapabilities';

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
      className="group"
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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<BrandProduct | null>(null);
  const [showSustainability, setShowSustainability] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showWholesale, setShowWholesale] = useState(false);
  const [showInvestorRelations, setShowInvestorRelations] = useState(false);
  const [showVerticals, setShowVerticals] = useState(false);
  const [activeVertical, setActiveVertical] = useState<VerticalID | 'landing'>('landing');
  const [irSubPage, setIrSubPage] = useState<InvestorSubPage>('landing');
  const [isIRAccordionOpen, setIsIRAccordionOpen] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

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
              start: "top 85%",
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
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

    if (selectedProduct || showSustainability || showContact || showInvestorRelations || showVerticals || showPrivacy || showTerms || showWholesale) {
      handleBackToHome();
      // Delay scroll until transition finishes
      setTimeout(() => {
        const el = id === 'footer' ? document.querySelector('footer') : document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 3500);
      return;
    }

    setIsTransitioning(true);
    
    // Smooth scroll and end transition
    setTimeout(() => {
      const el = id === 'footer' ? document.querySelector('footer') : document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 2500);
    }, 1500);
  };

  const handleProductClick = (product: BrandProduct) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedProduct(product);
      setShowSustainability(false);
      setShowContact(false);
      setIsTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 3500);
  };

  const handleSustainabilityClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowSustainability(true);
      setSelectedProduct(null);
      setShowContact(false);
      setIsTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 3500);
  };

  const handleContactClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowContact(true);
      setShowSustainability(false);
      setShowInvestorRelations(false);
      setSelectedProduct(null);
      setIsTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 3500);
  };

  const handleInvestorRelationsClick = (subPage: InvestorSubPage = 'landing') => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowInvestorRelations(true);
      setIrSubPage(subPage);
      setShowContact(false);
      setShowSustainability(false);
      setShowVerticals(false);
      setSelectedProduct(null);
      setIsTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 3500);
  };

  const handleVerticalsClick = (vertical: VerticalID | 'landing' = 'landing') => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowVerticals(true);
      setActiveVertical(vertical);
      setShowInvestorRelations(false);
      setShowContact(false);
      setShowSustainability(false);
      setSelectedProduct(null);
      setIsTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 3500);
  };

  const handleLegalClick = (page: 'privacy' | 'terms' | 'wholesale') => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowPrivacy(page === 'privacy');
      setShowTerms(page === 'terms');
      setShowWholesale(page === 'wholesale');
      
      setShowSustainability(false);
      setShowContact(false);
      setShowInvestorRelations(false);
      setShowVerticals(false);
      setSelectedProduct(null);
      setIsTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 3500);
  };

  const handleBackToHome = () => { 
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedProduct(null);
      setShowSustainability(false);
      setShowContact(false);
      setShowPrivacy(false);
      setShowTerms(false);
      setShowWholesale(false);
      setShowInvestorRelations(false);
      setShowVerticals(false);
      setIsTransitioning(false);
    }, 3500);
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
      <AnimatePresence>
        {isLoading && <LoadingScreen key="initial-loader" />}
        {isTransitioning && <LoadingScreen key="transition-loader" isTransition={true} />}
      </AnimatePresence>

      <Header 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        onNavClick={handleNavClick} 
      />
      
      <main className={`relative z-10 transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <AnimatePresence mode="wait">
          {!selectedProduct && !showSustainability && !showContact && !showInvestorRelations && !showVerticals && !showPrivacy && !showTerms && !showWholesale ? (
            <motion.div
              key="home-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Hero startCounting={!isLoading} onNavClick={handleNavClick} />
              
              <div className="relative py-5 z-30">
                <PartnerMarquee />
              </div>

              {/* Vision Statement Section - Now with Wavy Background */}
              <section className="reveal-section py-24 lg:py-42 px-6 bg-black relative overflow-hidden">
                <WavyBackground />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                  <Quote size={56} className="mx-auto text-white/50 mb-10" />
                  <h2 className="text-xl md:text-3xl lg:text-5xl font-serif font-light italic text-white/80 leading-tight">
                    "At Kudu, we don't just manufacture textiles; we engineer the fabric of global commerce with a heritage of trust and innovation."
                  </h2>
                  <div className="mt-12 flex items-center justify-center space-x-3 text-[13px] text-white/40">
                    <span>Corporate Ethos • Since 1952</span>
                  </div>
                </div>
              </section>
              
              <section id="capabilities" className="reveal-section px-6 pt-12 pb-20 lg:pt-24 lg:pb-32">
                <BusinessVerticals />
              </section>

              <section id="brands" className="px-6 py-4 lg:py-0">
                <BrandsSection onProductClick={handleProductClick} />
              </section>

              <Visionaries />

              <section id="csr" className="reveal-section px-6 py-20 lg:py-32">
                <CSR onLearnMore={handleSustainabilityClick} />
              </section>

              <section id="testimonials" className="reveal-section px-6 py-20 lg:py-32 bg-slate-50/50 rounded-[50px] mx-6 mb-24 overflow-hidden relative shadow-sm border border-black/5">
                <Testimonials />
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
              {activeVertical === 'landing' && <VerticalsLanding onVerticalClick={(id) => handleVerticalsClick(id)} />}
              {activeVertical === 'fabric-production' && <FabricProduction onBack={() => handleVerticalsClick('landing')} onNext={() => handleVerticalsClick('printing-processing')} />}
              {activeVertical === 'printing-processing' && <PrintingProcessing onBack={() => handleVerticalsClick('landing')} onNext={() => handleVerticalsClick('garment-manufacturing')} />}
              {activeVertical === 'garment-manufacturing' && <GarmentManufacturing onBack={() => handleVerticalsClick('landing')} onNext={() => handleVerticalsClick('embroidery-finishing')} />}
              {activeVertical === 'embroidery-finishing' && <EmbroideryFinishing onBack={() => handleVerticalsClick('landing')} onNext={() => handleVerticalsClick('protective-textiles')} />}
              {activeVertical === 'protective-textiles' && <ProtectiveTextiles onBack={() => handleVerticalsClick('landing')} onNext={() => handleVerticalsClick('infrastructure-capabilities')} />}
              {activeVertical === 'infrastructure-capabilities' && <InfrastructureCapabilities onBack={() => handleVerticalsClick('landing')} onNext={() => handleVerticalsClick('fabric-production')} />}
            </div>
          ) : showPrivacy ? (
            <PrivacyPolicy key="privacy-view" onBack={handleBackToHome} />
          ) : showTerms ? (
            <TermsOfService key="terms-view" onBack={handleBackToHome} />
          ) : showWholesale ? (
            <WholesaleTerms key="wholesale-view" onBack={handleBackToHome} />
          ) : (
            <ProductDetail 
              key="detail-view"
              product={selectedProduct!} 
              onBack={handleBackToHome} 
            />
          )}
        </AnimatePresence>
      </main>

      <Footer onNavClick={handleNavClick} />

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/10 backdrop-blur-md z-[90]"
            />
            <motion.nav
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed right-0 top-0 h-full w-[90%] max-w-md bg-white z-[100] flex flex-col border-l border-slate-100 shadow-[-20px_0_60px_rgba(0,0,0,0.05)]"
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
                  {[
                    { name: 'Our Verticals', id: 'verticals', isAccordion: true, subItems: [
                      { name: 'Fabric Production', sub: 'fabric-production' },
                      { name: 'Printing & Processing', sub: 'printing-processing' },
                      { name: 'Garment Manufacturing', sub: 'garment-manufacturing' },
                      { name: 'Embroidery & Finishing', sub: 'embroidery-finishing' },
                      { name: 'Protective Textiles', sub: 'protective-textiles' },
                      { name: 'Infrastructure', sub: 'infrastructure-capabilities' }
                    ]},
                    { name: 'Investors', id: 'investor-relations', isAccordion: true, subItems: [
                      { name: 'Financials', sub: 'financials' },
                      { name: 'Annual Reports', sub: 'annual-reports' },
                      { name: 'Announcements', sub: 'announcements' },
                      { name: 'Investor Info', sub: 'info' },
                      { name: 'Governance', sub: 'governance' },
                      { name: 'Contact', sub: 'contact' }
                    ]},
                    { name: 'Our Team', id: 'visionaries' },
                    { name: 'D2C Ventures', id: 'brands' },
                    { name: 'Sustainability', id: 'sustainability' },
                    { name: 'Contact Us', id: 'contact' }
                  ].map((item) => (
                    <MobileMenuItem 
                      key={item.id} 
                      item={item} 
                      onNavClick={handleNavClick} 
                      menuItemVariants={menuItemVariants} 
                    />
                  ))}
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
