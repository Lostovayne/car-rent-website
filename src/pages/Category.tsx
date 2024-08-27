import { SelectDate } from "@/components";

export const Category = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="flex flex-col xl:flex-row justify-between items-center w-full ">
        <SelectDate />
      </div>
    </div>
  );
};
