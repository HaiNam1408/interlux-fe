import { Box } from "@chakra-ui/react";
import { RootState } from "@redux/store";
import { useSelector } from "react-redux";

const InfoProduct = () => {
  const product = useSelector((state: RootState) => state.product.product);

  return (
    <Box
      dangerouslySetInnerHTML={{ __html: product?.description || "" }}
      color={"text.main"}
      width={"100%"}
      maxW="140rem"
      px={"2rem"}
      fontSize={"1.8rem"}
      margin={"0 auto"}
    />
  );
};

export default InfoProduct;
