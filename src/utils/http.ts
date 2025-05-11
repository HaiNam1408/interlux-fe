import { OptionDeployBe } from "@type/urlBe.type";
import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";
import Cookies from "js-cookie";

class Http {
  instance: AxiosInstance;
  isRefreshing: boolean = false;
  refreshSubscribers: ((token: string) => void)[] = [];

  constructor() {
    this.instance = axios.create({
      baseURL: OptionDeployBe.DEPLOY_LOCAL,
      timeout: 30000,
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Dùng interceptor để tự động thêm token vào mỗi request
    this.instance.interceptors.request.use((config) => {
      const token = Cookies.get("token"); // Lấy token mới nhất
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    // Interceptor cho response -> xử lý token hết hạn
    this.instance.interceptors.response.use(
      (response) => response, // Trả về response nếu không có lỗi
      async (error: AxiosError) => {
        const originalRequest = error.config as InternalAxiosRequestConfig & {
          _retry?: boolean;
        };

        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const newToken = await this.handleRefreshToken();
            originalRequest.headers.Authorization = `Bearer ${newToken}`;

            this.refreshSubscribers.forEach((callback) => callback(newToken));
            this.refreshSubscribers = [];

            return this.instance(originalRequest);
          } catch (refreshError) {
            Cookies.remove("token");
            Cookies.remove("refreshToken");
            window.location.href = "/my-account";
            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      }
    );
  }
  // Hàm gọi API để lấy token mới từ refreshToken
  private async handleRefreshToken(): Promise<string> {
    if (this.isRefreshing) {
      return new Promise((resolve) => {
        this.refreshSubscribers.push(resolve);
      });
    }

    this.isRefreshing = true;

    try {
      const refreshToken = Cookies.get("refreshToken");
      const response = await axios.post(
        `${OptionDeployBe.DEPLOY_LOCAL}/api/v1/client/auth/reset-refresh-token`,
        {
          refreshToken,
        }
      );

      const newToken = response.data.token;
      Cookies.set("token", newToken, { expires: 1 });
      this.isRefreshing = false;
      return newToken;
    } catch (error) {
      this.isRefreshing = false;
      throw error;
    }
  }
}

const http = new Http().instance;
export default http;
