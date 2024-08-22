import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export const ReturnLocationCheckbox = () => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="return-checkbox" className="border-gray-400" />
      <Label htmlFor="return-checkbox" className="text-gray-400 text-base font-normal ">
        Return to another location
      </Label>
    </div>
  );
};
