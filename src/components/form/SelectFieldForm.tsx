import { ControllerRenderProps, FieldValues, Path } from "react-hook-form";
import { FormControl, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

interface SelectFieldProps<T extends FieldValues> extends React.InputHTMLAttributes<HTMLInputElement> {
  field: ControllerRenderProps<T, Path<T>>;
  label: string;
  data: {id:string, description:string}[];

}

export const SelectFieldForm: <T extends FieldValues>({ 
  field, 
  label, 
  data,
  ...props 
}: SelectFieldProps<T>) => JSX.Element = ({field, label, data, ...props}) => {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <Select
        onValueChange={field.onChange}
        defaultValue={field.value}
      >
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Select your city" />
          </SelectTrigger>
        </FormControl>
        <SelectContent {...props}>
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
