import React from "react";
import ReactDOM from "react-dom/client";
import PropTypes from "prop-types";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import useStore, { AuthProvider } from "./store/AuthProvider";

import Home from "./pages/Home/Home";
import Map from "./pages/Map/Map";
import Connection from "./pages/Connection/Connection";
import Subscribe from "./pages/Subscribe/Subscribe";
import UserInformations from "./pages/UserInformations/UserInformations";
import EditProfile from "./pages/EditProfile/EditProfile";
import Profile from "./pages/Profile/Profile";

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
    element: (
      <PublicRoute>
        <Connection />
      </PublicRoute>
    ),
  },
  {
    path: "/subscribe",
    element: (
      <PublicRoute>
        <Subscribe />
      </PublicRoute>
    ),
  },
  {
    path: "/editprofile",
    element: (
      <PrivateRoute>
        <EditProfile />
      </PrivateRoute>
    ),
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/userinformations",
    element: (
      <PrivateRoute>
        <UserInformations />
      </PrivateRoute>
    ),
  },
]);

function PrivateRoute({ children, role = "user" }) {
  const { auth } = useStore();

  if (auth.isLogged) {
    if (auth.user?.status === role) {
      return children;
    }
    return <Navigate to="/map" />;
  }
  return <Navigate to="/connection" />;
}

function PublicRoute({ children }) {
  const { auth } = useStore();
  if (!auth.isLogged) {
    return children;
  }
  return <Navigate to="/map" />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  role: PropTypes.string.isRequired,
};
PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
