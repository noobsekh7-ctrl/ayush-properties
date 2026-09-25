import React from 'react';
import { Building2, Phone, MapPin, MessageCircle } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#071527] text-white border-t border-slate-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Introduction */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-[#0B1F3A] font-bold">
                <Building2 className="w-4 h-4 text-[#0B1F3A]" />
              </div>
              <span className="font-serif font-bold text-base text-white tracking-wide">
                {SITE_CONFIG.businessName}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Trusted real estate dealer and property consultant in Bokaro Steel City. Dedicated to
              transparent property transactions, clear titles, and fair guidance.
            </p>
            <div className="pt-2 text-xs text-amber-300 font-medium flex items-center gap-1.5">
              <span>Google 5.0 Rating (53 Reviews)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-sm text-white mb-3 tracking-wide">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#home" className="hover:text-amber-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-amber-300 transition-colors">
                  Featured Properties
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-300 transition-colors">
                  Buy, Sell & Plots
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-amber-300 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-300 transition-colors">
                  About Ayush Properties
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-300 transition-colors">
                  Google Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-300 transition-colors">
                  Contact & Office
                </a>
              </li>
            </ul>
          </div>

          {/* Property Types in Bokaro */}
          <div>
            <h4 className="font-serif font-bold text-sm text-white mb-3 tracking-wide">
              Bokaro Properties
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>Residential Plots (Sector 4 & City Center)</li>
              <li>Independent Duplex & Bungalows</li>
              <li>2 & 3 BHK Apartments in Chas & Bokaro</li>
              <li>Commercial Shops & Showrooms</li>
              <li>Title Verification & Registry Guidance</li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="font-serif font-bold text-sm text-white mb-3 tracking-wide">
              Contact Dealer
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={SITE_CONFIG.phoneTel}
                  className="hover:text-amber-300 font-mono font-medium"
                >
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300"
                >
                  WhatsApp: +{SITE_CONFIG.whatsappNumber}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {SITE_CONFIG.businessName}. All rights reserved.
          </p>
          <p className="text-[11px] text-slate-500 text-center sm:text-right">
            KD-22, City Center, Sector 4, Bokaro Steel City, Jharkhand 827004
          </p>
        </div>
      </div>
    </footer>
  );
};
