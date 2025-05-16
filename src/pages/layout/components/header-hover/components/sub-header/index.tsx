import { Box, Stack, Text } from "@chakra-ui/react";
import { IMenu, IMenuChild } from "@interfaces/IMenu.interface";
import { Dispatch, SetStateAction, useState } from "react";
import ChildSub from "../child-sub";

interface ISubHeader {
  seletectedMenu: IMenu;
  setSelectedChild: Dispatch<SetStateAction<IMenuChild>>;
  selectedChild: IMenuChild;
}

const SubHeader = ({ selectedChild, seletectedMenu }: ISubHeader) => {
  const [hoverId, setHoverId] = useState<string>("");
  const [selected, setSeleted] = useState<IMenuChild>({
    title: "",
  });

  return (
    <Stack
      width={"35rem"}
      minW="25rem"
      height={"100%"}
      style={{
        background: "#181818",
        padding: "96px 32px 48px",
        overflow: "hidden",
        transition: seletectedMenu.title ? "all .4s ease 0.5s" : "none",
        opacity: seletectedMenu.title ? 1 : 0,
      }}
    >
      <Text
        fontSize={"1.2rem"}
        color={"#969696"}
        textTransform={"uppercase"}
        mb={"2.4rem"}
        fontWeight={600}
        visibility={"hidden"}
      >
        {seletectedMenu.title}
      </Text>
      <Box
        width={"100%"}
        height={"fit-content"}
        style={{
          transition: "all .6s ease-out 0.5s",
          opacity: seletectedMenu.title ? 1 : 0,
          transform: seletectedMenu.title
            ? "translateY(0)"
            : "translateY(2rem)",
        }}
      >
        {(selectedChild.listChild || []).map((item, index) => (
          <ChildSub
            index={index}
            hoverId={hoverId}
            item={item}
            selected={selected}
            setHoverId={setHoverId}
            setSeleted={setSeleted}
            key={index}
          />
        ))}
      </Box>
    </Stack>
  );
};

export default SubHeader;
