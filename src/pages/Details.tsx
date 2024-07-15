import { CarDetails } from "../components"
import { dataCarDetails } from "../data"

export const DetailsPage = () => {
  const carDetails = dataCarDetails

  return (
    <CarDetails carDetails={carDetails}/>
  )
}
