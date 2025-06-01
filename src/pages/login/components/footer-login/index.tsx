import { Stack, Text } from "@chakra-ui/react";
import { MdShoppingCart } from "react-icons/md";
import { IoShieldCheckmark } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { MdWeekend } from "react-icons/md";
import { useDarkModeContext } from "@hooks/useDarkModeContext";

const FooterLogin = () => {
  const { isDarkMode } = useDarkModeContext();

  return (
    <Stack
      width={"100%"}
      height={"fit-content"}
      p={"1.6rem 2rem"}
      direction={"row"}
      gap={"2rem"}
      justifyContent={"space-between"}
      maxW={"140rem"}
      margin={"0 auto"}
      bgColor={"bg.main"}
    >
      {[
        {
          title: "Free Global Shipping",
          sub: "Free shipping for all orders over $450.",
          ic: (
            <MdShoppingCart
              color={!isDarkMode ? "#fff" : "#000"}
              fontSize={"5rem"}
            />
          ),
        },
        {
          title: "Warranty",
          sub: "Exchange/return within 30 days.",
          ic: (
            <IoShieldCheckmark
              color={!isDarkMode ? "#fff" : "#000"}
              fontSize={"5rem"}
            />
          ),
        },
        {
          title: "Get In Touch",
          sub: "24/7 answer all questions",
          ic: (
            <MdEmail color={!isDarkMode ? "#fff" : "#000"} fontSize={"5rem"} />
          ),
        },
        {
          title: "Bespoke Watch Strap",
          sub: "100% Handmade in VietNam",
          ic: (
            <MdWeekend
              color={!isDarkMode ? "#fff" : "#000"}
              fontSize={"5rem"}
            />
          ),
        },
      ].map((item, index) => (
        <Stack
          key={index}
          direction={"row"}
          gap={"1.2rem"}
          width={"fit-content"}
          height={"fit-content"}
          alignItems={"center"}
        >
          {item.ic}
          <Stack
            direction={"column"}
            justifyContent={"space-between"}
            width={"fit-content"}
            maxW={"30rem"}
          >
            <Text
              fontSize={"1.6rem"}
              fontWeight={700}
              overflow={"hidden"}
              whiteSpace={"nowrap"}
              textOverflow={"ellipsis"}
            >
              {item.title}
            </Text>
            <Text
              fontSize={"1.2rem"}
              fontWeight={400}
              overflow={"hidden"}
              whiteSpace={"nowrap"}
              textOverflow={"ellipsis"}
            >
              {item.sub}
            </Text>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

export default FooterLogin;
