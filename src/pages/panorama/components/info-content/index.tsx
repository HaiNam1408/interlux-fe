import topic from "@assets/images/info.png";
import { Box, Image, Stack, Text } from "@chakra-ui/react";

interface IInfoContent {
  title: string;
  isShow: boolean;
}

const InfoContent = ({ title, isShow }: IInfoContent) => {
  return (
    <Stack
      direction={"column"}
      gap={".8rem"}
      position={"absolute"}
      left={"50%"}
      top={isShow ? "2rem" : "-2rem"}
      width={"fit-content"}
      alignItems={"center"}
      style={{
        transition: "all .8s ease-in-out",
        transform: "translateX(-50%)",
        opacity: isShow ? 1 : 0,
        pointerEvents: "none",
      }}
    >
      <Box
        width={{
          xl: "32rem",
          lg: "30rem",
          md: "28rem",
          sm: "26rem",
          base: "24rem",
        }}
      >
        <Image
          width={"100%"}
          height={"auto"}
          style={{ objectFit: "contain" }}
          src={topic}
        ></Image>
      </Box>
      <Text
        fontSize={"2rem"}
        color="#F5F4F2"
        fontWeight={700}
        textTransform={"uppercase"}
        mr={"2rem"}
      >
        {title}
      </Text>
    </Stack>
  );
};

export default InfoContent;
