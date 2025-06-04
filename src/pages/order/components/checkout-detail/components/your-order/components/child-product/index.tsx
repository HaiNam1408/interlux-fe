import { Box, Center, GridItem, Image, Stack, Text } from "@chakra-ui/react";
import { ICartItem } from "@interfaces/ICart.interface";

interface IChildProduct {
  data: ICartItem;
}

const ChildProduct = ({ data }: IChildProduct) => {
  return (
    <>
      <GridItem
        colSpan={9}
        borderBottom={"1px solid #ececec"}
        p={"1.5rem .72rem 1.5rem 0"}
      >
        <Stack width="100%" direction={"column"} gap={".3rem"}>
          <Stack width={"100%"} direction={"row"} gap={".8rem"}>
            <Box
              minW={"6rem"}
              minH={"6rem"}
              width={"6rem"}
              height={"6rem"}
              position={"relative"}
            >
              <Image
                width={"100%"}
                height={"100%"}
                objectFit={"cover"}
                src={data.product.images[0].filePath}
              />
              <Center
                minH={"2.5rem"}
                minW={"2.5rem"}
                borderRadius={"50%"}
                bgColor={"#f8f8f8"}
                position={"absolute"}
                top={"-1.2rem"}
                left={"-1.2rem"}
              >
                <Text fontSize={"1.2rem"} color={"#000"}>
                  x {data.quantity}
                </Text>
              </Center>
            </Box>
            <Text fontSize={"1.5rem"}>{data.product.title}</Text>
          </Stack>
          <Stack width={"100%"} direction={"column"} gap={".4rem"} mt={"2rem"}>
            {(data.product.attributeValues || []).map((item, index) => (
              <Text fontSize={"1.3rem"} key={index}>
                {index === 0 ? "Color" : index === 1 ? "Material" : "Size"}:
                <strong> {item.attributeValue.name}</strong>
              </Text>
            ))}
          </Stack>
        </Stack>
      </GridItem>
      <GridItem colSpan={3} borderBottom={"1px solid #ececec"}>
        <Center width={"100%"} height={"100%"}>
          <Text fontSize={"1.6rem"} color={"text.main"} fontWeight={600}>
            $
            {(data.product.finalPrice * data.quantity).toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Text>
        </Center>
      </GridItem>
    </>
  );
};

export default ChildProduct;
