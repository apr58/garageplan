
export interface InvestmentTier {
  id: string;
  name: string;
  size: string;
  capexRange: string;
  opexRange: string;
  description: string;
  features: string[];
  headcount: string;
}

export interface RevenueStream {
  name: string;
  avgTicket: string;
  margin: string;
}

export interface RoadmapItem {
  period: string;
  tasks: string[];
}

export interface Post {
  id: string;
  user: string;
  userImage: string;
  image: string;
  caption: string;
  likes: number;
  tags: string[];
}

export interface Listing {
  id: string;
  model: string;
  price: string;
  year: number;
  km: string;
  image: string;
  certified: boolean;
  score: number;
}

export interface MotoEvent {
  id: string;
  title: string;
  date: string;
  distance: string;
  type: 'Breakfast' | 'Tour' | 'Workshop';
  image: string;
}
