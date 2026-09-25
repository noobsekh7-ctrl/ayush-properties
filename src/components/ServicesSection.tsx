import React from 'react';
import { Home, TrendingUp, MapPin, FileCheck, ArrowRight } from 'lucide-react';
import { SERVICES } from '../config/siteConfig';

interface ServicesSectionProps {
  onSelectService: (serviceRequirement: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="w-5 h-5 text-amber-500" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-amber-500" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-amber-500" />;
      case 'FileCheck':
      default:
        return <FileCheck className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section id="services" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <p className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-2">
            Our Core Services
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Real Estate Solutions Tailored to Bokaro
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Whether you are buying your family's dream home, selling an existing asset, or seeking verified
            residential plots, Ayush Properties Dealer provides transparent, end-to-end local assistance.
          </p>
        </div>

        {/* 4 Quick Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-400/50 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Header row with icon & editorial index */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg bg-amber-50 border border-amber-200/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-semibold font-mono text-slate-600 tabular-nums">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-lg text-slate-900 mb-1 group-hover:text-amber-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-medium text-amber-600 mb-3">
                  {service.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Action trigger button */}
              <button
                onClick={() => onSelectService(service.requirementValue)}
                className="w-full inline-flex items-center justify-between pt-3 border-t border-slate-100 text-xs font-semibold text-[#0B1F3A] hover:text-amber-600 transition-colors group-hover:translate-x-0.5"
              >
                <span>{service.actionText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
