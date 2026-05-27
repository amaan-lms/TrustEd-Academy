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

            {/* Logo */}
            <div className="relative z-10">

              <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center p-4 mb-10">
                <img
                  src={TAlogo}
                  alt="TrustEd Academy"
                  className="w-full h-full object-contain"
                />
              </div>

              <span className="text-[#60A5FA] uppercase tracking-[0.2em] text-[10px] font-semibold">
                Contact Us
              </span>

              <h2 className="mt-5 text-white text-4xl md:text-5xl font-semibold tracking-[-0.05em] leading-[1.05]">
                Let’s Build
                <span className="block text-white/60 font-light">
                  Smarter Learning.
                </span>
              </h2>

              <p className="mt-6 text-white/70 text-base leading-relaxed max-w-md">
                Connect with our team to create scalable and modern learning systems.
              </p>
            </div>

            {/* Contact Info */}
            <div className="relative z-10 mt-14 space-y-5">

              <div className="flex items-center gap-4 text-white/80">
                <Mail className="w-5 h-5 text-[#60A5FA]" />
                <span className="text-sm">info@trustedacademy.com</span>
              </div>

              <div className="flex items-center gap-4 text-white/80">
                <Phone className="w-5 h-5 text-[#60A5FA]" />
                <span className="text-sm">+1 (000) 000-0000</span>
              </div>

              <div className="flex items-center gap-4 text-white/80">
                <Building2 className="w-5 h-5 text-[#60A5FA]" />
                <span className="text-sm">Enterprise Learning Solutions</span>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="p-10 md:p-14">

            <div className="mb-10">
              <span className="text-[#2563EB] uppercase tracking-[0.2em] text-[10px] font-semibold">
                Get In Touch
              </span>

              <h3 className="mt-4 text-[#0F172A] text-3xl md:text-4xl font-semibold tracking-[-0.04em]">
                Start Your Project
              </h3>
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
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full h-14 px-5 rounded-2xl border border-[#D0D5DD] bg-[#FCFCFD] outline-none focus:border-[#2563EB] transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm text-[#344054] mb-2">
                  Organization
                </label>

                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full h-14 px-5 rounded-2xl border border-[#D0D5DD] bg-[#FCFCFD] outline-none focus:border-[#2563EB] transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm text-[#344054] mb-2">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell us about your learning goals..."
                  className="w-full px-5 py-4 rounded-2xl border border-[#D0D5DD] bg-[#FCFCFD] outline-none focus:border-[#2563EB] transition-all duration-300 resize-none"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-3 bg-[#0F172A] hover:bg-black text-white px-8 py-5 rounded-full transition-all duration-300 text-sm font-medium"
              >
                Send Message

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