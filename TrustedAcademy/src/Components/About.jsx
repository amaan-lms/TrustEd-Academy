import React from "react";
import {
  BookOpen,
  Layers3,
  BriefcaseBusiness,
  LineChart,
  ShieldCheck,
} from "lucide-react";

const ValuePropositionRow = () => {
  const valueProps = [
    {
      title: "Instructional Design",
      desc: "Strategic learning systems built for scalable workforce education and engagement.",
      icon: BookOpen,
    },
    {
      title: "Learning Architecture",
      desc: "Structured curriculum frameworks aligned with organizational outcomes.",
      icon: Layers3,
    },
    {
      title: "Corporate Training",
      desc: "Modern employee learning experiences designed for performance and retention.",
      icon: BriefcaseBusiness,
    },
    {
      title: "Measurable Results",
      desc: "Programs developed around real metrics, adoption, and learner success.",
      icon: LineChart,
    },
    {
      title: "Enterprise Ready",
      desc: "Professional systems designed for secure, scalable, and modern delivery.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id='about' className="relative py-20 bg-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0">

        {/* Grid */}
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

        {/* Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-60"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-slate-100 rounded-full blur-3xl opacity-70"></div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="max-w-3xl mb-20">

          <div className="flex items-center gap-4 mb-7">
            <div className="w-12 h-[1px] bg-[#2563EB]"></div>

            <span className="text-[#2563EB] uppercase tracking-[0.22em] text-[11px] font-semibold">
              Why Organizations Choose TrustEd
            </span>
          </div>

          <h2 className="text-[#0F172A] text-4xl md:text-6xl font-semibold tracking-[-0.05em] leading-[1.02]">
            Built For Modern
            <span className="block text-[#94A3B8] font-light">
              Learning Infrastructure.
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-5 border border-[#E4E7EC] rounded-[32px] overflow-hidden bg-[#FCFCFD] shadow-[0_20px_60px_rgba(15,23,42,0.04)]">

          {valueProps.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative p-8 lg:p-10 border-b md:border-b border-[#EAECF0] xl:border-b-0 xl:border-r last:border-r-0 hover:bg-white transition-all duration-500"
              >

                {/* Hover Accent */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-[#2563EB] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-[#F1F5F9] flex items-center justify-center mb-8 transition-all duration-500 group-hover:bg-[#0F172A]">
                  <Icon className="w-6 h-6 text-[#0F172A] group-hover:text-white transition-all duration-500" />
                </div>

                {/* Title */}
                <h3 className="text-[#101828] text-xl font-semibold tracking-[-0.03em] mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#667085] text-[15px] leading-relaxed">
                  {item.desc}
                </p>

                {/* Bottom */}
                <div className="mt-10 flex items-center gap-3 text-[#98A2B3] group-hover:text-[#2563EB] transition-all duration-300">
                  <div className="w-8 h-[1px] bg-current"></div>

                  <span className="uppercase tracking-[0.18em] text-[10px] font-semibold">
                    TrustEd System
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionRow;