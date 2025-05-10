import { Box, Button, Stack, Text } from "@chakra-ui/react";
import InputCustom from "@components/input-custom";
import { useState } from "react";

const FormRegister = () => {
  const [userName, setUserName] = useState<string>("");

  return (
    <Stack
      width={"100%"}
      gap={0}
      maxWidth={"62rem"}
      height={"100%"}
      pl={"4rem"}
    >
      <Text
        fontSize={{ xl: "2rem", base: "1.6rem" }}
        fontFamily={"tinos"}
        fontWeight={600}
        mb={"1rem"}
      >
        REGISTER
      </Text>
      <InputCustom
        label="Email address *"
        colorLabel="#fff"
        setValue={setUserName}
        value={userName}
      />
      <Box height={"2rem"} />
      <Text fontSize={"1.4rem"}>
        Your personal data will be used to support your experience throughout
        this website, to manage access to your account, and for other purposes
        described in our privacy policy.
      </Text>

      <Box height={"4rem"} />
      <Button
        variant={"solid"}
        colorScheme="#fff"
        maxW={"9rem"}
        fontWeight={"600"}
        color={"#000"}
        height={"4rem"}
      >
        Register
      </Button>
    </Stack>
  );
};

export default FormRegister;
