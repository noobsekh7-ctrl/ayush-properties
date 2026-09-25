import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Building2, ChevronRight } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Properties', href: '#properties' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#0B1F3A]/95 backdrop-blur-md shadow-md py-3 border-b border-amber-500/20'
            : 'bg-[#0B1F3A] py-4 border-b border-slate-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Zone - Single Clean Title */}
            <a
              href="#home"
              className="flex items-center gap-2 text-white group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-[#0B1F3A] font-bold shadow-sm">
                <Building2 className="w-5 h-5 text-[#0B1F3A]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-base sm:text-lg tracking-wide text-white group-hover:text-amber-300 transition-colors">
                  AYUSH PROPERTIES
                </span>
                <span className="text-[10px] tracking-widest text-amber-300/90 uppercase font-medium">
                  Dealer · Bokaro Steel City
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-200">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-amber-300 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-amber-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Action Buttons Zone */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Phone Quick Call */}
              <a
                href={SITE_CONFIG.phoneTel}
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-200 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors border border-slate-700"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>{SITE_CONFIG.phoneDisplay}</span>
              </a>

              {/* WhatsApp Primary CTA */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold bg-[#25D366] text-slate-950 rounded-lg hover:bg-[#20ba59] active:scale-95 transition-all shadow-sm whitespace-nowrap"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>WhatsApp</span>
              </a>

              {/* Free Consultation Button */}
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center px-3.5 py-2 text-xs font-semibold bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 rounded-lg hover:from-amber-300 hover:to-amber-400 active:scale-95 transition-all shadow-sm whitespace-nowrap"
              >
                Free Consultation
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#25D366] bg-slate-800/70 rounded-lg border border-slate-700"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 fill-[#25D366]" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-200 hover:text-white rounded-lg bg-slate-800/70 border border-slate-700"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="fixed top-0 right-0 bottom-0 w-4/5 max-w-xs bg-[#0B1F3A] border-l border-slate-800 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center text-[#0B1F3A] font-bold">
                    <Building2 className="w-4 h-4 text-[#0B1F3A]" />
                  </div>
                  <span className="font-serif font-bold text-sm text-white">AYUSH PROPERTIES</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation links */}
              <nav className="mt-6 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={handleNavClick}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-amber-300 hover:bg-slate-800/70 transition-colors"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </a>
                ))}
              </nav>
            </div>

            {/* Mobile Drawer Actions */}
            <div className="pt-6 border-t border-slate-800 flex flex-col gap-3">
              <a
                href={SITE_CONFIG.phoneTel}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-semibold text-slate-100 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {SITE_CONFIG.phoneDisplay}</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-semibold bg-[#25D366] text-slate-950 rounded-lg font-medium hover:bg-[#20ba59] transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Direct WhatsApp Chat</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-semibold bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 rounded-lg font-medium hover:from-amber-300 hover:to-amber-400 transition-colors shadow-sm"
              >
                Get Free Consultation
              </button>

              <p className="text-[11px] text-slate-400 text-center mt-2">
                KD-22, City Center, Sector 4, Bokaro Steel City
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
