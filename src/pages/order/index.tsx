import { getAllCart } from "@apis/cart.api";
import { Stack } from "@chakra-ui/react";

import LoadingScreen from "@components/loading-screen";
import { ICart } from "@interfaces/ICart.interface";
import { setNotification } from "@redux/reducer/auth.reducer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StepOrder from "./components/step-oder";
import FooterLogin from "@pages/login/components/footer-login";
import { useLocation } from "react-router-dom";
import ShoppintCart from "./components/shopping-cart";
import CheckoutDetail from "./components/checkout-detail";
import OrderComplete from "./components/order-complete";
import { RootState } from "@redux/store";

const Order = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [listCart, setListCart] = useState<ICart>();
  const isReset = useSelector((state: RootState) => state.cart.isResetCart);

  useEffect(() => {
    setLoading(true);
    getAllCart()
      .then((res) => {
        setListCart(res.data.data);
      })
      .catch((error) => {
        dispatch(
          setNotification({
            status: "warning",
            title: error.data.response.message,
          })
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, [isReset]);

  return (
    <Stack
      width={"100%"}
      height={"fit-content"}
      position={"relative"}
      py={"2rem"}
    >
      <LoadingScreen isLoading={loading} />
      <StepOrder />
      {location.pathname.includes("/checkout/cart") && (
        <ShoppintCart listCart={listCart} />
      )}
      {location.pathname.includes("/checkout/details") && <CheckoutDetail listCart={listCart}/>}
      {location.pathname.includes("/checkout/complete") && <OrderComplete />}
      <FooterLogin />
    </Stack>
  );
};

export default Order;
