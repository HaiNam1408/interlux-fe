import {
  Box,
  chakra,
  SystemStyleObject,
  Text,
  Flex,
  Stack,
} from "@chakra-ui/react";
import "./styles.scss";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { IcArrowDown } from "@assets/svgs";
import { Slider } from "@ark-ui/react";

interface ISlideCustom {
  isSeleted?: boolean;
  sx?: SystemStyleObject;
  maxH?: string;
  label: string;
  min: number;
  max: number;
  setValue: Dispatch<SetStateAction<[number, number]>>;
  value: [number, number];
}

const ChakraSlider = chakra(Slider.Root);
const ChakraTrack = chakra(Slider.Track);
const ChakraRange = chakra(Slider.Range);
const ChakraThumb = chakra(Slider.Thumb);

const SlideCustom = ({
  isSeleted = true,
  sx,
  maxH = "30rem",
  label,
  max,
  min,
  setValue,
  value,
}: ISlideCustom) => {
  const [isFocused, setIsFocused] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);

  const handleDocumentClick = (e: MouseEvent) => {
    if (slideRef.current && !slideRef.current.contains(e.target as Node)) {
      setIsFocused(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <Box ref={slideRef} className="slideCustom" sx={sx}>
      {/* Button để toggle */}
      <Box
        className={`slideCustom__input ${
          isFocused ? "border-[#3182ce]" : "#fff"
        }`}
        onClick={() => setIsFocused(!isFocused)}
        bg="#000000"
        border="1px solid #fff"
      >
        <Text
          fontWeight={400}
          lineHeight="1.6rem"
          fontSize="1.6rem"
          color={"gray.100"}
        >
          {label}
        </Text>
        {isSeleted && <IcArrowDown color="#fff" />}
      </Box>

      {/* Slide dropdown */}
      {isSeleted && (
        <Stack
          className={`slideCustom__slide ${
            isFocused ? "slideCustom__slide-show" : ""
          }`}
          bg="#1a1a1a"
          minH={"8rem"}
          maxH={maxH}
          border="1px solid #333"
          px={4}
          py={3}
          justifyContent={"center"}
        >
          {/* Min - Max values ở hai đầu */}
          <Flex justify="space-between" mb={3}>
            <Text fontSize="1.4rem" color="gray.400">
              {min}
            </Text>
            <Text fontSize="1.4rem" color="gray.400">
              {max}
            </Text>
          </Flex>

          <ChakraSlider
            width="100%"
            min={min}
            max={max}
            step={1}
            defaultValue={value}
            onValueChange={(val) => setValue(val.value as [number, number])}
          >
            <Slider.Control
              style={{
                position: "relative",
                width: "100%",
                height: "6px",
              }}
            >
              <ChakraTrack bg="gray.200" h="6px" borderRadius="full">
                <ChakraRange bg="blue.500" />
              </ChakraTrack>

              <ChakraThumb
                index={0}
                boxSize="16px"
                bg="blue.500"
                position="absolute"
                top="-100%"
                borderRadius={"50%"}
              >
                <Box
                  position="absolute"
                  top="-24px"
                  left="50%"
                  transform="translateX(-50%)"
                  fontSize="1.2rem"
                  color="white"
                  bg="gray.700"
                  px="1"
                  borderRadius="md"
                >
                  ${value[0]}
                </Box>
              </ChakraThumb>

              <ChakraThumb
                index={1}
                boxSize="16px"
                bg="blue.500"
                position="absolute"
                top="-100%"
                borderRadius={"50%"}
              >
                <Box
                  position="absolute"
                  top="-24px"
                  left="50%"
                  transform="translateX(-50%)"
                  fontSize="1.2rem"
                  color="white"
                  bg="gray.700"
                  px="1"
                  borderRadius="md"
                >
                  ${value[1]}
                </Box>
              </ChakraThumb>
            </Slider.Control>
          </ChakraSlider>
        </Stack>
      )}
    </Box>
  );
};

export default SlideCustom;
