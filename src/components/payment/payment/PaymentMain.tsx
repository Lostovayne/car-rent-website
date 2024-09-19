import { usePaymentMain } from "../../../hooks";
import { ConfirmationRental } from "./ConfirmationRental";
import { BillingInfoForm } from "./BillingInfoForm";
import { RentalInfoForm } from "./RentalInfoForm";
import { PaymentMethod } from "./PaymentMethod";
import { CreditCardSchemaType } from "@/schemas/payment/creditcard.schema";

export const PaymentMain = () => {
  const {
    step,
    setStep,
    paymentInfoForm,
    onSubmitBillingInfo,
    onSubmitRentalInfo,
    onSubmitPaymentMethodInfo,
  } = usePaymentMain();

  // TODO: Revisar el onclick del select del Time cuando está encima del boton continuar

  const savePayment = (card: CreditCardSchemaType) => {
    console.log('savePayment', paymentInfoForm, card);
  }

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
      {step === 3
        && <ConfirmationRental
          values={paymentInfoForm}
          setStep={setStep}
        />}
      {step === 4
        && <PaymentMethod 
          setStep={setStep}
          onSubmitPaymentMethodInfo={onSubmitPaymentMethodInfo}
          savePayment={(data) => savePayment(data)}
        />}

    </div>
  );
};

