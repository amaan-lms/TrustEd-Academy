import React, { useState } from "react";
import {
  BriefcaseBusiness,
  GraduationCap,
  LayoutGrid,
  Users,
  ArrowRight,
} from "lucide-react";

const EducationHub = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    {
      title: "Corporate Training",
      icon: BriefcaseBusiness,
      desc:
        "Workforce learning systems designed for onboarding and employee development.",
      items: [
        "Employee Onboarding",
        "Leadership Training",
        "Workforce Enablement",
      ],
    },

    {
      title: "Instructional Design",
      icon: LayoutGrid,
      desc:
        "Learning frameworks focused on engagement and measurable outcomes.",
      items: [
        "Curriculum Design",
        "Learning Journeys",
        "Assessment Systems",
      ],
    },

    {
      title: "L&D Consulting",
      icon: GraduationCap,
      desc:
        "Scalable learning systems that support HR and organizational growth.",
      items: [
        "LMS Planning",
        "Skills Development",
        "Training Operations",
      ],
    },

    {
      title: "Team Development",
      icon: Users,
      desc:
        "Collaborative learning experiences for management and workplace culture.",
      items: [
        "Communication Training",
        "Management Development",
        "Team Culture",
      ],
    },
  ];

  return (
    <section
      id="member"
      className="relative py-24 bg-slate-100 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0F172A 1px, transparent 1px),
              linear-gradient(to bottom, #0F172A 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px",
          }}
        />

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mb-16 md:mb-20">
          <span className="uppercase tracking-[0.25em] text-[11px] font-semibold text-[#2563EB]">
            Strategic Learning Solutions
          </span>

          <h2 className="mt-5 text-4xl md:text-6xl font-semibold tracking-[-0.05em] leading-[1.02] text-[#0F172A]">
            Structured Learning
            <span className="block text-[#94A3B8] font-light">
              Systems & Strategy.
            </span>
          </h2>

          <p className="mt-6 text-[#667085] text-base md:text-lg leading-relaxed max-w-3xl">
            TrustEd helps organizations improve onboarding, compliance, and
            workforce development through modern instructional systems and
            scalable learning strategies.
          </p>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-10 items-start">
          {/* Left Side */}
          <div className="space-y-5">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              const active = activeIndex === idx;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                  className={`group cursor-pointer rounded-[28px] border transition-all duration-500 overflow-hidden ${active
                    ? "bg-[#0F172A] border-[#0F172A] shadow-[0_20px_60px_rgba(15,23,42,0.12)]"
                    : "bg-[#F8FAFC] border-[#E4E7EC] hover:bg-white"
                    }`}
                >
                  <div className="p-5 md:p-7 flex items-start justify-between gap-4">
                    <div className="flex gap-4 md:gap-5">
                      <div
                        className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${active ? "bg-white/10" : "bg-white"
                          }`}
                      >
                        <Icon
                          className={`w-5 h-5 md:w-6 md:h-6 ${active ? "text-white" : "text-[#0F172A]"
                            }`}
                        />
                      </div>

                      <div>
                        <h3
                          className={`text-xl md:text-2xl font-semibold tracking-[-0.04em] ${active ? "text-white" : "text-[#0F172A]"
                            }`}
                        >
                          {cat.title}
                        </h3>

                        <p
                          className={`mt-2 md:mt-3 text-sm leading-relaxed max-w-md ${active ? "text-white/70" : "text-[#667085]"
                            }`}
                        >
                          {cat.desc}
                        </p>
                      </div>
                    </div>

                    <ArrowRight
                      className={`w-5 h-5 mt-2 transition-all duration-300 flex-shrink-0 ${active
                        ? "text-white translate-x-1"
                        : "text-[#98A2B3] group-hover:translate-x-1"
                        }`}
                    />
                  </div>

                  {/* Expand Area */}
                  <div
                    className={`grid transition-all duration-500 ${active
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 md:px-7 pb-5 md:pb-7 pt-1 flex flex-wrap gap-3">
                        {cat.items.map((item, i) => (
                          <div
                            key={i}
                            className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white text-sm"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side */}
          <div className="lg:sticky lg:top-28">
            <div className="relative overflow-hidden rounded-[30px] md:rounded-[36px] bg-[#0F172A] p-6 md:p-10 lg:p-14 text-white min-h-auto lg:min-h-[700px] flex flex-col justify-between">
              {/* Glow */}
              <div className="absolute top-0 right-0 w-[250px] md:w-[300px] h-[250px] md:h-[300px] bg-[#2563EB]/20 rounded-full blur-3xl"></div>

              {/* Top */}
              <div className="relative z-10">
                <span className="uppercase tracking-[0.22em] text-[10px] font-semibold text-white/60">
                  Active Learning Framework
                </span>

                <h3 className="mt-4 md:mt-5 text-3xl md:text-5xl font-semibold tracking-[-0.05em] leading-tight">
                  {categories[activeIndex].title}
                </h3>

                <p className="mt-5 md:mt-6 text-white/70 leading-relaxed text-base md:text-lg max-w-lg">
                  {categories[activeIndex].desc}
                </p>
              </div>

              {/* Stats */}
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 md:mt-16">
                {categories[activeIndex].items.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                  >
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                      Solution {i + 1}
                    </span>

                    <h4 className="mt-3 md:mt-4 text-base md:text-sm font-semibold tracking-[-0.03em] leading-snug">
                      {item}
                    </h4>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="relative z-10 mt-10 md:mt-16">
                <button className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-[#0F172A] px-7 py-4 rounded-full font-medium hover:bg-[#F8FAFC] transition-all duration-300">
                  Schedule a Consultation

                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationHub;