/* eslint-disable @typescript-eslint/no-explicit-any */
import { deleteItemCart, updateItemCart } from "@apis/cart.api";
import {
  Button,
  Center,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  useNumberInput,
} from "@chakra-ui/react";
import { ICart, ICartItem } from "@interfaces/ICart.interface";
import { setNotification } from "@redux/reducer/auth.reducer";
import { setIsReset } from "@redux/reducer/cart.reducer";
import { Dispatch, SetStateAction } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";

interface ItemCart {
  data: ICartItem;
  setListCart: Dispatch<SetStateAction<ICart | undefined>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const ItemCart = ({ data, setListCart, setLoading }: ItemCart) => {
  const dispatch = useDispatch();
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: data.quantity,
      min: 1,
      max: 200,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  const handleDelete = async () => {
    setLoading(true);
    try {
      const result = await deleteItemCart(data.id);
      setListCart(result.data.data);
      dispatch(
        setNotification({
          status: "success",
          title: "Xoá sản phẩm thành công.",
        })
      );
    } catch (error: any) {
      dispatch(
        setNotification({
          status: "warning",
          title: error.data.response.message,
        })
      );
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    setLoading(true);

    try {
      const quantity = parseInt(input.value, 10);

      await updateItemCart(data.id, quantity);
      dispatch(setIsReset());
      dispatch(
        setNotification({
          status: "success",
          title: "Cập nhật sản phẩm thành công.",
        })
      );
    } catch (error: any) {
      dispatch(
        setNotification({
          status: "warning",
          title: error.data.response.message,
        })
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack width={"100%"} direction={"row"} gap={"1rem"}>
      <Image
        width={"6rem"}
        height={"6rem"}
        objectFit={"cover"}
        src={data.product.images[0].filePath}
      ></Image>
      <Stack width={"100%"} direction={"column"} gap={"1rem"}>
        <Stack width={"100%"} direction={"row"} gap={"2rem"}>
          <Stack width={"100%"} direction={"column"} gap={"1rem"}>
            <Text fontSize={"1.6rem"} color={"#000"}>
              {data.product.title}
            </Text>
            {(data.product.attributeValues || []).map((item, index) => (
              <Text fontSize={"1.4rem"} color={"#000"} key={index}>
                {index === 0 ? "Color" : index === 1 ? "Material" : "Size"}:
                <strong> {item.attributeValue.name}</strong>
              </Text>
            ))}
          </Stack>
          <Center
            width={"2.6rem"}
            height={"2.4rem"}
            borderRadius={".4rem"}
            border={"2px solid #161375"}
            cursor={"pointer"}
            onClick={handleDelete}
          >
            <IoCloseSharp color="#161375" fontSize={"2rem"} />
          </Center>
        </Stack>
        <Stack
          width={"100%"}
          direction={"row"}
          gap={"2rem"}
          justifyContent={"space-between"}
        >
          <HStack maxW="100px">
            <Button
              {...dec}
              bg="#333"
              color="#fff"
              _hover={{ bg: "#444" }}
              transition={"all .3s ease"}
              fontSize={"2.4rem"}
              sx={{
                minW: "2rem",
                maxW: "3rem",
              }}
              height={"3rem"}
              onClick={handleUpdate}
            >
              -
            </Button>
            <Input
              {...input}
              textAlign="center"
              bg="#1a1a1a"
              color="#fff"
              border="1px solid #444"
              maxW="80px"
              fontSize={"1.8rem"}
              h={"3rem"}
            />
            <Button
              {...inc}
              bg="#333"
              color="#fff"
              _hover={{ bg: "#444" }}
              transition={"all .3s ease"}
              fontSize={"2.4rem"}
              sx={{
                minW: "2rem",
                maxW: "3rem",
              }}
              height={"3rem"}
              onClick={handleUpdate}
            >
              +
            </Button>
          </HStack>
          <Text fontSize={"1.6rem"} color={"#161735"} fontWeight={600}>
            $
            {data.product.price.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ItemCart;
