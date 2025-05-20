import { Box, Stack } from "@chakra-ui/react";
import { useState } from "react";
import ListImage from "./components/list-image";
import MainImage from "./components/main-image";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import { IProductVariation } from "@interfaces/IProduct.interface";

interface IImageDetail {
  selectedVariation: IProductVariation | null;
}

const ImageDetail = ({ selectedVariation }: IImageDetail) => {
  const product = useSelector((state: RootState) => state.product.product);

  const [selectedImg, setSelectedImg] = useState<string>(
    product?.images.map((item) => item.filePath)[0] || ""
  );

  return (
    <Box
      width={"58%"}
      height={"fit-content"}
      position={"sticky"}
      top={"5rem"}
      bottom={0}
      pr={"3rem"}
    >
      <Stack direction={"row"} width={"100%"} height={"fit-content"}>
        <ListImage
          setSelectedImg={setSelectedImg}
          selectedImg={selectedImg}
          listImg={
            selectedVariation
              ? selectedVariation.images.map((item) => item.filePath) || []
              : product?.images.map((item) => item.filePath) || []
          }
        />
        <MainImage
          setSelectedImg={setSelectedImg}
          selectedImg={selectedImg}
          listImg={
            selectedVariation
              ? selectedVariation.images.map((item) => item.filePath) || []
              : product?.images.map((item) => item.filePath) || []
          }
        />
      </Stack>
    </Box>
  );
};

export default ImageDetail;
