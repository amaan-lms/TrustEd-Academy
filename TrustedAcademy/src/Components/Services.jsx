import React from "react";
import {
  LayoutGrid,
  GraduationCap,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const EducationCategories = () => {
  const categories = [
    {
      title: "Instructional Design Solutions",
      desc: "Strategic learning systems designed to improve employee understanding, engagement, and long-term workforce development.",
      icon: LayoutGrid,
      num: "01",
    },
    {
      title: "Corporate Training Strategy",
      desc: "Structured onboarding, compliance education, and workforce learning frameworks aligned with business objectives.",
      icon: GraduationCap,
      num: "02",
    },
    {
      title: "Enterprise Learning Delivery",
      desc: "Scalable learning infrastructure and LMS-based solutions built for modern organizations and operational teams.",
      icon: ShieldCheck,
      num: "03",
    },
  ];

  return (
    <section
      id="solutions"
      className="relative py-20 bg-[#F8FAFC] overflow-hidden"
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

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">

          <span className="text-[#2563EB] uppercase tracking-[0.2em] text-[10px] font-semibold">
            Corporate Learning Solutions
          </span>

          <h2 className="mt-5 text-[#0F172A] text-4xl md:text-5xl font-semibold tracking-[-0.05em] leading-[1.05]">
            Training Systems Built
            <span className="block text-[#94A3B8] font-light">
              For Modern Organizations.
            </span>
          </h2>

          <p className="mt-6 text-[#667085] text-base md:text-lg leading-relaxed">
            TrustEd partners with organizations, HR teams, compliance
            departments, and operational leaders to design structured learning
            systems that improve onboarding, workforce development, internal
            training, and employee performance.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {categories.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-[#FCFCFD] border border-[#E4E7EC] rounded-[28px] p-8 hover:bg-white hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
              >

                {/* Top */}
                <div className="flex items-center justify-between mb-10">

                  <div className="w-14 h-14 rounded-2xl bg-[#F1F5F9] flex items-center justify-center group-hover:bg-[#0F172A] transition-all duration-300">
                    <Icon className="w-6 h-6 text-[#0F172A] group-hover:text-white transition-all duration-300" />
                  </div>

                  <span className="text-4xl font-semibold text-[#E4E7EC]">
                    {item.num}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-[#101828] text-2xl font-semibold tracking-[-0.03em] mb-4 leading-snug">
                  {item.title}
                </h3>

                <p className="text-[#667085] text-sm leading-relaxed mb-10">
                  {item.desc}
                </p>

                {/* CTA */}
                <button className="inline-flex items-center gap-2 text-[#0F172A] hover:text-[#2563EB] transition-all duration-300">
                  <span className="uppercase tracking-[0.16em] text-[10px] font-semibold">
                    Learn More
                  </span>

                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationCategories;