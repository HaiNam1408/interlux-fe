import { Stack, Text } from "@chakra-ui/react";
import RatingComponent from "../rating-detail";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";



const OrderDetail = () => {
  const product = useSelector((state: RootState) => state.product.product)

  return (
    <Stack direction={"column"} gap={"0"} width={"100%"}>
      <Text
        fontFamily={"tinos"}
        fontSize={"4.2rem"}
        color={"#fff"}
        fontWeight={500}
        overflow={"hidden"}
        textOverflow={"ellipsis"}
        whiteSpace={"nowrap"}
      >{product?.title}
      </Text>
      <Text
        fontSize={"1.6rem"}
        color={"#fff"}
        fontWeight={400}
      >{product?.description}
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
          <Text fontSize={"2.4rem"} color={"#fff"} fontWeight={600} lineHeight={"100%"}>
            ${product?.finalPrice}
          </Text>
          {product?.percentOff && <Text fontSize={"1.4rem"} color={"#fff"} fontWeight={400} lineHeight={"100%"} textDecoration="line-through">
            ${product?.price}
          </Text>}
        </Stack>
        <RatingComponent isChangeRa={false} numRating={5} title="2 reviews" />
      </Stack>
    </Stack>
  );
};

export default OrderDetail;
