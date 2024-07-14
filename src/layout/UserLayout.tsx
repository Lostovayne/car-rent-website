import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { dataUser } from "../data/user.data";

export const UserLayout = () => {
  const user = dataUser;

  return (
    <div className=" container mx-auto">
      <Navbar user={user} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
