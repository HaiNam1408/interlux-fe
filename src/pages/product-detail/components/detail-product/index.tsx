import { Stack } from "@chakra-ui/react";
import ImageDetail from "./components/image-detail";
import InfoDetail from "./components/info-detail";

const DetailProduct = () => {
  return (
    <Stack
      width={"100%"}
      height={"fit-content"}
      direction={"row"}
      position={"relative"}
      maxW={"140rem"}
      margin={"0 auto"}
      px={"2rem"}
    >
      <ImageDetail />
      <InfoDetail />
    </Stack>
  );
};

export default DetailProduct;
