import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { setIsShowCart } from "@redux/reducer/cart.reducer";
import { RootState } from "@redux/store";
import { IoMdLock } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const FooterCart = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const subTotal = useSelector((state: RootState) => state.cart.subTotal);

  return (
    <Stack
      width={"100%"}
      height={"fit-content"}
      borderTop={"1px solid #f1f1f1"}
      p={"0 3rem 3rem 3rem"}
    >
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
          $
          {subTotal.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </Text>
      </Stack>
      <Stack width={"100%"} direction={"column"}>
        <Button
          colorScheme="#fff"
          color={"#161735"}
          maxW={"12rem"}
          h={"4rem"}
          fontWeight={700}
          onClick={() => {
            dispatch(setIsShowCart(false));
            navigator("/checkout/cart");
          }}
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
          onClick={() => {
            dispatch(setIsShowCart(false));
            navigator("/checkout/cart");
          }}
        >
          Checkout Now
        </Button>
      </Stack>
    </Stack>
  );
};

export default FooterCart;
