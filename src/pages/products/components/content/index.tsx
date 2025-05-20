import { Grid, GridItem } from "@chakra-ui/react";
import LoadingCustom from "@components/loading-custom";
import { IProduct } from "@interfaces/IProduct.interface";
import CardProduct from "./components/card-product";
import { useNavigate, useParams } from "react-router-dom";

interface IContent {
  listProduct: IProduct[];
  loading: boolean;
}

const Content = ({ listProduct, loading }: IContent) => {
  const navigator = useNavigate();
  const { "slug-category": slugCategory } = useParams();

  return (
    <Grid
      templateColumns="repeat(4, 1fr)"
      width={"100%"}
      gap={"2rem"}
      height={"fit-content"}
      position={"relative"}
      minH={"80dvh"}
    >
      <LoadingCustom isLoading={loading}></LoadingCustom>
      {listProduct.map((item, index) => (
        <GridItem
          colSpan={1}
          key={index}
          onClick={() => navigator(`/shop/${slugCategory}/${item.id}`)}
        >
          <CardProduct data={item} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default Content;
