import { TbArrowsDownUp } from "react-icons/tb"
import SelectDate from "../components/rentalCar/SelectDate"
import { Button } from "../components"

export const Category = () => {
  return (
    <div className="flex items-center justify-center ">
        <div className="flex flex-col xl:flex-row justify-between items-center w-full px-8">
        <SelectDate title="Pick Up"/>
        <Button>
          <TbArrowsDownUp className=""/>
        </Button>
        <SelectDate title="Drop Off" />
      </div>
    </div>
  )
}