import { DatePicker, SelectComponent } from "@/components";
import { hoursOfDay } from "@/data";

export const DateAndTimePicker = ({ title }: { title: string }) => {
  return (
    <div className="w-full ">
      <h4 className="font-bold text-base text-textPrimary pb-3">{title}</h4>
      <div className="flex gap-2 justify-between  ">
        <DatePicker />
        <i className="border-l border-gray-300"></i>
        <SelectComponent
          array={hoursOfDay}
          placeholder={"Select your time"}
          title={title + " time"}
          optionalLabel={title + " time"}
        />
      </div>
    </div>
  );
};
