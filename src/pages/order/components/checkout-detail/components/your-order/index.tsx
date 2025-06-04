import { Button, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import { IAddress, IOrder } from "@interfaces/IOrder.interface";
import TableProduct from "./components/table-product";
import { ICart } from "@interfaces/ICart.interface";
import CheckBox from "@components/check-box";

interface IYourOrder {
  handleSubmit: () => Promise<void>;
  setAddressValue: (
    section: "shippingAddress",
    key: keyof IAddress,
    value: string
  ) => void;
  form: IOrder;
  listCart: ICart | undefined;
  setFormValue: <K extends keyof IOrder>(key: K, value: IOrder[K]) => void;
}

const YourOrder = ({
  handleSubmit,
  listCart,
  setFormValue,
}: IYourOrder) => {
  return (
    <Stack
      width={"100%"}
      height={"fit-content"}
      p={"3rem"}
      border={"2px solid #161735"}
      direction={"column"}
      gap={0}
    >
      <Stack
        width={"fit-content"}
        height={"fit-content"}
        direction={"row"}
        gap={"1rem"}
        alignItems={"center"}
        cursor={"pointer"}
        position={"relative"}
        mb={"2rem"}
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
          YOUR ORDER
        </Text>
      </Stack>
      <TableProduct listCart={listCart} />
      <Text
        fontSize={"1.6rem"}
        fontWeight={500}
        borderBottom={"3px solid #ececec"}
        mb={"2rem"}
      >
        Payment method
      </Text>
      <RadioGroup
        defaultValue="COD"
        mb={"2rem"}
        onChange={(val) => setFormValue("paymentMethod", val)}
      >
        <Stack spacing={5} direction="column">
          <Radio colorScheme="red" value="COD" size={"lg"}>
            <Text fontSize="1.4rem" fontWeight={500}>
              Cash On Delivery
            </Text>
          </Radio>
          <Radio colorScheme="green" value="VNPAY" size={"lg"}>
            <Text fontSize="1.4rem" fontWeight={500}>
              VNPAY
            </Text>
          </Radio>
        </Stack>
      </RadioGroup>
      <CheckBox
        label="I have read and agree to the website terms and conditions *"
        checked={true}
        onChange={() => {}}
      />
      <Button
        bg="#1a1a1a"
        color="#fff"
        width={"100%"}
        height={"4.8rem"}
        my={"2rem"}
        onClick={handleSubmit}
      >
        Payment
      </Button>
    </Stack>
  );
};

export default YourOrder;
