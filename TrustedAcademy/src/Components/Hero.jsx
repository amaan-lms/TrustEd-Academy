import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-24">
      {/* Background Aesthetic Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle Navy Gradient Pulse */}
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[#001233] rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-[#001233] rounded-full blur-[120px] opacity-30"></div>
        
        {/* Fine Gold Grid Lines (Low Opacity) */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: `linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)`, backgroundSize: '60px 60px' }}>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Editorial Accent */}
        <div className="flex items-center justify-center mb-6 space-x-4">
          <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
          <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-xs font-bold">
            Redefining Digital Mastery
          </span>
          <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-6xl font-serif text-white leading-[1.1] mb-8">
          Knowledge You Can <span className="italic text-gray-400">Trust.</span><br />
          <span className="bg-gradient-to-r from-white via-white to-[#D4AF37] bg-clip-text text-transparent">
            Systems You Can Build On.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-3xl mx-auto text-gray-400 text-lg md:text-lg leading-relaxed mb-12 font-light tracking-wide">
          TrustEd Academy helps <span className="text-white font-normal">individuals, families, professionals, educators, and businesses</span> learn faster, build real skills, and create organized education systems using AI-powered courses and guided learning paths.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* Primary CTA */}
          <button className="group relative px-10 py-5 bg-[#D4AF37] text-black font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:bg-white hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(212,175,55,0.2)]">
            Start Here
          </button>

          {/* Secondary CTA */}
          <button className="group px-10 py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37] flex items-center">
            Explore Business Solutions
            <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* High-Trust Indicator */}
        <div className=" pt-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50">
          <div className="text-center">
            <p className="text-white text-2xl font-serif">50k+</p>
            <p className="text-gray-500 text-xs uppercase tracking-widest">Global Students</p>
          </div>
          <div className="text-center">
            <p className="text-white text-2xl font-serif">120+</p>
            <p className="text-gray-400 text-xs uppercase tracking-widest">AI Frameworks</p>
          </div>
          <div className="text-center">
            <p className="text-white text-2xl font-serif">98%</p>
            <p className="text-gray-400 text-xs uppercase tracking-widest">Success Rate</p>
          </div>
          <div className="text-center">
            <p className="text-white text-2xl font-serif">ISO</p>
            <p className="text-gray-400 text-xs uppercase tracking-widest">Certified Learning</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;