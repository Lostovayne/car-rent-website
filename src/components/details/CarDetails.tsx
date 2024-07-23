import { ICar } from "../../interfaces";
import { Reviews } from "./reviews/Reviews";

import { imagesUrl } from "../../data/data";
import { ImageCarousel } from "../carousel/ImageCarousel";

interface Props {
  carDetails: ICar;
}
export const CarDetails = ({ carDetails }: Props) => {
  return (
    <div className="flex bg-backgroundSecondary">
      {/* right side : details*/}
      <div className="flex flex-col w-full ">
        {/* view car && detail car */}
        <div className="flex flex-col md:flex-row w-full ">
          <div className="flex items-center justify-center w-full p-1 md:w-1/2 ">
            <ImageCarousel images={imagesUrl} />
          </div>
          <div className="w-full md:w-1/2 bg-indigo-300">Detail Car</div>
        </div>

        {/* reviews */}
        <Reviews reviews={carDetails.reviews ?? []} />

        {/* recent car */}
        <div className="bg-blue-300">Recent Car</div>

        {/* recomendationcar */}
        <div className="bg-orange-300">Recomendation Car</div>
      </div>
    </div>
  );
};
