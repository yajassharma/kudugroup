
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  BarChart3, 
  Bell, 
  Info, 
  ShieldCheck, 
  Headphones, 
  ChevronRight, 
} from 'lucide-react';

import { SectionHero } from './investors/InvestorShared';
import FinancialsView from './investors/FinancialsView';
import AnnualReportsView from './investors/AnnualReportsView';
import AnnouncementsView from './investors/AnnouncementsView';
import InvestorInfoView from './investors/InvestorInfoView';
import GovernanceView from './investors/GovernanceView';
import ContactView from './investors/ContactView';

export type InvestorSubPage = 'landing' | 'financials' | 'annual-reports' | 'announcements' | 'info' | 'governance' | 'contact';

interface InvestorRelationsPageProps {
  onBack: () => void;
  initialSubPage?: InvestorSubPage;
}

const InvestorRelationsPage: React.FC<InvestorRelationsPageProps> = ({ onBack, initialSubPage = 'landing' }) => {
  const [currentSubPage, setCurrentSubPage] = useState<InvestorSubPage>(initialSubPage);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentSubPage]);

  const LandingView = () => {
    const sections = [
      { id: 'financials', title: 'Financials', desc: 'Quarterly results, investor presentations, and earnings call transcripts.', icon: <BarChart3 size={24} /> },
      { id: 'annual-reports', title: 'Annual Reports', desc: 'Comprehensive yearly performance reviews and statutory disclosures.', icon: <FileText size={24} /> },
      { id: 'announcements', title: 'Company Announcements', desc: 'Regulatory filings, board meeting notices, and general disclosures.', icon: <Bell size={24} /> },
      { id: 'info', title: 'Investor Information', desc: 'Shareholding patterns, company fact sheet, and listing details.', icon: <Info size={24} /> },
      { id: 'governance', title: 'Corporate Governance', desc: 'Board of directors, committees, policies, and code of conduct.', icon: <ShieldCheck size={24} /> },
      { id: 'contact', title: 'Investor Contact', desc: 'Direct contact details for investor relations and compliance officers.', icon: <Headphones size={24} /> },
    ];

    return (
      <div className="bg-[#F9F9F7] min-h-screen">
        <SectionHero 
          title="Investor Relations" 
          subtitle="Commitment to transparency, governance, and sustainable growth."
          image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {sections.map((section, idx) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setCurrentSubPage(section.id as InvestorSubPage)}
                className="group bg-white p-6 sm:p-8 rounded-xl border border-slate-200 hover:border-slate-800 transition-colors duration-500 cursor-pointer flex flex-col justify-between h-full"
              >
                <div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-slate-50 text-slate-600 flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-500">
                    {section.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium mb-3 text-slate-900 group-hover:text-black transition-colors">{section.title}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">{section.desc}</p>
                </div>
                <div className="flex items-center text-slate-900 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mt-auto">
                  <span className="relative overflow-hidden">
                    <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Explore Section</span>
                    <span className="inline-block absolute left-0 top-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0">Explore Section</span>
                  </span>
                  <ChevronRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <AnimatePresence mode="wait">
        {currentSubPage === 'landing' && <LandingView key="landing" />}
        {currentSubPage === 'financials' && <FinancialsView key="financials" onBack={onBack} onLanding={() => setCurrentSubPage('landing')} />}
        {currentSubPage === 'annual-reports' && <AnnualReportsView key="annual-reports" onBack={onBack} onLanding={() => setCurrentSubPage('landing')} />}
        {currentSubPage === 'announcements' && <AnnouncementsView key="announcements" onBack={onBack} onLanding={() => setCurrentSubPage('landing')} />}
        {currentSubPage === 'info' && <InvestorInfoView key="info" onBack={onBack} onLanding={() => setCurrentSubPage('landing')} />}
        {currentSubPage === 'governance' && <GovernanceView key="governance" onBack={onBack} onLanding={() => setCurrentSubPage('landing')} />}
        {currentSubPage === 'contact' && <ContactView key="contact" onBack={onBack} onLanding={() => setCurrentSubPage('landing')} />}
      </AnimatePresence>
    </motion.div>
  );
};

export default InvestorRelationsPage;
