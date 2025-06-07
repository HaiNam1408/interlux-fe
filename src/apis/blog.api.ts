import http from "@utils/http";

export const getListBlog = () => http.get<any>(`/api/v1/client/blog`);
