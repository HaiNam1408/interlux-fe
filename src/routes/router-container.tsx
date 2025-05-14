import { Route, Routes } from "react-router-dom";
import { layoutRouters, routers } from "@configs/layoutRoutes";
import Layout from "@pages/layout";
import NotFound from "@components/404-custom";
import useAutoLogin from "@hooks/useRemember";
import ChatBotWrapper from "@components/chat-bot-wrapper";

const RouterContainer = () => {
  useAutoLogin();

  return (
    <>
      <Routes>
        {routers.map((route) => (
          <Route key={route.path} {...route}></Route>
        ))}
        <Route path="" element={<Layout />}>
          {layoutRouters.map((route) => (
            <Route key={route.path} {...route}></Route>
          ))}
        </Route>
        {/* Route 404 - phải đặt ở cuối cùng */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ChatBotWrapper />
    </>
  );
};

export default RouterContainer;
