import { Stack, Text } from "@chakra-ui/react";
import { FaCartShopping } from "react-icons/fa6";

const RightHeader = () => {
  return (
    <Stack
      direction={"row"}
      gap={"1.2rem"}
      alignItems={"center"}
      width={"fit-content"}
      height={"100%"}
    >
      <Stack
        direction={"row"}
        gap={".6rem"}
        alignItems={"center"}
        borderRight={"1px solid #c4c4c4"}
        pr={"2rem"}
        cursor={"pointer"}
      >
        <Text fontSize={"1.5rem"} fontWeight={400}>
          Cart
        </Text>
        <Text fontSize={"1.5rem"} fontWeight={600}>
          /
        </Text>
        <Text fontSize={"1.5rem"} fontWeight={600}>
          $0.00
        </Text>
        <FaCartShopping fontSize={"2rem"} color="#fff" />
      </Stack>
      <Text
        fontSize={"1.5rem"}
        fontWeight={400}
        whiteSpace={"nowrap"}
        cursor={"pointer"}
      >
        Login / Register
      </Text>
    </Stack>
  );
};

export default RightHeader;
