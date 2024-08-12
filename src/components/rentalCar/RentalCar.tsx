import { CardRentalCar } from "./CardRentalCar";
import { RentalData } from "../../data";
import SelectDate from "./SelectDate";
import { TbArrowsDownUp } from "react-icons/tb";
import { Button } from "../ui/button";
export function RentalCar() {
  return (
    <div className="flex flex-col   max-w-[1176px]   m-auto justify-between items-center ">
      <div className="flex w-full justify-between  py-8 px-4 gap-2">
        <div className="max-md:m-auto  flex  ">
          <CardRentalCar
            title={RentalData[0].title}
            description={RentalData[0].description}
            image={RentalData[0].image}
            button={RentalData[0].button}
            car={RentalData[0].car}
          />
        </div>
        <div className="    hidden md:flex   ">
          <CardRentalCar
            title={RentalData[1].title}
            description={RentalData[1].description}
            image={RentalData[1].image}
            button={RentalData[1].button}
            car={RentalData[1].car}
          />
        </div>
      </div>
      <div className="flex flex-col xl:flex-row justify-between items-center w-full px-4">
        <SelectDate title="Pick Up"/>
        <Button>
          <TbArrowsDownUp className=""/>
        </Button>
        <SelectDate title="Drop Off" />
      </div>
    </div>
  );
}
