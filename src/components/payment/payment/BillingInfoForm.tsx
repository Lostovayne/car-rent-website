import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../ui/form";
import { BillingInfoSchemaType } from "../../../schemas";
import { useBillingInfo } from "../../../hooks";
import { SectionCards } from "../../sectionCar/SectionCards";
import { PaymentSectionHeader } from "./PaymentSectionHeader";

interface BillingInfoFormProps {
  onSubmit: (values: BillingInfoSchemaType) => void;
}

export const BillingInfoForm: React.FC<BillingInfoFormProps> = ({ onSubmit }) => {
  const form = useBillingInfo();

  return (
    <section className="bg-card">
      <PaymentSectionHeader title="Billing Info" description="Please enter your billing info" stepLabel={1} />
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>

          <SectionCards className="grid grid-cols-0 sm:grid-cols-2 gap-7">
            {/* name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* phone number */}
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* address */}
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* town/city */}
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="City" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </SectionCards>

          <SectionCards className="flex justify-end">
            <Button variant={"default"} type="submit">
              Continuar
            </Button>
          </SectionCards>
        </form>
      </Form>
    </section>
  );
};
