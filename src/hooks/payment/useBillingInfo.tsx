import { useForm } from "react-hook-form";
import { BillingInfoSchema, BillingInfoSchemaType } from "../../schemas/payment/billingInfo.schema";
import { zodResolver } from "@hookform/resolvers/zod";

export const useBillingInfo = () => {
  const form = useForm<BillingInfoSchemaType>({
    resolver: zodResolver(BillingInfoSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
      address: "",
      city: "",
    },
  });

  return (
    form
  )
}
