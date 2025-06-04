import { IAddress, IOrder } from "@interfaces/IOrder.interface";

export const emptyAddress: IAddress = {
  fullName: "",
  phone: "",
  email: "",
  address: "",
  district: "",
  province: "",
  note: "",
};

export const emptyOrder: IOrder = {
  shippingAddress: { ...emptyAddress },
  paymentMethod: "COD",
  note: "",
};
