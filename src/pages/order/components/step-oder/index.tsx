import { Center, Stack, Text } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

const StepOrder = () => {
  const location = useLocation();
  const navigator = useNavigate();

  return (
    <Stack
      width={"100%"}
      height={"fit-content"}
      direction={"row"}
      gap={"2rem"}
      justifyContent={"center"}
      maxW={"140rem"}
      margin={"0 auto"}
    >
      {[
        {
          label: "Shopping Cart",
          slug: "/checkout/cart",
        },
        {
          label: "Checkout details",
          slug: "/checkout/details",
        },
        {
          label: "Order Complete",
          slug: "/checkout/complete",
        },
      ].map((step, index) => (
        <Stack
          direction={"row"}
          gap={"0"}
          key={index}
          alignItems={"center"}
          onClick={() => {
            // if (index === 2) return;
            navigator(step.slug);
          }}
        >
          <Center
            width={"3.2rem"}
            height={"3.2rem"}
            mx=".9rem"
            bgColor={"bg.blueDark"}
            borderRadius={"50%"}
          >
            <Text
              fontSize={"2rem"}
              color={"text.white"}
              lineHeight={"100%"}
              fontFamily={"tinos"}
            >
              {index + 1}
            </Text>
          </Center>
          <Text
            fontSize={"2.4rem"}
            lineHeight={"100%"}
            opacity={location.pathname.includes(step.slug) ? "1" : ".4"}
            cursor={"pointer"}
            transition={"all .3s ease"}
            _hover={{
              opacity: 1,
            }}
          >
            {step.label}
          </Text>
        </Stack>
      ))}
    </Stack>
  );
};

export default StepOrder;
