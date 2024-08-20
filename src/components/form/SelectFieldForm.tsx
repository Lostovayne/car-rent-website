import { ControllerRenderProps, FieldValues, Path } from "react-hook-form";
import { FormControl, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

interface SelectFieldProps<T extends FieldValues> {
  field: ControllerRenderProps<T, Path<T>>;
  label: string;
  data: { id: string, description: string }[];
  placeholder?: string;
  side?: "left" | "top" | "right" | "bottom"
}

export const SelectFieldForm: <T extends FieldValues>({
  field,
  label,
  data,
  placeholder,
  side
}: SelectFieldProps<T>) => JSX.Element = ({ field, label, data, placeholder = 'Select ...', side="bottom"  }) => {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <Select
        onValueChange={field.onChange}
        defaultValue={field.value}
      >
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder={placeholder ?? ''} />
          </SelectTrigger>
        </FormControl>
        <SelectContent side={side}>
          {data.map((data) => (
            <SelectItem
              key={data.id ?? data.description}
              value={data.id ?? data.description}
            >
              {data.description}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  )
}
