import { RiChatSmile3Line } from "react-icons/ri";
import { BsRobot } from "react-icons/bs";
import { LuSend } from "react-icons/lu";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const UiChatBot = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"outline"} size={"icon"} className="rounded-full xl:size-12 ">
          <RiChatSmile3Line className="size-full text-primaryColor" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-96 p-0 mr-6 border-0 rounded-xl ">
        <div className="bg-primary/90 w-full h-16  p-4 gap-3 rounded-t-md text-white flex items-center justify-start">
          <BsRobot size={28} />
          <h3 className="text-lg font-medium">Chat Bot</h3>
        </div>
        <div className="h-96 p-4"></div>

        {/* Ui Input */}

        <div className="flex items-center gap-2 p-5">
          <Input placeholder="" />
          <Button className="bg-primary/90 hover:bg-primary ">
            <LuSend />
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};
