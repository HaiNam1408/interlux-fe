import {
  Box,
  Image,
  Text,
  Badge,
  Button,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  percentOff: number;
  image: string;
  category: string;
  slug: string;
  sold: number;
}

interface ProductCardProps {
  product: Product;
  onProductClick: (slug: string) => void;
}

const ProductCard = ({ product, onProductClick }: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  return (
    <Box
      bg="white"
      borderRadius="0.8rem"
      overflow="hidden"
      boxShadow="0 2px 8px rgba(0, 0, 0, 0.08)"
      border="1px solid"
      borderColor="gray.100"
      transition="all 0.2s ease"
      cursor="pointer"
      _hover={{
        transform: "translateY(-1px)",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.12)",
        borderColor: "blue.200",
      }}
      onClick={() => onProductClick(product.slug)}
      maxW="40rem"
      w="100%"
      minW="30rem"
    >
      <HStack spacing="1rem" align="stretch" p="1rem">
        <Box position="relative" w="12rem" flexShrink={0}>
          <Image
            src={product.image}
            alt={product.title}
            w="100%"
            h="100%"
            objectFit="cover"
            borderRadius="md"
          />
          {product.percentOff > 0 && (
            <Badge
              position="absolute"
              top="0.5rem"
              right="0.5rem"
              colorScheme="red"
              fontSize="0.8rem"
              px="0.5rem"
              py="0.2rem"
              borderRadius="md"
            >
              -{product.percentOff}%
            </Badge>
          )}
        </Box>

        <VStack
          align="flex-start"
          justify="space-between"
          spacing="0.6rem"
          flex="1"
        >
          <Text
            fontSize="1.2rem"
            fontWeight="600"
            color="gray.800"
            noOfLines={2}
            lineHeight="1.3"
          >
            {product.title}
          </Text>

          <HStack justify="space-between" w="100%">
            <Badge
              colorScheme="blue"
              fontSize="0.8rem"
              px="0.6rem"
              py="0.1rem"
              borderRadius="md"
              variant="subtle"
            >
              {product.category}
            </Badge>
            <Text fontSize="0.9rem" color="gray.500">
              Đã bán: {product.sold}
            </Text>
          </HStack>

          <VStack align="flex-start" spacing="0.2rem">
            <Text fontSize="1.4rem" fontWeight="bold" color="blue.600">
              {formatPrice(product.price)}
            </Text>
            {product.originalPrice > product.price && (
              <Text
                fontSize="1rem"
                color="gray.400"
                textDecoration="line-through"
              >
                {formatPrice(product.originalPrice)}
              </Text>
            )}
          </VStack>

          <Button
            leftIcon={<FaShoppingCart />}
            colorScheme="blue"
            size="sm"
            borderRadius="md"
            fontSize="1rem"
            h="2.6rem"
            onClick={(e) => {
              e.stopPropagation();
              onProductClick(product.slug);
            }}
            _hover={{
              transform: "scale(1.02)",
            }}
          >
            Xem chi tiết
          </Button>
        </VStack>
      </HStack>
    </Box>
  );
};

export default ProductCard;
