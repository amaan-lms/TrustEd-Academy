import React, { useState } from "react";
import {
  BriefcaseBusiness,
  GraduationCap,
  LayoutGrid,
  LineChart,
  Users,
  Cpu,
  ArrowRight,
} from "lucide-react";

const EducationHub = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    {
      title: "Corporate Learning",
      icon: BriefcaseBusiness,
      desc: "Modern workforce learning systems.",
      items: ["Onboarding", "Leadership", "Enablement"],
    },
    // {
    //   title: "Instructional Design",
    //   icon: LayoutGrid,
    //   desc: "Structured learning experiences.",
    //   items: ["Curriculum", "Journeys", "Assessments"],
    // },
    {
      title: "Learning Strategy",
      icon: GraduationCap,
      desc: "Scalable enterprise frameworks.",
      items: ["LMS Planning", "Skills", "Operations"],
    },
    {
      title: "Performance Systems",
      icon: LineChart,
      desc: "Analytics and optimization systems.",
      items: ["Analytics", "Reporting", "Optimization"],
    },
    {
      title: "Team Development",
      icon: Users,
      desc: "Collaborative team learning.",
      items: ["Communication", "Culture", "Managers"],
    },
    // {
    //   title: "Technology Integration",
    //   icon: Cpu,
    //   desc: "AI-powered learning ecosystems.",
    //   items: ["AI Systems", "Automation", "Platforms"],
    // },
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
        <div className="max-w-3xl mb-20">
          <span className="uppercase tracking-[0.25em] text-[11px] font-semibold text-[#2563EB]">
            Enterprise Learning
          </span>

          <h2 className="mt-5 text-5xl md:text-6xl font-semibold tracking-[-0.05em] leading-[1.02] text-[#0F172A]">
            Modern Learning
            <span className="block text-[#94A3B8] font-light">
              Systems & Strategy.
            </span>
          </h2>
        </div>

        {/* New Layout */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          {/* Left Side */}
          <div className="space-y-5">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              const active = activeIndex === idx;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`group cursor-pointer rounded-[28px] border transition-all duration-500 overflow-hidden ${active
                    ? "bg-[#0F172A] border-[#0F172A] shadow-[0_20px_60px_rgba(15,23,42,0.12)]"
                    : "bg-[#F8FAFC] border-[#E4E7EC] hover:bg-white"
                    }`}
                >
                  <div className="p-7 flex items-start justify-between gap-6">
                    <div className="flex gap-5">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${active ? "bg-white/10" : "bg-white"
                          }`}
                      >
                        <Icon
                          className={`w-6 h-6 ${active ? "text-white" : "text-[#0F172A]"
                            }`}
                        />
                      </div>

                      <div>
                        <h3
                          className={`text-2xl font-semibold tracking-[-0.04em] ${active ? "text-white" : "text-[#0F172A]"
                            }`}
                        >
                          {cat.title}
                        </h3>

                        <p
                          className={`mt-3 text-sm leading-relaxed max-w-md ${active ? "text-white/70" : "text-[#667085]"
                            }`}
                        >
                          {cat.desc}
                        </p>
                      </div>
                    </div>

                    <ArrowRight
                      className={`w-5 h-5 mt-2 transition-all duration-300 ${active
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
                      <div className="px-7 pb-7 pt-1 flex flex-wrap gap-3">
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
          <div className="sticky top-28">
            <div className="relative overflow-hidden rounded-[36px] bg-[#0F172A] p-10 md:p-14 text-white min-h-[620px] flex flex-col justify-between">

              {/* Glow */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#2563EB]/20 rounded-full blur-3xl"></div>

              {/* Top */}
              <div className="relative z-10">
                <span className="uppercase tracking-[0.22em] text-[10px] font-semibold text-white/60">
                  Active Framework
                </span>

                <h3 className="mt-5 text-4xl md:text-5xl font-semibold tracking-[-0.05em] leading-tight">
                  {categories[activeIndex].title}
                </h3>

                <p className="mt-6 text-white/70 leading-relaxed text-lg max-w-lg">
                  {categories[activeIndex].desc}
                </p>
              </div>

              {/* Stats */}
              <div className="relative z-10 grid grid-cols-3 gap-5 mt-16">
                {categories[activeIndex].items.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                  >
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                      Module {i + 1}
                    </span>

                    <h4 className="mt-4 text-xl font-semibold tracking-[-0.03em]">
                      {item}
                    </h4>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="relative z-10 mt-16">
                <button className="group inline-flex items-center gap-3 bg-white text-[#0F172A] px-7 py-4 rounded-full font-medium hover:bg-[#F8FAFC] transition-all duration-300">
                  Explore Services

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