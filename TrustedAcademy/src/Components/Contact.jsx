import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black relative">
      {/* Decorative Branding Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-[#D4AF37] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Side: Information */}
          <div className="space-y-12">
            <div>
              <p className="text-[#D4AF37] uppercase tracking-[0.4em] text-xs font-bold mb-4">Direct Access</p>
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Contact / Book a Consultation</h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md">
                Whether you are seeking a custom system for your enterprise or have a specific question about our curriculum, our team is ready to assist.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="border-l border-[#D4AF37]/30 pl-6">
                <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-2">Business Inquiries</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  For enterprise solutions, AI implementation, and custom educational frameworks.
                </p>
              </div>
              <div className="border-l border-white/10 pl-6">
                <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-2">General Questions</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Regarding membership access, course content, or technical support.
                </p>
              </div>
            </div>

            <div className="pt-8">
              <p className="text-[10px] text-gray-600 uppercase tracking-[0.5em]">
                Response Window: 24–48 Hours
              </p>
            </div>
          </div>

          {/* Right Side: High-End Form */}
          <div className="bg-[#001233]/30 border border-white/10 p-8 md:p-12 backdrop-blur-xl shadow-2xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-[10px] text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-black/50 border border-white/10 px-4 py-4 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors duration-300"
                  />
                </div>
                {/* Email */}
                <div className="space-y-2">
                  <label className="text-[10px] text-gray-500 uppercase tracking-widest ml-1">Professional Email</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com"
                    className="w-full bg-black/50 border border-white/10 px-4 py-4 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Inquiry Type */}
              <div className="space-y-2">
                <label className="text-[10px] text-gray-500 uppercase tracking-widest ml-1">Inquiry Type</label>
                <select className="w-full bg-black/50 border border-white/10 px-4 py-4 text-white text-sm appearance-none focus:outline-none focus:border-[#D4AF37] transition-colors duration-300">
                  <option className="bg-black">Select an option...</option>
                  <option className="bg-black">Business Solution Consultation</option>
                  <option className="bg-black">Membership Inquiry</option>
                  <option className="bg-black">Technical Support</option>
                  <option className="bg-black">Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-[10px] text-gray-500 uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  rows="4"
                  placeholder="How can we help you build?"
                  className="w-full bg-black/50 border border-white/10 px-4 py-4 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors duration-300 resize-none"
                ></textarea>
              </div>

              {/* CTA */}
              <button className="w-full py-5 bg-[#D4AF37] text-black font-bold uppercase tracking-[0.3em] text-xs hover:bg-white transition-all duration-500 shadow-lg">
                Book a Consultation
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;