import { getAllCategory } from "@apis/category.api";
import { Grid, GridItem } from "@chakra-ui/react";
import DropDownCustom from "@components/dropdow-custom";
import InputCustom from "@components/input-custom";
import SlideCustom from "@components/slide-custom";
import { ICategory } from "@interfaces/ICategory.interface";
import {
  setCategorySelected,
  setColorProduct,
  setIdCategory,
  setRangPrice,
  setValueSearch,
} from "@redux/reducer/product.reducer";
import { RootState } from "@redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const FilterContent = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const [category, setCategory] = useState<string>("");
  const [listCategory, setListCategory] = useState<ICategory[]>([]);
  const { "slug-category": slugCategory } = useParams();

  const valueSearch = useSelector(
    (state: RootState) => state.product.valueSearch
  );
  const rangPrice = useSelector((state: RootState) => state.product.rangPrice);
  const colorProduct = useSelector(
    (state: RootState) => state.product.colorProduct
  );
  const rememberSlug = useSelector(
    (state: RootState) => state.productStoge.rememberSlug
  );

  useEffect(() => {
    getAllCategory().then((res) => {
      if (rememberSlug.slug?.includes("all")) {
        const data = res.data.data.flatMap((item: ICategory) =>
          item.children.map((i) => i)
        );
        setListCategory(data);
      } else {
        const data: ICategory = res.data.data.find(
          (item: ICategory) => item.slug === rememberSlug.slug
        );
        setListCategory(data.children);
      }
    });
    setCategory("");
  }, [rememberSlug]);

  useEffect(() => {
    const dataCategory = listCategory.find((item) => item.name === category);

    dispatch(setCategorySelected(dataCategory?.name || ""));

    if (slugCategory?.toLowerCase().includes("all")) {
      dispatch(setIdCategory(dataCategory?.id || 0));
    } else {
      navigator(`shop/${dataCategory?.slug}`);
    }
  }, [category]);

  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={"2rem"} width={"100%"}>
      <GridItem colSpan={1}>
        <InputCustom
          colorLabel="#fff"
          setValue={(e) => dispatch(setValueSearch(e))}
          value={valueSearch}
          placeholder="Search"
        />
      </GridItem>
      <GridItem colSpan={1}>
        <DropDownCustom
          label="Category"
          labelSearch="Filter category"
          listDropdown={listCategory.map((item) => item.name)}
          setSelectedItem={setCategory}
        />
      </GridItem>
      <GridItem colSpan={1}>
        <DropDownCustom
          label="Color"
          labelSearch="Filter color"
          listDropdown={[
            "All Colors",
            "beige",
            "black",
            "blue",
            "brown",
            "burgundy",
            "cream",
            "doucolor",
            "golden",
            "green",
            "grey/Cement",
            "himalayan",
            "navy",
            "orange",
            "pink",
            "purple",
            "red",
            "silver",
            "tricolor",
            "turquoise",
            "white",
            "yellow",
          ]}
          setSelectedItem={(e) => {
            if (e.includes("All")) {
              dispatch(setColorProduct(""));
            } else {
              dispatch(setColorProduct(e));
            }
          }}
          type="color"
          seletedItem={colorProduct}
        />
      </GridItem>
      <GridItem colSpan={1}>
        <SlideCustom
          label="Price Range"
          max={10000}
          min={0}
          setValue={(e) => dispatch(setRangPrice(e))}
          value={rangPrice}
        />
      </GridItem>
    </Grid>
  );
};

export default FilterContent;
