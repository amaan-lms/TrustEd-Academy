import React from 'react';
import { Lock, Mail, ArrowRight, ShieldCheck, UserCheck } from 'lucide-react';
import TAlogo from '../assets/TrustEdAcademy.png';

const MemberLogin = () => {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-6 py-12 relative overflow-hidden pt-34">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#001233] via-transparent to-transparent opacity-50"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-[#D4AF37] opacity-[0.03] blur-[100px] rounded-full"></div>
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-[#D4AF37] opacity-[0.03] blur-[100px] rounded-full"></div>

      <div className="max-w-md w-full relative z-10">
        {/* Logo & Branding */}
        <div className="text-center mb-10">
          {/* <img 
            src={TAlogo} 
            alt="TrustEd Academy" 
            className="h-20 mx-auto mb-6 grayscale brightness-125"
          /> */}
          <h2 className="text-2xl font-serif text-white mb-2">Welcome Back</h2>
          <p className="text-gray-500 text-xs uppercase tracking-[0.3em]">Access Your Learning System</p>
        </div>

        {/* Login Card */}
        <div className="bg-[#001233]/30 border border-white/10 backdrop-blur-xl p-8 md:p-10 shadow-2xl">
          <form className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-[10px] text-gray-400 uppercase tracking-widest ml-1">Member Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={16} />
                <input 
                  type="email" 
                  placeholder="name@trustedacademy.net"
                  className="w-full bg-black/40 border border-white/10 px-12 py-4 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[10px] text-gray-400 uppercase tracking-widest ml-1">Security Key</label>
                <a href="#" className="text-[9px] text-[#D4AF37] uppercase tracking-tighter hover:text-white transition-colors">Forgot Access?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={16} />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-black/40 border border-white/10 px-12 py-4 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-3">
              <input 
                type="checkbox" 
                id="remember"
                className="accent-[#D4AF37] bg-black border-white/10"
              />
              <label htmlFor="remember" className="text-[10px] text-gray-500 uppercase tracking-widest cursor-pointer select-none">
                Maintain Session
              </label>
            </div>

            {/* Submit Button */}
            <button className="w-full py-5 bg-[#D4AF37] text-black font-bold uppercase tracking-[0.3em] text-xs hover:bg-white transition-all duration-500 flex items-center justify-center gap-3 shadow-lg">
              Enter Academy <ArrowRight size={14} />
            </button>
          </form>

          {/* New Member Note */}
          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-gray-500 text-[10px] uppercase tracking-widest">
              Not a member yet? <a href="#membership" className="text-[#D4AF37] font-bold hover:underline underline-offset-4">Apply for Access</a>
            </p>
          </div>
        </div>

        {/* Security Trust Badges */}
        <div className="mt-8 flex justify-center gap-8 opacity-40 grayscale">
          <div className="flex items-center gap-2 text-[9px] text-gray-400 uppercase tracking-widest">
            <ShieldCheck size={12} /> Encrypted Session
          </div>
          <div className="flex items-center gap-2 text-[9px] text-gray-400 uppercase tracking-widest">
            <UserCheck size={12} /> Verified Member
          </div>
        </div>

        {/* Version Footer */}
        <p className="text-center mt-12 text-[9px] text-gray-700 uppercase tracking-[0.5em]">
          TrustEd Academy © 2026 // Secure Login v4.2
        </p>
      </div>
    </section>
  );
};

export default MemberLogin;