import { RentalCar } from "@/interfaces";
import { Button } from "@/components/ui/button";

export function CardRentalCar({ title, description, image, button, car }: RentalCar) {
  return (
    <div
      className={`flex flex-col justify-between p-5 rounded-lg w-full h-[320px] md:h-[360px] bg-cover bg-center `}
      style={{ backgroundImage: `url(${image})` }}>
      <div>
        <h3 className="w-full md:w-3/4 lg:w-[290px] text-xl min-[468px]:text-2xl lg:text-3xl lg:leading-9 font-semibold md:font-normal text-white">
          {title}
        </h3>
        <p className="w-full min-[468px]:w-3/4 md:w-full lg:w-2/3 text-base text-white font-normal py-4 text-balance">
          {description}
        </p>
        <Button variant="outline" className={` w-28 text-white border-none ${button}`}>
          Rental Car
        </Button>
      </div>

      <img src={car} className="mx-auto min-w-48 w-full max-w-[300px] " />
    </div>
  );
}
