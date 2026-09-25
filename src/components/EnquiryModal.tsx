import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Phone, CheckCircle2, Building2, MapPin, Calculator, Send } from 'lucide-react';
import { PropertyItem, SITE_CONFIG, getPropertyWhatsAppUrl, getWhatsAppUrl } from '../config/siteConfig';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  property: PropertyItem | null;
  mode?: 'property' | 'consultation' | 'emi';
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  property,
  mode = 'consultation',
}) => {
  const [activeTab, setActiveTab] = useState<'enquire' | 'emi'>('enquire');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // EMI Calculator states (indicative)
  const [loanAmount, setLoanAmount] = useState(3500000); // 35 Lakhs default
  const [interestRate, setInterestRate] = useState(8.5); // 8.5%
  const [tenureYears, setTenureYears] = useState(20);

  useEffect(() => {
    if (mode === 'emi') {
      setActiveTab('emi');
    } else {
      setActiveTab('enquire');
    }
    setSubmitted(false);
  }, [mode, isOpen, property]);

  if (!isOpen) return null;

  // Monthly EMI Calculation: [P x R x (1+R)^N]/[(1+R)^N-1]
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;
  const calculatedEmi = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const lead = {
      id: 'modal-' + Date.now(),
      name,
      phone,
      property: property ? property.title : 'General Consultation',
      message,
      date: new Date().toISOString(),
    };

    try {
      const existing = JSON.parse(localStorage.getItem('ayush_leads') || '[]');
      existing.unshift(lead);
      localStorage.setItem('ayush_leads', JSON.stringify(existing));
    } catch (err) {
      console.error(err);
    }

    setSubmitted(true);
  };

  const getWhatsAppDirectText = () => {
    if (property) {
      return getPropertyWhatsAppUrl(property.title, property.location);
    }
    return getWhatsAppUrl('Hello Ayush Properties Dealer, I want a free property consultation.');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-[#0B1F3A] text-white p-4 sm:p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-amber-400" />
            <h3 className="font-serif font-bold text-base sm:text-lg">
              {property ? 'Property Enquiry' : 'Free Property Consultation'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher if Property or EMI available */}
        <div className="flex border-b border-slate-200 bg-slate-50 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('enquire')}
            className={`flex-1 py-2.5 px-4 text-center border-b-2 cursor-pointer transition-colors ${
              activeTab === 'enquire'
                ? 'border-amber-500 text-[#0B1F3A] bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Direct Enquiry
          </button>
          <button
            onClick={() => setActiveTab('emi')}
            className={`flex-1 py-2.5 px-4 text-center border-b-2 cursor-pointer transition-colors flex items-center justify-center gap-1.5 ${
              activeTab === 'emi'
                ? 'border-amber-500 text-[#0B1F3A] bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Calculator className="w-3.5 h-3.5 text-amber-600" />
            <span>EMI Estimator</span>
          </button>
        </div>

        {/* Body Container */}
        <div className="p-5 sm:p-6 overflow-y-auto">
          {activeTab === 'enquire' ? (
            submitted ? (
              <div className="py-6 text-center text-left">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-bold text-lg text-slate-900 text-center mb-1">
                  Enquiry Sent Successfully!
                </h4>
                <p className="text-xs text-slate-600 text-center mb-6">
                  Ayush Properties Dealer will contact you at <strong className="font-mono">{phone}</strong>.
                </p>

                <div className="space-y-3">
                  <a
                    href={getWhatsAppDirectText()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] text-slate-950 rounded-lg text-xs font-bold hover:bg-[#20ba59] transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-slate-950" />
                    <span>Open in WhatsApp for Faster Response</span>
                  </a>

                  <button
                    onClick={onClose}
                    className="w-full py-2.5 px-4 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {/* Property context card if selected */}
                {property && (
                  <div className="mb-4 p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3 text-left">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-16 h-14 object-cover rounded-lg shrink-0"
                    />
                    <div className="overflow-hidden">
                      <p className="text-[10px] text-amber-700 font-semibold uppercase">
                        Sample Listing
                      </p>
                      <h4 className="font-semibold text-xs text-slate-900 truncate">
                        {property.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-amber-500" />
                        <span className="truncate">{property.location}</span>
                      </p>
                    </div>
                  </div>
                )}

                {/* Instant Actions Grid */}
                <div className="grid grid-cols-2 gap-2.5 mb-5">
                  <a
                    href={getWhatsAppDirectText()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-lg bg-[#25D366] text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-[#20ba59] active:scale-95 transition-all text-center"
                  >
                    <MessageCircle className="w-4 h-4 fill-slate-950" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={SITE_CONFIG.phoneTel}
                    className="py-2.5 px-3 rounded-lg bg-[#0B1F3A] text-white font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-slate-800 active:scale-95 transition-all text-center"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>Call Dealer</span>
                  </a>
                </div>

                <div className="relative mb-4">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-slate-200" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-slate-400 font-medium">Or leave a message</span>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-3 text-left">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Anand Jha"
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Contact Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 07717735214"
                      className="w-full px-3 py-2 text-xs font-mono rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Note / Preferred Timing
                    </label>
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g. Please call in evening for plot site visit"
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs rounded-lg transition-all active:scale-95 cursor-pointer shadow-sm flex items-center justify-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit & Request Callback</span>
                  </button>
                </form>
              </div>
            )
          ) : (
            /* EMI Calculator Tab */
            <div className="space-y-4 text-left">
              <p className="text-xs text-slate-600">
                Estimate indicative monthly loan installments for buying property in Bokaro:
              </p>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-800 mb-1">
                  <span>Loan Amount</span>
                  <span className="font-mono text-amber-700">₹{(loanAmount / 100000).toFixed(1)} Lakhs</span>
                </div>
                <input
                  type="range"
                  min="500000"
                  max="15000000"
                  step="100000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-800 mb-1">
                  <span>Tenure (Years)</span>
                  <span className="font-mono text-amber-700">{tenureYears} Years</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="1"
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-800 mb-1">
                  <span>Interest Rate (% p.a.)</span>
                  <span className="font-mono text-amber-700">{interestRate}%</span>
                </div>
                <input
                  type="range"
                  min="7.0"
                  max="12.0"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              {/* Calculated EMI Display */}
              <div className="p-4 bg-slate-900 rounded-xl text-white text-center">
                <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                  Estimated Monthly EMI
                </span>
                <p className="font-serif font-bold text-2xl text-amber-400 mt-1 font-mono">
                  ₹{calculatedEmi.toLocaleString('en-IN')}
                  <span className="text-xs text-slate-300 font-sans font-normal"> / month</span>
                </p>
                <p className="text-[10px] text-slate-400 mt-1">
                  *Indicative calculation. Bank approvals subject to borrower eligibility.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl(`Hello Ayush Properties Dealer, I calculated an EMI for ₹${(loanAmount / 100000).toFixed(1)} Lakhs. Can you guide me on properties in this budget?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#25D366] text-slate-950 font-bold text-xs rounded-lg hover:bg-[#20ba59] transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  <span>Discuss This Budget on WhatsApp</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
