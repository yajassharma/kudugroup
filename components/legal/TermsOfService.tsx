import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface TermsOfServiceProps {
  onBack: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
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

        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-800 mt-8 mb-4">1. Agreement to Terms</h2>
          <p>By accessing or using our website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>

          <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-800 mt-8 mb-4">2. Use License</h2>
          <p>Permission is granted to temporarily download one copy of the materials (information or software) on Kudu Group's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Modify or copy the materials;</li>
            <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>Attempt to decompile or reverse engineer any software contained on Kudu Group's website;</li>
            <li>Remove any copyright or other proprietary notations from the materials; or</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-800 mt-8 mb-4">3. Disclaimer</h2>
          <p>The materials on Kudu Group's website are provided on an 'as is' basis. Kudu Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

          <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-800 mt-8 mb-4">4. Limitations</h2>
          <p>In no event shall Kudu Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Kudu Group's website, even if Kudu Group or a Kudu Group authorized representative has been notified orally or in writing of the possibility of such damage.</p>

          <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-800 mt-8 mb-4">5. Governing Law</h2>
          <p>These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TermsOfService;
