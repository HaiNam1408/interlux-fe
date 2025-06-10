import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { motion } from "framer-motion";
import { Box, Stack, Text } from "@chakra-ui/react";
const MotionBox = motion(Box);

interface IAddress {
  title: string;
  onClick?: () => void;
}

const Address = ({ title, onClick }: IAddress) => {
  return (
    <Stack
      direction={"column"}
      gap={".4rem"}
      width={"fit-content"}
      height={"fit-content"}
      style={{ cursor: "pointer" }}
      alignItems={"center"}
      onClick={onClick}
      onTouchStart={onClick}
      id="custom-marker-element"
    >
      <Box p={".6rem 1.2rem"} borderRadius={".8rem"} bgColor={"#00000050"}>
        <Text
          color="#fff"
          fontSize={"1.8rem"}
          whiteSpace={"nowrap"}
          fontWeight={600}
        >
          {title}
        </Text>
      </Box>
      <MotionBox
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        display="inline-block"
      >
        <MdKeyboardDoubleArrowDown fontSize={"4.6rem"} color="#fff" />
      </MotionBox>
    </Stack>
  );
};

export default Address;
