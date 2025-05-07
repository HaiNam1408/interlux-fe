import LanddingPage from "@pages/landding";
import TestCharkra from "@pages/test-charkra";
import { RouteProps } from "react-router-dom";
export const routers: RouteProps[] = [
  {
    path: "test",
    element: <TestCharkra />,
  },
];

export const layoutRouters: RouteProps[] = [
  {
    path: "",
    element: <LanddingPage />,
  },
];
