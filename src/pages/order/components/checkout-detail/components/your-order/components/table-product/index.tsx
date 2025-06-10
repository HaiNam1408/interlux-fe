import {
  Grid,
  GridItem,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ICart } from "@interfaces/ICart.interface";
import ChildProduct from "../child-product";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import { IOrder } from "@interfaces/IOrder.interface";
import { useEffect, useState } from "react";
import { IShipping } from "@interfaces/IShipping.interface";
import { getMethodShipping } from "@apis/order.api";

interface ITableProduct {
  listCart: ICart | undefined;
  form: IOrder;
  setFormValue: <K extends keyof IOrder>(key: K, value: IOrder[K]) => void;
}

const TableProduct = ({ listCart, form, setFormValue }: ITableProduct) => {
  const coupon = useSelector((state: RootState) => state.cart.coupon);
  const [listMethod, setListMethod] = useState<IShipping[]>([]);
  const [method, setMethod] = useState<IShipping>();

  useEffect(() => {
    getMethodShipping().then((res) => {
      setListMethod(res.data.data.shippingMethods);
      setMethod(res.data.data.shippingMethods[0]);
    });
  }, []);

  console.log(method);

  return (
    <Grid templateColumns="repeat(12, 1fr)" mb={"2rem"}>
      <GridItem colSpan={9} borderBottom={"3px solid #ececec"}>
        <Text fontSize={"1.6rem"} fontWeight={500} textTransform={"uppercase"}>
          Product
        </Text>
      </GridItem>
      <GridItem colSpan={3} borderBottom={"3px solid #ececec"}>
        <Text
          textAlign={"center"}
          fontSize={"1.6rem"}
          fontWeight={500}
          textTransform={"uppercase"}
        >
          Subtotal
        </Text>
      </GridItem>
      {listCart?.items.map((item, index) => (
        <ChildProduct data={item} key={index} form={form} />
      ))}
      <GridItem colSpan={12}>
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
            {form.paymentMethod === "VNPAY"
              ? `${((listCart?.summary.subtotal ?? 0) * 26020).toLocaleString(
                  "vi-VN",
                  {
                    style: "currency",
                    currency: "VND",
                  }
                )}`
              : `$${listCart?.summary.subtotal.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}`}
          </Text>
        </Stack>
      </GridItem>
      <GridItem colSpan={12}>
        <Stack
          width={"100%"}
          height={"fit-content"}
          direction={"column"}
          gap={"1rem"}
          borderBottom={"1px solid #ececec"}
          py={".8rem"}
          my={".8rem"}
        >
          <Stack
            direction={"row"}
            gap={"2rem"}
            justifyContent={"space-between"}
            width={"100%"}
            alignItems={"center"}
          >
            <Text fontSize={"1.4rem"} color={"text.sub"} fontWeight={400}>
              Shipping
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
          <RadioGroup
            defaultValue="Free Shipping"
            mb={"2rem"}
            onChange={(value) => {
              const selected = listMethod.find((item) => item.name === value);
              if (selected) {
                setFormValue("shippingId", selected.id);
                setMethod(selected);
              }
            }}
          >
            <Grid templateColumns="repeat(2, 1fr)" gap={"1rem"}>
              {listMethod.map((item, index) => {
                if (item.status.includes("ACTIVE")) {
                  return (
                    <GridItem key={index}>
                      <Radio colorScheme="red" value={item.name} size={"lg"}>
                        <Text fontSize="1.4rem" fontWeight={500}>
                          {item.name}
                        </Text>
                      </Radio>
                    </GridItem>
                  );
                }
              })}
            </Grid>
          </RadioGroup>
          <Stack
            direction={"row"}
            gap={"2rem"}
            justifyContent={"space-between"}
            width={"100%"}
            alignItems={"center"}
          >
            <Text fontSize={"1.4rem"} color={"text.sub"} fontWeight={400}>
              Estimated: {method?.estimatedDays}{" "}
              {(method?.estimatedDays ?? 0) > 1 ? "days" : "day"}
            </Text>
            <Text fontSize={"1.4rem"} fontWeight={500}>
              {form.paymentMethod === "VNPAY"
                ? `${((method?.price ?? 0) * 26020).toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}`
                : `$${method?.price.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}`}
            </Text>
          </Stack>
        </Stack>
      </GridItem>
      <GridItem colSpan={12}>
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
              {form.paymentMethod === "VNPAY"
                ? `${((coupon.discountAmount ?? 0) * 26020).toLocaleString(
                    "vi-VN",
                    {
                      style: "currency",
                      currency: "VND",
                    }
                  )}`
                : `$${coupon.discountAmount.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}`}
            </Text>
          </Stack>
        )}
      </GridItem>

      <GridItem colSpan={12}>
        <Stack
          direction={"row"}
          gap={"2rem"}
          justifyContent={"space-between"}
          width={"100%"}
          borderBottom={"3px solid #ececec"}
          py={".8rem"}
          my={".8rem"}
        >
          <Text fontSize={"1.4rem"} fontWeight={400}>
            Total
          </Text>
          <Text fontSize={"1.4rem"} fontWeight={500}>
            {form.paymentMethod === "VNPAY"
              ? `${(
                  ((coupon?.subtotalAfterDiscount ??
                    listCart?.summary.subtotal ??
                    0) -
                    (method?.price ?? 0)) *
                  26020
                ).toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}`
              : ` $
            ${(
              (coupon?.subtotalAfterDiscount ??
                listCart?.summary.subtotal ??
                0) - (method?.price ?? 0)
            ).toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`}
          </Text>
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default TableProduct;
