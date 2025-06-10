import { Box } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./styles.css";

interface MarkdownMessageProps {
  content: string;
  isUser: boolean;
}

const MarkdownMessage = ({ content, isUser }: MarkdownMessageProps) => {
  return (
    <Box
      className="markdown-content"
      fontSize="1.5rem"
      sx={{
        "& p": {
          color: isUser ? "white" : "black",
          fontSize: "1.5rem",
        },
        "& ul, & ol": {
          color: isUser ? "white" : "black",
        },
        "& li": {
          color: isUser ? "white" : "black",
          fontSize: "1.5rem",
        },
        "& strong": {
          color: isUser ? "white" : "black",
        },
        "& em": {
          color: isUser ? "white" : "black",
        },
        "& code": {
          backgroundColor: isUser ? "rgba(255, 255, 255, 0.15)" : "#f7fafc",
          color: isUser ? "rgba(255, 255, 255, 0.95)" : "#2d3748",
          border: isUser ? "1px solid rgba(255, 255, 255, 0.2)" : "1px solid #e2e8f0",
        },
        "& pre": {
          backgroundColor: isUser ? "rgba(255, 255, 255, 0.08)" : "#f7fafc",
          border: isUser ? "1px solid rgba(255, 255, 255, 0.15)" : "1px solid #e2e8f0",
        },
        "& pre code": {
          color: isUser ? "rgba(255, 255, 255, 0.9)" : "#2d3748",
          backgroundColor: "transparent !important",
          border: "none !important",
        },
        "& blockquote": {
          borderLeftColor: isUser ? "rgba(255, 255, 255, 0.4)" : "#3182ce",
          color: isUser ? "rgba(255, 255, 255, 0.85)" : "#4a5568",
          backgroundColor: isUser ? "rgba(255, 255, 255, 0.05)" : "#f7fafc",
          padding: "0.5rem 1rem",
          borderRadius: "0.25rem",
        },
        "& h1, & h2, & h3, & h4, & h5, & h6": {
          color: isUser ? "white" : "black",
        },
        "& a": {
          color: isUser ? "rgba(255, 255, 255, 0.9)" : "#3182ce",
          "&:hover": {
            color: isUser ? "white" : "#2c5aa0",
          },
        },
        "& table": {
          fontSize: "1.4rem",
        },
        "& th, & td": {
          borderColor: isUser ? "rgba(255, 255, 255, 0.2)" : "#e2e8f0",
          color: isUser ? "white" : "black",
        },
        "& th": {
          backgroundColor: isUser ? "rgba(255, 255, 255, 0.1)" : "#f7fafc",
        },
        "& hr": {
          borderTopColor: isUser ? "rgba(255, 255, 255, 0.3)" : "#e2e8f0",
        },
      }}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          p: ({ children }) => (
            <Box as="p" mb={children ? "0.5rem" : 0}>
              {children}
            </Box>
          ),
          ul: ({ children }) => (
            <Box as="ul" ml="2rem" mb="0.8rem">
              {children}
            </Box>
          ),
          ol: ({ children }) => (
            <Box as="ol" ml="2rem" mb="0.8rem">
              {children}
            </Box>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </Box>
  );
};

export default MarkdownMessage;
