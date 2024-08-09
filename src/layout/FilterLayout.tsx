import { Outlet } from "react-router-dom";
import { CheckBoxMultiple, ItemCheckbox } from "../components/filters";

const items: ItemCheckbox[] = [
  {
    id: "1",
    label: "Sport",
    quantity: 2,
  },
  {
    id: "2",
    label: "Suv",
    quantity: 1,
  },
  {
    id: "3",
    label: "MPV",
    quantity: 1,
  },
  {
    id: "4",
    label: "Sedan",
    quantity: 1,
  },
  {
    id: "5",
    label: "Coupe",
    quantity: 10,
  },
  {
    id: "6",
    label: "Hatchback",
    quantity: 1,
  },
] as const;

export const FilterLayout = () => {
  return (
    <div className="flex container mx-auto">
      <div className="hidden md:flex md:flex-col min-w-96">
        <CheckBoxMultiple title="Type" items={items} />
        <CheckBoxMultiple title="Capacity" items={items} />
      </div>
      <Outlet />
    </div>
  );
};
