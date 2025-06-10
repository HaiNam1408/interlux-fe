import {
  Box,
  Flex,
  Input,
  Text,
  IconButton,
  VStack,
  HStack,
  Avatar,
  Spinner,
  useColorModeValue,
  useToast
} from "@chakra-ui/react";
import { FaPaperPlane, FaRobot, FaTimes } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles.css";
import { sendMessageToChatbot } from "@apis/chatbot.api";
import ProductCard from "../product-card";
import MarkdownMessage from "../markdown-message";
import Cookies from "js-cookie";

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

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
  products?: Product[];
}

interface ChatBoxProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatBox = ({ isOpen, onClose }: ChatBoxProps) => {
  const navigate = useNavigate();
  const toast = useToast();

  const isLoggedIn = () => {
    const token = Cookies.get("token");
    return !!token;
  };

  const loadChatHistory = () => {
    if (!isLoggedIn()) {
      return [
        {
          text: "Hello! I am the assistant AI of Interlux. May I help you today?",
          isUser: false,
          timestamp: new Date(),
        },
      ];
    }

    try {
      const savedMessages = localStorage.getItem("chatbot_messages");

      if (savedMessages) {
        const parsedMessages = JSON.parse(savedMessages).map((msg: Message & { timestamp: string }) => ({
          ...msg,
          timestamp: new Date(msg.timestamp),
        }));
        return parsedMessages;
      }
    } catch (error) {
      console.error("Error loading chat history:", error);
    }

    return [
      {
        text: "Hello! I am the assistant AI of Interlux. May I help you today?",
        isUser: false,
        timestamp: new Date(),
      },
    ];
  };

  const [messages, setMessages] = useState<Message[]>(() => {
    const initialMessages = loadChatHistory();
    return initialMessages;
  });
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState<string>(() => {
    return isLoggedIn() ? localStorage.getItem("chatbot_userId") || "" : "";
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const primaryColor = "#1a365d";
  const accentColor = "#3182ce";
  const bgColor = useColorModeValue("#f8fafc", "#1a202c");
  const cardBgColor = useColorModeValue("white", "#2d3748");
  const textColor = useColorModeValue("#2d3748", "white");

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

 useEffect(() => {
    if (isLoggedIn()) {
      localStorage.setItem("chatbot_messages", JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    if (isLoggedIn() && userId) {
      localStorage.setItem("chatbot_userId", userId);
    }
  }, [userId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (inputValue.trim() === "") return;

    const userMessage: Message = {
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await sendMessageToChatbot(inputValue, userId);

      if (response.user_id) {
        setUserId(response.user_id);
      }

      const aiResponse: Message = {
        text: response.response,
        isUser: false,
        timestamp: new Date(),
        products: response.data || [],
      };
      setMessages((prev) => [...prev, aiResponse]);
    } catch (error) {
      console.error("Error sending message to chatbot:", error);
      toast({
        title: "Error",
        description: "Failed to get response from AI. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });

      const fallbackResponse: Message = {
        text: "I'm sorry, I'm having trouble connecting to the server. Please try again later.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, fallbackResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleProductClick = (id: string) => {
    navigate(`/shop/all/${id}`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Box
      position="absolute"
      bottom="8rem"
      right="0"
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      width={["90%", "46rem"]}
      height={["80%", "68rem"]}
      bg={"#f8fafc"}
      borderRadius="1rem"
      boxShadow="0 10px 30px rgba(0, 0, 0, 0.15)"
      overflow="hidden"
      className="slideUp"
      zIndex={1000}
      border="1px solid"
      borderColor="gray.100"
    >
      {/* Header*/}
      <Flex
        bgGradient={`linear(to-r, ${primaryColor}, ${accentColor})`}
        color="white"
        p="1rem"
        alignItems="center"
        justifyContent="space-between"
        borderBottom="1px solid"
        borderColor="gray.100"
      >
        <HStack spacing="1.2rem">
          <Box
            bg="white"
            p="0.8rem"
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <FaRobot size="1.8rem" color={accentColor} />
          </Box>
          <VStack align="flex-start" spacing="0.2rem">
            <Text fontWeight="bold" fontSize="1.8rem" letterSpacing="tight" color={"#fff"}>
              Interlux AI Assistant
            </Text>
            <Text fontSize="1.2rem" opacity="0.9" color={isLoggedIn() ? "#90EE90" : "#FFD700"}>
              {isLoggedIn() ? "✓ Đã đăng nhập - Lịch sử được lưu" : "⚠ Chưa đăng nhập - Lịch sử tạm thời"}
            </Text>
          </VStack>
        </HStack>
        <IconButton
          aria-label="Close chat"
          icon={<FaTimes />}
          variant="ghost"
          color="white"
          size="lg"
          _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
          onClick={onClose}
        />
      </Flex>

      {/* Messages Container */}
      <VStack
        height="calc(100% - 16rem)"
        overflowY="auto"
        p="1rem"
        spacing="2rem"
        align="stretch"
        bg={bgColor}
        sx={{
          "&::-webkit-scrollbar": {
            width: "0.4rem",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "gray.300",
            borderRadius: "full",
          },
        }}
      >
        {messages.map((message, index) => (
          <VStack
            key={index}
            align={message.isUser ? "flex-end" : "flex-start"}
            spacing="1rem"
            w="100%"
          >
            <Flex
              alignSelf={message.isUser ? "flex-end" : "flex-start"}
              flexDirection={message.isUser ? "row-reverse" : "row"}
              gap="0.8rem"
              w="100%"
            >
              {!message.isUser && (
                <Avatar
                  size="md"
                  bg={accentColor}
                  icon={<FaRobot color="white" />}
                  boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
                  border="2px solid white"
                />
              )}
              <Box
                maxWidth="80%"
                p="1rem"
                borderRadius={
                  message.isUser
                    ? "2rem 0.5rem 2rem 2rem"
                    : "0.5rem 2rem 2rem 2rem"
                }
                bg={message.isUser ? accentColor : cardBgColor}
                color={textColor}
                boxShadow="0 5px 15px rgba(0, 0, 0, 0.05)"
                border="1px solid"
                borderColor={message.isUser ? "transparent" : "gray.100"}
              >
                <MarkdownMessage
                  content={message.text}
                  isUser={message.isUser}
                />
                <Text
                  fontSize="1.1rem"
                  color={message.isUser ? "whiteAlpha.700" : "gray.500"}
                  textAlign="right"
                  borderColor={message.isUser ? "whiteAlpha.200" : "gray.100"}
                >
                  {new Intl.DateTimeFormat("vi-VN", {
                    hour: "2-digit",
                    minute: "2-digit",
                  }).format(message.timestamp)}
                </Text>
              </Box>
              {message.isUser && (
                <Avatar
                  size="md"
                  name="User"
                  bg="gray.500"
                  boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
                  border="2px solid white"
                />
              )}
            </Flex>

            {/* Product Cards */}
            {!message.isUser &&
              message.products &&
              message.products.length > 0 && (
                <Flex
                  gap="0.8rem"
                  overflowX="auto"
                  w="100%"
                  pb="0.5rem"
                  pl="4rem"
                  sx={{
                    "&::-webkit-scrollbar": {
                      height: "0.3rem",
                    },
                    "&::-webkit-scrollbar-track": {
                      background: "gray.100",
                      borderRadius: "full",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      background: "gray.300",
                      borderRadius: "full",
                      "&:hover": {
                        background: "gray.400",
                      },
                    },
                  }}
                >
                  {message.products.map((product) => (
                    <Box key={product.id} flexShrink={0}>
                      <ProductCard
                        product={product}
                        onProductClick={handleProductClick}
                      />
                    </Box>
                  ))}
                </Flex>
              )}
          </VStack>
        ))}
        {isLoading && (
          <Flex alignSelf="flex-start" gap="1.2rem">
            <Avatar
              size="md"
              bg={accentColor}
              icon={<FaRobot color="white" />}
              boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
              border="2px solid white"
            />
            <Flex
              p="1rem"
              borderRadius="0.5rem 2rem 2rem 2rem"
              bg={cardBgColor}
              alignItems="center"
              boxShadow="0 5px 15px rgba(0, 0, 0, 0.05)"
              border="1px solid"
              borderColor="gray.100"
            >
              <Spinner
                size="sm"
                color={accentColor}
                mr="1.2rem"
                thickness="2px"
              />
              <Text fontSize="1.5rem" color="gray.500">
                Typing...
              </Text>
            </Flex>
          </Flex>
        )}
        <div ref={messagesEndRef} />
      </VStack>

      {/* Input Area*/}
      <Flex
        p="1rem"
        alignItems="center"
        bg={cardBgColor}
        borderTop="1px solid"
        borderColor="gray.100"
      >
        <Input
          ref={inputRef}
          placeholder="Type your message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          size="lg"
          fontSize="1.5rem"
          borderRadius="full"
          mr="1rem"
          py="2rem"
          flex={1}
          w={"80%"}
          boxShadow="0 2px 10px rgba(0, 0, 0, 0.05)"
          border="1px solid"
          borderColor="gray.200"
          _focus={{
            boxShadow: `0 0 0 1px ${accentColor}`,
            borderColor: accentColor,
          }}
          _hover={{
            borderColor: "gray.300",
          }}
        />
        <IconButton
          aria-label="Send message"
          icon={<FaPaperPlane />}
          colorScheme="blue"
          size="lg"
          borderRadius="full"
          w={16}
          h={16}
          onClick={handleSendMessage}
          isDisabled={inputValue.trim() === ""}
          p="1rem"
          boxShadow="0 4px 12px rgba(49, 130, 206, 0.3)"
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "0 6px 16px rgba(49, 130, 206, 0.4)",
          }}
          _active={{
            transform: "translateY(0)",
            boxShadow: "0 2px 8px rgba(49, 130, 206, 0.3)",
          }}
          transition="all 0.2s ease"
        />
      </Flex>
    </Box>
  );
};

export default ChatBox;
