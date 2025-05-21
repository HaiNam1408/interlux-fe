import { IProductImage } from "./IProduct.interface";

export interface ICart {
  id: number;
  userId: number;
  items: ICartItem[];
  summary: {
    totalItems: number;
    subtotal: number;
    items: number;
  };
}
export interface IAttributeValue {
  attributeValue: {
    name: string;
    value: string;
  };
}
export interface ICartItem {
  cartId: number;
  id: number;
  productId: number;
  productVariationId: number;
  quantity: number;
  product: {
    attributeValues: IAttributeValue[];
    id: number;
    images: IProductImage[];
    percentOff: number;
    price: number;
    title: number;
  };
}
