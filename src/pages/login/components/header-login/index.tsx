import { Center, Text } from "@chakra-ui/react";

const HeaderLogin = () => {
  return (
    <Center
      width={"100%"}
      height={"fit-content"}
      p={"1.6rem"}
      bgColor={"#000"}
      borderBlock={"1px solid #ececec"}
    >
      <Text
        fontSize={{ xl: "2.8rem", base: "2rem" }}
        color={"#FFF"}
        fontFamily={"tinos"}
        fontWeight={700}
      >
        MY ACCOUNT
      </Text>
    </Center>
  );
};

export default HeaderLogin;
