/* eslint-disable @typescript-eslint/no-explicit-any */
import http from "@utils/http";

//Lấy danh sách sản phẩm
export const getAllProducts = (
  page: number,
  limit?: number,
  search?: string,
  categoryId?: number,
  minPrice?: number,
  maxPrice?: number,
  sortBy?: "createdAt" | "price" | "sold",
  sortDirection?: "asc" | "desc",
  attributes?: { [key: string]: string },
) => {
  const params = {
    page,
    ...(limit !== undefined && { limit }),
    ...(categoryId !== undefined && { categoryId }),
    ...(search && { search }),
    ...(sortBy && { sortBy }),
    ...(sortDirection && { sortDirection }),
    ...(minPrice !== undefined && { minPrice }),
    ...(maxPrice !== undefined && { maxPrice }),
    ...(attributes &&
      Object.values(attributes).some(v => v) && {
        attributes: JSON.stringify(attributes),
      }),
  };

  return http.get<any>("/api/v1/client/product", { params });
};

//Lấy danh sách sản phẩm bán chạy
export const getBestsellingProduct = () => http.get<any>("/api/v1/client/product/bestsellers")

//Lấy danh sách sản phẩm...
export const getFeaturedProduct = () => http.get<any>("/api/v1/client/product/featured")

//Lấy danh sách sản phẩm theo biến thể
export const getNewArrivalProduct = () => http.get<any>("/api/v1/client/product/new-arrivals")

//Lấy danh sách sản phẩm liên quan
export const getRelatedProduct = (idProduct: string) => http.get<any>(`/api/v1/client/product/related/${idProduct}`)

//Lấy sản phẩm chi tiết
export const getProduct = (idProduct:string) => http.get<any>(`/api/v1/client/product/detail/${idProduct}`)

//Lấy danh sách biến thế của sản phẩm
export const getProductVariations = (idProduct: number) => http.get<any>(`/api/v1/client/product/variations/${idProduct}`)

//Lấy danh sách biến thế của sản phẩm theo mã biến thế
export const getProductVariationsBySku = (sku: string) => http.get<any>(`/api/v1/client/product/variation/${sku}`)