import { Center, Stack } from "@chakra-ui/react";
import Header from "./components/header";
import Filter from "./components/filter";
import Content from "./components/content";
import { useEffect, useState } from "react";
import { IProduct } from "@interfaces/IProduct.interface";
import { getAllProducts } from "@apis/product.api";
import Pagination from "@components/pagination-custom";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";

const Products = () => {
  const [listProduct, setListProduct] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totlaPage, setTotlaPage] = useState<number>(1);

  const valueSearch = useSelector((state: RootState) => state.product.valueSearch)
  const idCategory = useSelector((state: RootState) => state.product.idCategory)
  const rangPrice = useSelector((state: RootState) => state.product.rangPrice)
  const sortBy = useSelector((state: RootState) => state.product.sortBy)
  const sortDirection = useSelector((state: RootState) => state.product.sortDirection)
  const colorProduct = useSelector((state: RootState) => state.product.colorProduct)


  useEffect(() => {
    setLoading(true);
    getAllProducts(page, 10, valueSearch, idCategory, rangPrice[0], rangPrice[1], sortBy, sortDirection, { color: colorProduct })
      .then((res) => {
        setListProduct(res.data.data.data);
        setTotlaPage(res.data.data.meta.totalPages)
        setPage(res.data.data.meta.page)
      })
      .finally(() => setLoading(false));
  }, [page, valueSearch, idCategory, rangPrice, sortBy, sortDirection, colorProduct]);

  return (
    <Stack
      width={"100%"}
      maxW={"130rem"}
      height={"100%"}
      minH={"100dvh"}
      direction={"column"}
      gap={"3rem"}
      margin={"0 auto"}
    >
      <Header />
      <Filter />
      <Content loading={loading} listProduct={listProduct} />
      <Center width={"100%"}>
        <Pagination count={totlaPage} page={page} setPage={setPage} />
      </Center>
    </Stack>
  );
};

export default Products;
