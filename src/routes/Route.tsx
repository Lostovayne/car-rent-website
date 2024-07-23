import { createBrowserRouter } from "react-router-dom";
import { AdminLayout, UserLayout } from "../layout";
import { DetailsPage, Home, PaymentPage } from "../pages";
import { Category } from "../pages/Category";
import { FilterLayout } from "../layout/FilterLayout";
import { Error } from "../pages/Error";
import { AuthLayout } from "../layout/AuthLayout";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "cars/",
        element: <FilterLayout />,
        children: [
          {
            path: "category",
            element: <Category />,
          },
          {
            path: "details/:carId",
            element: <DetailsPage />,
          },
          {
            index: true,
            element: <Category />,
          },
        ],
      },
      {
        path: "payment",
        element: <PaymentPage />,
      },
    ],
  },

  {
    element: <AdminLayout />,
    children: [
      {
        path: "/dashboard",
        element: <div>Dashboard</div>,
      },
    ],
  },
  {
    element: <AuthLayout />,
    path: "auth/",
    errorElement: <Error />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "*",
        index: true,
        element: <Login />,
      }
    ],
  },
]);
