import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelecComponentProps {
  array: string[];
  placeholder: string;
  title: string;
  optionalLabel?: string;
}
export function SelectComponent({ array, placeholder, title, optionalLabel }: SelecComponentProps) {
  return (
    <Select>
      <SelectTrigger className="max-w-80 justify-start gap-1 focus:ring-0 focus:ring-offset-0 text-sm sm:text-base text-gray-500 px-0 py-0 border-none border-b">
        {optionalLabel ? (
          <div className="w-full h-full flex flex-col items-start  ">
            <span className="text-textSecondary text-xs">{optionalLabel}</span>
            <SelectValue placeholder={placeholder} />
          </div>
        ) : (
          <SelectValue placeholder={placeholder} />
        )}
      </SelectTrigger>
      <SelectContent position="item-aligned">
        <SelectGroup>
          <SelectLabel className="text-primaryColor">{title}</SelectLabel>
          {array.map((estado: string) => (
            <SelectItem key={estado} value={estado}>
              {estado}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
