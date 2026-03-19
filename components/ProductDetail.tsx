
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle, Package, Shield, Share2, Globe, Eye } from 'lucide-react';
import { BrandProduct } from './BrandsSection';

interface ProductDetailProps {
  product: BrandProduct;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  const [selectedImage, setSelectedImage] = useState(product.gallery[0]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-24 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Navigation / Back Button */}
        <button 
          onClick={onBack}
          className="flex items-center space-x-3 mb-8 sm:mb-12 group"
        >
          <div className="p-2 sm:p-3 bg-slate-900 text-white rounded-full group-hover:bg-indigo-600 transition-colors">
            <ArrowLeft size={18} />
          </div>
          <span className="text-sm font-medium text-slate-500 group-hover:text-slate-900 transition-colors">
            Back to Collection
          </span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-16 lg:gap-24">
          
          {/* Left: Gallery Section */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-6">
            <motion.div 
              layoutId={`product-image-${product.name}`}
              className="aspect-[3/4] sm:aspect-square lg:aspect-[4/3] rounded-[32px] sm:rounded-[60px] overflow-hidden border-4 sm:border-[10px] border-slate-50 shadow-xl relative bg-slate-50"
            >
              <img 
                src={selectedImage} 
                alt={product.name} 
                className="w-full h-full object-contain mix-blend-multiply" 
              />
              <div className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-white/80 backdrop-blur-md p-3 sm:p-4 rounded-full border border-white shadow-sm">
                <Share2 size={18} className="text-slate-700" />
              </div>
            </motion.div>

            <div className="grid grid-cols-3 gap-3 sm:gap-6">
              {product.gallery.map((img, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedImage(img)}
                  className={`aspect-square rounded-2xl sm:rounded-[32px] overflow-hidden border-2 sm:border-4 transition-all bg-slate-50 ${selectedImage === img ? 'border-slate-800' : 'border-slate-100'}`}
                >
                  <img src={img} alt="Gallery" className="w-full h-full object-cover object-top mix-blend-multiply" />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right: Info Section */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="brand-divider justify-start mb-4 sm:mb-6">
              <div className="brand-diamond !ml-0"></div>
            </div>
            
            <h3 className="text-[10px] sm:text-xs font-bold tracking-widest text-slate-400 uppercase mb-2 sm:mb-4">
              {product.category}
            </h3>
            
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-serif font-bold text-slate-900 leading-tight mb-6 sm:mb-8">
              {product.name}
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-medium leading-relaxed mb-8 sm:mb-12 border-l-2 border-slate-200 pl-6 sm:pl-8">
              {product.detailedDesc}
            </p>

            {/* Materials & Benefits */}
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Composition & Craft</h4>
              <div className="flex flex-wrap gap-2 sm:gap-4">
                {product.materials.map((mat, idx) => (
                  <div key={idx} className="flex items-center space-x-2 bg-slate-50 px-4 py-2 sm:px-5 sm:py-3 rounded-full border border-slate-100 shadow-sm">
                    <CheckCircle size={14} className="text-indigo-600/60" />
                    <span className="text-[9px] sm:text-[10px] font-bold text-slate-700 uppercase">{mat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications - Glass Table */}
            <div className="bg-slate-50 rounded-3xl sm:rounded-[40px] p-6 sm:p-8 lg:p-10 border border-slate-100 mb-8 sm:mb-12">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6 sm:mb-8 flex items-center space-x-3">
                <Package size={16} />
                <span>Technical Specifications</span>
              </h4>
              <div className="space-y-4 sm:space-y-6">
                {product.specs.map((spec, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-slate-200 pb-3 sm:pb-4">
                    <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase">{spec.label}</span>
                    <span className="text-xs sm:text-sm font-serif font-bold text-slate-800">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-grow bg-slate-900 text-white px-6 py-4 sm:px-8 sm:py-5 rounded-full font-bold text-xs transition-all hover:bg-indigo-600 shadow-lg"
              >
                Inquire for Wholesale
              </motion.button>
              
              {product.websiteStatus === 'live' && product.websiteUrl ? (
                <a
                  href={product.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-grow sm:flex-grow-0 group/web relative inline-flex items-center justify-center space-x-2 px-6 py-4 sm:px-8 sm:py-5 rounded-full bg-white text-slate-900 border border-slate-200 text-xs font-bold transition-all duration-300 hover:bg-slate-50 shadow-sm active:scale-95"
                >
                  <Globe size={16} className="text-indigo-600" />
                  <span>Visit Website</span>
                </a>
              ) : (
                <div className="flex-grow sm:flex-grow-0 inline-flex items-center justify-center space-x-2 px-6 py-4 sm:px-8 sm:py-5 rounded-full bg-slate-50 text-slate-400 border border-slate-100 text-xs font-bold cursor-not-allowed" title="Website Under Development">
                  <Eye size={16} />
                  <span>In Development</span>
                </div>
              )}

              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 shrink-0">
                <Shield size={20} className="sm:w-6 sm:h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Section (Simple) */}
      <div className="max-w-7xl mx-auto mt-20 sm:mt-32 pt-16 sm:pt-24 border-t border-slate-100">
        <div className="flex flex-col items-center text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">Quality <span className="italic font-light text-slate-500">Certified</span></h2>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-3 sm:mt-4">Standardized Industrial Production</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {['ISO 9001', 'OEKO-TEX', 'WRAP', 'GOTS'].map((cert) => (
            <div key={cert} className="bg-slate-50 border border-slate-100 p-6 sm:p-8 rounded-2xl sm:rounded-[40px] flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
              <span className="text-base sm:text-xl lg:text-2xl font-serif font-bold text-slate-400">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetail;
