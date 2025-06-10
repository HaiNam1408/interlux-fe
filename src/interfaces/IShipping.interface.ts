export interface IShipping {
  id: number;
  name: string;
  description: string;
  price: number;
  estimatedDays: number;
  provider: string;
  status: string;
  trackingInfo: string | null;
}
