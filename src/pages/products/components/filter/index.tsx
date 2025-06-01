import { Stack, Text } from "@chakra-ui/react";
import { FaFilter } from "react-icons/fa";
import FilterContent from "./components/filter-content";
import { useDarkModeContext } from "@hooks/useDarkModeContext";

const Filter = () => {
  const { isDarkMode } = useDarkModeContext();

  return (
    <Stack direction={"column"} gap={"2rem"} width={"100%"}>
      <Stack
        gap={"1.2rem"}
        alignItems={"center"}
        width={"100%"}
        direction={"row"}
      >
        <FaFilter fontSize={"2rem"} color={!isDarkMode ? "#fff" : "#000"} />
        <Text
          fontSize={{ xl: "1.6rem", base: "1.2rem" }}
          fontWeight={400}
          cursor={"pointer"}
        >
          Filter products Showing 1 - 24 of 957 results
        </Text>
      </Stack>
      <FilterContent />
    </Stack>
  );
};

export default Filter;
