export interface ICoupon {
  id: number;
  code: string;
  type: "PERCENTAGE" | "FIXED";
  value: number;
  minPurchase: number;
  maxUsage: number;
  usageCount: number;
  startDate: string;
  endDate: string;
  status: "ACTIVE" | "INACTIVE";
  createdAt: string;
  updatedAt: string;
}

export interface ICouponResponse {
  coupon: ICoupon;
  valid: boolean;
  discountAmount: number;
  subtotalAfterDiscount: number;
  message: string;
}
