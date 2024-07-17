import { createBrowserRouter } from "react-router-dom";
import { AdminLayout, UserLayout } from "../layout";
import { DetailsPage, Home, PaymentPage } from "../pages";
import { Category } from "../pages/Category";
import { FilterLayout } from "../layout/FilterLayout";
import { Error } from "../pages/Error";

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
            path: "details",
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
]);
