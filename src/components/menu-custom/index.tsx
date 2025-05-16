import { Box, SystemStyleObject, Text } from "@chakra-ui/react";
import "./styles.scss";
import { useEffect, useRef, useState } from "react";
import { IcArrowDown } from "@assets/svgs";

interface IMenuCustom {
  seletedItem?: string;
  setSelectedItem: (e: string) => void;
  listMenu: string[];
  isSeleted?: boolean;
  valueDefaul?: string;
  sx?: SystemStyleObject;
  onClick?: () => void;
  maxH?: string;
}

const MenuCustom = ({
  listMenu,
  seletedItem,
  setSelectedItem,
  isSeleted = true,
  valueDefaul,
  sx,
  onClick,
  maxH = "20rem",
}: IMenuCustom) => {
  const [isFocused, setIsFocused] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClick = (item: string) => {
    setSelectedItem(item);
    if (onClick) onClick();
  };

  const handleDocumentClick = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
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
    <Box ref={menuRef} className="menuCustom" sx={sx}>
      <Box
        className={`menuCustom__input ${isFocused ? "border-[#3182ce]" : "#fff"
          }`}
        onClick={() => setIsFocused(!isFocused)}
        bg="#1a1a1a"
        border="1px solid #333"
      >
        <Text
          fontWeight={400}
          lineHeight="1.6rem"
          fontSize="1.6rem"
          color={valueDefaul === seletedItem ? "gray.400" : "gray.100"}
        >
          {seletedItem ? seletedItem : valueDefaul}
        </Text>
        {isSeleted && <IcArrowDown color="#fff" />}
      </Box>

      {isSeleted && (
        <Box
          className={`menuCustom__menu ${isFocused && "menuCustom__menu-show"}`}
          onClick={() => setIsFocused(false)}
          bg="#1a1a1a"
          maxH={maxH}
          border="1px solid #333"
        >
          <Text
            onClick={() => setSelectedItem(valueDefaul || "")}
            fontWeight={400}
            lineHeight="1.6rem"
            fontSize="1.6rem"
            color="gray.400"
            className={`menuCustom__menuItem`}
            _hover={{ background: "rgba(255,255,255,0.08)" }}
          >
            Delete selection
          </Text>
          {listMenu.map((item, index) => (
            <Text
              key={index}
              onClick={() => handleClick(item)}
              fontWeight={400}
              lineHeight="1.6rem"
              fontSize="1.6rem"
              color="gray.100"
              className={`menuCustom__menuItem`}
              _hover={{ background: "rgba(255,255,255,0.08)" }}
            >
              {item}
            </Text>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default MenuCustom;
