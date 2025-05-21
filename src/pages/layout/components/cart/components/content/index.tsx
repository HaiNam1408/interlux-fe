import { Stack } from "@chakra-ui/react";
import { ICart } from "@interfaces/ICart.interface";
import ItemCart from "../item-cart";
import { Dispatch, SetStateAction } from "react";

interface IContentCart {
  listCart?: ICart;
  setListCart: Dispatch<SetStateAction<ICart | undefined>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const ContentCart = ({ listCart, setListCart, setLoading }: IContentCart) => {
  return (
    <Stack
      width={"100%"}
      height={"calc(100dvh - 27rem)"}
      overflow={"auto"}
      flex={1}
      px={"3rem"}
      gap={"2rem"}
    >
      {listCart?.items.map((item, index) => (
        <ItemCart
          data={item}
          key={index}
          setListCart={setListCart}
          setLoading={setLoading}
        />
      ))}
    </Stack>
  );
};

export default ContentCart;
