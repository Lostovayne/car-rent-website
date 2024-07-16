import type { ICar } from "../../../interfaces"
import { StarReviewRating } from "../../details/reviews/StarReviewRating"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card"
import { CarTotales } from "./CarTotales"

interface Props {
  car: ICar
  carReviews:{
    total: number
    averageRating: number
  }
}

export const RentalSummary = ({car, carReviews}:Props) => {

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Rental Summary</CardTitle>
        <CardDescription className="font-light">Prices may change depending on the length of the rental and the price of your rental car.</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-2">
        <CarCard car={car} carReviews={carReviews} />
        <CarTotales />
      </CardContent>

      <CardFooter>
        
      </CardFooter>
    </Card>

  )
}

const CarCard = ({ car, carReviews }: Props ) => {
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
        <span className="text-3xl font-bold">{car.model}</span>
        <div className="flex gap-3 ">
          <StarReviewRating rating={carReviews.averageRating} />
          <span>{carReviews.total} Reviews </span>
        </div>
      </div>
    </div >
  )
}

