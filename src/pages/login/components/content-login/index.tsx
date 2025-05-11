import { Stack } from "@chakra-ui/react";
import FormLogin from "../form-login";
import FormRegister from "../form-register";
import { Dispatch, SetStateAction } from "react";

interface IContentLogin {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const ContentLogin = ({ setIsLoading }: IContentLogin) => {
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
      <FormLogin setIsLoading={setIsLoading} />
      <FormRegister setIsLoading={setIsLoading} />
    </Stack>
  );
};

export default ContentLogin;
