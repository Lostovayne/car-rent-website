import { Button } from "../../ui/button";
import { Form, FormField } from "../../ui/form";
import { BillingInfoSchemaType } from "../../../schemas";
import { useBillingInfoForm } from "../../../hooks";
import { SectionCards } from "../../sectionCar/SectionCards";
import { PaymentSectionHeader } from "./PaymentSectionHeader";
import { InputFieldForm } from "@/components/form/InputFieldForm";

interface BillingInfoFormProps {
  defaultValues: BillingInfoSchemaType;
  onSubmit: (values: BillingInfoSchemaType) => void;
}

export const BillingInfoForm: React.FC<BillingInfoFormProps> = ({ defaultValues, onSubmit }) => {
  const form = useBillingInfoForm(defaultValues);

  return (
    <section className="bg-card">
      <PaymentSectionHeader title="Billing Info" description="Please enter your billing info" stepLabel={1} />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <SectionCards className="grid grid-cols-0 sm:grid-cols-2 gap-7">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) =>
                <InputFieldForm field={field} label="Name" placeholder="Your name" />
              }
            />

            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) =>
                <InputFieldForm field={field} label="Phone Number" placeholder="Your phone number" />
              }
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <InputFieldForm field={field} label="Address" placeholder="Your address"/>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <InputFieldForm field={field} label="City" placeholder="Your city"/>
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
