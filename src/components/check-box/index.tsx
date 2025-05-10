import { Center, Stack, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";

interface ICheckBox {
  checked: boolean;
  label: string;
  size?: string;
  sizeIc?: string;
  bgColor?: string;
  setIsRemember: Dispatch<SetStateAction<boolean>>
}

const CheckBox = ({ checked, label, bgColor="#fff", size ="2rem", sizeIc="1.2rem",setIsRemember }: ICheckBox) => {
  const [isCheck, setIsCheck] = useState<boolean>(checked);

  useEffect(() => {
    setIsRemember(isCheck)
  }, [isCheck])

  return (
    <Stack direction={"row"} gap={"1.2rem"} alignItems={"center"} cursor={"pointer"} onClick={() => setIsCheck(!isCheck)}>
      <Center
        width={size}
        height={size}
        bgColor={isCheck ? bgColor : "transparent"}
        borderRadius={".4rem"}
        border={`2px solid ${bgColor}`}
      >
        {isCheck && <FaCheck fontSize={sizeIc} color="#000" />}
      </Center>
      <Text fontSize={"1.4rem"} fontWeight={500}>
        {label}
      </Text>
    </Stack>
  );
};

export default CheckBox;
