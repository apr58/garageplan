
import { InvestmentTier, RevenueStream, RoadmapItem } from './types';

export const INVESTMENT_TIERS: InvestmentTier[] = [
  {
    id: 'lean',
    name: 'Lean Start',
    size: '2,000 sq ft',
    capexRange: '₹30L – ₹60L',
    opexRange: '₹5L – ₹10L',
    description: 'Perfect for market validation and rapid community building.',
    features: [
      'Core bike service',
      'Basic detailing',
      'Community rides',
      '2-3 Bike lifts',
      '6-8 Staff members'
    ],
    headcount: '6-8 people'
  },
  {
    id: 'standard',
    name: 'Standard Hub',
    size: '4,000 sq ft',
    capexRange: '₹70L – ₹1.6Cr',
    opexRange: '₹9L – ₹19L',
    description: 'The sweet spot for premium service, mods, and community engagement.',
    features: [
      'Premium lounge',
      'Suspension/Electrical lab',
      'Full detailing setup',
      '5-6 Bike bays',
      '10-14 Staff members'
    ],
    headcount: '10-14 people'
  },
  {
    id: 'flagship',
    name: 'Flagship Destination',
    size: '6,000 – 10k sq ft',
    capexRange: '₹2Cr – ₹5Cr+',
    opexRange: '₹20L – ₹45L',
    description: 'A destination garage featuring car bays, dyno, and fabrication.',
    features: [
      'Car & Bike lifts',
      'Custom fabrication',
      'Dyno station',
      'Paint booth',
      'Tech platform MVP'
    ],
    headcount: '20+ people'
  }
];

export const REVENUE_STREAMS: RevenueStream[] = [
  { name: 'Bike Service', avgTicket: '₹2.5k - ₹8k', margin: '45%' },
  { name: 'Performance Mods', avgTicket: '₹10k - ₹1.5L', margin: '30%' },
  { name: 'Detailing/PPF', avgTicket: '₹3k - ₹35k', margin: '50%' },
  { name: 'Tours/Membership', avgTicket: '₹1k - ₹3k', margin: '35%' },
  { name: 'Buy/Sell Fees', avgTicket: '₹1.5k - ₹5k', margin: '90%' }
];

export const ROADMAP: RoadmapItem[] = [
  {
    period: 'Days 1–30',
    tasks: [
      'Finalize location in Bangalore belts (Peenya/E-City)',
      'Recruit core tech team (Senior Mod Specialist)',
      'Launch "Founders Club 100" WhatsApp community'
    ]
  },
  {
    period: 'Days 31–60',
    tasks: [
      'Soft launch: Standard service operations',
      'Execute first 4 weekend breakfast rides',
      'Membership program V1 rollout'
    ]
  },
  {
    period: 'Days 61–90',
    tasks: [
      'Mods & Detailing full capacity',
      'Certified Pre-Owned inspection program pilot',
      'Instagram-led Buy/Sell listing integration'
    ]
  }
];
