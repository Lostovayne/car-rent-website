import { estadosDeUSA, hoursOfDay } from "../../data";
import { DatePicker } from "./DataPicker";
import SelectComponent from "./SelectComponent";

function SelectDate({ title }: { title: string }) {
  return (
    <div className="bg-white w-full  border border-gray-200 p-6 rounded-lg  shadow-gray-200 ">
      <div className="flex justify-start items-center w-full">
        <img src="/assets/rentalCar/mark.png" alt="" className="size-4" />
        <p>{title}</p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-around w-full  ">
        <div className="w-full   flex flex-col items-start justify-center  ">
          <p className=" font-bold text-md">Locations</p>
          <SelectComponent
            array={estadosDeUSA}
            placeholder="Select your city"
            title="Cities"
          />
        </div>
        <div className="w-full   flex flex-col items-start justify-center  ">
          <p className="font-bold text-md">Data</p>
          <DatePicker />
        </div>
        <div className="w-full   flex flex-col items-start justify-center  ">
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
