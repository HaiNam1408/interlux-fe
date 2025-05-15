/* eslint-disable @typescript-eslint/no-explicit-any */
import http from "@utils/http";

export const getAllProducts = (
  page: number,
  limit?: number,
  categoryId?: number,
  search?: string,
  sortBy?: "createdAt" | "price" | "sold",
  sortDirection?: "asc" | "desc",
  minPrice?: number,
  maxPrice?: number,
  attributes?: string,
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
    ...(attributes && { attributes }),
  };

  return http.get<any>("/api/v1/client/product", { params });
};

