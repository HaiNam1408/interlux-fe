import { ButtonGroup, IconButton, Button } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

interface PaginationProps {
  count: number;
  setPage: Dispatch<SetStateAction<number>>;
  page: number;
}

const Pagination = ({ count, page, setPage }: PaginationProps) => {
  const onPrev = () => setPage((p) => Math.max(1, p - 1));
  const onNext = () => setPage((p) => Math.min(count, p + 1));
  const onPageClick = (p: number) => setPage(p);

  const getPageItems = () => {
    const pages: (number | string)[] = [];

    pages.push(1);

    if (page > 3) {
      pages.push("...");
    }

    const start = Math.max(2, page - 1);
    const end = Math.min(count - 1, page + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (page < count - 2) {
      pages.push("...");
    }

    if (count > 1) {
      pages.push(count);
    }

    const filtered = pages.filter(
      (item, index) => pages.indexOf(item) === index
    );
    return filtered;
  };

  const pageItems = getPageItems();

  return (
    <ButtonGroup variant="outline" size="sm" width={"fit-content"}> 
      <IconButton
        aria-label="Previous page"
        icon={<LuChevronLeft />}
        onClick={onPrev}
        isDisabled={page === 1}
        bg="transparent"
        color="whiteAlpha.900"
        _hover={{ bg: "gray.700" }}
        _disabled={{ color: "gray.500" }}
        border={"1px solid rgba(255, 255, 255, 0.28)"}
        maxW={"5rem"}
        minW={"5rem"}
      />

      {pageItems.map((item, idx) =>
        typeof item === "number" ? (
          <Button
            key={idx}
            variant={item === page ? "solid" : "outline"}
            onClick={() => onPageClick(item)}
            bg={item === page ? "whiteAlpha.900" : "transparent"}
            color={item === page ? "gray.900" : "whiteAlpha.900"}
            borderColor="gray.700"
            _hover={{ bg: item === page ? "whiteAlpha.900" : "gray.700" }}
        minW={"5rem"}
            maxW={"5rem"}
          >
            {item}
          </Button>
        ) : (
          <Button
            key={idx}
            variant="outline"
            bg="transparent"
            color="whiteAlpha.700"
            cursor="default"
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
            pointerEvents="none"
            border={"none"}
        minW={"5rem"}
            maxW={"5rem"}
            
          >
            {item}
          </Button>
        )
      )}

      <IconButton
        aria-label="Next page"
        icon={<LuChevronRight />}
        onClick={onNext}
        isDisabled={page === count}
        bg="transparent"
        color="whiteAlpha.900"
        _hover={{ bg: "gray.700" }}
        _disabled={{ color: "gray.500" }}
        border={"1px solid rgba(255, 255, 255, 0.28)"}
        minW={"5rem"}
        maxW={"5rem"}
      />
    </ButtonGroup>
  );
};

export default Pagination;
