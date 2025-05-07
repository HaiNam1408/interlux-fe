import { Box, Center } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

interface IPaginationDis {
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}

const PaginationDis = ({ currentIndex, setCurrentIndex }: IPaginationDis) => {
  return (
    <Center
      flexDirection="row"
      width="100%"
      height="fit-content"
      alignItems="center"
      gap="1.2rem"
      position="absolute"
      bottom="8%"
      left={0}
      zIndex={10}
    >
      {Array.from({ length: 4 }).map((_, index) => {
        const isActive = index === currentIndex;

        return (
          <Center
            key={index}
            width={isActive ? "1.6rem" : "1rem"}
            height={isActive ? "1.6rem" : "1rem"}
            transition="all 0.3s ease"
            style={{
              border: isActive ? "3px solid transparent" : "3px solid #fff",
              borderRadius: "50%",
              cursor: "pointer",
              position: "relative",
            }}
            onClick={() => setCurrentIndex(index)}
          >
            {isActive && (
              <Box position="absolute" inset={"-3px"} zIndex={1}>
                <svg viewBox="0 0 24 24" width="100%" height="100%">
                  <circle
                    cx="12"
                    cy="12"
                    r="11"
                    stroke="#da291c"
                    strokeWidth="3"
                    fill="none"
                    className="animate-circle"
                  />
                </svg>
              </Box>
            )}
          </Center>
        );
      })}
    </Center>
  );
};

export default PaginationDis;
