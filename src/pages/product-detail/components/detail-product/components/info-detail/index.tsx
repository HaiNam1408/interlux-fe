/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Stack, Text, Textarea } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import OrderDetail from "./components/order-detail";
import ColorDetail from "./components/color-detail";
import SelectedCustom from "@components/selected-custom";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import AddOns from "./components/add-ons";
import HandleDetail from "./components/handle-detail";
import ProductDetail from "./components/product-detail";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import { IProductVariation } from "@interfaces/IProduct.interface";

interface IInfoDetail {
  findMatchingVariation: (
    color: string,
    material: string,
    size: string
  ) => IProductVariation | null;
  setSelectedVariation: Dispatch<SetStateAction<IProductVariation | null>>;
  selectedVariation: IProductVariation | null;
}

const InfoDetail = ({
  findMatchingVariation,
  setSelectedVariation,
  selectedVariation,
}: IInfoDetail) => {
  const navigator = useNavigate();
  const product = useSelector((state: RootState) => state.product.product);

  const [material, setMaterial] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [value, setValue] = useState("");
  const [itemSelected, setItemSelected] = useState<{
    value: string;
    colorTitle: string;
  }>({ colorTitle: "", value: "string" });

  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const [materialList, setMaterialList] = useState<string[]>([]);
  const [sizeList, setSizeList] = useState<string[]>([]);

  const getMaterialAndSizeByColor = (selectedColor: string) => {
    const materials = new Set<string>();
    const sizes = new Set<string>();

    product?.variations
      .filter((variation: any) =>
        variation.groupedAttributes.some(
          (attr: any) =>
            attr.name.toLowerCase() === "color" &&
            attr.values.some((val: any) => val.value === selectedColor)
        )
      )
      .forEach((variation) => {
        variation.groupedAttributes.forEach((attr) => {
          if (attr.name.toLowerCase() === "material") {
            attr.values.forEach((val) => materials.add(val.value));
          } else if (attr.name.toLowerCase() === "size") {
            attr.values.forEach((val) => sizes.add(val.value));
          }
        });
      });

    return {
      materials: Array.from(materials),
      sizes: Array.from(sizes),
    };
  };

  useEffect(() => {
    if (itemSelected?.value && product) {
      const { materials, sizes } = getMaterialAndSizeByColor(
        itemSelected.value
      );
      setMaterialList(materials);
      setSizeList(sizes);
      setMaterial(materials[0] || "");
      setSize(sizes[0] || "");
    }
  }, [itemSelected, product]);

  useEffect(() => {
    if (itemSelected.value && material && size) {
      const variation = findMatchingVariation(
        itemSelected.value,
        material,
        size
      );
      setSelectedVariation(variation);
    }
  }, [itemSelected, material, size]);

  useEffect(() => {
    setMaterial(
      product?.productAttributes.find((item) =>
        item.name.toLowerCase().includes("material")
      )?.values[0].name || ""
    );
    setSize(
      product?.productAttributes.find((item) =>
        item.name.toLowerCase().includes("size")
      )?.values[0].name || ""
    );
    setItemSelected({
      colorTitle:
        product?.productAttributes.find((item) =>
          item.name.toLowerCase().includes("color")
        )?.values[0].name || "",
      value:
        product?.productAttributes.find((item) =>
          item.name.toLowerCase().includes("color")
        )?.values[0].value || "",
    });
  }, [product]);

  return (
    <Stack direction={"column"} width={"42%"} height={"fit-content"}>
      <Stack direction={"row"} gap={"1rem"}>
        <Text
          fontSize={"1.2rem"}
          color={"#cecece"}
          textTransform={"uppercase"}
          transition={"all .3s ease"}
          cursor={"pointer"}
          _hover={{
            color: "#fff",
            fontWeight: 700,
          }}
          onClick={() => navigator("/shop")}
        >
          SHOP
        </Text>
        <Text fontSize={"1.2rem"} color={"#cecece"} textTransform={"uppercase"}>
          /
        </Text>
        <Text
          fontSize={"1.2rem"}
          color={"#cecece"}
          textTransform={"uppercase"}
          transition={"all .3s ease"}
          cursor={"pointer"}
          _hover={{
            color: "#fff",
            fontWeight: 700,
          }}
        >
          {product?.category.name}
        </Text>
        <Text fontSize={"1.2rem"} color={"#cecece"} textTransform={"uppercase"}>
          /
        </Text>
        <Text
          fontSize={"1.2rem"}
          color={"#cecece"}
          textTransform={"uppercase"}
          transition={"all .3s ease"}
          cursor={"pointer"}
          _hover={{
            color: "#fff",
            fontWeight: 700,
          }}
        >
          {product?.category.parent?.name}
        </Text>
      </Stack>
      <OrderDetail selectedVariation={selectedVariation} />
      <ColorDetail
        itemSelected={itemSelected}
        setItemSelected={setItemSelected}
      />
      <SelectedCustom
        listValue={materialList}
        title="Material"
        setValue={setMaterial}
        value={material}
      />
      <Box height="2rem" />
      <SelectedCustom
        listValue={sizeList}
        title="Size"
        setValue={setSize}
        value={size}
      />
      <AddOns setSelected={setSelected} selected={selected} />
      <Stack direction={"column"} gap={"1rem"} my={"2rem"}>
        <Text fontSize={"1.6rem"} color={"#fff"}>
          <strong>Description:</strong>
        </Text>
        <Textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add more details..."
          bg="#1a1a1a"
          border="1px solid #333"
          color="white"
          _placeholder={{ color: "#777" }}
          fontSize={"1.4rem"}
          minH={"10rem"}
        />
      </Stack>
      <HandleDetail />

      <ProductDetail
        data={{
          color: itemSelected.colorTitle,
          description: value,
          material: material,
          size: size,
          addOns: Object.keys(selected).filter((key) => selected[key]),
        }}
      />
    </Stack>
  );
};

export default InfoDetail;
