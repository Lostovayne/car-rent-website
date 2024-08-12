import React from 'react';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '../../ui/form';
import { CreditCardSchemaType } from '../../../schemas/payment/creditcard.schema';
import { SectionCards } from '../../sectionCar/SectionCards';
import { Button } from '../../ui/button';
import { useCreditCardForm } from '../../../hooks/payment/useCreditCardForm';

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
              <FormItem>
                <FormLabel>Card Number</FormLabel>
                <FormControl >
                  <input
                    type="text"
                    {...field}
                    placeholder="1234 5678 9012 3456"
                    maxLength={19} // 16 digits + 3 spaces
                    className="input"
                    onChange={(e) => {
                      let value = e.target.value.replace(/\D/g, ''); // Elimina todo lo que no sea dígito
                      value = value.replace(/(.{4})/g, '$1 ').trim(); // Agrega un espacio cada 4 dígitos
                      field.onChange(value); // Actualiza el valor del campo con el valor formateado
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="expirationDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Expiration date (MM/YY)</FormLabel>
                <FormControl>
                  <input type="text" {...field} placeholder="MM/YY" className="input"
                    maxLength={5}
                    onChange={(e) => {
                      let value = e.target.value;
                      // Si el primer dígito del mes es mayor a '1', se añade un '0' al inicio
                      if (value.length === 1 && parseInt(value[0]) > 1) {
                        value = '0' + value + '/';
                      }
                      // Actualiza el valor del campo
                      field.onChange(value);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cvv"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>CVV</FormLabel>
                <FormControl>
                  <input type="text" {...field} placeholder="CVV" className="input" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cardHolderName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Card Holder Name</FormLabel>
                <FormControl>
                  <input type="text" {...field} placeholder="Card Holder Name" className="input" />
                </FormControl>
                <FormMessage />
              </FormItem>
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


