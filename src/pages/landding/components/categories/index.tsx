import { Grid, GridItem } from "@chakra-ui/react";
import CardCatogories from "./components/card-categories";
import HomeOffice from "@assets/images/Home Office.jpg";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";

const Categories = () => {
  const category = useSelector((state: RootState) => state.auth.categorys);
  
  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      width={"100%"}
      height={"100%"}
      minH={"100dvh"}
    >
      {category.map((item, index) => (
        <GridItem
          width={"100%"}
          height={{ xl: "65rem", base: "46rem" }}
          colSpan={1}
          key={index}
        >
          <CardCatogories
            categorie={item.name}
            title={item.name}
            imgCard={item?.image?.filePath ?? HomeOffice}
            slug={`/shop/${item.slug}`}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default Categories;
