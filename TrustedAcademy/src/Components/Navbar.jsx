import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TAlogo from '../assets/clogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Start Here', href: '/start' },
    { name: 'Free Training', href: '/training' },
    { name: 'Membership', href: '/membership' },
    { name: 'Course Catalog', href: '/courses' },
    { name: 'Business Solutions', href: '/business' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 left-0 bg-black border-b border-[#D4AF37]/30 shadow-2xl">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          
          {/* Brand Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              src={TAlogo} 
              alt="TrustEd Academy Logo" 
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:block">
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-400 hover:text-white text-[13px] font-semibold uppercase tracking-tighter transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="bg-[#D4AF37] text-black px-8 py-3 rounded-none text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-all duration-500 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              Member Login
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#D4AF37] focus:outline-none"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div className={`fixed inset-0 bg-black/95 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out xl:hidden z-[-1]`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-light text-gray-300 hover:text-[#D4AF37] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/login"
            onClick={() => setIsOpen(false)}
            className="mt-8 border border-[#D4AF37] text-[#D4AF37] px-10 py-4 text-sm font-bold uppercase tracking-widest"
          >
            Member Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;