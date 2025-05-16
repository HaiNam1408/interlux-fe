export interface IProductImage {
  type: string;
  fileName: string;
  filePath: string;
}

export interface IProductCategory {
  id: number;
  name: string;
  slug: string;
  parent?: IProductCategory; // category cha có thể có hoặc không
}

export interface IProductAttributeValue {
  id: number;
  name: string;
  value: string;
  slug: string;
}

export interface IProductAttribute {
  id: number;
  name: string;
  slug: string;
  values: IProductAttributeValue[];
}

export interface IGroupedAttributeValue {
  id: number;
  name: string;
  value: string;
}

export interface IGroupedAttribute {
  id: number;
  name: string;
  values: IGroupedAttributeValue[];
}

export interface IProductVariation {
  id: number;
  sku: string;
  price: number;
  percentOff: number;
  inventory: number;
  images: IProductImage[];
  isDefault: boolean;
  groupedAttributes: IGroupedAttribute[];
  finalPrice: number;
}

export interface IProduct {
  id: number;
  title: string;
  slug: string;
  description?: string;
  price: number;
  percentOff: number;
  sold: number;
  model?: string | null;
  images: IProductImage[];
  attributes?: { [key: string]: string }; // ví dụ: Features, Material, Warranty,...
  category: IProductCategory;
  productAttributes: IProductAttribute[];
  variations: IProductVariation[];
  createdAt: string;
  updatedAt?: string;
  finalPrice: number;
}
