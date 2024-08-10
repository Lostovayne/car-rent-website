"use client"

import { Button } from "../../ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form"
import { RadioGroup, RadioGroupItem } from "./../../ui/radio-group"
import { SectionCards } from "../../sectionCar/SectionCards"
import { usePaymentMethod } from "../../../hooks/payment/usePaymentMethod"
import { PaymentMethodSchemaType } from "../../../schemas/payment/paymentMethod.schema"
import { PAYMENT_METHODS } from "../../../constants"

interface PaymentMethodFormProps {
  setStep: React.Dispatch<React.SetStateAction<number>>
  onSubmit: (values: PaymentMethodSchemaType) => void
}

export const PaymentMethodForm: React.FC<PaymentMethodFormProps> = ({ setStep, onSubmit }) => {
  const form = usePaymentMethod()

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
              <FormItem className="space-y-3">
                <FormControl>
                  <RadioGroup
                    onValueChange={(value) => {
                      field.onChange(value)
                      form.handleSubmit(onSubmit)();
                    }}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    {
                      PAYMENT_METHODS.map((method) => (
                        <FormItem key={method} className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value={method} />
                          </FormControl>
                          <FormLabel className="font-normal w-full">
                            <PaymentMethod method={method} />
                          </FormLabel>
                        </FormItem>
                      ))
                    }
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
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


const PaymentMethod: React.FC<{ method: typeof PAYMENT_METHODS[number] }> = ({ method }) => {
  return (
    <div className="flex items-center justify-between">
      {method}
      {
        method === "Credit Card"
        && <div className="flex gap-5">
          <img src="/assets/icons/visa.svg" alt="Visa Icon" width={28} height={28} />
          <img src="/assets/icons/mastercard.svg" alt="MasterCard Icon" width={28} height={28} />
        </div>
      }
      {
        method === "Paypal"
        && <img src="/assets/icons/paypal.svg" alt="Visa Icon" width={20} height={20} />
      }
      {
        method === "Bitcoin"
        && <img src="/assets/icons/bitcoin.svg" alt="Visa Icon" width={20} height={20} />
      }
    </div>
  )
}