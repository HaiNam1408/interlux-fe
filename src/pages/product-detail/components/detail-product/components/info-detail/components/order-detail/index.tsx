import { Stack, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import { IProductVariation } from "@interfaces/IProduct.interface";

interface IOrderDetail {
  selectedVariation: IProductVariation | null;
}

const OrderDetail = ({ selectedVariation }: IOrderDetail) => {
  const product = useSelector((state: RootState) => state.product.product);

  return (
    <Stack direction={"column"} gap={"0"} width={"100%"}>
      <Text
        fontFamily={"tinos"}
        fontSize={"4.2rem"}
        fontWeight={500}
        overflow={"hidden"}
        textOverflow={"ellipsis"}
        whiteSpace={"nowrap"}
      >
        {product?.title}
      </Text>

      <Stack
        width={"100%"}
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={"2rem"}
        mt={"1rem"}
      >
        <Stack direction={"row"} alignItems={"flex-end"}>
          <Text fontSize={"2.4rem"} fontWeight={600} lineHeight={"100%"}>
            $
            {selectedVariation
              ? selectedVariation.finalPrice
              : product?.finalPrice}
          </Text>
          {product?.percentOff && (
            <Text
              fontSize={"1.4rem"}
              fontWeight={400}
              lineHeight={"100%"}
              textDecoration="line-through"
            >
              ${selectedVariation ? selectedVariation.price : product?.price}
            </Text>
          )}
        </Stack>
     
      </Stack>
    </Stack>
  );
};

export default OrderDetail;
