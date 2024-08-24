import { DateAndTimePicker, ReturnLocationCheckbox, SelectLocation } from "@/components";
import { Button } from "@/components/ui/button";

export function SelectDate({ title }: { title: string }) {
  return (
    <section className="bg-white w-full  p-6 rounded-lg  shadow-gray-200 max-w-screen-lg">
      <header className=" flex justify-start items-center w-full">
        <h3 className="font-bold text-2xl text-primaryColor">{title}</h3>
      </header>

      <div className="flex flex-col gap-2 pt-4 w-full  ">
        <section className="flex flex-col gap-3">
          <SelectLocation title="Pick-up" />
          <SelectLocation title="Drop-off" />
        </section>

        <ReturnLocationCheckbox />

        <div className="flex flex-col md:flex-row md:items-end gap-5">
          <DateAndTimePicker title="Pick-up" />
          <DateAndTimePicker title="Drop-off" />
          <Button className="px-10">Search</Button>
        </div>
      </div>
    </section>
  );
}
