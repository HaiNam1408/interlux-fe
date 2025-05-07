import { IcLogo } from "@assets/svgs";
import { Box, Stack, Text } from "@chakra-ui/react";
import { ListMenu } from "@constants/listMenu.contants";
import { IMenu } from "@interfaces/IMenu.interface";
import { SetStateAction } from "react";

interface ILeftHeader {
  setSeletecedMenu: React.Dispatch<SetStateAction<IMenu>>;
}

const LeftHeader = ({ setSeletecedMenu }: ILeftHeader) => {
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
        {ListMenu.map((item, index) => (
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
            onClick={() => setSeletecedMenu(item)}
          >
            {item.title}
          </Text>
        ))}
      </Stack>
    </Stack>
  );
};

export default LeftHeader;
