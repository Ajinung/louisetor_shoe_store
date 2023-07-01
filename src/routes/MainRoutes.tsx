import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/layout/homelayout/HomeLayout";

import Homescreen from "../pages/home/Homescreen";

export const element = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Homescreen />,
      },
    ],
  },
]);
