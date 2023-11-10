import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import App from "./App";
import Products from "./Products";
import Product from "./Product";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const queryClient = new QueryClient();

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/products",
    element: <Products />
  },
  {
    path: "/products/:productId",
    element: <Product />
  }
]);

root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={routes} />
  </QueryClientProvider>
);
