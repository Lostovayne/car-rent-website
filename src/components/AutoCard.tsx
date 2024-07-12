import {
  BsFillFuelPumpFill,
  BsGearWideConnected,
  BsPeopleFill,
  BsFillHeartFill,
  BsHeart,
} from "react-icons/bs";
import { AutoCardProps } from "../interfaces/AutoCard.interface";

export const AutoCard = ({
  model,
  type,
  image,
  price,
  isFavorite = false,
  specs,
}: AutoCardProps): JSX.Element => {
  return (
    <div className="flex flex-col justify-between bg-white p-4 rounded-xl w-80 h-60 sm:h-96">
      {/* TOP */}
      <div className="flex flex-col w-full">
        <div className="flex justify-between w-full">
          <h4 className="text-[#1A202C] text-lg sm:text-xl uppercase leading-5 max-sm:font-normal font-medium">
            {model}
          </h4>
          {!isFavorite ? (
            <BsHeart className="size-5 cursor-pointer transition-all text-gray-400" />
          ) : (
            <BsFillHeartFill className="size-5 text-red-500 cursor-pointer transition-all" />
          )}
        </div>
        <h5 className="text-[#90A3BF] text-xs sm:text-sm font-medium capitalize">{type}</h5>
      </div>
      {/* CENTER */}
      <div className="w-full">
        <div className="flex sm:flex-col w-full">
          <div className="w-2/3 h-24 sm:w-full sm:h-36 relative">
            <img src={image} alt={model} className="object-contain" />
            <span className="absolute bottom-0 right-0 w-full h-10 sm:h-16 bg-gradient-to-t from-white via-white/80 to-transparent"></span>
          </div>
          <div className="flex justify-end  w-1/3 sm:w-full sm:mt-6">
            <ul className="flex flex-col justify-center gap-3 px-5 sm:flex-row sm:w-full sm:justify-between  h-full [&>li]:flex [&>li]:items-center [&>li]:gap-1 [&>li>svg]:h-4 sm:[&>li>svg]:h-5  text-[#90A3BF] text-xs sm:text-sm">
              <li>
                <BsFillFuelPumpFill className="size-6" />
                <span className="font-normal" >{specs?.fuel}</span>
              </li>
              <li>
                <BsGearWideConnected className="size-6" />
                <span className="font-normal" >{specs?.transmission}</span>
              </li>
              <li>
                <BsPeopleFill className="size-6" />
                <span className="font-normal">{specs?.capacity} People</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex justify-between items-end w-full mt-8 sm:mt-6">
          <div>
            <span className="font-medium text-[#1A202C] text-lg sm:text-2xl">
              ${price}/
            </span>
            <span className="text-[#90A3BF] text-sm">&nbsp;day</span>
          </div>
          <button
            className="bg-[#3563e9] font-medium px-4 py-2 rounded-sm text-white text-xs sm:text-base"
            type="button"
          >
            Rental Now
          </button>
        </div>
      </div>
    </div>
  );
};
