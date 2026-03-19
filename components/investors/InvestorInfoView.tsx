
import React from 'react';
import { FileText } from 'lucide-react';
import { SectionHero, Breadcrumbs } from './InvestorShared';

interface InvestorInfoViewProps {
  onBack: () => void;
  onLanding: () => void;
}

const InvestorInfoView: React.FC<InvestorInfoViewProps> = ({ onBack, onLanding }) => {
  return (
    <div className="bg-white min-h-screen pb-32">
      <SectionHero 
        title="Investor Information" 
        subtitle="Key data points and shareholding details for our investors."
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"
      />
      <Breadcrumbs onBack={onBack} onLanding={onLanding} currentSubPage="info" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-10 sm:mt-20 space-y-12 sm:space-y-24">
        {/* Shareholding Pattern */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-10 gap-4">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 bg-clip-text text-transparent">Shareholding Pattern</h3>
            <div className="hidden sm:block h-px flex-grow mx-10 bg-slate-100" />
          </div>
          <div className="overflow-hidden rounded-[32px] border border-slate-100 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="px-4 py-4 sm:px-8 sm:py-6 text-xs font-bold text-slate-400">Financial Year</th>
                    <th className="px-4 py-4 sm:px-8 sm:py-6 text-xs font-bold text-slate-400">Q1</th>
                    <th className="px-4 py-4 sm:px-8 sm:py-6 text-xs font-bold text-slate-400">Q2</th>
                    <th className="px-4 py-4 sm:px-8 sm:py-6 text-xs font-bold text-slate-400">Q3</th>
                    <th className="px-4 py-4 sm:px-8 sm:py-6 text-xs font-bold text-slate-400">Q4</th>
                  </tr>
                </thead>
                <tbody>
                  {['FY 2024–25', 'FY 2023–24', 'FY 2022–23'].map((year, idx) => (
                    <tr key={year} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                      <td className="px-4 py-4 sm:px-8 sm:py-6 font-bold bg-gradient-to-br from-slate-900 to-slate-600 bg-clip-text text-transparent">{year}</td>
                      {[1, 2, 3, 4].map(q => (
                        <td key={q} className="px-4 py-4 sm:px-8 sm:py-6">
                          <button className="flex items-center text-indigo-600 hover:text-indigo-800 text-xs font-medium">
                            <FileText size={14} className="mr-2" />
                            <span>PDF</span>
                          </button>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Company Fact Sheet */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-10 gap-4">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 bg-clip-text text-transparent">Company Fact Sheet</h3>
            <div className="hidden sm:block h-px flex-grow mx-10 bg-slate-100" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
            <div className="space-y-6">
              {[
                { label: 'Date of Incorporation', value: '20-Mar-1990' },
                { label: 'Registered Office', value: 'B - XXXII , 1106/2, Turn Ghelewal, Rahon Road, Ludhiana - 141007 (PB.)' },
                { label: 'Corporate Office', value: 'B - XXXII , 1106/2, Turn Ghelewal, Rahon Road, Ludhiana - 141007 (PB.)' },
                { label: 'Corporate Identification Number (CIN)', value: 'U18101PB1990PLC010205' },
                { label: 'Date of Listing', value: 'October 24, 1994' },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col space-y-1 pb-6 border-b border-slate-50">
                  <span className="text-[10px] font-bold uppercase text-slate-400">{item.label}</span>
                  <span className="text-slate-800 font-medium">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {[
                { label: 'Managing Director', value: 'Mr. Gaurav Mittal (DIN: 01156416)' },
                { label: 'Director', value: 'Mr. Ganga Bishan Mittal' },
                { label: 'Director', value: 'Mrs. Shilpa Mittal' },
                { label: 'Director – Business Innovation & Growth', value: 'Mr. Idhant Mittal' },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col space-y-1 pb-6 border-b border-slate-50">
                  <span className="text-[10px] font-bold uppercase text-slate-400">{item.label}</span>
                  <span className="text-slate-800 font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InvestorInfoView;
