import {  Stack } from "@chakra-ui/react";
import HeaderLogin from "./components/header-login";
import ContentLogin from "./components/content-login";
import FooterLogin from "./components/footer-login";

const Login = () => {
  return (
    <Stack
      direction={"column"}
      gap={0}
      width={"100%"}
      height={"100%"}
      minH={"100dvh"}
      bgColor={"#000"}
      pt={"9rem"}
    >
      <HeaderLogin />
      <ContentLogin/>
      <FooterLogin/>
    </Stack>
  );
};

export default Login;
