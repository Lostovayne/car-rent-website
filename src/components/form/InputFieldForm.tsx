import { ControllerRenderProps, FieldValues, Path } from "react-hook-form";
import { FormControl, FormItem, FormLabel, FormMessage } from "../ui/form";

interface InputFieldProps<T extends FieldValues> extends React.InputHTMLAttributes<HTMLInputElement> {
  field: ControllerRenderProps<T, Path<T>>;
  label: string
}
export const InputFieldForm = <T extends FieldValues>({
  field,
  label,
  ...props
}: InputFieldProps<T>): JSX.Element => {
  const { type, ...rest } = props
  return (
    <FormItem className="flex flex-col">
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <input
          type={type ?? "text"}
          {...field}
          {...rest}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};