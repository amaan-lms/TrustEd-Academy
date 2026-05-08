import React from 'react';
import {
  ShieldCheck,
  BriefcaseBusiness,
  Landmark,
  Lock,
  FileText,
  ArrowRight,
} from 'lucide-react';

const EducationCategories = () => {
  const categories = [
    {
      title: 'Trust Foundations',
      desc: 'Learn the core principles behind trust systems, structure, and long-term educational growth.',
      icon: ShieldCheck,
      num: '01'
    },
    {
      title: 'Business Structures',
      desc: 'Build organized operational systems designed for scalable business education.',
      icon: BriefcaseBusiness,
      num: '02'
    },
    {
      title: 'Financial Education',
      desc: 'Understand financial literacy, strategic organization, and educational planning.',
      icon: Landmark,
      num: '03'
    },
    {
      title: 'Private Membership Systems',
      desc: 'Structured private learning environments designed for secure educational access.',
      icon: Lock,
      num: '04'
    },
    {
      title: 'Document Literacy',
      desc: 'Develop the ability to understand, organize, and interpret important documentation.',
      icon: FileText,
      num: '05'
    },
  ];

  return (
    <section className="relative py-24 pt-12 pb-6 bg-[#0A0A0A] overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col items-center mb-24">
          <div className="flex items-center gap-6 mb-8">
            <div className="h-px w-8 bg-[#C8A96A]/40"></div>
            <span className="text-[#C8A96A] uppercase tracking-[0.5em] text-[10px] font-bold">
              Core Education Categories
            </span>
            <div className="h-px w-8 bg-[#C8A96A]/40"></div>
          </div>
          
          <h2 className="text-white font-serif text-5xl md:text-5xl uppercase leading-none text-center">
            Educational <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8A96A] via-[#E6D2A5] to-[#C8A96A]">
              Learning Systems
            </span>
          </h2>
        </div>

        {/* --- STAGGERED CATEGORY PILLARS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((item, index) => {
            const Icon = item.icon;
            
            // Stagger logic: 1st/5th low, 2nd/4th mid, 3rd high
            const staggerClasses = [
              "lg:mt-12", // 01
              "lg:mt-6",  // 02
              "lg:mt-0",   // 03 (Hero)
              "lg:mt-6",  // 04
              "lg:mt-12"  // 05
            ];

            return (
              <div
                key={index}
                className={`group relative bg-[#111827]/30 border border-white/5 p-10 transition-all duration-700 hover:bg-[#111827]/60 hover:border-[#C8A96A]/30 ${staggerClasses[index]}`}
              >
                {/* Background Numbering */}
                <span className="absolute top-4 right-6 font-serif text-4xl text-white/[0.03] group-hover:text-[#C8A96A]/10 transition-colors duration-500 pointer-events-none">
                  {item.num}
                </span>

                {/* Corner Accents (Visible on Hover) */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#C8A96A] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-4px] translate-y-[-4px] group-hover:translate-x-0 group-hover:translate-y-0"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#C8A96A] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[4px] translate-y-[4px] group-hover:translate-x-0 group-hover:translate-y-0"></div>

                {/* Icon Container */}
                <div className="relative w-12 h-12 border-l border-t border-[#C8A96A]/20 flex items-center justify-center mb-12 group-hover:border-[#C8A96A] transition-colors duration-500">
                  <Icon className="w-5 h-5 text-[#C8A96A]" />
                </div>

                {/* Content */}
                <div className="min-h-[220px] flex flex-col">
                  <h3 className="text-white uppercase tracking-[0.2em] text-xs font-black mb-6 leading-relaxed group-hover:text-[#C8A96A] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-[#A0A0A0] text-sm leading-relaxed mb-auto font-light group-hover:text-[#D0D0D0] transition-colors">
                    {item.desc}
                  </p>

                  <div className="pt-8">
                    <button className="flex items-center gap-4 text-[#C8A96A] uppercase tracking-[0.25em] text-[9px] font-black group/btn">
                      Access Pillar
                      <div className="overflow-hidden w-4 flex items-center">
                         <ArrowRight className="w-4 h-4 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500" />
                      </div>
                    </button>
                    
                    {/* Animated Underline */}
                    <div className="w-6 h-[1px] bg-[#C8A96A]/30 mt-4 group-hover:w-full transition-all duration-1000 ease-in-out"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- SECTION FOOTER --- */}
        {/* <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[#606060] text-[10px] uppercase tracking-[0.4em]">
              © TrustEd Academy Private Learning Systems
            </p>
            <div className="flex gap-1">
              {[1, 2, 3].map((dot) => (
                <div key={dot} className="w-1 h-1 bg-[#C8A96A]/40 rounded-full"></div>
              ))}
            </div>
        </div> */}

      </div>
    </section>
  );
};

export default EducationCategories;