import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
export function SelectComponent({
  array,
  placeholder,
  title,
}: {
  array: string[];
  title: string;
  placeholder: string;
}) {
  return (
    <Select>
      <SelectTrigger className="justify-start gap-1 focus:ring-0 focus:ring-offset-0 text-sm sm:text-base text-gray-500 px-0 min-[390px]:px-2 max-[390px]:border-none  ">
        <SelectValue placeholder={placeholder} />
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
