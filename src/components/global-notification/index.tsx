import { useEffect } from "react";
import { CloseButton, Stack, Text, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@redux/store";
import { removeNotification } from "@redux/reducer/auth.reducer";
import { FaCheckCircle } from "react-icons/fa";
import { MdError } from "react-icons/md";

const GlobalNotification = () => {
  const notification = useSelector(
    (state: RootState) => state.auth.notification
  );
  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    if (notification) {
      toast({
        position: "top-right",
        duration: 5000,
        isClosable: true,
        render: ({ onClose }) => (
          <Stack
            bg={
              notification?.status === "success"
                ? "green.500"
                : notification?.status === "error"
                ? "red.500"
                : "orange.400"
            }
            color="white"
            px="6"
            py="5"
            borderRadius="md"
            boxShadow="lg"
            maxW="50rem"
            direction={"row"}
            gap={"2rem"}
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack direction="row" alignItems="center" flex="1">
              {notification?.status === "success" ? (
                <FaCheckCircle fontSize={"2.4rem"} />
              ) : (
                <MdError fontSize={"2.4rem"} />
              )}
              <Stack spacing="0">
                <Text fontWeight="bold" fontSize={"1.6rem"} color={"#fff"}>
                  {notification?.title || "Notification"}
                </Text>
                {notification.message && (
                  <Text mt={1} fontSize={"1.4rem"} color={"#fff"}>
                    {notification.message}
                  </Text>
                )}
              </Stack>
            </Stack>

            <CloseButton
              size="lg"
              onClick={onClose}
              color="white"
              _hover={{ bg: "whiteAlpha.300" }}
            />
          </Stack>
        ),
      });

      dispatch(removeNotification());
    }
  }, [notification, dispatch, toast]);

  return null;
};

export default GlobalNotification;
