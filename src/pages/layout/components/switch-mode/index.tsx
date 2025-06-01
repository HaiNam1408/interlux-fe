import { Box, Image } from "@chakra-ui/react";
import { useDarkModeContext } from "@hooks/useDarkModeContext";
import sun from "@assets/images/light.png";
import moon from "@assets/images/light1.png";

const SwitchMode = () => {
  const { isDarkMode, setIsDarkMode } = useDarkModeContext();
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Box
      bg={isDarkMode ? "#F5712A" : "#5f5f5f"}
      w="30px"
      h="20px"
      borderRadius="2rem"
      position="relative"
      onClick={toggleDarkMode}
      cursor="pointer"
      mr={"2rem"}
    >
      <Image
        src={isDarkMode ? sun : moon}
        width="30px"
        height="30px"
        position="absolute"
        top="50%"
        left="50%"
        transform={`translate(${isDarkMode ? "10%" : "-100%"}, -50%)`}
        transition="transform 0.5s ease"
        onClick={toggleDarkMode}
      />
    </Box>
  );
};

export default SwitchMode;
