import { estadosDeUSA } from "@/data";
import { SelectComponent } from "./SelectComponent";

export const SelectLocation = ({ title }: { title: string }) => {
  return (
    <div className="w-full flex flex-col items-start justify-center border-b ">
      <h4 className=" font-bold text-base text-textPrimary pb-3">{title}</h4>
      <SelectComponent
        array={estadosDeUSA}
        placeholder="Select your state"
        title="States"
        optionalLabel="Location"
      />
    </div>
  );
};
