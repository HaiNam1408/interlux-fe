import { Stack } from "@chakra-ui/react";
import HeaderLogin from "./components/header-login";
import ContentLogin from "./components/content-login";
import FooterLogin from "./components/footer-login";
import LoadingScreen from "@components/loading-screen";
import { useState } from "react";

const Login = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <Stack
      direction={"column"}
      gap={0}
      width={"100%"}
      height={"100%"}
      minH={"100dvh"}
      bgColor={"#000"}
      pt={"9rem"}
      position={"relative"}
    >
      <LoadingScreen isLoading={isLoading} />
      <HeaderLogin />
      <ContentLogin setIsLoading={setIsLoading} />
      <FooterLogin />
    </Stack>
  );
};

export default Login;
