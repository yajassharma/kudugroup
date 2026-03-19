
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import { SectionHero, Breadcrumbs } from './InvestorShared';

interface FinancialsViewProps {
  onBack: () => void;
  onLanding: () => void;
}

const FinancialsView: React.FC<FinancialsViewProps> = ({ onBack, onLanding }) => {
  const [activeTab, setActiveTab] = useState('results');
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
        <div className="flex flex-wrap border-b border-slate-100 mb-6 sm:mb-12">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm font-semibold transition-all relative ${
                activeTab === tab.id ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div 
                  layoutId="activeTab" 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600" 
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
              className="overflow-x-auto -mx-6 px-6 lg:mx-0 lg:px-0"
            >
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="px-4 py-4 sm:px-8 sm:py-6 text-xs font-bold text-slate-400">Financial Year</th>
                    <th className="px-4 py-4 sm:px-8 sm:py-6 text-xs font-bold text-slate-400">Q1</th>
                    <th className="px-4 py-4 sm:px-8 sm:py-6 text-xs font-bold text-slate-400">Q2</th>
                    <th className="px-4 py-4 sm:px-8 sm:py-6 text-xs font-bold text-slate-400">Q3</th>
                    <th className="px-4 py-4 sm:px-8 sm:py-6 text-xs font-bold text-slate-400">Q4</th>
                    <th className="px-4 py-4 sm:px-8 sm:py-6 text-xs font-bold text-slate-400">Full Year</th>
                  </tr>
                </thead>
                <tbody>
                  {financialData.map((row, idx) => (
                    <tr key={row.year} className={`border-b border-slate-50 hover:bg-slate-50/50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/20'}`}>
                      <td className="px-4 py-4 sm:px-8 sm:py-6 font-bold bg-gradient-to-br from-slate-900 to-slate-600 bg-clip-text text-transparent">{row.year}</td>
                      {['q1', 'q2', 'q3', 'q4'].map(q => (
                        <td key={q} className="px-4 py-4 sm:px-8 sm:py-6">
                          <button className="flex items-center text-indigo-600 hover:text-indigo-800 text-xs sm:text-sm font-medium group">
                            <FileText size={14} className="mr-2 opacity-50 group-hover:opacity-100" />
                            <span>View PDF</span>
                            <Download size={12} className="ml-2 opacity-0 group-hover:opacity-100 transition-all" />
                          </button>
                        </td>
                      ))}
                      <td className="px-4 py-4 sm:px-8 sm:py-6">
                        <button className="bg-slate-800 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-indigo-600 transition-colors">
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
              className="space-y-4"
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
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-6 lg:p-8 bg-white border border-slate-100 rounded-2xl hover:border-indigo-200 hover:shadow-md transition-all group gap-4">
                  <div>
                    <h4 className="text-base sm:text-lg font-serif font-bold mb-1 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 bg-clip-text text-transparent">{item.title}</h4>
                    <p className="text-[10px] sm:text-xs text-slate-400 font-medium">{item.date}</p>
                  </div>
                  <button className="flex items-center justify-center space-x-3 bg-slate-50 text-slate-600 px-4 py-2 sm:px-6 sm:py-3 rounded-xl hover:bg-indigo-600 hover:text-white transition-all font-bold text-xs">
                    <Download size={14} />
                    <span>Download PDF</span>
                  </button>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FinancialsView;
