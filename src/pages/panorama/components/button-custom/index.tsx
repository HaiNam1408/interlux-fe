import { Box, Stack } from "@chakra-ui/react";
import { JSX } from "react";

interface IButtonCustom {
  onClick?: () => void;
  icon: JSX.Element;
  size?: { xl: string; lg: string; sm: string; base: string };
  isSelected?: boolean;
}

const ButtonCustom = ({ icon, onClick, size, isSelected }: IButtonCustom) => {
  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      width={size}
      height={size}
      borderRadius={"50%"}
      style={{
        cursor: "pointer",
        position: "relative",
      }}
      onClick={onClick}
    >
      {/* Viền gradient mới */}
      <Box
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          padding: "5px",
          background:
            "linear-gradient(360deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)",
          WebkitMask:
            "linear-gradient(white, white) content-box, linear-gradient(white, white)",
          mask: "linear-gradient(white, white) content-box, linear-gradient(white, white)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          zIndex: 2,
        }}
      />
      <Box position={"relative"} zIndex={2}>
        {icon}
      </Box>
      {/* Backgroud */}
      <Box
        className="backgroud"
        borderRadius={"50%"}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: isSelected
            ? "linear-gradient(0deg, rgba(89, 100, 106, 0.4),rgba(89, 100, 106, 0.4)),radial-gradient(131% 131% at 50% 71%, rgba(159, 187, 155, 0.8) 0%, rgba(159, 187, 155, 0) 100%)"
            : "#59646A66",
          left: 0,
          top: ".4rem",
          transition: "all 1s ease",
          zIndex: 1,
        }}
      />
    </Stack>
  );
};

export default ButtonCustom;
