import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Phone, Mail, Globe, ExternalLink, ShieldCheck } from 'lucide-react';
import TAlogo from '../assets/TrustEdAcademy.png';

// Note: For TikTok, since it's not always in standard sets, 
// we use a custom SVG to match the premium gold aesthetic.
const TikTokIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="w-4 h-4"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer = () => {
  const primaryLinks = [
    { name: 'Home', href: '/' },
    { name: 'Start Here', href: '/start' },
    { name: 'Free Training', href: '/training' },
    { name: 'Membership', href: '/membership' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ];

  const secondaryLinks = [
    { name: 'About', href: '/about' },
    { name: 'AI Instructor', href: '/ai-instructor' },
    { name: 'Interactive E-Books', href: '/ebooks' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Use', href: '/terms' },
    { name: 'Disclaimer', href: '/disclaimer' },
  ];

  return (
    <footer className="bg-[#001233] text-white pt-20 pb-10 border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Column 1: Brand & Disclaimer */}
          <div className="lg:col-span-1">
            <img 
              src={TAlogo} 
              alt="TrustEd Academy Logo" 
              className="h-33 w-auto mb-6 brightness-110 transition-all duration-500"
            />
            <p className="text-gray-400 text-[11px] leading-relaxed italic opacity-70">
              This platform provides educational content only and does not offer legal, financial, or professional advice.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Navigation</h4>
            <ul className="space-y-4">
              {primaryLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-[#D4AF37] text-xs tracking-wide transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-2 h-[1px] bg-[#D4AF37] mr-0 group-hover:mr-2 transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Resources</h4>
            <ul className="space-y-4">
              {secondaryLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white text-xs tracking-wide transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h4 className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Connect</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:618-313-1860" className="text-gray-400 hover:text-white text-xs flex items-center gap-3 transition-colors">
                  <Phone size={14} className="text-[#D4AF37]" /> 618-313-1860
                </a>
              </li>
              <li>
                <a href="mailto:caleb@trustedacademy.net" className="text-gray-400 hover:text-white text-xs flex items-center gap-3 transition-colors">
                  <Mail size={14} className="text-[#D4AF37]" /> caleb@trustedacademy.net
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@TrustEdAcademy-v4n" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xs flex items-center gap-3 transition-colors">
                  <Play size={14} className="text-[#D4AF37]" /> YouTube
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@trustedacademy1985" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xs flex items-center gap-3 transition-colors">
                  <TikTokIcon /> TikTok
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: High-Trust Visual */}
          <div className="bg-black/40 p-6 border border-[#D4AF37]/10 backdrop-blur-sm">
            <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <ShieldCheck size={12} className="text-[#D4AF37]" /> Academy Status
            </h4>
            <div className="flex items-center mb-4">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse mr-2 shadow-[0_0_8px_#22c55e]"></div>
              <span className="text-[10px] text-gray-300 uppercase tracking-widest font-medium">Systems Online</span>
            </div>
            <p className="text-[10px] text-gray-500 leading-relaxed font-mono">
              Global Education Framework <br />
              v4.2.0 // ©2026_TRST
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-gray-500 uppercase tracking-[0.4em] font-light">
            &copy; 2026 TrustEd Academy. <span className="hidden sm:inline">Crafted for Excellence.</span>
          </p>
          
          {/* <div className="flex space-x-8">
            <a href="#" className="text-gray-500 hover:text-[#D4AF37] transition-all transform hover:-translate-y-1"><TikTokIcon /></a>
            <a href="#" className="text-gray-500 hover:text-[#D4AF37] transition-all transform hover:-translate-y-1"><Play size={18} /></a>
            <a href="#" className="text-gray-500 hover:text-[#D4AF37] transition-all transform hover:-translate-y-1"><Globe size={18} /></a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;