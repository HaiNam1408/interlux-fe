import { Stack } from "@chakra-ui/react";
import Discover from "./components/discover";
import Luxury from "./components/luxury";
import Categories from "./components/categories";
import Blog from "./components/blog";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

const LanddingPage = () => {
  const location = useLocation();
  const blogRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.hash === "#blog" && blogRef.current) {
      blogRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (location.hash === "" && homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <Stack
      ref={homeRef}
      width={"100%"}
      height={"fit-content"}
      position={"relative"}
      gap={0}
    >
      <Discover />
      <Luxury />
      <Categories />
      <div ref={blogRef}>
        <Blog />
      </div>
    </Stack>
  );
};

export default LanddingPage;
