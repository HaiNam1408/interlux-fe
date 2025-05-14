import { Center, Image, Stack, Text } from "@chakra-ui/react";
import { listColor } from "@constants/listFakeData";
import { Dispatch, SetStateAction } from "react";



interface IColorDetail {
  setItemSelected: Dispatch<
    SetStateAction<{
      image: string;
      colorTitle: string;
    }>
  >;
  itemSelected: {
    image: string;
    colorTitle: string;
  };
}

const ColorDetail = ({ itemSelected, setItemSelected }: IColorDetail) => {
  return (
    <Stack direction={"column"} gap={"1rem"} my={"2rem"}>
      <Text fontSize={"1.6rem"} color={"#fff"}>
        <strong>Color:</strong> {itemSelected.colorTitle}
      </Text>
      <Stack direction={"row"} gap={"1rem"}>
        {listColor.map((item, index) => (
          <Center
            width={"6.2rem"}
            height={"6.2rem"}
            p={".4rem"}
            borderRadius={".4rem"}
            border={
              itemSelected.image === item.image
                ? "1px solid rgb(72, 138, 253)"
                : "1px solid #cecece"
            }
            key={index}
            cursor={"pointer"}
            onClick={() => setItemSelected(item)}
            transition={"all .3s ease"}
            _hover={{
              border: "1px solid rgb(72, 138, 253)",
            }}
          >
            <Image
              width={"100%"}
              height={"100%"}
              objectFit={"cover"}
              src={item.image}
              borderRadius={".4rem"}
            ></Image>
          </Center>
        ))}
      </Stack>
    </Stack>
  );
};

export default ColorDetail;
