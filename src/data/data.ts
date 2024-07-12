import { AutoCardProps } from "../interfaces/AutoCard.interface";

export const ArrayCars: AutoCardProps[] = [
  {
    id: "1",
    model: "Koenigsegg",
    type: "Sport",
    image: "img/1.svg",
    price: 99,
    isFavorite: false,
    specs: {
      fuel: "90L",
      transmission: "Manual",
      capacity: 2,
    },
  },
  {
    id: "2",
    model: "Koenigsegg",
    type: "Sport",
    image: "img/1.svg",
    price: 99,
    isFavorite: true,
    specs: {
      fuel: "90L",
      transmission: "Manual",
      capacity: 2,
    },
  },
];
