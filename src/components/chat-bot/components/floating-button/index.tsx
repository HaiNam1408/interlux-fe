import { Center } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { FaTimes } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa6";

interface FloatingButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 106, 255, 0.7);
  }

  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(0, 106, 255, 0);
  }

  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 106, 255, 0);
  }
`;

const FloatingButton = ({ onClick, isOpen }: FloatingButtonProps) => {
  return (
    <Center
      width="6rem"
      height="6rem"
      borderRadius="50%"
      bg="#006aff"
      color="white"
      cursor="pointer"
      onClick={onClick}
      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
      transition="all 0.3s ease"
      animation={isOpen ? "none" : `${pulse} 2s infinite`}
      _hover={{
        transform: "scale(1.05)",
        bg: "#1b7aff",
      }}
    >
      {isOpen ? <FaTimes size="2rem" /> : <FaCommentDots size="2.4rem" />}
    </Center>
  );
};

export default FloatingButton;
