import { Stack, Text } from "@chakra-ui/react";
import MenuCustom from "@components/menu-custom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface SortOption {
  label: string;
  field: "createdAt" | "price" | "sold";
  direction: "asc" | "desc";
}

const typeSort: SortOption[] = [
  {
    label: "Sort by created at: ascending",
    field: "createdAt",
    direction: "asc",
  },
  {
    label: "Sort by created at: descending",
    field: "createdAt",
    direction: "desc",
  },
  { label: "Sort by price: ascending", field: "price", direction: "asc" },
  { label: "Sort by price: descending", field: "price", direction: "desc" },
  { label: "Sort by sold: ascending", field: "sold", direction: "asc" },
  { label: "Sort by sold: descending", field: "sold", direction: "desc" },
];
const Header = () => {
  const navigator = useNavigate();
  const [selectedSort, setSelectedSort] = useState<string>("Default sorting");

  return (
    <Stack
      width={"100%"}
      direction={"row"}
      justifyContent={"space-between"}
      height={"fit-content"}
      alignItems={"center"}
    >
      <Stack
        width={"fit-content"}
        height={"fit-content"}
        gap={"1.6rem"}
        direction={"column"}
      >
        <Text
          fontSize={{ xl: "4.8rem", base: "3rem" }}
          color={"#FFF"}
          fontFamily={"tinos"}
          fontWeight={400}
        >
          All Watch Straps
        </Text>
        <Stack width={"fit-content"} gap={".8rem"} direction={"row"}>
          <Text
            fontSize={{ xl: "1.6rem", base: "1.2rem" }}
            color={"#FFF"}
            fontWeight={400}
            textTransform={"uppercase"}
            cursor={"pointer"}
            onClick={() => navigator("/")}
          >
            Home /
          </Text>
          <Text
            fontSize={{ xl: "1.6rem", base: "1.2rem" }}
            color={"#FFF"}
            fontWeight={400}
            textTransform={"uppercase"}
          >
            <strong>product</strong>
          </Text>
        </Stack>
      </Stack>
      <MenuCustom
        listMenu={typeSort.map((item) => item.label)}
        setSelectedItem={setSelectedSort}
        seletedItem={selectedSort}
        valueDefaul={"Default sorting"}
        sx={{
          w: "30rem",
        }}
      />
    </Stack>
  );
};

export default Header;
