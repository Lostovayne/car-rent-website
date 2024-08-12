import { RentalCar } from "../../interfaces";
import { Button } from "../ui/button";

export function CardRentalCar({ title, description, image , button,car }: RentalCar) {
  return (
    <div
      className={`  md:max-w-[640px]   h-[320px] lg:w-[500px] xl:w-[550px] lg:h-[320px] m-auto mx-1 rounded-lg bg-cover bg-center flex flex-col justify-between p-6`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <h3 className="w-full md:w-4/5 xl:w-3/5  text-2xl md:text-3xl lg:text-4xl font-semibold text-white">{title}</h3>
      <p className="w-full md:w-4/5 xl:w-3/5 md:text-lg text-white">{description}</p>
      <Button variant="outline" className={`px-4 py-2 rounded w-24 text-white border-none ${button}`}>Rental Car</Button>
      <img src={car} className="mx-auto md:w-52 lg:w-64"/>
    </div>
  );
}
