import React from "react";
import { ArrowRight, Mail, Phone, Building2 } from "lucide-react";
import TAlogo from "../assets/clogo.png";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-24 bg-[#F8FAFC] overflow-hidden"
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 bg-white border border-[#E4E7EC] rounded-[36px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.06)]">
          {/* Left Side */}
          <div className="relative bg-[#0F172A] p-10 md:p-14 flex flex-col justify-between overflow-hidden">
            {/* Glow */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#2563EB]/20 rounded-full blur-3xl"></div>

            {/* Logo + Content */}
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center p-4 mb-10">
                <img
                  src={TAlogo}
                  alt="TrustEd Learning"
                  className="w-full h-full object-contain"
                />
              </div>

              <span className="text-[#60A5FA] uppercase tracking-[0.2em] text-[10px] font-semibold">
                Learning Consultation
              </span>

              <h2 className="mt-5 text-white text-4xl md:text-5xl font-semibold tracking-[-0.05em] leading-[1.05]">
                Build Smarter
                <span className="block text-white/60 font-light">
                  Training Systems.
                </span>
              </h2>

              <p className="mt-6 text-white/70 text-base leading-relaxed max-w-md">
                Partner with TrustEd to create onboarding systems, workforce
                training, compliance education, and scalable learning solutions.
              </p>
            </div>

            {/* Contact Info */}
            <div className="relative z-10 mt-14 space-y-5">
              <div className="flex items-center gap-4 text-white/80">
                <Mail className="w-5 h-5 text-[#60A5FA]" />

                <span className="text-sm">
                  hello@trustedlearning.com
                </span>
              </div>

              <div className="flex items-center gap-4 text-white/80">
                <Phone className="w-5 h-5 text-[#60A5FA]" />

                <span className="text-sm">+1 (000) 000-0000</span>
              </div>

              <div className="flex items-center gap-4 text-white/80">
                <Building2 className="w-5 h-5 text-[#60A5FA]" />

                <span className="text-sm">
                  Workforce Learning Solutions
                </span>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="p-10 md:p-14">
            <div className="mb-10">
              <span className="text-[#2563EB] uppercase tracking-[0.2em] text-[10px] font-semibold">
                Start The Conversation
              </span>

              <h3 className="mt-4 text-[#0F172A] text-3xl md:text-4xl font-semibold tracking-[-0.04em]">
                Discuss Your Training Goals
              </h3>

              <p className="mt-5 text-[#667085] leading-relaxed max-w-xl">
                Tell us about your organization, onboarding challenges, or
                workforce learning goals.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-[#344054] mb-2">
                    First Name
                  </label>

                  <input
                    type="text"
                    placeholder="John"
                    className="w-full h-14 px-5 rounded-2xl border border-[#D0D5DD] bg-[#FCFCFD] outline-none focus:border-[#2563EB] transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#344054] mb-2">
                    Last Name
                  </label>

                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full h-14 px-5 rounded-2xl border border-[#D0D5DD] bg-[#FCFCFD] outline-none focus:border-[#2563EB] transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-[#344054] mb-2">
                  Business Email
                </label>

                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full h-14 px-5 rounded-2xl border border-[#D0D5DD] bg-[#FCFCFD] outline-none focus:border-[#2563EB] transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm text-[#344054] mb-2">
                  Company Name
                </label>

                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full h-14 px-5 rounded-2xl border border-[#D0D5DD] bg-[#FCFCFD] outline-none focus:border-[#2563EB] transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm text-[#344054] mb-2">
                  Project Goals
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell us about your training needs, onboarding goals, or workforce learning challenges..."
                  className="w-full px-5 py-4 rounded-2xl border border-[#D0D5DD] bg-[#FCFCFD] outline-none focus:border-[#2563EB] transition-all duration-300 resize-none"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-3 bg-[#0F172A] hover:bg-black text-white px-8 py-5 rounded-full transition-all duration-300 text-sm font-medium"
              >
                Schedule Consultation

                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;