import React from 'react';
import {
  Form,
  FormField,
} from '../../ui/form';
import { CreditCardSchemaType } from '../../../schemas/payment/creditcard.schema';
import { SectionCards } from '../../sectionCar/SectionCards';
import { Button } from '../../ui/button';
import { useCreditCardForm } from '../../../hooks/payment/useCreditCardForm';
import { InputFieldForm } from '../../form/InputFieldForm';
import { validateExpirationDate } from '../../../lib/validate-expiration-date';

// Validación de esquema para los campos del formulario


interface CreditCardFormProps {
  onSubmit: (values: CreditCardSchemaType) => void;
}

export const CreditCardForm: React.FC<CreditCardFormProps> = ({ onSubmit }) => {
  const form = useCreditCardForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <SectionCards className="grid grid-cols-0 sm:grid-cols-2 gap-7">
          <FormField
            control={form.control}
            name="cardNumber"
            render={({ field }) => (
              <InputFieldForm
                label="Card Number"
                field={field}
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, '');
                  value = value.replace(/(.{4})/g, '$1 ').trim();
                  field.onChange(value);
                }}
              />
            )}
          />

          <FormField
            control={form.control}
            name="expirationDate"
            render={({ field }) => (
              <InputFieldForm
                label='Expiration Date (MM/YY)'
                field={field}
                placeholder="MM/YY"
                maxLength={5}
                onChange={(e) => {
                  let value = e.target.value;
                  value = validateExpirationDate(value)
                  field.onChange(value);
                }}
              />
            )}
          />

          <FormField
            control={form.control}
            name="cvv"
            render={({ field }) => (
              <InputFieldForm
                label='CVV'
                field={field}
                placeholder="CVV"
                maxLength={3}
              />
            )}
          />

          <FormField
            control={form.control}
            name="cardHolderName"
            render={({ field }) => (
              <InputFieldForm
                label='Card Holder Name'
                field={field}
                placeholder="Card Holder Name"
              />

            )}
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


