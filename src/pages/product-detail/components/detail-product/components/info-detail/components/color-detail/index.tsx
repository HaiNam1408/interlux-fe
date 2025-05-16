import { Box, Center, Stack, Text } from "@chakra-ui/react";
import { RootState } from "@redux/store";
import { Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";



interface IColorDetail {
  setItemSelected: Dispatch<
    SetStateAction<{
      value: string;
      colorTitle: string;
    }>
  >;
  itemSelected: {
    value: string;
    colorTitle: string;
  };
}

const ColorDetail = ({ itemSelected, setItemSelected }: IColorDetail) => {
  const product = useSelector((state: RootState) => state.product.product)
  return (
    <Stack direction={"column"} gap={"1rem"} my={"2rem"}>
      <Text fontSize={"1.6rem"} color={"#fff"}>
        <strong>Color:</strong> {itemSelected.colorTitle}
      </Text>
      <Stack direction={"row"} gap={"1rem"}>
        {product?.productAttributes.find(item => item.name.toLowerCase().includes("color"))?.values.map((item, index) => (
          <Center
            width={"6.2rem"}
            height={"6.2rem"}
            minH={"5.4rem"}
            minW={"5.4rem"}
            p={".4rem"}
            borderRadius={".4rem"}
            border={
              itemSelected.value === item.value
                ? "1px solid rgb(72, 138, 253)"
                : "1px solid #cecece"
            }
            key={index}
            cursor={"pointer"}
            onClick={() => setItemSelected({
              value: item.value,
              colorTitle: item.name
            })}
            transition={"all .3s ease"}
            _hover={{
              border: "1px solid rgb(72, 138, 253)",
            }}
          >
            <Box
              width={"5.2rem"}

              height={"5.2rem"}
              objectFit={"cover"}
              borderRadius={".4rem"}
              bgColor={item.value}
            ></Box>
          </Center>
        ))}
      </Stack>
    </Stack>
  );
};

export default ColorDetail;
