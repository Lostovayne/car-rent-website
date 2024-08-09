import { SectionCards } from "../../sectionCar/SectionCards"
import { Button } from "../../ui/button"
import { PaymentSectionHeader } from "./PaymentSectionHeader"

interface PaymentMethodFormProps {
  //onSubmit: (values: RentalInfoSchemaType) => void
  setStep: React.Dispatch<React.SetStateAction<number>>
}


export const PaymentMethod: React.FC<PaymentMethodFormProps> = ({setStep}) => {
  const onClickPrevious = () => {
    setStep((prev) => prev - 1)
  }

  return (
    <section className="bg-card">
      <PaymentSectionHeader title="Payment Method" description="Please enter your payment method" stepLabel={3} />

      <SectionCards className="flex justify-end gap-7">
        <Button variant={"link"} type="button" onClick={onClickPrevious}>Regresar</Button>
        <Button variant={"default"} type="submit">Continuar</Button>
      </SectionCards>
    </section>

  )
}
