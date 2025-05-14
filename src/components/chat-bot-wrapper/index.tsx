import { useLocation } from "react-router-dom";
import ChatBot from "@components/chat-bot";

const ChatBotWrapper = () => {
  const location = useLocation();
  
  const isLoginPage = location.pathname === "/my-account";
  
  return <ChatBot hide={isLoginPage} />;
};

export default ChatBotWrapper;
