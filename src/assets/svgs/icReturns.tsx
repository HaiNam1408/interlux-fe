import { Box, Center } from "@chakra-ui/react";

const IcReturns = (props: any) => {
  return (
    <Center
      width={"5rem"}
      height={"5rem"}
      borderRadius={"50%"}minW={"5rem"}
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
        <path d="m18,7h2.666c-1.943-3.389-5.697-5.375-9.776-4.941C6.32,2.546,2.598,6.247,2.069,10.812c-.7,6.042,4.026,11.188,9.931,11.188,5.514,0,10-4.486,10-10,0-.553.447-1,1-1s1,.447,1,1c0,6.774-5.641,12.255-12.473,11.991C5.355,23.752.248,18.646.009,12.475-.256,5.642,5.226,0,12,0c4.104,0,7.805,2.034,9.995,5.345l.005-2.345c0-.553.447-1,1-1s1,.447,1,1v3.991c0,1.109-.899,2.009-2.009,2.009h-3.991c-.553,0-1-.447-1-1s.447-1,1-1Zm-6,12c.552,0,1-.447,1-1v-1c1.654,0,3-1.346,3-3,0-1.359-.974-2.51-2.315-2.733l-3.041-.506c-.373-.062-.644-.382-.644-.761,0-.552.449-1,1-1h2.268c.356,0,.688.191.867.501.274.478.886.642,1.366.364.478-.276.642-.888.364-1.366-.534-.925-1.53-1.499-2.598-1.499h-.268v-1c0-.553-.448-1-1-1s-1,.447-1,1v1c-1.654,0-3,1.346-3,3,0,1.359.974,2.51,2.315,2.733l3.04.506c.374.062.645.382.645.761,0,.552-.448,1-1,1h-2.268c-.356,0-.688-.191-.867-.501-.277-.479-.889-.643-1.366-.364-.479.276-.642.888-.365,1.366.535.925,1.531,1.499,2.598,1.499h.268v1c0,.553.448,1,1,1Z"></path>
      </Box>
    </Center>
  );
};

export default IcReturns;
