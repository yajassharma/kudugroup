
import React from 'react';
import { Download } from 'lucide-react';
import { SectionHero, Breadcrumbs } from './InvestorShared';

interface AnnualReportsViewProps {
  onBack: () => void;
  onLanding: () => void;
}

const AnnualReportsView: React.FC<AnnualReportsViewProps> = ({ onBack, onLanding }) => {
  return (
    <div className="bg-white min-h-screen pb-32">
      <SectionHero 
        title="Annual Reports" 
        subtitle="Comprehensive reviews of our operational and financial performance."
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000"
      />
      <Breadcrumbs onBack={onBack} onLanding={onLanding} currentSubPage="annual-reports" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-10 sm:mt-20">
        <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="px-4 sm:px-6 lg:px-10 py-4 sm:py-6 text-xs font-bold text-slate-400">Financial Year</th>
                  <th className="px-4 sm:px-6 lg:px-10 py-4 sm:py-6 text-xs font-bold text-slate-400 text-right">Download</th>
                </tr>
              </thead>
              <tbody>
                {[
                  'FY 2023–24', 'FY 2022–23', 'FY 2021–22', 'FY 2020–21', 'FY 2019–20'
                ].map((year, idx) => (
                  <tr key={year} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                    <td className="px-4 sm:px-6 lg:px-10 py-4 sm:py-8 font-bold text-base sm:text-lg bg-gradient-to-br from-slate-900 to-slate-600 bg-clip-text text-transparent">{year}</td>
                    <td className="px-4 sm:px-6 lg:px-10 py-4 sm:py-8 text-right">
                      <button className="inline-flex items-center space-x-3 bg-slate-900 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-2xl hover:bg-indigo-600 transition-all font-bold text-xs shadow-lg">
                        <Download size={14} />
                        <span className="hidden sm:inline">Annual Report PDF</span>
                        <span className="sm:hidden">PDF</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnualReportsView;
