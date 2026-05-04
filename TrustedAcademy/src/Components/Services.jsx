import React from 'react';

const BusinessSolutions = () => {
  const services = [
    { title: "Custom Course Creation", icon: "01" },
    { title: "Website & Academy Buildouts", icon: "02" },
    { title: "Workforce Training Systems", icon: "03" },
    { title: "Continuing Education Support", icon: "04" },
    { title: "Webinar Funnel Systems", icon: "05" },
    { title: "Interactive E-Books", icon: "06" },
    { title: "AI Instructor Systems", icon: "07" },
  ];

  return (
    <section id="business" className="relative py-24 bg-black overflow-hidden">
      {/* Decorative Navy Gradient for a "Tech" feel */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#001233] opacity-40 skew-x-12 translate-x-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Branding & Messaging */}
          <div className="lg:col-span-5">
            <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold mb-4">Enterprise Grade</p>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
              Business <br />
              <span className="italic">Solutions</span>
            </h2>
            <div className="h-1 w-20 bg-[#D4AF37] mb-8"></div>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
              We don’t just teach — <span className="text-white font-semibold italic">we build.</span> We provide the architecture for companies to scale knowledge and automate excellence.
            </p>
            
            <button className="group flex items-center space-x-4 bg-transparent border border-[#D4AF37] text-[#D4AF37] px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all duration-500">
              <span>Book a Consultation</span>
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Right Column: Service Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 shadow-2xl">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-black p-8 hover:bg-[#001233] transition-colors duration-500 group relative"
                >
                  <span className="absolute top-4 right-6 text-white/5 font-serif text-4xl group-hover:text-[#D4AF37]/20 transition-colors">
                    {service.icon}
                  </span>
                  <h4 className="text-white font-medium text-lg tracking-wide mb-2 pr-10">
                    {service.title}
                  </h4>
                  <div className="w-0 group-hover:w-full h-[1px] bg-[#D4AF37] transition-all duration-700"></div>
                </div>
              ))}
              
              {/* Placeholder for "And More" or Future Growth */}
              <div className="bg-gradient-to-br from-[#001233] to-black p-8 flex items-center">
                <p className="text-[#D4AF37] text-sm italic tracking-wide">
                  Tailored infrastructure built for your specific industry needs.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BusinessSolutions;