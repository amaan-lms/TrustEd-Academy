import React from "react";
import { ArrowRight } from "lucide-react";

const FeaturedCourses = () => {
  const courses = [
    {
      title: "Leadership",
      desc: "Build confident modern leaders.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Onboarding",
      desc: "Smooth employee onboarding systems.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Learning Design",
      desc: "Scalable instructional frameworks.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Digital Learning",
      desc: "Modern virtual learning experiences.",
      image:
        "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section id='Programs' className="relative py-14 bg-white overflow-hidden">

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

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="text-[#2563EB] uppercase tracking-[0.22em] text-[10px] font-semibold">
            Learning Programs
          </span>

          <h2 className="mt-5 text-[#0F172A] text-4xl md:text-5xl font-semibold tracking-[-0.05em] leading-[1.05]">
            Modern Courses
            <span className="block text-[#94A3B8] font-light">
              For Growing Teams.
            </span>
          </h2>

          <p className="mt-6 text-[#667085] text-base leading-relaxed">
            Scalable learning systems designed for workforce growth.
          </p>
        </div>

        {/* Redesigned Layout */}
        <div className="grid md:grid-cols-2 gap-6">

          {courses.map((course, index) => (
            <div
              key={index}
              className="group bg-white border border-[#E4E7EC] rounded-[28px] overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
            >

              <div className="grid md:grid-cols-2 h-full">

                {/* Image */}
                <div className="relative h-[240px] md:h-full overflow-hidden">

                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-center">

                  <span className="text-[#2563EB] uppercase tracking-[0.18em] text-[10px] font-semibold mb-4">
                    Featured Program
                  </span>

                  <h3 className="text-[#101828] text-2xl font-semibold tracking-[-0.03em] mb-4">
                    {course.title}
                  </h3>

                  <p className="text-[#667085] text-sm leading-relaxed mb-8">
                    {course.desc}
                  </p>

                  {/* CTA */}
                  <button className="inline-flex items-center gap-2 text-[#0F172A] hover:text-[#2563EB] transition-all duration-300">
                    <span className="uppercase tracking-[0.16em] text-[10px] font-semibold">
                      Explore
                    </span>

                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;