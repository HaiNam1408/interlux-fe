import { IcLogo } from "@assets/svgs";
import { Box, Center, Stack } from "@chakra-ui/react";
import { IoMdClose } from "react-icons/io";
import { Dispatch, SetStateAction } from "react";
import { IMenu } from "@interfaces/IMenu.interface";
import { useDarkModeContext } from "@hooks/useDarkModeContext";

interface IIcHeader {
  setSeletecedMenu: Dispatch<SetStateAction<IMenu>>;
  seletectedMenu: IMenu;
}

const IcHeader = ({ setSeletecedMenu, seletectedMenu }: IIcHeader) => {
  const { isDarkMode } = useDarkModeContext();

  return (
    <Stack
      direction={"column"}
      gap={"2.4rem"}
      width={"fit-content"}
      padding={"1.6rem"}
      bgColor={!isDarkMode ? "#181818" : "#f5f5f5"}
      height={"100%"}
      style={{
        transition: seletectedMenu.title ? "all .6s ease" : "none",
        transform: seletectedMenu.title ? "translateX(0)" : "translateX(-100%)",
      }}
      alignItems={"center"}
    >
      <IcLogo />
      <Center
        width={"4.2rem"}
        height={"4.2rem"}
        style={{
          border: "2px solid #303030",
          borderRadius: "50%",
          cursor: "pointer",
          position: "relative",
        }}
        onClick={() => setSeletecedMenu({ listMenu: [], title: "" })}
      >
        <Box
          position="absolute"
          inset={"-3px"}
          className="hover-group"
          zIndex={1}
        >
          <svg viewBox="0 0 24 24">
            <circle
              cx="12"
              cy="12"
              r="11"
              stroke="#da291c"
              strokeWidth="1"
              fill="none"
              className="circle-stroke"
            />
          </svg>
        </Box>
        <IoMdClose color={!isDarkMode ? "#fff" : "#000"} fontSize={"2rem"} />
      </Center>
    </Stack>
  );
};

export default IcHeader;
