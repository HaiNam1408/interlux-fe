/* eslint-disable @typescript-eslint/no-explicit-any */
import { deleteItemCart, updateItemCart } from "@apis/cart.api";
import {
  Button,
  Center,
  GridItem,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  useNumberInput,
} from "@chakra-ui/react";
import { useDarkModeContext } from "@hooks/useDarkModeContext";
import { ICartItem } from "@interfaces/ICart.interface";
import { setNotification } from "@redux/reducer/auth.reducer";
import { setIsReset } from "@redux/reducer/cart.reducer";
import { useEffect, useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";

interface IChildCart {
  data: ICartItem;
}

const ChildCart = ({ data }: IChildCart) => {
  const dispatch = useDispatch();
  const { isDarkMode } = useDarkModeContext();
  const [quantity, setQuantity] = useState(data.quantity);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setQuantity(data.quantity);
  }, [data.quantity]);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      if (quantity !== data.quantity) {
        handleUpdate();
      }
    }, 500);
  }, [quantity]);

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      value: quantity,
      onChange: (_, valueAsNumber) => setQuantity(valueAsNumber),
      min: 1,
      max: 200,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  const handleDelete = async () => {
    try {
      await deleteItemCart(data.id);
      dispatch(setIsReset());
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
    }
  };

  const handleUpdate = async () => {
    try {
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
    }
  };

  return (
    <>
      <GridItem
        colSpan={6}
        borderBottom={"1px solid #ececec"}
        minH={"13rem"}
        py={"1.5rem"}
      >
        <Stack
          width={"100%"}
          height={"100%"}
          direction={"row"}
          gap={"1.4rem"}
          alignItems={"center"}
        >
          <Center
            width={"2.6rem"}
            height={"2.4rem"}
            borderRadius={".4rem"}
            border={`2px solid ${isDarkMode ? "#000" : "#fff"}`}
            cursor={"pointer"}
            onClick={handleDelete}
          >
            <IoCloseSharp
              color={isDarkMode ? "#000" : "#fff"}
              fontSize={"2rem"}
            />
          </Center>
          <Image
            width={"7.6rem"}
            height={"7.6rem"}
            objectFit={"cover"}
            src={data.product.images[0].filePath}
          ></Image>
          <Stack width={"100%"} direction={"column"} gap={".4rem"}>
            <Text fontSize={"1.6rem"}>{data.product.title}</Text>
            {(data.product.attributeValues || []).map((item, index) => (
              <Text fontSize={"1.4rem"} key={index}>
                {index === 0 ? "Color" : index === 1 ? "Material" : "Size"}:
                <strong> {item.attributeValue.name}</strong>
              </Text>
            ))}
          </Stack>
        </Stack>
      </GridItem>
      <GridItem colSpan={2} borderBottom={"1px solid #ececec"} py={"1.5rem"}>
        <Center width={"100%"} height={"100%"}>
          <Text fontSize={"1.6rem"} color={"text.main"} fontWeight={500}>
            $
            {data.product.finalPrice.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Text>
        </Center>
      </GridItem>
      <GridItem colSpan={2} borderBottom={"1px solid #ececec"} py={"1.5rem"}>
        <Center width={"100%"} height={"100%"}>
          <HStack maxW="110px">
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
            >
              +
            </Button>
          </HStack>
        </Center>
      </GridItem>
      <GridItem colSpan={2} borderBottom={"1px solid #ececec"} py={"1.5rem"}>
        <Center width={"100%"} height={"100%"} position={"relative"}>
          <Text fontSize={"1.6rem"} color={"text.main"} fontWeight={500}>
            $
            {(data.product.finalPrice * quantity).toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Text>
        </Center>
      </GridItem>
    </>
  );
};

export default ChildCart;
