import { useForm } from "react-hook-form";
import { BillingInfoSchema, BillingInfoSchemaType } from "../../schemas/payment/billingInfo.schema";
import { zodResolver } from "@hookform/resolvers/zod";

export const useBillingInfo = (defaultValues: BillingInfoSchemaType) => {
  const form = useForm<BillingInfoSchemaType>({
    resolver: zodResolver(BillingInfoSchema),
    defaultValues,
  });

  return (
    form
  )
}
