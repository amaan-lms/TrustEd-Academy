import React from 'react';

const About = () => {
  const categories = [
    "Individuals & Families",
    "Entrepreneurs & Business Owners",
    "Professionals & Teams",
    "Educators & Creators"
  ];

  const differentiators = [
    { title: "Structured Learning Paths", desc: "No more guesswork. Step-by-step systems designed for retention." },
    { title: "AI-Powered Support", desc: "Advanced technology to personalize and accelerate your journey." },
    { title: "Real-World Knowledge", desc: "Practical application over theoretical confusion." },
    { title: "Human-Guided System", desc: "Expert oversight to ensure the highest quality of learning." }
  ];

  return (
    <section id="about" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-20">
          <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm font-bold mb-4">The Standard of Excellence</p>
          <h2 className="text-4xl md:text-5xl font-serif mb-8 italic">About TrustEd Academy</h2>
          <div className="h-[2px] w-24 bg-[#D4AF37]"></div>
        </div>

        {/* Mission & Why It Exists */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-32">
          <div>
            <h3 className="text-2xl font-serif text-gray-300 mb-6">Our Mission</h3>
            <p className="text-3xl md:text-4xl font-light leading-snug text-white">
              To make education <span className="text-[#D4AF37]">easier to access</span>, easier to understand, and easier to apply in real life.
            </p>
          </div>
          <div className="bg-[#001233]/30 p-8 lg:p-12 border-l border-[#D4AF37]">
            <h3 className="text-lg font-bold uppercase tracking-widest text-[#D4AF37] mb-4">The Problem</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Most education is confusing and unstructured. TrustEd Academy simplifies learning into guided systems that move you from confusion to mastery.
            </p>
          </div>
        </div>

        {/* Who It Serves */}
        <div className="mb-32">
          <h3 className="text-center text-sm uppercase tracking-[0.5em] text-gray-500 mb-12">Who We Serve</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((item, index) => (
              <div key={index} className="border border-white/10 p-8 text-center hover:border-[#D4AF37]/50 transition-colors duration-500 bg-gradient-to-b from-white/[0.02] to-transparent">
                <p className="font-semibold tracking-wide text-sm uppercase">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Differentiators - The "System" Feel */}
        <div className="bg-[#001233] relative overflow-hidden px-8 py-20 lg:p-20">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37] opacity-5 blur-[120px]"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-3xl font-serif mb-6">What Makes Us Different</h3>
              <p className="text-gray-400 italic">
                A human-guided, AI-powered education platform focused strictly on learning and skill acquisition.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              {differentiators.map((item, index) => (
                <div key={index}>
                  <h4 className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
             <button className="px-12 py-4 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-500 font-bold uppercase tracking-[0.2em] text-xs">
              Explore Free Training
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;