import { estadosDeUSA } from "@/data";
import { ReturnLocationCheckbox } from "./ReturnLocationCheckbox";

import { DateAndTimePicker } from "./DateAndTimePicker";
import { SelectComponent } from "./SelectComponent";
import { Button } from "@/components/ui/button";

function SelectDate({ title }: { title: string }) {
  return (
    <section className="bg-white w-full border border-gray-200 p-6 rounded-lg  shadow-gray-200 ">
      <header className=" flex justify-start items-center w-full">
        <img src="/assets/rentalCar/mark.png" alt="" className="size-4" />
        <h3>{title}</h3>
      </header>

      <div className="flex flex-col gap-3 pt-4 w-full  ">
        <div className="flex flex-col items-start justify-center  ">
          <h4 className=" font-bold text-base text-textPrimary">Locations</h4>
          <SelectComponent array={estadosDeUSA} placeholder="Select your city" title="Cities" />
        </div>
        <ReturnLocationCheckbox />
        <div className="flex flex-col sm:flex-row gap-3">
          <DateAndTimePicker title="Pick-up" />
          <DateAndTimePicker title="Return" />
          <Button>Browse Vehicles</Button>
        </div>
      </div>
    </section>
  );
}

export default SelectDate;
