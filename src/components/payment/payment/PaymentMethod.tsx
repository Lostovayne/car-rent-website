import { PaymentMethodSchemaType } from "../../../schemas/payment/paymentMethod.schema"
import { PaymentMethodForm } from "./PaymentMethodForm"
import { PaymentSectionHeader } from "./PaymentSectionHeader"

interface PaymentMethodFormProps {
  setStep: React.Dispatch<React.SetStateAction<number>>
}


export const PaymentMethod: React.FC<PaymentMethodFormProps> = ({setStep}) => {
  
  const onSubmitPaymentMethod = (data: PaymentMethodSchemaType) => {
    console.log({ data })
  }

  return (
    <section className="bg-card ">
      <PaymentSectionHeader title="Payment Method" description="Please enter your payment method" stepLabel={3} />

      <PaymentMethodForm setStep={setStep} onSubmit={onSubmitPaymentMethod} />     
      
    </section>

  )
}
