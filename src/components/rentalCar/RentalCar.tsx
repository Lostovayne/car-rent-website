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
    <section className="container flex flex-col justify-between items-center ">
      <div className="w-full flex gap-6 justify-center py-8">
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
    </section>
  );
}
