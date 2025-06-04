/* eslint-disable @typescript-eslint/no-explicit-any */
import http from "@utils/http";

// Gửi yêu cầu qua thanh toán thẻ
export const createPaymentURL = (orderId: number, paymentMethod: string) =>
  http.post<any>("/api/v1/client/payment/create-url", {
    orderId,
    paymentMethod,
  });
