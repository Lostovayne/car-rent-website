import { z } from "zod";

export const schemaBillingInfoForm = z.object({
    name: z.string().min(2).max(50),
    phoneNumber: z.string(),
    address: z.string().min(3).max(50),
    city: z.string().min(3).max(30),
  });

export type BillingInfoFormSchema = typeof schemaBillingInfoForm;
    