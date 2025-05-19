import { Box, Center, Text } from "@chakra-ui/react";

const HeaderCart = () => {
  return (
    <Center flexDirection={"column"} width={"100%"}>
      <Text
        fontSize={"2rem"}
        textTransform={"uppercase"}
        fontWeight={600}
        color={"#161735"}
        padding={"3rem 3rem 0 3rem"}
      >
        Cart
      </Text>
      <Box
        width={"3rem"}
        height={".3rem"}
        bgColor={"#ececec"}
        margin={"1.6rem auto"}
      ></Box>
    </Center>
  );
};

export default HeaderCart;
