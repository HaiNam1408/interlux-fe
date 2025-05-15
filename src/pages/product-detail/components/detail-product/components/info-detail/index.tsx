import { Box, Stack, Text, Textarea } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import OrderDetail from "./components/order-detail";
import ColorDetail from "./components/color-detail";
import SelectedCustom from "@components/selected-custom";
import { useState } from "react";
import AddOns from "./components/add-ons";
import HandleDetail from "./components/handle-detail";
import ProductDetail from "./components/product-detail";
import { listColor } from "@constants/listFakeData";

const listConfiguration = ["3-seater", "2-seater", "Sectional", "L-shapeF"];
const listCushionFirmness = ["Soft ", "Medium", "Firm"];

const InfoDetail = () => {
  const navigator = useNavigate();
  const [configuration, setConfiguration] = useState<string>(
    listConfiguration[0]
  );
  const [cushionFirmness, setCushionFirmness] = useState<string>(
    listCushionFirmness[0]
  );
  const [value, setValue] = useState("");
  const [itemSelected, setItemSelected] = useState<{
    image: string;
    colorTitle: string;
  }>(listColor[0]);

  const [selected, setSelected] = useState<Record<string, boolean>>({});

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
          onClick={() => navigator("/")}
        >
          HOME
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
          Classic Watch Straps
        </Text>
      </Stack>
      <OrderDetail />
      <ColorDetail
        itemSelected={itemSelected}
        setItemSelected={setItemSelected}
      />
      <SelectedCustom
        listValue={listConfiguration}
        title="Configuration"
        setValue={setConfiguration}
        value={configuration}
      />
      <Box height="2rem" />
      <SelectedCustom
        listValue={listCushionFirmness}
        title="Cushion Firmness"
        setValue={setCushionFirmness}
        value={cushionFirmness}
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
          configuration: configuration,
          cushionFirmness: cushionFirmness,
          addOns: Object.keys(selected).filter((key) => selected[key]),
        }}
      />
    </Stack>
  );
};

export default InfoDetail;
