
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, CheckCircle2, Send } from 'lucide-react';
import { SectionHero, Breadcrumbs } from './InvestorShared';

interface ContactViewProps {
  onBack: () => void;
  onLanding: () => void;
}

const ContactView: React.FC<ContactViewProps> = ({ onBack, onLanding }) => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 2000);
  };

  return (
    <div className="bg-white min-h-screen pb-32">
      <SectionHero 
        title="Investor Contact" 
        subtitle="Direct channels for shareholder queries and regulatory compliance."
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=2000"
      />
      <Breadcrumbs onBack={onBack} onLanding={onLanding} currentSubPage="contact" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-10 sm:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-24">
          {[
            { title: 'Investor Relations Officer', name: 'Mr. Aman Sharma', designation: 'Head - Investor Relations', phone: '+91 (161) 500 1234', email: 'investors@kudugroup.com', address: 'B - XXXII , 1106/2, Turn Ghelewal, Rahon Road, Ludhiana - 141007 (PB.)' },
            { title: 'Compliance Officer', name: 'Ms. Priya Mehta', designation: 'Company Secretary', phone: '+91 (161) 500 5678', email: 'cs@kudugroup.com', address: 'B - XXXII , 1106/2, Turn Ghelewal, Rahon Road, Ludhiana - 141007 (PB.)' },
            { title: 'Registrar & Transfer Agent', name: 'Link Intime India Pvt. Ltd.', designation: 'Noble Heights, 1st Floor', phone: '+91 (22) 4918 6000', email: 'delhi@linkintime.co.in', address: 'C-101, 247 Park, LBS Marg, Vikhroli (West), Mumbai' },
          ].map((contact, idx) => (
            <div key={idx} className="bg-white p-6 sm:p-8 lg:p-10 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <h4 className="text-xs font-bold text-indigo-600 mb-4 sm:mb-6">{contact.title}</h4>
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <p className="text-lg sm:text-xl font-serif font-bold bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 bg-clip-text text-transparent">{contact.name}</p>
                  <p className="text-xs sm:text-sm text-slate-400 font-medium">{contact.designation}</p>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center text-slate-500 text-sm">
                    <Phone size={14} className="mr-3 text-slate-300 shrink-0" />
                    <span>{contact.phone}</span>
                  </div>
                  <div className="flex items-center text-slate-500 text-sm">
                    <Mail size={14} className="mr-3 text-slate-300 shrink-0" />
                    <span>{contact.email}</span>
                  </div>
                  <div className="flex items-start text-slate-500 text-sm">
                    <MapPin size={14} className="mr-3 mt-1 text-slate-300 shrink-0" />
                    <span>{contact.address}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#F9F9F7] rounded-[40px] p-6 sm:p-8 lg:p-16 border border-slate-100">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">Investor Query Form</h3>
              <p className="text-xs sm:text-sm text-slate-500">Please use this form for any specific queries related to your shareholding or company performance.</p>
            </div>

            {formState === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center"
              >
                <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="text-indigo-600" size={40} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4">Query Submitted</h3>
                <p className="text-slate-500 max-w-sm mx-auto">
                  Your query has been recorded. Our Investor Relations team will respond within 3 business days.
                </p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="mt-10 text-indigo-600 font-bold text-sm hover:underline"
                >
                  Submit another query
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 ml-1">Full Name</label>
                    <input required type="text" className="w-full bg-white border border-slate-100 rounded-2xl px-4 py-3 sm:px-6 sm:py-4 outline-none focus:border-indigo-600 transition-colors font-medium text-sm sm:text-base" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 ml-1">Folio No. / DP ID</label>
                    <input required type="text" className="w-full bg-white border border-slate-100 rounded-2xl px-4 py-3 sm:px-6 sm:py-4 outline-none focus:border-indigo-600 transition-colors font-medium text-sm sm:text-base" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 ml-1">Email Address</label>
                  <input required type="email" className="w-full bg-white border border-slate-100 rounded-2xl px-4 py-3 sm:px-6 sm:py-4 outline-none focus:border-indigo-600 transition-colors font-medium text-sm sm:text-base" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 ml-1">Query Details</label>
                  <textarea required rows={5} className="w-full bg-white border border-slate-100 rounded-2xl px-4 py-3 sm:px-6 sm:py-4 outline-none focus:border-indigo-600 transition-colors font-medium resize-none text-sm sm:text-base"></textarea>
                </div>
                <button 
                  disabled={formState === 'submitting'}
                  type="submit"
                  className="w-full bg-slate-800 text-white rounded-2xl py-4 sm:py-5 font-bold text-sm hover:bg-indigo-600 transition-all duration-300 flex items-center justify-center space-x-3 group"
                >
                  <span>{formState === 'submitting' ? 'Submitting...' : 'Submit Query'}</span>
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
