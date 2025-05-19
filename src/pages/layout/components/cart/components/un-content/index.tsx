import { IcCart } from "@assets/svgs";
import { Button, Center, Text } from "@chakra-ui/react";
import { setIsShowCart } from "@redux/reducer/cart.reducer";
import { setRememberSlug } from "@redux/reducer/productStoge.reducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const UnContent = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();

  return (
    <Center
      width={"100%"}
      height={"fit-content"}
      flexDirection={"column"}
      gap={"3rem"}
      py={"1.5rem"}
      px={"3rem"}
    >
      <IcCart />
      <Text fontSize={"1.6rem"} color={"#161375"}>
        No products in the cart.
      </Text>
      <Button
        colorScheme="#161375"
        maxW={"20rem"}
        fontWeight={700}
        onClick={() => {
          navigator(`shop/all`);
          dispatch(
            setRememberSlug({
              title: "All Furniture",
              slug: "all",
            })
          );
          dispatch(setIsShowCart(false));
        }}
      >
        Return to shop
      </Button>
    </Center>
  );
};

export default UnContent;
