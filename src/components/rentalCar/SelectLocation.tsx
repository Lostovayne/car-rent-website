import { estadosDeUSA } from "@/data";
import { SelectComponent } from "./SelectComponent";

export const SelectLocation = ({ title }: { title: string }) => {
  return (
    <div className="w-full md:w-1/2 flex flex-col items-start justify-center border-b">
      <h4 className="font-bold text-base text-textPrimary pb-2">{title}</h4>
      <SelectComponent
        array={estadosDeUSA}
        placeholder="Select your state"
        title="States"
        optionalLabel="Location"
      />
    </div>
  );
};
