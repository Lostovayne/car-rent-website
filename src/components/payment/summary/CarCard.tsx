import type { ICar } from "../../../interfaces"
import { StarReviewRating } from "../../details/reviews/StarReviewRating"

interface Props {
    car: ICar
    carReviews:{
      totalReviews: number
      averageRating: number
    }
  }
  
export const CarCard = ({ car, carReviews }: Props ) => {
    return (
      <div className="grid grid-cols-3 w-full gap-2 border border-1">
  
        <div className="col-span-1 w-full h-32 flex items-center">
          <figure className="w-[90%] h-[90%] mx-auto ">
            <img
              src={car.image}
              alt={car.model}
              className="object-contain w-full h-full"
            />
            <figcaption className=""></figcaption>
          </figure>
        </div>
  
        <div className="col-span-2 flex flex-col gap-2 px-3 justify-center">
          <h1 className="text-2xl sm:text-3xl font-bold">{car.model}</h1>
          <div className="flex gap-3 ">
            <StarReviewRating rating={carReviews.averageRating} />
            <h2>{carReviews.totalReviews} Reviews </h2>
          </div>
        </div>
      </div >
    )
  }
  