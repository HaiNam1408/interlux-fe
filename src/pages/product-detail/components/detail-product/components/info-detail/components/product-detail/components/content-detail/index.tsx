import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Grid,
  GridItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa6";

interface IContentDetail {
  data: {
    color: string;
    material: string;
    size: string;
    addOns: string[];
    description: string;
  };
}

const ContentDetail = ({ data }: IContentDetail) => {
  return (
    <Stack
      direction={"column"}
      gap={0}
      width={"100%"}
      borderTop={"1px solid #ccc"}
      mt={"2rem"}
    >
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <AccordionIcon fontSize={"3rem"} color={"#fff"} />
              <Text
                fontSize={"2rem"}
                fontWeight={600}
                fontFamily={"tinos"}
                textTransform={"uppercase"}
              >
                Product Detail
              </Text>
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            fontSize={"1.4rem"}
            color={"#fff"}
            px={"4rem"}
            fontStyle={"italic"}
          >
            Black Shark Leather Watch Strap <strong>100% handmade</strong>
            custom straps by Vietnamese craftsmen. <br />
            <br />
            Structure of a Black Shark Leather Watch Strap: Shark Leather main
            face, water-resistant and soft Zermatt specialized lining, absolute
            anti-irritant, Velodon specialized reinforced material (SH-220
            reinforcement). <br /> <br />
            The HANDDN strap will come <strong>FREE</strong> with a tang buckle
            / Quick release spring bar.
            <Grid
              templateColumns="repeat(3, 1fr)"
              columnGap={"1.2rem"}
              rowGap={".4rem"}
            >
              {data.color && (
                <>
                  <GridItem colSpan={1}>
                    <strong>Color:</strong>
                  </GridItem>
                  <GridItem colSpan={2}>{data.color}</GridItem>
                </>
              )}
              {data.material && (
                <>
                  <GridItem colSpan={1}>
                    <strong>Material:</strong>
                  </GridItem>
                  <GridItem colSpan={2}>{data.material}</GridItem>
                </>
              )}
              {data.size && (
                <>
                  <GridItem colSpan={1}>
                    <strong>Size:</strong>
                  </GridItem>
                  <GridItem colSpan={2}>{data.size}</GridItem>
                </>
              )}
              {data.addOns.length > 0 && (
                <>
                  <GridItem colSpan={1}>
                    <strong>Add-Ons:</strong>
                  </GridItem>
                  <GridItem colSpan={2}>
                    {data.addOns.map((item, index) => (
                      <Stack
                        width={"fit-content"}
                        alignItems={"center"}
                        gap={"1.2rem"}
                        key={index}
                        direction={"row"}
                      >
                        <FaCheck color="#fff" fontSize={"1.8rem"} />
                        <Text>{item}</Text>
                      </Stack>
                    ))}
                  </GridItem>
                </>
              )}
              {data.description && (
                <>
                  <GridItem colSpan={1}>
                    <strong>Descriptions:</strong>
                  </GridItem>
                  <GridItem colSpan={2}>{data.description}</GridItem>
                </>
              )}
            </Grid>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Stack>
  );
};

export default ContentDetail;
