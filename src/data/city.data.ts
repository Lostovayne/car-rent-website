import { ICity } from "../interfaces";
import { estadosDeUSA } from "./cities.data";

export const dataCities: ICity[] = estadosDeUSA.map(
  (city, index) =>
    ({
      id: `${index}`.padStart(3, "0"),
      description: city,
    } as ICity)
);
