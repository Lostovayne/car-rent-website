import { Navigate, Outlet, useLocation } from "react-router-dom";

export const AuthLayout = () => {
  const { pathname } = useLocation();

  if (pathname === "/auth" || pathname === "/auth/") {
    return <Navigate to="/auth/login" />;
  }

  return (
    <div className="container  min-h-screen flex justify-center items-center">
      <Outlet />
    </div>
  );
};
