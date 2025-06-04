import { Center, Stack, Text } from "@chakra-ui/react";
import { useDarkModeContext } from "@hooks/useDarkModeContext";
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
  size = "2rem",
  sizeIc = "1.2rem",
  onChange,
}: ICheckBox) => {
  const { isDarkMode } = useDarkModeContext();

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
        bgColor={checked ? (isDarkMode ? "#000" : "#fff") : "transparent"}
        borderRadius=".4rem"
        border={`2px solid ${isDarkMode ? "#000" : "#fff"}`}
      >
        {checked && (
          <FaCheck fontSize={sizeIc} color={!isDarkMode ? "#000" : "#fff"} />
        )}
      </Center>
      <Text fontSize="1.4rem" fontWeight={500}>
        {label}
      </Text>
    </Stack>
  );
};

export default CheckBox;
