import React, { useState } from 'react';

const CourseCatalog = () => {
  const [activePath, setActivePath] = useState('All');

  const courses = [
    {
      title: "AI Systems Architecture",
      path: "Professional",
      level: "Advanced",
      promise: "Build enterprise-grade AI frameworks for complex workflows.",
      duration: "12 Weeks",
      access: "Paid",
    },
    {
      title: "Digital Sovereignty",
      path: "Personal",
      level: "Core",
      promise: "Master the tools to organize and protect your digital life.",
      duration: "4 Weeks",
      access: "Member",
    },
    {
      title: "The Creator Engine",
      path: "Creator",
      level: "Free",
      promise: "A foundational guide to structured content production.",
      duration: "2 Hours",
      access: "Free",
    }
  ];

  const paths = ["All", "Personal", "Business", "Professional", "Creator"];

  return (
    <section id="courses" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <p className="text-[#D4AF37] uppercase tracking-[0.4em] text-xs font-bold mb-4">The Curriculum</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Course Catalog</h2>
            <p className="text-gray-400 font-light tracking-wide italic">
              Explore structured courses organized by learning path and level. Precision education for high-impact results.
            </p>
          </div>

          {/* Filtering System */}
          <div className="flex flex-wrap gap-4 border-b border-white/10 pb-4">
            {paths.map((path) => (
              <button
                key={path}
                onClick={() => setActivePath(path)}
                className={`text-[10px] uppercase tracking-[0.2em] px-4 py-2 transition-all duration-300 ${
                  activePath === path ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' : 'text-gray-500 hover:text-white'
                }`}
              >
                {path}
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="group relative bg-[#001233]/20 border border-white/5 hover:border-[#D4AF37]/40 transition-all duration-700 overflow-hidden">
              
              {/* Subtle Progress Bar Decoration */}
              <div className="absolute top-0 left-0 w-1 h-full bg-[#D4AF37]/10 group-hover:bg-[#D4AF37] transition-all duration-500"></div>

              <div className="p-8">
                {/* Meta Data */}
                <div className="flex justify-between items-start mb-12">
                  <span className="text-[10px] text-[#D4AF37] uppercase tracking-[0.3em] font-bold">
                    {course.path} // {course.level}
                  </span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest">
                    {course.duration}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-serif mb-4 group-hover:text-[#D4AF37] transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-12 font-light min-h-[60px]">
                  {course.promise}
                </p>

                {/* Footer / CTA */}
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[9px] text-gray-600 uppercase tracking-widest">Access Type</span>
                    <span className="text-xs text-white font-semibold uppercase">{course.access}</span>
                  </div>
                  
                  <button className="text-[10px] font-bold uppercase tracking-widest text-white border-b border-[#D4AF37] pb-1 hover:text-[#D4AF37] transition-all">
                    Enroll Now
                  </button>
                </div>
              </div>

              {/* Hover Background Accent */}
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-[#D4AF37] opacity-[0.02] rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
            </div>
          ))}
        </div>

        {/* Global CTA */}
        <div className="mt-20 p-12 border border-white/10 text-center bg-gradient-to-r from-transparent via-[#001233]/40 to-transparent">
          <p className="text-gray-400 text-sm mb-6 font-light">Seeking the full experience?</p>
          <button className="px-12 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-[#D4AF37] transition-colors duration-500">
            Join Membership for Unlimited Access
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseCatalog;