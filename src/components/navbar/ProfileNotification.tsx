import { Bell, Heart, Settings } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import type { IUser } from "../../interfaces/user.interface";

interface Props {
  user: IUser;
}

export const ProfileNotification = ({ user }: Props) => {
  return (
    <div className="flex gap-4">
      <div className="hidden min-[850px]:flex gap-4 ">
        {/* like */}
        <Button variant="link" size="icon" className="border rounded-full">
          <Heart className="size-4 text-red-500 fill-red-500" />
        </Button>

        {/* notification */}
        <Button
          variant="link"
          size="icon"
          className="border rounded-full relative"
        >
          <Bell className="size-4 " />
          {user.unreadNotifications && (
            <div className="size-3 absolute bg-red-500 rounded-full top-[-2px] right-[-2px] animate-pulse"></div>
          )}
        </Button>

        {/* settings */}
        <Button variant="link" size="icon" className="border rounded-full">
          <Settings className="size-4" />
        </Button>
      </div>

      {/* avatar */}
      <Avatar className="size-10">
        <AvatarImage src={user.imageUrl} className="" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};
