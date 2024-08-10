import { z } from "zod";
import { PAYMENT_METHODS } from "../../constants";

export const PaymentMethodSchema = z.object({
    paymentMethod: z.enum(PAYMENT_METHODS, {
        required_error: "You need to select a method payment.",
    }),
});

export type PaymentMethodSchemaType = z.infer<typeof PaymentMethodSchema>