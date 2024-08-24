import { DateAndTimePicker, ReturnLocationCheckbox, SelectLocation } from "@/components";
import { Button } from "@/components/ui/button";

export function SelectDate({ title }: { title: string }) {
  return (
    <section className="bg-white w-full  p-6 rounded-lg  shadow-gray-200 max-w-screen-lg">
      <header className=" flex justify-start items-center w-full">
        <h3 className="font-bold text-2xl text-primaryColor">{title}</h3>
      </header>

      <div className="flex flex-col gap-3 pt-4 w-full  ">
        <section className="flex flex-col md:flex-row gap-3 md:gap-10">
          <SelectLocation title="Pick-up and Drop-off" />
          <SelectLocation title="Drop-off" />
        </section>

        <ReturnLocationCheckbox />

        <section className="flex flex-col items-end gap-5">
          <div className="w-full flex flex-col md:flex-row gap-4 md:gap-10">
            <DateAndTimePicker title="Pick-up" />
            <DateAndTimePicker title="Drop-off" />
          </div>
          <Button className="w-full text-base md:text-lg">Search Vehicles</Button>
        </section>
      </div>
    </section>
  );
}
