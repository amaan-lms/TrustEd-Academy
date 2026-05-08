import React from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Play,
  Globe,
  ShieldCheck,
  Camera,
  Share2,
} from 'lucide-react';

import TAlogo from '../assets/TrustEdAcademy.png';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Categories', path: '/categories' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const supportLinks = [
    { name: 'FAQ', path: '/faq' },
    { name: 'Terms', path: '/terms' },
    { name: 'Privacy', path: '/privacy' },
  ];

  return (
    <footer className="relative bg-[#0A0A0A] border-t border-[#C8A96A]/20 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C8A96A]/5 blur-[140px] rounded-full"></div>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(#C8A96A 1px, transparent 1px),
            linear-gradient(90deg, #C8A96A 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14 mb-16">

          {/* LOGO + COPYRIGHT */}
          <div>

            <div className="relative inline-block mb-6 group">

              <div className="absolute inset-0 bg-[#C8A96A]/10 blur-3xl rounded-full group-hover:bg-[#C8A96A]/20 transition-all duration-700"></div>

              <img
                src={TAlogo}
                alt="TrustEd Academy"
                className="relative z-10 h-32 w-auto object-contain group-hover:scale-105 transition-all duration-500"
              />
            </div>

            <p className="text-[#A0A0A0] text-sm leading-relaxed mb-6">
              Structured education systems designed for long-term learning,
              implementation, and growth.
            </p>

            <div className="flex items-center gap-3 text-[#C8A96A]">
              <ShieldCheck className="w-4 h-4" />

              <span className="uppercase tracking-[0.2em] text-[10px] font-semibold">
                Trusted Learning Platform
              </span>
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-white uppercase tracking-[0.3em] text-xs font-semibold mb-8">
              Links
            </h4>

            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-[#A0A0A0] hover:text-[#C8A96A] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="text-white uppercase tracking-[0.3em] text-xs font-semibold mb-8">
              Support
            </h4>

            <ul className="space-y-4">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-[#A0A0A0] hover:text-[#C8A96A] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONNECT */}
          <div>
            <h4 className="text-white uppercase tracking-[0.3em] text-xs font-semibold mb-8">
              Connect
            </h4>

            <div className="space-y-5">

              <a
                href="mailto:info@trustedacademy.com"
                className="flex items-center gap-3 text-[#A0A0A0] hover:text-[#C8A96A] transition-colors duration-300 text-sm"
              >
                <Mail className="w-4 h-4" />
                info@trustedacademy.com
              </a>

              <div className="flex items-center gap-4 pt-2">

                <a
                  href="#"
                  className="w-10 h-10 border border-white/10 hover:border-[#C8A96A] flex items-center justify-center text-[#A0A0A0] hover:text-[#C8A96A] transition-all duration-300 hover:scale-110"
                >
                  <Camera className="w-4 h-4" />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 border border-white/10 hover:border-[#C8A96A] flex items-center justify-center text-[#A0A0A0] hover:text-[#C8A96A] transition-all duration-300 hover:scale-110"
                >
                  <Share2 className="w-4 h-4" />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 border border-white/10 hover:border-[#C8A96A] flex items-center justify-center text-[#A0A0A0] hover:text-[#C8A96A] transition-all duration-300 hover:scale-110"
                >
                  <Play className="w-4 h-4" />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 border border-white/10 hover:border-[#C8A96A] flex items-center justify-center text-[#A0A0A0] hover:text-[#C8A96A] transition-all duration-300 hover:scale-110"
                >
                  <Globe className="w-4 h-4" />
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-6">

          <p className="text-[#707070] text-xs uppercase tracking-[0.25em] text-center lg:text-left">
            © 2026 TrustEd Academy. All Rights Reserved.
          </p>

          <p className="text-[#707070] text-xs text-center lg:text-right max-w-2xl leading-relaxed">
            Educational purposes only. No legal, financial, or tax advice is provided.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;