import { Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import { ICart } from "@interfaces/ICart.interface";
import ChildProduct from "../child-product";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";

interface ITableProduct {
  listCart: ICart | undefined;
}

const TableProduct = ({ listCart }: ITableProduct) => {
  const coupon = useSelector((state: RootState) => state.cart.coupon);

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
        <ChildProduct data={item} key={index} />
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
            $
            {listCart?.summary.subtotal.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Text>
        </Stack>
      </GridItem>
      <GridItem colSpan={12}>
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
              $
              {coupon.discountAmount.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
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
      </GridItem>
    </Grid>
  );
};

export default TableProduct;
