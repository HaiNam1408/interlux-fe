import { Image, Stack, Text } from "@chakra-ui/react";

interface ICardBlog {
  imgCard: string;
  title: string;
  sub: string;
}

const CardBlog = ({ imgCard, sub, title }: ICardBlog) => {
  return (
    <Stack
      direction={"column"}
      gap={"0"}
      width={"100%"}
      bgColor={"#22191A"}
      position={"relative"}
    >
      <Image
        width={"100%"}
        height={"70%"}
        maxH={"35rem"}
        objectFit={"cover"}
        src={imgCard}
      ></Image>
      <Stack direction={"column"} gap={".8rem"} p={"2rem"}>
        <Text fontSize={"1.8rem"} color={"#fff"} fontWeight={600}>
          {title}
        </Text>
        <Text fontSize={"1.2rem"} color={"#fff"} fontWeight={500}>
          {sub}
        </Text>
        <Text
          fontSize={"1.2rem"}
          color={"#7E2B38"}
          fontWeight={500}
          width={"fit-content"}
          cursor={"pointer"}
          position={"relative"}
          mt={"1rem"}
          sx={{
            _after: {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              width: 0,
              height: "1px",
              backgroundColor: "#7E2B38",
              transition: "all .3s ease",
            },
          }}
          _hover={{
            _after: {
              width: "100%",
            },
          }}
        >
          {"View Details >"}
        </Text>
      </Stack>
    </Stack>
  );
};

export default CardBlog;
