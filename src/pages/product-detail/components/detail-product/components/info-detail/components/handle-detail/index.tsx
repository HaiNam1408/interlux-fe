/* eslint-disable @typescript-eslint/no-unused-vars */
import { addCart } from "@apis/cart.api";
import { Button, HStack, Input, Stack, useNumberInput } from "@chakra-ui/react";
import { IProductVariation } from "@interfaces/IProduct.interface";
import { setNotification } from "@redux/reducer/auth.reducer";
import { setIsReset } from "@redux/reducer/cart.reducer";
import { RootState } from "@redux/store";
import { useDispatch, useSelector } from "react-redux";

interface IHandleDetail {
  selectedVariation: IProductVariation | null;
}

const HandleDetail = ({ selectedVariation }: IHandleDetail) => {
  const dispatch = useDispatch();
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
  const product = useSelector((state: RootState) => state.product.product);

  const handleAddToCart = async () => {
    try {
      const quantity = parseInt(input.value, 10);
      await addCart(product?.id || 0, selectedVariation?.id || 0, quantity);

      dispatch(
        setNotification({
          status: "success",
          title: "Đã thêm thành công sản phẩm.",
        })
      );
      dispatch(setIsReset());
    } catch (error) {
      dispatch(
        setNotification({
          status: "warning",
          title: "Thiếu token trong response.",
        })
      );
    }
  };
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
        onClick={handleAddToCart}
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
