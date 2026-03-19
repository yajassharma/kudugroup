
import React from 'react';
import { Download } from 'lucide-react';
import { SectionHero, Breadcrumbs } from './InvestorShared';

interface GovernanceViewProps {
  onBack: () => void;
  onLanding: () => void;
}

const GovernanceView: React.FC<GovernanceViewProps> = ({ onBack, onLanding }) => {
  const sections = [
    { title: 'Board of Directors', items: ['Composition of Board', 'Profile of Directors', 'Terms of Appointment'] },
    { title: 'Committees', items: ['Audit Committee', 'Stakeholders Relationship Committee', 'Nomination & Remuneration Committee', 'CSR Committee'] },
    { title: 'Policies', items: ['Whistle Blower Policy', 'Code of Conduct', 'Material Subsidiary Policy', 'Related Party Transaction Policy'] },
    { title: 'Corporate Governance Reports', items: ['Quarterly Compliance Reports', 'Annual Secretarial Audit Reports'] },
  ];

  return (
    <div className="bg-white min-h-screen pb-32">
      <SectionHero 
        title="Corporate Governance" 
        subtitle="Upholding the highest standards of integrity and accountability."
        image="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=2000"
      />
      <Breadcrumbs onBack={onBack} onLanding={onLanding} currentSubPage="governance" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-10 sm:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {sections.map((section, idx) => (
            <div key={idx} className="bg-[#F9F9F7] p-6 sm:p-8 lg:p-12 rounded-[40px] border border-slate-100">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold mb-6 sm:mb-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 bg-clip-text text-transparent">{section.title}</h3>
              <div className="space-y-3 sm:space-y-4">
                {section.items.map((item, i) => (
                  <button key={i} className="w-full flex items-center justify-between p-4 sm:p-5 bg-white rounded-2xl border border-slate-100 hover:border-indigo-600 hover:shadow-md transition-all group text-left">
                    <span className="text-xs sm:text-sm font-medium text-slate-600 group-hover:text-slate-900">{item}</span>
                    <Download size={16} className="text-slate-300 group-hover:text-indigo-600 shrink-0 ml-4" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GovernanceView;
