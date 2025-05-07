import { Box } from "@chakra-ui/react";

import ButtonDis from "./components/button-dis";
import ContentDis from "./components/content-dis";
import PaginationDis from "./components/pagination-dis";
import { useState } from "react";

const Discover = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Box
      width={"100%"}
      height={"100dvh"}
      minH={"100dvh"}
      overflow={"hidden"}
      position={"relative"}
    >
      <ButtonDis />
      <ContentDis
        setCurrentIndex={setCurrentIndex}
        currentIndex={currentIndex}
      />
      <PaginationDis
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </Box>
  );
};

export default Discover;
