
import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { SectionHero, Breadcrumbs, DisclosureModal } from './InvestorShared';

interface GovernanceViewProps {
  onBack: () => void;
  onLanding: () => void;
}

const GovernanceView: React.FC<GovernanceViewProps> = ({ onBack, onLanding }) => {
  const [isDisclosureOpen, setIsDisclosureOpen] = useState(false);
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 lg:gap-12">
          {sections.map((section, idx) => (
            <div key={idx} className="bg-[#F9F9F7] p-5 sm:p-8 lg:p-12 rounded-[32px] sm:rounded-[40px] border border-slate-100 shadow-sm transition-all duration-500 hover:border-slate-300">
              <h3 className="text-base sm:text-lg lg:text-2xl font-serif font-bold mb-4 sm:mb-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 bg-clip-text text-transparent">{section.title}</h3>
              <div className="space-y-2 sm:space-y-4">
                {section.items.map((item, i) => (
                  <button 
                    key={i} 
                    onClick={() => setIsDisclosureOpen(true)}
                    className="w-full flex items-center justify-between p-3.5 sm:p-5 bg-white rounded-xl sm:rounded-2xl border border-slate-100 hover:border-slate-900 hover:shadow-lg transition-all group text-left active:scale-[0.98]"
                  >
                    <span className="text-[11px] sm:text-sm font-bold text-slate-500 group-hover:text-slate-900 transition-colors uppercase tracking-tight">{item}</span>
                    <Download size={16} className="text-slate-300 group-hover:text-slate-900 shrink-0 ml-4 transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <DisclosureModal isOpen={isDisclosureOpen} onClose={() => setIsDisclosureOpen(false)} />
    </div>
  );
};

export default GovernanceView;
