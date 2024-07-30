import { z } from "zod";

import { RentalSummary } from "./summary/RentalSummary";

import { BillingInfoForm } from "./payment/BillingInfoForm";
import { RentalInfoForm } from "./payment/RentalInfoForm";
import { ConfirmationRental } from "./payment/ConfirmationRental";
import { schemaBillingInfoForm, type BillingInfoFormSchema } from "./payment/forms-schema/billingInfoForm.schema";
import { schemaRentalInfoForm, type RentalInfoFormSchema } from "./payment/forms-schema/rentalInfoForm.schema";
import { dataCarDetails, dataReviews } from "../../data";

// TODO: obtener luego desde donde corresponda
const carDetails = dataCarDetails;


export const PaymentCarRent = () => {
  const averageRating =
    (carDetails.reviews?.reduce((acum, current) => current.rating + acum, 0) ??
      0) / dataReviews.length;
  const totalReviews = carDetails.reviews?.length ?? 0;


  function onSubmitBillingInfo(values: z.infer<BillingInfoFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  function onSubmitRentalInfo(values: z.infer<RentalInfoFormSchema>) {
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
              schema={schemaBillingInfoForm}
              onSubmit={onSubmitBillingInfo}
            />
            <RentalInfoForm
              schema={schemaRentalInfoForm}
              onSubmit={onSubmitRentalInfo}
            />
          </div>
          <div className=" bg-cyan-700">Payment method</div>
          <div className=" bg-orange-300">
            <ConfirmationRental />
          </div>
        </div>
      </div>
    </div>
  );
};
