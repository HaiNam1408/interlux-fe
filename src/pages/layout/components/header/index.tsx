import { Stack } from "@chakra-ui/react";
import LeftHeader from "./components/left-header";
import RightHeader from "./components/right-header";
import useScrollDirection from "@hooks/useScrollDirection";
import { Dispatch, SetStateAction } from "react";
import { IMenu } from "@interfaces/IMenu.interface";

interface IHeader {
  setSeletecedMenu: Dispatch<SetStateAction<IMenu>>;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

const Header = ({ setSeletecedMenu, setIsLogin }: IHeader) => {
  const { direction, isAtTop } = useScrollDirection();

  return (
    <Stack
      position={"sticky"}
      top={0}
      left={0}
      width={"100%"}
      height={"9rem"}
      direction={"row"}
      justifyContent={"space-between"}
      bg={"bg.main"}
      px={{ xl: "4rem", lg: "2rem", base: "1rem" }}
      transition="transform 0.5s ease"
      transform={direction === "down" ? "translateY(-100%)" : "translateY(0)"}
      zIndex={9}
      boxShadow={!isAtTop ? "rgba(0, 0, 0, 0.24) 0px 3px 8px" : "none"}
    >
      <LeftHeader setSeletecedMenu={setSeletecedMenu} />
      <RightHeader setIsLogin={setIsLogin}/>
    </Stack>
  );
};

export default Header;
