import { z } from "zod";

export const CreditCardSchema = z.object({
    cardNumber: z.string().min(16).max(16),
    expirationDate: z.string().min(5).max(5),
    cardHolder: z.string().min(3).max(50),
    cvc: z.string().min(3).max(3),
  });

export type CreditCardSchemaType = z.infer<typeof CreditCardSchema>
    