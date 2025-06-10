import { Box, GridItem, Image, Stack, Text } from "@chakra-ui/react";

interface IContent {
  imageSrc: string;
  description: string;
  title: string;
}

const Content = ({ description, imageSrc, title }: IContent) => {
  return (
    <GridItem colSpan={6}>
      <Stack
        direction={"column"}
        gap={"2rem"}
        width={"100%"}
        height={"fit-content"}
      >
        <Image
          width={"100%"}
          height={"auto"}
          maxH={"40rem"}
          objectFit={"cover"}
          src={imageSrc}
        />
        <Text fontSize={"3.4rem"} fontWeight={"bold"}>
          {title}
        </Text>
        <Box
          dangerouslySetInnerHTML={{ __html: description || "" }}
          width={"100%"}
          fontSize={"1.8rem"}
          height={"fit-content"}
          color={"text.main"}
        />
      </Stack>
    </GridItem>
  );
};

export default Content;
