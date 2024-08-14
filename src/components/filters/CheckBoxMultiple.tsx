import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

export interface ItemCheckbox {
  id: string;
  label: string;
  quantity: number;
}

export type CheckMultipleState = Record<string, boolean>;

interface CheckBoxMultipleProps extends React.ComponentProps<typeof Checkbox> {
  items: ItemCheckbox[];
}

export function CheckBoxMultiple({ items }: CheckBoxMultipleProps) {
  const [checkState, setCheckState] = useState<CheckMultipleState>({});

  return (
    <div className="flex flex-col">
      {items.map((item) => (
        <div className="flex items-center gap-2 mb-4 font-semibold">
          <Checkbox
            checked={checkState[item.id]}
            onCheckedChange={(checked) => {
              if (checked === "indeterminate") return;

              setCheckState({
                ...checkState,
                [item.id]: checked,
              });
            }}
          />
          <Label className="uppercase text-textSecondary">{item.label}</Label>
          <span className="text-textSecondary">({item.quantity})</span>
        </div>
      ))}
    </div>
  );
}
