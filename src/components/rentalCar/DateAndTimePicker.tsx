import { DatePicker, SelectComponent } from "@/components";
import { hoursOfDay } from "@/data";

export const DateAndTimePicker = ({ title }: { title: string }) => {
  return (
    <div className="w-full ">
      <h4 className="font-bold text-base text-textPrimary pb-2">{title}</h4>
      <div className="flex gap-2 md:gap-5  justify-between  ">
        <DatePicker />
        <span className="border-l border-gray-300"></span>
        <SelectComponent
          array={hoursOfDay}
          placeholder={"Select your time"}
          title={title + " time"}
          optionalLabel="time"
        />
      </div>
    </div>
  );
};
