import { Button, DateAndTimePicker } from "@/components";

export const DateAndTimePickerSection = () => {
  return (
    <section className="flex flex-col items-end gap-5">
      <div className="w-full flex flex-col md:flex-row gap-4 md:gap-10">
        <DateAndTimePicker title="Pick-up" />
        <DateAndTimePicker title="Drop-off" />
      </div>
      <Button className="w-full text-base md:text-lg">Search Vehicles</Button>
    </section>
  );
};
