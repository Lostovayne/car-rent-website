"use client";

import * as React from "react";
import { format } from "date-fns";

import { cn } from "@/lib";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export function DatePicker() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild className="text-sm sm:text-base text-gray-500  border-none px-0 py-0">
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal ",
            !date && "text-muted-foreground"
          )}>
          <div className="flex flex-col">
            <span className="text-textSecondary text-xs">date</span>
            {date ? format(date, "PP") : <span className="text-gray-500">Select your date</span>}
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
      </PopoverContent>
    </Popover>
  );
}
