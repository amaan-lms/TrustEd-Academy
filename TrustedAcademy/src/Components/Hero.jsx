import React from 'react';
import {
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  ChevronRight,
  Lock
} from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#0A0A0A] overflow-hidden flex items-center pt-20">
      
      {/* --- BACKGROUND ARCHITECTURE --- */}
      <div className="absolute inset-0 z-0">
        {/* Deep Radial Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#1B2A41_0%,transparent_60%)] opacity-40"></div>
        
        {/* Animated Gold Beam */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-[#C8A96A]/20 to-transparent"></div>

        {/* Subtle Grid - Adjusted for depth */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(#C8A96A 1px, transparent 1px), linear-gradient(90deg, #C8A96A 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
            maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* --- LEFT CONTENT (Col 7) --- */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Premium Badge */}
            {/* <div className="inline-flex items-center gap-3 px-4 py-2 border border-[#C8A96A]/30 bg-[#C8A96A]/5 backdrop-blur-md rounded-full">
              <div className="w-2 h-2 rounded-full bg-[#C8A96A] animate-pulse"></div>
              <span className="text-[#C8A96A] uppercase tracking-[0.3em] text-[10px] font-bold">
                Welcome To TrustEd Academy
              </span>
            </div> */}

            {/* Main Title */}
            <h1 className="text-white font-serif text-5xl md:text-7xl xl:text-8xl leading-[0.95] tracking-tight">
              Structured <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8A96A] via-[#E2CF95] to-[#C8A96A]">
                Education.
              </span>
            </h1>

            <div className="space-y-6 max-w-xl">
              <h2 className="text-white/90 text-2xl md:text-3xl font-light tracking-wide uppercase">
                Private Systems. <span className="text-[#C8A96A]/50">Real Understanding.</span>
              </h2>
              
              <p className="text-[#A0A0A0] text-lg leading-relaxed font-light border-l-2 border-[#C8A96A]/20 pl-6">
                Trusted Academy provides structured education across multiple disciplines 
                for individuals, families, business owners, and professionals who want 
                <span className="text-white font-normal"> real knowledge and real control.</span>
              </p>
            </div>

            {/* CTA Group */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="group relative bg-[#C8A96A] text-black px-8 py-4 overflow-hidden font-bold uppercase tracking-widest text-xs transition-all hover:pr-12">
                <span className="relative z-10 flex items-center gap-2">
                  Enter The System <ArrowRight className="w-4 h-4" />
                </span>
                <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>

              <button className="group border border-white/10 hover:border-[#C8A96A]/50 text-white px-8 py-4 font-bold uppercase tracking-widest text-xs transition-all flex items-center gap-2 bg-white/5">
                View Courses
                <ChevronRight className="w-4 h-4 text-[#C8A96A] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* --- RIGHT VISUAL (Col 5) --- */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full flex items-center justify-center">
              
              {/* Floating Element 1: The Shield */}
              {/* <div className="absolute top-10 right-10 z-20 bg-black/60 backdrop-blur-xl border border-[#C8A96A]/30 p-6 shadow-2xl animate-bounce [animation-duration:5s]">
                <ShieldCheck className="w-8 h-8 text-[#C8A96A]" />
              </div> */}

              {/* Main Visual Card */}
              <div className="relative w-full h-[500px] border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm p-1">
                <div className="h-full w-full border border-[#C8A96A]/20 flex flex-col justify-center items-center text-center p-8 overflow-hidden">
                  
                  {/* Geometric Deco */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-[#C8A96A]"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-[#C8A96A]"></div>

                  <GraduationCap className="w-20 h-20 text-[#C8A96A] mb-8 opacity-80" />
                  
                  <h3 className="text-white text-5xl font-serif tracking-tighter mb-2">TrustEd</h3>
                  <p className="text-[#C8A96A] tracking-[0.8em] text-xs uppercase mb-8">Academy</p>
                  
                  <div className="w-12 h-[1px] bg-[#C8A96A]/50 mb-8"></div>
                  
                  <p className="text-white/40 text-[10px] uppercase tracking-[0.4em] leading-loose">
                    Knowledge • Freedom • Empowerment
                  </p>
                </div>
              </div>

              {/* Floating Element 2: Stats Overlay */}
              <div className="absolute -bottom-6 -left-10 z-20 bg-[#1B2A41] border border-[#C8A96A]/20 p-8 shadow-2xl">
                 <div className="flex items-center gap-4">
                    <Lock className="w-5 h-5 text-[#C8A96A]" />
                    <div>
                      <p className="text-white font-serif text-xl">Private Access</p>
                      <p className="text-[#A0A0A0] text-[10px] uppercase tracking-widest">Secure Learning</p>
                    </div>
                 </div>
              </div>

            </div>
          </div>
        </div>

        {/* --- BOTTOM METRICS --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-20 pt-10 border-t border-white/5">
          {[
            { val: "250+", label: "Structured Courses" },
            { val: "40+", label: "Knowledge Systems" },
            { val: "Global", label: "Community Access" },
            { val: "Private", label: "Learning Access" }
          ].map((stat, i) => (
            <div key={i} className="group">
              <h4 className="text-[#C8A96A] text-3xl font-serif mb-1 group-hover:translate-x-2 transition-transform duration-300">
                {stat.val}
              </h4>
              <p className="text-white/40 uppercase tracking-[0.2em] text-[10px] font-bold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;