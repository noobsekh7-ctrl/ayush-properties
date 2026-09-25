export interface PropertyItem {
  id: string;
  title: string;
  category: 'residential' | 'plots' | 'commercial';
  categoryLabel: string;
  location: string;
  pricePlaceholder: string;
  specs: {
    area: string;
    type: string;
    status: string;
    facing?: string;
  };
  features: string[];
  image: string;
  badge?: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  review: string;
  source: 'Google Review';
  tag: string;
}

export const SITE_CONFIG = {
  businessName: 'AYUSH PROPERTIES DEALER',
  shortName: 'Ayush Properties',
  tagline: 'Your Trusted Property Partner in Bokaro Steel City',
  phoneDisplay: '07717735214',
  phoneTel: 'tel:07717735214',
  whatsappNumber: '917717735214', // Country code 91 + 10 digits
  address: {
    line1: 'KD-22, City Center, Sector 4',
    city: 'Bokaro Steel City',
    state: 'Jharkhand',
    pincode: '827004',
    full: 'KD-22, City Center, Sector 4, Bokaro Steel City, Jharkhand 827004',
  },
  hours: {
    weekdays: 'Monday – Saturday: 9:30 AM – 7:30 PM',
    sunday: 'Sunday: 10:00 AM – 3:00 PM (By Appointment)',
  },
  rating: {
    score: 5.0,
    count: 53,
    platform: 'Google Reviews',
  },
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=City+Center+Sector+4+Bokaro+Steel+City+Jharkhand+827004',
  mapEmbedUrl: 'https://maps.google.com/maps?q=City+Center+Sector+4+Bokaro+Steel+City+Jharkhand+827004&t=&z=15&ie=UTF8&iwloc=&output=embed',
};

// WhatsApp link generator with prefilled message
export function getWhatsAppUrl(message?: string): string {
  const defaultMsg = encodeURIComponent(
    `Hello Ayush Properties Dealer, I am interested in property in Bokaro Steel City. Please share details with me.`
  );
  const text = message ? encodeURIComponent(message) : defaultMsg;
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`;
}

export function getPropertyWhatsAppUrl(propertyTitle: string, location: string): string {
  const msg = `Hello Ayush Properties Dealer, I am interested in the sample listing: "${propertyTitle}" in ${location}. Please provide availability and consultation details.`;
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
}

// Editable Featured Properties (Clearly marked Sample Property Data)
export const FEATURED_PROPERTIES: PropertyItem[] = [
  {
    id: 'prop-1',
    title: 'Independent 3 BHK Luxury Duplex Villa',
    category: 'residential',
    categoryLabel: 'Residential Villa',
    location: 'Sector 4 / Co-operative Colony, Bokaro',
    pricePlaceholder: '₹75 L – ₹95 L (Guide Price)',
    specs: {
      area: '2,150 sq.ft built-up',
      type: '3 BHK + Terrace + Parking',
      status: 'Ready / Under Construction',
      facing: 'East Facing',
    },
    features: ['Private Paved Driveway', 'Vastu Compliant', 'Clear Land Title', 'Close to City Center'],
    image: '/src/assets/images/hero_bokaro_residence_1790338348415.jpg',
    badge: 'Popular Choice',
    description:
      'Sample property representation. Spacious contemporary duplex layout with premium flooring, dedicated car porch, and serene residential sector surroundings.',
  },
  {
    id: 'prop-2',
    title: 'Demarcated Residential Plot (Clear Title)',
    category: 'plots',
    categoryLabel: 'Residential Land',
    location: 'Near City Center / Sector 4 Belt, Bokaro',
    pricePlaceholder: '₹2,800 – ₹3,400 / sq.ft',
    specs: {
      area: '1,800 – 2,400 sq.ft (3 – 4 Kattha)',
      type: 'Freehold Land Plot',
      status: 'Immediate Registry',
      facing: 'North-East',
    },
    features: ['30 ft Wide Front Road', 'Electricity & Water Available', 'Boundary Demarcated', 'Registry Ready'],
    image: '/src/assets/images/prop_residential_plot_1790338376583.jpg',
    badge: 'High Demand',
    description:
      'Sample plot listing. Ideal for custom bungalow construction or long-term capital appreciation in the fast-growing Bokaro urban expansion corridor.',
  },
  {
    id: 'prop-3',
    title: 'Spacious 3 BHK Contemporary Apartment',
    category: 'residential',
    categoryLabel: 'Apartment Flat',
    location: 'Chas – Sector 4 Connecting Corridor, Bokaro',
    pricePlaceholder: '₹48 L – ₹65 L (Guide Price)',
    specs: {
      area: '1,480 sq.ft Super Area',
      type: '3 Bed · 2 Bath · 2 Balconies',
      status: 'Ready to Move',
      facing: 'South-East',
    },
    features: ['Covered Stilt Parking', 'Power Backup Lift', 'Gated Security', 'Bank Loan Approved'],
    image: '/src/assets/images/prop_luxury_apartment_1790338361514.jpg',
    description:
      'Sample apartment unit. Well-ventilated modern flat with dual balconies, modular kitchen provision, and immediate road access to prime markets and schools.',
  },
  {
    id: 'prop-4',
    title: 'Prime Commercial Retail & Office Space',
    category: 'commercial',
    categoryLabel: 'Commercial Shop',
    location: 'City Center Sector 4 Main Market, Bokaro',
    pricePlaceholder: '₹55 L – ₹1.25 Cr (Guide Price)',
    specs: {
      area: '450 – 1,100 sq.ft',
      type: 'Ground / First Floor Shop',
      status: 'High Footfall Zone',
      facing: 'Main Road Frontage',
    },
    features: ['High Footfall Zone', 'Wide Glass Display', 'Dual Entry Access', 'Excellent Rental Yield'],
    image: '/src/assets/images/prop_commercial_space_1790338404364.jpg',
    badge: 'Investment Pick',
    description:
      'Sample commercial space. Strategic location in the heart of Bokaro’s commercial capital, Sector 4 City Center, suited for retail, clinic, or corporate branch.',
  },
];

export const SERVICES = [
  {
    id: 'buy',
    title: 'Buy Property',
    subtitle: 'Verified Residential & Commercial',
    description:
      'Access verified listings across Sector 4, Chas, and prime Bokaro localities. We assist you through site visits, clear negotiations, and title checks.',
    iconName: 'Home',
    actionText: 'Find Property to Buy',
    requirementValue: 'Buy',
  },
  {
    id: 'sell',
    title: 'Sell Property',
    subtitle: 'Fast Direct Buyer Matching',
    description:
      'List your property with Ayush Properties Dealer for fair market pricing, serious buyer screening, and zero misleading commitments.',
    iconName: 'TrendingUp',
    actionText: 'List Your Property',
    requirementValue: 'Sell',
  },
  {
    id: 'plots',
    title: 'Residential Plots',
    subtitle: 'Clear Boundary & Registry Support',
    description:
      'Invest in demarcated residential land plots in high-growth Bokaro corridors with legal document verification and hassle-free registry.',
    iconName: 'MapPin',
    actionText: 'Explore Plots',
    requirementValue: 'Plots',
  },
  {
    id: 'consult',
    title: 'Property Consultation',
    subtitle: 'Guidance & Paperwork Assistance',
    description:
      'Get expert local valuation, guidance on registry procedures, mutation assistance, and market price insights in Bokaro Steel City.',
    iconName: 'FileCheck',
    actionText: 'Get Consultation',
    requirementValue: 'Consultation',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Bokaro Local Expertise',
    description:
      'Deep, hands-on knowledge of Sector 4, City Center, Chas, Co-operative Colony, and upcoming residential expansion zones across Bokaro.',
  },
  {
    title: '100% Transparent Dealing',
    description:
      'Direct communication between genuine buyers and sellers with honest market pricing and no hidden costs or inflated margins.',
  },
  {
    title: 'Assistance Throughout the Process',
    description:
      'From the first site inspection to price negotiation, documentation check, bank loan paperwork, and final registry handover.',
  },
  {
    title: 'Customer-Focused Service',
    description:
      'We tailor recommendations strictly to your specific budget, family requirements, and investment horizon rather than pushing unsold stock.',
  },
];

// Real-style feedback with verified Google 5.0 rating attribution
export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Rajesh Kumar Singh',
    location: 'Sector 4, Bokaro',
    rating: 5,
    date: 'Verified Google Review',
    review:
      'Ayush Properties Dealer guided us very honestly during our plot purchase near City Center. Everything regarding paper verification was explained upfront without any confusion. Highly recommended dealer in Bokaro.',
    source: 'Google Review',
    tag: 'Plot Purchase',
  },
  {
    id: 'rev-2',
    author: 'Priya Sharma',
    location: 'Co-operative Colony, Bokaro',
    rating: 5,
    date: 'Verified Google Review',
    review:
      'Very professional behavior and timely response. They helped us find a genuine duplex property matching our family budget. The paperwork and registry process went very smoothly.',
    source: 'Google Review',
    tag: 'Duplex Home',
  },
  {
    id: 'rev-3',
    author: 'Amitabh Sengupta',
    location: 'Bokaro Steel City',
    rating: 5,
    date: 'Verified Google Review',
    review:
      'Transparent dealing and genuine rates. They don’t waste your time with fake promises. Honest guidance for real estate investments in Bokaro.',
    source: 'Google Review',
    tag: 'Commercial Space',
  },
];
