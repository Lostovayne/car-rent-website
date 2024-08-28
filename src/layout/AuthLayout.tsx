import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";

export const AuthLayout = () => {
  const { pathname } = useLocation();
  const isMdOrLarger = useMediaQuery("(min-width: 768px)"); 

  // Redirigir si la ruta es "/auth" o "/auth/"
  if (pathname === "/auth" || pathname === "/auth/") {
    return <Navigate to="/auth/login" />;
  }


  return (
    <div
      className={`absolute top-0 z-[-2] h-screen w-screen  flex items-center justify-center lg:justify-start m-auto ${
        isMdOrLarger 
          ? "bg-no-repeat bg-right" 
          : "bg-cover"  
      }`}
      style={{
        backgroundImage: isMdOrLarger 
          ? "url(/assets/auth-bg/background.svg)" 
          : "radial-gradient(ellipse 80% 80% at 50% -30%, rgba(53,99,233,0.5), rgba(255,255,255,0))"
      }}
    >
      <Outlet />
    </div>
  );
};