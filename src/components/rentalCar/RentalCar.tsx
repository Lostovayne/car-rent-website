import React from "react";
import { TbArrowsDownUp } from "react-icons/tb";
import { useMediaQuery } from "usehooks-ts";
import { RentalData } from "@/data";
import type { RentalCar as RentalCarInterface } from "../../interfaces";
import { Button } from "../ui/button";
import { CardRentalCar } from "./CardRentalCar";
import SelectDate from "./SelectDate";

export function RentalCar() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [carSelect, setCarSelect] = React.useState<RentalCarInterface[] | []>(RentalData);
  console.log(setCarSelect);
  return (
    <div className="flex flex-col   max-w-[1176px]   m-auto justify-between items-center ">
      <div className="flex w-full justify-center md:justify-between   py-8 px-2">
        {isMobile ? (
          <CardRentalCar {...carSelect[0]} />
        ) : (
          carSelect.map((car, index) => <CardRentalCar {...car} key={index} />)
        )}
      </div>
      <div className="flex flex-col xl:flex-row justify-between items-center w-full">
        <SelectDate title="Pick Up" />
        <Button>
          <TbArrowsDownUp className="" />
        </Button>
        <SelectDate title="Drop Off" />
      </div>
    </div>
  );
}
