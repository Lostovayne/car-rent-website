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
  TableRow,
  TableContainer,
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
          <div className="w-full flex items-center gap-x-3">
            <StarReviewRating rating={4} />
            <span className="text-gray-600 text-xs sm:text-sm font-normal">
              440+ Reviews
            </span>
          </div>
        </CardHeader>

        <CardContent className="flex justify-center flex-col  gap-5 xl:gap-7 w-full h-full p-0 ">
          <p className="text-base pt-4 lg:pt-0 sm:text-lg  leading-6  font-light text-textSecondary sm:text-gray-600 text-pretty">
            NISMO has become the embodiment of Nissan's outstanding performance,
            inspired by the most unforgiving proving ground, the "race track".
          </p>

          <table className="w-full flex flex-col min-[390px]:flex-row min-[1060px]:flex-col text-base min-[1060px]:text-lg xl:text-xl  gap-3 ">
            <TableContainer>
              <TableRow label="Type" value="Sedan" />
              <TableRow label="Transm" value="Auto" />
            </TableContainer>

            <TableContainer>
              <TableRow label="Capacity" value="2 Person" />
              <TableRow label="Gasoline" value="70L" />
            </TableContainer>
          </table>
        </CardContent>
        <CardFooter className="flex justify-between items-center w-full p-0 pt-5 lg:pt-0">
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
