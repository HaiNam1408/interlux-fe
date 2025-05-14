import { Box, Stack } from "@chakra-ui/react";
import { useState } from "react";
import ListImage from "./components/list-image";
import MainImage from "./components/main-image";

const listImg = [
  "https://handdn.com/wp-content/uploads/2024/02/SHARK-050224007.jpg",
  "https://handdn.com/wp-content/uploads/2024/02/SHARK-050224008-610x610.jpg",
  "https://handdn.com/wp-content/uploads/2024/02/SHARK-050224009-610x610.jpg",
];

const ImageDetail = () => {
  const [selectedImg, setSelectedImg] = useState<string>(listImg[0]);

  return (
    <Box
      width={"58%"}
      height={"fit-content"}
      position={"sticky"}
      top={"5rem"}
      bottom={0}
      pr={"3rem"}
    >
      <Stack direction={"row"} width={"100%"} height={"fit-content"}>
        <ListImage
          setSelectedImg={setSelectedImg}
          selectedImg={selectedImg}
          listImg={listImg}
        />
        <MainImage
          setSelectedImg={setSelectedImg}
          selectedImg={selectedImg}
          listImg={listImg}
        />
      </Stack>
    </Box>
  );
};

export default ImageDetail;
