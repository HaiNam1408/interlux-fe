import { IcArrowRight } from "@assets/svgs";
import { Box, Stack, Text } from "@chakra-ui/react";
import { IMenu, IMenuChild } from "@interfaces/IMenu.interface";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

interface IMainHeader {
  seletectedMenu: IMenu;
  setSelectedChild: Dispatch<SetStateAction<IMenuChild>>;
  selectedChild: IMenuChild;
  setSeletecedMenu: Dispatch<SetStateAction<IMenu>>;
}

const MainHeader = ({
  seletectedMenu,
  selectedChild,
  setSelectedChild,
  setSeletecedMenu,
}: IMainHeader) => {
  const navigator = useNavigate();
  return (
    <Stack
      width={"32rem"}
      minW={"25rem"}
      height={"100%"}
      style={{
        background:
          "linear-gradient(90deg, rgba(14, 14, 14, 0.5525) 30.71%, rgba(18, 18, 18, 0.3185) 100%), linear-gradient(0deg, #181818, #181818)",
        padding: "96px 32px 48px",
        overflow: "hidden",
        transition: seletectedMenu.title ? "all .4s ease 0.3s" : "none",
        opacity: seletectedMenu.title ? 1 : 0,
      }}
    >
      <Text
        fontSize={"1.2rem"}
        color={"#969696"}
        textTransform={"uppercase"}
        mb={"2.4rem"}
        fontWeight={600}
        style={{
          transition: "all .6s ease-out 0.3s",
          opacity: seletectedMenu.title ? 1 : 0,
          transform: seletectedMenu.title
            ? "translateY(0)"
            : "translateY(2rem)",
        }}
      >
        {seletectedMenu.title}
      </Text>
      <Box
        width={"100%"}
        height={"fit-content"}
        style={{
          transition: "all .6s ease-out 0.3s",
          opacity: seletectedMenu.title ? 1 : 0,
          transform: seletectedMenu.title
            ? "translateY(0)"
            : "translateY(2rem)",
        }}
      >
        <Stack
          direction={"row"}
          gap={"0"}
          py={".8rem"}
          cursor={"pointer"}
          width={"100%"}
          justifyContent={"space-between"}
          onMouseEnter={() =>
            setSelectedChild({
              title: "All",
            })
          }
          onClick={() => {
            setSeletecedMenu({ listMenu: [], title: "" });
            navigator(`shop/all`);
          }}
        >
          <Text
            fontSize={"1.6rem"}
            lineHeight={"2.4rem"}
            color={"All Furniture" === selectedChild.title ? "#fff" : "#969696"}
            fontWeight={600}
            transition={"all .2s ease"}
          >
            All Furniture
          </Text>
        </Stack>
        {(seletectedMenu.listMenu || []).map((item, index) => (
          <Stack
            direction={"row"}
            gap={"0"}
            py={".8rem"}
            cursor={"pointer"}
            width={"100%"}
            justifyContent={"space-between"}
            key={index}
            onMouseEnter={() => setSelectedChild(item)}
            onClick={() => {
              setSeletecedMenu({ listMenu: [], title: "" });
              navigator(`shop/${item.slug}`);
            }}
          >
            <Text
              fontSize={"1.6rem"}
              lineHeight={"2.4rem"}
              color={item.title === selectedChild.title ? "#fff" : "#969696"}
              fontWeight={600}
              transition={"all .2s ease"}
            >
              {item.title}
            </Text>
            {item.listChild && item.listChild?.length > 0 && (
              <IcArrowRight
                color={item.title === selectedChild.title ? "#fff" : "#969696"}
              />
            )}
          </Stack>
        ))}
      </Box>
    </Stack>
  );
};

export default MainHeader;
