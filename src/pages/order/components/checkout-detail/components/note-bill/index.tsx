import { Stack, Text } from "@chakra-ui/react";
import { useDarkModeContext } from "@hooks/useDarkModeContext";
import { useNavigate } from "react-router-dom";

const NoteBill = () => {
  const { isDarkMode } = useDarkModeContext();
  const navigator = useNavigate();
  return (
    <>
      {[
        {
          title: "Returning customer?",
          label: "Click here to login",
          slug: "/my-account",
        },
        {
          title: "Have a coupon?",
          label: "Click here to enter your code",
          slug: "/checkout/cart",
        },
      ].map((item, index) => (
        <Stack
          direction={"row"}
          gap={".4rem"}
          bgColor={"bg.grey"}
          p={"1rem"}
          width={"fit-content"}
          height={"fit-content"}
          borderLeft={`5px solid ${isDarkMode ? "#161735" : "#e0e3ff"}`}
          key={index}
          mb={"1rem"}
        >
          <Text fontSize={"1.8rem"}>{item.title}</Text>
          <Text
            fontSize={"1.8rem"}
            cursor={"pointer"}
            transition={"all .2s ease"}
            _hover={{ color: "#339999" }}
            onClick={() => navigator(item.slug)}
          >
            {item.label}
          </Text>
        </Stack>
      ))}
    </>
  );
};

export default NoteBill;
