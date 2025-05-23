import { Box, Stack, Text } from "@chakra-ui/react";
import { IMenu, IMenuChild } from "@interfaces/IMenu.interface";
import { Dispatch, SetStateAction, useState } from "react";
import ChildSub from "../child-sub";

interface ISubHeader {
  seletectedMenu: IMenu;
  selectedChild: IMenuChild;
  setSeletecedMenu: Dispatch<SetStateAction<IMenu>>;
}

const SubHeader = ({
  selectedChild,
  seletectedMenu,
  setSeletecedMenu,
}: ISubHeader) => {
  const [hoverId, setHoverId] = useState<string>("");

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
            hoverId={hoverId}
            item={item}
            setHoverId={setHoverId}
            key={index}
            selectedChild={selectedChild}
            setSeletecedMenu={setSeletecedMenu}
          />
        ))}
      </Box>
    </Stack>
  );
};

export default SubHeader;
