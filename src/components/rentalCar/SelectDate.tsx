import { DateAndTimePickerSection, SelecLocationSection } from "@/components";

export function SelectDate() {
  return (
    <form className="bg-white w-full  p-6 rounded-lg  shadow-gray-200 max-w-screen-lg">
      <header className=" flex justify-start items-center w-full">
        <h3 className="font-bold text-2xl text-primaryColor">Reserve a Vehicle</h3>
      </header>

      <div className="flex flex-col gap-3 pt-4 w-full  ">
        <SelecLocationSection />
        <DateAndTimePickerSection />
      </div>
    </form>
  );
}
