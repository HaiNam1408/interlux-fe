/* eslint-disable @typescript-eslint/no-explicit-any */
import { IOrder } from "@interfaces/IOrder.interface";
import http from "@utils/http";

// Lấy danh sách Order
export const getListOrder = () => http.get<any>("/api/v1/client/order");

// Lấy Order theo id
export const getOrderById = (idOder: string) =>
  http.get<any>(`/api/v1/client/order/${idOder}`);

export const createOrder = (data: IOrder) =>
  http.post<any>("/api/v1/client/order",  data );
