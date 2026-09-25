import React, { useState } from 'react';
import { MapPin, ArrowRight, Info, Check, Sparkles } from 'lucide-react';
import { FEATURED_PROPERTIES, PropertyItem, getPropertyWhatsAppUrl } from '../config/siteConfig';

interface FeaturedPropertiesProps {
  onEnquireProperty: (property: PropertyItem) => void;
}

export const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({ onEnquireProperty }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'residential' | 'plots' | 'commercial'>('all');

  const filteredProperties = FEATURED_PROPERTIES.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section id="properties" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-amber-600 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Property Portfolio</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Featured Properties in Bokaro
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Browse representative listings across prime sectors. All listings are editable placeholders for
              current inventory verification with Ayush Properties Dealer.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg overflow-x-auto max-w-full shrink-0">
            {(
              [
                { id: 'all', label: 'All Types' },
                { id: 'residential', label: 'Residential' },
                { id: 'plots', label: 'Plots / Land' },
                { id: 'commercial', label: 'Commercial' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#0B1F3A] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Clear Notice Banner (Clearly labeled sample property data) */}
        <div className="mb-8 p-3 rounded-lg bg-amber-50/80 border border-amber-200/80 flex items-start gap-2.5 text-xs text-amber-900">
          <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p>
            <strong className="font-semibold">Notice for Buyers & Investors:</strong> The cards below
            represent sample property types and indicative guide prices in Bokaro Steel City. Contact Ayush
            Properties Dealer at <span className="font-semibold">07717735214</span> to receive real-time
            available inventories, exact floor plans, and current registry documents.
          </p>
        </div>

        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-amber-400/60 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container with Fallback */}
                <div className="aspect-[4/3] relative w-full overflow-hidden bg-slate-100">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                    }}
                  />
                  {/* Subtle Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                  {/* Category overlay */}
                  <div className="absolute top-2.5 left-2.5 bg-[#0B1F3A]/90 backdrop-blur-xs text-amber-300 text-[10px] font-semibold px-2 py-0.5 rounded">
                    {property.categoryLabel}
                  </div>

                  {property.badge && (
                    <div className="absolute top-2.5 right-2.5 bg-amber-400 text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
                      {property.badge}
                    </div>
                  )}

                  <div className="absolute bottom-2 left-2.5 text-[11px] font-medium text-white/90 drop-shadow-sm flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                    <span className="truncate max-w-[200px]">{property.location}</span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-4 text-left">
                  {/* Unboxed Metadata with Typographic Separator (Anti-Pill Rule) */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1.5">
                    <span>{property.specs.type}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">{property.specs.area}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif font-bold text-base text-slate-900 group-hover:text-amber-700 transition-colors leading-snug mb-2 line-clamp-2">
                    {property.title}
                  </h3>

                  {/* Price Placeholder */}
                  <div className="mb-3 pt-2 border-t border-slate-100">
                    <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">
                      Price Placeholder
                    </p>
                    <p className="font-semibold text-slate-900 text-sm font-mono tabular-nums text-amber-700">
                      {property.pricePlaceholder}
                    </p>
                  </div>

                  {/* Key Highlights */}
                  <ul className="space-y-1 mb-4">
                    {property.features.slice(0, 2).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-1.5 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="p-4 pt-0 grid grid-cols-2 gap-2">
                <button
                  onClick={() => onEnquireProperty(property)}
                  className="w-full py-2 px-3 text-xs font-semibold text-white bg-[#0B1F3A] hover:bg-slate-800 rounded-lg active:scale-95 transition-all flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-3 h-3" />
                </button>

                <a
                  href={getPropertyWhatsAppUrl(property.title, property.location)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 text-xs font-semibold text-slate-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg active:scale-95 transition-all text-center flex items-center justify-center gap-1"
                >
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
