import { Stack } from "@chakra-ui/react";
import IcHeader from "./components/ic-header";
import MainHeader from "./components/main-header";
import SubHeader from "./components/sub-header";
import ImgHeader from "./components/img-header";
import { IMenu, IMenuChild } from "@interfaces/IMenu.interface";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface IHeaderHover {
  seletectedMenu: IMenu;
  setSeletecedMenu: Dispatch<SetStateAction<IMenu>>;
}

const HeaderHover = ({ seletectedMenu, setSeletecedMenu }: IHeaderHover) => {
  const [selectedChild, setSelectedChild] = useState<IMenuChild>({
    title: "",
    listChild: [],
  });

  useEffect(() => {
    const { listMenu } = seletectedMenu || {};
    if (!listMenu?.length) return;

    const firstChild = listMenu[0];
    setSelectedChild(firstChild);
  }, [seletectedMenu.title]);

  return (
    <Stack
      direction={"row"}
      gap={0}
      width={"100%"}
      height={"100dvh"}
      zIndex={200}
      position={"fixed"}
      inset={0}
      style={{
        transition: "all .3s ease",
        visibility: seletectedMenu.title ? "visible" : "hidden",
      }}
    >
      <IcHeader
        setSeletecedMenu={setSeletecedMenu}
        seletectedMenu={seletectedMenu}
      />
      <MainHeader
        seletectedMenu={seletectedMenu}
        setSelectedChild={setSelectedChild}
        selectedChild={selectedChild}
        setSeletecedMenu={setSeletecedMenu}
      />
      <SubHeader
        seletectedMenu={seletectedMenu}
        setSelectedChild={setSelectedChild}
        selectedChild={selectedChild}
      />
      <ImgHeader
        selectedChild={selectedChild}
        seletectedMenu={seletectedMenu}
      />
    </Stack>
  );
};

export default HeaderHover;
