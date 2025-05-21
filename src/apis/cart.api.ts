/* eslint-disable @typescript-eslint/no-explicit-any */
import http from "@utils/http";

//Lấy danh sách giỏ hàng
export const getAllCart = () => http.get<any>("/api/v1/client/cart");

//Thêm sản phẩm vào giỏ hàng
export const addCart = (
  productId: number,
  productVariationId: number,
  quantity: number
) =>
  http.post<any>("/api/v1/client/cart", {
    productId,
    productVariationId,
    quantity,
  });

//Xoá sản phẩm
export const deleteItemCart = (id: number) =>
  http.delete<any>(`/api/v1/client/cart/item/${id}`);

//Cập nhật sản phẩm
export const updateItemCart = (cartItemId: number, quantity: number) =>
  http.put<any>(`/api/v1/client/cart/item`, {
    cartItemId,
    quantity,
  });
