import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../ui/form";
import { CreditCardSchemaType } from "../../../schemas/payment/creditcard.schema";
import { useCreditCard } from "../../../hooks/payment/useCreditCard";
import { SectionCards } from "../../sectionCar/SectionCards";

interface CreditCardFormProps {
  onSubmit: (values: CreditCardSchemaType) => void;
}

export const CreditCardForm: React.FC<CreditCardFormProps> = ({ onSubmit }) => {
  const form = useCreditCard();

  return (
    <section className="bg-card">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <SectionCards className="grid grid-cols-0 sm:grid-cols-2 gap-7">
            <FormField
              control={form.control}
              name="cardNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Card Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Card number" {...field} />
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
                  <FormLabel>Expiration date</FormLabel>
                  <FormControl>
                    <Input placeholder="Expiration date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cardHolder"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Card Holder</FormLabel>
                  <FormControl>
                    <Input placeholder="Card holder" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cvc"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CVC</FormLabel>
                  <FormControl>
                    <Input placeholder="CVC" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </SectionCards>

          <SectionCards className="flex justify-end">
            <Button variant={"default"} type="submit">
              Pagar
            </Button>
          </SectionCards>
        </form>
      </Form>
    </section>
  )
}
