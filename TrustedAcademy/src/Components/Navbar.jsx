import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Menu,
  X,
} from 'lucide-react';

import TAlogo from '../assets/TAlogo2.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'Categories', href: '/categories' },
    { name: 'About', href: '/about' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#C8A96A]/20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-[88px]">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >
            <img
              src={TAlogo}
              alt="TrustEd Academy"
              className="h-14 lg:h-16 w-auto object-contain"
            />

            <div className="hidden sm:block leading-tight">
              <h2 className="text-white text-xl font-semibold tracking-wide uppercase">
                TrustEd
              </h2>

              <p className="text-[#C8A96A] text-[11px] tracking-[0.35em] uppercase">
                Academy
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="relative text-white/75 hover:text-[#C8A96A] text-[13px] font-medium uppercase tracking-[0.18em] transition-all duration-300 group"
              >
                {link.name}

                <span className="absolute left-0 -bottom-2 h-[1px] w-0 bg-[#C8A96A] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <Link
              to="/login"
              className="group flex items-center gap-2 border border-[#C8A96A] px-6 py-3 text-[#C8A96A] hover:bg-[#C8A96A] hover:text-black transition-all duration-300 uppercase text-[11px] tracking-[0.2em] font-semibold"
            >
              <ShieldCheck className="w-4 h-4" />
              Member Login
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden text-[#C8A96A]"
          >
            {isOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden fixed top-0 right-0 h-screen w-full bg-[#0A0A0A] transition-all duration-500 ${
          isOpen
            ? 'translate-x-0 opacity-100'
            : 'translate-x-full opacity-0'
        }`}
      >
        <div className="flex flex-col justify-center items-center h-full px-8 relative">

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-6 text-[#C8A96A]"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Mobile Links */}
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-[#C8A96A] uppercase tracking-[0.2em] text-lg transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile CTA */}
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="mt-12 border border-[#C8A96A] px-8 py-4 text-[#C8A96A] hover:bg-[#C8A96A] hover:text-black transition-all duration-300 uppercase tracking-[0.2em] text-sm font-semibold"
          >
            Member Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;