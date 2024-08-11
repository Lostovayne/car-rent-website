import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreditCardSchema, CreditCardSchemaType } from "../../schemas/payment/creditcard.schema";

export const useCreditCardForm = () => {
  const form = useForm<CreditCardSchemaType>({
    resolver: zodResolver(CreditCardSchema),
    defaultValues: {
      cardNumber: "",
      expirationDate: "",
      cardHolder: "",
      cvc: "",
    },
  });

  return (
    form
  )
}
