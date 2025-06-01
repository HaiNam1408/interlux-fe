import { Stack } from "@chakra-ui/react";
import { ICart } from "@interfaces/ICart.interface";
import ItemCart from "../item-cart";
import { Dispatch, SetStateAction } from "react";

interface IContentCart {
  listCart?: ICart;
  setListCart: Dispatch<SetStateAction<ICart | undefined>>;
}

const ContentCart = ({ listCart, setListCart }: IContentCart) => {
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
        <ItemCart data={item} key={index} setListCart={setListCart} />
      ))}
    </Stack>
  );
};

export default ContentCart;
