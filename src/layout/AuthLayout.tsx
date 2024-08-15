import { Navigate, Outlet, useLocation } from "react-router-dom";

export const AuthLayout = () => {
  const { pathname } = useLocation();

  if (pathname === "/auth" || pathname === "/auth/") {
    return <Navigate to="/auth/login" />;
  }

  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-30%,rgba(53,99,233,0.5),rgba(255,255,255,0))] flex items-center justify-center m-auto">
      <Outlet />
    </div>
  );
};
