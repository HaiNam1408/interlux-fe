import { Stack, Text } from "@chakra-ui/react";
import RatingComponent from "../rating-detail";



const OrderDetail = () => {

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
      >
        Dark Blue Shark Leather Watch Strap
      </Text>
      <Stack
        width={"100%"}
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={"2rem"}
      >
        <Text fontSize={"2rem"} color={"#fff"} fontWeight={500}>
          $150.00
        </Text>
        <RatingComponent isChangeRa={false} numRating={5} title="2 reviews" />
      </Stack>
    </Stack>
  );
};

export default OrderDetail;
