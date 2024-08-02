import type { ICar } from "../../../interfaces"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card"
import { CarCard } from "./CarCard"
import { CarTotales } from "./CarTotales"

interface RentalSumaryProps {
  car: ICar
  carReviews:{
    total: number
    averageRating: number
  }
}

export const RentalSummary:React.FC<RentalSumaryProps> = ({car, carReviews}) => {

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


