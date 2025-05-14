import { Box, Center } from "@chakra-ui/react";

const IcSecure = (props: any) => {
  return (
    <Center
      width={"5rem"}
      height={"5rem"}minW={"5rem"}
      borderRadius={"50%"}
      _hover={{
        bg: "#fff",
        border: "1px solid #fff",
      }}
      bg={"#1a1a1a"}
      border={"1px solid #333"}
      cursor={"pointer"}
      transition={"all .3s ease"}
      role="group"
    >
      <Box
        as="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={props.color || "#fff"}
        width={props.size || "2.4rem"}
        height={props.size || "2.4rem"}
        transition="fill 0.2s ease"
        _groupHover={{ fill: "#1a1a1a" }}
      >
        <path d="M18.581,2.14,12.316.051a1,1,0,0,0-.632,0L5.419,2.14A4.993,4.993,0,0,0,2,6.883V12c0,7.563,9.2,11.74,9.594,11.914a1,1,0,0,0,.812,0C12.8,23.74,22,19.563,22,12V6.883A4.993,4.993,0,0,0,18.581,2.14ZM20,12c0,5.455-6.319,9.033-8,9.889-1.683-.853-8-4.42-8-9.889V6.883A3,3,0,0,1,6.052,4.037L12,2.054l5.948,1.983A3,3,0,0,1,20,6.883Z"></path>
        <path d="M15.3,8.3,11.112,12.5,8.868,10.16a1,1,0,1,0-1.441,1.386l2.306,2.4a1.872,1.872,0,0,0,1.345.6h.033a1.873,1.873,0,0,0,1.335-.553l4.272-4.272A1,1,0,0,0,15.3,8.3Z"></path>
      </Box>
    </Center>
  );
};

export default IcSecure;
