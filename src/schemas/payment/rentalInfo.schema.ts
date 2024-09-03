import { z } from "zod";

export const RentalInfoSchema = z
  .object({
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
  })
  .refine((data) => data.dropOffDate >= data.pickUpDate, {
    message: "Drop-off date must be greater than or equal to pick-up date.",
    path: ["dropOffDate"], // campo donde se muestra el error
  });

export type RentalInfoSchemaType = z.infer<typeof RentalInfoSchema>;
