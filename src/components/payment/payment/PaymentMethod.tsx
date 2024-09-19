import { useState } from "react"
import { PAYMENT_METHODS } from "../../../constants"
import { CreditCardSchemaType } from "../../../schemas/payment/creditcard.schema"
import { PaymentMethodSchemaType } from "../../../schemas/payment/paymentMethod.schema"
import { PaymentMethodForm } from "./PaymentMethodForm"
import { PaymentSectionHeader } from "./PaymentSectionHeader"
import { CreditCardForm } from "./CreditCardForm"

interface PaymentMethodFormProps {
  setStep: React.Dispatch<React.SetStateAction<number>>
  onSubmitPaymentMethodInfo: (values: PaymentMethodSchemaType) => void
  savePayment: (data: CreditCardSchemaType) => void
}

export const PaymentMethod: React.FC<PaymentMethodFormProps> = ({ 
  setStep,
  onSubmitPaymentMethodInfo,
  savePayment
}) => {
  const [paymnentMethod, setPaymnentMethod] = useState<typeof PAYMENT_METHODS[number]>("Credit Card")

  const onSubmitPaymentMethod = (data: PaymentMethodSchemaType) => {
    setPaymnentMethod(data.paymentMethod)
    onSubmitPaymentMethodInfo(data)
  }
  
  const onSubmitCreditCard = (data: CreditCardSchemaType) => {
    console.log('card', data)
    savePayment(data)
  }

  return (
    <section className="bg-card ">
      <PaymentSectionHeader
        title="Payment Method"
        description="Please enter your payment method"
        stepLabel={4}
      />
      <PaymentMethodForm setStep={setStep} onSubmit={onSubmitPaymentMethod} />
      {paymnentMethod === "Credit Card" && <CreditCardForm onSubmit={onSubmitCreditCard} />}
    </section>
  )
}
