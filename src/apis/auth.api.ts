import { IAuth } from "@interfaces/IAuth.interface";
import http from "@utils/http";

export const login = (username: string, password: string) =>
  http.post<IAuth>("/api/auth/login", {
    username,
    password,
  });

export const register = (
  username: string,
  password: string,
  email: string,
  first_name: string,
  last_name: string,
  company_name: string
) =>
  http.post<IAuth>("/api/auth/register", {
    username,
    password,
    email,
    first_name,
    last_name,
    company_name,
  });

export const confirmEmail = (confirmationToken: string) =>
  http.get<IAuth>(`/api/auth/confirm/${confirmationToken}`);
