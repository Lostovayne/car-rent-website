import { BillingInfoSchemaType, RentalInfoSchemaType } from "../../../schemas";
import { ConfirmationRental } from "./ConfirmationRental";
import { BillingInfoForm } from "./BillingInfoForm";
import { RentalInfoForm } from "./RentalInfoForm";

export const PaymentMain = () => {
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
    <div className="flex flex-col">
      <div className=" ">
        <BillingInfoForm onSubmit={onSubmitBillingInfo} />
        <RentalInfoForm onSubmit={onSubmitRentalInfo} />
      </div>

      {/* TODO: Pendiente Payment Method */}
      <div className=" bg-cyan-700">Payment method</div>

      <div className="">
        <ConfirmationRental />
      </div>
    </div>
  );
};
