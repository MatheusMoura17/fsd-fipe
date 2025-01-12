import { HelloWorldPage } from "@/pages/hello-world";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HelloWorldPage/>,
  },
]);