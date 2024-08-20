import { ICity } from "../interfaces";
import { estadosDeUSA } from "./cities.data";

export const dataCities: ICity[] = estadosDeUSA.map(
  (city, index) =>
    ({ description: city, id: `${index}`.padStart(3, "0") } as ICity)
);
