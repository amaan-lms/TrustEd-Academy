import React from 'react';
import { ArrowRight } from 'lucide-react';

const FeaturedCourses = () => {

  const courses = [
    {
      title: 'Artificial Intelligence Systems',
      desc: 'Learn structured AI workflows, automation systems, and practical implementation strategies.',
      image:
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Business & Entrepreneurship',
      desc: 'Build operational systems, scalable business structures, and strategic growth frameworks.',
      image:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Financial Education',
      desc: 'Develop practical financial literacy, organization, and wealth-building foundations.',
      image:
        'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Technology & Cybersecurity',
      desc: 'Understand modern digital systems, cybersecurity fundamentals, and online infrastructure.',
      image:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Health & Wellness',
      desc: 'Explore preventative health, nutrition systems, wellness strategies, and healthy living.',
      image:
        'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Professional Development',
      desc: 'Strengthen communication, leadership, consulting, and real-world professional skills.',
      image:
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Homesteading & Sustainability',
      desc: 'Learn self-sufficiency systems including food storage, hydroponics, and sustainable living.',
      image:
        'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Personal Growth & Mindset',
      desc: 'Build stronger habits, critical thinking, discipline, and long-term personal development.',
      image:
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <section className="relative py-28 pt-10 bg-[#0A0A0A] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#C8A96A]/5 blur-[160px] rounded-full"></div>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(#C8A96A 1px, transparent 1px),
            linear-gradient(90deg, #C8A96A 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-24">

          <div className="flex items-center justify-center gap-4 mb-6">

            <div className="w-12 h-[1px] bg-[#C8A96A]"></div>

            <span className="text-[#C8A96A] uppercase tracking-[0.35em] text-xs font-semibold">
              Featured Courses
            </span>

            <div className="w-12 h-[1px] bg-[#C8A96A]"></div>
          </div>

          <h2 className="text-white font-serif text-5xl md:text-5xl uppercase leading-tight">

            Structured
            <span className="block text-[#C8A96A]">
              Learning Paths
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-[#A0A0A0] text-lg leading-relaxed mt-8">
            Explore professionally structured education systems designed
            for practical implementation, skill development, and long-term growth.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">

          {courses.map((course, index) => (
            <div
              key={index}
              className="group relative bg-[#111827]/40 border border-white/10 hover:border-[#C8A96A]/40 transition-all duration-500 overflow-hidden"
            >

              {/* Image */}
              <div className="relative overflow-hidden h-[260px]">

                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8">

                <h3 className="text-white uppercase tracking-[0.12em] text-sm font-bold leading-relaxed mb-5 group-hover:text-[#C8A96A] transition-colors duration-300">
                  {course.title}
                </h3>

                <p className="text-[#A0A0A0] text-sm leading-relaxed mb-10 min-h-[90px]">
                  {course.desc}
                </p>

                {/* CTA */}
                <button className="group/button flex items-center gap-3 text-[#C8A96A] uppercase tracking-[0.18em] text-[11px] font-bold">

                  Access Course

                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                </button>

                {/* Bottom Line */}
                <div className="w-10 h-[1px] bg-[#C8A96A] mt-8 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedCourses;