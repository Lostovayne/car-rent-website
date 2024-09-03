import { z } from "zod";

const currentYear = new Date().getFullYear();

export const CreditCardSchema = z.object({
  //cardNumber: z.string().min(16, 'El número de tarjeta debe tener 16 dígitos').max(16, 'El número de tarjeta debe tener 16 dígitos'),
  cardNumber: z
    .string()
    .regex(/^\d{4} \d{4} \d{4} \d{4}$/, "El número de la tarjeta debe estar en el formato 1234 5678 9012 3456.")
    .transform((value) => value.replace(/\s/g, "")), // Elimina los espacios para almacenar solo los 16 dígitos
  expirationDate: z.string()
    .regex(/^(0[1-9]|1[0-2])\/(2[1-9]|[1-9]\d)$/, 'Fecha de expiración inválida. Formato: MM/YY')
    .refine((value) => {
      const year = value.split('/').map(Number)[1]??'';
      const fullYear = 2000 + year; // Convertir los últimos dos dígitos a un año completo
      return (fullYear <= currentYear + 7 && fullYear >= currentYear);
    }, {
      message: `The year must not be: ${currentYear} - ${currentYear + 7}`,
    }),
  cvv: z.string().min(3, 'El CVV debe tener 3 dígitos').max(3, 'El CVV debe tener 3 dígitos'),
  cardHolderName: z.string().min(2, 'El nombre del titular es requerido'),
});

export type CreditCardSchemaType = z.infer<typeof CreditCardSchema>;