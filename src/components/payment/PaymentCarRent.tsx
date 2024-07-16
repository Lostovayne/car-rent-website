import { RentalSummary } from "./summary/RentalSummary"
import { dataCarDetails, dataReviews } from "../../data"
import { BillingInfo } from "./payment/BillingInfo"
import { ConfirmationRental } from "./payment/ConfirmationRental"



const carDetails = dataCarDetails

export const PaymentCarRent = () => {

  const averageRating = (carDetails.reviews?.reduce((acum, current) => (current.rating + acum), 0) ?? 0) / dataReviews.length
  const totalReviews = carDetails.reviews?.length ?? 0

  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-5 gap-2">

      {/* rental summary */}
      <div className="col-span-2 bg-red-300 order-first md:order-last">
        <RentalSummary
          car={carDetails}
          carReviews={{
            total: totalReviews,
            averageRating: averageRating
          }}
        />
      </div>

      {/* payment */}
      <div className="col-span-3 ">
        <div className="flex flex-col ">
          <div className=" bg-cyan-200">
            <BillingInfo />
          </div>
          <div className=" bg-cyan-400">Rental info</div>
          <div className=" bg-cyan-700">Payment method</div>
          <div className=" bg-orange-300">
            <ConfirmationRental />
          </div>
        </div>
      </div>

    </div>

  )
}
