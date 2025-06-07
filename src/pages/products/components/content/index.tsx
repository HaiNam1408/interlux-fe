import { Button, Center, Grid, GridItem, Text } from "@chakra-ui/react";
import LoadingCustom from "@components/loading-custom";
import { IProduct } from "@interfaces/IProduct.interface";
import CardProduct from "./components/card-product";
import { useNavigate, useParams } from "react-router-dom";
import { IcCart } from "@assets/svgs";
import { useDispatch } from "react-redux";
import { setCategorySelected } from "@redux/reducer/product.reducer";
import { setRememberSlug } from "@redux/reducer/productStoge.reducer";

interface IContent {
  listProduct: IProduct[];
  loading: boolean;
}

const Content = ({ listProduct, loading }: IContent) => {
  const dispatch = useDispatch();
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
      {listProduct.length > 0 ? (
        listProduct.map((item, index) => (
          <GridItem
            colSpan={1}
            key={index}
            onClick={() => navigator(`/shop/${slugCategory}/${item.id}`)}
          >
            <CardProduct data={item} />
          </GridItem>
        ))
      ) : (
        <GridItem colSpan={4}>
          <Center
            width={"100%"}
            height={"100%"}
            flexDirection={"column"}
            gap={"3rem"}
            py={"1.5rem"}
            px={"3rem"}
          >
            <IcCart height="12rem" />
            <Text fontSize={"2.6rem"}>
              There are currently no products available.
            </Text>
            <Button
              colorScheme="#161375"
              maxW={"30rem"}
              fontWeight={700}
              onClick={() => {
                navigator(`/shop/all`);
                dispatch(setCategorySelected(""));
                dispatch(
                  setRememberSlug({
                    title: "All Furniture",
                    slug: "all",
                  })
                );
              }}
            >
              Back to Shop.
            </Button>
          </Center>
        </GridItem>
      )}
    </Grid>
  );
};

export default Content;
