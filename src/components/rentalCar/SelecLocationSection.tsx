import { SelectLocation, ReturnLocationCheckbox } from "@/components";
import { useState } from "react";

export const SelecLocationSection = () => {
  const [isReturnLocationActive, setIsReturnLocationActive] = useState<boolean>(false);

  const handleCheckboxChange = (checked: boolean) => {
    setIsReturnLocationActive(checked);
  };
  return (
    <section className="flex flex-col gap-3">
      <div className="flex flex-col md:flex-row gap-4 md:gap-10">
        <SelectLocation title={isReturnLocationActive ? "Pick-up" : "Pick-up & Drop-off"} />
        {isReturnLocationActive && <SelectLocation title="Drop-off" />}
      </div>
      <ReturnLocationCheckbox onCheckedChange={handleCheckboxChange} />
    </section>
  );
};
