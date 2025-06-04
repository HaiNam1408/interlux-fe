import { IcLogo } from "@assets/svgs";
import {
  Button,
  Center,
  Grid,
  GridItem,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { setIsReset, setSubTotal } from "@redux/reducer/cart.reducer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// Hiệu ứng cho logo
const fadeInScale = keyframes`
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
`;

const OrderComplete = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { isDarkMode } = useDarkModeContext();

  useEffect(() => {
    dispatch(setIsReset());
    dispatch(setSubTotal(0));
  }, []);

  const bgButton = useColorModeValue("#fff", "#000");
  const colorText = useColorModeValue("#000", "#fff");

  return (
    <Grid
      width="100%"
      minH="80dvh"
      maxW="140rem"
      margin="0 auto"
      templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
      gap="4rem"
      px="2rem"
      py="4rem"
    >
      {/* LEFT - Message */}
      <GridItem>
        <Stack spacing="2rem" mt="4rem" maxW="60rem">
          <Text fontSize="3rem" fontWeight="bold">
            🎉 Thank you for your order!
          </Text>
          <Text fontSize="1.8rem">
            Your purchase at <strong>Interlux</strong> has been successfully
            processed. We’re preparing your order and will notify you once it’s
            shipped.
          </Text>
          <Text fontSize="1.6rem" color="gray.500">
            If you have any questions about your order, feel free to contact our
            support. A confirmation email has been sent to your inbox.
          </Text>
          <Button
            bg={bgButton}
            color={colorText}
            maxW="16rem"
            height="4.4rem"
            fontWeight="600"
            fontSize="1.4rem"
            boxShadow="md"
            borderRadius="md"
            _hover={{ opacity: 0.9 }}
            onClick={() => navigate("/")}
          >
            Back to Home
          </Button>
        </Stack>
      </GridItem>

      {/* RIGHT - Logo & More */}
      <GridItem>
        <Center height="100%">
          <Stack
            spacing="2rem"
            align="center"
            animation={`${fadeInScale} 0.8s ease-in-out`}
          >
            <IcLogo width="30rem" height="30rem" />
            <Text
              fontSize="1.4rem"
              color="gray.500"
              textAlign="center"
              maxW="30rem"
            >
              Discover premium furniture & interior designs only at{" "}
              <strong>Interlux</strong>. Thank you for choosing us to beautify
              your space!
            </Text>
          </Stack>
        </Center>
      </GridItem>
    </Grid>
  );
};

export default OrderComplete;
