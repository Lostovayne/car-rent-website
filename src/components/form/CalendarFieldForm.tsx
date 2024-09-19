/* 
  Created by Vengardus, August 2024
  Updates:
    2024-08-25: 
      - Component changed to use component
      - Add state isPopoverOpen to close the calendar when a date is selected.
      - Add properties flexDirection and functionality in classes
    2024-08-30: 
      - Add postOnSelect property to be called in the onSelect event of the calendar.
      - Add FormField, delete field property
*/
"use client"
import { useState } from "react";
import { Control, ControllerRenderProps, FieldValues, Path } from "react-hook-form"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Calendar, CalendarProps } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";

type CalendarFieldProps<T extends FieldValues> = CalendarProps & {
  control: Control<T>;
  //field: ControllerRenderProps<T, Path<T>>;
  name: Path<T>;
  label?: string;
  placeholder?: string;
  flexDirection?: 'row' | 'column'
  postOnSelect?: () => void
};


export const CalendarFieldForm = <T extends FieldValues>({
  control,
  //field,
  name,
  label = 'Date',
  placeholder = 'Select your date',
  flexDirection = 'column',
  postOnSelect,
  ...calendarProps
}: CalendarFieldProps<T>): JSX.Element => {
  const classFormItem = (flexDirection === 'row' ? 'flex flex-row items-baseline' : 'flex flex-col')
  const classLabel = (flexDirection === 'row' ? 'w-1/4' : 'w-full')
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleSelectDate = (selectedDate: Date | undefined, field: ControllerRenderProps<T, Path<T>>) => {
    field.onChange(selectedDate);
    setIsPopoverOpen(false); // Cierra el popover al seleccionar una fecha
  };

  return (

    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <>
          <FormItem className={classFormItem}>
            <FormLabel className={classLabel}>{label}</FormLabel>
            <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
              <PopoverTrigger asChild>
                <FormControl className="">
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[240px] pl-3 text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value ? (
                      format(field.value, "PPP")
                    ) : (
                      <span>{placeholder}</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  {...calendarProps}
                  mode={'single'}
                  selected={field.value}
                  onSelect={(selectedDate) => {
                    handleSelectDate(selectedDate, field)
                    if (postOnSelect) postOnSelect()
                  }}
                />
              </PopoverContent>
            </Popover>
            {flexDirection === 'column' && <FormMessage />}
          </FormItem>
          {flexDirection === 'row' && <FormMessage />}
        </>
      )}
    />
  )
}