import { usePaymentMethodForm } from "@/hooks/payment/usePaymentMethodForm"
import { PaymentMethodSchemaType } from "@/schemas/payment/paymentMethod.schema"
import { Button } from "@/components/ui/button"
import { Form, FormField } from "@/components/ui/form"
import { SectionCards } from "@/components/sectionCar/SectionCards"
import { PAYMENT_METHODS } from "@/constants"
import { RadioGroupFieldForm } from "@/components/form/RadioGroupFieldForm"

interface PaymentMethodFormProps {
  setStep: React.Dispatch<React.SetStateAction<number>>
  onSubmit: (values: PaymentMethodSchemaType) => void
}
const paymentMethods = PAYMENT_METHODS.map((method) => ({ id: method.toLowerCase(), description: method }))


export const PaymentMethodForm: React.FC<PaymentMethodFormProps> = ({ setStep, onSubmit }) => {
  const form = usePaymentMethodForm()

  const onClickPrevious = () => {
    setStep((prev) => prev - 1)
  }

  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} >
        <SectionCards className="grid grid-cols-0 sm:grid-cols-2 gap-7">
          <FormField
            control={form.control}
            name="paymentMethod"
            render={({ field }) => (
              <RadioGroupFieldForm
                data={paymentMethods}
                onValueChange={(value) => {
                  field.onChange(value)
                  form.handleSubmit(onSubmit)();
                }}
                defaultValue={field.value}
                action={({ value }) => {
                  return <ShowPaymentMethod value={value} />;
                }}
              />
            )}
          />
        </SectionCards>

        <SectionCards className="flex justify-end gap-7 ">
          <Button variant={"link"} type="button" onClick={onClickPrevious}>Regresar</Button>
          {/* <Button variant={"default"} type="submit">Continuar</Button> */}
        </SectionCards>

      </form>
    </Form>
  )
}


const ShowPaymentMethod: React.FC<{ value: string }> = ({ value }) => {
  return (
    <div className="flex items-center justify-between">
      {value}
      {
        value === "Credit Card"
        && <div className="flex gap-5">
          <img src="/assets/icons/visa.svg" alt="Visa Icon" width={28} height={28} />
          <img src="/assets/icons/mastercard.svg" alt="MasterCard Icon" width={28} height={28} />
        </div>
      }
      {
        value === "Paypal" && <img src="/assets/icons/paypal.svg" alt="Visa Icon" width={20} height={20} />
      }
      {
        value === "Bitcoin" && <img src="/assets/icons/bitcoin.svg" alt="Visa Icon" width={20} height={20} />
      }
    </div>
  )
}