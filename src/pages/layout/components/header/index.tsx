import { Stack } from "@chakra-ui/react";
import LeftHeader from "./components/left-header";
import RightHeader from "./components/right-header";
import useScrollDirection from "@hooks/useScrollDirection";
import { SetStateAction } from "react";
import { IMenu } from "@interfaces/IMenu.interface";

interface IHeader {
  setSeletecedMenu: React.Dispatch<SetStateAction<IMenu>>;
}

const Header = ({ setSeletecedMenu }: IHeader) => {
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
      bg={!isAtTop ? "black" : "transparent"}
      px={{ xl: "4rem", lg: "2rem", base: "1rem" }}
      transition="transform 0.5s ease"
      transform={direction === "down" ? "translateY(-100%)" : "translateY(0)"}
      zIndex={100}
    >
      <LeftHeader setSeletecedMenu={setSeletecedMenu} />
      <RightHeader />
    </Stack>
  );
};

export default Header;
