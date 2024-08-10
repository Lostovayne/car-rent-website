import { usePaymentMain } from "../../../hooks";
import { ConfirmationRental } from "./ConfirmationRental";
import { BillingInfoForm } from "./BillingInfoForm";
import { RentalInfoForm } from "./RentalInfoForm";
import { PaymentMethod } from "./PaymentMethod";

export const PaymentMain = () => {
  const {
    step,
    setStep,
    paymentInfoForm,
    onSubmitBillingInfo,
    onSubmitRentalInfo
  } = usePaymentMain();

  // TODO: Revisar el onclick del select del Time cuando está encima del boton continuar

  return (
    <div className="flex flex-col">
      {step === 1
        && <BillingInfoForm
          defaultValues={paymentInfoForm.billingInfo}
          onSubmit={onSubmitBillingInfo}
        />}
      {step === 2
        && <RentalInfoForm
          defaultValues={paymentInfoForm.rentalInfo}
          onSubmit={onSubmitRentalInfo} 
          setStep={setStep}
        />}
      {step === 3 && <PaymentMethod setStep={setStep} />}
      {step === 4 && <ConfirmationRental />}
    </div>
  );
};
