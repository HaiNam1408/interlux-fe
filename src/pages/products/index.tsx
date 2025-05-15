import { Center, Stack } from "@chakra-ui/react";
import Header from "./components/header";
import Filter from "./components/filter";
import Content from "./components/content";
import { useEffect, useState } from "react";
import { IProduct } from "@interfaces/IProduct.interface";
import { getAllProducts } from "@apis/product.api";
import Pagination from "@components/pagination-custom";

const Products = () => {
  const [listProduct, setListProduct] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totlaPage, setTotlaPage] = useState<number>(1);

  useEffect(() => {
    setLoading(true);
    getAllProducts(1)
      .then((res) => {
        setListProduct(res.data.data.data);
        setTotlaPage(res.data.data.meta.totalPages)
        setPage(res.data.data.meta.page)
      })
      .finally(() => setLoading(false));
  }, []);

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
