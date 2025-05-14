import { resetRefreshToken } from "@apis/auth.api";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAutoLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");

    if (!token) {
      const refreshToken = Cookies.get("refreshToken");
      if (refreshToken) {
        resetRefreshToken(refreshToken)
          .then((newToken) => {
            Cookies.set("token", newToken.data, { expires: 3 });
            navigate("/");
          })
          .catch(() => {});
      }
    }
  }, []);
};

export default useAutoLogin;
