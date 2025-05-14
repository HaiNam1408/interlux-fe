import { Stack, Text } from "@chakra-ui/react";
import FeatureProduct from "../feature-product";
import {
  IcChatBoxDou,
  IcPay1,
  IcPay2,
  IcPay3,
  IcPay4,
  IcPay5,
  IcPay6,
  IcPay7,
  IcPay8,
} from "@assets/svgs";

const ContentSub = () => {
  return (
    <Stack direction={"column"} gap={"0"} width={"100%"}>
      <FeatureProduct />
      <Stack
        direction={"row"}
        gap={".4rem"}
        borderTop={"1px solid #ccc"}
        pt={"2rem"}
      >
        [<IcPay1 />,<IcPay2 />,<IcPay3 />,<IcPay4 />,<IcPay5 />,<IcPay6 />,
        <IcPay7 />,<IcPay8 />]
      </Stack>

      <Stack
        width={"100%"}
        height={"fit-content"}
        p={"2rem"}
        bgColor={"#1a1a1a"}
        direction={"row"}
        alignItems={"center"}
        mt={"2rem"}
        gap={"2rem"}
      >
        <IcChatBoxDou size="4rem" />
        <Text fontSize="1.4rem">
          <strong>Need help with sizing?</strong>
          <br />
          If you have any other questions or need assistance, please don't
          hesitate to reach out to our team via email at
          <br />
          <strong>support@interlux.com</strong>
        </Text>
      </Stack>
    </Stack>
  );
};

export default ContentSub;
