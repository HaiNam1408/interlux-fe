import http from "@utils/http";

// Kiểm tra mã giảm giá có hợp lệ không
export const checkValidateCoupon = (code: string) =>
  http.post<any>("/api/v1/client/coupon/validate", { code });
