import { Stack } from "@chakra-ui/react";
import ImageDetail from "./components/image-detail";
import InfoDetail from "./components/info-detail";
import { IProductVariation } from "@interfaces/IProduct.interface";
import { Dispatch, SetStateAction } from "react";

interface IDetailProduct {
  findMatchingVariation: (
    color: string,
    material: string,
    size: string
  ) => IProductVariation | null;
  setSelectedVariation: Dispatch<SetStateAction<IProductVariation | null>>;
  selectedVariation: IProductVariation | null;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const DetailProduct = ({
  findMatchingVariation,
  setSelectedVariation,
  selectedVariation,setLoading
}: IDetailProduct) => {
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
      <ImageDetail selectedVariation={selectedVariation} />
      <InfoDetail
        findMatchingVariation={findMatchingVariation}
        setSelectedVariation={setSelectedVariation}
        selectedVariation={selectedVariation}
        setLoading={setLoading}
      />
    </Stack>
  );
};

export default DetailProduct;
