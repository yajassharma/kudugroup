import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface WholesaleTermsProps {
  onBack: () => void;
}

const WholesaleTerms: React.FC<WholesaleTermsProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-24 px-6 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center space-x-3 mb-12 group"
        >
          <div className="p-3 bg-black text-white rounded-full group-hover:bg-slate-800 transition-colors">
            <ArrowLeft size={18} />
          </div>
          <span className="text-sm font-medium text-slate-500 group-hover:text-black transition-colors">
            Back to Home
          </span>
        </button>

        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 mb-8">Wholesale Terms & Conditions</h1>
        
        <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-800 mt-8 mb-4">1. Minimum Order Requirements</h2>
          <p>To qualify for wholesale pricing, buyers must meet our Minimum Order Quantity (MOQ) and Minimum Order Value (MOV) requirements. These requirements vary by product category and are subject to change. Please contact our sales team for the current MOQ and MOV for your desired products.</p>

          <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-800 mt-8 mb-4">2. Pricing and Payment Terms</h2>
          <p>All prices are listed in INR unless otherwise specified. Wholesale prices are confidential and must not be shared with third parties. Payment terms are strictly net 30 days for approved accounts. Initial orders may require a deposit or full payment upfront. We accept bank transfers, letters of credit, and other approved payment methods.</p>

          <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-800 mt-8 mb-4">3. Shipping and Delivery</h2>
          <p>Shipping costs are the responsibility of the buyer unless otherwise negotiated. We will provide estimated delivery dates, but these are not guaranteed. Risk of loss and title for items pass to you upon our delivery to the carrier.</p>

          <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-800 mt-8 mb-4">4. Returns and Claims</h2>
          <p>Any claims for defects, damages, or shortages must be made in writing within 7 days of receipt of goods. Returns are only accepted with prior written authorization from Kudu Group. Custom or bespoke orders are non-returnable unless defective.</p>

          <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-800 mt-8 mb-4">5. Intellectual Property</h2>
          <p>Buyers are granted a limited, non-exclusive license to use Kudu Group's trademarks and marketing materials solely for the purpose of selling our products. Any other use requires explicit written permission.</p>

          <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-800 mt-8 mb-4">6. Termination</h2>
          <p>We reserve the right to terminate any wholesale account at our discretion, particularly in cases of policy violations, failure to meet minimums, or brand misrepresentation.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default WholesaleTerms;
