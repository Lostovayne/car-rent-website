import { estadosDeUSA, hoursOfDay } from "../../data";
import { DatePicker } from "./DataPicker";
import SelectComponent from "./SelectComponent";

function SelectDate({ title }: { title: string }) {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-gray-200">
      <div className="flex justify-start items-center">
        <img src="/assets/rentalCar/mark.png" alt="" className="size-4" />
        <p>{title}</p>
      </div>
      <div className="flex gap-2">
        <div>
          <p className="pl-3 font-bold text-md">Locations</p>
          <SelectComponent
            array={estadosDeUSA}
            placeholder="Select your city"
            title="Cities"
          />
        </div>
        <div>
          <p className="font-bold text-md">Data</p>
          <DatePicker />
        </div>
        <div>
          <p className=" font-bold text-md">Time</p>
          <SelectComponent
            array={hoursOfDay}
            placeholder="Select your time"
            title="Date"
          />
        </div>
      </div>
    </div>
  );
}

export default SelectDate;
