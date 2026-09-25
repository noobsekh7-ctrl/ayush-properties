import React from 'react';
import { Compass, Scale, Handshake, Users, CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_US } from '../config/siteConfig';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Compass className="w-6 h-6 text-amber-500" />;
      case 1:
        return <Scale className="w-6 h-6 text-amber-500" />;
      case 2:
        return <Handshake className="w-6 h-6 text-amber-500" />;
      case 3:
      default:
        return <Users className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section id="why-us" className="py-16 md:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-12 text-left">
          <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">
            Why Choose Ayush Properties Dealer
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Built on Transparency & Bokaro Local Experience
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Real estate in Bokaro Steel City requires on-the-ground knowledge of sector approvals, authentic title
            histories, and realistic market valuations. We keep our process honest, clear, and client-first.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-6 hover:border-amber-400/50 hover:bg-slate-800 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center">
                    {getIcon(index)}
                  </div>
                  <span className="font-mono text-xs text-amber-400/80 font-semibold tabular-nums">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-lg text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center gap-1.5 text-xs text-amber-300/90">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Verified in Bokaro</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
