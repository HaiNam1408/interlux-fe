import {
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { listFeature } from "@constants/listFakeData";
import { useState } from "react";

const FeatureProduct = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dataSelected, setDataSelected] = useState<
    | {
        ic: JSX.Element;
        title: string;
        sub: string;
        tolip: string;
        content?: string;
      }
    | undefined
  >();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay
          bg="rgba(0, 0, 0, 0.4)" // tối nền
          backdropFilter="blur(8px)" // hiệu ứng blur
        />
        <ModalContent
          bg="#1a1a1a"
          color="white"
          borderRadius="1rem"
          p="2rem"
          width={"100%"}
          maxWidth={"65rem"}
        >
          <ModalHeader
            fontFamily={"tinos"}
            fontSize={"3rem"}
            borderBottom={"1px solid #ccc"}
          >
            {dataSelected?.title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text
              fontSize={"1.4rem"}
              dangerouslySetInnerHTML={{ __html: dataSelected?.content || "" }}
            ></Text>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Grid
        templateColumns="repeat(2, 1fr)"
        columnGap={"2rem"}
        rowGap={"3rem"}
        py={"2rem"}
      >
        {listFeature.map((item, index) => (
          <GridItem
            key={index}
            colSpan={1}
            onClick={() => {
              if (item.content) {
                onOpen();
                setDataSelected(item);
              }
            }}
          >
            <Tooltip
              hasArrow
              label={item.tolip}
              fontSize={"1.4rem"}
              bg="#fff"
              color="#1a1a1a"
              placement="top"
              p={".4rem .8rem"}
              borderRadius={".8rem"}
              whiteSpace={"nowrap"}
              width={"fit-content"}
              maxW="none"
            >
              <Stack width={"100%"} direction={"row"} gap={"1rem"}>
                {item.ic}
                <Stack direction={"column"} gap={".4rem"} mt={".2rem"}>
                  <Text
                    _hover={{ color: "#339999" }}
                    fontSize={"1.4rem"}
                    cursor={item.content ? "pointer" : "auto"}
                    textUnderlineOffset="4px"
                    fontWeight={700}
                    style={{
                      textDecoration: "underline",
                      textDecorationStyle: "dashed",
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    fontSize={"1.4rem"}
                    dangerouslySetInnerHTML={{ __html: item.sub }}
                  ></Text>
                </Stack>
              </Stack>
            </Tooltip>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default FeatureProduct;
