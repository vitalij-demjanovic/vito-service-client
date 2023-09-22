import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RequireAuth } from "./helpers/RequireAuth.tsx";
import DashboardLayout from "./layout/DashboardLayout.tsx";
import Home from "./pages/Home.tsx";
import AuthLayout from "./layout/AuthLayout.tsx";
import Login from "./pages/Login.tsx";
import Warehouse from "./pages/Warehouse.tsx";
import Category from "./pages/Category.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireAuth>
        <DashboardLayout />
      </RequireAuth>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/warehouse",
        element: <Warehouse />,
      },
      {
        path: "/warehouse/:id",
        element: <Category />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
