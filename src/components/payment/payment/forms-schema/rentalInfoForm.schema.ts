import { z } from "zod";

export const schemaRentalInfoForm = z.object({
    pickUpDate: z.date({
        required_error: "A date of birth is required.",
    }),
    pickUpLocation: z.string().min(2).max(50),
    pickUpTime: z.string().min(2).max(50),

    dropOffDate: z.date({
        required_error: "A date of birth is required.",
    }),
    dropOffLocation: z.string().min(2).max(50),
    dropOffTime: z.string().min(2).max(50),
});

export type RentalInfoFormSchema = typeof schemaRentalInfoForm;
