import { Grid, GridItem, Stack, Text, Textarea } from "@chakra-ui/react";
import InputCustom from "@components/input-custom";
import { IOrderHelper } from "@hooks/useFormOrder";
import { IAddress, IOrder } from "@interfaces/IOrder.interface";

interface IFormInfo {
  form: IOrder;
  helper: IOrderHelper;
  setAddressValue: (
    section: "shippingAddress",
    key: keyof IAddress,
    value: string
  ) => void;
}

const FormInfo = ({ form, helper, setAddressValue }: IFormInfo) => {
  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      width={"100%"}
      columnGap={"4rem"}
      rowGap={"2rem"}
      mt={"2rem"}
    >
      <GridItem colSpan={2}>
        <Text
          fontSize={"1.6rem"}
          fontWeight={500}
          textTransform={"uppercase"}
          borderBottom={"3px solid #ececec"}
          width={"100%"}
        >
          Billing details
        </Text>
      </GridItem>

      <GridItem colSpan={2}>
        <InputCustom
          label="Full Name"
          value={form.shippingAddress.fullName}
          setValue={(val) => setAddressValue("shippingAddress", "fullName", val)}
          helperText={helper.shippingAddress?.fullName}
          placeholder="Full name"
          require
        />
      </GridItem>
      <GridItem colSpan={1}>
        <InputCustom
          label="Phone"
          value={form.shippingAddress.phone}
          setValue={(val) => setAddressValue("shippingAddress", "phone", val)}
          helperText={helper.shippingAddress?.phone}
          placeholder="Phone"
          require
        />
      </GridItem>
      <GridItem colSpan={1}>
        <InputCustom
          label="Email"
          value={form.shippingAddress.email}
          setValue={(val) => setAddressValue("shippingAddress", "email", val)}
          helperText={helper.shippingAddress?.email}
          placeholder="Email address"
          require
        />
      </GridItem>
      <GridItem colSpan={2}>
        <InputCustom
          label="Address"
          value={form.shippingAddress.address}
          setValue={(val) => setAddressValue("shippingAddress", "address", val)}
          helperText={helper.shippingAddress?.address}
          placeholder="Address"
          require
        />
      </GridItem>
      <GridItem colSpan={1}>
        <InputCustom
          label="District"
          value={form.shippingAddress.district}
          setValue={(val) => setAddressValue("shippingAddress", "district", val)}
          helperText={helper.shippingAddress?.district}
          placeholder="District"
          require
        />
      </GridItem>
      <GridItem colSpan={1}>
        <InputCustom
          label="Province"
          value={form.shippingAddress.province}
          setValue={(val) => setAddressValue("shippingAddress", "province", val)}
          helperText={helper.shippingAddress?.province}
          placeholder="Province"
          require
        />
      </GridItem>
      <GridItem colSpan={2}>
        <Stack direction={"column"} gap={"1rem"} my={"2rem"}>
          <Text fontSize={"1.6rem"} fontWeight={500}>
            Note
          </Text>
          <Textarea
            value={form.shippingAddress.note}
            onChange={(val) =>
              setAddressValue("shippingAddress", "note", val.target.value)
            }
            placeholder="Notes about your order, e.g. special notes for delivery    "
            bg="bg.main"
            border="1px solid rgb(221, 228, 236)"
            color="text.main"
            _placeholder={{ color: "#777" }}
            fontSize={"1.6rem"}
            minH={"10rem"}
          />
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default FormInfo;
