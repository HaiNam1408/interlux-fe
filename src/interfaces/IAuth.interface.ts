export interface IAuth {
  message: string;
  data?: {
    accessToken: string;
    refreshToken: string;
  };
}
