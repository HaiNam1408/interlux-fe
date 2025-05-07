import { IcArrowRight } from "@assets/svgs";
import { Box, Center, Text } from "@chakra-ui/react";

const ButtonDis = () => {
  return (
    <Center
      flexDirection={"row"}
      width={"100%"}
      height={"fit-content"}
      alignItems={"center"}
      gap={"1.2rem"}
      position={"absolute"}
      bottom={"12%"}
      left={0}
      zIndex={10}
    >
      <Text
        color={"#fff"}
        fontSize={"1.8rem"}
        textTransform={"uppercase"}
        fontWeight={500}
      >
        Discover
      </Text>
      <Center
        width={"4.2rem"}
        height={"4.2rem"}
        style={{
          border: "4px solid #303030",
          borderRadius: "50%",
          cursor: "pointer",
          position: "relative",
        }}
        onClick={() =>
          window.open("https://vista-pano.vercel.app/type-a/#Kitchen")
        }
      >
        <Box
          position="absolute"
          inset={"-5px"}
          className="hover-group"
          zIndex={1}
        >
          <svg viewBox="0 0 24 24">
            <circle
              cx="12"
              cy="12"
              r="11"
              stroke="#da291c"
              strokeWidth="2"
              fill="none"
              className="circle-stroke"
            />
          </svg>
        </Box>
        <IcArrowRight />
      </Center>
    </Center>
  );
};

export default ButtonDis;
