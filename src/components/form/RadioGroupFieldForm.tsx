import { FormControl, FormItem, FormLabel, FormMessage } from "../ui/form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";


type RadioGroupFieldProps<T> =
  {
    data: { id: T, description: T }[];
    onValueChange: (value: T | string) => void;
    defaultValue: T;
    className?: string;
    action: (props: { value: string }) => React.ReactNode;
  }


export const RadioGroupFieldForm = <T,>({
  data,
  onValueChange,
  defaultValue,
  className = "flex flex-col space-y-1",
  action,
}: RadioGroupFieldProps<T>): JSX.Element => {
  return (
    <FormItem className="space-y-3">
      <FormControl>
        <RadioGroup
          onValueChange={onValueChange}
          defaultValue={defaultValue as string}
          className={className}
        >
          {
            data.map((method) => (
              <FormItem key={method.id as string} className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value={method.description as string} />
                </FormControl>
                <FormLabel className="font-normal w-full">
                  {
                    action({ value: method.description as string })
                  }
                </FormLabel>
              </FormItem>
            ))
          }
        </RadioGroup>
      </FormControl>
      <FormMessage />
    </FormItem>
  )

}

