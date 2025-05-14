import { Center, Stack, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

interface ISelectedCustom {
  setValue: Dispatch<SetStateAction<string>>;
  value: string;
  listValue: string[];
  title: string;
}

const SelectedCustom = ({ ...props }: ISelectedCustom) => {
  return (
    <Stack gap={"1.2rem"} direction={"column"}>
      <Text fontSize={"1.6rem"} color={"#fff"}>
        <strong>{props.title}:</strong> {props.value}
      </Text>
      <Stack direction={"row"} gap={"1rem"} width={"100%"} flexWrap={"wrap"}>
        {props.listValue.map((item, index) => (
          <Center
            width={"fit-content"}
            height={"fit-content"}
            p={"8px"}
            borderRadius={".2rem"}
            bg={item === props.value ? "#fff" : "#1a1a1a"}
            border={item === props.value ? "1px solid #999" : "1px solid #333"}
            key={index}
            cursor={"pointer"}
            transition={"all .3s ease"}
            onClick={() => props.setValue(item)}
            _hover={{
              bg: "#2a2a2a",
              border: "1px solid #666",
            }}
          >
            <Text fontSize={"1.4rem"} lineHeight={"100%"} color={item === props.value ? "#000" : "#fff"}>
              {item}
            </Text>
          </Center>
        ))}
      </Stack>
    </Stack>
  );
};

export default SelectedCustom;
