import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { IImage } from "@interfaces/IPanorama.interface";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface IMenuContent {
  listImage: IImage[];
  selectedIndex: number;
  selectedOption: number;
  setSelectedIndex: Dispatch<SetStateAction<number>>;
  setSelectedOption: Dispatch<SetStateAction<number>>;
  isShow: boolean;
}

const MenuContent = ({
  isShow,
  listImage,
  selectedIndex,
  selectedOption,
  setSelectedIndex,
  setSelectedOption,
}: IMenuContent) => {
  useEffect(() => {
    setSelectedOption(0);
  }, [selectedIndex]);

  const navigator = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!listImage.length) return;
    const hash = location.hash.slice(1);
    const decodedHash = decodeURIComponent(hash);

    setSelectedIndex(
      listImage.findIndex((item) => item.nameRoom === decodedHash)
    );
  }, [location, listImage]);

  return (
    <Stack
      direction={"column"}
      gap={"1.2rem"}
      width={"fit-content"}
      maxWidth={"90dvw"}
      height={"fit-content"}
      position={"absolute"}
      bottom={isShow ? "2rem" : "0rem"}
      left={"50%"}
      alignItems={"center"}
      style={{
        transform: "translateX(-50%)",
        transition: "all .8s ease-in-out",
        opacity: isShow ? 1 : 0,
        pointerEvents: isShow ? "auto" : "none",
      }}
    >
      {listImage[selectedIndex]?.options && (
        <Stack
          direction={"row"}
          gap={"2rem"}
          alignItems={"center"}
          height={"fit-content"}
        >
          <Text
            color="#F5F4F2"
            fontSize={"1.8rem"}
            lineHeight={"1.8rem"}
            fontWeight={600}
            mt={".6rem"}
          >
            OPTION
          </Text>
          {listImage[selectedIndex].options.map((_, index) => (
            <Stack
              key={index}
              direction={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              width={"3.4rem"}
              height={"3.4rem"}
              borderRadius={"50%"}
              bgColor={index === selectedOption ? "#93CBD2" : "#59646A"}
              onClick={() => setSelectedOption(index)}
              style={{
                transition: "all .3s ease",
                color: index === selectedOption ? "#59646A" : "#fff",
                fontSize: "2rem",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              {index + 1}
            </Stack>
          ))}
        </Stack>
      )}
      <Stack
        direction={"row"}
        gap={"2.4rem"}
        width={"fit-content"}
        alignItems={"flex-end"}
        justifyContent={"center"}
        minHeight={{
          xl: "10rem",
          lg: "9rem",
          md: "8rem",
          sm: "7rem",
          base: "6rem",
        }}
      >
        {listImage.map((item, index) => (
          <Box
            width={
              selectedIndex === index
                ? {
                    xl: "10rem",
                    lg: "9rem",
                    md: "8rem",
                    sm: "7rem",
                    base: "6rem",
                  }
                : {
                    xl: "8rem",
                    lg: "7rem",
                    md: "6rem",
                    sm: "5rem",
                    base: "4rem",
                  }
            }
            height={
              selectedIndex === index
                ? {
                    xl: "10rem",
                    lg: "9rem",
                    md: "8rem",
                    sm: "7rem",
                    base: "6rem",
                  }
                : {
                    xl: "8rem",
                    lg: "7rem",
                    md: "6rem",
                    sm: "5rem",
                    base: "4rem",
                  }
            }
            onClick={() => {
              setSelectedIndex(index);
              navigator(`#${item.nameRoom}`);
            }}
            borderRadius={"50%"}
            padding={".4rem"}
            overflow={"hidden"}
            key={index}
            sx={{
              transition: "all .3s ease",
              cursor: "pointer",
              background:
                selectedIndex === index
                  ? "linear-gradient(0deg, rgba(21, 24, 29, 0.6), rgba(21, 24, 29, 0.6)),radial-gradient(131% 131% at 50% 71%, rgba(159, 187, 155, 0.8) 0%, rgba(159, 187, 155, 0) 100%)"
                  : "#59646A66",
            }}
          >
            <Image
              width={"100%"}
              height={"100%"}
              src={item.src.replace(".jpg", ".webp")}
              style={{
                borderRadius: "50%",
              }}
            ></Image>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default MenuContent;
