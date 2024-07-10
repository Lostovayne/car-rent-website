import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

export const UserLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
