import React from 'react';
import { User, Briefcase, GraduationCap, PenTool, ArrowRight, Star } from 'lucide-react';

const StartHere = () => {
  const paths = [
    {
      id: 1,
      title: "Personal Knowledge Path",
      subtitle: "For individuals and families",
      description: "Learn practical life skills, financial awareness, and personal growth through structured systems.",
      icon: <User className="w-6 h-6" />,
      freeCourse: "Life Systems 101",
      cta: "Start Personal Path"
    },
    {
      id: 2,
      title: "Business Builder Path",
      subtitle: "For entrepreneurs and business owners",
      description: "Master the systems, structure, and growth strategies required to scale a modern business.",
      icon: <Briefcase className="w-6 h-6" />,
      freeCourse: "Structure for Growth",
      cta: "Start Business Path"
    },
    {
      id: 3,
      title: "Professional Path",
      subtitle: "For employees, managers, and teams",
      description: "Build career skills, leadership authority, and workplace confidence using AI-enhanced workflows.",
      icon: <GraduationCap className="w-6 h-6" />,
      freeCourse: "The Lead Executive",
      cta: "Start Professional Path"
    },
    {
      id: 4,
      title: "Educator / Creator Path",
      subtitle: "For teachers, coaches, and creators",
      description: "Learn to architect premium courses, academies, and high-impact digital products.",
      icon: <PenTool className="w-6 h-6" />,
      freeCourse: "Curriculum Design",
      cta: "Start Creator Path"
    }
  ];

  return (
    <section id="start" className="py-24 bg-black text-white relative pt-30">
      {/* Background radial glow for focus */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#001233] via-transparent to-transparent opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[#D4AF37] uppercase tracking-[0.4em] text-xs font-bold mb-4">Onboarding</p>
          <h2 className="text-4xl md:text-6xl font-serif mb-6">Choose Your Learning Path</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            You don’t need to figure everything out alone. Select the path that fits your goals and start learning with clarity and direction.
          </p>
        </div>

        {/* Path Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {paths.map((path) => (
            <div key={path.id} className="group bg-[#001233]/20 border border-white/10 p-10 hover:border-[#D4AF37]/50 transition-all duration-500 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 bg-black border border-[#D4AF37]/30 text-[#D4AF37]">
                    {path.icon}
                  </div>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">Path_0{path.id}</span>
                </div>
                
                <h3 className="text-2xl font-serif mb-2">{path.title}</h3>
                <p className="text-[#D4AF37] text-xs uppercase tracking-widest font-bold mb-6">{path.subtitle}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 h-12">
                  {path.description}
                </p>

                {/* Recommended Free Course */}
                <div className="mb-10 p-4 bg-black/40 border-l-2 border-[#D4AF37] flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase">Recommended Starter</p>
                    <p className="text-sm font-semibold italic text-white">{path.freeCourse}</p>
                  </div>
                  <div className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-tighter">Free Access</div>
                </div>
              </div>

              <button className="flex items-center justify-center gap-3 w-full py-4 bg-transparent border border-white/20 text-white uppercase tracking-widest text-xs font-bold group-hover:bg-white group-hover:text-black transition-all duration-500">
                {path.cta} <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* Secondary Invitations */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Membership Invite */}
          <div className="relative p-1 border-gradient bg-gradient-to-r from-[#D4AF37]/40 to-transparent">
            <div className="bg-black p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-white font-serif text-xl">Academy Membership</h4>
                <p className="text-gray-500 text-sm mt-1">Unlock all paths and the full AI toolset.</p>
              </div>
              <button className="px-8 py-3 bg-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-colors">
                Join Now
              </button>
            </div>
          </div>

          {/* Business Invite */}
          <div className="relative p-1 border-gradient bg-gradient-to-r from-white/20 to-transparent">
            <div className="bg-black p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-white font-serif text-xl">Business Solutions</h4>
                <p className="text-gray-500 text-sm mt-1">Custom frameworks for your organization.</p>
              </div>
              <button className="px-8 py-3 border border-white/40 text-white text-[10px] font-bold uppercase tracking-widest hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors">
                Explore Enterprise
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StartHere;