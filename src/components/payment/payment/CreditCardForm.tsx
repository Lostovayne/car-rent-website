import { useCreditCardForm } from '@/hooks/payment/useCreditCardForm';
import { CreditCardSchemaType } from '@/schemas/payment/creditcard.schema';
import { validateExpirationDate } from '@/lib/validate-expiration-date';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { InputFieldForm } from '@/components/form/InputFieldForm';
import { SectionCards } from '@/components/sectionCar/SectionCards';

interface CreditCardFormProps {
  onSubmit: (values: CreditCardSchemaType) => void;
}


export const CreditCardForm: React.FC<CreditCardFormProps> = ({ onSubmit }) => {
  const form = useCreditCardForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <SectionCards className="grid grid-cols-0 sm:grid-cols-2 gap-7">

          <InputFieldForm
            control={form.control}
            name="cardNumber"
            label="Card Number"
            placeholder="1234 5678 9012 3456"
            maxLength={19}
            onChange={(e) => {
              let value = e.target.value.replace(/\D/g, '');
              value = value.replace(/(.{4})/g, '$1 ').trim();
              form.setValue('cardNumber', value);
              //form.getValues('cardNumber').onChange(value);
            }}
            autoFocus

          />

          <InputFieldForm
            control={form.control}
            name="expirationDate"
            label='Expiration Date (MM/YY)'
            placeholder="MM/YY"
            maxLength={5}
            onChange={(e) => {
              let value = e.target.value;
              value = validateExpirationDate(value)
              form.setValue('expirationDate', value)
            }}
          />

          <InputFieldForm
            control={form.control}
            name="cvv"
            label='CVV'
            placeholder="CVV"
            maxLength={3}
          />

          <InputFieldForm
            control={form.control}
            name="cardHolderName"
            label='Card Holder Name'
            placeholder="Card Holder Name"
          />

        </SectionCards>

        <SectionCards className="flex justify-end">
          <Button variant={"default"} type="submit">
            Pay
          </Button>
        </SectionCards>
      </form>
    </Form>
  );
};


