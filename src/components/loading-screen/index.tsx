import { Box, Center } from "@chakra-ui/react";
import "./styles.css";
import { IcLogo } from "@assets/svgs";

interface ILoadingScreen {
  isLoading: boolean;
}

const LoadingScreen = ({ isLoading }: ILoadingScreen) => {
  return (
    <Center
      position={"fixed"}
      width={"100dvw"}
      h={"100dvh"}
      bgColor={"#000"}
      zIndex={1000000000000}
      bottom={0}
      flexDir={"column"}
      gap={"4rem"}
      mt={"-8rem"}
      style={{
        transition: "all .3s ease",
        opacity: isLoading ? 100 : 0,
        visibility: isLoading ? "visible" : "hidden",
        pointerEvents: "none",
      }}
    >
      <Box className="logo-loading">
        <IcLogo width="14rem" height="14rem" />
      </Box>
    </Center>
  );
};

export default LoadingScreen;
