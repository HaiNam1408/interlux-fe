export interface IAddress {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  district: string;
  province: string;
  note: string;
}

export interface IOrder {
  shippingAddress: IAddress;
  shippingId?: number;
  paymentMethod: string;
  couponCode?: string;
  note: string;
}
