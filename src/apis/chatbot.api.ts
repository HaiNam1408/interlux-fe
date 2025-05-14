import axios from "axios";

const chatbotHttp = axios.create({
    baseURL: "https://interlux-chatbot.onrender.com",
    timeout: 60000,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
});

export const sendMessageToChatbot = async (message: string, userId?: string) => {
    const formData = new URLSearchParams();
    formData.append("message", message);
    if (userId) {
        formData.append("user_id", userId);
    }

    const response = await chatbotHttp.post("/chat", formData);
    return response.data as {
        response: string;
        user_id: string;
        history: { role: "user" | "bot"; content: string }[];
    };
};
