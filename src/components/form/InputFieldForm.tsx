import { useEffect, useRef } from "react";
import { Control, FieldValues, Path } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";

interface InputFieldProps<T extends FieldValues> extends React.InputHTMLAttributes<HTMLInputElement> {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  flexDirection?: 'row' | 'column';
  inputRef?: React.RefObject<HTMLInputElement>;
}

export const InputFieldForm = <T extends FieldValues>({
  control,
  name,
  label,
  flexDirection = 'column',
  inputRef,
  ...propsInput
}: InputFieldProps<T>): JSX.Element => {
  const internalRef = useRef<HTMLInputElement | null>(null);
  const ref = inputRef ?? internalRef;
  const { type, ...restPropsInput } = propsInput
  const classFormItem = (flexDirection === 'row' ? 'flex flex-row items-baseline' : 'flex flex-col')
  const classLabel = (flexDirection === 'row' ? 'w-1/4' : 'w-full')

  const handleSelect = () => {
    if (ref.current && type === "number")
      ref.current.select();
  };

  useEffect(() => {
    if (ref.current && document.activeElement === ref.current && type === "number")
      ref.current.select();
  }, [type, ref]);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        const { ref, ...restField } = field
        return (
          <>
            <FormItem className={classFormItem}>
              {label && <FormLabel className={classLabel}>{label}</FormLabel>}
              <FormControl>
                <input
                  type={type ?? "text"}
                  ref={ref}
                  onClick={handleSelect}
                  onFocus={handleSelect}
                  {...restField}
                  {...restPropsInput}
                />
              </FormControl>
              {flexDirection === 'column' && <FormMessage />}
            </FormItem>
            {flexDirection === 'row' && <FormMessage />}
          </>
        )
      }}
    />
  );
};