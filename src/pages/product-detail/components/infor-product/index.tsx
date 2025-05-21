import { Box } from "@chakra-ui/react";
import { RootState } from "@redux/store";
import { useSelector } from "react-redux";

const InfoProduct = () => {
  const product = useSelector((state: RootState) => state.product.product);

  console.log(product);
  return (
    <Box
      dangerouslySetInnerHTML={{ __html: product?.description || "" }}
      color={"#fff"}
      width={"100%"}
      maxW="140rem"
      px={"2rem"}
    />
  );
};

export default InfoProduct;
