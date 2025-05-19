import { Stack, Text } from "@chakra-ui/react";
import { IMenu, IMenuChild } from "@interfaces/IMenu.interface";
import { setRememberSlug } from "@redux/reducer/productStoge.reducer";
import { Dispatch, SetStateAction, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

interface IChildSub {
  hoverId: string;
  setHoverId: Dispatch<SetStateAction<string>>;
  item: IMenuChild;
  setSeletecedMenu: Dispatch<SetStateAction<IMenu>>;
  selectedChild: IMenuChild;
}

const ChildSub = ({
  hoverId,
  setHoverId,
  item,
  setSeletecedMenu,
  selectedChild,
}: IChildSub) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const navigator = useNavigate();

  return (
    <Stack
      ref={contentRef}
      direction={"column"}
      width={"100%"}
      gap={"0"}
      height={"4rem"}
      onClick={() => {
        setSeletecedMenu({ listMenu: [], title: "" });
        navigator(`shop/${item.slug}`);
        dispatch(setRememberSlug(selectedChild));
      }}
      overflow={"hidden"}
      transition={"all .5s ease"}
    >
      <Stack
        direction={"row"}
        gap={"1.6rem"}
        py={".8rem"}
        cursor={"pointer"}
        width={"100%"}
        alignItems={"center"}
        onMouseEnter={() => setHoverId(item.title)}
        onMouseLeave={() => setHoverId("")}
      >
        <Text
          fontSize={"1.6rem"}
          lineHeight={"2.4rem"}
          color={hoverId === item.title || hoverId === "" ? "#fff" : "#969696"}
          fontWeight={600}
          transition={"all .2s ease"}
          whiteSpace={"nowrap"}
        >
          {item.title}
        </Text>
      </Stack>
    </Stack>
  );
};

export default ChildSub;
