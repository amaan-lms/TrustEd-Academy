import React, { useState } from 'react';
import { Filter, Clock, Lock, CheckCircle2, Award, BookOpen } from 'lucide-react';

const CourseCatalog = () => {
  const [activePath, setActivePath] = useState('All');
  const [activeLevel, setActiveLevel] = useState('All');

  const paths = ['All', 'Personal', 'Business', 'Professional', 'Creator'];
  const levels = [
    { label: 'All', value: 'All' },
    { label: 'Free (L0)', value: 'Free' },
    { label: 'Core (L1)', value: 'Core' },
    { label: 'Advanced (L2)', value: 'Advanced' },
    { label: 'Certification (L3)', value: 'Certification' }
  ];

  const courses = [
    {
      title: "The Architecture of Personal Growth",
      path: "Personal",
      level: "Free",
      levelNum: "0",
      promise: "Build a foundational system for daily clarity and habit management.",
      duration: "2 hours",
      access: "Free Course",
      cta: "Enroll Now"
    },
    {
      title: "Business Systems & Scaling",
      path: "Business",
      level: "Core",
      levelNum: "1",
      promise: "Structure your business operations for autonomous growth and efficiency.",
      duration: "4 hours",
      access: "Member Only",
      cta: "Join Membership"
    },
    {
      title: "Executive Presence & AI",
      path: "Professional",
      level: "Advanced",
      levelNum: "2",
      promise: "Master professional leadership through the lens of AI-integrated workflows.",
      duration: "6 hours",
      access: "Advanced",
      cta: "Enroll Now"
    },
    {
      title: "Academy Builder Framework",
      path: "Creator",
      level: "Certification",
      levelNum: "3",
      promise: "The complete blueprint for designing and launching high-end education systems.",
      duration: "12 hours",
      access: "Certification Track",
      cta: "Enroll Now"
    }
  ];

  return (
    <section id="catalog" className="py-24 bg-black text-white pt-30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header & Description */}
        <div className="max-w-3xl mb-16">
          <p className="text-[#D4AF37] uppercase tracking-[0.4em] text-xs font-bold mb-4">Curriculum</p>
          <h2 className="text-4xl md:text-6xl font-serif mb-6">Explore Our Courses</h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed italic">
            Browse our structured course library organized by learning path and experience level.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col lg:flex-row gap-8 justify-between border-y border-white/10 py-8 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest mb-2">
              <Filter size={12} /> Filter by Path
            </div>
            <div className="flex flex-wrap gap-3">
              {paths.map(path => (
                <button 
                  key={path}
                  onClick={() => setActivePath(path)}
                  className={`px-4 py-2 text-[10px] uppercase tracking-widest transition-all duration-300 border ${activePath === path ? 'border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/5' : 'border-white/10 text-gray-500 hover:text-white'}`}
                >
                  {path}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest mb-2">
              <BookOpen size={12} /> Experience Level
            </div>
            <div className="flex flex-wrap gap-3">
              {levels.map(level => (
                <button 
                  key={level.value}
                  onClick={() => setActiveLevel(level.value)}
                  className={`px-4 py-2 text-[10px] uppercase tracking-widest transition-all duration-300 border ${activeLevel === level.value ? 'border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/5' : 'border-white/10 text-gray-500 hover:text-white'}`}
                >
                  {level.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {courses.map((course, index) => (
            <div key={index} className="group bg-[#001233]/10 border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-700 flex flex-col md:flex-row overflow-hidden relative">
              
              {/* Level Indicator Side Tab */}
              <div className="bg-[#001233]/40 w-full md:w-16 flex md:flex-col items-center justify-center py-4 border-b md:border-b-0 md:border-r border-white/5">
                <span className="text-gray-600 text-[10px] font-bold uppercase tracking-tighter vertical-rl">Level</span>
                <span className="text-2xl font-serif text-[#D4AF37] mt-1">{course.levelNum}</span>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-[#D4AF37]/5 border border-[#D4AF37]/20">
                      {course.access}
                    </span>
                    <div className="flex items-center text-gray-500 text-[10px] tracking-widest uppercase">
                      <Clock size={12} className="mr-2" /> {course.duration}
                    </div>
                  </div>

                  <h3 className="text-2xl font-serif mb-3 group-hover:text-[#D4AF37] transition-colors">{course.title}</h3>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-4 font-semibold">{course.path} Path</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light italic">
                    "{course.promise}"
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                   {course.access === "Member Only" ? (
                     <div className="flex items-center gap-2 text-gray-600 text-[10px] uppercase font-bold tracking-widest">
                       <Lock size={12} /> Restricted
                     </div>
                   ) : (
                     <div className="flex items-center gap-2 text-[#D4AF37] text-[10px] uppercase font-bold tracking-widest">
                       <CheckCircle2 size={12} /> Open Enrollment
                     </div>
                   )}
                   
                   <button className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${course.cta === "Join Membership" ? 'text-white border-b border-white hover:text-[#D4AF37] hover:border-[#D4AF37]' : 'text-[#D4AF37] border-b border-[#D4AF37] hover:text-white hover:border-white'}`}>
                     {course.cta}
                   </button>
                </div>
              </div>

              {/* Decorative Accent */}
              {course.level === "Certification" && (
                <div className="absolute top-2 right-2 text-[#D4AF37]/20">
                  <Award size={48} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Global Catalog Footer */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 text-[10px] uppercase tracking-[0.5em] mb-8">
            Advanced systems for professional mastery
          </p>
          <div className="h-[1px] w-24 bg-[#D4AF37] mx-auto opacity-30"></div>
        </div>

      </div>
    </section>
  );
};

export default CourseCatalog;