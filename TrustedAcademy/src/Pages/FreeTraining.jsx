import React from 'react';
import { BookOpen, Shield, Zap, Layout, ArrowRight, Mail } from 'lucide-react';

const FreeTraining = () => {
  const courses = [
    {
      title: "Personal Knowledge Foundation",
      topics: "Life skills, family education, financial basics",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      title: "Business Structure Foundation",
      topics: "Business basics, structure, and systems",
      icon: <Layout className="w-5 h-5" />,
    },
    {
      title: "Professional Development Foundation",
      topics: "Career growth, communication, leadership",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      title: "AI-Powered Education Foundation",
      topics: "Learn how AI improves learning and systems",
      icon: <BookOpen className="w-5 h-5" />,
    }
  ];

  return (
    <section id="free-training" className="py-24 bg-black text-white relative overflow-hidden pt-30">
      {/* Subtle Navy Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001233]/20 to-black pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <p className="text-[#D4AF37] uppercase tracking-[0.4em] text-xs font-bold mb-4">Open Access</p>
            <h2 className="text-4xl md:text-6xl font-serif mb-6 italic">Start Learning for Free</h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Begin your journey with free foundation courses designed to give you clarity, structure, and real-world knowledge. No commitment required.
            </p>
          </div>
          <div className="flex lg:justify-end">
            <div className="bg-[#001233]/40 border border-[#D4AF37]/20 p-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                <Shield size={20} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Entry Level</p>
                <p className="text-sm font-semibold">LMS Experience Preview</p>
              </div>
            </div>
          </div>
        </div>

        {/* Free Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {courses.map((course, index) => (
            <div key={index} className="group p-8 bg-[#001233]/10 border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-500 relative">
              <div className="text-[#D4AF37] mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                {course.icon}
              </div>
              <h3 className="text-lg font-serif mb-3 min-h-[56px] leading-snug">{course.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-6">
                {course.topics}
              </p>
              <div className="w-full h-[1px] bg-white/5 group-hover:bg-[#D4AF37]/20 transition-colors"></div>
            </div>
          ))}
        </div>

        {/* Benefits & Registration Split */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Benefits List */}
          <div className="lg:col-span-1 space-y-6 py-8">
            <h4 className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">What You Get</h4>
            <ul className="space-y-4">
              {['Beginner-friendly lessons', 'Structured learning paths', 'Practical knowledge', 'LMS experience preview'].map((item, i) => (
                <li key={i} className="flex items-center text-sm text-gray-400 font-light">
                  <ArrowRight size={12} className="text-[#D4AF37] mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Registration Box */}
          <div className="lg:col-span-2 bg-gradient-to-br from-[#001233] to-black p-1 border border-white/10">
            <div className="bg-black p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-serif mb-2">Initialize Your Access</h3>
                <p className="text-gray-500 text-sm italic">Join the Foundation Training to start building your system.</p>
              </div>
              <div className="w-full md:w-auto flex flex-col gap-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full md:w-64 bg-black border border-white/10 px-12 py-4 text-xs focus:outline-none focus:border-[#D4AF37] transition-all"
                  />
                </div>
                <button className="bg-[#D4AF37] text-black font-bold uppercase tracking-[0.2em] text-[10px] py-4 px-8 hover:bg-white transition-colors">
                  Join Free Training
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Membership Upgrade Section */}
        <div className="mt-20 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 opacity-60 hover:opacity-100 transition-opacity">
          <p className="text-xs text-gray-500 tracking-wide">Ready for the full curriculum? Founding member pricing is still available.</p>
          <a href="#membership" className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] border-b border-[#D4AF37] pb-1">
            Upgrade to Full Membership
          </a>
        </div>

      </div>
    </section>
  );
};

export default FreeTraining;