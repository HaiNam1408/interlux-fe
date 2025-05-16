import http from "@utils/http";

//Lấy danh sách category
export const getAllCategory = () => http.get<any>("/api/v1/client/category")