import { Grid, GridItem } from "@chakra-ui/react";
import BillDetails from "./components/bill-details";
import { useFormOrder } from "@hooks/useFormOrder";
import LoadingScreen from "@components/loading-screen";
import YourOrder from "./components/your-order";
import { ICart } from "@interfaces/ICart.interface";

interface ICheckoutDetail {
  listCart: ICart | undefined;
}

const CheckoutDetail = ({ listCart }: ICheckoutDetail) => {
  const { form, helper, setAddressValue, handleSubmit, loading, setFormValue } =
    useFormOrder(listCart);

  return (
    <>
      <Grid
        templateColumns="repeat(12, 1fr)"
        maxW={"140rem"}
        margin={"4rem auto"}
        width={"100%"}
      >
        <GridItem colSpan={7} px={"3rem"}>
          <BillDetails
            form={form}
            helper={helper}
            setAddressValue={setAddressValue}
          />
        </GridItem>
        <GridItem colSpan={5}>
          <YourOrder
            handleSubmit={handleSubmit}
            setAddressValue={setAddressValue}
            form={form}
            listCart={listCart}
            setFormValue={setFormValue}
          />
        </GridItem>
      </Grid>
      <LoadingScreen isLoading={loading} />
    </>
  );
};

export default CheckoutDetail;
