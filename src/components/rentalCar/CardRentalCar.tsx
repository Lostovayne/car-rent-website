import { RentalCar } from "@/interfaces";
import { Button } from "@/components/ui/button";

export function CardRentalCar({ title, description, image, button, car }: RentalCar) {
  return (
    <div
      className={` flex flex-col justify-between p-6 rounded-lg max-w-[640px] h-[320px] lg:w-[500px] xl:w-[550px] lg:h-[320px] bg-cover bg-center `}
      style={{ backgroundImage: `url(${image})` }}>
      <div>
        <h3 className="w-full md:w-3/4 xl:w-3/5  text-xl min-[468px]:text-2xl font-semibold md:font-normal text-white">
          {title}
        </h3>
        <p className="w-full min-[468px]:w-3/4 md:w-full xl:w-3/5 text-base text-white font-normal py-4 text-balance">
          {description}
        </p>
        <Button variant="outline" className={` w-28 text-white border-none ${button}`}>
          Rental Car
        </Button>
      </div>

      <img src={car} className="mx-auto min-w-48 w-2/3 max-w-[270px]" />
    </div>
  );
}
