import { Control, FieldValues, Path } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

interface SelectFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  data: { id: string, description: string }[];
  placeholder?: string;
  side?: "left" | "top" | "right" | "bottom"
  flexDirection?: 'row' | 'column'
}

export const SelectFieldForm = <T extends FieldValues>({
  control, name, label, data,
  placeholder = 'Select ...',
  side = "bottom",
  flexDirection = 'column'
}: SelectFieldProps<T>): JSX.Element => {
  const classFormItem = (flexDirection === 'row' ? 'flex flex-row items-baseline' : 'flex flex-col')
  const classLabel = (flexDirection === 'row' ? 'w-1/4' : 'w-full')

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <>
          <FormItem className={classFormItem}>
            <FormLabel className={classLabel}>{label}</FormLabel>
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
            {flexDirection === 'column' && <FormMessage />}
          </FormItem>
          {flexDirection === 'row' && <FormMessage />}
        </>
      )}
    />
  )
}