// components/GlobalNotification.tsx
import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@redux/store";
import { removeNotification } from "@redux/reducer/auth.reducer";

const GlobalNotification = () => {
  const notification = useSelector(
    (state: RootState) => state.auth.notification
  );
  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    if (notification) {
      toast({
        title: notification.title,
        status: notification.status,
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });

      dispatch(removeNotification());
    }
  }, [notification, dispatch, toast]);

  return null;
};

export default GlobalNotification;
