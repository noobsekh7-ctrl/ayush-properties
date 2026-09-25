import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';

export const MobileStickyBar: React.FC = () => {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#0B1F3A]/98 backdrop-blur-md border-t border-slate-700/80 p-2.5 sm:hidden shadow-2xl flex items-center gap-2 safe-area-bottom"
      style={{ maxHeight: '60px' }}
      aria-label="Mobile Quick Contact Actions"
    >
      {/* Click-to-call CTA */}
      <a
        href={SITE_CONFIG.phoneTel}
        className="flex-1 h-11 flex items-center justify-center gap-2 bg-[#0B1F3A] hover:bg-slate-800 text-white border border-amber-400/40 rounded-lg text-xs font-bold active:scale-98 transition-all"
        aria-label={`Call ${SITE_CONFIG.phoneDisplay}`}
      >
        <div className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shrink-0">
          <Phone className="w-3.5 h-3.5" />
        </div>
        <div className="flex flex-col items-start leading-tight">
          <span className="text-[10px] text-amber-300 uppercase tracking-wider font-semibold">Call Now</span>
          <span className="font-mono text-xs">{SITE_CONFIG.phoneDisplay}</span>
        </div>
      </a>

      {/* WhatsApp CTA */}
      <a
        href={getWhatsAppUrl('Hello Ayush Properties Dealer, I need property information in Bokaro.')}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 h-11 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-slate-950 rounded-lg text-xs font-bold active:scale-98 transition-all shadow-sm"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-4 h-4 fill-slate-950" />
        <span className="text-xs font-extrabold tracking-wide">WhatsApp</span>
      </a>
    </div>
  );
};
