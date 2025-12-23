
import { InvestmentTier, RevenueStream, RoadmapItem, Post, Listing, MotoEvent } from './types';

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
  { name: 'Marketplace Commissions', avgTicket: '1% – 3% of Sale', margin: '90%' },
  { name: 'Garage Services', avgTicket: '₹2.5k – ₹1.5L', margin: '45%' },
  { name: 'Community Memberships', avgTicket: '₹999 – ₹2,999', margin: '35%' },
  { name: 'Brand Partnerships', avgTicket: 'Custom/Retainer', margin: '80%' }
];

export const FINANCIAL_PROJECTIONS = [
  { month: 'M6', revenue: 7.5, label: 'Early Traction' },
  { month: 'M12', revenue: 27, label: 'Near Break-even' },
  { month: 'M18', revenue: 50, label: 'Strong Unit Econ' },
  { month: 'M24', revenue: 80, label: '9.6 Cr ARR' },
];

export const CAP_TABLE = [
  { name: 'Founder', value: 65, color: '#f59e0b' },
  { name: 'Angel Investors', value: 20, color: '#fbbf24' },
  { name: 'ESOP Pool', value: 10, color: '#d97706' },
  { name: 'Advisors', value: 5, color: '#78350f' },
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

export const MOCK_POSTS: Post[] = [
  {
    id: '1',
    user: 'ridebuild_official',
    userImage: 'https://images.unsplash.com/photo-1610642372651-fe6e7bc209ef?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1621359983474-3c404c7c631d?w=800&q=80',
    caption: 'Classic Bullet rebuild finished today. Polished chrome, stage 1 performance kit, and that signature thump restored. 🔥 #RoyalEnfield #RideBuild',
    likes: 312,
    tags: ['Bullet Rebuild', 'PerformanceKit']
  },
  {
    id: '2',
    user: 'tourer_soul',
    userImage: 'https://images.unsplash.com/photo-1558981359-219d6364c96f?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1558981420-87aa9dad1c89?w=800&q=80',
    caption: 'Triumph Tiger 900 ready for the Coorg expedition. Full service, new crash guards, and aux lights installed at RideBuild. 🐯 #TriumphTourer',
    likes: 428,
    tags: ['TriumphTiger', 'TouringPrep']
  }
];

export const MOCK_LISTINGS: Listing[] = [
  {
    id: 'b1',
    model: 'Triumph Tiger 800 XRx',
    price: '₹10,50,000',
    year: 2021,
    km: '8,200 KM',
    image: 'https://images.unsplash.com/photo-1558981359-219d6364c96f?w=600&q=80',
    certified: true,
    score: 96
  },
  {
    id: 'b2',
    model: 'Royal Enfield Bullet 500',
    price: '₹1,95,000',
    year: 2019,
    km: '15,000 KM',
    image: 'https://images.unsplash.com/photo-1635073913732-45c60193ee0c?w=600&q=80',
    certified: true,
    score: 91
  }
];

export const MOCK_EVENTS: MotoEvent[] = [
  {
    id: 'e1',
    title: 'Breakfast Ride: Lepakshi',
    date: 'Next Sunday, 6:00 AM',
    distance: '120 KM',
    type: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1444491741275-3747c53c99b4?w=600&q=80'
  },
  {
    id: 'e2',
    title: 'Monsoon Tour: Coorg',
    date: 'July 15-17',
    distance: '550 KM',
    type: 'Tour',
    image: 'https://images.unsplash.com/photo-1502759683299-cdcc69741a7f?w=600&q=80'
  }
];
