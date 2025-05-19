import { getAllCategory } from "@apis/category.api";
import { IcLogo } from "@assets/svgs";
import { Box, Stack, Text } from "@chakra-ui/react";
import { ListMenu } from "@constants/listMenu.contants";
import { ICategory } from "@interfaces/ICategory.interface";
import { IMenu, IMenuChild } from "@interfaces/IMenu.interface";
import { SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface ILeftHeader {
  setSeletecedMenu: React.Dispatch<SetStateAction<IMenu>>;
}

const LeftHeader = ({ setSeletecedMenu }: ILeftHeader) => {
  const navigator = useNavigate();
  const [listMenuApi, setListMenuApi] = useState<IMenu[]>([]);

  useEffect(() => {
    getAllCategory()
      .then((res) => {
        const categoryMenu: IMenuChild[] = res.data.data.map(
          (item: ICategory) => ({
            title: item.name,
            slug: item.slug,
            listChild: item.children.map((i) => ({
              title: i.name,
              slug: i.slug,
            })),
          })
        );
        const updatedMenu = ListMenu.map((menuItem) => {
          if (menuItem.title === "Category") {
            return {
              ...menuItem,
              listMenu: categoryMenu,
            };
          }
          return menuItem;
        });

        setListMenuApi(updatedMenu);
      })
      .catch(() => setListMenuApi(ListMenu));
  }, []);

  return (
    <Stack
      width={"100%"}
      height={"100%"}
      direction={"row"}
      gap={"4rem"}
      alignItems={"center"}
    >
      <Box width={"3.6rem"} height={"fit-content"}>
        <IcLogo />
      </Box>
      <Stack direction={"row"} gap={"2rem"}>
        {listMenuApi.map((item, index) => (
          <Text
            px={"1.2rem"}
            cursor={"pointer"}
            textTransform={"uppercase"}
            key={index}
            fontSize={"1.4rem"}
            fontWeight={600}
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              if (item.slug) {
                navigator(item.slug);
              } else {
                setSeletecedMenu(item);
              }
            }}
          >
            {item.title}
          </Text>
        ))}
      </Stack>
    </Stack>
  );
};

export default LeftHeader;
