import { Center, Stack, Text } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";

interface ICheckBox {
  checked: boolean;
  label: string;
  size?: string;
  sizeIc?: string;
  bgColor?: string;
  onChange: (checked: boolean) => void;
}

const CheckBox = ({
  checked,
  label,
  bgColor = "#fff",
  size = "2rem",
  sizeIc = "1.2rem",
  onChange,
}: ICheckBox) => {
  return (
    <Stack
      direction="row"
      gap="1.2rem"
      alignItems="center"
      cursor="pointer"
      onClick={() => onChange(!checked)}
    >
      <Center
        width={size}
        height={size}
        bgColor={checked ? bgColor : "transparent"}
        borderRadius=".4rem"
        border={`2px solid ${bgColor}`}
      >
        {checked && <FaCheck fontSize={sizeIc} color="#000" />}
      </Center>
      <Text fontSize="1.4rem" fontWeight={500}>
        {label}
      </Text>
    </Stack>
  );
};

export default CheckBox;
