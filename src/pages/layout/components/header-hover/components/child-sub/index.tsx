import { IcArrowDown } from "@assets/svgs";
import { Box, Stack, Text } from "@chakra-ui/react";
import { IMenuChild } from "@interfaces/IMenu.interface";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

interface IChildSub {
  hoverId: string;
  selected: IMenuChild;
  setHoverId: Dispatch<SetStateAction<string>>;
  setSeleted: Dispatch<SetStateAction<IMenuChild>>;
  item: IMenuChild;
  index: number;
}

const ChildSub = ({
  hoverId,
  selected,
  setHoverId,
  setSeleted,
  item,
  index,
}: IChildSub) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("4rem");
  const isOpen = selected.title === item.title;

  useEffect(() => {
    if (isOpen && contentRef.current) {
      const scrollHeight = contentRef.current.scrollHeight;
      setHeight(`${scrollHeight}px`);
    } else {
      setHeight("4rem");
    }
  }, [isOpen]);
  return (
    <Stack
      ref={contentRef}
      direction={"column"}
      width={"100%"}
      gap={"0"}
      height={height}
      onClick={() => {
        if (selected.title === item.title) {
          setSeleted({ title: "" });
        } else {
          setSeleted(item);
        }
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
        {item.listChild && (
          <Box
            transition={"all .3s ease"}
            transform={
              selected.title === item.title ? "scaleY(-1)" : "scaleY(1)"
            }
          >
            <IcArrowDown
              color={
                hoverId === item.title || hoverId === "" ? "#fff" : "#969696"
              }
            />
          </Box>
        )}
      </Stack>
      {item.listChild && item.title === selected.title && (
        <Stack
          direction={"column"}
          cursor={"pointer"}
          width={"100%"}
          key={index}
          pl={"2.4rem"}
          my={"1.6rem"}
          height={"fit-content"}
        >
          {(selected.listChild || []).map((child, i) => (
            <Text
              fontSize={"1.6rem"}
              lineHeight={"2.4rem"}
              color={
                hoverId === child.title || hoverId === "" ? "#fff" : "#969696"
              }
              fontWeight={600}
              transition={"all .2s ease"}
              key={i}
              py={".8rem"}
              onMouseEnter={() => setHoverId(child.title)}
              onMouseLeave={() => setHoverId("")}
            >
              {child.title}
            </Text>
          ))}
        </Stack>
      )}
    </Stack>
  );
};

export default ChildSub;
