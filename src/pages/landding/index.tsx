import { Stack } from "@chakra-ui/react";
import Discover from "./components/discover";
import Luxury from "./components/luxury";
import Categories from "./components/categories";
import Blog from "./components/blog";

const LanddingPage = () => {
  return (
    <Stack width={"100%"} height={"fit-content"} position={"relative"} gap={0}>
      <Discover />
      <Luxury />
      <Categories />
      <Blog />
    </Stack>
  );
};

export default LanddingPage;
