import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { IProduct } from "@interfaces/IProduct.interface";
import RatingComponent from "@pages/product-detail/components/detail-product/components/info-detail/components/rating-detail";
import { useState } from "react";

interface ICardProduct {
  data: IProduct;
}

const CardProduct = ({ data }: ICardProduct) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <Stack
      width={"100%"}
      height={"fit-content"}
      direction={"column"}
      gap={"1rem"}
      alignItems={"center"}
      cursor={"pointer"}
    >
      <Box
        width={"100%"}
        h={"38rem"}
        position={"relative"}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Image
          src={data.images[0].filePath}
          width={"100%"}
          height={"100%"}
          objectFit={"cover"}
          position={"absolute"}
          inset={0}
        ></Image>
        <Image
          src={data.images[1].filePath}
          width={"100%"}
          height={"100%"}
          objectFit={"cover"}
          transition={"all 1s ease"}
          position={"absolute"}
          inset={0}
          opacity={!hover ? 0 : 1}
          visibility={!hover ? "hidden" : "visible"}
        ></Image>
      </Box>
      <Text
        fontSize={"1.6rem"}
        textAlign={"center"}
        w={"100%"}
        noOfLines={2}
        lineHeight="1.6rem"
        minHeight="calc(1.6rem * 2)"
        fontWeight={500}
      >
        {data.title}
      </Text>
      <RatingComponent isChangeRa={false} numRating={5} title="2 reviews" />
      <Text
        fontSize={"1.4rem"}
        textAlign={"center"}
        w={"100%"}
        fontWeight={700}
      >
        ${data.price}.00
      </Text>
    </Stack>
  );
};

export default CardProduct;
