import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
function SelectComponent({
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
      <SelectTrigger className="focus:ring-0 focus:ring-offset-0 text-xs text-textSecondary border-none px-0">
        <SelectValue placeholder={placeholder} className="text-xs" />
      </SelectTrigger>
      <SelectContent position="item-aligned">
        <SelectGroup>
          <SelectLabel>{title}</SelectLabel>
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

export default SelectComponent;
