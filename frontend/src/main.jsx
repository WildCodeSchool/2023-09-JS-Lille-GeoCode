import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home";
import Map from "./pages/Map/Map";
import Connection from "./pages/Connection/Connection";
import Subscribe from "./pages/Subscribe/Subscribe";
import Profile from "./pages/Profile/Profile";
import Car from "./pages/Car/Car";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/map",
    element: <Map />,
  },
  {
    path: "/connection",
    element: <Connection />,
  },
  {
    path: "/subscribe",
    element: <Subscribe />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/car",
    element: <Car />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
