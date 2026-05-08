import React from 'react';
import {
  BookOpen,
  ShieldCheck,
  BrainCircuit,
  Globe,
  Lock,
} from 'lucide-react';

const ValuePropositionRow = () => {
  const valueProps = [
    {
      title: 'Structured Learning',
      desc: 'Step-by-step educational systems designed for clarity and long-term growth.',
      icon: BookOpen,
    },
    {
      title: 'Private Systems',
      desc: 'Controlled learning environments built for serious education and development.',
      icon: ShieldCheck,
    },
    {
      title: 'Real Knowledge',
      desc: 'Practical education focused on implementation and real-world application.',
      icon: BrainCircuit,
    },
    {
      title: 'For Everyone',
      desc: 'Built for individuals, families, professionals, and organizations.',
      icon: Globe,
    },
    {
      title: 'Confidentiality',
      desc: 'Professional systems designed with privacy and secure access in mind.',
      icon: Lock,
    },
  ];

  return (
    <section className="relative py-28 pt-32 bg-[#0A0A0A] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C8A96A]/5 blur-[120px] rounded-full"></div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">

          <div className="flex items-center justify-center gap-4 mb-6">

            <div className="w-12 h-[1px] bg-[#C8A96A]"></div>

            <span className="text-[#C8A96A] uppercase tracking-[0.35em] text-xs font-semibold">
              Value Proposition
            </span>

            <div className="w-12 h-[1px] bg-[#C8A96A]"></div>
          </div>

          <h2 className="text-white font-serif text-4xl md:text-5xl uppercase leading-tight">
            Built Around
            <span className="block text-[#C8A96A]">
              Structured Education.
            </span>
          </h2>
        </div>

        {/* Value Row */}
        <div className="border border-[#C8A96A]/15 bg-gradient-to-b from-[#111827] to-[#0A0A0A] overflow-hidden">

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10">

            {valueProps.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group bg-[#0A0A0A] p-8 lg:p-10 hover:bg-[#111827] transition-all duration-500"
                >

                  {/* Icon */}
                  <div className="w-14 h-14 border border-[#C8A96A]/30 flex items-center justify-center mb-8 group-hover:bg-[#C8A96A] transition-all duration-500">

                    <Icon className="w-6 h-6 text-[#C8A96A] group-hover:text-black transition-all duration-500" />
                  </div>

                  {/* Title */}
                  <h3 className="text-white uppercase tracking-[0.12em] text-sm font-semibold leading-relaxed mb-4">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#A0A0A0] text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Bottom Line */}
                  <div className="w-10 h-[1px] bg-[#C8A96A] mt-8 group-hover:w-full transition-all duration-700"></div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ValuePropositionRow;