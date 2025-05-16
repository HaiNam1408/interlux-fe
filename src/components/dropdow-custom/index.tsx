import { Box, Stack, SystemStyleObject, Text } from "@chakra-ui/react";
import "./styles.scss";
import { useEffect, useRef, useState } from "react";
import { IcArrowDown } from "@assets/svgs";
import InputCustom from "@components/input-custom";

interface IDropDownCustom {
  seletedItem?: string;
  setSelectedItem: (e: string) => void;
  listDropdown: string[];
  isSeleted?: boolean;
  sx?: SystemStyleObject;
  onClick?: () => void;
  maxH?: string;

  label: string;
  labelSearch: string;
  type?: string;
}

const DropDownCustom = ({
  listDropdown,
  setSelectedItem,
  isSeleted = true,
  sx,
  onClick,
  maxH = "30rem",
  label,
  labelSearch,
  type,
}: IDropDownCustom) => {
  const [search, setSearch] = useState<string>("");
  const [title, setTitle] = useState<string>(label)

  const [isFocused, setIsFocused] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClick = (item: string) => {
    setSelectedItem(item);
    setIsFocused(false);
    if (onClick) onClick();
    if(!item) {
      setTitle(label)
    } else {
      setTitle(item)
    }
  };

  const handleDocumentClick = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
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
    <Box ref={dropdownRef} className="dropdownCustom" sx={sx}>
      <Box
        className={`dropdownCustom__input ${isFocused ? "border-[#3182ce]" : "#fff"
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
          {title}
        </Text>
        {isSeleted && <IcArrowDown color="#fff" />}
      </Box>

      {isSeleted && (
        <Box
          className={`dropdownCustom__dropdown ${isFocused && "dropdownCustom__dropdown-show"
            }`}
          bg="#1a1a1a"
          maxH={maxH}
          border="1px solid #333"
        >
          <InputCustom
            setValue={setSearch}
            value={search}
            placeholder={labelSearch}
          />

          <Box height={"1rem"} />
          <Stack
            direction={"row"}
            gap={"1.2rem"}
            alignItems={"center"}
            _hover={{ background: "rgba(255,255,255,0.08)" }}
            height={"4rem"}
            p={"1rem"}
            my={"0"}
            onClick={() => handleClick("")}

          >
            <Text
              fontWeight={400}
              lineHeight="1.6rem"
              fontSize="1.6rem"
              color="gray.100"
              textTransform={"capitalize"}
            >
              Delete selection
            </Text>
          </Stack>
          {listDropdown
            .filter((item) => item.includes(search))
            .map((item, index) => (
              <Stack
                direction={"row"}
                gap={"1.2rem"}
                alignItems={"center"}
                _hover={{ background: "rgba(255,255,255,0.08)" }}
                height={"4rem"}
                p={type === "color" ? "0" : "1rem"}
                my={type === "color" ? ".4rem" : "0"}
                onClick={() => handleClick(item)}
                key={index}
              >
                {type === "color" && (
                  <Box
                    width={"4rem"}
                    height={"4rem"}
                    p={".4rem"}
                    border="1px solid #cecece"
                    bgColor={"#fff"}
                  >
                    <Box width={"100%"} h={"100%"} bgColor={item}></Box>
                  </Box>
                )}
                <Text
                  key={index}
                  fontWeight={400}
                  lineHeight="1.6rem"
                  fontSize="1.6rem"
                  color="gray.100"
                  textTransform={"capitalize"}
                >
                  {item}
                </Text>
              </Stack>
            ))}
        </Box>
      )}
    </Box>
  );
};

export default DropDownCustom;
