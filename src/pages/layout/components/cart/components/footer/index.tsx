import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { IoMdLock } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const FooterCart = () => {
  const navigator = useNavigate();

  return (
    <Stack
      width={"100%"}
      height={"fit-content"}
      borderTop={"1px solid #f1f1f1"}
      p={"0 3rem 3rem 3rem"}
    >
      <Stack
        width={"100%"}
        height={"fit-content"}
        direction={"column"}
        gap={"1rem"}
        mt={"1.5rem"}
        mb={"2rem"}
      >
        <Text fontSize={"1.6rem"} color={"#161735"}>
          Add <strong>$361.00</strong> to cart and get free shipping!
        </Text>
        <Box
          width={"100%"}
          height={".8rem"}
          position={"relative"}
          borderRadius={".5rem"}
          bgColor={"#ddd"}
        >
          <Box
            width={"20%"}
            height={".8rem"}
            position={"absolute"}
            borderRadius={".5rem"}
            bgColor={"#161735"}
            left={0}
            top={0}
          ></Box>
        </Box>
      </Stack>
      <Stack
        width={"100%"}
        py={"1rem"}
        mb={".8rem"}
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        borderTop={"1px solid #f1f1f1"}
        borderBottom={"2px solid #f1f1f1"}
      >
        <Text fontSize={"1.6rem"} color={"#161735"} fontWeight={600}>
          Subtotal:
        </Text>
        <Text fontSize={"1.6rem"} color={"#161735"} fontWeight={600}>
          $89.00
        </Text>
      </Stack>
      <Stack width={"100%"} direction={"column"}>
        <Button
          colorScheme="#fff"
          color={"#161735"}
          maxW={"12rem"}
          h={"4rem"}
          fontWeight={700}
          onClick={() => navigator("/cart")}
        >
          View Cart
        </Button>
        <Button
          colorScheme="#161375"
          maxW={"18rem"}
          fontWeight={700}
          h={"4rem"}
          leftIcon={
            <Box mt={"-.3rem"}>
              <IoMdLock fontSize={"2.4rem"} color="#fff" />
            </Box>
          }
          alignItems={"center"}
          onClick={() => navigator("/checkout")}
        >
          Checkout Now
        </Button>
      </Stack>
    </Stack>
  );
};

export default FooterCart;
