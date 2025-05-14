import { Center, Grid, GridItem, Image, Stack, Text } from "@chakra-ui/react";

interface IBoxLeright {
  image: string;
  title: string;
  content: string;
  isLeft?: boolean;
}

const BoxLeright = ({ image, title, content, isLeft = false }: IBoxLeright) => {
  return (
    <Grid
      width="100%"
      height="fit-content"
      maxH="65rem"
      templateColumns="repeat(2, 1fr)"
    >
      {isLeft ? (
        <>
          <GridItem>
            <Center width="100%" height="100%">
              <Stack width="100%" maxW="45rem" direction="column" gap="1.2rem">
                <Text fontSize="3.4rem" fontWeight={700} fontFamily="tinos">
                  {title}
                </Text>
                <Text
                  fontSize="1.8rem"
                  fontWeight={400}
                  dangerouslySetInnerHTML={{ __html: content }}
                ></Text>
              </Stack>
            </Center>
          </GridItem>
          <GridItem>
            <Image width="100%" height="100%" maxH="65rem" objectFit="cover" src={image} />
          </GridItem>
        </>
      ) : (
        <>
          <GridItem>
            <Image width="100%" height="100%" maxH="65rem" objectFit="cover" src={image} />
          </GridItem>
          <GridItem>
            <Center width="100%" height="100%">
              <Stack width="100%" maxW="45rem" direction="column" gap="1.2rem">
                <Text fontSize="3.4rem" fontWeight={700} fontFamily="tinos">
                  {title}
                </Text>
                <Text
                  fontSize="1.8rem"
                  fontWeight={400}
                  dangerouslySetInnerHTML={{ __html: content }}
                ></Text>
              </Stack>
            </Center>
          </GridItem>
        </>
      )}
    </Grid>
  );
};

export default BoxLeright;
