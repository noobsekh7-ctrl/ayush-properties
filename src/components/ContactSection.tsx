import React from 'react';
import { MapPin, Phone, Clock, MessageCircle, Navigation, ExternalLink } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <p className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-2">
            Reach Out To Us
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Visit Our Sector 4 Office or Connect Directly
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Conveniently situated at City Center, the commercial epicenter of Bokaro Steel City. Stop by for
            an in-person consultation or reach out via phone and WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Cards Column */}
          <div className="lg:col-span-5 space-y-4 text-left">
            {/* Address Card */}
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 hover:border-amber-400/50 transition-colors">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-slate-900">Office Location</h3>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium mt-1">
                    {SITE_CONFIG.address.full}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Landmark: City Center Sector 4 Commercial Complex
                  </p>
                  <a
                    href={SITE_CONFIG.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-amber-700 hover:text-amber-800"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Phone Card */}
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 hover:border-amber-400/50 transition-colors">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif font-bold text-base text-slate-900">Direct Phone Calling</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Call directly for current property listings or appointment:
                  </p>
                  <a
                    href={SITE_CONFIG.phoneTel}
                    className="inline-block mt-1 font-mono font-bold text-base sm:text-lg text-[#0B1F3A] hover:text-amber-600 transition-colors"
                  >
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                  <div className="mt-2">
                    <a
                      href={SITE_CONFIG.phoneTel}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0B1F3A] text-white rounded-lg text-xs font-semibold hover:bg-slate-800 active:scale-95 transition-all"
                    >
                      <Phone className="w-3 h-3 text-amber-400" />
                      <span>Click to Call Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 hover:border-amber-400/50 transition-colors">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-slate-900">Business Hours</h3>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium mt-1">
                    {SITE_CONFIG.hours.weekdays}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {SITE_CONFIG.hours.sunday}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-5 rounded-xl border border-emerald-200 bg-emerald-50/70 flex items-center justify-between gap-4">
              <div>
                <h4 className="text-xs font-bold text-emerald-950">Fast WhatsApp Inquiry</h4>
                <p className="text-xs text-emerald-800">Send property queries anytime 24/7</p>
              </div>
              <a
                href={getWhatsAppUrl('Hello Ayush Properties Dealer, I want to inquire about properties.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#25D366] text-slate-950 font-bold rounded-lg text-xs hover:bg-[#20ba59] active:scale-95 transition-all shadow-xs shrink-0"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Message Now</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed & Location Visual */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white">
              {/* Header bar of map */}
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-semibold">City Center, Sector 4, Bokaro Steel City</span>
                </div>
                <a
                  href={SITE_CONFIG.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-amber-300 hover:text-amber-200 flex items-center gap-1 font-medium"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map View / Embed container */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-100">
                <iframe
                  title="Google Maps Location - Ayush Properties Dealer City Center Bokaro"
                  src={SITE_CONFIG.mapEmbedUrl}
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Bottom footer strip of map card */}
              <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left">
                <div className="text-xs text-slate-600">
                  <span className="font-semibold text-slate-900">Ayush Properties Dealer:</span> KD-22, City Center, Sector 4, Bokaro 827004
                </div>
                <a
                  href={SITE_CONFIG.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0B1F3A] hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-amber-400" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
