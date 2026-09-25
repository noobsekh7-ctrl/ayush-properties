import React, { useState, useEffect } from 'react';
import { Send, Phone, MessageCircle, CheckCircle2, AlertCircle, ShieldAlert, Sparkles } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';

interface LeadFormProps {
  initialRequirement?: string;
  initialPropertyTitle?: string;
}

export const LeadForm: React.FC<LeadFormProps> = ({
  initialRequirement = 'Buy',
  initialPropertyTitle,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [requirement, setRequirement] = useState(initialRequirement);
  const [budget, setBudget] = useState('₹30 L – ₹60 L');
  const [message, setMessage] = useState('');
  
  // Honeypot spam protection placeholder
  const [honeypot, setHoneypot] = useState('');

  // Form states
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    phone: string;
    requirement: string;
    budget: string;
    message: string;
  } | null>(null);

  // Sync initial requirement if prop changes
  useEffect(() => {
    if (initialRequirement) {
      setRequirement(initialRequirement);
    }
  }, [initialRequirement]);

  useEffect(() => {
    if (initialPropertyTitle) {
      setMessage(`Interested in sample listing: ${initialPropertyTitle}`);
    }
  }, [initialPropertyTitle]);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!name.trim()) {
      newErrors.name = 'Please enter your full name';
    } else if (name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Phone validation for Indian mobile numbers (10 digits)
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (!phone.trim()) {
      newErrors.phone = 'Please enter your contact phone number';
    } else if (cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot spam check
    if (honeypot) {
      console.warn('Spam submission detected by honeypot');
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate submission and persist locally
    setTimeout(() => {
      const leadRecord = {
        id: 'lead-' + Date.now(),
        name: name.trim(),
        phone: phone.trim(),
        requirement,
        budget,
        message: message.trim(),
        date: new Date().toISOString(),
      };

      try {
        const existingLeads = JSON.parse(localStorage.getItem('ayush_leads') || '[]');
        existingLeads.unshift(leadRecord);
        localStorage.setItem('ayush_leads', JSON.stringify(existingLeads));
      } catch (err) {
        console.error('Local lead storage error:', err);
      }

      setSubmittedData({
        name: name.trim(),
        phone: phone.trim(),
        requirement,
        budget,
        message: message.trim(),
      });
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setMessage('');
    setIsSuccess(false);
    setSubmittedData(null);
    setErrors({});
  };

  // WhatsApp prefilled message with form details
  const getWhatsAppFormMsg = () => {
    if (!submittedData) return '';
    return encodeURIComponent(
      `Hello Ayush Properties Dealer,\nMy name is ${submittedData.name}.\nPhone: ${submittedData.phone}\nRequirement: ${submittedData.requirement}\nBudget: ${submittedData.budget}\nMessage: ${submittedData.message || 'Looking for available options in Bokaro.'}`
    );
  };

  return (
    <section id="contact-form" className="py-16 md:py-24 bg-[#0B1F3A] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Context Column */}
          <div className="lg:col-span-5 text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Property Advisory</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Get Free Property Consultation
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              Tell us your requirements and budget. We will check active verified listings and contact you directly
              with accurate property options in Bokaro Steel City.
            </p>

            {/* Quick Contact Alternatives */}
            <div className="mt-8 space-y-4 pt-6 border-t border-slate-800">
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Need immediate response?
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={SITE_CONFIG.phoneTel}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/15 text-white border border-white/20 rounded-lg text-xs font-semibold active:scale-95 transition-all"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call {SITE_CONFIG.phoneDisplay}</span>
                </a>

                <a
                  href={getWhatsAppUrl(
                    'Hello Ayush Properties Dealer, I want to talk regarding real estate in Bokaro.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-slate-950 rounded-lg text-xs font-semibold active:scale-95 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Privacy / Zero Spam Guarantee */}
            <div className="mt-6 flex items-start gap-2.5 text-xs text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                Your phone number is kept confidential. We do not engage in spam calls or unsolicited distribution.
              </span>
            </div>
          </div>

          {/* Right Column: Form Container */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl relative">
              {isSuccess && submittedData ? (
                <div className="text-center py-6 animate-fade-in text-left">
                  <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-white text-center mb-2">
                    Enquiry Received Successfully!
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm text-center mb-6 max-w-md mx-auto">
                    Thank you <strong className="text-white">{submittedData.name}</strong>. Ayush Properties Dealer has received
                    your requirement for <strong className="text-amber-400">{submittedData.requirement}</strong> within budget{' '}
                    <strong className="text-amber-400">{submittedData.budget}</strong>. We will call you at{' '}
                    <strong className="text-white font-mono">{submittedData.phone}</strong> shortly.
                  </p>

                  {/* Immediate 1-Click WhatsApp Send */}
                  <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700 mb-6 text-left">
                    <p className="text-xs text-amber-300 font-semibold mb-1">
                      Fast-track your consultation:
                    </p>
                    <p className="text-xs text-slate-400 mb-3">
                      Forward these exact details directly to the dealer on WhatsApp for instant priority response:
                    </p>
                    <a
                      href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${getWhatsAppFormMsg()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-slate-950 rounded-lg text-xs font-bold transition-all"
                    >
                      <MessageCircle className="w-4 h-4 fill-slate-950" />
                      <span>Send to WhatsApp Now</span>
                    </a>
                  </div>

                  <button
                    onClick={handleReset}
                    className="text-xs text-slate-400 hover:text-white underline block mx-auto cursor-pointer"
                  >
                    Submit another requirement
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4 text-left">
                  {/* Honeypot field (hidden from real users, traps bots) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website_check">Leave empty</label>
                    <input
                      id="website_check"
                      type="text"
                      name="website_check"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Row 1: Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="lead-name" className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Your Full Name <span className="text-amber-400">*</span>
                      </label>
                      <input
                        id="lead-name"
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                        }}
                        placeholder="e.g. Ramesh Chandra"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-800 text-white placeholder-slate-500 border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                          errors.name ? 'border-rose-500' : 'border-slate-700'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="lead-phone" className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Mobile Phone Number <span className="text-amber-400">*</span>
                      </label>
                      <input
                        id="lead-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
                        }}
                        placeholder="e.g. 07717735214 / 9876543210"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-800 text-white placeholder-slate-500 border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 font-mono ${
                          errors.phone ? 'border-rose-500' : 'border-slate-700'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Property Requirement & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="lead-req" className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Property Requirement
                      </label>
                      <select
                        id="lead-req"
                        value={requirement}
                        onChange={(e) => setRequirement(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800 text-white border border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                      >
                        <option value="Buy">Buy Property (Flat / House)</option>
                        <option value="Sell">Sell My Property</option>
                        <option value="Plots">Residential Plot / Land</option>
                        <option value="Rent">Commercial / Rent</option>
                        <option value="Consultation">General Property Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="lead-budget" className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Approximate Budget
                      </label>
                      <select
                        id="lead-budget"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800 text-white border border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                      >
                        <option value="Under ₹30 Lakhs">Under ₹30 Lakhs</option>
                        <option value="₹30 L – ₹60 L">₹30 Lakhs – ₹60 Lakhs</option>
                        <option value="₹60 L – ₹1 Crore">₹60 Lakhs – ₹1 Crore</option>
                        <option value="Above ₹1 Crore">Above ₹1 Crore</option>
                        <option value="Flexible / Consultation">Flexible / Need Advice</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="lead-message" className="block text-xs font-semibold text-slate-200 mb-1.5">
                      Specific Locality / Details (Optional)
                    </label>
                    <textarea
                      id="lead-message"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g. Looking for a 3 BHK duplex near Sector 4 or Chas with car parking..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800 text-white placeholder-slate-500 border border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
                    />
                  </div>

                  {/* Anti-Spam Verification Notice */}
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1">
                    <ShieldAlert className="w-3.5 h-3.5 text-amber-400/80 shrink-0" />
                    <span>Protected by anti-spam verification · Direct dealer callback guaranteed</span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 text-slate-950 font-bold text-xs sm:text-sm hover:brightness-105 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Submitting Enquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Property Enquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
