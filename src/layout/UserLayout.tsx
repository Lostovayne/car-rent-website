import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { dataUser } from "../data/user.data";

export const UserLayout = () => {
  const user = dataUser;

  return (
    <div className="bg-white ">
      <Navbar user={user} />
      <main className="bg-backgroundSecondary">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
