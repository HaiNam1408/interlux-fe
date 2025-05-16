import { Box, Stack, Text, Textarea } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import OrderDetail from "./components/order-detail";
import ColorDetail from "./components/color-detail";
import SelectedCustom from "@components/selected-custom";
import { useEffect, useState } from "react";
import AddOns from "./components/add-ons";
import HandleDetail from "./components/handle-detail";
import ProductDetail from "./components/product-detail";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";



const InfoDetail = () => {
  const navigator = useNavigate();
  const product = useSelector((state: RootState) => state.product.product)


  const [material, setMaterial] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [value, setValue] = useState("");
  const [itemSelected, setItemSelected] = useState<{
    value: string;
    colorTitle: string;
  }>({ colorTitle: "", value: "string" });

  const [selected, setSelected] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setMaterial(product?.productAttributes.find(item => item.name.toLowerCase().includes("material"))?.values[0].name || "")
    setSize(product?.productAttributes.find(item => item.name.toLowerCase().includes("size"))?.values[0].name || "")
    setItemSelected({
      colorTitle: product?.productAttributes.find(item => item.name.toLowerCase().includes("color"))?.values[0].name || "",
      value: product?.productAttributes.find(item => item.name.toLowerCase().includes("color"))?.values[0].value || ""
    })
  }, [product])

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
      <OrderDetail />
      <ColorDetail
        itemSelected={itemSelected}
        setItemSelected={setItemSelected}
      />
      <SelectedCustom
        listValue={product?.productAttributes.find(item => item.name.toLowerCase().includes("material"))?.values.map(item => item.name) || []}
        title="Material"
        setValue={setMaterial}
        value={material}
      />
      <Box height="2rem" />
      <SelectedCustom
        listValue={product?.productAttributes.find(item => item.name.toLowerCase().includes("size"))?.values.map(item => item.name) || []}
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
