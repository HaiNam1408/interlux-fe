import { Grid, GridItem } from "@chakra-ui/react";
import CardCatogories from "./components/card-categories";
import HomeOffice from "@assets/images/Home Office.jpg";
import Bathroom from "@assets/images/Bathroom.jpg";
import OutdoorSpace from "@assets/images/Outdoor Space.jpg";
import Bedroom from "@assets/images/Bedroom.jpg";
import DiningRoom from "@assets/images/Dining Room.jpg";
import LivingRoom from "@assets/images/Living Room.jpg";

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
          title="Home Office"
          imgCard={HomeOffice}
          slug="/shop/home-office"
        />
      </GridItem>
      <GridItem
        width={"100%"}
        height={{ xl: "65rem", base: "46rem" }}
        colSpan={1}
      >
        <CardCatogories
          categorie="Magazine"
          title="Bathroom"
          imgCard={Bathroom}
          slug="/shop/bathroom"
        />
      </GridItem>
      <GridItem
        width={"100%"}
        height={{ xl: "65rem", base: "46rem" }}
        colSpan={1}
      >
        <CardCatogories
          categorie="Endurance"
          title="Outdoor Space"
          imgCard={OutdoorSpace}
          slug="/shop/outdoor-space"
        />
      </GridItem>
      <GridItem
        width={"100%"}
        height={{ xl: "65rem", base: "46rem" }}
        colSpan={1}
      >
        <CardCatogories
          categorie="Bedroom"
          title="Bedroom"
          imgCard={Bedroom}
          slug="/shop/bedroom"
        />
      </GridItem>
      <GridItem
        width={"100%"}
        height={{ xl: "65rem", base: "46rem" }}
        colSpan={1}
      >
        <CardCatogories
          categorie="Dining Room"
          title="Dining Room"
          imgCard={DiningRoom}
          slug="/shop/dining-room"
        />
      </GridItem>
      <GridItem
        width={"100%"}
        height={{ xl: "65rem", base: "46rem" }}
        colSpan={1}
      >
        <CardCatogories
          categorie="Bedroom"
          title="Living Room"
          imgCard={LivingRoom}
          slug="/shop/living-room"
        />
      </GridItem>
    </Grid>
  );
};

export default Categories;
