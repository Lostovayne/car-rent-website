import React from "react";

import { useMediaQuery } from "usehooks-ts";
import { RentalData } from "@/data";
import type { RentalCar as RentalCarInterface } from "../../interfaces";

import { CardRentalCar } from "./CardRentalCar";
import { SelectDate } from "./SelectDate";

export function RentalCar() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [carSelect, setCarSelect] = React.useState<RentalCarInterface[] | []>(RentalData);
  console.log(setCarSelect);
  return (
    <form className="container flex flex-col justify-between items-center ">
      <div className="w-full flex gap-6 justify-center py-8">
        {isMobile ? (
          <CardRentalCar {...carSelect[0]} />
        ) : (
          carSelect.map((car, index) => <CardRentalCar {...car} key={index} />)
        )}
      </div>
      <div className="flex justify-center w-full">
        <SelectDate title="Reserve a Vehicle" />
      </div>
    </form>
  );
}
