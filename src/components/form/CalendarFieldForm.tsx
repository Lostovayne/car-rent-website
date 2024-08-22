import { ControllerRenderProps, FieldValues, Path } from "react-hook-form"
import { format } from "date-fns"
import { cn } from "../../lib"
import { CalendarIcon } from "lucide-react"
import { Button } from "../ui/button"
import { FormControl, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Calendar, CalendarProps } from "../ui/calendar"

type CalendarFieldProps<T extends FieldValues> = CalendarProps & {
  field: ControllerRenderProps<T, Path<T>>;
  label?: string;
  placeholder?: string;
};


export const CalendarFieldForm= <T extends FieldValues>({
  field,
  label = 'Date',
  placeholder='Select your date',
  ...calendarProps
}: CalendarFieldProps<T>): JSX.Element => {
  return (
    <FormItem className="flex flex-col">
      <FormLabel>{label}</FormLabel>
      <Popover>
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
          />
        </PopoverContent>
      </Popover>
      <FormMessage />
    </FormItem>
  )
}
