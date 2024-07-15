import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { precioAumentado } from "../helper/index";

import {
  BsFillFuelPumpFill,
  BsGearWideConnected,
  BsPeopleFill,
  BsFillHeartFill,
  BsHeart,
} from "react-icons/bs";
import { AutoCardProps } from "../interfaces/AutoCard.interface";
import { Button } from "./ui/button";
import { useState } from "react";

export const AutoCard = ({
  id,
  model,
  type,
  image,
  price,
  specs,
}: AutoCardProps): JSX.Element => {
  const [isFavoriteState, setIsFavoriteState] = useState(false);

  return (
    <Card
      className="flex flex-col justify-between bg-white border-0 p-5 rounded-xl w-80 h-60 sm:h-96"
      id={id}
    >
      <CardHeader className="flex flex-col w-full p-0">
        <div className="flex justify-between items-center w-full">
          <CardTitle className="text-textPrimary text-lg sm:text-xl uppercase leading-5 max-sm:font-normal font-medium">
            {model}
          </CardTitle>
          {!isFavoriteState ? (
            <BsHeart
              className="size-5 cursor-pointer  text-gray-400"
              onClick={() => setIsFavoriteState(!isFavoriteState)}
            />
          ) : (
            <BsFillHeartFill
              className="size-5 text-red-500 cursor-pointer animate-pulse "
              onClick={() => setIsFavoriteState(!isFavoriteState)}
            />
          )}
        </div>
        <h5 className="text-textSecondary text-xs sm:text-sm font-medium capitalize">
          {type}
        </h5>
      </CardHeader>
      <div className="w-full">
        <CardContent className="flex sm:flex-col w-full p-0">
          <figure className="w-2/3 h-24 sm:w-full sm:h-36 relative">
            <img
              src={image}
              alt={model}
              className="object-contain w-full h-full"
            />
            <figcaption className="absolute bottom-0 right-0 w-full h-10 sm:h-12 bg-gradient-to-t from-white via-white/80 to-transparent"></figcaption>
          </figure>
          <CardDescription className="flex justify-end w-1/3 sm:w-full sm:mt-6">
            <ul
              className="flex flex-col justify-evenly gap-3 pl-4 sm:px-2 sm:flex-row sm:w-full sm:justify-between 
            h-full [&>li]:flex [&>li]:items-center [&>li]:gap-1 [&>li>svg]:h-4 sm:[&>li>svg]:h-5 text-textSecondary text-xs sm:text-sm"
            >
              <li>
                <BsFillFuelPumpFill className="size-6" />
                <span className="font-normal">{specs?.fuel}</span>
              </li>
              <li>
                <BsGearWideConnected className="size-6" />
                <span className="font-normal">{specs?.transmission}</span>
              </li>
              <li>
                <BsPeopleFill className="size-6" />
                <span className="font-normal">{specs?.capacity} People</span>
              </li>
            </ul>
          </CardDescription>
        </CardContent>
        <CardFooter className="flex justify-between items-center w-full p-0 mt-5 sm:mt-6">
          <div>
            <span className="font-medium text-textPrimary text-lg sm:text-2xl">
              ${price}/
            </span>
            <span className="text-textSecondary text-sm">&nbsp;day</span>
            <span className="block text-xs sm:text-sm text-textSecondary font-medium line-through">
              ${precioAumentado(price)}
            </span>
          </div>
          <Button className=" font-medium px-4 py-2 rounded-sm text-white text-xs sm:text-base">
            Rental Now
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};
