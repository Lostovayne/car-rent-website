import {
  BsFillFuelPumpFill,
  BsGearWideConnected,
  BsPeopleFill,
} from "react-icons/bs";
import { SpecsItem } from "./SpecsItem";

interface SpecsContainerProps {
  specs: {
    fuel: string;
    transmission: string;
    capacity: number;
  };
}

export const SpecsContainer: React.FC<SpecsContainerProps> = ({ specs }) => {
  return (
    <div className="flex justify-end w-1/3 sm:w-full sm:mt-6">
      <ul className="flex flex-col justify-evenly gap-3 pl-4 sm:px-2 sm:flex-row sm:w-full sm:justify-between h-full text-textSecondary text-xs sm:text-sm">
        <SpecsItem
          icon={<BsFillFuelPumpFill className="size-4 sm:size-5" />}
          spec={specs.fuel}
        />
        <SpecsItem
          icon={<BsGearWideConnected className="size-4 sm:size-5" />}
          spec={specs.transmission}
        />
        <SpecsItem
          icon={<BsPeopleFill className="size-4 sm:size-5" />}
          spec={specs.capacity + " Person"}
        />
      </ul>
    </div>
  );
};
