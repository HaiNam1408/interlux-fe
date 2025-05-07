import { Box, Center, Stack, Text } from "@chakra-ui/react";
import videoLuxury from "@assets/videos/bgLuxury.mp4";
import SplitText from "@components/split-text";
import ButtonCustom from "@components/button-custom";
import RotatingText from "@components/rotating-text";

const Luxury = () => {
  return (
    <Box
      width="100%"
      height="100dvh"
      overflow="hidden"
      position="relative"
      minH={"100dvh"}
    >
      <video
        src={videoLuxury}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <Center
        width={"100%"}
        height={"fit-content"}
        position={"absolute"}
        left={0}
        top={"10%"}
        zIndex={1}
        flexDirection={"column"}
      >
        <SplitText
          text="LUXYRY LIVING"
          className="text-[5.6rem] font-semibold text-center text-[#fff] text-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
          delay={150}
          animationFrom={{
            opacity: 0,
            transform: "translate3d(0,50px,0)",
          }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          threshold={0.2}
          rootMargin="-50px"
        />

        <Stack direction={"row"} alignItems={"center"} gap={"1.2rem"}>
          <Text className="text-[2.4rem] font-semibold text-[#fff] text-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
            Modern
          </Text>
          <RotatingText
            texts={["Simplicity", "Luxury", "Ambience", "Comfort"]}
            mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-[2.4rem] font-semibold"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </Stack>
      </Center>
      <Center
        width={"100%"}
        position={"absolute"}
        left={0}
        bottom={"8%"}
        zIndex={1}
      >
        <ButtonCustom title="Explore" />
      </Center>
    </Box>
  );
};

export default Luxury;
