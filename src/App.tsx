import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedProperties } from './components/FeaturedProperties';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LeadForm } from './components/LeadForm';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { EnquiryModal } from './components/EnquiryModal';
import { PropertyItem } from './config/siteConfig';

export default function App() {
  const [selectedProperty, setSelectedProperty] = useState<PropertyItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'property' | 'consultation' | 'emi'>('consultation');
  const [leadFormRequirement, setLeadFormRequirement] = useState('Buy');
  const [leadFormPropertyTitle, setLeadFormPropertyTitle] = useState('');

  // Handle Explore button
  const handleExploreProperties = () => {
    const el = document.getElementById('properties');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle Free Consultation open
  const handleOpenConsultation = () => {
    setSelectedProperty(null);
    setModalMode('consultation');
    setIsModalOpen(true);
  };

  // Handle Quick filter in Hero or Services section
  const handleSelectService = (reqValue: string) => {
    setLeadFormRequirement(reqValue);
    const el = document.getElementById('contact-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle Property card enquiry
  const handleEnquireProperty = (prop: PropertyItem) => {
    setSelectedProperty(prop);
    setLeadFormPropertyTitle(prop.title);
    setModalMode('property');
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-200 selection:text-slate-900 pb-16 sm:pb-0">
      {/* 1. Sticky Navbar */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onExploreProperties={handleExploreProperties}
          onOpenConsultation={handleOpenConsultation}
          onQuickFilter={handleSelectService}
        />

        {/* 3. Quick Service Cards */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 4. Featured Properties Section */}
        <FeaturedProperties onEnquireProperty={handleEnquireProperty} />

        {/* 5. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 6. About Ayush Properties Dealer Section */}
        <AboutSection />

        {/* 7. Customer Reviews Section (5.0 Google Rating / 53 Reviews) */}
        <ReviewsSection />

        {/* 8. Lead Generation Section */}
        <LeadForm
          initialRequirement={leadFormRequirement}
          initialPropertyTitle={leadFormPropertyTitle}
        />

        {/* 9. Contact & Location Section */}
        <ContactSection />
      </main>

      {/* 10. Compact Footer */}
      <Footer />

      {/* Conversion Feature: Sticky Mobile CTA Bar */}
      <MobileStickyBar />

      {/* Conversion Feature: Quick Enquiry & EMI Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        property={selectedProperty}
        mode={modalMode}
      />
    </div>
  );
}
