import { estadosDeUSA, hoursOfDay } from "../../data";
import { DatePicker } from "./DataPicker";
import SelectComponent from "./SelectComponent";

function SelectDate({ title }: { title: string }) {
  return (
    <section className="bg-white w-full  border border-gray-200 p-6 rounded-lg  shadow-gray-200 ">
      <header className="bg-green-300 flex justify-start items-center w-full">
        <img src="/assets/rentalCar/mark.png" alt="" className="size-4" />
        <h3>{title}</h3>
      </header>
      <div className=" flex flex-col sm:flex-row items-center justify-around w-full  ">
        <div className="   flex flex-col items-start justify-center  ">
          <h4 className=" font-bold text-md">Locations</h4>
          <SelectComponent array={estadosDeUSA} placeholder="Select your city" title="Cities" />
        </div>
        <div className="  flex flex-col items-start justify-center  ">
          <h4 className="font-bold text-md">Data</h4>
          <DatePicker />
        </div>
        <div className="  flex flex-col items-start justify-center  ">
          <h4 className=" font-bold text-md">Time</h4>
          <SelectComponent array={hoursOfDay} placeholder="Select your time" title="Date" />
        </div>
      </div>
    </section>
  );
}

export default SelectDate;
