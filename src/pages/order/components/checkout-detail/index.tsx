import { Grid, GridItem } from "@chakra-ui/react";
import BillDetails from "./components/bill-details";

const CheckoutDetail = () => {
  return (
    <Grid
      templateColumns="repeat(12, 1fr)"
      maxW={"140rem"}
      margin={"4rem auto"}
      width={"100%"}
    >
      <GridItem colSpan={7} px={"3rem"} borderRight={"1px solid #ececec"}>
        <BillDetails />
      </GridItem>
      <GridItem colSpan={5} px={"3rem"}></GridItem>
    </Grid>
  );
};

export default CheckoutDetail;
