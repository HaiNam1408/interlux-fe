import { checkValidateCoupon } from "@apis/coupon.api";
import { Box, Button, Stack, Text } from "@chakra-ui/react";
import InputCustom from "@components/input-custom";
import LoadingCustom from "@components/loading-custom";
import { ICart } from "@interfaces/ICart.interface";
import { setNotification } from "@redux/reducer/auth.reducer";
import { setCoupon } from "@redux/reducer/cart.reducer";
import { RootState } from "@redux/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface IDetailShopping {
  listCart: ICart | undefined;
}

const DetailShopping = ({ listCart }: IDetailShopping) => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const coupon = useSelector((state: RootState) => state.cart.coupon);
  const [valueCoupon, setValueCoupon] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleCheckCoupont = () => {
    setLoading(true);
    checkValidateCoupon(valueCoupon)
      .then((res) => {
        dispatch(setCoupon(res.data.data));
        dispatch(
          setNotification({
            status: "success",
            title: res.data.data.message,
          })
        );
        setValueCoupon("");
      })
      .catch((error) => {
        dispatch(
          setNotification({
            status: "error",
            title: error.response.data.message.join(", "),
          })
        );
      })
      .finally(() => setLoading(false));
  };

  return (
    <Stack width={"100%"} height={"fit-content"} direction={"column"} gap={"0"}>
      <Text
        fontSize={"1.6rem"}
        fontWeight={500}
        textTransform={"uppercase"}
        borderBottom={"3px solid #ececec"}
        width={"100%"}
      >
        Cart Totals
      </Text>
      <Stack
        direction={"row"}
        gap={"2rem"}
        justifyContent={"space-between"}
        width={"100%"}
        borderBottom={"1px solid #ececec"}
        py={".8rem"}
        my={".8rem"}
      >
        <Text fontSize={"1.4rem"} fontWeight={400}>
          Subtotal
        </Text>
        <Text fontSize={"1.4rem"} fontWeight={500}>
          $
          {listCart?.summary.subtotal.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </Text>
      </Stack>
      <Stack
        direction={"row"}
        gap={"2rem"}
        justifyContent={"space-between"}
        width={"100%"}
        borderBottom={"1px solid #ececec"}
        py={".8rem"}
        my={".8rem"}
        alignItems={"center"}
      >
        <Text fontSize={"1.4rem"} color={"text.sub"} fontWeight={400}>
          Shipping
        </Text>
        <Stack direction={"column"} gap={".4rem"} justifyContent={"flex-end"}>
          <Text
            textAlign={"right"}
            fontSize={"1.2rem"}
            color={"text.sub"}
            fontWeight={500}
          >
            Express (order value over $450): Free
          </Text>
          <Text
            textAlign={"right"}
            fontSize={"1.2rem"}
            color={"text.sub"}
            fontWeight={500}
          >
            Shipping options will be updated during checkout.
          </Text>
        </Stack>
      </Stack>
      {coupon && (
        <Stack
          direction={"row"}
          gap={"2rem"}
          justifyContent={"space-between"}
          width={"100%"}
          borderBottom={"2px solid #ececec"}
          py={".8rem"}
          my={".8rem"}
        >
          <Text fontSize={"1.4rem"} fontWeight={400}>
            Discount
          </Text>
          <Text fontSize={"1.4rem"} fontWeight={500}>
            $
            {coupon.discountAmount.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Text>
        </Stack>
      )}

      <Stack
        direction={"row"}
        gap={"2rem"}
        justifyContent={"space-between"}
        width={"100%"}
        borderBottom={"2px solid #ececec"}
        py={".8rem"}
        my={".8rem"}
      >
        <Text fontSize={"1.4rem"} fontWeight={400}>
          Total
        </Text>
        <Text fontSize={"1.4rem"} fontWeight={500}>
          $
          {(
            coupon?.subtotalAfterDiscount ??
            listCart?.summary.subtotal ??
            0
          ).toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </Text>
      </Stack>
      <Button
        bg="#1a1a1a"
        color="#fff"
        width={"100%"}
        height={"4.8rem"}
        my={"2rem"}
        onClick={() => navigator("/checkout/details")}
      >
        Proceed to checkout
      </Button>
      <Stack
        direction={"column"}
        gap={"0"}
        width={"100%"}
        position={"relative"}
      >
        <LoadingCustom isLoading={loading} />
        <Text
          fontSize={"1.6rem"}
          fontWeight={500}
          borderBottom={"3px solid #ececec"}
          width={"100%"}
        >
          Coupon
        </Text>
        <Box h={"2rem"} />
        <InputCustom
          label=""
          setValue={(e) => setValueCoupon(e)}
          value={valueCoupon}
          placeholder="Coupon code"
        />
        <Button
          colorScheme="#f9f9f9"
          color="#666666"
          width={"100%"}
          height={"4.8rem"}
          my={"2rem"}
          onClick={handleCheckCoupont}
        >
          Apply coupon
        </Button>{" "}
      </Stack>
    </Stack>
  );
};

export default DetailShopping;
