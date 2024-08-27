import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { dataUser } from "../data/user.data";
import { UiChatBot } from "@/components/chatBot/UiChatBot";

export const UserLayout = () => {
  const user = dataUser;

  return (
    <div className="bg-white ">
      <Navbar user={user} />
      <main className="bg-backgroundSecondary relative ">
        <Outlet />
        <div className="fixed bottom-6 right-14" >
          <UiChatBot />
        </div>
      </main>
      <Footer />
    </div>
  );
};
