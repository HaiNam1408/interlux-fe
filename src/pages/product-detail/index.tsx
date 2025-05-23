import { Stack, Text } from "@chakra-ui/react";
import ModelProduct from "./components/model-product";
import DetailProduct from "./components/detail-product";
import InfoProduct from "./components/infor-product";
import Variations from "./components/variations-product";
import FooterLogin from "@pages/login/components/footer-login";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingScreen from "@components/loading-screen";
import { getProduct } from "@apis/product.api";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "@redux/reducer/product.reducer";
import { IProductVariation } from "@interfaces/IProduct.interface";
import { RootState } from "@redux/store";

const ProductDetail = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const { "id-product": productId } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedVariation, setSelectedVariation] =
    useState<IProductVariation | null>(null);
  const product = useSelector((state: RootState) => state.product.product);
  const [isModel, setIsModel] = useState<boolean>(false);

  const findMatchingVariation = (
    color: string,
    material: string,
    size: string
  ): IProductVariation | null => {
    return (
      product?.variations.find((variation) => {
        const attrMap = variation.groupedAttributes.reduce<
          Record<string, string[]>
        >((acc, attr) => {
          acc[attr.name.toLowerCase()] = attr.values.map((val) =>
            val.value.toLowerCase()
          );
          return acc;
        }, {});

        return (
          attrMap["color"]?.includes(color.toLowerCase()) &&
          attrMap["material"]?.includes(material.toLowerCase()) &&
          attrMap["size"]?.includes(size.toLowerCase())
        );
      }) || null
    );
  };

  useEffect(() => {
    setLoading(true);
    if (productId) {
      getProduct(productId)
        .then((res) => dispatch(setProduct(res.data.data)))
        .finally(() => setLoading(false));
    } else {
      navigator(-1);
    }
  }, []);

  return (
    <Stack
      width={"100%"}
      height={"fit-content"}
      minH={"100dvh"}
      position={"relative"}
    >
      <LoadingScreen isLoading={loading} />
      <DetailProduct
        findMatchingVariation={findMatchingVariation}
        setSelectedVariation={setSelectedVariation}
        selectedVariation={selectedVariation}
      />
      <Stack
        width={"100%"}
        direction={"row"}
        gap={"2rem"}
        justifyContent={"center"}
      >
        <Text
          py={"2rem"}
          fontSize={"4rem"}
          fontFamily={"tinos"}
          fontWeight={700}
          cursor={"pointer"}
          textDecoration={isModel ? "auto" : "underline"}
          transition={"all .3s ease"}
          onClick={() => setIsModel(false)}
        >
          Descriptions
        </Text>
        <Text
          py={"2rem"}
          fontSize={"4rem"}
          fontFamily={"tinos"}
          fontWeight={700}
        >
          /
        </Text>
        <Text
          py={"2rem"}
          fontSize={"4rem"}
          fontFamily={"tinos"}
          cursor={"pointer"}
          fontWeight={700}
          textDecoration={!isModel ? "auto" : "underline"}
          transition={"all .3s ease"}
          onClick={() => setIsModel(true)}
        >
          Model
        </Text>
      </Stack>
      {isModel ? <ModelProduct /> : <InfoProduct />}

      <Variations />
      <FooterLogin />
    </Stack>
  );
};

export default ProductDetail;
