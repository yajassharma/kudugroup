
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ContactPageProps {
  onBack: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onBack }) => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#F9F9F7] pt-24 lg:pt-32 pb-16 lg:pb-20 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Refined Top-aligned Background Gradient & Texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-100/50 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-1/2 opacity-[0.02] pointer-events-none mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h100v100H0z\' fill=\'none\'/%3E%3Cpath d=\'M10 10h80v80H10z\' fill=\'%23000\' fill-opacity=\'.1\'/%3E%3C/svg%3E")' }} />
      
      {/* Soft Decorative Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-slate-200/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="mb-10 lg:mb-24 text-center lg:text-left relative z-10">
          <motion.button
            onClick={onBack}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="group inline-flex items-center space-x-3 text-slate-400 hover:text-slate-900 transition-all mb-8 lg:mb-12"
          >
            <div className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
              <ArrowRight className="rotate-180" size={14} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider">Return to Home</span>
          </motion.button>

          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-serif font-bold text-slate-900 leading-[0.9] tracking-tight mb-6">
            Let's weave <br />
            <span className="italic font-light text-slate-500 font-serif lowercase tracking-normal">something great.</span>
          </h1>
          <p className="text-slate-500 text-lg lg:text-xl max-w-2xl font-medium leading-relaxed mx-auto lg:mx-0">
            From manufacturing partnerships to bespoke textile consulting—our global corporate team is at your service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 items-start">
          {/* Form Section */}
          <div className="lg:col-span-7 relative">
            <div className="bg-white rounded-[40px] lg:rounded-[48px] p-8 sm:p-10 lg:p-16 shadow-[0_40px_100px_rgba(0,0,0,0.04)] border border-slate-100 relative overflow-hidden transition-all duration-500 hover:shadow-[0_40px_120px_rgba(0,0,0,0.06)]">
              {formState === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center"
                >
                  <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-slate-100">
                    <CheckCircle2 className="text-slate-900" size={40} />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">Inquiry Received</h3>
                  <p className="text-slate-500 max-w-sm mx-auto text-lg leading-relaxed mb-10">
                    Thank you for your message. Our corporate relations desk will correspond within 48 business hours.
                  </p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="text-slate-900 font-bold text-[10px] uppercase tracking-widest hover:underline underline-offset-8 transition-all"
                  >
                    Send Another Letter
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    <div className="space-y-2 group">
                      <label className="text-[10px] font-bold uppercase text-slate-400 ml-1 tracking-wider transition-colors group-focus-within:text-slate-900">Professional Name</label>
                      <input
                        required
                        type="text"
                        placeholder="Johnathan Sterling"
                        className="w-full bg-transparent border-b border-slate-200 py-3 outline-none focus:border-slate-900 transition-all font-medium text-base lg:text-lg placeholder:text-slate-200"
                      />
                    </div>
                    <div className="space-y-2 group">
                      <label className="text-[10px] font-bold uppercase text-slate-400 ml-1 tracking-wider transition-colors group-focus-within:text-slate-900">Email Address</label>
                      <input
                        required
                        type="email"
                        placeholder="john@sterling.com"
                        className="w-full bg-transparent border-b border-slate-200 py-3 outline-none focus:border-slate-900 transition-all font-medium text-base lg:text-lg placeholder:text-slate-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    <div className="space-y-2 group">
                      <label className="text-[10px] font-bold uppercase text-slate-400 ml-1 tracking-wider transition-colors group-focus-within:text-slate-900">Nature of Inquiry</label>
                      <div className="relative">
                        <select className="w-full bg-transparent border-b border-slate-200 py-3 outline-none focus:border-slate-900 transition-all font-medium appearance-none text-base lg:text-lg cursor-pointer">
                          <option>Manufacturing Partnership</option>
                          <option>Retail & Intuitional Supply</option>
                          <option>International Golf Licensing</option>
                          <option>Investor Relations</option>
                          <option>Career Opportunities</option>
                        </select>
                        <ArrowRight size={14} className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 text-slate-300 pointer-events-none" />
                      </div>
                    </div>
                    <div className="space-y-2 group">
                      <label className="text-[10px] font-bold uppercase text-slate-400 ml-1 tracking-wider transition-colors group-focus-within:text-slate-900">Company (Optional)</label>
                      <input
                        type="text"
                        placeholder="Global Ventures Ltd."
                        className="w-full bg-transparent border-b border-slate-200 py-3 outline-none focus:border-slate-900 transition-all font-medium text-base lg:text-lg placeholder:text-slate-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 group">
                    <label className="text-[10px] font-bold uppercase text-slate-400 ml-1 tracking-wider transition-colors group-focus-within:text-slate-900">Correspondence Details</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Specify your requirements or inquiry details here..."
                      className="w-full bg-transparent border-b border-slate-200 py-3 outline-none focus:border-slate-900 transition-all font-medium resize-none text-base lg:text-lg placeholder:text-slate-200"
                    ></textarea>
                  </div>

                  <div className="space-y-6">
                    <button
                      disabled={formState === 'submitting'}
                      type="submit"
                      className="w-full bg-slate-900 text-white rounded-2xl py-5 lg:py-6 font-bold text-[10px] lg:text-xs uppercase tracking-wider hover:bg-slate-800 transition-all duration-300 shadow-lg active:scale-[0.98]"
                    >
                      {formState === 'submitting' ? 'Transmitting...' : 'Send Enquiry'}
                    </button>
                    
                    <p className="text-center text-[10px] text-slate-400 font-medium tracking-wide">
                      Our corporate relations team will contact you within 24 hours of your enquiry.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Info Section */}
          <div className="lg:col-span-5 space-y-12 lg:space-y-16 pt-6">
            <div className="space-y-8 lg:space-y-12">
              <h3 className="text-2xl lg:text-3xl font-serif font-bold text-slate-900 border-l-4 border-slate-900 pl-6">Corporate Office</h3>
              
              <div className="space-y-8 lg:space-y-10">
                {[
                  { 
                    icon: <MapPin size={20} />, 
                    label: 'HQ Address', 
                    value: 'B - XXXII , 1106/2, Rahon Road, Ludhiana - 141007 (PB.)',
                    sub: 'Corporate Headquarters & Manufacturing Hub'
                  },
                  { 
                    icon: <Phone size={20} />, 
                    label: 'Direct Line', 
                    value: '+91 (161) 500 0000',
                    sub: 'Availability: Mon – Sat, 9am – 6pm IST'
                  },
                  { 
                    icon: <Mail size={20} />, 
                    label: 'Digital Mail', 
                    value: 'info@kudugroup.com',
                    sub: 'For general and partnership inquiries'
                  },
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start space-x-6"
                  >
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-sm shrink-0 text-slate-400">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-1">{item.label}</p>
                      <p className="text-slate-900 font-bold text-base lg:text-lg leading-snug mb-1">{item.value}</p>
                      <p className="text-slate-400 text-[11px] font-medium leading-relaxed italic">{item.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Map Section */}
            <div className="space-y-6">
              <div className="rounded-[40px] overflow-hidden border border-slate-100 shadow-2xl h-[300px] lg:h-[350px] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.633854972983!2d75.87114631513545!3d30.91081598157518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a83746234567b%3A0x2c0448576d2f573!2sRahon%20Rd%2C%20Ludhiana%2C%20Punjab!5e0!3m2!1sen!2sin!4v1625123456789!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale contrast-[1.1] hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
