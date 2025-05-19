import { IProduct, IProductVariation } from "./IProduct.interface";

export interface ICart {
  id: number;
  userId: number;
  items: {
    id: number;
    cartId: number;
    productId: number;
    productVariationId: number;
    quantity: number;
    product:IProduct;
    productVariation: IProductVariation
  }[];
  summary: {
    totalItems: number;
    subtotal: number;
    items: number;
  };
}
