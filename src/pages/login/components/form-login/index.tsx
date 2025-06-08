/* eslint-disable @typescript-eslint/no-explicit-any */
import { forgotPassword, login } from "@apis/auth.api";
import { Box, Button, Stack, Text } from "@chakra-ui/react";
import CheckBox from "@components/check-box";
import InputCustom from "@components/input-custom";
import { Dispatch, SetStateAction, useState } from "react";
import { LuEyeClosed } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setNotification } from "@redux/reducer/auth.reducer";
import { useDarkModeContext } from "@hooks/useDarkModeContext";

interface IFormLogin {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const FormLogin = ({ setIsLoading }: IFormLogin) => {
  const { isDarkMode } = useDarkModeContext();
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isRemember, setIsRemember] = useState<boolean>(false);
  const [isForgot, setIsForgot] = useState<boolean>(false);

  const handleForgot = async () => {
    if (!userName) {
      dispatch(
        setNotification({
          status: "warning",
          title: "Missing username or email",
          description: "Please enter your username or email address.",
        })
      );
      return;
    }

    setIsLoading(true);
    try {
      await forgotPassword(userName);
      dispatch(
        setNotification({
          status: "success",
          title: "Reset link sent!",
          description:
            "Please check your email for instructions to reset your password.",
        })
      );
      setIsForgot(false)
    } catch (error: any) {
      const message =
        error?.response?.data?.message ||
        "We couldn't send the reset link. Please try again later.";

      dispatch(
        setNotification({
          status: "error",
          title: "Reset failed",
          description: message,
        })
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const res = await login(userName, password);
      const { accessToken, refreshToken } = res.data.data;

      if (accessToken && refreshToken) {
        const cookieOptions = isRemember ? { expires: 7 } : undefined;

        Cookies.set("token", accessToken, cookieOptions);
        Cookies.set("refreshToken", refreshToken, cookieOptions);
        navigator("/");
      } else {
        dispatch(
          setNotification({
            status: "warning",
            title: "Please try logging in again or contact support.",
          })
        );
      }
    } catch {
      dispatch(
        setNotification({
          status: "error",
          title: "Invalid username or password. Please try again.",
        })
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Stack
      width={"100%"}
      gap={0}
      maxWidth={"62rem"}
      height={"100%"}
      pr={"4rem"}
      borderRight={"1px solid #cecece"}
    >
      <Text
        fontSize={{ xl: "2rem", base: "1.6rem" }}
        fontFamily={"tinos"}
        fontWeight={600}
        mb={"1rem"}
      >
        {isForgot ? "FORGOT PASSWORD" : "LOGIN"}
      </Text>
      <InputCustom
        label="Username or email address *"
        setValue={setUserName}
        value={userName}
      />
      <Box height={"4rem"} />
      {!isForgot && (
        <>
          <InputCustom
            label="Password *"
            isPassword={!isShow}
            setValue={setPassword}
            value={password}
            icon={
              <Box
                className="cursor-pointer"
                onClick={() => setIsShow(!isShow)}
              >
                {isShow ? (
                  <LuEye fontSize={"2.4rem"} color="#fff" />
                ) : (
                  <LuEyeClosed fontSize={"2.4rem"} color="#fff" />
                )}
              </Box>
            }
          />
          <Box height={"2rem"} />
          <CheckBox
            checked={isRemember}
            label="Remember me"
            onChange={setIsRemember}
            bgColor={isDarkMode ? "#000" : "#fff"}
          />
          <Box height={"4rem"} />
        </>
      )}
      {isForgot && (
        <Text fontSize={"1.4rem"} mb={"2rem"}>
          Enter your username or email address. We’ll send you a link to reset
          your password.
        </Text>
      )}
      <Button
        variant={"solid"}
        colorScheme={isDarkMode ? "#000" : "#fff"}
        maxW={isForgot ? "14rem" : "9rem"}
        fontWeight={"600"}
        color={!isDarkMode ? "#000" : "#fff"}
        height={"4rem"}
        onClick={isForgot ? handleForgot : handleLogin}
      >
        {isForgot ? "Send gmail" : "Log in"}
      </Button>
      <Text
        textDecoration={"underline"}
        fontSize={"1.4rem"}
        cursor={"pointer"}
        mt={"1.4rem"}
        onClick={() => setIsForgot(!isForgot)}
      >
        {isForgot ? "Back to Login" : "Lost your password?"}
      </Text>
    </Stack>
  );
};

export default FormLogin;
