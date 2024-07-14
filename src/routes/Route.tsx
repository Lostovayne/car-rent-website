import { createBrowserRouter } from "react-router-dom";
import { AdminLayout, UserLayout } from "../layout";
import { DetailsPage, Home } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "category",
        element: <div>Category</div>,
      },
      {
        path: "details",
        element: <DetailsPage />,
      },
      {
        path: "payment",
        element: <div>Payment</div>,
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
