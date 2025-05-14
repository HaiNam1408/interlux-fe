export interface IProductImage {
  type: string;
  fileName: string;
  filePath: string;
}

export interface IProductCategory {
  id: number;
  name: string;
  slug: string;
}

export interface IProductVariation {
  id: number;
  sku: string;
  price: number;
  percentOff: number;
  inventory: number;
  images: IProductImage[];
  isDefault: boolean;
  finalPrice: number;
}

export interface IProduct {
  id: number;
  title: string;
  slug: string;
  price: number;
  percentOff: number;
  sold: number;
  images: IProductImage[];
  category: IProductCategory;
  variations: IProductVariation[];
  createdAt: string;
  finalPrice: number;
}
