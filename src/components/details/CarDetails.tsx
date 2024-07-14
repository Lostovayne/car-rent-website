import { ICarDetails } from "../../interfaces"
import { Reviews } from "./reviews/Reviews"

interface Props {
  carDetails: ICarDetails
}

export const CarDetails = ({ carDetails }: Props) => {
  return (
    <div className="flex bg-backgroundSecondary">

      {/* NavBarSide */}
      <div className="hidden md:flex w-3/12 bg-red-500">Nav Bar Side</div>

      {/* right side : details*/}
      <div className="flex flex-col w-full bg-yellow-300">

        {/* view car && detail car */}
        <div className="flex flex-col sm:flex-row w-full bg-yellow-400">
          <div className="w-full sm:w-1/2 bg-cyan-300">View Car</div>
          <div className="w-full sm:w-1/2 bg-indigo-300">Detail Car</div>
        </div>

        {/* reviews */}
        <Reviews reviews={carDetails.reviews} />

        {/* recent car */}
        <div className="bg-blue-300">Recent Car</div>

        {/* recomendationcar */}
        <div className="bg-orange-300">Recomendation Car</div>

      </div>

    </div>
  )
}
