import { IcArrowRight } from "@assets/svgs";
import { Box, Center, Image, Stack, Text } from "@chakra-ui/react";

interface ICardCatogorise {
  imgCard: string;
  categorie: string;
  title: string;
}

const CardCatogories = ({ categorie, imgCard, title }: ICardCatogorise) => {
  return (
    <Stack
      width={"100%"}
      height={"100%"}
      position={"relative"}
      direction={"column"}
      alignItems={"center"}
      gap={"1.6rem"}
      justifyContent={"flex-end"}
      padding={{ xl: "4.8rem", base: "3.2rem" }}
      cursor={"pointer"}
    >
      <Image
        position={"absolute"}
        inset={0}
        width={"100%"}
        height={"100%"}
        objectFit={"cover"}
        src={imgCard}
        loading="lazy"
        zIndex={0}
      ></Image>
      <Text fontSize={"1.6rem"} color={"#fff"} fontWeight={500} zIndex={1}>
        {categorie}
      </Text>
      <Text
        fontSize={"3.6em"}
        color={"#fff"}
        fontWeight={600}
        textTransform={"uppercase"}
        zIndex={1}
        textAlign={"center"}
        maxW={"64rem"}
        lineHeight={"100%"}
      >
        {title}
      </Text>
      <Stack direction={"row"} gap={"1.2rem"} alignItems={"center"} zIndex={1}>
        <Text
          color={"#fff"}
          fontSize={"1.2rem"}
          textTransform={"uppercase"}
          fontWeight={500}
        >
          Discover
        </Text>
        <Center
          width={"3.2rem"}
          height={"3.2rem"}
          style={{
            border: "3px solid #303030",
            borderRadius: "50%",
            cursor: "pointer",
            position: "relative",
          }}
        >
          <Box
            position="absolute"
            inset={"-3px"}
            className="hover-group"
            zIndex={1}
          >
            <svg viewBox="0 0 24 24">
              <circle
                cx="12"
                cy="12"
                r="11"
                stroke="#da291c"
                strokeWidth="3"
                fill="none"
                className="circle-stroke"
              />
            </svg>
          </Box>
          <IcArrowRight />
        </Center>
      </Stack>
    </Stack>
  );
};

export default CardCatogories;
