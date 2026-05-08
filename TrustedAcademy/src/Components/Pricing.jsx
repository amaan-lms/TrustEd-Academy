import React from 'react';
import {
  Compass,
  GraduationCap,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';

const HowItWorks = () => {

  const steps = [
    {
      number: '01',
      title: 'Choose Your Path',
      desc: 'Select the education category, learning system, or professional pathway that aligns with your goals.',
      icon: Compass,
    },
    {
      number: '02',
      title: 'Access Courses',
      desc: 'Unlock structured courses, guided systems, educational resources, and private learning tools.',
      icon: GraduationCap,
    },
    {
      number: '03',
      title: 'Apply & Grow',
      desc: 'Implement real-world knowledge, strengthen practical skills, and continue long-term development.',
      icon: TrendingUp,
    },
  ];

  return (
    <section className="relative py-28 pt-18 bg-[#0A0A0A] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#C8A96A]/5 blur-[140px] rounded-full"></div>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(#C8A96A 1px, transparent 1px),
            linear-gradient(90deg, #C8A96A 1px, transparent 1px)
          `,
          backgroundSize: '70px 70px',
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-24">

          <div className="flex items-center justify-center gap-4 mb-6">

            <div className="w-12 h-[1px] bg-[#C8A96A]"></div>

            <span className="text-[#C8A96A] uppercase tracking-[0.35em] text-xs font-semibold">
              How It Works
            </span>

            <div className="w-12 h-[1px] bg-[#C8A96A]"></div>
          </div>

          <h2 className="text-white font-serif text-5xl md:text-5xl uppercase leading-tight">

            A Simple
            <span className="block text-[#C8A96A]">
              Structured Process
            </span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-6 relative">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="group relative bg-[#111827]/40 border border-white/10 hover:border-[#C8A96A]/40 p-10 lg:p-12 transition-all duration-500 overflow-hidden"
              >

                {/* Hover Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C8A96A]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Step Number */}
                <span className="absolute top-8 right-8 text-[#C8A96A]/15 font-serif text-6xl">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="relative z-10 w-16 h-16 border border-[#C8A96A]/30 flex items-center justify-center mb-10 group-hover:bg-[#C8A96A] transition-all duration-500">

                  <Icon className="w-7 h-7 text-[#C8A96A] group-hover:text-black transition-all duration-500" />
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-white uppercase tracking-[0.15em] text-lg font-bold mb-6">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-[#A0A0A0] text-base leading-relaxed mb-10">
                  {step.desc}
                </p>

                {/* Bottom Line */}
                <div className="relative z-10 flex items-center gap-3">

                  <div className="h-[1px] w-12 bg-[#C8A96A] group-hover:w-full transition-all duration-700"></div>

                  <ArrowRight className="w-4 h-4 text-[#C8A96A] opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;