import React from 'react';
import { MapPin, Phone, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Visual Card with Business Info */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-900 text-white">
              <div className="aspect-[4/3] relative w-full overflow-hidden bg-slate-800">
                <img
                  src="/src/assets/images/prop_modern_duplex_1790338391871.jpg"
                  alt="Ayush Properties Dealer Bokaro"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/40 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="text-[11px] font-semibold text-amber-300 uppercase tracking-widest">
                    Office & Operations Hub
                  </span>
                  <h3 className="font-serif font-bold text-lg text-white">
                    City Center, Sector 4, Bokaro
                  </h3>
                </div>
              </div>

              {/* Office Details Compact Block */}
              <div className="p-6 bg-[#0B1F3A] space-y-3.5 text-left border-t border-slate-800">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <p className="font-semibold text-white">Office Address</p>
                    <p className="text-slate-300">{SITE_CONFIG.address.full}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <p className="font-semibold text-white">Phone Consultation</p>
                    <a
                      href={SITE_CONFIG.phoneTel}
                      className="text-amber-300 hover:underline font-mono"
                    >
                      {SITE_CONFIG.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <p className="font-semibold text-white">Business Hours</p>
                    <p className="text-slate-300">{SITE_CONFIG.hours.weekdays}</p>
                    <p className="text-slate-400 text-[11px]">{SITE_CONFIG.hours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Introduction Prose */}
          <div className="lg:col-span-7 text-left">
            <p className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-2">
              About The Agency
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight text-balance">
              AYUSH PROPERTIES DEALER
            </h2>
            <p className="text-sm font-medium text-slate-500 mt-1 mb-4">
              Premier Property Dealing & Real Estate Consulting in Bokaro Steel City
            </p>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                Located in the commercial heart of Bokaro Steel City at <span className="font-semibold text-slate-900">KD-22, City Center, Sector 4</span>, 
                <strong> AYUSH PROPERTIES DEALER</strong> operates as a trusted real estate facilitator for families,
                investors, and business owners looking for residential plots, independent houses, apartments, and commercial properties.
              </p>
              <p>
                Real estate decisions in Bokaro require clarity on land possession, sector lease guidelines, registry procedures,
                and fair valuation. We bridge the gap between genuine property owners and buyers by conducting thorough preliminary
                document reviews and facilitating direct, transparent negotiations without misleading claims.
              </p>
              <p>
                Whether you need advice on purchasing an upcoming residential plot in Bokaro's developing corridors, selling a family home,
                or setting up a retail showroom in City Center, our team offers personal guidance from inquiry to final registration.
              </p>
            </div>

            {/* Core Commitments */}
            <div className="mt-6 pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Verified Ownership Documentation</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Transparent Negotiation & Paperwork</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Direct Consultation at Sector 4 Office</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Registry & Mutation Assistance</span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={SITE_CONFIG.phoneTel}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold bg-[#0B1F3A] text-white rounded-lg hover:bg-slate-800 active:scale-95 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Speak with Dealer: {SITE_CONFIG.phoneDisplay}</span>
              </a>

              <a
                href={getWhatsAppUrl('Hello Ayush Properties, I would like to visit your Sector 4 office.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-300 rounded-lg hover:bg-emerald-100 active:scale-95 transition-all"
              >
                <span>Plan Office Visit via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
