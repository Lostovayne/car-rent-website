import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface ReturnLocationCheckboxProps {
  onCheckedChange: (checked: boolean) => void;
}
export const ReturnLocationCheckbox = ({ onCheckedChange }: ReturnLocationCheckboxProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id="returnLocation-checkbox"
        className="border-gray-400"
        onCheckedChange={onCheckedChange}
      />
      <Label
        htmlFor="returnLocation-checkbox"
        className="text-gray-400 text-sm md:text-base font-normal ">
        Return to another location
      </Label>
    </div>
  );
};
