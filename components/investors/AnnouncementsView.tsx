
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Download } from 'lucide-react';
import { SectionHero, Breadcrumbs } from './InvestorShared';

interface AnnouncementsViewProps {
  onBack: () => void;
  onLanding: () => void;
}

const AnnouncementsView: React.FC<AnnouncementsViewProps> = ({ onBack, onLanding }) => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>('board');
  
  const sections = [
    { 
      id: 'board', 
      title: 'Notice of Board Meeting', 
      items: [
        { title: 'Notice of Board Meeting to consider Q1 FY25 Results', date: 'August 07, 2025' },
        { title: 'Notice of Board Meeting to consider FY24 Audited Results', date: 'May 20, 2024' },
      ]
    },
    { 
      id: 'reg30', 
      title: 'Submission under Regulation 30', 
      items: [
        { title: 'Disclosure under Reg 30 - Outcome of Board Meeting', date: 'August 14, 2025' },
        { title: 'Disclosure under Reg 30 - Appointment of Independent Director', date: 'June 15, 2025' },
      ]
    },
    { 
      id: 'general', 
      title: 'General Disclosures', 
      items: [
        { title: 'Newspaper Publication - Q1 FY25 Results', date: 'August 15, 2025' },
        { title: 'Intimation of Schedule of Analyst/Investor Meet', date: 'August 10, 2025' },
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-32">
      <SectionHero 
        title="Company Announcements" 
        subtitle="Regulatory filings and statutory disclosures for stakeholders."
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2000"
      />
      <Breadcrumbs onBack={onBack} onLanding={onLanding} currentSubPage="announcements" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-10 sm:mt-20 space-y-4 sm:space-y-6">
        {sections.map(section => (
          <div key={section.id} className="border border-slate-100 rounded-[32px] overflow-hidden">
            <button 
              onClick={() => setActiveAccordion(activeAccordion === section.id ? null : section.id)}
              className="w-full px-4 sm:px-6 lg:px-10 py-4 sm:py-6 lg:py-8 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors"
            >
              <h3 className="text-base sm:text-lg lg:text-xl font-serif font-bold text-left bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 bg-clip-text text-transparent">{section.title}</h3>
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-slate-100 flex items-center justify-center transition-transform duration-500 shrink-0 ml-4 ${activeAccordion === section.id ? 'rotate-180 bg-slate-900 text-white' : ''}`}>
                <ChevronRight size={16} className="rotate-90 sm:w-[18px] sm:h-[18px]" />
              </div>
            </button>
            <AnimatePresence>
              {activeAccordion === section.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="bg-slate-50/50 overflow-hidden"
                >
                  <div className="px-4 sm:px-6 lg:px-10 pb-6 sm:pb-10 pt-2 space-y-3 sm:space-y-4">
                    {section.items.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 sm:p-6 bg-white rounded-2xl border border-slate-100 group hover:border-indigo-200 transition-all gap-4">
                        <div>
                          <p className="text-xs sm:text-sm font-bold mb-1 bg-gradient-to-br from-slate-900 to-slate-600 bg-clip-text text-transparent">{item.title}</p>
                          <p className="text-[9px] sm:text-[10px] text-slate-400 font-medium uppercase">{item.date}</p>
                        </div>
                        <button className="text-indigo-600 hover:text-indigo-800 shrink-0">
                          <Download size={16} className="sm:w-[18px] sm:h-[18px]" />
                        </button>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementsView;
