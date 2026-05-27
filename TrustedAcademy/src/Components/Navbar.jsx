import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

import TAlogo from "../assets/TAlogo2.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    // { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Solutions", href: "#solutions" },

    { name: "Programs", href: "#Programs" },
    { name: "Membership", href: "#member" },

    // { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-[#E4E7EC]"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="h-[92px] flex items-center justify-between">

            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-4 group relative z-50"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#F5F7FA] border border-[#E4E7EC] flex items-center justify-center overflow-hidden">
                <img
                  src={TAlogo}
                  alt="TrustEd Academy"
                  className="w-9 h-9 object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="leading-tight">
                <h2 className="text-[#111827] text-[20px] font-semibold tracking-[-0.03em]">
                  TrustEd
                </h2>

                <p className="text-[#667085] text-[12px] tracking-[0.18em] uppercase font-medium">
                  Learning Architecture
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden xl:flex items-center gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="relative text-[#344054] hover:text-[#0F172A] text-[14px] font-medium tracking-[-0.01em] transition-all duration-300 group"
                >
                  {link.name}

                  <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-[#2563EB] transition-all duration-300 group-hover:w-full rounded-full"></span>
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                to="#contact"
                className="group inline-flex items-center gap-2 bg-[#0F172A] hover:bg-[#111827] text-white px-6 py-3 rounded-full transition-all duration-300 text-[14px] font-medium shadow-lg shadow-slate-200"
              >
                Schedule Consultation

                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden relative z-50 text-[#0F172A]"
            >
              {isOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-all duration-500 xl:hidden ${isOpen
          ? "opacity-100 visible"
          : "opacity-0 invisible"
          }`}
      >
        <div className="flex flex-col justify-center h-full px-8">

          <div className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[#101828] text-[34px] font-semibold tracking-[-0.04em] hover:translate-x-2 transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-14">
            <Link
              to="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-2 bg-[#0F172A] text-white px-7 py-4 rounded-full text-sm font-medium"
            >
              Schedule Consultation

              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;