import { Stack } from "@chakra-ui/react";
import Header from "./components/header";
import Filter from "./components/filter";
import Content from "./components/content";

const Products = () => {
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
      <Content />
    </Stack>
  );
};

export default Products;
