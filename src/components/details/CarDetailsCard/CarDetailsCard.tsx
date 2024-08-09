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
    <div className="w-full h-full flex justify-center lg:w-1/2">
      <Card className="flex flex-col  bg-white border-0 p-5 rounded-lg w-full h-full max-w-[500px] max-h-[500px] drop-shadow">
        <CardHeader className="flex flex-col w-full p-0">
          <div className="flex justify-between items-center w-full">
            <CardTitle className="text-textPrimary text-lg sm:text-2xl xl:text-3xl leading-5 max-sm:font-normal font-medium ">
              Nissan GT - R
            </CardTitle>
            <IsFavoriteIcon
              isFavorite={isFavorite}
              handleToggleFavorite={handleToggleFavorite}
              className="sm:size-6"
            />
          </div>
          <span className="flex items-center gap-x-3">
            <StarReviewRating rating={4} />
            <h5 className="text-gray-600 text-xs sm:text-sm font-normal">
              440+ Reviews
            </h5>
          </span>
        </CardHeader>

        <CardContent className="flex flex-col justify-center gap-5 w-full h-full p-0">
          <p className="text-base mt-4 sm:text-lg xl:text-xl leading-8 sm:leading-10 xl:leading-loose font-light text-textSecondary sm:text-gray-600">
            NISMO has become the embodiment of Nissan's outstanding performance,
            inspired by the most unforgiving proving ground, the "race track".
          </p>

          <table className="w-full flex flex-col min-[390px]:flex-row text-base  xl:text-xl gap-3 ">
            <tbody className="flex flex-col gap-2 max-[390px]:w-full w-1/2">
              <CarDetailsRow label="Type" value="Sedan" />
              <CarDetailsRow label="Transm" value="Auto" />
            </tbody>

            <tbody className="flex flex-col gap-2 max-[390px]:w-full w-1/2">
              <CarDetailsRow label="Capacity" value="2 Person" />
              <CarDetailsRow label="Gasoline" value="70L" />
            </tbody>
          </table>
        </CardContent>
        <CardFooter className="flex justify-between items-center w-full p-0 mt-5 sm:mt-6">
          <div>
            <span className="font-medium text-textPrimary text-lg sm:text-2xl xl:text-3xl">
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
