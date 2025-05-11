/* eslint-disable @typescript-eslint/no-explicit-any */
import http from "@utils/http";

export const login = (email: string, password: string) =>
  http.post<any>("/api/v1/client/auth/login", {
    email,
    password,
  });

export const register = (
  username: string,
  email: string,
  phone: string,
  password: string
) =>
  http.post<any>("/api/v1/client/auth/register", {
    email,
    password,
    username,
    phone,
  });

export const resetRefreshToken = (refreshToken: string) =>
  http.post<any>("/api/v1/client/auth/reset-refresh-token", refreshToken);
