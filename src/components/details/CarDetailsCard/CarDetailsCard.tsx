import { useFavorite } from "../../../hooks";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";

import { Button } from "../../ui/button";
import {
  IsFavoriteIcon,
  StarReviewRating,
  CarDetailsRow,
} from "../../../components";
export const CarDetailsCard = () => {
  const { isFavorite, handleToggleFavorite } = useFavorite();

  return (
    <div className="w-full md:w-1/2">
      <Card className="flex flex-col  bg-white border-0 p-5 rounded-xl w-full h-full">
        <CardHeader className="flex flex-col w-full p-0">
          <div className="flex justify-between items-center w-full">
            <CardTitle className="text-textPrimary text-lg sm:text-3xl leading-5 max-sm:font-normal font-medium">
              Nissan GT - R
            </CardTitle>
            <IsFavoriteIcon
              isFavorite={isFavorite}
              handleToggleFavorite={handleToggleFavorite}
              className="size-6"
            />
          </div>
          <span className="flex items-center gap-x-3">
            <StarReviewRating rating={4} />
            <span className="text-textSecondary text-xs sm:text-sm font-medium">
              440+ Reviews
            </span>
          </span>
        </CardHeader>

        <CardContent className="flex flex-col justify-center gap-5 w-full h-full p-0">
          <p className="text-xl leading-10 text-pretty font-light text-gray-500">
            NISMO has become the embodiment of Nissan's outstanding performance,
            inspired by the most unforgiving proving ground, the "race track".
          </p>

          <table className="w-full flex text-xl font-light">
            <tr className="flex flex-col gap-2 w-1/2">
              <CarDetailsRow label="Type" value="Sedan" />
              <CarDetailsRow label="Transm" value="Auto" />
            </tr>

            <tr className="flex flex-col gap-2 w-1/2">
              <CarDetailsRow label="Capacity" value="2 Person" />
              <CarDetailsRow label="Gasoline" value="70L" />
            </tr>
          </table>
        </CardContent>
        <CardFooter className="flex justify-between items-center w-full p-0 mt-5 sm:mt-6">
          <div>
            <span className="font-medium text-textPrimary text-lg sm:text-3xl">
              $150.00/
            </span>
            <span className="text-textSecondary text-sm sm:text-base">
              &nbsp;day
            </span>
            <span className="block text-sm sm:text-base text-textSecondary font-medium line-through">
              $170.00
            </span>
          </div>
          <Button className=" font-medium px-5  rounded-sm text-white text-xs sm:text-base xl:text-lg">
            Rent Now
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
