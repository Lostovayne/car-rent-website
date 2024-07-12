import { Bell, Heart, Settings } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

interface Props {
  unreadNotifications: boolean;
}

export const ProfilNotification = ({ unreadNotifications }: Props) => {
  return (
    <div className="flex gap-4">
      <div className="sm:flex gap-4 hidden">
        {/* like */}
        <Button variant="link" size="icon" className="border rounded-full">
          <Heart className="h-4 w-4 text-red-500 fill-red-500" />
        </Button>

        {/* notification */}
        <Button
          variant="link"
          size="icon"
          className="border rounded-full relative"
        >
          <Bell className="h-4 w-4 " />
          {unreadNotifications && (
            <div className="w-3 h-3 absolute bg-red-500 rounded-full top-[-2px] right-[-2px]"></div>
          )}
        </Button>

        {/* settings */}
        <Button variant="link" size="icon" className="border rounded-full">
          <Settings className="h-4 w-4" />
        </Button>
      </div>

      {/* avatar */}
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" className="" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};
