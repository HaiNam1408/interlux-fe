/* eslint-disable no-constant-condition */
import { Box } from "@chakra-ui/react";
import { setIsShowCart } from "@redux/reducer/cart.reducer";
import { RootState } from "@redux/store";
import { useDispatch, useSelector } from "react-redux";
import ContentCart from "./components/content";
import { IoMdClose } from "react-icons/io";
import HeaderCart from "./components/header";
import UnContent from "./components/un-content";
import FooterCart from "./components/footer";
import { useEffect, useState } from "react";
import { ICart } from "@interfaces/ICart.interface";
import { getAllCart } from "@apis/cart.api";
import LoadingCustom from "@components/loading-custom";

const Cart = () => {
  const dispatch = useDispatch();
  const [listCart, setListCart] = useState<ICart>();
  const [loading, setLoading] = useState<boolean>(false);

  const isShowCart = useSelector((state: RootState) => state.cart.isShowCart);
  const isReset = useSelector((state: RootState) => state.cart.isResetCart);

  useEffect(() => {
    setLoading(true);
    getAllCart()
      .then((res) => setListCart(res.data.data))
      .finally(() => setLoading(false));
  }, [isReset]);

  return (
    <Box
      width={"100dvw"}
      height={"100dvh"}
      position={"fixed"}
      inset={0}
      zIndex={9999}
      style={{
        transition: "all .3s ease",
        opacity: isShowCart ? 1 : 0,
        visibility: isShowCart ? "visible" : "hidden",
      }}
    >
      <Box
        width={"100%"}
        height={"100%"}
        position={"absolute"}
        inset={0}
        bgColor={"#00000090"}
        style={{
          transition: "all .3s ease",
          opacity: isShowCart ? 1 : 0,
          visibility: isShowCart ? "visible" : "hidden",
        }}
        cursor={"pointer"}
        onClick={() => dispatch(setIsShowCart(false))}
        zIndex={1}
      ></Box>

      <Box
        width={"100%"}
        maxW={"45rem"}
        height={"100dvh"}
        bgColor={"#fff"}
        position={"absolute"}
        right={isShowCart ? 0 : "-100%"}
        zIndex={2}
        transition={"all .8s ease"}
      >
        <LoadingCustom isLoading={loading} />
        <Box
          width={"4rem"}
          height={"4rem"}
          position={"absolute"}
          top={"1rem"}
          right={"1rem"}
          cursor={"pointer"}
          onClick={() => dispatch(setIsShowCart(false))}
        >
          <IoMdClose fontSize={"3.4rem"} color="#000" />
        </Box>
        <HeaderCart />
        {(listCart?.items || []).length <= 0 ? (
          <UnContent />
        ) : (
          <>
            <ContentCart
              listCart={listCart}
              setListCart={setListCart}
              setLoading={setLoading}
            />
            <FooterCart listCart={listCart} />
          </>
        )}
      </Box>
    </Box>
  );
};

export default Cart;
