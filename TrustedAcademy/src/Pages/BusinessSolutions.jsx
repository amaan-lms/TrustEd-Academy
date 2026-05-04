import React from 'react';
import { 
  Layers, 
  Globe, 
  Users, 
  GraduationCap, 
  Video, 
  BookOpen, 
  Cpu, 
  ArrowRight,
  Target,
  PenTool,
  Rocket
} from 'lucide-react';

const BusinessSolutions = () => {
  const services = [
    { title: "Custom Course Creation", desc: "Turn internal knowledge into structured, high-retention courses.", icon: <PenTool size={20}/> },
    { title: "Website & Academy Buildouts", desc: "Fully branded, secure learning platforms built for scale.", icon: <Globe size={20}/> },
    { title: "Workforce Training Systems", desc: "Standardize excellence by training teams and employees effectively.", icon: <Users size={20}/> },
    { title: "Continuing Education Support", desc: "Professional training systems with non-accredited guidance.", icon: <GraduationCap size={20}/> },
    { title: "Webinar Funnel Systems", desc: "High-conversion automated and live webinar frameworks.", icon: <Video size={20}/> },
    { title: "Interactive E-Books", desc: "Convert static content into immersive digital learning tools.", icon: <BookOpen size={20}/> },
    { title: "AI Instructor Systems", desc: "Custom AI-powered support layers for your learners.", icon: <Cpu size={20}/> }
  ];

  const steps = [
    { name: "Understand", icon: <Target size={18}/> },
    { name: "Plan", icon: <Layers size={18}/> },
    { name: "Build", icon: <PenTool size={18}/> },
    { name: "Launch", icon: <Rocket size={18}/> }
  ];

  return (
    <section id="business-solutions" className="py-24 bg-black text-white relative pt-30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <p className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-bold mb-4 italic">Enterprise Tier</p>
            <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
              We Build Complete <br />
              <span className="text-[#D4AF37]">Education Systems</span>
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              TrustEd Academy helps businesses, organizations, and creators build structured learning systems, courses, and digital education platforms that actually perform.
            </p>
          </div>
          <div className="p-8 border border-white/5 bg-[#001233]/10 relative">
             <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Optimized For</h4>
             <div className="grid grid-cols-2 gap-4">
                {['Businesses', 'Coaches', 'Educators', 'Organizations'].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-gray-500 hover:text-[#D4AF37] transition-colors cursor-default">
                    <div className="w-1.5 h-1.5 bg-[#D4AF37]/40"></div>
                    {item}
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 mb-24 overflow-hidden">
          {services.map((service, index) => (
            <div key={index} className="bg-black p-10 hover:bg-[#001233]/20 transition-all duration-500 group">
              <div className="text-[#D4AF37] mb-8 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif mb-4 text-white group-hover:text-[#D4AF37] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                {service.desc}
              </p>
            </div>
          ))}
          {/* CTA Box inside the grid */}
          <div className="bg-[#D4AF37] p-10 flex flex-col justify-between group cursor-pointer">
            <h3 className="text-black text-2xl font-serif leading-tight">Ready to build your system?</h3>
            <div className="flex items-center gap-3 text-black font-bold uppercase tracking-widest text-[10px] mt-8">
              Book a Consultation <ArrowRight size={16} />
            </div>
          </div>
        </div>

        {/* Process Roadmap */}
        <div className="border-t border-white/5 pt-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="max-w-xs">
              <h4 className="text-white font-serif text-2xl mb-2">Our Process</h4>
              <p className="text-gray-500 text-xs tracking-widest uppercase italic">From Insight to Infrastructure</p>
            </div>
            <div className="flex flex-1 justify-between w-full max-w-4xl relative">
              {/* Connector Line */}
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 hidden md:block"></div>
              
              {steps.map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center">
                  <div className="w-12 h-12 bg-black border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] mb-4 hover:bg-[#D4AF37] hover:text-black transition-all duration-500">
                    {step.icon}
                  </div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{step.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BusinessSolutions;