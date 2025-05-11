import { login } from "@apis/auth.api";
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

interface IFormLogin {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const FormLogin = ({ setIsLoading }: IFormLogin) => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isRemember, setIsRemember] = useState<boolean>(false);

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
            title: "Thiếu token trong response.",
          })
        );
      }
    } catch (error) {
      dispatch(
        setNotification({
          status: "error",
          title: `Đăng nhập thất bại: ${error}`,
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
        LOGIN
      </Text>
      <InputCustom
        label="Username or email address *"
        colorLabel="#fff"
        setValue={setUserName}
        value={userName}
      />
      <Box height={"4rem"} />
      <InputCustom
        label="Password *"
        colorLabel="#fff"
        isPassword={!isShow}
        setValue={setPassword}
        value={password}
        icon={
          <Box className="cursor-pointer" onClick={() => setIsShow(!isShow)}>
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
        setIsRemember={setIsRemember}
      />
      <Box height={"4rem"} />
      <Button
        variant={"solid"}
        colorScheme="#fff"
        maxW={"9rem"}
        fontWeight={"600"}
        color={"#000"}
        height={"4rem"}
        onClick={handleLogin}
      >
        Log in
      </Button>
      <Text
        textDecoration={"underline"}
        fontSize={"1.4rem"}
        cursor={"pointer"}
        mt={"1.4rem"}
      >
        Lost your password?
      </Text>
    </Stack>
  );
};

export default FormLogin;
