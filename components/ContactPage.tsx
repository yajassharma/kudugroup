
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
      className="min-h-screen bg-[#F9F9F7] pt-24 lg:pt-32 pb-16 lg:pb-20 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Decorative Floating Illustration */}
        <div className="absolute -top-10 -right-10 w-48 h-48 lg:-top-20 lg:-right-20 lg:w-96 lg:h-96 opacity-10 pointer-events-none select-none">
          <img 
            src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800" 
            alt="Abstract 3D Shape" 
            className="w-full h-full object-contain animate-pulse"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Header */}
        <div className="mb-10 lg:mb-24 text-center lg:text-left relative z-10">
          <motion.button
            onClick={onBack}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="group flex items-center justify-center lg:justify-start space-x-2 text-slate-400 hover:text-slate-800 transition-colors mb-6 lg:mb-8 mx-auto lg:mx-0"
          >
            <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-slate-800 transition-colors">
              <ArrowRight className="rotate-180" size={14} />
            </div>
            <span className="text-[10px] lg:text-xs font-medium uppercase tracking-wider">Back to Home</span>
          </motion.button>

          <h1 className="text-4xl sm:text-5xl lg:text-8xl font-serif font-bold text-slate-800 leading-[1] lg:leading-[0.9] mb-4 lg:mb-6">
            Let's weave <br />
            <span className="italic font-light text-indigo-600">something great.</span>
          </h1>
          <p className="text-slate-500 text-base lg:text-xl max-w-2xl font-medium leading-relaxed mx-auto lg:mx-0">
            Whether you're looking for a manufacturing partner or have a query about our retail labels, our team is ready to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20">
          {/* Form Section */}
          <div className="lg:col-span-7 relative">
            {/* Floating 3D Element */}
            <motion.div 
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -left-12 w-24 h-24 bg-indigo-100 rounded-3xl blur-2xl opacity-50 -z-10"
            />
            
            <div className="bg-white rounded-[32px] lg:rounded-[40px] p-6 sm:p-8 lg:p-12 shadow-[0_30px_100px_rgba(0,0,0,0.05)] border border-slate-100 relative overflow-hidden">
              {/* Subtle Background Pattern */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <img 
                  src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1000" 
                  alt="Pattern" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {formState === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-20 text-center"
                >
                  <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-indigo-600" size={40} />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-slate-800 mb-4">Message Received</h3>
                  <p className="text-slate-500 max-w-sm mx-auto">
                    Thank you for reaching out. Our corporate relations team will get back to you within 24-48 business hours.
                  </p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="mt-10 text-indigo-600 font-bold text-sm uppercase hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div className="space-y-1 lg:space-y-2">
                      <label className="text-[10px] font-bold uppercase text-slate-400 ml-1">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl lg:rounded-2xl px-4 py-3 lg:px-6 lg:py-4 outline-none focus:border-indigo-600 transition-colors font-medium text-sm lg:text-base"
                      />
                    </div>
                    <div className="space-y-1 lg:space-y-2">
                      <label className="text-[10px] font-bold uppercase text-slate-400 ml-1">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@company.com"
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl lg:rounded-2xl px-4 py-3 lg:px-6 lg:py-4 outline-none focus:border-indigo-600 transition-colors font-medium text-sm lg:text-base"
                      />
                    </div>
                  </div>

                  <div className="space-y-1 lg:space-y-2">
                    <label className="text-[10px] font-bold uppercase text-slate-400 ml-1">Subject</label>
                    <select className="w-full bg-slate-50 border border-slate-100 rounded-xl lg:rounded-2xl px-4 py-3 lg:px-6 lg:py-4 outline-none focus:border-indigo-600 transition-colors font-medium appearance-none text-sm lg:text-base">
                      <option>Manufacturing Partnership</option>
                      <option>Retail Inquiry</option>
                      <option>Investor Relations</option>
                      <option>Careers</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-1 lg:space-y-2">
                    <label className="text-[10px] font-bold uppercase text-slate-400 ml-1">Your Message</label>
                    <textarea 
                      required
                      rows={5}
                      placeholder="How can we help you?"
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl lg:rounded-2xl px-4 py-3 lg:px-6 lg:py-4 outline-none focus:border-indigo-600 transition-colors font-medium resize-none text-sm lg:text-base"
                    ></textarea>
                  </div>

                  <button 
                    disabled={formState === 'submitting'}
                    type="submit"
                    className="w-full bg-slate-800 text-white rounded-xl lg:rounded-2xl py-4 lg:py-5 font-bold text-xs lg:text-sm uppercase hover:bg-indigo-600 transition-all duration-300 flex items-center justify-center space-x-3 group"
                  >
                    <span>{formState === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                    <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Info Section */}
          <div className="lg:col-span-5 space-y-8 lg:space-y-12">
            {/* Visual Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-48 lg:h-64 rounded-2xl lg:rounded-[32px] overflow-hidden shadow-xl group"
            >
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Office" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-8">
                <p className="text-white font-serif italic text-lg">"Excellence in every interaction."</p>
              </div>
            </motion.div>

            <div>
              <h3 className="text-xl lg:text-2xl font-serif font-bold text-slate-800 mb-6 lg:mb-8">Contact Information</h3>
              <div className="space-y-6 lg:space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-sm shrink-0">
                    <MapPin className="text-indigo-600" size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 mb-1 text-sm lg:text-base">Global Headquarters</p>
                    <p className="text-slate-500 leading-relaxed text-xs lg:text-sm">
                      B - XXXII , 1106/2, Turn Ghelewal<br />
                      Rahon Road, Ludhiana - 141007 (PB.)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-sm shrink-0">
                    <Phone className="text-indigo-600" size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 mb-1 text-sm lg:text-base">Phone Number</p>
                    <p className="text-slate-500 text-xs lg:text-sm">+91 (161) 500 0000</p>
                    <p className="text-slate-500 text-[10px] lg:text-xs italic mt-1">Mon - Sat, 9am - 6pm IST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-sm shrink-0">
                    <Mail className="text-indigo-600" size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 mb-1 text-sm lg:text-base">Email Address</p>
                    <p className="text-slate-500 text-xs lg:text-sm">info@kudugroup.com</p>
                    <p className="text-slate-500 text-xs lg:text-sm">partners@kudugroup.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="space-y-4 lg:space-y-6">
              <h3 className="text-xl lg:text-2xl font-serif font-bold text-slate-800">Our Location</h3>
              <div className="rounded-2xl lg:rounded-[32px] overflow-hidden border border-slate-100 shadow-lg h-[200px] lg:h-[300px] relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.633854972983!2d75.87114631513545!3d30.91081598157518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a83746234567b%3A0x2c0448576d2f573!2sRahon%20Rd%2C%20Ludhiana%2C%20Punjab!5e0!3m2!1sen!2sin!4v1625123456789!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
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
