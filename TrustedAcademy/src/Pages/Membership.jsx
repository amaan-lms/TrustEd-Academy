import React, { useState } from 'react';
import {
  Hammer,
  Leaf,
  BriefcaseBusiness,
  Cpu,
  HeartPulse,
  Scale,
  Brain,
  GraduationCap,
  ArrowRight,
  ChevronRight,
  Target
} from 'lucide-react';

const EducationHub = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    { title: 'Skilled Trades', icon: Hammer, items: ['Carpentry', 'Welding', 'Plumbing', 'Electrical', 'HVAC', 'Mechanics', 'Construction', 'Equipment Operation'] },
    { title: 'Self-Sufficiency', icon: Leaf, items: ['Homesteading', 'Soil Growing', 'Hydroponics', 'Food Storage', 'Water Systems', 'Permaculture', 'Sustainable Living'] },
    { title: 'Entrepreneurship', icon: BriefcaseBusiness, items: ['Startup & Scaling', 'Business Structure', 'Operations', 'Finance & Accounting', 'Marketing & Sales', 'Automation', 'E-Commerce'] },
    { title: 'Technology & AI', icon: Cpu, items: ['Artificial Intelligence', 'Software Systems', 'Digital Marketing', 'Online Business', 'Cybersecurity', 'Data & Analytics', 'Productivity Tools'] },
    { title: 'Health & Wellness', icon: HeartPulse, items: ['Nutrition', 'Fitness', 'Preventative Health', 'Mental Wellness', 'Herbal Knowledge', 'First Aid'] },
    { title: 'Professional Knowledge', icon: Scale, items: ['Law Fundamentals', 'Medical Concepts', 'Nursing Education', 'Paralegal Studies', 'Consulting Skills', 'Administrative Skills'] },
    { title: 'Personal Development', icon: Brain, items: ['Mindset', 'Leadership', 'Communication', 'Critical Thinking', 'Discipline', 'Time Management', 'Financial Literacy'] },
    { title: 'Family & Education', icon: GraduationCap, items: ['Homeschooling', 'Child Development', 'Parenting Skills', 'Character Building', 'Life Skills', 'Creative Arts'] },
  ];

  return (
    <section className="relative min-h-screen bg-[#050505] text-white py-24 overflow-hidden font-sans">
      
      {/* Background Refinement */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#C8A96A]/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#C8A96A]/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* --- COMPACT HEADER --- */}
        <div className="mb-16 border-l-2 border-[#C8A96A] pl-8">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-4 h-4 text-[#C8A96A]" />
            <span className="text-[#C8A96A] uppercase tracking-[0.4em] text-[10px] font-black">
              System Infrastructure v2.0
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif uppercase tracking-tight leading-none mb-4">
            Education <span className="text-[#C8A96A]  font-light ">Hub</span>
          </h2>
          <p className="max-w-xl text-[#777] text-sm leading-relaxed">
            A centralized ecosystem covering practical trades, technology, and real-world knowledge development. Select a sector to initialize modules.
          </p>
        </div>

        {/* --- DASHBOARD LAYOUT --- */}
        <div className="grid lg:grid-cols-[320px_1fr] gap-6 items-start">
          
          {/* SIDE NAVIGATION */}
          <div className="grid grid-cols-1 gap-2">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              const active = activeIndex === idx;
              return (
                <button
                  key={idx}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`group flex items-center justify-between p-4 border transition-all duration-300 ${
                    active 
                    ? 'bg-[#C8A96A] border-[#C8A96A] shadow-[0_0_20px_rgba(200,169,106,0.2)]' 
                    : 'bg-white/[0.03] border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <Icon className={`w-4 h-4 ${active ? 'text-black' : 'text-[#C8A96A]'}`} />
                    <span className={`text-[11px] uppercase tracking-[0.15em] font-bold ${active ? 'text-black' : 'text-white/70'}`}>
                      {cat.title}
                    </span>
                  </div>
                  <ChevronRight className={`w-3 h-3 ${active ? 'text-black' : 'opacity-0'}`} />
                </button>
              );
            })}
          </div>

          {/* DYNAMIC CONTENT TERMINAL */}
          <div className="bg-[#0A0A0A] border border-white/10 rounded-sm relative overflow-hidden group">
            {/* Terminal Header Decor */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C8A96A] via-transparent to-transparent opacity-50" />
            
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                <div>
                  <span className="text-[#C8A96A] font-mono text-[10px] tracking-[0.5em] block mb-2 uppercase">
                    Sector 0{activeIndex + 1} // Active_Path
                  </span>
                  <h3 className="text-3xl md:text-4xl font-serif text-white uppercase tracking-tight">
                    {categories[activeIndex].title}
                  </h3>
                </div>
                
                <div className="flex items-center gap-4 text-[#555] text-[10px] font-mono uppercase tracking-widest">
                  <span>Status: Operational</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                </div>
              </div>

              {/* MODULE MICRO-GRID */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {categories[activeIndex].items.map((item, i) => (
                  <div 
                    key={i} 
                    className="group/item relative p-5 bg-white/[0.02] border border-white/5 hover:border-[#C8A96A]/30 transition-all duration-300"
                  >
                    <div className="relative z-10 flex flex-col justify-between h-full min-h-[80px]">
                      <span className="text-[#C8A96A]/40 text-[9px] font-mono mb-4 tracking-tighter">
                        MOD_{activeIndex + 1}.0{i + 1}
                      </span>
                      <h4 className="text-white/90 group-hover/item:text-[#C8A96A] text-xs font-bold uppercase tracking-wider transition-colors">
                        {item}
                      </h4>
                    </div>
                    {/* Hover Visual */}
                    <div className="absolute bottom-0 right-0 p-2 opacity-0 group-hover/item:opacity-100 transition-opacity">
                      <ArrowRight className="w-3 h-3 text-[#C8A96A]" />
                    </div>
                  </div>
                ))}
              </div>

              {/* FOOTER CTA */}
              <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
                <p className="text-[#555] text-[10px] uppercase tracking-widest">
                  Initialize full curriculum for {categories[activeIndex].title}
                </p>
                <button className="flex items-center gap-4 bg-[#C8A96A] px-6 py-3 text-black text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white transition-all">
                  Access Course Path
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Corner Decor */}
            <div className="absolute top-4 right-4 flex gap-1">
              <div className="w-1 h-1 bg-[#C8A96A]/20" />
              <div className="w-1 h-1 bg-[#C8A96A]/20" />
              <div className="w-1 h-1 bg-[#C8A96A]/20" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationHub;