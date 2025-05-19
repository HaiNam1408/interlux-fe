import http from "@utils/http";


//Lấy danh sách giỏ hàng
export const getAllCart = () => http.get<any>("/api/v1/client/cart")