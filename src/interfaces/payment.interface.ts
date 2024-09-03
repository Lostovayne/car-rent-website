import { PaymentMethodSchemaType } from "@/schemas/payment/paymentMethod.schema";
import { BillingInfoSchemaType, RentalInfoSchemaType } from "../schemas";

export interface IPaymentInfoForm {
    billingInfo: BillingInfoSchemaType;
    rentalInfo: RentalInfoSchemaType;
    paymenMethodInfo: PaymentMethodSchemaType;
}
