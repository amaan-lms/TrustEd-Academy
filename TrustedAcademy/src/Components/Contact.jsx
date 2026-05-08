import React from 'react';
import { ArrowRight } from 'lucide-react';
import TAlogo from '../assets/clogo.png';

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-24 bg-[#0A0A0A] overflow-hidden"
    >
      {/* --- AMBIENT ELEMENTS --- */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C8A96A]/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      {/* Technical Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(#C8A96A 1px, transparent 1px),
            linear-gradient(90deg, #C8A96A 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* --- MAIN CTA CARD --- */}
        <div className="relative overflow-hidden border border-white/5 bg-gradient-to-br from-[#111827]/80 to-[#0A0A0A] p-8 md:p-16 lg:p-20">
          
          {/* Decorative Corner Accents */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#C8A96A]/40"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#C8A96A]/40"></div>

          <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT SIDE: VISUAL ANCHOR (Col 5) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative group">
                {/* Logo Glow Effect */}
                <div className="absolute inset-0 bg-[#C8A96A]/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center bg-[#050505]/50 border border-white/5 backdrop-blur-sm rounded-full p-8 group-hover:border-[#C8A96A]/30 transition-all duration-500">
                  <img
                    src={TAlogo}
                    alt="TrustEd Academy Logo"
                    className="w-full h-full object-contain opacity-90 group-hover:scale-105 transition-transform duration-700 drop-shadow-[0_0_30px_rgba(200,169,106,0.15)]"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: THE CONTENT (Col 7) */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#C8A96A]/50"></div>
                <span className="text-[#C8A96A] uppercase tracking-[0.4em] text-[10px] font-black">
                  Enter The System
                </span>
              </div>

              <h2 className="text-white font-serif text-4xl md:text-6xl leading-[1.1] mb-8 tracking-tight">
                Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8A96A] to-[#8E743D]">TrustEd Academy</span>
              </h2>

              <p className="text-[#A0A0A0] text-base md:text-lg leading-relaxed max-w-xl mb-10 font-light">
                Begin building structured knowledge through organized education systems, 
                guided learning paths, and real-world implementation. Secure your access 
                to the future of professional education.
              </p>

              {/* ACTION BUTTON */}
              <div className="w-full sm:w-auto">
                <button className="group relative w-full sm:w-auto bg-[#C8A96A] hover:bg-white text-black px-10 py-5 uppercase tracking-[0.25em] text-[11px] font-black transition-all duration-500 flex items-center justify-center gap-6 shadow-[0_15px_40px_rgba(200,169,106,0.2)]">
                  <span>Get Started Now</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                  
                  {/* Subtle button border effect */}
                  <div className="absolute inset-0 border border-white/20 scale-105 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500"></div>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM METADATA (Optional Visual Polish) */}
        {/* <div className="mt-12 flex justify-between items-center opacity-20 px-4">
            <span className="text-[9px] uppercase tracking-[0.5em] text-white font-mono">System_Status: Operational</span>
            <div className="flex gap-4">
                <div className="w-1 h-1 bg-[#C8A96A] rounded-full"></div>
                <div className="w-1 h-1 bg-[#C8A96A] rounded-full"></div>
                <div className="w-1 h-1 bg-[#C8A96A] rounded-full"></div>
            </div>
        </div> */}

      </div>
    </section>
  );
};

export default Contact;