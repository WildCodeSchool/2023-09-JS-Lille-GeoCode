import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home";
import Map from "./pages/Map/Map";
import Connection from "./pages/Connection/Connection";
import Subscribe from "./pages/Subscribe/Subscribe";
import UserInformations from "./pages/UserInformations/UserInformations";
import EditProfile from "./pages/EditProfile/EditProfile";
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
    loader: async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/chargepoint`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response;
      } catch (error) {
        console.error("Error fetching data:", error);
        return null;
      }
    },
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
    path: "/editprofile",
    element: <EditProfile />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/car",
    element: <Car />,
  },
  {
    path: "/userinformations",
    element: <UserInformations />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
