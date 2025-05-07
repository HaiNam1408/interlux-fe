import { Grid, GridItem } from "@chakra-ui/react";
import CardCatogories from "./components/card-categories";

const Categories = () => {
  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      width={"100%"}
      height={"100%"}
      minH={"100dvh"}
    >
      <GridItem
        width={"100%"}
        height={{ xl: "65rem", base: "46rem" }}
        colSpan={1}
      >
        <CardCatogories
          categorie="Collections"
          title="New Arrivals"
          imgCard="https://cdn.ferrari.com/cms/network/media/img/resize/67f9265420aa800020b49a25-ferrari-style-bags-2025-gtw1?width=960&height=650"
        />
      </GridItem>
      <GridItem
        width={"100%"}
        height={{ xl: "65rem", base: "46rem" }}
        colSpan={1}
      >
        <CardCatogories
          categorie="Magazine"
          title="Ferrari Collectibles"
          imgCard="https://cdn.ferrari.com/cms/network/media/img/resize/6812189f4297d0002122f975-ferrari-collectibles-gtw-box-desk?width=960&height=650"
        />
      </GridItem>
      <GridItem
        width={"100%"}
        height={{ xl: "65rem", base: "46rem" }}
        colSpan={1}
      >
        <CardCatogories
          categorie="Endurance"
          title="6 Hours of spa - francorchamps"
          imgCard="https://cdn.ferrari.com/cms/network/media/img/resize/68147f29543eb60020e38b3b-fia-wec-ferrari-hypercar-gtw-1?width=960&height=650"
        />
      </GridItem>
      <GridItem
        width={"100%"}
        height={{ xl: "65rem", base: "46rem" }}
        colSpan={1}
      >
        <CardCatogories
          categorie="Farrari Museums"
          title="Supercars"
          imgCard="https://cdn.ferrari.com/cms/network/media/img/resize/67b479ea8e935a0056834fe4-2025-ferrari-museum-supercars-gtw1-last?width=960&height=650"
        />
      </GridItem>
    </Grid>
  );
};

export default Categories;
