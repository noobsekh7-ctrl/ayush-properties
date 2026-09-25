import React from 'react';
import { ArrowRight, ShieldCheck, Star, MapPin, CheckCircle2, MessageCircle, Phone } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';

interface HeroProps {
  onExploreProperties: () => void;
  onOpenConsultation: () => void;
  onQuickFilter: (requirement: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProperties,
  onOpenConsultation,
  onQuickFilter,
}) => {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-[#0B1F3A] overflow-hidden text-white">
      {/* Background Graphic & Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Quiet Location & Rating Trust Bar (Anti-Pill: clean inline metadata with separators) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-amber-300 mb-4 tracking-wide">
              <span className="flex items-center gap-1 text-slate-200">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                Sector 4, Bokaro Steel City
              </span>
              <span className="text-slate-500" aria-hidden="true">·</span>
              <span className="flex items-center gap-1 text-amber-300 font-semibold">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0" />
                5.0 Google Rating (53 Reviews)
              </span>
              <span className="text-slate-500 hidden sm:inline" aria-hidden="true">·</span>
              <span className="text-slate-300 hidden sm:inline">Verified Documentation</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-4 text-balance">
              Find Your Perfect <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200">
                Property in Bokaro
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 max-w-2xl">
              Trusted property buying, selling and consulting in Bokaro Steel City. Whether you are
              searching for a prime residential plot, independent duplex, modern apartment, or commercial
              space in City Center, we provide clear documentation, fair pricing, and reliable end-to-end guidance.
            </p>

            {/* CTAs Button Cluster */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-8">
              <button
                onClick={onExploreProperties}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 text-slate-950 rounded-lg hover:brightness-105 active:scale-95 transition-all shadow-lg shadow-amber-500/10 whitespace-nowrap cursor-pointer"
              >
                <span>Explore Properties</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/20 rounded-lg active:scale-95 transition-all whitespace-nowrap cursor-pointer"
              >
                <span>Get Free Consultation</span>
              </button>
            </div>

            {/* Quick Conversion Assist / Micro Guarantee Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-xl pt-4 border-t border-slate-800 text-left">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-slate-200">Clear Land Titles</h4>
                  <p className="text-[11px] text-slate-400">Strict legal verification</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-slate-200">Zero Hidden Charges</h4>
                  <p className="text-[11px] text-slate-400">Direct honest dealings</p>
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-slate-200">Registry Support</h4>
                  <p className="text-[11px] text-slate-400">Complete paperwork guidance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Real Estate Showcase Card */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl">
              {/* Premium Image with fallback */}
              <div className="aspect-[4/3] sm:aspect-[16/10] relative w-full overflow-hidden bg-slate-800">
                <img
                  src="/src/assets/images/hero_bokaro_residence_1790338348415.jpg"
                  alt="Modern Luxury Residential Villa in Bokaro Steel City"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  onError={(e) => {
                    // Fallback container if image fails
                    const target = e.currentTarget;
                    target.style.display = 'none';
                  }}
                />
                {/* Measured gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

                {/* Overlaid Location Badge */}
                <div className="absolute top-3 left-3 bg-[#0B1F3A]/90 backdrop-blur-md border border-amber-400/40 text-amber-300 text-[11px] font-semibold px-2.5 py-1 rounded-md">
                  Prime Bokaro Residence
                </div>

                {/* Overlaid Bottom Details */}
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <p className="text-xs font-medium text-amber-300 mb-0.5">Sample Property Representation</p>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-white leading-snug">
                    Bungalows & Duplexes in Bokaro
                  </h3>
                  <p className="text-[11px] text-slate-300 mt-1 line-clamp-1">
                    Sector 4 · Co-operative Colony · Chas Residential Hub
                  </p>
                </div>
              </div>

              {/* Direct Instant Action Bar below card */}
              <div className="p-4 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between gap-2">
                <div>
                  <p className="text-[11px] text-slate-400">Talk to Property Consultant</p>
                  <p className="text-xs font-semibold text-white">{SITE_CONFIG.phoneDisplay}</p>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={getWhatsAppUrl('Hello Ayush Properties, I would like to consult on properties in Bokaro.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-[#25D366] text-slate-950 hover:bg-[#20ba59] transition-colors"
                    aria-label="Direct WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4 fill-slate-950" />
                  </a>
                  <a
                    href={SITE_CONFIG.phoneTel}
                    className="p-2.5 rounded-lg bg-amber-400 text-slate-950 hover:bg-amber-300 transition-colors"
                    aria-label="Direct Call"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Floating Trust Marker */}
            <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-[#0B1F3A] border border-amber-500/30 rounded-xl p-3 shadow-xl flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                <Star className="w-5 h-5 fill-amber-400" />
              </div>
              <div className="text-left pr-2">
                <div className="text-xs font-bold text-white">5.0 / 5.0 Star Rating</div>
                <div className="text-[10px] text-slate-300">53 Verified Google Reviews</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Requirement Selector Strip */}
        <div className="mt-12 p-3 sm:p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-slate-300 font-medium shrink-0">
              Quick Filter by Requirement:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2 w-full sm:w-auto">
              {['Buy Property', 'Sell Property', 'Residential Plots', 'Consultation'].map((req) => (
                <button
                  key={req}
                  onClick={() => onQuickFilter(req)}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-amber-400 hover:text-slate-950 text-slate-200 font-medium transition-all text-xs cursor-pointer active:scale-95"
                >
                  {req}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
