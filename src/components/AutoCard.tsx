import { Heart, Fuel, Cog, UsersRound } from "lucide-react";

export const AutoCard = () => {
  // la card tendra 3 contenedores principales en los cuales dividire
  // los elementos que componen la AutoCard, los contenedores se llamaran
  // TOP, CENTER y BOTTOM. Los cuales haran referencia a su posicion en la card.
  // Estan ahi a manera de guia en caso de que otro desarrollador lo requiera.
  return (
    <div className="flex flex-col justify-between bg-white p-4 rounded-xl w-80 h-60 sm:h-96">
      {/* TOP */}
      <div className="flex flex-col w-full">
        <div className="flex justify-between w-full">
          <h4 className="text-[#1A202C] text-lg sm:text-xl uppercase leading-5 sm:font-medium">
            CR - V
          </h4>
          <Heart className="h-5" />
        </div>
        <h5 className="text-[#90A3BF] text-xs sm:text-sm uppercase">suv</h5>
      </div>
      {/* CENTER */}
      <div className="w-full">
        <div className="flex sm:flex-col w-full">
          <div className="w-2/3 h-24 sm:w-full sm:h-36 relative">
            <img
              src="https://cdn.pixabay.com/photo/2015/09/12/21/31/car-937414_1280.png"
              alt="auto"
              className="object-contain"
            />
            <span className="absolute bottom-0 right-0 w-full h-10 sm:h-16 bg-gradient-to-t from-white via-white/80 to-transparent"></span>
          </div>
          <div className="flex justify-end  w-1/3 sm:w-full sm:mt-6">
            <ul className="flex flex-col justify-center gap-3 sm:flex-row sm:w-full sm:justify-between  h-full [&>li]:flex [&>li]:items-center [&>li]:gap-1 [&>li>svg]:h-4 sm:[&>li>svg]:h-5  text-[#90A3BF] text-xs sm:text-sm">
              <li>
                <Fuel />
                <span>80L</span>
              </li>
              <li>
                <Cog />
                <span>Manual</span>
              </li>
              <li>
                <UsersRound />
                <span>6 People</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex justify-between items-end w-full mt-8 sm:mt-6">
          <div>
            <span className="font-medium text-[#1A202C] text-lg sm:text-2xl">
              $80.00/
            </span>
            <span className="text-[#90A3BF] text-sm">&nbsp;day</span>
          </div>
          <button
            className="bg-[#3563e9] px-4 py-2 rounded-sm text-white text-xs sm:text-base"
            type="button"
          >
            Rental Now
          </button>
        </div>
      </div>
    </div>
  );
};
