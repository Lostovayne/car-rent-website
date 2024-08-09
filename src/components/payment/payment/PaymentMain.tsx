import { useState } from "react";
import { BillingInfoSchemaType, RentalInfoSchemaType } from "../../../schemas";
import { ConfirmationRental } from "./ConfirmationRental";
import { BillingInfoForm } from "./BillingInfoForm";
import { RentalInfoForm } from "./RentalInfoForm";
import { PaymentMethod } from "./PaymentMethodForm";

export const PaymentMain = () => {
  const [step, setStep] = useState<number>(1);

  const onSubmitBillingInfo = (values: BillingInfoSchemaType) => {
    setStep((prev) => prev + 1);
    console.log(values);
  }

  const onSubmitRentalInfo = (values: RentalInfoSchemaType) => {
    setStep((prev) => prev + 1);
    console.log(values);
  }

  // TODO: Revisar el onclick del select del Time cuando está encima del boton continuar

  return (
    <div className="flex flex-col">
      {step === 1 && <BillingInfoForm onSubmit={onSubmitBillingInfo} />}
      {step === 2 && <RentalInfoForm onSubmit={onSubmitRentalInfo} setStep={setStep}/>}
      {step === 3 && <PaymentMethod setStep={setStep} />}
      {step === 4 && <ConfirmationRental />}
    </div>
  );
};
