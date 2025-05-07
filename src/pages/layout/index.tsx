import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./components/header";
import HeaderHover from "./components/header-hover";
import { useState } from "react";
import { IMenu } from "@interfaces/IMenu.interface";
import Footer from "./components/footer";

const Layout = () => {
  const [seletectedMenu, setSeletecedMenu] = useState<IMenu>({
    listMenu: [],
    title: "",
  });

  return (
    <Box
      width={"100dvw"}
      height={"100%"}
      position={"relative"}
      bgColor={"black"}
    >
      <HeaderHover
        seletectedMenu={seletectedMenu}
        setSeletecedMenu={setSeletecedMenu}
      />
      <Header setSeletecedMenu={setSeletecedMenu} />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Layout;
