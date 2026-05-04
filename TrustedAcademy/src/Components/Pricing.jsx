import React from 'react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-[#D4AF37] uppercase tracking-[0.4em] text-xs font-bold mb-4">Investment Tiers</p>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Pricing & Programs</h2>
          <div className="h-[1px] w-24 bg-[#D4AF37] mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* 1. Membership Pricing */}
          <div className="group border border-white/10 bg-[#001233]/20 p-10 flex flex-col justify-between transition-all duration-500 hover:border-[#D4AF37]/50">
            <div>
              <h3 className="text-xl font-serif mb-2">Membership</h3>
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-8">Continuous Learning</p>
              
              <div className="mb-8">
                <span className="text-4xl font-light text-white italic">Monthly Subscription</span>
                <p className="text-[#D4AF37] text-sm mt-4 font-semibold tracking-wide underline underline-offset-8">
                  Early access pricing available
                </p>
              </div>
              
              <ul className="text-gray-400 text-sm space-y-4 mb-10">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#D4AF37] mr-3"></span>
                  Access to all core modules
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#D4AF37] mr-3"></span>
                  AI Assistant Integration
                </li>
              </ul>
            </div>
            
            <button className="w-full py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors duration-300">
              Join Membership
            </button>
          </div>

          {/* 2. Courses - Highlighted/Premium Card */}
          <div className="group border border-[#D4AF37]/40 bg-[#001233]/40 p-10 flex flex-col justify-between relative scale-105 z-10 shadow-2xl transition-all duration-500">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#D4AF37]"></div>
            <div>
              <h3 className="text-xl font-serif mb-2">Academy Courses</h3>
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-8">Specialized Knowledge</p>
              
              <div className="space-y-6 mb-10">
                <div>
                  <p className="text-white text-lg font-medium">Free Courses</p>
                  <p className="text-gray-500 text-sm italic">Introductory training paths</p>
                </div>
                <div className="h-[1px] w-full bg-white/10"></div>
                <div>
                  <p className="text-[#D4AF37] text-lg font-medium">Advanced Courses</p>
                  <p className="text-gray-400 text-sm italic">Deep-dive technical certifications</p>
                </div>
              </div>
            </div>
            
            <button className="w-full py-4 border border-[#D4AF37] text-[#D4AF37] font-bold uppercase tracking-widest text-xs hover:bg-[#D4AF37] hover:text-black transition-all duration-500">
              View Catalog
            </button>
          </div>

          {/* 3. Business Services */}
          <div className="group border border-white/10 bg-[#001233]/20 p-10 flex flex-col justify-between transition-all duration-500 hover:border-[#D4AF37]/50">
            <div>
              <h3 className="text-xl font-serif mb-2">Business Services</h3>
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-8">Enterprise Systems</p>
              
              <div className="mb-10">
                <span className="text-3xl font-light text-white italic">Custom Solutions</span>
                <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                  Tailored AI implementation and educational frameworks for teams and organizations.
                </p>
              </div>
            </div>

            <div>
              <p className="text-[10px] text-gray-600 uppercase tracking-widest mb-4">Note: Requires custom quote</p>
              <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-[#D4AF37] transition-colors duration-300">
                Book Consultation
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-xs uppercase tracking-[0.4em]">
            TrustEd Academy — High-Trust Professional Systems
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;