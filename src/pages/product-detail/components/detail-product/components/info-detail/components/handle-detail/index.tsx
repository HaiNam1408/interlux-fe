import { Button, HStack, Input, Stack, useNumberInput } from "@chakra-ui/react";

const HandleDetail = () => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 200,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();
  return (
    <Stack width={"100%"} gap={"2rem"} direction={"row"} alignItems={"center"}>
      <HStack maxW="320px">
        <Button
          {...dec}
          bg="#333"
          color="#fff"
          _hover={{ bg: "#444" }}
          transition={"all .3s ease"}
          fontSize={"2.4rem"}
          sx={{
            minW: "4rem",
            maxW: "5rem",
          }}
          height={"4rem"}
        >
          -
        </Button>
        <Input
          {...input}
          textAlign="center"
          bg="#1a1a1a"
          color="#fff"
          border="1px solid #444"
          maxW="80px"
          fontSize={"1.8rem"}
          h={"4rem"}
        />
        <Button
          {...inc}
          bg="#333"
          color="#fff"
          _hover={{ bg: "#444" }}
          transition={"all .3s ease"}
          fontSize={"2.4rem"}
          sx={{
            minW: "4rem",
            maxW: "5rem",
          }}
          height={"4rem"}
        >
          +
        </Button>
      </HStack>
      <Button
        w={"fit-content"}
        colorScheme="#f0f0f0"
        fontWeight={600}
        fontFamily={'"Montserrat", sans-serif'}
        px={"2rem"}
        color={"#000"}
        _hover={{
          bg: "#e2e2e2",
        }}
      >
        Add to cart
      </Button>
      <Button
        w={"fit-content"}
        colorScheme="#f0f0f0"
        fontWeight={600}
        fontFamily={'"Montserrat", sans-serif'}
        px={"2rem"}
        color={"#000"}
        _hover={{
          bg: "#e2e2e2",
        }}
      >
        Buy Now
      </Button>
    </Stack>
  );
};

export default HandleDetail;
