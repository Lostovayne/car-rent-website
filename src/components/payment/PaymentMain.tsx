import { RentalSummary } from "./summary/RentalSummary";
import { BillingInfoForm } from "./payment/BillingInfoForm";
import { RentalInfoForm } from "./payment/RentalInfoForm";
import { ConfirmationRental } from "./payment/ConfirmationRental";
import type { BillingInfoSchemaType, RentalInfoSchemaType } from "../../schemas";
import { dataCarDetails, dataReviews } from "../../data";


// TODO: obtener luego desde donde corresponda
const carDetails = dataCarDetails;

export const PaymentMain = () => {
  const averageRating =
    (carDetails.reviews?.reduce((acum, current) => current.rating + acum, 0) ?? 0) / dataReviews.length;
  const totalReviews = carDetails.reviews?.length ?? 0;

  const onSubmitBillingInfo = (values: BillingInfoSchemaType) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const onSubmitRentalInfo = (values: RentalInfoSchemaType) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }


  // TODO: navegar entre secciones del formulario (agregar state para deshabilitar seccion entre continuar/regresar)
  // TODO: ver el onclick del select del Time cuando está encima del boton continuar

  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-5 gap-2 container">
      {/* rental summary */}
      <div className="col-span-2 order-first md:order-last">
        <RentalSummary
          car={carDetails}
          carReviews={{
            total: totalReviews,
            averageRating: averageRating,
          }}
        />
      </div>

      {/* payment */}
      <div className="col-span-3">
        <div className="flex flex-col">
          <div className=" ">
            <BillingInfoForm
              onSubmit={onSubmitBillingInfo}
            />
            <RentalInfoForm
              onSubmit={onSubmitRentalInfo}
            />
          </div>
          
          {/* TODO: Pendiente Payment Method */}
          <div className=" bg-cyan-700">Payment method</div>
          
          <div className="">
            <ConfirmationRental />
          </div>
        </div>
      </div>
    </div>
  );
};
