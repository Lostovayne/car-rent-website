import { ArrayCars } from "../../data";
import { cn } from "../../lib/utils";
import { AutoCard } from "../autoCard/VehicleCard";

type AutoCardProps = {
  cuantity: number;
} & React.ComponentPropsWithoutRef<"section">;

export const ViewCars: React.FC<AutoCardProps> = ({ cuantity, className, ...props }) => {
  return (
    <section className={cn("w-full flex flex-wrap justify-evenly gap-y-10 gap-x-4", className)} {...props}>
      {ArrayCars.map((car, index) => {
        if (index >= cuantity) return;
        return <AutoCard key={car.id} {...car} />;
      })}
    </section>
  );
};
