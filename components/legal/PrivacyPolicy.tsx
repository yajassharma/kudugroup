import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
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

        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-800 mt-8 mb-4">1. Introduction</h2>
          <p>Welcome to Kudu Group. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>

          <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-800 mt-8 mb-4">2. The Data We Collect About You</h2>
          <p>Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Identity Data</strong> includes first name, maiden name, last name, username or similar identifier, title, date of birth and gender.</li>
            <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-800 mt-8 mb-4">3. How We Use Your Personal Data</h2>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-800 mt-8 mb-4">4. Data Security</h2>
          <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>

          <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-800 mt-8 mb-4">5. Contact Us</h2>
          <p>If you have any questions about this privacy policy or our privacy practices, please contact us at our registered office.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
