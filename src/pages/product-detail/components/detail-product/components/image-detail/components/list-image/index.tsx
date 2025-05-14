import { Box, Image, Stack } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

interface IListImage {
  setSelectedImg: Dispatch<SetStateAction<string>>;
  selectedImg: string;
  listImg: string[];
}

const ListImage = ({ selectedImg, setSelectedImg, listImg }: IListImage) => {
  return (
    <Stack direction="column" width="20%" gap="2rem">
      {listImg.map((item, index) => (
        <Box
          role="group"
          key={index}
          width="100%"
          height="12rem"
          overflow="hidden"
          borderRadius=".8rem"
          cursor="pointer"
          onClick={() => setSelectedImg(item)}
        >
          <Image
            src={item}
            width="100%"
            height="100%"
            objectFit="cover"
            transition="all 0.5s ease"
            opacity={selectedImg === item ? 1 : 0.3}
            transform={selectedImg === item ? "translateY(0)" : "translateY(5px)"}
            borderRadius=".8rem"
            _groupHover={{
              opacity: 1,
              transform: "translateY(0)",
            }}
          />
        </Box>
      ))}
    </Stack>
  );
};

export default ListImage;
