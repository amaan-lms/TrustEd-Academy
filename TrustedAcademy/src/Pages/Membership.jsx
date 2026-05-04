import React, { useState } from 'react';
import { Check, Minus, Plus, ShieldCheck, Zap, Globe, Users, Download } from 'lucide-react';

const Membership = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "What is included in membership?",
      a: "Membership includes unlimited access to our entire core course library, our proprietary AI learning assistant, downloadable frameworks, and entry into our private student community."
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. You have full control over your subscription through your member dashboard. There are no long-term contracts or hidden exit fees."
    },
    {
      q: "Do I get all courses?",
      a: "You receive access to all Core and Advanced courses within the Academy library. Specialized Business Services and 'Done-For-You' implementations are separate tier offerings."
    }
  ];

  return (
    <section id="membership" className="py-24 bg-black text-white relative pt-30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-[#D4AF37] uppercase tracking-[0.4em] text-xs font-bold mb-4">Elite Access</p>
          <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">Access the Full <br /><span className="italic text-gray-500">Learning System</span></h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            Membership unlocks structured learning paths, advanced courses, AI support, and continuous education designed to help you grow with precision.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Main Membership Card (LHS) */}
          <div className="lg:col-span-7 bg-[#001233]/20 border border-[#D4AF37]/30 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37] opacity-[0.03] -mr-16 -mt-16 rounded-full"></div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Includes */}
              <div>
                <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-8 border-b border-white/10 pb-4">Inclusive Features</h4>
                <ul className="space-y-4">
                  {[
                    { text: 'Full course access', icon: <Globe size={14}/> },
                    { text: 'AI learning assistant', icon: <Zap size={14}/> },
                    { text: 'Guided learning paths', icon: <ShieldCheck size={14}/> },
                    { text: 'Downloadable resources', icon: <Download size={14}/> },
                    { text: 'Community access', icon: <Users size={14}/> }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-300 font-light group">
                      <span className="text-[#D4AF37] mr-3 group-hover:scale-110 transition-transform">{item.icon}</span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-8 border-b border-white/10 pb-4">Core Benefits</h4>
                <ul className="space-y-4">
                  {['Learn at your own pace', 'Structured growth', 'Ongoing updates', 'Real-world application'].map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-400 italic">
                      <Check size={12} className="text-[#D4AF37] mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Area */}
            <div className="mt-16 pt-8 border-t border-white/5">
              <button className="w-full py-5 bg-[#D4AF37] text-black font-bold uppercase tracking-[0.3em] text-xs hover:bg-white transition-all duration-500 shadow-2xl">
                Become a Member
              </button>
              <p className="mt-6 text-center text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.2em] animate-pulse">
                Lock in early access pricing before full launch pricing increases.
              </p>
            </div>
          </div>

          {/* FAQ & Exclusions (RHS) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            {/* FAQ Accordion */}
            <div className="space-y-4 mb-12">
              <h4 className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Frequently Asked</h4>
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-white/10 pb-4 cursor-pointer" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm font-medium text-white hover:text-[#D4AF37] transition-colors">{faq.q}</span>
                    {openFaq === i ? <Minus size={14} className="text-[#D4AF37]"/> : <Plus size={14} className="text-gray-600"/>}
                  </div>
                  {openFaq === i && (
                    <p className="text-xs text-gray-500 leading-relaxed mt-2 font-light">
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Not Included Section */}
            <div className="bg-white/[0.03] p-8 border-l border-white/10">
              <h4 className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Tier Exclusions</h4>
              <ul className="space-y-2 opacity-50">
                {['Custom business services', 'Done-for-you systems'].map((item, i) => (
                  <li key={i} className="flex items-center text-xs text-gray-400 line-through decoration-[#D4AF37]/40">
                    <span className="mr-3 text-lg">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Membership;