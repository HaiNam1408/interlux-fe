import { Grid, GridItem, Text } from "@chakra-ui/react";
import { ICart } from "@interfaces/ICart.interface";
import ChildCart from "../child-cart";
interface ITableCart {
  listCart: ICart | undefined;
}

const TableCart = ({ listCart }: ITableCart) => {
  return (
    <Grid templateColumns="repeat(12, 1fr)">
      <GridItem colSpan={6} borderBottom={"3px solid #ececec"}>
        <Text fontSize={"1.6rem"} fontWeight={500} textTransform={"uppercase"}>
          Product
        </Text>
      </GridItem>
      <GridItem colSpan={2} borderBottom={"3px solid #ececec"}>
        <Text
          textAlign={"center"}
          fontSize={"1.6rem"}
          fontWeight={500}
          textTransform={"uppercase"}
        >
          Price
        </Text>
      </GridItem>
      <GridItem colSpan={2} borderBottom={"3px solid #ececec"}>
        <Text
          textAlign={"center"}
          fontSize={"1.6rem"}
          fontWeight={500}
          textTransform={"uppercase"}
        >
          Quanlity
        </Text>
      </GridItem>
      <GridItem colSpan={2} borderBottom={"3px solid #ececec"}>
        <Text
          textAlign={"center"}
          fontSize={"1.6rem"}
          fontWeight={500}
          textTransform={"uppercase"}
        >
          Subtotal
        </Text>
      </GridItem>
      {(listCart?.items ?? []).map((item, index) => (
        <ChildCart key={index} data={item} />
      ))}
    </Grid>
  );
};

export default TableCart;
