import { Stack } from "@chakra-ui/react";
import FormLogin from "../form-login";
import FormRegister from "../form-register";

const ContentLogin = () => {
  return (
    <Stack
      width={"100%"}
      height={"100%"}
      padding={"2rem"}
      flex={1}
      direction={"row"}
      alignItems={"flex-start"}
      justifyContent={"center"}
      gap={0}
    >
      <FormLogin />
      <FormRegister />
    </Stack>
  );
};

export default ContentLogin;
