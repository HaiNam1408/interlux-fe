import { Stack, Text } from "@chakra-ui/react";
import { useDarkModeContext } from "@hooks/useDarkModeContext";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import NoteBill from "../note-bill";
import FormInfo from "../form-info";
import { IAddress, IOrder } from "@interfaces/IOrder.interface";
import { IOrderHelper } from "@hooks/useFormOrder";

interface IBillDetails {
  form: IOrder;
  helper: IOrderHelper;
  setAddressValue: (
    section: "shippingAddress",
    key: keyof IAddress,
    value: string
  ) => void;
}

const BillDetails = ({ form, helper, setAddressValue }: IBillDetails) => {
  const { isDarkMode } = useDarkModeContext();
  const navigator = useNavigate();

  return (
    <Stack width={"100%"} height={"fit-content"} direction={"column"} gap={"0"}>
      <Stack
        width={"fit-content"}
        height={"fit-content"}
        direction={"row"}
        gap={"1rem"}
        alignItems={"center"}
        cursor={"pointer"}
        position={"relative"}
        mb={"2rem"}
        onClick={() => navigator("/checkout/cart")}
        _after={{
          content: "''",
          position: "absolute",
          right: "20%",
          left: "20%",
          bottom: -2,
          bgColor: "bg.blueDark",
          w: "60%",
          h: "3px",
          opacity: ".3",
          borderRadius: "2rem",
          transition: "all .3s ease",
        }}
        _hover={{
          _after: {
            right: "0",
            left: "0",
            opacity: "1",
            w: "100%",
          },
        }}
      >
        <Text fontSize={"1.8rem"} fontWeight={500}>
          Edit Cart
        </Text>
        <FaCartShopping
          fontSize={"1.8rem"}
          color={!isDarkMode ? "#fff" : "#000"}
        />
      </Stack>
      <NoteBill />
      <FormInfo form={form} helper={helper} setAddressValue={setAddressValue} />
    </Stack>
  );
};

export default BillDetails;
