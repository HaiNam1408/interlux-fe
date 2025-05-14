import { useState } from "react";
import { Box } from "@chakra-ui/react";
import FloatingButton from "./components/floating-button";
import ChatBox from "./components/chat-box";

interface ChatBotProps {
  hide?: boolean;
}

const ChatBot = ({ hide = false }: ChatBotProps) => {
  const [isOpen, setIsOpen] = useState(false);

  if (hide) {
    return null;
  }

  const toggleChatBox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box position="fixed" bottom="2rem" right="2rem" zIndex={1000}>
      <FloatingButton onClick={toggleChatBox} isOpen={isOpen} />
      <ChatBox isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </Box>
  );
};

export default ChatBot;
