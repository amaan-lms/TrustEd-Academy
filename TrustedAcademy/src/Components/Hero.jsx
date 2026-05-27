import React from "react";
import {
  ArrowRight,
  Play,
  Building2,
  Layers3,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

const Hero = () => {
  return (
    <section id='hero' className="relative min-h-screen overflow-hidden bg-[#F8FAFC] pt-26 pb-20">

      {/* Background */}
      <div className="absolute inset-0 z-0">

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0F172A 1px, transparent 1px),
              linear-gradient(to bottom, #0F172A 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Soft Gradient */}
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-blue-100 rounded-full blur-3xl opacity-40"></div>

        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-slate-200 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-20 items-center">

          {/* Left Content */}
          <div className="lg:col-span-7">

            {/* Heading */}
            <div className="space-y-8">
              <h1 className="text-[#0F172A] text-5xl md:text-7xl xl:text-[70px] font-semibold tracking-[-0.06em] leading-[0.92]">
                Learning
                <br />
                Architecture
                <span className="block text-[#94A3B8] font-light">
                  For Modern Teams.
                </span>
              </h1>

              <p className="max-w-2xl text-[#475467] text-md md:text-xl leading-relaxed font-light">
                TrustEd Academy designs scalable instructional systems,
                corporate learning experiences, and strategic education
                frameworks for organizations that want measurable learning
                outcomes and modern workforce development.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-5 mt-12">

              <button className="group inline-flex items-center gap-3 bg-[#0F172A] hover:bg-black text-white px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 shadow-xl shadow-slate-200">
                Schedule Consultation

                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button className="group inline-flex items-center gap-3 border border-[#D0D5DD] hover:border-[#0F172A] bg-white text-[#0F172A] px-8 py-4 rounded-full text-sm font-medium transition-all duration-300">
                <Play className="w-4 h-4 fill-current" />

                View Services
              </button>
            </div>

            {/* Metrics */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-[#E4E7EC]">
              {[
                {
                  number: "120+",
                  label: "Learning Systems",
                },
                {
                  number: "40+",
                  label: "Enterprise Clients",
                },
                {
                  number: "Global",
                  label: "Remote Delivery",
                },
                {
                  number: "98%",
                  label: "Completion Rates",
                },
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="text-[#0F172A] text-3xl font-semibold tracking-[-0.04em]">
                    {item.number}
                  </h3>

                  <p className="mt-2 text-[#667085] text-sm uppercase tracking-[0.14em]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div> */}
          </div>

          {/* Right Visual */}
          <div className="lg:col-span-5 relative">

            {/* Main Card */}
            <div className="relative bg-white border border-[#E4E7EC] rounded-[28px] p-6 md:p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)] overflow-hidden">

              {/* Decorative */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-blue-50 rounded-full blur-3xl"></div>

              {/* Top */}
              <div className="flex items-center justify-between mb-10">
                <div>
                  <p className="text-[#98A2B3] uppercase tracking-[0.16em] text-[10px] font-semibold mb-2">
                    TrustEd Academy
                  </p>

                  <h3 className="text-[#0F172A] text-2xl font-semibold tracking-[-0.03em]">
                    Strategic Learning
                  </h3>
                </div>

                <div className="w-12 h-12 rounded-xl bg-[#0F172A] flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Feature Cards */}
              <div className="space-y-4">
                {[
                  {
                    icon: Building2,
                    title: "Corporate Learning Systems",
                    desc: "Scalable enterprise training frameworks.",
                  },
                  {
                    icon: Layers3,
                    title: "Instructional Design Strategy",
                    desc: "Structured curriculum and learning architecture.",
                  },
                  {
                    icon: CheckCircle2,
                    title: "Performance-Based Outcomes",
                    desc: "Designed around measurable learner success.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group flex items-start gap-4 border border-[#EAECF0] hover:border-[#CBD5E1] rounded-xl p-4 transition-all duration-300 bg-[#FCFCFD]"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#F1F5F9] flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-[#0F172A]" />
                    </div>

                    <div>
                      <h4 className="text-[#101828] font-semibold text-base mb-1">
                        {item.title}
                      </h4>

                      <p className="text-[#667085] text-xs leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Label */}
              <div className="mt-7 pt-5 border-t border-[#EAECF0] flex items-center justify-between">
                <p className="text-[#98A2B3] text-[10px] uppercase tracking-[0.16em]">
                  Modern Learning Infrastructure
                </p>

                <ArrowRight className="w-4 h-4 text-[#0F172A]" />
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-5 -left-5 bg-white border border-[#E4E7EC] rounded-2xl px-4 py-4 shadow-xl hidden md:block">
              <p className="text-[#98A2B3] text-[10px] uppercase tracking-[0.16em] mb-1">
                Active Consulting
              </p>

              <h4 className="text-[#0F172A] text-xl font-semibold tracking-[-0.03em]">
                24 Enterprise
              </h4>

              <p className="text-[#667085] text-xs mt-1">
                organizations currently supported
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;