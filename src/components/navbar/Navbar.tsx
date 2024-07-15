import { IUser } from "../../interfaces/user.interface";
import { Logo } from "./Logo";
import { ProfileNotification } from "./ProfileNotification";
import { SearchArea } from "./SearchArea";

interface Props {
  user: IUser;
}

export const Navbar = ({ user }: Props) => {
  return (
    <nav className="flex flex-wrap items-center justify-between gap-y-5  p-5 max-w-screen-2xl">
      <Logo />
      <SearchArea />
      <ProfileNotification user={user} />
    </nav>
  );
};
