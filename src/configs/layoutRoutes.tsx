import LanddingPage from "@pages/landding";
import Login from "@pages/login";
import ProductDetail from "@pages/product-detail";
import Products from "@pages/products";
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
  {
    path: "/my-account",
    element: <Login />,
  },
  {

    path: "/shop/:slug-category/:id-product",
    element: <ProductDetail />
  }, 
  {
    path: "/shop/:slug-category",
    element: <Products />,
  },
];
