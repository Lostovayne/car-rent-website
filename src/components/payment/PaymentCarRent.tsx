import { RentalSummary } from "./summary/RentalSummary"
import { dataCarDetails, dataReviews } from "../../data"


const carDetails = dataCarDetails

export const PaymentCarRent = () => {

  const averageRating = (carDetails.reviews?.reduce((acum, current) => (current.rating + acum), 0)?? 0) / dataReviews.length
  const totalReviews = carDetails.reviews?.length?? 0
  
  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-5">

      <div className="col-span-2 bg-red-300 order-first md:order-last">
        <RentalSummary
          car={carDetails}
          carReviews={{
            total: totalReviews,
            averageRating: averageRating
          } }
        />
      </div>

      <div className="col-span-3 bg-yellow-300 ">
        <div className="flex flex-col ">
          <div className=" bg-cyan-200">Billing info</div>
          <div className=" bg-cyan-400">Rental info</div>
          <div className=" bg-cyan-700">Payment method</div>
          <div className=" bg-orange-300">Confirmation</div>
        </div>
      </div>


    </div>

  )
}
