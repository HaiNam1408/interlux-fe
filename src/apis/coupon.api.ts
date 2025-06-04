/* eslint-disable @typescript-eslint/no-explicit-any */
import http from "@utils/http";

// Kiểm tra mã giảm giá có hợp lệ không
export const checkValidateCoupon = (code: string) =>
  http.post<any>("/api/v1/client/coupon/validate", { code });

// Lấy danh sách các mã hợp lệ
export const getAvailableCoupon = () =>
  http.get<any>("/api/v1/client/coupon/available");
