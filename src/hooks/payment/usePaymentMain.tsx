import { useState } from "react";
import { IPaymentInfoForm } from "../../interfaces";
import { BillingInfoSchemaType, RentalInfoSchemaType } from "../../schemas";
import { PaymentMethodSchemaType } from "@/schemas/payment/paymentMethod.schema";

const initialStatePaymentInfoForm: IPaymentInfoForm = {
  billingInfo: {
    name: "",
    address: "",
    city: "",
    phoneNumber: ""
  },
  rentalInfo: {
    pickUpDate: new Date(),
    pickUpLocation: "",
    pickUpTime: "",
    dropOffDate: new Date(),
    dropOffLocation: "",
    dropOffTime: ""
  },
  paymenMethodInfo: {
    paymentMethod: "Credit Card"
  },

}

export const usePaymentMain = () => {
  const [step, setStep] = useState<number>(1);
  const [paymentInfoForm, setPaymentInfoForm] = useState<IPaymentInfoForm>(initialStatePaymentInfoForm)

  const onSubmitBillingInfo = (values: BillingInfoSchemaType) => {
    setPaymentInfoForm({ ...paymentInfoForm, billingInfo: values })
    setStep((prev) => prev + 1);
    console.log(values);
  }

  const onSubmitRentalInfo = (values: RentalInfoSchemaType) => {
    setPaymentInfoForm({ ...paymentInfoForm, rentalInfo: values })
    setStep((prev) => prev + 1);
    console.log(values);
  }

  const onSubmitPaymentMethodInfo = (values: PaymentMethodSchemaType) => {
    setPaymentInfoForm({ ...paymentInfoForm, paymenMethodInfo: values })
    console.log('submitUse', values, step);
  }


  return {
    step,
    setStep,
    paymentInfoForm,
    onSubmitBillingInfo,
    onSubmitRentalInfo,
    onSubmitPaymentMethodInfo,
  }
}