import { Button, Grid, GridItem } from "@chakra-ui/react";
import { ICart } from "@interfaces/ICart.interface";
import TableCart from "./components/table-cart";
import DetailShopping from "./components/detail-shopping";
import { useNavigate } from "react-router-dom";
interface IShoppingCart {
  listCart: ICart | undefined;
}

const ShoppintCart = ({ listCart }: IShoppingCart) => {
  const navigator = useNavigate();
  return (
    <Grid
      templateColumns="repeat(12, 1fr)"
      maxW={"140rem"}
      margin={"4rem auto"}
      width={"100%"}
    >
      <GridItem colSpan={7} px={"3rem"} borderRight={"1px solid #ececec"}>
        <TableCart listCart={listCart} />
        <Button
          variant={"outline"}
          colorScheme="#1a1a1a"
          color="#000"
          width={"100%"}
          height={"4rem"}
          my={"2rem"}
          maxW={"20rem"}
          onClick={() => navigator("/shop/all")}
        >
          Continue shopping
        </Button>
      </GridItem>
      <GridItem colSpan={5} px={"3rem"}>
        <DetailShopping listCart={listCart} />
      </GridItem>
    </Grid>
  );
};

export default ShoppintCart;
