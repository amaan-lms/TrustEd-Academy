import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaGlobe,
} from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

import TAlogo from "../assets/TrustEdAcademy.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/solutions" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
  ];

  const supportLinks = [
    { name: "Privacy", path: "/privacy" },
    { name: "Terms", path: "/terms" },
    { name: "FAQ", path: "/faq" },
  ];

  const socialLinks = [
    { icon: FaLinkedinIn, href: "#" },
    { icon: FaInstagram, href: "#" },
    { icon: FaYoutube, href: "#" },
    { icon: FaGlobe, href: "#" },
  ];

  return (
    <footer className="relative bg-[#0F172A] overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0">

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB]/20 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-10">

        {/* Top */}
        <div className="grid lg:grid-cols-12 gap-14 pb-16 border-b border-white/10">

          {/* Brand */}
          <div className="lg:col-span-5">

            <img
              src={TAlogo}
              alt="TrustEd Academy"
              className="h-20 w-auto object-contain mb-8"
            />

            <h3 className="text-white text-3xl md:text-4xl font-semibold tracking-[-0.04em] leading-tight max-w-lg">
              Modern Learning
              <span className="block text-white/50 font-light">
                Built For Teams.
              </span>
            </h3>

            <p className="mt-6 text-white/60 text-sm leading-relaxed max-w-md">
              Scalable instructional systems and workforce learning
              experiences for modern organizations.
            </p>

            {/* Email CTA */}

          </div>

          {/* Links */}
          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-10">

            {/* Navigation */}
            <div>
              <h4 className="text-white uppercase tracking-[0.2em] text-[11px] font-semibold mb-7">
                Navigation
              </h4>

              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-white/60 hover:text-white transition-all duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white uppercase tracking-[0.2em] text-[11px] font-semibold mb-7">
                Support
              </h4>

              <ul className="space-y-4">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-white/60 hover:text-white transition-all duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-white uppercase tracking-[0.2em] text-[11px] font-semibold mb-7">
                Follow Us
              </h4>

              <div className="flex items-center gap-4 mb-8">
                {socialLinks.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={index}
                      href={item.href}
                      className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-[#2563EB] hover:border-[#2563EB] transition-all duration-300"
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </a>
                  );
                })}
              </div>

              <p className="text-white/50 text-sm leading-relaxed">
                Helping organizations create smarter learning systems
                and scalable workforce growth.
              </p>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 pt-8">

          <p className="text-white/40 text-xs uppercase tracking-[0.16em] text-center md:text-left">
            © 2026 TrustEd Academy. All Rights Reserved.
          </p>

          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse"></div>

            <span className="text-white/40 text-xs uppercase tracking-[0.16em]">
              Enterprise Learning Systems
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;