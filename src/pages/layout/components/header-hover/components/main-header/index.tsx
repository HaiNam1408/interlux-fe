import { IcArrowRight } from "@assets/svgs";
import { Box, Stack, Text } from "@chakra-ui/react";
import { useDarkModeContext } from "@hooks/useDarkModeContext";
import { IMenu, IMenuChild } from "@interfaces/IMenu.interface";
import { setCategorySelected } from "@redux/reducer/product.reducer";
import { setRememberSlug } from "@redux/reducer/productStoge.reducer";
import { Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
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
  const dispatch = useDispatch();
  const { isDarkMode } = useDarkModeContext();

  return (
    <Stack
      width={"32rem"}
      minW={"25rem"}
      height={"100%"}
      style={{
        background: !isDarkMode
          ? "linear-gradient(90deg, rgba(14, 14, 14, 0.5525) 30.71%, rgba(18, 18, 18, 0.3185) 100%), linear-gradient(0deg, #181818, #181818)"
          : "linear-gradient(90deg, rgba(240, 240, 240, 0.55) 30.71%, rgba(255, 255, 255, 0.32) 100%),linear-gradient(0deg, #f5f5f5, #f5f5f5)",
        padding: "96px 32px 48px",
        overflowY: "auto",
        overflowX: "hidden",
        transition: seletectedMenu.title ? "all .4s ease 0.3s" : "none",
        opacity: seletectedMenu.title ? 1 : 0,
      }}
    
    >
      <Text
        fontSize={"1.2rem"}
        color={"text.sub"}
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
            dispatch(setCategorySelected(""));
            dispatch(
              setRememberSlug({
                title: "All Furniture",
                slug: "all",
              })
            );
          }}
        >
          <Text
            fontSize={"1.6rem"}
            lineHeight={"2.4rem"}
            color={
              "All Furniture" === selectedChild.title ? "text.main" : "text.sub"
            }
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
              dispatch(setRememberSlug(item));
              dispatch(setCategorySelected(""));
            }}
          >
            <Text
              fontSize={"1.6rem"}
              lineHeight={"2.4rem"}
              maxW={"20rem"}
              color={
                item.title === selectedChild.title ? "text.main" : "text.sub"
              }
              fontWeight={600}
              transition={"all .2s ease"}
              textOverflow={"ellipsis"}
              whiteSpace={"nowrap"}
              overflow={"hidden"}
            >
              {item.title}
            </Text>
            {item.listChild && item.listChild?.length > 0 && (
              <IcArrowRight
                color={
                  item.title === selectedChild.title ? "text.main" : "text.sub"
                }
              />
            )}
          </Stack>
        ))}
      </Box>
    </Stack>
  );
};

export default MainHeader;
