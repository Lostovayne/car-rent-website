import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PaymentMethodSchema, PaymentMethodSchemaType } from "../../schemas/payment/paymentMethod.schema";

export const usePaymentMethod = () => {
  const form = useForm<PaymentMethodSchemaType>({
    resolver: zodResolver(PaymentMethodSchema),
    defaultValues: {
      paymentMethod: "Credit Card"
    },
  });

  return (
    form
  )
}
