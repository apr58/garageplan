
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
