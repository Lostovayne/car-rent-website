"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export function DatePicker() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger
        asChild
        className="text-sm sm:text-base text-gray-500  max-[390px]:border-none px-0 min-[390px]:px-2 ">
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal ",
            !date && "text-muted-foreground"
          )}>
          <CalendarIcon className="hidden min-[390px]:inline mr-2 size-4" />
          {date ? format(date, "PPP") : <span className="text-gray-500">Select your date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
      </PopoverContent>
    </Popover>
  );
}
