
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import { SectionHero, Breadcrumbs, DisclosureModal } from './InvestorShared';

interface FinancialsViewProps {
  onBack: () => void;
  onLanding: () => void;
}

const FinancialsView: React.FC<FinancialsViewProps> = ({ onBack, onLanding }) => {
  const [activeTab, setActiveTab] = useState('results');
  const [isDisclosureOpen, setIsDisclosureOpen] = useState(false);
  const tabs = [
    { id: 'results', label: 'Quarterly Financial Results' },
    { id: 'presentations', label: 'Investor Presentations' },
    { id: 'press', label: 'Press Releases' },
    { id: 'transcripts', label: 'Earnings Call Transcripts' },
  ];

  const financialData = [
    { year: 'FY 2024–25', q1: 'View PDF', q2: 'View PDF', q3: 'View PDF', q4: 'View PDF' },
    { year: 'FY 2023–24', q1: 'View PDF', q2: 'View PDF', q3: 'View PDF', q4: 'View PDF' },
    { year: 'FY 2022–23', q1: 'View PDF', q2: 'View PDF', q3: 'View PDF', q4: 'View PDF' },
  ];

  return (
    <div className="bg-white min-h-screen pb-32">
      <SectionHero 
        title="Financials" 
        subtitle="Detailed financial performance reports and analysis."
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000"
      />
      <Breadcrumbs onBack={onBack} onLanding={onLanding} currentSubPage="financials" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-6 sm:mt-12">
        {/* Tab Navigation */}
        <div className="flex flex-nowrap overflow-x-auto hide-scrollbar border-b border-slate-100 mb-6 sm:mb-12 -mx-4 px-4 sm:mx-0 sm:px-0">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 sm:px-6 sm:py-4 text-[11px] sm:text-sm font-bold transition-all relative whitespace-nowrap ${
                activeTab === tab.id ? 'text-slate-900 font-bold' : 'text-slate-400 hover:text-slate-600 font-medium'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div 
                  layoutId="activeTab" 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900" 
                />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'results' && (
            <motion.div 
              key="results"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="overflow-x-auto premium-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0 rounded-2xl sm:rounded-[32px] border border-slate-100 lg:border-none"
            >
              <table className="w-full text-left border-collapse min-w-[600px] sm:min-w-[800px]">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-slate-100">
                    <th className="px-4 py-4 sm:px-8 sm:py-6 text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">Financial Year</th>
                    <th className="px-4 py-4 sm:px-8 sm:py-6 text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider text-center">Q1</th>
                    <th className="px-4 py-4 sm:px-8 sm:py-6 text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider text-center">Q2</th>
                    <th className="px-4 py-4 sm:px-8 sm:py-6 text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider text-center">Q3</th>
                    <th className="px-4 py-4 sm:px-8 sm:py-6 text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider text-center">Q4</th>
                    <th className="px-4 py-4 sm:px-8 sm:py-6 text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Full Year</th>
                  </tr>
                </thead>
                <tbody>
                  {financialData.map((row, idx) => (
                    <tr key={row.year} className={`border-b border-slate-50 hover:bg-slate-50/30 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/10'}`}>
                      <td className="px-4 py-4 sm:px-8 sm:py-6 font-bold text-sm sm:text-base border-r border-slate-50/50 bg-gradient-to-br from-slate-900 to-slate-600 bg-clip-text text-transparent">{row.year}</td>
                      {['q1', 'q2', 'q3', 'q4'].map(q => (
                        <td key={q} className="px-2 py-4 sm:px-8 sm:py-6 text-center">
                          <button 
                            onClick={() => setIsDisclosureOpen(true)}
                            className="inline-flex items-center text-slate-600 hover:text-slate-900 text-[11px] sm:text-sm font-medium group transition-colors"
                          >
                            <FileText size={14} className="mr-1.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                            <span>PDF</span>
                          </button>
                        </td>
                      ))}
                      <td className="px-4 py-4 sm:px-8 sm:py-6 text-right">
                        <button 
                          onClick={() => setIsDisclosureOpen(true)}
                          className="bg-slate-900 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-[10px] sm:text-xs font-bold hover:bg-slate-800 transition-all active:scale-95 shadow-sm"
                        >
                          Download
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          )}

          {(activeTab === 'presentations' || activeTab === 'press' || activeTab === 'transcripts') && (
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-3 sm:space-y-4"
            >
              {(activeTab === 'presentations' ? [
                { title: 'Investor Presentation – Q1 FY 2025', date: 'August 14, 2025' },
                { title: 'Investor Presentation – FY 2024 Annual Results', date: 'May 28, 2024' },
                { title: 'Investor Presentation – Q3 FY 2024', date: 'February 12, 2024' },
              ] : activeTab === 'press' ? [
                { title: 'Press Release – Kudu Group Announces Q1 FY25 Financial Results', date: 'August 14, 2025' },
                { title: 'Press Release – Strategic Expansion into Technical Textiles', date: 'July 05, 2025' },
                { title: 'Press Release – Board Recommends Final Dividend for FY24', date: 'May 28, 2024' },
              ] : [
                { title: 'Earnings Call Transcript – Q1 FY 2025', date: 'August 16, 2025' },
                { title: 'Earnings Call Transcript – Q4 FY 2024', date: 'May 30, 2024' },
                { title: 'Earnings Call Transcript – Q3 FY 2024', date: 'February 14, 2024' },
              ]).map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-6 lg:p-8 bg-white border border-slate-100 rounded-2xl hover:border-slate-300 hover:shadow-lg transition-all group gap-4">
                  <div>
                    <h4 className="text-sm sm:text-lg font-serif font-bold mb-1 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 bg-clip-text text-transparent">{item.title}</h4>
                    <p className="text-[10px] sm:text-xs text-slate-400 font-medium uppercase tracking-wider">{item.date}</p>
                  </div>
                  <button 
                    onClick={() => setIsDisclosureOpen(true)}
                    className="flex items-center justify-center space-x-2 bg-slate-50 text-slate-600 px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl hover:bg-slate-900 hover:text-white transition-all font-bold text-[11px] sm:text-xs uppercase tracking-wider active:scale-95 shadow-sm"
                  >
                    <Download size={14} />
                    <span>Download PDF</span>
                  </button>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <DisclosureModal isOpen={isDisclosureOpen} onClose={() => setIsDisclosureOpen(false)} />
    </div>
  );
};

export default FinancialsView;
