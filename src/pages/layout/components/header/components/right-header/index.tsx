import { Stack, Text } from "@chakra-ui/react";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { setIsShowCart } from "@redux/reducer/cart.reducer";
import { RootState } from "@redux/store";
import SwitchMode from "@pages/layout/components/switch-mode";
import { useDarkModeContext } from "@hooks/useDarkModeContext";
import { Dispatch, SetStateAction } from "react";

interface IRightHeader {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

const RightHeader = ({ setIsLogin }: IRightHeader) => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const token = Cookies.get("token");
  const subTotal = useSelector((state: RootState) => state.cart.subTotal);
  const { isDarkMode } = useDarkModeContext();
  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("refreshToken");

    localStorage.clear();
    setIsLogin(true);
    navigator("/");
  };

  return (
    <Stack
      direction={"row"}
      gap={"1.2rem"}
      alignItems={"center"}
      width={"fit-content"}
      height={"100%"}
    >
      <SwitchMode />
      <Stack
        direction={"row"}
        gap={".6rem"}
        alignItems={"center"}
        borderRight={"1px solid #c4c4c4"}
        pr={"2rem"}
        cursor={"pointer"}
        onClick={() => dispatch(setIsShowCart(true))}
      >
        <Text fontSize={"1.5rem"} fontWeight={400}>
          Cart
        </Text>
        <Text fontSize={"1.5rem"} fontWeight={600}>
          /
        </Text>
        <Text fontSize={"1.5rem"} fontWeight={600}>
          ${subTotal ?? 0}
        </Text>
        <FaCartShopping
          fontSize={"2rem"}
          color={!isDarkMode ? "#fff" : "#000"}
        />
      </Stack>
      <Text
        fontSize={"1.5rem"}
        fontWeight={400}
        whiteSpace={"nowrap"}
        cursor={"pointer"}
        onClick={() => {
          if (token) {
            handleLogout();
          } else {
            navigator("/my-account");
          }
        }}
      >
        {token ? "Logout" : "Login / Register"}
      </Text>
    </Stack>
  );
};

export default RightHeader;
