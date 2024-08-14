import { ItemCheckbox } from "@/components/filters";

export const filters: ItemCheckbox[] = [
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
