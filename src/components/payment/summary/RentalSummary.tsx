import type { ICar } from "@/interfaces"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CarCard } from "./CarCard"
import { CarTotales } from "./CarTotales"
import { dataReviews } from "@/data"

interface RentalSumaryProps {
  car: ICar
}


export const RentalSummary:React.FC<RentalSumaryProps> = ({car}) => {
  const averageRating =
    (car.reviews?.reduce((acum, current) => current.rating + acum, 0) ?? 0) / dataReviews.length;
  const totalReviews = car.reviews?.length ?? 0;
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Rental Summary</CardTitle>
        <CardDescription className="font-light">Prices may change depending on the length of the rental and the price of your rental car.</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-2">
        <CarCard car={car} carReviews={{totalReviews, averageRating}} />
        <CarTotales />
      </CardContent>
    </Card>
  )
}
